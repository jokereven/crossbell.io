import React from "react";
import { LoadingOverlay, Text, Tooltip } from "@mantine/core";

import {
	CheckIcon,
	CrossbellIcon,
	EmailIcon,
	MemberIcon,
} from "../../../components";

import { Header } from "../components/header";
import { TextInput } from "../components/text-input";
import { Field } from "../components/field";
import { NextStepButton } from "../components/next-step-button";

import { SceneKind } from "../types";
import { useEmailRegisterStore, useScenesStore } from "../stores";

export function InputEmailToRegister3() {
	const store = useEmailRegisterStore();
	const scene = useScenesStore();

	const register = React.useCallback(() => {
		if (store.computed.canRegister) {
			store.register().then((ok) => {
				if (ok) {
					scene.goTo(SceneKind.inputEmailToRegister4);
				}
			});
		}
	}, [store, scene]);

	return (
		<>
			<Header title="Mint Character" />

			<div data-animation="scale-fade-in" className="sm:w-362px p-24px">
				<div className="flex flex-col items-center justify-center pt-46px">
					<div className="relative">
						<EmailIcon width={72} height={72} className="text-[#FFB74D]" />
						<CheckIcon
							width={72}
							height={72}
							className="absolute -right-25px -bottom-10px text-[#6AD991]"
						/>
					</div>
					<p className="text-16px font-500 mt-8px mb-44px">
						You’re almost done!
					</p>
				</div>

				<Field
					title={
						<span>
							{"Give your character a name"}
							<Tooltip
								offset={4}
								withinPortal={true}
								px={20}
								py={16}
								radius={16}
								classNames={{ tooltip: "bg-[#50C07B]" }}
								arrowSize={10}
								label={
									<div className="sm:w-312px rounded-16px pb-30px">
										<div className="flex flex-col items-center bg-black rounded-12px">
											<div>
												<CrossbellIcon className="w-125px h-34px block my-20px object-contain" />
											</div>

											<div className="aspect-253/128 relative w-full mx-10px mb-10px">
												<img
													className="absolute top-0 left-0 w-full h-full"
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAAEACAMAAABswkQEAAAC9FBMVEUAAAAhZ5ggaJu7zubd6PT5+/77/P7+/v/t8/n5+v309/v///8TFhj5+vwQExT29/oWGx0YADXx9PoHBglDIRc+IBYZHiI5HRUzHhUsGxJUO44a1fXu8PIBk11JJBocFg8dBkIEmGbp6+7P2925yPbW3eCRm6cHDBQX0OwPK0EkGBKFk5zS1tsIITVBLHKYoq1DYZDDz/dIMn3Q1/ZOaZY+UmJJW2rtz+UJoXC50tRON4fl6OrB1dcEO2fg5Oc6WolVOTT27fLI2NqSv8YrQFKLu8ENqHw1SVomEklgQjbrxOAVzOH2vuDDyc7g0u7nr9g7JmeFkakHFSObxMl7ipPquts0IF5LNCXz5fDfyecDQ3ctGVRjcoDN0tissrjw2+oZuJaDuL9iOo4kxKFbbHnf4fbIztLc4OOkrrl7tL0SsImwztGgqbFseocHNFQlKCyvtcB6hZ8aCxNzgY0WyNKkzM+9xMpsTz7o3PDpodIhNUu3v8eqqKdZcZv5yeXYveK1vMAyUoHSyfEDUIRTZHIzza6HgoeGYWC0qaU7292mnJ1US1T51uqgj4x0hqn1sNpzOI9ysLmUj5SYim9repuvu/DRsdqcb1xN2LZzVFPIvfDw+n+HeV6pxcrj1srYybuap7uzf2tqVF/jkMkFXpUBicICfrhvqbHET0ZBPEWqmH57Y08iwX+/sKuCN48Dda6gMo+xIUosMjqhuMN6d32LgZ2MYzNtKDDIvLQEaqN/qrPMkHD1jM7sdsFqnKORNI4WxL2S3ms9ISjD73evTD9pa20qS3ivLo/cqIes6HPUW0y+qO1YGyfTu6TCp47k9368LI+CNjLX9Hu7NEhm48ht3aLMJo9H06TOn9KiIUaaPjeu8Ppw02iN6a7eHpCpn7VDzozxzbVZZF/yEpGpdSiKHD9ZipL459JFw2jGjkJtSRfxw5PjXrObquWWzejv+r5YrLTUTaTqulul0Lu279/yrBPQgrbIPpeEl9++1bVHbXDO8LOsdgRwAAAAC3RSTlMABQkqZtl3ID20m050VRQAAEnkSURBVHja7Js/qNNAGMCbavrHL9cLHTJlqlQITRARXSpBUSgO3RwcakCorUMlQqGIduggGQw6FMRFFMespYIoOBkQwVFwE4MIDi5Ojt41rdGmuVYt1JT7JVySe+m1L7/3fXe55mU4aSFfyBXFMwgoCIvioYN5IcPZd4TCIRFBjDPFg/kMZ4/J50RIAhULPPb3lXwRRaaxWje7Zr1S/qVOPMjl7yOReFy943u2IpdKJUlWJq4zqkTyM5w9I5ubi1dHgV1aRvbGJoQUCxnOPlEQYUZ1apdWI7lDDDNyPOvvEfOQ1325lIzkjUP5RT7Y3xfyRaDUpyzxYeRbvMffJ/IiENDQLq1H9k0g4FyGk35C8/WgtBkTCwiIu08/ofnmpLQpioO4+30gNG8ppc2RfJW7Tz+h+aG8sfaSRAp35p6P9dKMUPwT8xJdCHP3mE/upJgcECx5U+0RAQIAMZvhpJQCFdhRNsvyvzMFwqEMJ53MOnp1sk58WC4hDwEA8ZSfUnLUnl9aC+3dY9g6T/mpJY8BwNqwi4/jIgDgd3ip5BAAdG229iji49CUj/k3OSkkT6N2ui7XM7BNPtJLJzToL8nsVM/G4WGfSvKYNcaToohnhT3v7dNIDgCqzKCP4p4V9iJ/ZidlCCKjp4+Us5moAMCn8lNGgTGbIxE20i+P+EAvfdB8P2Ckegbyz0UKeMZPHUIxMd9LlI1SvizZNOPz2dxUQcf3ZW+1eXaul6OFHDT5GD9t0K6+mhD0TOSwnEE2DgAUM5wUQbt66y9CPgz7edQTvG119gJZVtYnnCrMdtgvEaJWhYT3EpaqY2cm7ApLDSV9IGG7FyCqY1+AeLPRb0yn8pzSCtaKD5Uvot6u/PmEnjCXsk0ysYOtt/5/N7r5BSgCgPvTtus4LuN+3nYnv6Z62/Vkss5QOgBQWP4YbH47dbFGRbRd2mR+PZ6X0TY6O9qbnx29LPYGseYXZGLH8Y8RlvHGo7pYu+FBROyErV4AerB8AbIiAPZKIV4XCE0lMeJdNA21h7jojl3pyCEWndSJ/bWxxHN2Sv4MQMUOzdsqcjxvqNuSxFYvr1I/BICcsII14rPZcKWE280R4scC83x2rTArhD9+b2H9uwjMip1cgDwCqCuh+iEEdKNItj/xx7bk33FsSVLCjTsee0S9498JiGdSObV/Vz+m6rMRbPUL75ydcQAAzPlDd+aZ8+fPnyY8BBPQ+SYAlH1vAGeg7jpQRuhaC5kAYDVONMmhebKNrBOq3mh4cfUhyfKFzMx74SBnV+QAoFsKUc98o3z58hrOvHjzGj4+eY3O3IWLHz68/34Dff16//tXuPL9+xX4eh/IPjp2Fh2+jCvv3r1cqC/+3nhhYX+Fd2o+J2LE2RmReqmLvsz49ALevnr1GB68evAIHjwDdOP90w8Yyse+f0df7937DvePA8YYqs/RqZeq+fLl54V69DtYJGlghfrQfEFEwNktphy6d2BMx3C+5IJDH7ibSNIIK3Lg6OBK3tRCYxc5suzD2FL9IPDdWF8fA4kHQvdx8wdU4OyWaISv6DCaOk0IZup9aPpjGNndQTCGYKj6ftlyUdmZ1lXPBytwKv6v6pU7CY0T9yvVF4Gzc35+W28PEQAeKy4i6iUHAzRtaUzqRnJQAdA9F48wqFNZGWNSOXHxHbvenKu3YDXFeNjP0j0Gzs5B7s/v523XtUnOtxWJYAce3UzIhqh1XUUmP5gEtkwglYqs2DZZ5+qbsBpcoO5jQX8IOP8B03WT9jIbhSx2FxI4FAv7cBaR8x8wZJuX6coWrygeggTESH1kPlsGzn9Ah6FenplniaeFoviQRJmr/3+ZDfET4n0e8RIr4ikWQ312WX2Wq/9f8BPTfehcSvJOihC7zlLPo/6/xUrSHhZM7yEu/Jt607paTc5KOv7tCNV14GwHU2GP7aWERB9xh62ewFKP2wahrcJqapoOEReMyjWDzwpsCz8p7FcGvRLDrvxT1LeNa3q3f5ur3wHNhHu6hGQfi3of/kV9R7s23znabFm41251yH6r3cMwarWvE/VH29cukZYu3L5gcvXbBbuJT15Ky9bJGkP/A/VCTP0RozMPb0M712sb524a1+tao60dHRknb2sDUt3QtEv4xM3WuXMqV79dBon/YhFDicsP4J+ivmZcWuz0oGn0AZ87p2u3ByZYRqupkurr0NVu94za6IjR4+q3C3Y3mchREqK++2/qB9qRRadeh+vGLYDWzfLRhqENcO2ccbNa07qATpyoGQ0CV79tOvJy0CcN8eJM4d/Uw0mjp+KrJ+pUva61cf3miUqtXtFOdmuqrl2oGUegqbUs7TpUe2Wufts4saBfdUu3iokKhH+Zzas0DELDpOqhb2iGcUnXtJvGkREtr5O+XjM0XT1p3NTOmVz9tkFeZD7pfl5ZKX8E69Rnl4Z58YncUb9vYdCvqjT/92smQL3WHwDoF/od0K1LF2gV7vWPqqD3ypd6/NmubVJV2EM8qp2R7vlE7g/2zlhHVhsKw0raX5YlilSuLGFpZEeu7AaJComKIhIlUCGgAIUIiWJIQYFSJF2e4LZpo7xCXiRPkuOZ3ewmuTebZPcm2dz5xDDgwceGb32GYdmdV8yXD97vePpj3eeffCNu6l8/Pzz+bd3vfzf7e+/0+C7FTf3rh//4R6P+rXxvcFP/f4Dck/jw+O11vLfl+qv5m/r/B/wHMv/2e3F+5534zuDPqSdu6v/jsG8/eUr8Az/1wG3U/38ovg+2//AD/eeXx+dfCdzU/69Ifnz6Kh7J/24F/ln1Ag+wCLc/3Hp52P7dU+f2NORTvKT6fiBCyGRQb8zb41g8YFZ8hhsvj/j2+3e7/5ymHzrgr6gn/ugaPps3yVgyGCSqk7GST6qvt5v694T89rt3XsX7/scCxAuO+q1m62wMH9hQA2DoVrtGg31Tgw9vhgTzmyGO1GZDQlitLW7q3yd8//HO/q/H/E9f9sDLqhcDhkIMM2apOAKbFdzWTKi+2yCTeGCij74ouLSymzm3/U39+0UUX/303eePhvs3PzTB+0urr2thGdYOs7hXX0MEtWZO1dpD2i1GpICQDuZte7Pd1L9/eNI1X3/77bfqy7UXIN6D+jWWb8BUks5Q6VW9gQim6xm8szV4/WaL7EX9G5MkSXRT/xr4M6Medp5pEohVz8XGST3UJeGnKcwsYyQ2+qKDULJ+E8Hwm/rXwNN36UQDZwlNDEBs7ZsVXQqIN+E0L6HTPClolkbzFgqwWTvzuMaAG/9xnlaPeo7TeLsrYriHPcwZHnG7ReeV8GTCJ8S6rQlu/M+4XcP/YPmt+o9u6j8UbqP+g+Wm/r8NA3vOdEv4rxUePZub+lcJj14gxE39ayR6iRj89l7/+mDRiwR5hnqZCrydUeIeodCtAJjEO9B4QCjN8Va6qcATcIG/iWC4IC1+j8QFJu7WnktRvAr1f3Qzdpkf+fD2qN7gnjSDLQHEHu/ghCvJAKiqfoecvJF4grXC36QccSHOf6t9BHKBQOqQNpD5s91r/ULWEgLEGEmBB9R7V785QV4TIWOOxHAAvWGAMCmp70wCUHH0i3omgbSOrrFpm4AUtSD11wJBAUVrBXjcA0KkiRBxDEmbEF3Wh3iSZtyA4CYUAIKBCy5SIxAJiNB82FCIEJ+HZlkfh20AwSNxPVh96C+j6HdzyamsZvfqw45QNQO+kukEElSfJWJ3NA+9pRlLKcYVcd3ZWtCMUfspVRc8NpdehjaunZJ1FKL2L6b+PE1TCOzksKHEPRneyrr9BfUf/2HCn2yIJ3TujHaTq7EclRN9PjnFnKuyGY2rcnOv3uS0Pp1jAHW+5DY0cTqqsyH1CRXovj2rOfezOAi+nd04Uf3jaDMB8OW0SKrvNhx5K4DEtceEdkVbwuotO46czRUON2UDbDY5D2BSqF1U+dYnseeYxu7sLIDFV7ngvm1bxo8wnwZM1Pvoqr48JmqzOqq8bs8ap8h32No0749MibNM6IWRYkwuRSCmaBqjm/IC2VFlR+s9dNb6A5J62YKOidcoqGsGLR2Zl1J/AiHU6KQxzXkPK1ZLZJtOqFin2PZdjLoH33Xct21PzwbbNjyh/skz/LZBQJeInYCteBZjTIcKiWWuQ+G4izG3j9T7+fo+1xlW+It6jrHFCXHB+kx0HqgaqIWexs0zTBbxmcOvAJKMc2fIJPPzXbPMF/PCXI6j3jyQx6Tebxg8OycIJbQ1L+0aIqnYcYrX0RzgpGDs7QS0Y9MCUz2NvOHcF1f1Q8SPzTiGZTcOpH4s0a5phuIAqV8sZC7yDoNBgNaTI8kSrA5Zj/EAz2O9gLuO2mB+3zy4ov5hb+OMo3wx9etaww3FWWrbZykAv685TvPuUK2b576sl2b1QpW178pSKF07SYXPPc2rhlAfWmE7EJxY3w6Q7VGmzBty1Z+P1j1W3x2HBZEu1eFCE+dQj9SLparu1YcJdgkxp4GiAMd+VZ9kDMKlvgBxbECpZN6VR5rzrQWcCeoLzF5Q3BAMzHXOqBKY2zv1HoHQ0xAdSl89TCOaajrfqZ9pcR8mEFf10okMv6j3lC7OSXO0DS64Grh0VGRRloAqcme0DlGrGdBaTscS43RQHthbQL+YeqUaZIAj9cgBSA+soeSM3upc+hhpo7PkSBBLq+C0datP8dfU//6/augF4G2s1eUwF57VUeG6XvbKBfV9nmSxlOKR+pqbVgGoStT36gtP6tWE5Bf1iwW0fot6mQvQwxd3slANcEfXLAd+rZ6fGK6Sy8mzcQLGqX+knnrauaJUwKJUCdRiGtNM4riqZ2eJdg+STHpVj1ZXD+qPUUrJjSjc1f2xghdpxqiP7LF6ChLamGwq0ybDKRyN1b+kehCP1SceEFf1fq59UF/Z2idegjOrWG6bJvlT6j/+w4QvnarLFqSeH7purcibLu9sW1vP3NRVmk2lGcdH6g99VV+2RZVfEj71a8QJ9uiWszC5CeprN6/OvEU9W5Z6KnFVv+bF7CT0mYnT8Bv1aJe68iD6s4V0Y+EKkQ9bfqdeuIbUm3zdnUndvrl0GvtsHs7bVf2pmc+NyOcuN31mgvrmFAf1dd6T+tkXWyncWPumGAE0vlOetXQMFB7Uu2LIRZdvu0tm3+05loqOBs9skb+YemMMI8ch4YeWwXwR+4t6lpk9C+r9tmdJqdLJjCWfVKKkT5//ub5Xk4pQdECipgaIy2UGH6cyxdgsWkCqSYv7z/XSItWT4gCEWmZ1GfXDZAENbqdGC6YU2w2wlmWHvgFohWqjiS91GD0mG2FIQbBiKXsgHgArL1uPMt7Di/EIqRftEXA9UOtlA9ZFj3UygAg9bQCKUAN1WRpqidb00EkLghab4vr/gGA1dGgZEBZcK6445qU0FHUaMC4A2DBdd3YElIDZwUapq3IxQFcuMXizlCmiMWxmyrIpXki9JtK+1DYqagwKQKxLAwWaikVZMUjqAD0LW25IypqeBwziueqfD6nH+2HskkqFBvYD7xXd/YUP7/+nq3nPhVd4P9TLoRmA5ojxXmF4F02Dx7xq9bdf3/yHEHg+/O9e0nmA/d/utH0F/9cx4ng2gj034Tfe4rfUlogHDmBPiwZEbBn+JFZsGkShcc9uQawajxAt7pEVfsGseAdskngaMR2v4CbjKGKM4RkTj9izv/bIrb+Pob1SyvgdkFm/nBMA7accf4J04UzLsQKxP7i1JYihwiPSDPf0OX6ha/AOeP4u9UuMX9idwB/QjH/2hG9VeI+w6Jkw4O8n/No2Ett5DGaTwdYQa6G6h9NbvQC7x5KXwdOJgzB25GCrWjkKWk52FaMvGpUCZhwTabONrdF4zLa/qC/UCsJOoSCo36ggFO9BvZg5xdpIfaEKILFWoq+x9bbhIOLRJjD1HMJ3ar2oF/s1JBU0IggqsOVl0B3ttCwXv+PSwgw0Ru1yoKCMVjnW2tZVGwNgm9o4Na9q8KJTOyvyMjXFKNPBxqHdMekXX4TdlXh1PJnwu9yWR7RnVgCi1WPWm9MyZslFepqm5IajHbAsjkFN5yCjz0btoX1zlGj94PPSnsWeKXUWvbPaJyqfkSVjpnWekPrBNUcT1GeqzASpL4+mXTC6pirTTFQL9NF425/K8dzLfFQOdkHuB2cvecEqJ1SutYu23C6noKGsZhfcx1lTVdBt45si1wmAqWoOm5Zuu4z9udU4TUPmVOkxu7kq4Z2u24v6kfZARe3UuE1k1ZjvqytlmZWJUzaTiVfamcV3Mg+7++p4Un3bAK64ZlFueuNXk99d0NaZ9xVYO6f06qKqnfv1xOemm0ZAi7OEPLN2w+4B1+0H0A4ijrtMxo4H9VUIv7c8X9PdAcEn2nmoIhcjyaWvkag0m0rgnKC3fQZUs+hjc+JBfYy5AhCZuM4SVYZU39q7hF+nZtEANmek4W5Lxxa+Ay4/qZ1DU4GwbSpjnAR0CZyQ9mZ28MV9QnM1pCocsB8il6HwWFEqRHFf+yLUGeNhgsmMMK/vLPjJD3e+CzquxzMqjzJbjQsmH65nDJOqQOq3oziSEx9VcawA+BlAJtvtev21COq1Stt2eay+VHsrz9776e69fhqHSuYc3HVOBlWf5kvQQvR5UC+PqjxFQf31zQLJ0ZbnO/V+vVOv/OI1AG693y8NlFf1tQOS7E49V97XOEWXXfkUhZuqx+pDbrtsWXv5oN6Ct9RiUSoQpJ5th1d4dfyZUc99dz2enaPl36kXuV+DeuH8TurvXlD83CM540G9B46ZDMlf1LchZYRRX4OJoH4Cjn2ouDOIyWOBdEzPiW+QpUiHq3raiD9WH9yIR6M+SAoFKDWAokOcSUcNRA+jvrgf9Q2F8A/q2xndY/WuQ9rULsL8eNTbsBHzhV2AMSH1aQPKe69u2D+p3ji9VLiql25ZTvODelpdDDDlLKiHzfhVfZrrpcXolR8fqT/rMmd1XlanVOSWk/pzuTh2ea+3lQ7qcz15MVSwTnmF2aljTDNQOm+c9fNVfZHr9pQ8qCe1FDK+qq+p5bMEGKWGbAnqc1Vd4lUjpioFmDqU3+/VO9XqB/XKaZdd1DeuAM0P1SpUlXLrnfqlNaRehp3Y5bEsrVizoXe69MxavC6eVI9kXgEUCMi5jlNhgO5iuCAkkPRBgITsIYr7OgwwTQzUEZWHCvtRzILW57RgqDcUVB5KZAzETQeEQOsuaH5XFTHNQ2smoYIeUVgUtJh0vE/QsVCXMHPfsTS5dDKd4w5EtK9JDKJvikukOvRKAmBdkwJpioAJDRdAL8MTo/50qDnANnONbBBKE6p1qSPmJGyaNibs775ysLWjwBtH/AquE/xLX2e8H7jxX+Kfuw8/nXHjv8TtTzA+WG7qP1hu6j9Ybuo/WG7qP1hu6j9Ybuo/WG5fe/TBcrst84PllvB/Zu+OVRuH4TiOP8APIcjsyWCDqIKmZDF4CmTy8IeMdqdge0hBfwoerCVDH+EewI96Vo6WQqEOviO51PoMIQnYyxcpSLGTxQoT/mKFUb9Yk3faAk0NID83AOJzgnnyg1pBvqpdC5H2vXm4Cxt+nukvbVO1ETgrtTYo+l4dMEu6W69gentQ+lmdUlUguLPpCf9psxFyX+Kpj7Zvwqgcc8hiTL8pIXan4xbYPyG4s+n0KDeiUWdU66438M9m8el3Bx/9rQS2LwhmuEd6N6Z3/WlMb+en3x4R96fxfHIXRv3dXbG4u6Q64NTHmxdY1WCOrly/Nu36cOyzTr2UqkFwZ9Oj/qjW+8iovXrF8/hYYpaiLMsE5q2s/YWuZYfg3qbTu9PpWaJOnQB0eg6rsp8ibOksVki/WH+Z/vFuNwquT1855xJc2Eq3+EySxnWy8SwFLrSV6QP8msmPN53eDB/p21oPmKeij/RVKyl8otzfFek1AGGZkz/pNbMVaQwJkUZDXpmUC8TEA4nv0g8YFcxOXNKPB5iocxACrc7Go2ViyGqmsOybcMMtHUPGxN0gYo58+ogjMXSdExwnA9K8JpmToAoVf5uejalyliKtLulJozCNEa2LKOIM1mmORarFA/4yyYO6YtS7ppFDBQzap08MkJiICjO0tU/fIuKYBVbfj3rTNFHRAoX16TOSiEiSTqkesl/MbLU/MVOCYMJtJ3xnseLMp49JwloQR8Txe/qIciQ8OeEnBAyFT+8P0KnouLasxzNDCm0wPubhj+8n3Dq9JGIHnx6OKZUoBtQD3tMLPb45nR4tk5GXCb9i4hw5ST/+9fgi8+ktkUMw4dbrevkRVkh8JcaGmCbl1z9x+/xChlXflP9lS+ddwoY1gkfyr67DF2Ff79GEPfzFGtP79uHum+UJo36xQvrF8hN+SL9IYdQvVki/WL/ZO3sW2UEoDMNtX8LA1lZChINzSBWbgakEq3RTulNJMkWEC4EUbrOFP/zewEKKHciU2Y1PoYWne1Dxg3OK+sNS1B+Wov6wFPWHZVO9jgu38qL269hU3yZiSq1A4ZexmVpBSM2jlJ1+nxr0MSgBzDHO+o6L9nqprXzCrKXUn40XQoWpBz6if5R1Yue8sNcrvgOaLd9msobC6YPIJM7I5NtQmSRwo3PNia0wbBLVNZlAnyjsmtfVh7PMtrtGrg33eHB+c26WEqv67vyX1dBRvLMerijsmyd3+H+eq+9wSmStTV2ygKCMJrEbV/VhiUr/A/xbZgo/rRTM4dj6h7+q7wFnz1IOlaMLOs6oLo1NMqcL4pf6kZWUtYB4n3hCYde8POsX9Q25aEI1spsS51PwY2vFxHlKX+oHSz6murdK8Q8s+ncsXtjr76ZfmgHAaJx5ANq1ymg0xuUO1+C8MsNgFtd1cG6S0jsXy3Fw52yo/x6//sxe+rVdWIeqcrTbPc+yZZaL3EPwj137fU0ijuMA/gfU7Mc5LQiJVGRbUmIhMjNySSWyK52lFMgIs7C2urD0QZOEfBCtwciIQgh8UD1cEUY0KBtRMYq1YnMUPapHSQ2iFj3p/bnv3c68aKtgBe19d9+7753PXnt/d5PNf4f/32Z2/4ffIG8N7KjfaVCf5v8z/5/OzK1v+JPM6/+7mfE7fOrwot/NPP4/nBlb37AonEpFwxgcDocvgoRCfl807HCkUquWxmL2mBy7zZbP5002u53urYpl9335Kuf91/c/zkdVEjfqc3nmrOnv/eXcam1dtYqOFUuXrpBCN9zu1hV0iyZu5QGGVvPrm7+e/t5crr+/9+GTXK4DOyXX0SJlx44dGPGB0zkMvQ8ffvrUS1erVVJzTQ95X8YXgfp4JJPhQ+licXxw8N0df08fP56JxWw2k80GbBtiqp49W52qQj9P/Nl89fA95BFyn/IMeUq59PSSlGevXr14ceH7PP9wYp2UtZSNNTm58WRNHtTmur6xsRGHHC2barEbtFoDosU1ZgibGrYd83g8RqPZDe642+2OG42uRNLlcpndbObxOD1xM8XooQEf37NkdllZk60CpysLQ0OcxcLhCFhwWJusVivGpi6kSTdcaubwTJgYrbwROLrsUFHNOb0vFAr5fH5HNPXpPPCLg+8Qok+PZ9phbjIxepPNlEempqZMJmr+xXw1fzEr2X8vjyjywFbZK/AMf60an+RpU1JW5MlXviJyDBI+dhoMjP+4E86euLs1bjTHYQ143El44nG3CG3EiLMRPwQ4k7zTtX427nX2SzQLy8LEVY4LwB74oj3R097VZQ1oBAueCPqRiYpM33T6J2pz8h3+pnSa5x1EH01FMrAffDf5efJOX48/PR5pj9nzEj3sQY/CT50V5e3VajWfbf+ipq/tvFz5U9ImRaq9DK/YK/zq8m+WrLHToNfrtQxd1qbrRoDTgRllfzLpBLrR4zKaAY84E06X2RzHHY/Lha7jjB8BcadbTueO2ZX+e/tmS3fzyISWswSYfCBgEdkDywKa7vJizsIJgmDh9EOjA5USR7EGrqmx5rT1DZtCxWLa3+PviUr2vuLk589p/oxIbwc6oyd5BEPVZMLtvCiv0Cvy03nK5MdOyZnGf3uCweNQ9f6kuvrYkC0iPNDlE7SZMaYsrOzSidLRljDC2eUErTORKCQLhQTEMaH2OyGNnnuMLqDj2okhsR+wv7zmlwWhbJgoaaBO+qC3WgDfbe0u67pLnIWF40YGBip6sfRdXLfKaq5bn3Kki+keZt+eyZznedDfSTuIPsvMyX6a3lSl0psgb7PH6lqvlh+7cKouY2MXLhw8J5aeNkTNz6L0HvigN8ilp9AVlDFhzswct2iqlectQQ+cGaqL7EEPa7H/ySTtTmcCz8gcoU9cBuov937xco0OtceyXm7Gok/W1HsUP6BbrgtQRPtSZYCt91brDPRz0Xq82fPFPp+/zyHSZ9J3iJ6X6e1ETycmL0ZeC7KplKr1Cv0jkkfl64ObLf1H1tXhb2S74s42pfpi6/UAF7mls3LFomeNx84etSQ8WMTBTfqQLTD7RAHqyWAyGCRxek6PKMm22yuVzLr3Vt1i1L4yMYz2Ezx2wmfm1H/cQkBfGWalt/x1+gWbHCDni1jy6U2vPZLh04OTkz6Ho4cWfJmees7kccDcRslmItEvL5m9uvX3X7yogd9LuxzQ9x85d6JeX11+BR/ZosXvd0JW1n16yWP0BnbQY7n4xN9ScDqDQRGc2QbpkiEHgQ94TIP0NIhgAP1WOTP4r1Tou6w6QVheGhgylEFvaLZQRHYcnAWHGOFNRSp9E/fXF/yGRVjnw9FQus/v99Nv+whfTH+aLKYZfYyt+HaE0SNsEUDp2yO8g9GrFnxFHuJ7kbs4KJiOifSnDx45QfIKvppfKr5CT60nWFlenrGi7zIwenHO0tEZLHg729ragEq5ESR7DNIc5OIlHfgUHbdhvptS6z9T7TWw1+iWvxkdEWhZHyrpAsyeLf4cS4ne71npA3NFXytfTx8GeBi97wvRWz7Ro/WDoOeLoFdWfFM1T+w2yT4L+nbex+gRRo/IL/eSvOKu5FRLP9LBek/+0qbQ1734MXqp74xeEpci0iONuKrN0QPeoLfzgNdLqgRL+rRJ1AUEV0zd6/XiuA34nSy7kWn+n9Zer9lA9vo3oyXAaoYfAx/iWOrBziKU8OdfpVKSS//XF3zQh8PR8KYon+bxHV7UcV78yx6veQ5fMSPTm9gJQdtpoGRT0ZD/y8sfrvhPmTyY1Rnbu5foc7mjh/bsIXnFX/3Wx+QxEL2UaWt5VvuCX0d/W6TvJFXKjTaoS/IIO1OA3knxdl5ZCfntFJFf0Veirv1V2OsWWhYOV0ZLAnpuuPr46kgj1vYAAuZvzNrLj0thGMfxP8Bdh1GRBguCuETcIhEaRpBG3acucU0XI0FUZKbikiAiUhk1RIhLgphjpkjdStMS1ELThWok2kQykRgWFsQCO9/nfc/x9sxgyfxOL2ems/v0ed7nvGe8hQIXADnLXuq3L+sR9H6/X+yn0/Kl7BcFg9FPX6IZBv5oEPpw2Klzva+jy55nONy0YRH0XewJ8i+QN/Ab5dioXuUH6I8fh/7uXezBN/r6tSrVhT+1xmVvzE0foC3wW/25pq+7s7yuoaEBVBsfb8Q1t7JXZ8g3kE38IWv9qiUTlkwg2t/omyWgq33eGtt73uDI6MjTcimH7uhCnlhFr0ev+J5BOYuUmO/1kMfr7S5S/4E+5Je6D2n7WCAYDF75lM0E6PjBxQNl695Z38np77KPzxeAx+KmDdMDDwy9sTfySHfNlgT0x2z7u+vIvn1ufnmx5eWwY+hNeUOtxU1qquNbcefOhbkNEuwVMbmjejtVPrcOef0D8vrP5qYHCL0TwTf6RL1j7275Vj4n9r09kafvS1ZlrGd0MW+VSpZVHIs08fiUfFIX/Rjx/8f03f9Lp1+Iqo9tiPlDi+j4genQ0/GzV1ZOjwXfrNZ3bexOz6DPRg5Xefygruy4x3MDeuxddf/qGfIOvC54k4Q8Rx1T9uAT6CVT9rmbf7eBH3pXoLe1DXxtrfs7sAv6C3WOPdG9XdPbPxKaQkOcv+FZt3TA8LVLJkzWMfprnchZFb62T2Ef6b+Hnt83UihbOa8nUslbyWSyZBXZwoHeW7Ly0NeAvmzNeF77/v8xj5qPxWL7Y4x6zc3gR4Mrr0AfXDQ98GYR8qrsHXxmPV70Jg9FHwr9+Oi2B9+RN+Rue45RR4/a+GSbI99V34UPfS2wtcTeuCVYa235yNAb+xWbuDFYB6lNT7e3vwCbJJoeeegJ9vH00gGU/eTJMyWibxq/ijoB3/R8RV+Quu87Zgz4NH2rEvF4c1Bjn7fU6h8pUfbJsleKfpba7u0Jaz307ObFQmzrNO9vzkRXUvXZ5v0bpkcXLdb2aBO1p0fp6yWfpX5xyP/jo7I3cz55a8tX2W/duLUqiYlHieAfZ9y7e2qfEzf/pKkue+h1TFMXcod+iHwnHHq5yh8k9Om6O9CKvUg79MvlzV7/tXzclo+3doK5dsJMJ6b0TeA39gT6lC+XtwqRwWN29O/bF/uiZ3St2BMrn4oo+pLFUg/6LOn3vXvCxR3y2j4GfSAQzVz59CWbYc6LBQ+sDg/T9pqeE2HnVJb66Rv80Bt7G5+FHnij7k6CY+veBw9u3ACfUPq7ToFvyxODf93UvaEn3eh5Dhki6jz1i31nZ1c6nWZ2wxR7m5oXTW+vAXyi/wD4z58/d4rlqskzh6o4+KLPYQYAYy/v17EvUvipyODbbO4UkhYb9zUW9Krwi31H9y2VkiW11I+fNV7o//uEz1oPO/QUfIy7dc3NmUw2K/Rs8ASCq5tGKnp6vtq6beIGvvoicBqCvt9X6A2+6D953YH8H+Dn6+PrpUuXHH3wV+wE34mx33dZbvA4qaZH1kWPtlS9+36+pDOeltgdX+ETdRGvmrxa5Lmio9G3xltbkYdelT3sBl/0nahTlz1ZMy9VTPkq4BciOwb3jbwvSanX5MS+jL2PqudU9/vt0u///0ZuH38MeNADgf18BYBHXi7ss7KnT8dX8sRZ4fWTNIWQ9wu9Y/8a/devRb47O94m0F8E39if3Ak+/G78fc+nmAXfRe/EWQB8HIN83dZ66FsJ9lL0OgK/W+jrnOW9oW6u0KcfPTL0C1ZR9S58d7raXz00bw74hUo+Xxlr2/Mt8FYAL3DBZ/lqhT4lQ96sMaMZ8v7/Rm4vv5bnNUTTh17ZQ686/koGvcXs5BPd5jW7Q+9UPenowJ6jo6PDkXfstbqL/uJFwX9A5WMP/b2dO+/ds2v/lLPoQ1898U37RQ+rHOY+jb2l56KXX7vopc7TarLbjT3Fj3q6tTXeMHeu9Huxf6ToTdlvNvhav2r9X7Kqiv7h1UNr5i0sFlOpXD7nxd77PpnPF72RIpfyHr4IVs5K6vl+DP2e+/c9YCPXD3ggxpAXkjFf26PPMxAKBYKLFo9samqi8G173tGXt3Ao5O/X7+uMjwmB5wF+x2tb/s/qM+SAnujKp/DZ2xvFk1Vf2/Mq+qegN5k0bYihN/u4Jti76fmNoafcxV5qnih7Sr4V7lY92XOqoqqesp88dDMx+K5g7yr7Ww+vXj0063qxWCxo+8jY98x3lZpIJVnm0j5lWdCX1ZBHv0e+J1Q9i7z0ejXp8W9Z2axD38y3IRhYzWJPhFzoVzfpc5oB9H7/1xkzZiQSCfw7wJeYgpcuz8OYO4Hejm1P7MYPudaHf8Vzdb5uEvC8HzZV7yz29Y2+QQsbG9vr6+8v9DW2NULfda1vjcfR1/SE7Tu5LS/2dHzV5vmQv7HlP3fKhA/92iUzgTf4rnSzv6Xt583BvpLP1Q5m1nuvLuwKJWnzkbLQv7f7PfQ9YiM30ByAnFf8OYtmySeu7qD3h1aupOw1trY/uHh6WOBHjmySqhf6hJ2OBPAJU/Ld1F30H37Zgy/Zuxf9k6dO7QQdeU52PZezpTtpAEToGeM1vZ2FZ+oHtZ/HvL1tYXv72Tlq2HP0mQKhx17o42qZZw+Xotf0yj5Nx+cCAHvodTqRF/pVkzefkPwB37HX+NeugU/Tn8W4h71VUPblUj6fq5Sk2FMlSy/146Hn7f83/D69QlHqO0aRyz7ufg7u2336wj/n0fD9dPzAgfBIsNHWk154sZLnP5dDw4ZBD+T8xHzDj3xXeNKd3o1Pju6F/9jOnTY9uXdXve1iu0/0Za2H1ra16X21jS31be3n2+a0tbTPqdEf6z+Qeb9TVbQuezZuuUcv/V7TL5fxPh1nwGfCN/adwEMvZX/ixM2b4P/VHnxNr+3X7JlTTBVp9V7sC8reKg/yeGqEviBLvaLvEVUfu5IlbOJEqXMp/cyXl1defskEhN4fWxlceSBsx75/G4Ze/o09NJK1Hnp0E3JsZZ8Od53f1fuIETxUmPBJ9YJ/48bevWK/VOyJoj+ya9euu9vuPl+3jQi9E2frfmFLPfS+8y0t5+e0tLXohs/T0FPSlDwPmfPmwi72+m25rPZ8tCk97hFfEEe/U8tT9hM231Qx+O6eP0HsFf7wa7Y9+Ntp+gx7lm9w/yE177HPC3kkyYRfq7bynPu4T7tI/Wt6JvyM0F+JRuHP0vEzn759e/mJXrCfqvfHgthLzx82DPyD55Q9P/Xr5wde0YNPtmK/lYdOV3hB5+lk/SWJln+wfv36G3vp9xNHoS/0jj1jn2zzQy/266ZR8vrQtOjPOSP09Y1tbY31Le31MucB73xOOilpxUpr5yKOhR5zR5/JnmyqW7HuXVpv6jaw5Hdqeegp+5uPidi7Um2v8BfMhp4HdY89Tb/IJX5hcORpbZlBv1Sg45dLXNXLlDdrfE+p+p/Mne1PW2UYxv8AnBgEZUYxTi1BRXyJos4uRSWmZIMUJGc0cb4rc1hFnZ1IBCEBUgV0RRpIBYvI4FQ23FjXbQpmGULUNhiTZfLBBMdCAD8oifOrv/s5PTtFnA7MEq/Tc3oG+unX6347z1MKSPBIdt4A/01J9YL+C9CTygn55cT8Ysjjc4v9pjSwbxD0Nyj0Bvy/ON7izrFCtRLio4p/tMply6uy2Vw2l8tms4Fd4MvbYV9rk9IEz3hgr3I9Ml2NHAFvV1jXNJ0T64f93uRMzwX0NO1IQn4hiR70ZbwS6AHO853RiYnHHuZzwb+JAqCHpUKP7cdHRmAvYf8C7A34Q30D6IDB3l7z9T2wH8y46pZXrybmDwr6s6CXAt9Nb/f/QI/r35Z5HuiBzwj3jz9+m57+40tq/K1i64KtRSVFxHwGummp117b0NAgCzfI8mq/nYEeJWgDnzPJ8augXyfHdbWS26NR6EdrXW3sTWprqzbU1tYG+8PVnHtbGPIa6FHT6ASOVvQtulo4HMT1WeFwVkZXOOz1O69GFvv0saeQGs1TztHXSUuPJPLvemN4OK7r/mDQ652Y4MMgGYDKbyxBngUbtz8AepHAR+Mj44nK73y6T8A/8GjfAcv3dnv/uzMz38zQ4l353ecr0Ocm0GdfAvSptpvXVuG/h7ajJ1A+6zTOsQMD68sDHGGvBvt1qLs4Na24gTW6xQ03PWeYPk3Qw160qns3ycvLpG6qNjHLaaWxe6wtSR3qEPaHXYdbdGY9TU3NXiF/uGkC7oYyrJV553v4qzPp4x2ZybUAl1vp5aV9Fx17ePcu1dVhb8DH4nosFg96NS2TJnGvoFdV/7EEeVmrc9fT4yOTSFl/5KczZ878NG0VfuZsB/YDA+903TGAjDrfUzM0NHOSkH+LGud8dznojd7Oc8nQo23VN180eir8AmOMW0Qbx+RWXue+/ESpXbI5Eb+dX5awLaezs64b9A1svLjzuTR8j0Bvsoc+/C/geLAna0fvcAvg/RLRX+pIJs/LiAAu295YnE7fH4g4tHdHxfwq2nNkWnswyO2Gvfm53PAm3I0GkNetCfJjkN8H8IcgL0/sd8WmUFwPBp0bN27M0JzBevp96fiS0fPYfv/I5PT0tMAfOYME/uR+y/em8TH80Xu+7u+n1uu353jswGc51kmqfGw/KJX9kc/PSpVnd9tLFfp1rtJ5IW9bSsrmvFcuyH5troc83i4pzxf4sIc04Nu3vqfYb20v7zx9uq6oqKi8s7NbidGu2F5KPdDDfrVWgof8Ct1KvG9tbtbjo1LErbA94HlB3uebnSIwgN6p0O+dME0PXjPfawT9LCfjHK8zndGON8sRznIGNUo9uKPHiPZG5X7sGL3d/Q/tUit16qemlpaWFiKLmddfrzm83oAe1+ul5dvNskwF3kT/NOhPnToF/l8Ud9Gp8VXs+4/ieAp8d/+BxhMHryiF/dD3J7/JugLbs1wP1mcp8mSVhtuTLeS51KwH/W0d1akpb3W4Luz7NQxyQU87387WOzF+BfjJ+uUlCj3anl9SXnK6ZOvWcj4Rnd92dzeAfk/x3Yo86K9L4BXUqxu51Y5XuncUqMHm5lAr7F9rcyXDF/bVLtAPz8+SD0KhCDF5gl3Mo4JeTiuqa34nVR7pWg/q3qA/qIe7dIc/mKF+rdDv/PXXfVK2j+0rJL0/+ODuMtr7yqnlpd9/X16eW8zUInPORa9/aV6PvwF6YsKYmN5ET7YHPbRP/WaSF/YY30Iv7O2NRw8k4Dd6Trz8KuxrHDODM8r2P5xV6LkQ79058i7OP7gu9NXVN2+gOEp5paPjrRSX/L3xjurNK9hf/PN6hR6ygC/KF/HGKT2+WrVX1C4fCnq803wEvoV99x4qg4q709JS0567eyfoFfhkJRv+b/Vzk8/nH+3rE/aPSZUnhyWXkG+Jzs/Hhlv0UMDp7Go6DHrD8abr5cjye4O6U/f6w/R2Qb/mZ7LHm/q9gf4DQa9yPQGdTTa7qeIL9ePLkOecW5xbXshciDh6NzmHfGrQUzhmmh70yvaCnjSPEuCRsE9+nJ/jcff3Qx/4dk/OicuyPdT5YnvQv/qjUD+L9Wnt3I25JvqX14e+svIFV6Vrc8eWLR2bqz/eVOlKrfw4xdJb1ddeLPoN27cLehblgB7ovCTuY3yGe2gr4aC9HfzC/zTs6/YwyyvYQ8WHigsJ5hfUdcaxWhOtrU3NzV3NgZDeRF+HkunjeTH9bMGG2VhLKBDxOr1N1H2j58s8a5Yf9utB4INeJnq0915qdg3XJwa5Y6Df+RRepp+T3Ve7ynhKlxeaAvvCwkIk4lzkejySqfkzN/rrQU+ZB/Yk9A/sBz3YEdRFcp2e3L8Cvd1ud7sbFXxy/ctXlfJP+9DM4MlbpLhX6L8z4r1bqGevH33Hba7KykrX49WpqR23VW9LsdEQ2azfb+FHa1iRK+jJ6PkVkuVLiPrE/PL8fCkCyoU6KnnzdEk5xu+sKGbxBpsv9ogo+AoBuYK2iZzraur8iFLws89+7uvr6woEYNUkrrdxGPS556LI9xrodT3gdTa/RqP/rJXrTeunO/1+YON25XqnHiQA6EEDfRbC9fTzAt4gv6usbOc+PT61PDe3uLhIsM/IWMw4HtEiWlCPRz+S53ljCfAm+qdHQG+RRyr1j2D7lejp6YCP8d25OW5GuoR8inxsny7oVZGXY6b69Qf8DiL8Cx/j+s1bOjbBGddv2pRE/vk19PW4HrW3l1RUSJmPt8FPBJA7JOBZo0k+4KedFU9s31Pc3X0nKV8q/bufe0oAmwb/F92gZj5M+kGP4Y/H8T5tm6+2dq9vhytZh8X0s/Mps7FhAj6uH1XoTfZmyifiA10PcnWAXlcB38l72IHpFXqivSy3h7tIQvpTVfFYfGExElmY6p2dl/8j5OxpCUfivb31DzP8O2Sih7yszL1mfPonkzzIFXk0OZ6M3uPxAN+Dqfvp7xtzPY2NZPuh77G9RHyx/i2qvnerCX5p7n9A/4Yr5eNErgd9Gra/LYn8Gvt6WZj3dkkdnocw4JnqwtwQd+18EmjwEIv1KioaGrq/VZLxzgcQhbpc5PoP2M0FuQp9cyikx+M+n8xsfPR5vmieid0wfW10dl6hDwUCXkdXU3VTU5+FXnFXE92gN93vTff6/X4tHEwPhx1BzRH0Br0S8AU9T2dkzwX7bIU8Kitsicdi/szg8hJV6rxf7+0Zjm7Z3BvRmSwWkhYOWZ4HPbZ/f/JUIsdLlzdtiGZ/f1KZ5+EviQh+cf5R2JP7KfIN24OdU96zJd6XUt6vGz2yUrX19aXJ5C/e9aA31meBXpq6BG7ULu436j+Uzyk1PiLhG2KB5k7Biv7R9Pe9+OQzX31lbL0DvqDH8y3Y3Qd1H3V8y3CtjaRvynbe9S1S4Tsco3v148xrLPAcapEenT1zHShrGc70889uvNzCHvSMassI9/eb7CnzYvG4N/iyFj4+L48Q/D0FqdfOT8UWAqwbKizb9eAbJnmJ94JeFXomeZO9dPpPW+jv+druEfh2gNv7BwbcOTkM82sOfj84Q8Q/QrDfCPpSpj2XlbIZKzf3UgxyN7i2reVv2tLcQR727e0S4t8k4hv+FuIlCjm5H6+Xdyr2lHoogZ55Puj/GTx2/0rJYM/mG0HfFTgeam3VW1uGURQN1+bl5VXtqKqymQFfXG+UeZGww9HldWRlrlKGkfVXKYNTob+VaE/HRqY3vj0B9IXM8JjgaZmRWGwqNru0NF9QEAvMzUViPT2H+A6ObWBPkDfR098hg/dkQty+b/X1MsVze3I4PJz9AwfsufbGR2qw/SDMT8ijO5niNto92blX5npyLs2eO0V1jX392zLSwdOS1fPLizrz0Z66iuLiimKo11UgbvOL5Vs36jo7FXe15ZqAb5Z3vP7O7iC3pGwP+tGuZgJ5KBRobh2ur4/2wn5HZVXVDj4CPtP1MSnzhsX1lPjaCe+iiX5jctTXNE3O9AxN7rhmmPvxtHRBz9we3KCHvXJ92aFYLAb3jRq5nv5++ffl+c298chcQO+Zr3/oZtCb4BV5VmXLMDdhdGShHxfyBvpPjw58+ilxXtBzNg4c9fD1STWS7bNI9kdAL1UepV92bjb/yf9iu2UB5E30qqDrFLoC+9y5OkhzKvKIi1y7RazNFn34gVXa/73dXzdl+l5cP9GMBH1XV3xHPfCj0coqXD8s7H2E/tqoT9D3tvj0OOM8p9MRiGgWeK4Gegp6v9PPQztHmHSf5eTGj8L8RM8Cva1sN1+gYZBHAl/QRxYWaOnn4C5aJvAHFkORnp76G0FvkU+gl2c4BmxG+dyrW0ShZ6KXec6nwHeDlcN+dKAxp7T0YM3QkcEjFnpp9ks9uXT+2f+LtXl/snd2MW2VYRxPTLxRNo2CgC4s8QMsWj9ilKirniHGlCGYOnIG6ha/JtFZzPzo2BZR0BEEg5FE7AJDPlzsGkJSTAcj8aKZplFpQrJFM7MohmwZi1wYw8Wu/D3ve05P65GBXnTT7H8+etpuV7/+n/d5n/cDsCMCfr24fqTux0+Q4q8Fe42+Dam7LL+xtP/Z7E687fYM7NnsEfDPDVPOob0fwv1i+3cmx4j1zNUYo7Y/hgZPT87MnV4zM/bBoSGgm36KtAmN2wFPmtevenXcwtF+KvrwN0qi/Yzgcsm0zVKp47wpN9CztwrWHxicnKFbN38mbqaSZwT9/JnT6ybp6qUOvMMeatuFukMe9MzVAbgGL+wtMYyn0VPDx+jQH//886kgYL28G/d41wr6o7NAB30Zp/T1rwsSGjwXw6Dtmo01UtChdkfrLmlefR3QKdpzp1HXvhfybZbuyQRPSSezeKe67S9nU9/0xqZNm2z2rLhXtr+vC/bYHk1PDh6YlKl5kN/78969YzMzc8mzNPRzoJ9LfZCaHoqbdO/8RsIh76CPFpgl/f106fkBRHlLxh/tLSno5wdRUiDogS1deo0e9qAfnBlamI/PU8xJWehvHIyaxfG+wa0bpK23uSOZfn09c/SAr8ScnTR73hLxNXpSPEq54wfF+O2w942OMxErLxIxbPRIsrxIQPUFLg70gp2LUk5Dfd3SSH09tBHmh32DPAp8KvdIwbfIEwIo7Dyqp2rQX6fjpphD3eGelmV70MMe9LAP4/uhjulUamaSPH8HAR+VppLT08nkHOzF9Xw5T83NNPymqdAzzua09OL6/JAB9N4Q0EMSAaL5IY0+yoAe6IEulkc2+skDyd/7CkwCvhmPz6PUmd54wfpQb/xQ0/03vbRdhuodzz8g0/EFviU1cQfuKgR85KD3QX6qHfgHffga2496PWUG6E+AnjQPeUFv5HmvizUGL4bJ2Gs2VnRXSMgn3je0/jjSgvdJ5iC/9InWd3rMhuZdo98PeuyuCnq1tYvAdku7HWWzf1/Z/hcy/C7YK/ThvqFkcowOvhLp3UxyGinfn15zeu5skoBPU2/4Q2Yx4LXS7K2AXyLoaRZo+ftBb4JercDOvxPyoHdcz+ZZpQdmpuPxArDH42a+WbzQR/AvMlKpePxOyfCteRoCX6PX8KHPhcT4dgx4zsrwAwEqeFPjo+L7g6DnzVQgGIhkoQ+CPpQXiH3TLlPxd+YYvXs//G11jNKyqr6F3L6hjs4dc3IkqSfQc9tPxBf0Kp+/Wxr7NjF/QwXgSfvuqV1ckfqtHIK+U0d8YU/nLkwBnxy/zx8GfYryjpqRU8r+wdNKDKoK/bMEgGR8KNnHqGyiGPZpafT+fpDjdL/px/WhKBM1DdAX9vdSCWKyHugxuiKPQE8V/8jYgcGhhYWC9dDv4zewgP/zTSo68fihVypveZwJWpq9Gz7SAcAir9mD3uuVgD+lsz2aeYn47JJrGIcz0FPwaYwkmttH2z3esrK1FzzgbxkZgbaaqFHN5ll04qVkJyk+1OGO7J6cHfEl12fwrpbtVtoWBfWyArsSj53ietHzzNYHvUrw+8JGuE9ADyWltMfILPHe1lmkXvrODnUMmwVwzwDPWYj0ForckerPl8gIfoFpmIb08u4EucKegf7ZzQcGU/P5C8VFKuovmPP87z569b3zvfffdNNbsvbGge+wTwv2aX2k2Qd2BgLBdpmpIYl+o1cSPV8gaBiO68nyQN/+zbvM4wnKLqoXHP3Gt1uWRqp7pHQH+XpKOKqZl8yudf8nRHoBD3p7dwUhX8sOe4KeaZq/ZTXofwfeYd+p2P/wvKCPgh7bh7A/1XxmTqQ+pB+3b19KQjw/Cu38JHf5drpjuMtIOOA5BL+gt8Qjl5Kz7EqjV+ThXynoX6GIf+rjwRl/sZm/fn3xwkJ+fGGhZMFM0cG77fUJhR7254cvUV9LwsD1sJftcAn6vilczxw9jwSB0UAwwhq8o2n07VLin4L8aKOHBqJqGWI5zfBHluqo2FqjdhXS0JPa19bie2K9Jg96RR/TSyOP6XcJ+nsWHdxu6g75ThXxAQ962/UdIsiDHqXo6KU+Bv1cUr7hQ5hPS9WHX0Ly0HDXcCSNvpwrjV5OrSKHfaGD/n6ruYc7YlfMR786Nzk41hstLC8oL1k4s5BPEbiXmeEfnDoycf8GQa/hu9lrPUfK7wj2GL+MAM4V8LbDHtsHPIzjBANVhw+f+KI8A337lKCXGdvBxm9crHKJHm2RZRc9I0v1NW+rMr0EesnvpUeH5Wnl5UBw1+usQS/wdzF+a6EHdRZ2Ds4sYXoOhR72jNyhsJx9gAYukP19NPozc3PTHWEE/DPTEhg6hofpCJAXavSO8RX6tNtRxkA+KslHdwpt2/QW+keOnPqavv0Mc/fz4/O/E/jNfobtPj536siT7JoNepHb+I4wfgZ5dH2ZFs73jZPo2bb3GIdPfJtfptEHGjPQc00tQyyHbX0dY/M1RP0a/UcwqsnwEOzpyyvTO64HPVLLsMjyKhpAD+s03vSLoxs4UOetnUK+kw1yBb1U80Cq6EM3Gg5PR0PhUHSI3E5SuvDwMOHgzFEhH+7qChPvu+6NaL9nJ3pa6YEdmzxnvo0eQR6pJyI+tv91EvapQ0OgjzMxb2Zw8svHQD/xyoabHlfkM6O+Zp8J34r7HEjQ621xEezF9pR0GcLzeSOHZ6Wcl1DoxfUS8NXrqO8Cux70av4Nk/OWllpqKkAPUVJ7Vc3F9k7A1+w1fdjXtlW3ssEW6DOJY/gs7hyclus7IQ962NO5A3xa9NxI+Pz+0FCSGB/lSXf747PxMOT9XaJIpBwVc2Swh7qS/iAbv2iv7ss7BR3Z+3riyKl7Y/uo7FA+Ovv7oUE02VUFeifgI3fUd8PXoglQ0BEvntHPkc/DKM6Ud/fhWWnsi3WaZ6GHPeiDudg8Tdgvj75O1NIjLf6ITM9zsnsSOtgjNkB30At5hOnr2u4BfXZkd4PnUK7H9p92she+Rg97DX+4I2SQ5kf7otRtOqKE+KjfQPT7Q7N+HukbRwwzgspFWa63e3t8zJXV5dey0UNePyHY3/b0Y82xDydp4OemuQ3ui8Wq7nv6qyZMT8DPYr8cfIBzWOSv96KAhq9CPp17bD/e6DVmaewZtkujF6l478vJvnnofK7H9uT27IcMe4I/g3S3NChJ903DB/1+y/M3i+chL73AtmXR32AfSLHfBHvIC/rjx0Gv4at6btiMSmQvT0T8oXjYKDITVGfCHWH68oaJDAp5CdCvt9lzKco8KVkvWb8JwoFGr+N9pSXV8g/s2PxCVXNzc+TXL7/s/3BfV6w5huk3HxnYUKnQu+Fr9jZ8t4JCXkf8Mm17OveUdbwx8jxG68vF9o0We9XUsyZ3GWI5zPDJ7DllWJ7dEnlla3Rsz1Wrum/070DP5eyc+KLU8iqqQV+7CHlAc7qwW+IBz4swPTqOQC/C8yrwh0zDiHYYRnNRYUlCCrYJyQBDSMMnCAh/0GczttGrV/nW9RMAfbpTD9aX1B+4gf1EKewtxZCQJ9zzT7LQu9M94KO/QS/gwSvwg+PCflT17T3fz7KtlkbvE/QUdHB8IyP37y6HLGcbqtTYszOYjVmvpuHRa29YamjlEMRtSqDnZud4tQ27KADyJ7FAr1m7D6A78DV70Gv2Xw/DnBP0wh75EwZDcxTqRQzUWfIjbf0I6C2V68MWH6h3DvpCHRIQ6BV87mBFsH+m8hngH3m6KuaQv/eFrz4bIDa40KOMdG9Z+JGq3V7Qo3SmR2GH1t6TmD1xtNwas1XskUzj8nkveJrHSlsMD33uzMFmzJ4n4NN3QyTySiT7rfIDaJMET77bVtHTIhN0NXobMId1OuBR5w2W64+h44Ie6CJNXoV9E8JEevE3xLNlyFcJ0O8EvEtrudwq1+hvQmAX8mAVqU+230+udx/wY0hneIp8Fnp3urcs/OaEEakKpNm3H9TNPbaPfT/7xSzgkRf0+L2RU+ZwXviSTvfbCn2FSP1RBP7kUbXUdcGPFHu5S9uv6zkaPTuqOugd4A7zzIhvmf7Yp8eOHzt+EvSIcC99OPijjmgI6H4xultWwNecd3K5gbs/IRKk0csdrGn2t0vQbyp9/dxjVTj+3Ku30a3T5F3o3VEf+NmNPk/Nzdddl4h40uxHBf04w3nYnq59ybV2JVej98mrK+DnHn23tewC2A+y3qaaCRs9fKjob4EzyAFORGiQFIBCnozcbCPisy5Doc+E7Bbg5UDHRJA/efJrPXIXVuI5TFYX4vwLd8N6SRQVr2euy3KU17oe7Da/SNBD1JJNHhHzyfTvvG3z65tvK90xMSDkXehdxifdc+ALfS4lr8fDwovYbvtPHnmnVHOP7ds9JfTvyu3xG59yPq9B38PLMsvR37TlD6B0K8MryaZY1SOoR63Fqu4WzhC3lmQB30IvG6LX99S1Lorpzyew2+SF/cljJ9GvkUhXOK0QpxxAFglx7hxWQ1+s4jf4V1ZWrlcE+mcqbwd0mj0H4iOV7b01MMGMwCYLPOQd9CtEfQ3f0dq1eQHPbhIHr8XeM66ae1p73+4SmZcr6IMOepSLtv6y86++gTiWB3sF5IX9tjrYs2UqIR3k4nwGbKr19gu75N+oiM8sXjLExZXIa9c7pj8pihQlgGtJPYV40eDVaXO3xuvKOdcXuy0P6uwHu7NnFXykpAN7qGZLN/ik/nsG9uzZ85YNHrnQu6K+Gz5jdzvX7hT45A4YH5Hm6+aekO9rprlXpVyvQs6NdG859DmcmyebogO/mmaeB8ij7hYp79T1UOmBPXV9Mj+p9qi4IPvnY3tBz8egXy152Nuuj6S7X1yKbMLIkgbP17YA+ld/W6Qd+o7hi+RAoFfSPnezB/7jaPszSEUDzj1QXsH4NnxHAZSXl+etiiVi15Up3/vE9lPM2RgNJr4/cVRsH7DRC/wLX8hdsxGUgnQdvwG4oqtgj+9Zf8N6u3rYywqsVt32b9ul0WN70FeAfnXxHtmmR6bC6WDlNDO5c2H4AsoyDv1s7pyglsuCru9ZJT2W378j4An6QK10sHOK+ELob99eaScCt/MPS93M3dU9p81XukNX8/A9yy5i+F6l+XZzP+op+v7orOR5YE+r8S4Xq5yi1xvi29DXqWvduo1Xbakh5CPYq5FcXE/wx/KcKuJTzet+m8a/E/SrMT3kHdN/qflY4LWuNjLgm8K9kAv4dnmuPAO8fSDr7mDPQG9EN8goPQKpE/Wd9h6BP6MDwO0JGK8WPlLkvwkij1fk82n2XknzUbtK9QoPHy3Ujb2WrNMZcLHKNXphv8XCDlXuwn5jzUid0O/e1iL061W/vx7uNvrWBtCvTB70DnnL9ZvB6Ui3zRDU7GU9hTPrOjPiO+DTT46K0hXeIkuM3YXf2YDAC2dle7eEvG165fv3NOOVor4DHz3FWI2PQ+Fv9zXH8hR70vyDiv0U7GdPqE2UHNt/tsbFKsfohb1o4zVXgR8p9ryX3TW62fxa54AEeizPv9AizeeDG3/6J/oDPYS2s0eezL7Wdy79hkn4sgxLv7c+tV9Xr8z//vhDN2qtW7UefOvnVWnr1tccbd27AzU1TSDWvj+5Y+vWvahpR9OiaKLpzcWJrWOD7Bu1Y8LWwEsuUrlHD3voZ4v3qxTrPS/pItXK6IX+v9SVl8BfxFoNegByyzzP+05/cgn7xa5rrG59NvvL+cZFf3W6xPy/osv/Fv0VV17S/15/tlMGKgzCMBDdnRPUMQT//2MnEzlDtsXBGBLzKppESds76kA5L+u76VYkZ+zgrJ/hUH/t5NzXQ++8b8v73PQNXluPpi/vEzMODVfrnfe89u00Fhlph46Q8957silyQpgz770Hi5RAZ96Dd9AVFFCl3dBHtK3omlIJTVlPZe6dAj38uxgeXIBgtXLegSI1l4+g/E9K4HtQVmI6QSme2RItGcLJbE2d5mGmXG4q7gQIt6gpg6/2CzBzFAG++nIZ2obS7UpUVq54k6mXa6TcKOaaamIVTUvddGl5tq5hgxm/YyNIIIDdcSAAAgEU/USAv6J9nAacXYCiKA7MA+GXkkIQgKoxAAAAAElFTkSuQmCC"
													alt="What Is Character"
												/>
											</div>
										</div>
										<h3 className="text-16px font-600 mt-14px mb-6px">
											Guide - What is Character？
										</h3>
										<p className="text-14px font-400 m-0">
											Character is your Crossbell profile where you can check
											all the content synced from other social media and also
											browse your treasure collection and achievements.
										</p>
									</div>
								}
								openDelay={200}
								multiline={true}
								transition="pop-bottom-left"
								withArrow={true}
							>
								<Text className="i-csb:circle-help inline-block transform -translate-y-1/2" />
							</Tooltip>
						</span>
					}
					icon={<MemberIcon className="text-[#FFB74D]" />}
					className="mb-24px flex flex-col items-center"
				>
					<TextInput
						type="text"
						value={store.characterName}
						onChange={(e) => store.updateCharacterName(e.currentTarget.value)}
						onBlur={() => store.validateCharacterName()}
						onKeyDown={({ key }) => {
							if (key === "Enter") {
								register();
							}
						}}
					/>
				</Field>

				<div className="flex justify-end mt-48px">
					<NextStepButton
						disabled={!store.computed.canRegister}
						onClick={register}
						className="px-50px"
					>
						Mint
					</NextStepButton>
				</div>
			</div>
			<LoadingOverlay visible={store.computed.isPending} />
		</>
	);
}
