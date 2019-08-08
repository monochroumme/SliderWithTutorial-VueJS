<template>
	<div id="tut-bg">
		<div class="step" v-for="step in steps" :id="'step' + step.index" :key="step.index" :style="step.style">
			<div class="step-count">
				<span>{{ step.index }} / {{ targets.length }}</span>
			</div>
			<div class="step-text">
				<span>{{ step.text }}</span>
			</div>
			<div class="step-next">
				<button @click="next">Далее</button>
			</div>
			<div class="step-skip">
				<span @click="skip">пропустить</span>
			</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	export default {
		data() {
			return {
				currentTargetIndex: -1,
				targetsDesktop: [
					{
						id: 'content__right',
						text: `Введите вдрес картинки в белое текстовое поле`
					},
					{
						id: 'content__right',
						text: 'После, нажите красную кнопку, чтобы добавить картинку в слайдер'
					},
					{
						id: 'content__left',
						text: 'Можно увидеть новую картинку'
					}
				],
				targetsMobile: [
					{
						id: 'form',
						text: `Введите вдрес картинки в белое текстовое поле`
					},
					{
						id: 'add',
						text: 'После, нажите красную кнопку, чтобы добавить картинку в слайдер'
					},
					{
						id: '',
						text: 'Можно увидеть новую картинку'
					}
				],
				targets: []
			};
		},

		mounted() {
			this.next();
			this.steps;
		},

		methods: {
			next() {
				this.currentTargetIndex++;

				if (window.innerWidth > 768) { // DESKTOP
					if (this.currentTargetIndex != 0) {
						let prevTarget = document.getElementById(this.targetsDesktop[this.currentTargetIndex-1].id);
						prevTarget.classList.remove("z-index-100");
					}

					if (this.currentTargetIndex < this.targetsDesktop.length) {
						let target = document.getElementById(this.targetsDesktop[this.currentTargetIndex].id);
						target.classList.add("z-index-100");
					} else {
						this.currentTargetIndex--;
						this.skip();
						return;
					}
				} else { // MOBILE
					if (this.currentTargetIndex != 0 && this.targetsMobile[this.currentTargetIndex-1].id !== '') {
						let prevTarget = document.getElementById(this.targetsMobile[this.currentTargetIndex-1].id);
						prevTarget.classList.remove("z-index-100");
					}

					if (this.currentTargetIndex < this.targetsMobile.length) {
						if (this.targetsMobile[this.currentTargetIndex].id !== '') {
							let target = document.getElementById(this.targetsMobile[this.currentTargetIndex].id);
							target.classList.add("z-index-100");
						}
					} else {
						this.currentTargetIndex--;
						this.skip();
						return;
					}
				}

				let prevStep = document.getElementById(`step${this.currentTargetIndex}`);
				let nextStep = document.getElementById(`step${this.currentTargetIndex+1}`);
				if (prevStep)
					prevStep.style.display = "none";
				nextStep.style.display = "flex";
			},

			skip() {
				if (window.innerWidth > 768) { // DEKSTOP
					let target = document.getElementById(this.targetsDesktop[this.currentTargetIndex].id);
					target.classList.remove("z-index-100");
				} else { // MOBILE
					if (this.targetsDesktop[this.currentTargetIndex].id !== '') {
						let target = document.getElementById(this.targetsDesktop[this.currentTargetIndex].id);
						target.classList.remove("z-index-100");
					}
				}
				let tut = document.getElementById("tut-bg");
				tut.style.display = "none";
			}
		},

		computed: {
			steps() {
				let allSteps = [], step;
				this.targets = window.innerWidth > 768 ? this.targetsDesktop : this.targetsMobile;

				for (let i = 0; i < this.targets.length; i++) {
					step = {
						index: i + 1,
						text: this.targets[i].text,
						style: `
							display: ${i == 0 ? 'flex' : 'none'};
						`
					};
					allSteps.push(step);
				}

				return allSteps;
			}
		}
	}
</script>

<style lang="stylus">
#tut-bg
	position fixed
	display flex
	justify-content center
	align-items center
	background-color rgba(0,0,0, 0.75)
	z-index 99
	top 0
	width 100%
	height 100%
	transition all .5s linear
	
.step
	display flex
	flex-direction column
	color white
	position absolute
	z-index 101
	font-size vw(18)
	
.step-count
	position relative

.step-count::before
	content ''
	position absolute
	width vw(200)
	height vw(1)
	background #fff
	top 4vh
	z-index 101
	
.step-text
	margin vw(22) 0
	
.step-skip
	margin-top vw(18)
	text-decoration underline
	cursor pointer
	font-size vw(14)
	
.step-next
	button
		background-color #fc3030
		padding vw(10) vw(30)
		border 0
		cursor pointer
		color white
		border-radius vw(3)
		font-size vw(18)
		
#step1
	text-align right
	width 17vw
	right vw(210)
	top vw(200)
	
#step2
	text-align right
	width 25vw
	right vw(210)
	bottom vw(4)
	
#step3
	width 12vw
	right vw(8)
	
#step3
	.step-count::before
		left vw(-100)
		
@media (max-width:768px)
	.step-count::before
		left vw(300) !important
		top vw(120)
		height vw(10)
		width vw(500)
	
	#step1, #step2, #step3
		right unset
		bottom unset
		top unset
		text-align center
		width auto
		padding 0 vw(100)
		button
			font-size vw(90)
			padding vw(30) vw(120)
			border-radius vw(15)
			margin-bottom vw(30)
	
	.step
		font-size vw(90)
		
	.step-skip
		font-size vw(55)
		
	.step-text
		margin vw(90) 0
</style>