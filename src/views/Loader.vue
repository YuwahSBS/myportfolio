<!-- components/Loader.vue -->
<template>
<div class="loader"></div>
</template>

<style scoped>
body {
	margin: 0px;
	/* background: radial-gradient(#CECECE, #fff); */
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
    background-color: #29a5873d !important;
}
.container {
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background: linear-gradient(165deg, rgba(255,255,255,1) 0%, rgb(220, 220, 220) 40%, rgb(170, 170, 170) 98%, rgb(10, 10, 10) 100%);
	position: relative;
}
.loader {
	
}

.loader:before {
	position: absolute;
	content: '';
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border-bottom: 0 solid #ffffff05;
	
	box-shadow: 
		0 -10px 20px 20px #ffffff40 inset,
		0 -5px 15px 10px #ffffff50 inset,
		0 -2px 5px #ffffff80 inset,
		0 -3px 2px #ffffffBB inset,
		0 2px 0px #ffffff,
		0 2px 3px #ffffff,
		0 5px 5px #ffffff90,
		0 10px 15px #ffffff60,
		0 10px 20px 20px #ffffff40;
	filter: blur(3px);
	animation: 2s rotate linear infinite;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
}

@keyframes rotate {
	100% {
		transform: rotate(360deg)
	}
}
</style>