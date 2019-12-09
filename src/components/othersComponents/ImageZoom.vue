<template>
    <div class="row">
        <div style="width: 300px; background-color: #f4f4f5; padding: 8px; border-radius: 5px;">
            <div class="top-panel">
                <el-checkbox v-model="show" @change="openLens">Линза</el-checkbox>
                <!--<input id="file-input"
                       type="file"
                       style="display: none;"
                       @change="imageDownload"/>
                <el-tooltip class="item"
                            effect="light"
                            content="Выбрать фото"
                            placement="bottom">
                    <label for="file-input"
                           class="download-image">+</label>
                </el-tooltip>-->
            </div>
            <div class="img-zoom-container">
                <div v-show="!show" style="height: 42px;"></div>
                <div v-show="show"
                     id="lens"
                     class="img-zoom-lens"></div>
                <img id="imageInitial"
                     src="../../assets/images/zoom.jpeg"
                     width="300"
                     height="240"
                     alt="Картинка">
                <div id="imageZoom"
                     class="img-zoom-result"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageZoom",
        data() {
            return {
                content: null,
                file: null,
                show: false,
            }
        },
        computed: {

        },
        methods: {
            imageDownload(e) {
                e.preventDefault();
                this.selectImage(e.target.files[0]);
            },
            selectImage (file) {
                this.file = file;
                let reader = new FileReader();
                reader.onload = this.onImageLoad;
                reader.readAsDataURL(file);
            },
            onImageLoad (e) {
                this.content = e.target.result;
                let filename = this.file instanceof File ? this.file.name : '';
                console.log('input', filename);
                console.log('image-changed', this.content);
            },
            openLens() {
                this.show && this.imageZoom("imageInitial", "imageZoom");
            },
            async imageZoom(imgID, resultID) {
                let img, lens, result, cx, cy;
                img = await document.getElementById(imgID);
                result = await document.getElementById(resultID);
                lens = await document.getElementById("lens");
                /* Вычисляет соотношение между результатом DIV и линзой */
                cx = result.offsetWidth / lens.offsetWidth;
                cy = result.offsetHeight / lens.offsetHeight;
                /* Отображает увеличенную картинку */
                result.style.backgroundImage = "url('" + img.src + "')";
                result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
                /* Обработчик для мыши */
                lens.addEventListener("mousemove", moveLens);
                img.addEventListener("mousemove", moveLens);
                function moveLens(e) {
                    let pos, x, y;
                    e.preventDefault();
                    /* Координаты курсора */
                    pos = getCursorPos(e);
                    /* Координаты линзы */
                    x = pos.x - ( lens.offsetWidth / 2 );
                    y = pos.y - ( lens.offsetHeight / 2 );
                    /* Отслежтвает положение курсора над картинкой */
                    if (x > img.width - lens.offsetWidth) {
                        x = img.width - lens.offsetWidth;
                    }
                    if (x < 0) {
                        x = 0;
                    }
                    if (y > img.height - lens.offsetHeight) {
                        y = img.height - lens.offsetHeight;
                    }
                    if (y < 0) {
                        y = 0;
                    }
                    /* Устанавливает координаты линзы */
                    lens.style.left = x + "px";
                    lens.style.top = (y + 40) + "px";
                    /* Отображение увеличенной области */
                    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
                }
                function getCursorPos(e) {
                    let a, x = 0, y = 0;
                    e = e || window.event;
                    /* Координаты картинки */
                    a = img.getBoundingClientRect();
                    /* Считает координаты курсора */
                    x = e.pageX - a.left;
                    y = e.pageY - a.top;
                    /* При прокрутке страницы */
                    x = x - window.pageXOffset;
                    y = y - window.pageYOffset;
                    return { x : x, y : y };
                }
            }
        }
    }
</script>

<style scoped>
    .download-image {
        background-color: #67C23A;
        width: 24px;
        height: 24px;
        margin: 0 16px;
        border-radius: 16px;
        cursor: pointer;
        color: #fff;
        outline: none;
    }
    .img-zoom-container {
        position: relative;
        width: 300px;
    }
    .img-zoom-lens {
        position: relative;
        z-index: 1;
        border: 1px solid #d4d4d4;
        border-radius: 22px;
        width: 40px;
        height: 40px;
    }
    .img-zoom-result {
        border: 1px solid #d4d4d4;
        /*set the size of the result div:*/
        width: 300px;
        height: 300px;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 8px 0;
        /*height: calc(100vh - 40px);*/
    }
    .top-panel {
        display: flex;
        flex-direction: row;
        height: 40px;
    }
</style>
