<template>
    <div class="row">
        <div class="wrap">
            <div class="top-panel">
                <el-checkbox v-model="show" @change="openLens">Линза</el-checkbox>
                <input id="file-input"
                       type="file"
                       style="display: none;"
                       @change="imageDownload"/>
                <el-tooltip class="item"
                            effect="light"
                            content="Выбрать фото"
                            placement="bottom">
                    <label for="file-input"
                           class="download-image">Загрузка фото</label>
                </el-tooltip>
            </div>
            <div class="image-zoom-container">
                <div v-show="!show"
                     style="height: 42px;"></div>
                <div v-show="show"
                     id="lens"
                     class="image-zoom-lens"></div>
                <img id="imageInitial"
                     :src="`${photo}`"
                     width="300"
                     height="240"
                     class="image-properties">
                <div v-if="!show" class="image-empty">
                    <img src="../../assets/images/image-empty.jpg"
                         class="image-properties">
                </div>
                <div v-else
                     id="imageZoom"
                     class="image-zoom-result"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageZoom",
        data() {
            return {
                content: require('../../assets/images/image-empty.jpg'),
                file: null,
                show: false,
            }
        },
        computed: {
            photo() {
                return this.content;
            }
        },
        methods: {
            async imageDownload(e) {
                e.preventDefault();
                await this.selectImage(e.target.files[0]);
                await this.imageZoom("imageInitial", "imageZoom");
                this.show = false;
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
                // console.log('input', filename);
                // console.log('image-changed', this.content);
            },
            openLens() {
                this.show && this.imageZoom("imageInitial", "imageZoom");
            },
            async deleteListener() {
                let img, lens, result;
                img = await document.getElementById("imageInitial");
                result = await document.getElementById("imageZoom");

            },
            async imageZoom(imgID, resultID) {
                let img, lens, result, cx, cy;
                img = await document.getElementById(imgID);
                result = await document.getElementById(resultID);
                lens = await document.getElementById("lens");
                /* Вычисляет соотношение между результатом DIV и линзой */
                if(!!result) {
                    cx = result.offsetWidth / lens.offsetWidth;
                    cy = result.offsetHeight / lens.offsetHeight;
                    /* Отображает увеличенную картинку */
                    result.style.backgroundImage = "url('" + img.src + "')";
                    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
                    /* Обработчик для мыши */
                    lens.addEventListener("mousemove", moveLens);
                    img.addEventListener("mousemove", moveLens);
                }
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
        width: 144px;
        height: 24px;
        margin: 0 16px;
        border-radius: 16px;
        cursor: pointer;
        color: #fff;
        outline: none;
        font-size: 12px;
        line-height: 24px;
    }
    .image-empty {
        width: 300px;
        height: 240px;
        line-height: 240px;
    }
    .image-properties {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 8px;
    }
    .image-zoom-container {
        position: relative;
        width: 300px;
    }
    .image-zoom-lens {
        position: relative;
        z-index: 1;
        border: 1px solid #d4d4d4;
        border-radius: 22px;
        width: 40px;
        height: 40px;
    }
    .image-zoom-result {
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
    .wrap {
        width: 300px;
        background-color: #f4f4f5;
        padding: 8px;
        border-radius: 5px;
    }
</style>
