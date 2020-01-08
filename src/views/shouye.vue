<template>
	<div id="shouye">
		<heads class="head"></heads>
		<loop :loopArr="loopArr" style="margin-top: 0.45rem;"></loop>
		<div class="shops">
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">京东超市</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">全球购</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">服装城</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">京东生鲜</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">京东到家</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">京东超市</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">全球购</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">服装城</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">京东生鲜</router-link></dd>
			</dl>
			<dl>
				<dt></dt>
				<dd><router-link class="as" to="#">京东到家</router-link></dd>
			</dl>
		</div>
		<div class="jd-fast">
			<div class="left">
				京东<span>快报</span>
				雪山旗舰店入住京东全球购
			</div>
			<div class="right">
				<router-link to="#" class="as">更多</router-link>
			</div>
		</div>
		<div class="kill">
			<div class="top">
				<span class="red">
					京东秒杀
				</span>
				<span class="title">14点场</span>
				<router-link to="#" class="red title qiang">
					51慢行快秒好货 >
				</router-link>
			</div>
			<div class="con">
				<div class="conno">
					<dl v-for="(e,i) in hero" :key="i">
						<dt><router-link to="#"><img :src="e"></router-link></dt>
						<dd class="xian red">￥4898</dd>
						<dd class="yuan">￥5300</dd>
					</dl>
				</div>
			</div>
		</div>
		<loop :loopArr="loopArr"></loop>
		<div class="find-goods">
				<dl>
					<dt>
						<p class="title">
							发现好货
						</p>
						<p class="tip">
							发现品质生活
						</p>
					</dt>
					<dd>
						<img src="img/jd/1.jpg">
					</dd>
				</dl>
				<dl>
					<dt>
						<p class="title">
							发现好货
						</p>
						<p class="tip">
							发现品质生活
						</p>
					</dt>
					<dd>
						<img src="img/jd/1.jpg">
					</dd>
				</dl>
				<dl>
					<dt>
						<p class="title">
							发现好货
						</p>
						<p class="tip">
							发现品质生活
						</p>
					</dt>
					<dd>
						<img src="img/jd/1.jpg">
					</dd>
				</dl>
				<dl>
					<dt>
						<p class="title">
							发现好货
						</p>
						<p class="tip">
							发现品质生活
						</p>
					</dt>
					<dd>
						<img src="img/jd/1.jpg">
					</dd>
				</dl>
				<dl>
					<dt>
						<p class="title">
							发现好货
						</p>
						<p class="tip">
							发现品质生活
						</p>
					</dt>
					<dd>
						<img src="img/jd/1.jpg">
					</dd>
				</dl>
				<dl>
					<dt>
						<p class="title">
							发现好货
						</p>
						<p class="tip">
							发现品质生活
						</p>
					</dt>
					<dd>
						<img src="img/jd/1.jpg">
					</dd>
				</dl>
		</div>
		<div style="clear: both;"></div>
		<love></love>
		<loop :loopArr="brid"></loop>
		<love></love>
		<div class="like">
			<dl v-for="(e,i) in arrss" :key="i">
				<dt>
					<img src="img/jd/hero1.png">
				</dt>
				<dd>
					<p class="like-desc">
						亲啊行者游戏背光发光牧马人机械键盘鼠标套装优先网吧电子设备
					</p>
					<p><span class="like-price">￥28.50</span><router-link to="#" class="like-like as">看相似</router-link></p>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	import loop from "../components/loop.vue"
	import heads from "../components/header.vue"
	import love from '../components/love.vue'
	export default {
		name: "shouye",
		components: {
			loop,heads,love
		},
		data() {
			return {
				loopArr: ["img/jd/1.jpg", "img/jd/2.jpg", "img/jd/3.jpg", "img/jd/4.jpg", "img/jd/5.jpg"],
				hero:["img/jd/hero1.png","img/jd/hero2.png","img/jd/hero3.png","img/jd/hero4.png","img/jd/hero5.png"],
				brid:['img/jd/5.png','img/jd/6.png','img/jd/7.png','img/jd/8.png'],
				arrss: [1,2,3,4,5,6],
			}
		}
	}
</script>

<style lang="less">
	#shouye {
		margin-bottom: 600px;
	}
	.red {
		color: rgba(241, 55, 55, 1);
	}
	.title {
		font-size: 12px;
	}
	.as {
		color: #000;
	}
	.shops {
		width: 100%;
		height: 1.68rem;
		display:flex;
		flex: 1;
		// flex-wrap:wrap;
		flex-flow: row wrap;
		justify-content:space-around;
		dl {
			flex: 0 0 18%;
			// flex: 1;
			width: 0.54rem;
			text-align: center;
			dt {
				width: 0.4rem;
				height: 0.4rem;
				margin: 0 auto;
				margin-bottom: 7px;
			}
			dd {
				width: 100%;
				line-height: 0.17rem;
				font-size: 12px;
				font-family: PingFangSC-regular;
				.as {
					color: #000;
				}
			}
		}
	}

	.jd-fast {
		width: 100%;
		height: 0.5rem;
		padding: 0.1rem;
		line-height: 0.3rem;
		color: rgba(51, 51, 51, 1);
		background: rgba(240,240,240,1);
		font-size: 13px;
		font-family: PingFangSC-regular;
		.left{
			float: left;
			span {
				color: #fff;
				margin-left: 0.05rem;
				margin-right: 0.11rem;
			}
		}
		.right {
			display: inline-block;
			height: 0.1rem;
			vertical-align: middle;
			float: right;
			.as {
				padding-left: 0.06rem;
				border-left: 1px solid #ccc;
			}
		}
	}

	.kill {
		width: 100%;
		height: 1.58rem;
		.top {
			height: 0.32rem;
			line-height: 0.32rem;
			.qiang {
				margin-left: 0.17rem;
			}
		}
		.con {
			width: 100%;
			height: 1.25rem;
			overflow: hidden;
			.conno {
				width: 100%;
				height: 1.38rem;
				display:flex;
				flex-wrap:nowrap;
				overflow-x: auto;
				dl {
					margin: 0 0.05rem;
					width: 0.78rem;
					text-align:center;
					dt {
						img {
							width: 0.78rem;
							height: 0.78rem;
						}
					}
					.yuan{
						font-size: 12px;
					}
					.xian {
						font-size: 16px;
						color: #CCCCCC 100%;
					}
				}
			}
			
		}
	}

	.find-goods {
		width: 100%;
		dl:nth-child(3n+1){
			width: 1.87rem;
			height: 1.13rem;
			text-align:left;
			dd {
				img {
					width: 1.87rem;
					height: 0.72rem;
				}
			}
			.title {
				color: #FF57C6;
			}
			
		}
		dl {
			margin-top: 0.15rem;
			text-align:center;
			float: left;
			width: 0.93rem;
			height: 1.2rem;
			border-right:1px solid #ccc;
			dt{
				.title {
					font-size: 16px;
					font-weight: 600;
					color: #FF9D57;
				}
				.tip {
					font-size: 12px;
				}
			}
			dd {
				img {
					width: 0.93rem;
					height: 0.72rem;
				}
			}
		}
		dl:last-child{
			border-right:none;
		}
	}

	.like {
		width: 100%;
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
		dl {
			width: 1.86rem;
			height: 2.61rem;
			border: 1px solid #ccc;
			dt{
				img {
					width: 1.86rem;
					height: 1.86rem;
				}
			}
			dd{
				.like-desc {
					width: 100%;
					height: 0.44rem;
					/* overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap; */
					overflow: hidden;
					-webkit-line-clamp: 3; 
					-webkit-box-orient: vertical;
					display: -webkit-box;
				}
				.like-price {
					color: #F23030;
					font-size: 14px;
				}
				.like-like {
					font-size: 12px;
					text-align: right;
					margin-left: 0.9rem;
				}
			}
		}
	}



</style>
