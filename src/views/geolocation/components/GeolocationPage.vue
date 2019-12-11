<template>
    <div>
        <p id="result">Где вы сейчас?</p>
        <div id="mapSurface"></div>
    </div>
</template>

<script>
    /*let map;*/
    export default {
        name: 'GeolocationPage',
        mounted() {
            this.geoFindMe();
        },
        methods: {
            geoFindMe() {
                let result = document.getElementById('result');
                // Пытаемся определить местоположение пользователя
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        this.geolocationSuccess);

                    result.innerHTML = "Поиск завершен";
                }
                else {
                    result.innerHTML = "Ваш браузер не поддерживает геолокацию";
                }
            },
            geolocationSuccess(position) {
                // Устанавливаем некоторые параметры карты. В данном примере
                // устанавливаются начальный уровень масштабирования и тип карты.
                // Информацию о других параметрах см. в документации по Google Maps.
                let myOptions = {
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                // Создаем карту, используя установленные выше параметры
                let map = new google.maps.Map(document.getElementById("mapSurface"), myOptions);
                // Преобразуем местоположение в объект LatLng
                let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                try {
                    // Отображаем эту точку на карте
                    map.setCenter(location);
                    // Создаем всплывающее информационное окно и устанавливаем
                    // его текст и положение на карте.
                    let infowindow = new google.maps.InfoWindow();
                    infowindow.setContent("Вы либо ваш прокси-сервер находитесь где-то в этом районе.");
                    infowindow.setPosition(location);

                    // Отображаем всплывающее окно
                    infowindow.open(map);
                } catch(e) {
                    console.log(e);
                }

            }
        }
  }
</script>

<style scoped>
    #mapSurface {
        margin: auto;
        width: 600px;
        height: 400px;
        border: solid 1px black;
    }
</style>
