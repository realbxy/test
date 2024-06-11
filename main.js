(() => {
	var t, e = {
			2: (t, e, s) => {
				var a = s(1620),
					i = s(3658),
					{
						R: n
					} = s(3658),
					r = a.T.S,
					o = a.T.U,
					l = a.T.V,
					c = new PIXI.Container,
					u = {};

				function h() {
					return (new Date).toLocaleTimeString()
				}

				function d(t, e = !1) {
					if (e && t < 1)
						return "instant";
					t = Math.floor(t);
					const s = Math.floor(t / 60),
						a = Math.floor(s / 60);
					return s < 1 ? e ? `${t}s` : "<1min" : a < 1 ? `${s}min` : s % 60 == 0 ? `${a}hr` : `${a}hr ${s % 60}min`
				}

				function p(t, e, s) {
					t.width = t.height = r;
					var a = t.getContext("2d"),
						i = r / 2;
					if (e) {
						if (a.save(),
							s) {
							var n = new Path2D;
							n.ellipse(i, i, i, i, 0, 0, 2 * Math.PI),
								a.clip(n)
						}! function(t, e) {
							var s = r / e;
							t.globalAlpha = .1,
								t.strokeStyle = "#202020",
								t.beginPath();
							for (var a = 1; a < e; a++) {
								var i = a * s;
								t.moveTo(i, 0),
									t.lineTo(i, r),
									t.moveTo(0, i),
									t.lineTo(r, i)
							}
							t.stroke(),
								t.closePath()
						}(a, 5),
						function(t, e) {
							var s = r / e,
								a = s / 2;
							t.globalAlpha = .1,
								t.font = "14px Nunito",
								t.textAlign = "center",
								t.textBaseline = "middle",
								t.fillStyle = "#ffffff";
							for (var i = 0; i < e; i++)
								for (var n = i * s + a, o = 0; o < e; o++) {
									var l = String.fromCharCode(97 + o).toUpperCase() + (i + 1),
										c = o * s + a;
									t.strokeText(l, n, c),
										t.fillText(l, n, c)
								}
						}(a, 5)
					}
					a.restore(),
						s && (a.globalAlpha = .45,
							a.beginPath(),
							a.arc(i, i, i + 1, -Math.PI / 2, 0),
							a.lineTo(r, 0),
							a.closePath(),
							a.fill())
				}
				t.exports = {
					data: () => ({
						W: !1,
						X: !1,
						Y: !0,
						aa: !1,
						ba: null,
						ca: !1,
						da: !1,
						ea: !1,
						fa: !1,
						ga: !1,
						ha: !1,
						ia: h(),
						ja: d(0, !1),
						ka: null,
						la: 0,
						ma: 0,
						na: 0,
						oa: 0,
						pa: null,
						qa: a.ra
					}),
					computed: {
						sa() {
							if (this.qa.ta) {
								var t = this.qa.ta.slots;
								return Math.min(this.na, t) + " / " + t + " players"
							}
							return this.na + " player" + (1 === this.na ? "" : "s")
						}
					},
					methods: {
						ua(t) {
							var e = PIXI.autoDetectRenderer({
								resolution: 1,
								view: t,
								width: r,
								height: r,
								forceCanvas: !a.T.va,
								antialias: !1,
								powerPreference: "high-performance",
								transparent: !0
							});
							e.clear(),
								this.wa = e
						},
						xa() {
							c.destroy(!0),
								c = new PIXI.Container,
								this.wa.clear()
						},
						ya() {
							this.ba || (this.W = !0,
								a.R.$on(n.za, this.Aa),
								this.ba = setInterval(this.Ba, 1e3 / o))
						},
						Ca() {
							this.ba && (this.W = !1,
								a.R.$off(n.za, this.Aa),
								clearInterval(this.ba),
								this.ba = null,
								this.la = 0,
								this.na = 0)
						},
						Da(t, e, s, a) {
							var i = u[t];
							i && i.destroy(!0),
								null == s && (s = 16777215),
								null == a && (a = 16777215);
							var n, r, o = new PIXI.Container;
							o.Ea = {},
								o.addChild((n = a,
									(r = new PIXI.Graphics).beginFill(n),
									r.drawCircle(0, 0, 5),
									r.endFill(),
									r)),
								e && o.addChild(function(t, e) {
									var s = new PIXI.Text(t, {
										strokeThickness: 4,
										lineJoin: "round",
										fontFamily: "Nunito",
										fill: e,
										fontSize: 12
									});
									return s.anchor.set(.5),
										s.pivot.y = 15,
										s
								}(e, s)),
								u[t] = o
						},
						Fa(t) {
							var e = u[t];
							e && (e.destroy(!0),
								delete u[t])
						},
						Aa(t) {
							c.removeChildren();
							for (var e = 0; e < t.length; e++) {
								var s = t[e],
									a = u[s.Ga];
								a && (a.Ea.x = s.Ha * r,
									a.Ea.y = s.Ia * r,
									c.addChild(a))
							}
							this.Ba()
						},
						Ba() {
							for (var t = c.children, e = l * (30 / o), s = 0; s < t.length; s++) {
								var a = t[s];
								a.position.x = i.Ja(a.position.x, a.Ea.x, e),
									a.position.y = i.Ja(a.position.y, a.Ea.y, e)
							}
							this.wa.render(c)
						}
					},
					created() {
						a.R.$on(n.Ka, this.Da),
							a.R.$on(n.La, this.Fa),
							a.R.$on(n.Ma, (t => this.oa = t)),
							a.R.$on(n.Na, (() => {
								this.X = a.Pa.Oa,
									a.Qa || p(this.$refs.locations, this.aa, this.X)
							})),
							a.R.$on(n.Ra, (() => {
								this.oa = 0,
									this.ma = 0,
									this.xa()
							})),
							a.R.$on(n.Sa, (() => {
								this.W = a.T.Ta && a.Ua && !a.Qa,
									this.Y = !a.Qa,
									this.ca = a.T.ca,
									this.da = a.T.da,
									this.ea = a.T.ea,
									this.fa = a.T.fa,
									this.ga = a.T.ga,
									this.ha = a.T.ha,
									this.aa = a.T.Va,
									p(this.$refs.locations, this.aa, this.X),
									this.W ? this.ya() : this.Ca()
							})),
							a.R.$on(n.Wa, (() => {
								this.la = a.ra.la,
									this.ma = a.ra.ma && a.Xa(a.ra.ma),
									this.na = a.Ua && a.Ya.na,
									this.ia = h();
								var t = (Date.now() - this.pa) / 1e3;
								this.ja = d(t, !1),
									this.oa && a.Za ? (t = (this.oa - a.Za) / 25,
										this.ka = d(t, !0)) : this.ka = null
							}))
					},
					mounted() {
						this.ua(this.$refs.minimap),
							this.pa = Date.now()
					}
				}
			},
			3958: t => {
				t.exports = {
					data: () => ({})
				}
			},
			9617: (t, e, s) => {
				var a = s(3162),
					i = s(1620),
					n = s(3117),
					{
						R: r
					} = s(3658);
				t.exports = {
					props: {
						ab: {
							type: Object,
							required: !0
						}
					},
					methods: {
						async bb() {
							if (!i.eb.cb || await n.fb("You will be disconnected. Continue?"))
								try {
									i.ab.bb(this.ab.gb)
								} catch (t) {
									console.error(t),
										n.hb("Replay data is corrupted!"),
										i.ib()
								}
						},
						jb() {
							n.kb.fire({
								input: "text",
								inputValue: this.ab.lb,
								showCancelButton: !0,
								confirmButtonText: "Download",
								html: "Only Vanis.io can read replay files.<br>It consists of player positions and other game related data."
							}).then((t => {
								var e = t.value;
								if (e) {
									var s = new Blob([this.ab.gb]);
									a.saveAs(s, e + ".vanis")
								}
							}))
						},
						mb() {
							n.fb("Are you sure that you want to delete this replay?", (() => {
								i.ab.nb().then((t => t.delete(i.ab.ob, this.ab.lb))).then((() => {
									i.R.$emit(r.pb)
								}))
							}))
						}
					}
				}
			},
			5372: (t, e, s) => {
				var a = s(5097),
					i = s(2323),
					{
						R: n
					} = s(3658),
					r = i.qb,
					o = i.rb,
					l = a.sb;

				function c(t) {
					t = t || 0;
					var e = new PIXI.Graphics;
					return e.lineStyle(a.tb, 0, .5),
						e.beginFill(t),
						e.drawCircle(0, 0, a.sb / 2),
						e.endFill(),
						e
				}
				t.exports = class {
					constructor(t, e, s) {
						this.ub = t,
							this.Ga = e,
							this.vb = s,
							this.wb = {},
							this.xb = null,
							this.yb = null,
							this.zb = e === this.ub.Ab,
							this.Bb = PIXI.RenderTexture.create(l, l),
							this.Cb = this.Db(),
							this.Eb(),
							this.Fb = 0,
							this.Gb = 0
					}
					Hb(t) {
						this.Ib = t;
						for (var e = this.Ga, s = this.ub.Jb, a = 0; a < s.length; a++) {
							var i = s[a];
							i.Ga === e && (t ? i.Kb() : i.Lb())
						}
					}
					Db() {
						var t = new PIXI.Container,
							e = c(this.Mb());
						return t.pivot.set(-l / 2),
							t.addChild(e),
							t
					}
					Nb(t) {
						var e = new PIXI.BaseTexture(t),
							s = new PIXI.Texture(e),
							i = new PIXI.Sprite(s);
						return i.width = i.height = a.sb,
							i.anchor.set(.5),
							i
					}
					Eb() {
						this.ub.wa.render(this.Cb, this.Bb, !0),
							this.Ob && this.Pb(this.Ob)
					}
					Qb(t) {
						return t || (t = null),
							t !== this.yb && (this.yb = t,
								!0)
					}
					Rb(t) {
						return null != t ? (t = parseInt(t, 16),
								this.Sb = t,
								this.Tb = PIXI.utils.hex2string(t)) : (this.Sb = null,
								this.Tb = null),
							this.Sb
					}
					Ub(t) {
						return t || (t = "Unnamed"),
							(this.Vb !== t || this.Wb != this.wb.perk_color) && (this.Vb = t,
								this.Wb = this.wb.perk_color || this.wb.nameColor,
								this.Xb(),
								!0)
					}
					Xb() {
						var t, e = "Unnamed" === this.Vb,
							s = "Long Name" === this.Vb,
							i = e ? "" : this.Vb,
							r = this.lb,
							o = this.Sb;
						if (t = e || s ? this.Rb(null) : this.Rb(this.Wb),
							this.Yb(i, t),
							!e && !s && this.Zb.texture.width > a.ac && (s = !0,
								i = "Long Name",
								t = this.Rb(null),
								this.Yb(i, t)),
							this.lb = e ? "Unnamed" : i,
							r !== this.lb || o !== this.Sb) {
							var l = null != t ? t : this.zb ? 16747520 : null;
							this.ub.R.$emit(n.Ka, this.Ga, i, t, l)
						}
					}
					Yb(t, e) {
						this.Zb ? this.Zb.text = t : this.Zb = new PIXI.Text(t, a.bc),
							this.Zb.style.fill = null != e ? e : 16777215,
							this.Zb.updateText()
					}
					cc(t) {
						return t || (t = null),
							t !== this.xb && (this.dc(),
								this.ec() && this.Eb(),
								this.xb = t,
								this.fc && this.gc(),
								!0)
					}
					ec() {
						return !!this.hc && (this.hc.mask.destroy(!0),
							this.hc.destroy(!0),
							this.hc = null,
							!0)
					}
					dc() {
						this.ic && (this.ic(),
							this.ic = null)
					}
					gc() {
						this.ic = this.ub.kc.jc("https://skins.vanis.io/s/" + this.xb, (t => {
							this.dc(),
								this.hc = this.Nb(t),
								this.hc.mask = c(),
								this.Cb.addChild(this.hc.mask, this.hc),
								this.Eb()
						}))
					}
					lc() {
						var t, e, s;
						if (this.zb)
							t = a.mc,
							e = a.nc,
							s = a.oc;
						else {
							var i = this.ub.yb === this.yb ? 1 : 2;
							t = a.qc >= i,
								e = a.rc >= i,
								s = a.sc >= i
						}
						t = a.tc && t,
							e = a.uc && e,
							s = a.vc && s,
							e && !this.fc ? this.hc ? (this.hc.visible = !0,
								this.Eb()) : this.xb && this.gc() : !e && this.fc && (this.dc(),
								this.hc && (this.hc.visible = !1,
									this.Eb())),
							this.wc = t,
							this.fc = e,
							this.xc = s
					}
					Mb() {
						var t = this.ub.yc(this.Ga),
							e = Math.floor(t * r.length);
						return (this.vb ? o : r)[e]
					}
					zc() {
						this.dc(),
							this.ec(),
							this.Cb.destroy(!0),
							this.Bb.destroy(!0),
							this.Bb.Ac = !0,
							this.Zb && this.Zb.destroy(!0),
							this.ub.R.$emit(n.La, this.Ga)
					}
				}
			},
			1903: (t, e, s) => {
				var a = s(5372);
				t.exports = class {
					constructor(t) {
						this.ub = t,
							this.Bc = {},
							this.Cc = [],
							this.na = 0
					}
					Dc(t) {
						return this.Bc[t] || null
					}
					Ec({
						pid: t,
						nickname: e,
						skin: s,
						skinUrl: i,
						tagId: n,
						bot: r,
						...o
					}) {
						var l = this.Bc[t];
						l || (l = this.Bc[t] = new a(this.ub, t, r),
								r || this.na++),
							null != i && (s = i.replace("https://skins.vanis.io/s/", "")),
							l.wb = o;
						var c = l.Ub(e),
							u = l.cc(s),
							h = l.Qb(n);
						return (c || u || h) && l.lc(),
							l
					}
					lc(t = []) {
						for (var e in this.Bc) {
							var s = this.Bc[e]; -
							1 === t.indexOf(s) && s.lc()
						}
					}
					Fc() {
						var t = this.ub.Gb;
						this.ub.ab.Gc.length > 0 && (t = this.ub.ab.Gc[0].Gb);
						for (var e = 0; e < this.Cc.length;) {
							var s = this.Cc[e],
								a = this.Bc[s];
							a ? t > a.Gb && this.ub.Fb > a.Fb ? (this.Hc(s),
								this.Cc.splice(e, 1)) : e++ : this.Cc.splice(e, 1)
						}
					}
					Ic(t) {
						this.Cc.push(t)
					}
					Hc(t) {
						var e = this.Bc[t];
						e && (e.vb || this.na--,
							e.zc(),
							delete this.Bc[t])
					}
					Jc() {
						for (var t in this.Bc)
							this.Hc(t);
						this.Cc.splice(0, this.Cc.length)
					}
				}
			},
			4578: (t, e, s) => {
				var a = s(5097),
					i = s(1601),
					n = s(1568),
					r = PIXI.utils.isWebGLSupported() && a.va,
					o = 1024,
					l = 10,
					c = 10 * l;
				var u, h = 1024;
				var d, p = 1024,
					v = null;

				function f() {
					null != d && (d.destroy(),
						d = null,
						v = null)
				}
				t.exports = class {
					constructor(t, e) {
						this.ub = t,
							this.Pa = e,
							this.Kc = new PIXI.Container,
							this.Lc = new PIXI.Container,
							this.Lc.sortableChildren = !0,
							this.Mc = new PIXI.Container,
							this.Nc = new PIXI.Container,
							this.Nc.visible = a.Oc,
							this.Kc.addChild(this.Lc, this.Nc, this.Mc),
							this.Pc(),
							this.Qc(),
							this.Rc(),
							this.Sc(!0)
					}
					Pc() {
						this.Kc.position.x = window.innerWidth / 2,
							this.Kc.position.y = window.innerHeight / 2
					}
					Tc() {
						this.Mc.children.sort(((t, e) => (t = t.Vc).Uc === (e = e.Vc).Uc ? t.Wc - e.Wc : t.Uc - e.Uc))
					}
					Xc(t) {
						this.Mc.addChild(t)
					}
					Yc(t) {
						this.Nc.addChild(t)
					}
					Jc() {
						this.Zc(!1),
							this.ad.destroy(!0),
							f(),
							delete this.ad,
							delete this.bd
					}
					Zc(t) {
						null != this.dd && (this.dd.destroy(!!t),
							this.Pa.Oa && (this.Lc.removeChild(this.bd),
								delete this.bd),
							delete this.dd)
					}
					ed() {
						if (r && a.fd && a.gd) {
							var t = (a.hd ? PIXI.TilingSprite : PIXI.Sprite).from(a.gd, {});
							t.alpha = a.jd,
								t.zIndex = 1,
								t.anchor.set(.5),
								this.Pa.Oa && (this.bd = (null == u && ((u = new PIXI.Graphics).beginFill(16777215),
											u.drawEllipse(h / 2, h / 2, h / 2, h / 2),
											u.endFill(),
											u.pivot.set(h / 2, h / 2)),
										u),
									this.bd.zIndex = 2,
									t.mask = this.bd,
									this.Lc.addChild(this.bd)),
								this.Lc.addChild(t),
								this.dd = t,
								this.kd()
						}
					}
					Sc(t) {
						null != this.dd && this.Zc(t),
							this.ed()
					}
					Rc() {
						this.ld = this.Pa.md / this.Pa.nd,
							this.ad = function(t, e, s) {
								var i = PIXI.utils.string2hex(a.od),
									r = new PIXI.Graphics;
								r.lineStyle(l, i, 1, .5),
									t ? r.drawEllipse(o / 2 * s, o / 2, o / 2 * s, o / 2) : r.drawRect(l / 2, l / 2, o * s - l, o - l),
									e && (r.filters = [new PIXI.filters.BlurFilter(c, 100)]);
								var u = o * s + c,
									h = o + c,
									d = PIXI.RenderTexture.create(u, h);
								r.pivot.set(o / 2 * s, o / 2),
									r.position.set(u / 2, h / 2),
									n.render(r, d, !0),
									r.destroy();
								var p = new PIXI.Sprite(d);
								return p.pivot.set(u / 2, h / 2),
									p
							}(this.Pa.Oa, this.Pa.pd, this.ld),
							this.ad.zIndex = 4,
							this.Lc.addChild(this.ad),
							this.kd()
					}
					kd() {
						var t = this.Pa.md / this.Pa.nd;
						if (t !== this.ld && !this.Pa.pd)
							return this.Lc.removeChild(this.ad),
								this.ad.destroy(!0),
								void this.Rc();
						this.ad.scale.set(this.Pa.md / (o - 2 * l) / t, this.Pa.nd / (o - 2 * l)),
							this.ad.position.set(this.Pa.Ha, this.Pa.Ia),
							null != this.dd && (this.dd.width = this.Pa.md,
								this.dd.height = this.Pa.nd,
								this.dd.position.set(this.Pa.Ha, this.Pa.Ia),
								null != this.bd && (this.bd.scale.set(this.Pa.md / h, this.Pa.nd / h),
									this.bd.position.set(this.Pa.Ha, this.Pa.Ia)))
					}
					qd() {
						var t;
						null != this.ub.rd ? (null == this.sd && (this.sd = (t = this.Pa.Oa,
									v !== t && f(),
									null != d || (d = new PIXI.Graphics,
										v = t,
										d.beginFill(65280),
										t ? d.drawEllipse(p / 2, p / 2, p / 2, p / 2) : d.drawRect(0, 0, p, p),
										d.endFill(),
										d.pivot.set(p / 2, p / 2)),
									d),
								this.sd.zIndex = 3,
								this.sd.alpha = .1,
								this.Lc.addChild(this.sd)),
							this.sd.position.set(this.ub.rd.Ha, this.ub.rd.Ia),
							this.sd.scale.set(this.ub.rd.md / p, this.ub.rd.nd / p)) : null != this.sd && (this.Lc.removeChild(this.sd),
							this.sd = null)
					}
					td(t) {
						2 === t ? i.vd.ud(a.wd) : this.ub.Jb.forEach((e => e.xd === t && e.yd()))
					}
					zd() {
						for (let t in this.ub.Ya.Bc) {
							this.ub.Ya.Bc[t].Xb()
						}
					}
					Ad() {
						for (var t = a.bc, e = 0; e < this.ub.Jb.length; e++) {
							var s = this.ub.Jb[e];
							s.Bd && s.Zb && (s.Zb.destroy(!1),
								s.Zb = null)
						}
						for (let e in this.ub.Ya.Bc) {
							var i = this.ub.Ya.Bc[e];
							if (i.Zb) {
								var n = i.Zb.style.fill;
								i.Zb.style = t,
									i.Zb.style.fill = n,
									i.Zb.updateText()
							}
						}
					}
					Qc() {
						var t = a.Cd;
						for (PIXI.BitmapFont.from("mass", t, {
								chars: "1234567890kM."
							}); this.ub.Dd.length;)
							this.ub.Dd.pop().destroy(!1);
						for (var e = 0; e < this.ub.Jb.length; e++) {
							var s = this.ub.Jb[e];
							s.Bd && s.Ed && (s.Fd.removeChild(s.Ed),
								s.Ed.destroy(!1),
								s.Ed = null)
						}
					}
					Gd() {
						PIXI.BitmapFont.uninstall("mass")
					}
				}
			},
			5424: (t, e, s) => {
				t.exports = class {
					constructor() {
						this.Hd = {},
							this.Id = new Worker(new URL(s.p + s.u(18), s.b)),
							this.Id.addEventListener("message", this.Jd.bind(this))
					}
					Kd(t) {
						return {
							Ld: null,
							Md: null,
							Nd: [t]
						}
					}
					Od() {
						for (var t in this.Hd)
							delete this.Hd[t]
					}
					Pd(t, e) {
						var s = t.Nd.indexOf(e);
						s >= 0 && t.Nd.splice(s, 1)
					}
					jc(t, e) {
						var s = this.Hd[t];
						return s ? s.Ld ? (e(s.Ld),
							null) : s.Md ? null : (s.Nd.push(e),
							this.Pd.bind(this, s, e)) : (s = this.Hd[t] = this.Kd(e),
							this.Id.postMessage(t),
							this.Pd.bind(this, s, e))
					}
					Jd(t) {
						var {
							a: e,
							b: s,
							c: a
						} = t.data, i = this.Hd[e];
						if (a)
							return console.error("Skin", e, "failed loading: ", a),
								i.Md = !0,
								void(i.Nd = []);
						for (i.Ld = s; i.Nd.length;)
							i.Nd.pop()(s)
					}
				}
			},
			4895: (t, e, s) => {
				var a = s(1620),
					i = s(5097),
					{
						Qd: n,
						Rd: r,
						R: o,
						Sd: l
					} = s(3658),
					c = a.Td = {};
				c.Ud = t => {
						if (a.ra.Vd)
							return !1;
						a.Wd = !0;
						var e = n(t ? 3 : 1);
						return e.setUint8(0, 2),
							t && e.setInt16(1, t, !0),
							a.eb.Xd(e),
							!0
					},
					c.Yd = () => {
						var t = new l;
						t.Zd(1),
							r(t),
							a.eb.Xd(t.ae())
					},
					c.be = () => {
						a.eb.ce(10)
					},
					c.de = t => {
						var e;
						null != t ? ((e = n(2)).setUint8(0, 21),
								e.setUint8(1, +t)) : (e = n(1)).setUint8(0, 21),
							a.eb.Xd(e)
					},
					c.ee = t => {
						a.Ua && (void 0 === t && (t = !a.fe),
							t && (c.ge(!1),
								c.he(!1),
								a.ie(!0),
								a.eb.je()),
							a.fe = t,
							a.R.$emit(o.ke))
					},
					c.ge = t => {
						a.Ua && (void 0 === t && (t = !a.le),
							t && (c.ee(!1),
								c.he(!1)),
							a.le = t,
							a.R.$emit(o.ke))
					},
					c.he = t => {
						a.Ua && (void 0 === t && (t = !a.ne),
							t && (a.ie(),
								a.eb.je(),
								a.eb.ce(15),
								c.ee(!1),
								c.ge(!1)),
							a.ne = t,
							a.R.$emit(o.ke))
					},
					c.oe = () => {
						c.ee(!0),
							c.pe(3),
							c.qe && clearTimeout(c.qe),
							c.qe = setTimeout((() => {
								delete c.qe,
									c.ee(!1)
							}), 750)
					},
					c.pe = (t, e = 0) => {
						if (e && a.T.re)
							return a.se = e,
								void(a.te = t);
						a.ne || (a.ie(),
							a.eb.je());
						var s = n(2);
						s.setUint8(0, 17),
							s.setUint8(1, t),
							a.eb.Xd(s)
					},
					c.ue = t => {
						var e = Math.pow(1 - i.ve / 100, t);
						a.we = Math.min(Math.max(a.we * e, .01), 1)
					},
					c.xe = t => {
						a.we = .8 / Math.pow(2, t - 1)
					},
					c.ye = () => {
						a.Wd && (c.ze(!0) && a.Td.Ud(target.Ga))
					},
					c.Ae = () => {
						var t = c.ze(!0);
						a.Be = t && t.Ga
					},
					c.ze = t => {
						for (var e = a.Ce, s = null, i = 1 / 0, n = a.Jb.filter((t => t.Ga)).sort(((t, e) => t.Uc - e.Uc)), r = 0; r < n.length; r++) {
							var o = n[r],
								l = o.Ha - e.Ha,
								c = o.Ia - e.Ia,
								u = Math.sqrt(Math.abs(l * l + c * c)) - o.Uc;
							if (t)
								u < i && (i = u,
									s = o);
							else if (u <= 0)
								return o
						}
						return s
					},
					c.De = function(t) {
						t = void 0 === t ? !i.uc : t,
							i.Ee("skinsEnabled", t),
							a.Ya.lc()
					},
					c.Fe = function(t) {
						t = void 0 === t ? !i.tc : t,
							i.Ee("namesEnabled", t),
							a.Ya.lc()
					},
					c.Ge = function() {
						var t = !i.vc;
						i.Ee("massEnabled", t),
							a.Ya.lc()
					},
					c.He = function(t) {
						t = void 0 === t ? !i.Oc : t,
							i.Ee("foodVisible", t),
							a.Ie.Nc.visible = t
					},
					c.Je = function() {
						i.Ee("showHud", !i.Ke),
							a.Ua && a.R.$emit(o.Sa)
					},
					c.Le = function() {
						i.Ee("showChat", !i.Me),
							a.Ua && a.R.$emit(o.Sa)
					},
					c.Ne = function() {
						i.Ee("showChatToast", !i.Oe),
							a.R.$emit(o.Sa)
					}
			},
			473: t => {
				var e = new class {
					constructor() {
						this.Pe = {}
					}
					Qe(t, e, s) {
						this.Pe[t] = {
							elementId: e,
							lastRefresh: 0,
							waitInterval: s || 0
						}
					}
					Re(t) {
						return this.Pe[t] || null
					}
					Se(t) {
						aiptag.cmd.display.push((function() {
							aipDisplayTag.display(t)
						}))
					}
					Te(t) {
						var e = this.Re(t);
						if (!e)
							return !1;
						var s = Date.now();
						return !(e.lastRefresh + 1e3 * e.waitInterval > s) && (e.lastRefresh = s,
							this.Se(e.elementId),
							!0)
					}
				};
				e.Qe("menu-box", "vanis-io_300x250", 30),
					e.Qe("menu-banner", "vanis-io_728x90", 120),
					e.Qe("death-box", "vanis-io_300x250_2", 30),
					t.exports = {
						Ue(t) {
							var e = window.aiptag = e || {};
							e.cmd = e.cmd || [],
								e.cmd.display = e.cmd.display || [],
								e.gdprShowConsentTool = !0;
							var s = document.createElement("script");
							s.onload = t,
								s.src = "//api.adinplay.com/libs/aiptag/pub/VAN/vanis.io/tag.min.js",
								document.head.appendChild(s)
						},
						Te: t => e.Te(t),
						Ve() {
							e.Te("menu-box"),
								e.Te("menu-banner")
						}
					}
			},
			1050: t => {
				t.exports = new class {
						constructor(t, e) {
							this.url = t,
								this.We = e
						}
						Xe(t) {
							this.We = t,
								localStorage.vanisToken = t
						}
						Ye() {
							this.We = null,
								delete localStorage.vanisToken
						}
						async Ze(t, e, s, a) {
							var i = {
								method: t,
								credentials: "omit",
								mode: "cors",
								redirect: "error",
								headers: {
									Accept: "application/json, text/plain"
								}
							};
							this.We && (i.headers.Authorization = `Vanis ${this.We}`),
								s && (i.headers["Content-Type"] = "application/json",
									i.body = JSON.stringify(s)),
								i && Object.assign(i, a);
							try {
								return await fetch(this.url + e, i)
							} catch (t) {
								return {
									ok: !1,
									status: 0,
									statusText: "Client error",
									text: async () => t.message
								}
							}
						}
						get(t) {
							return this.Ze("GET", t)
						}
					}
					("https://vanis.io/api", localStorage.vanisToken || null)
			},
			2323: (t, e) => {
				t.exports.af = [16776960, 65280, 65535, 16711935],
					t.exports.qb = [16711680, 16744448, 16776960, 8453888, 65280, 65408, 65535, 33023, 8388863, 16711935, 16711808],
					t.exports.rb = e.qb.map((t => {
						var e = t >> 16 & 255,
							s = t >> 8 & 255,
							a = 255 & t;
						return (e *= .5) << 16 | (s *= .5) << 8 | (a *= .5) >> 0
					}))
			},
			125: (t, e, s) => {
				var a = s(1050),
					i = s(1620),
					n = s(3117),
					r = s(1230),
					o = s(5694),
					{
						Qd: l,
						Rd: c,
						R: u,
						Sd: h
					} = s(3658);
				i.eb = {},
					i.eb.cb = !1,
					i.eb.Xd = function(t) {
						i.eb.cb && i.wh.send(t)
					},
					i.eb.je = function() {
						var t = l(5);
						t.setUint8(0, 16),
							t.setInt16(1, i.Ce.Ha, !0),
							t.setInt16(3, i.Ce.Ia, !0),
							i.eb.Xd(t)
					},
					i.eb.ce = function(t) {
						var e = l(1);
						e.setUint8(0, t),
							i.eb.Xd(e)
					},
					i.eb.bf = function(t) {
						var e = new h;
						e.Zd(5),
							e.Zd(i.cf),
							e.df(t),
							c(e);
						var s = localStorage.vanisToken;
						s && /^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i.test(i.wh.url) && e.ef(s),
							i.eb.Xd(e.ae())
					},
					i.eb.ff = function(t) {
						var e = new h;
						e.Zd(11),
							e.ef(t),
							i.eb.Xd(e.ae())
					},
					i.eb.gf = function(t) {
						for (var e = unescape(encodeURIComponent(t)), s = [99], a = 0; a < e.length; a++)
							s.push(e.charCodeAt(a));
						var n = new Uint8Array(s).buffer;
						i.eb.Xd(n)
					};
				var d = 0;

				function p(t, e) {
					n.hf.fire({
						type: e ? "error" : "info",
						title: t,
						timer: e ? 5e3 : 2e3
					})
				}

				function v(t) {
					if (delete i.if,
						i.eb.cb = !1,
						i.Ua && i.ib(),
						1003 === t.code)
						setTimeout((() => !i.eb.cb && i.R.$emit(u.jf)), 1500),
						p("Server restarting...");
					else if (1001 !== t.code) {
						var e = "You have been disconnected";
						t.reason && (e += " (" + t.reason + ")"),
							4001 === t.code && (a.Ye(),
								i.R.$emit(u.kf, null)),
							p(e, !0)
					}
					i.lf(!0, !0)
				}
				i.eb.mf = function(t, e) {
						i.eb.nf(e)
					},
					i.eb.nf = function(t) {
						null,
						i.Ua && i.ib(),
						i.eb.pf(),
						i.eb.cb = !0;
						var e = i.wh = new o(t, "tFoL46WDlZuRja7W6qCl");
						e.binaryType = "arraybuffer",
						e.onopen = function() {
							i.eb.cb && (i.if = e.Wc = d++,
								i.R.$emit(u.qf, e.Wc),
								i.R.$emit(u.rf, e.Wc),
								i.R.$emit(u.sf, e.Wc),
								i.R.$emit(u.tf, e.Wc),
								i.R.$emit(u.uf, e.Wc),
								i.ra.vf = t,
								e.onclose = v)
						},
						e.onclose = function() {
							! function(t = 0) {
								null,
								delete i.if,
								i.eb.cb = !1,
								p(["Connection failed!", "Cannot connect!", "Connection rejected!"][t], !0)
							}(0)
						},
						e.onmessage = function(t) {
							r(new DataView(t.data))
						}
					},
					i.eb.pf = function() {
						i.wh && (i.ra.vf = null,
							i.wh.onmessage = null,
							i.wh.onclose = null,
							i.wh.onerror = null,
							i.wh.close(),
							delete i.wh,
							i.eb.cb = !1)
					}
			},
			7091: (t, e, s) => {
				var a = s(1620),
					i = s(1601);
				t.exports = class {
					constructor(t) {
						this.Wc = t.Wc,
							this.wf = t.wf,
							this.xf = this.Uc = t.Uc,
							this.yf = 0,
							this.zf = 1,
							this.Af = !1,
							this.Bb = t.Bb || i.Bf.getTexture(0),
							this.Fd = new PIXI.Sprite(this.Bb),
							this.Fd.anchor.set(.5),
							this.Fd.Vc = this,
							this.Ha = this.Cf = this.Fd.position.x = t.Ha,
							this.Ia = this.Df = this.Fd.position.y = t.Ia
					}
					Ef() {
						var t = (a.Fb - this.yf) / a.T.Ff;
						t = 0 > t ? 0 : 1 < t ? 1 : t,
							this.Ha = t * this.zf * (this.Gf - this.Cf) + this.Cf,
							this.Ia = t * this.zf * (this.Hf - this.Df) + this.Df;
						var e = 2 * (this.Uc = t * (this.If - this.xf) + this.xf),
							s = this.Fd.position.x !== this.Ha || this.Fd.position.y !== this.Ia || this.Fd.width !== e;
						if (this.Bb.Ac || !s)
							return !0;
						this.Fd.position.x = this.Ha,
							this.Fd.position.y = this.Ia,
							this.Fd.width = this.Fd.height = e,
							this.Jf && this.Jf()
					}
					Jc(t) {
						if (!this.Af) {
							this.Kf && this.Kf();
							var e = a.Jb.indexOf(this);
							e >= 0 && a.Jb.splice(e, 1),
								delete a.Lf[this.Wc],
								delete a.Mf[this.Wc],
								this.Af = !0,
								t ? a.Nf.push(this) : this.Of()
						}
					}
					Of() {
						this.Fd && (this.Fd.destroy(),
							this.Fd = null)
					}
				}
			},
			1748: (t, e, s) => {
				var a = s(7091);
				class i extends a {
					constructor(t) {
						t.Bb = PIXI.Texture.from("/img/coin.png"),
							super(t)
					}
				}
				i.prototype.xd = 9,
					i.prototype.isCoin = !0,
					t.exports = i
			},
			9538: (t, e, s) => {
				var a = s(7091);
				class i extends a {
					constructor(t) {
						t.Bb = PIXI.Texture.from("/img/crown.png"),
							super(t),
							this.Fd.alpha = .7
					}
				}
				i.prototype.xd = 6,
					i.prototype.isCrown = !0,
					t.exports = i
			},
			7972: (t, e, s) => {
				var a = s(7091),
					i = s(1601);
				class n extends a {
					constructor(t, e, s) {
						t.Bb = (s ? i.Qf : i.Bf).Pf(e || 4210752),
							super(t),
							this.Fd.alpha = .5
					}
				}
				n.prototype.xd = 5,
					n.prototype.isDead = !0,
					t.exports = n
			},
			256: (t, e, s) => {
				var a = s(5097),
					i = s(7091),
					n = s(1601);

				function r() {
					var t = PIXI.utils.string2hex(a.Rf);
					return n.Bf.Pf(t)
				}
				class o extends i {
					constructor(t) {
						t.Bb = r(),
							super(t)
					}
					yd() {
						this.Bb = r(),
							this.Fd.texture = this.Bb
					}
				}
				o.prototype.xd = 3,
					o.prototype.Sf = !0,
					t.exports = o
			},
			1065: (t, e, s) => {
				var a = s(7091),
					i = s(1601),
					n = s(5097),
					r = s(2323);

				function o(t) {
					var e;
					return e = n.Tf ? PIXI.utils.string2hex(n.Uf) : r.af[t % r.af.length],
						i.Bf.Pf(e)
				}
				class l extends a {
					constructor(t) {
						t.Bb = o(t.Wc),
							super(t)
					}
					yd() {
						this.Bb = o(this.Wc),
							this.Fd.texture = this.Bb
					}
				}
				l.prototype.xd = 4,
					l.prototype.Vf = !0,
					t.exports = l
			},
			8697: (t, e, s) => {
				var a = s(7091),
					i = s(1620);
				class n extends a {
					constructor(t, e) {
						super(t),
							this.Wf = e,
							this.Ga = e.Ga,
							e.Ib && this.Kb()
					}
					Kb() {
						if (!this.Xf) {
							var t, e = i.Yf;
							e.length ? t = e.pop() : ((t = PIXI.Sprite.from("/img/crown.png")).scale.set(.7),
									t.pivot.set(0, 643),
									t.anchor.x = .5,
									t.rotation = -.5,
									t.alpha = .7,
									t.zIndex = 2),
								this.Xf = t,
								this.Fd.addChild(t)
						}
					}
					Lb() {
						var t = this.Xf;
						t && (this.Fd.removeChild(t),
							i.Yf.push(t),
							this.Xf = null)
					}
					Jf() {
						this.Wf.Fb = i.Fb;
						var t, e, s, a = i.T,
							n = i.Ie.Kc.scale.x * this.Uc * i.wa.resolution,
							r = n > a.Zf;
						if (this.Wf.xc && !this.Ed && r && (this.Ed = i.Dd.pop() || (t = a.Cd,
									e = new PIXI.BitmapText("", {
										fontName: "mass",
										align: "right"
									}),
									s = t.strokeThickness || 0,
									e.position.set(-s / 2, -s / 2),
									e.anchor.set(.5, -.6),
									e),
								this.Ed.zIndex = 0,
								this.Fd.addChild(this.Ed)),
							this.Wf.wc && !this.Zb && this.Wf && this.Wf.Zb && r && (this.Zb = new PIXI.Sprite(this.Wf.Zb.texture),
								this.Zb.anchor.set(.5),
								this.Zb.zIndex = 1,
								this.Fd.addChild(this.Zb)),
							this.Xf && (this.Xf.visible = n > 16 && a.ag),
							this.Zb && (this.Zb.visible = this.Wf.wc && r),
							this.Ed)
							if (this.Wf.xc && r) {
								var o = i.Xa(this.If * this.If / 100);
								this.Ed.text = o,
									this.Ed.visible = !0
							} else
								this.Ed.visible && (this.Ed.visible = !1)
					}
					Kf() {
						this.Ed && (this.Fd.removeChild(this.Ed),
								i.Dd.push(this.Ed)),
							this.Xf && this.Lb()
					}
				}
				n.prototype.xd = 1,
					n.prototype.Bd = !0,
					t.exports = n
			},
			9396: (t, e, s) => {
				var a = s(7091),
					i = s(1601);
				class n extends a {
					constructor(t) {
						t.Bb = i.vd.Pf(),
							super(t)
					}
				}
				n.prototype.xd = 2,
					n.prototype.isVirus = !0,
					t.exports = n
			},
			1252: (t, e, s) => {
				t.exports.bg = s(8697),
					t.exports.cg = s(1065),
					t.exports.dg = s(9396),
					t.exports.eg = s(256),
					t.exports.fg = s(7972),
					t.exports.gg = s(9538),
					t.exports.hg = s(1748)
			},
			1620: (t, e, s) => {
				var a = s(5097),
					i = s(1568),
					n = s(4578),
					r = s(1903),
					o = s(1601),
					l = s(2934),
					c = s(5424),
					u = s(473),
					{
						Ja: h,
						ig: d,
						R: p
					} = s(3658),
					v = {};

				function f(t, e) {
					for (; t.length;)
						t.pop().destroy(e)
				}
				v.cf = 29,
					v.R = new l,
					v.T = a,
					v.wa = i,
					v.kc = new c,
					o.vd.ud(a.wd),
					v.ra = {
						vf: null,
						ta: null,
						jg: !1,
						la: 0,
						ma: 0,
						Vd: !1,
						kg: !1,
						lg: "Play",
						mg: !1,
						ng: !1
					},
					u.Ue(u.Ve),
					document.body.oncontextmenu = function(t) {
						return t.target && "email" === t.target.id
					},
					v.og = function() {
						return document.hasFocus()
					},
					v.pg = function(t) {
						if (!(t.qg && t.rg && t.Ab && t.Pa))
							throw "Lacking mandatory data";
						v.Ua = !0,
							v.Qa = !!t.sg,
							v.qg = t.qg,
							v.tg = t.ug || 0,
							v.rg = t.rg,
							v.vg = 0,
							v.Fb = 0,
							v.Za = 0,
							v.Gb = 0,
							v.Ab = t.Ab,
							v.yb = null,
							v.Wd = !1,
							v.ra.la = 0,
							v.ra.Vd = !1,
							v.wg = 0,
							v.xg = 0,
							v.Lf = {},
							v.Mf = {},
							v.Jb = [],
							v.Nf = [],
							v.yg = {},
							v.Ce = {},
							v.Pa = t.Pa,
							v.zg = t.zg,
							v.zg.Ag && null != v.Cg.Bg && (v.Cg.Dg = !0,
								v.R.$emit(p.Eg, "")),
							v.we = .5,
							v.Fg = {
								Gg: 0,
								Hg: 0,
								Ig: 0,
								Cf: t.Pa.Ha,
								Gf: t.Pa.Ha,
								Df: t.Pa.Ia,
								Hf: t.Pa.Ia,
								Jg: v.we,
								Kg: v.we
							},
							v.Dd = [],
							v.Yf = [],
							v.Ie = new n(v, v.Pa),
							v.Ie.Kc.pivot.set(t.Pa.Ha, t.Pa.Ia),
							v.Ie.Kc.scale.set(v.ue),
							v.Ya = new r(v),
							v.Lg = new PIXI.Ticker,
							v.Lg.add(v.Mg),
							v.ra.ta && v.ra.vf !== v.ra.ta.url && (v.ra.ta = null),
							v.Qa ? (v.Ng.Ee(t.sg),
								v.Og = setInterval(v.Ng.Pg, 40)) : (v.Qg = 0,
								v.Rg = 0,
								v.ne = !1,
								v.le = !1,
								v.fe = !1,
								v.Og = setInterval((() => {
									v.og() && (v.ne || (v.le ? v.eb.ce(9) : (v.ie(),
										v.eb.je())))
								}), 40),
								v.R.$on(p.Wa, v.Sg),
								v.ra.jg = !0,
								v.Tg = Date.now()),
							v.R.$emit(p.Sa),
							v.Lg.start();
						var e = v.Cg.Dg && v.Cg.zg.cheats;
						v.Ug(!0, e),
							v.R.$emit(p.Na)
					},
					v.Sg = function() {
						v.Vg.showMenu || v.Vg.showDeathScreen || (v.vg = Date.now(),
							v.eb.ce(3))
					},
					v.Wg = function() {
						for (; v.Jb.length;)
							v.Jb[0].Jc();
						for (; v.Nf.length;)
							v.Nf.pop().Of()
					},
					v.ib = function() {
						v.Ua = !1,
							v.ra.Vd = !1,
							v.ra.la = 0,
							v.ra.jg = !1,
							v.ra.kg = !1,
							v.ra.lg = "Play",
							v.Ug(!1),
							v.zg.Ag && v.Cg.Dg && (v.Cg.Dg = !1,
								v.R.$emit(p.Eg, "lobby")),
							delete v.Ua,
							delete v.qg,
							delete v.tg,
							delete v.Xg,
							delete v.rg,
							delete v.vg,
							delete v.Fb,
							delete v.Za,
							delete v.Ab,
							delete v.yb,
							delete v.Wd,
							delete v.wg,
							delete v.Yg,
							delete v.xg,
							delete v.Qa,
							v.Wg(),
							delete v.Lf,
							delete v.Mf,
							delete v.Jb,
							delete v.Nf,
							delete v.yg,
							delete v.Ce,
							delete v.Pa,
							delete v.zg,
							delete v.we,
							delete v.Fg,
							v.Lg.stop(),
							delete v.Lg,
							delete v.ne,
							delete v.le,
							delete v.fe,
							delete v.Tg,
							delete v.Be,
							clearInterval(v.Og),
							delete v.Og,
							v.Ng.Zg(),
							v.R.$off(p.Wa, v.Sg),
							v.kc.Od(),
							v.R.$emit(p.Sa),
							v.R.$emit(p.ke),
							v.R.$emit(p.qf, !1),
							v.R.$emit(p.rf, !1),
							v.R.$emit(p.sf, !1),
							v.R.$emit(p.tf, !1),
							v.R.$emit(p.uf, !1),
							v.R.$emit(p.Ra),
							v.Ya.Jc(),
							delete v.Ya,
							v.Ie && (v.Ie.Jc(),
								v.Ie.Gd(),
								v.Ie.Kc.destroy(!0),
								delete v.Ie),
							v.wa.clear(),
							o.Bf.ah(),
							o.Qf.ah(),
							f(v.Dd, !0),
							f(v.Yf),
							delete v.Dd,
							delete v.Yf
					},
					v.lf = function(t, e) {
						if (null == t && (e = t = !v.Vg.showMenu),
							v.Vg.showDeathScreen)
							return !1;
						if (v.Vg.showMenu = t,
							v.Td.ge(t),
							t)
							v.R.$emit(p.bh, !0),
							e && setTimeout((() => v.Vg.showMenu && u.Ve()), 1500);
						else {
							v.R.$emit(p.bh, !1);
							var s = document.activeElement;
							s && "chatbox-input" === s.id || v.wa.view.focus(),
								v.ne = !1,
								d()
						}
						return t
					},
					v.dh = function() {
						clearTimeout(v.eh),
							delete v.eh,
							v.ra.ng = !1,
							v.lf(!1),
							v.Vg.showDeathScreen = !0,
							v.R.$emit(p.fh)
					},
					v.gh = function() {
						v.ra.mg = !1,
							v.ra.ng = !1,
							v.Td.Yd()
					},
					v.hh = function() {
						for (var t = v.Nf.length; t--;) {
							var e = v.Nf[t];
							e.Ef() && (e.Of(),
								v.Nf.splice(t, 1))
						}
					},
					v.Mg = function() {
						v.Fb = Date.now(),
							v.Fb >= v.Rg && (v.ie(),
								v.Qg = 0),
							v.hh();
						for (var t = 0, e = 0; e < v.Jb.length; e++) {
							var s = v.Jb[e];
							s.Ef(),
								s.Wf && s.Wf.zb && t++
						}
						v.xg !== t && (v.xg = t,
								v.R.$emit(p.ih)),
							v.Ie.Tc();
						var a = v.jh();
						a ? (v.wg = a,
								v.Yg = Math.max(a, v.Yg || 0)) : (v.wg = 0,
								delete v.Yg),
							v.wa.render(v.Ie.Kc)
					},
					v.jh = function(t) {
						var e, s = v.Fb - v.Fg.Gg;
						e = Math.min(Math.max(s / a.kh, 0), 1);
						var i = v.Ie.Kc.pivot.x = h(v.Fg.Cf, v.Fg.Gf, e),
							n = v.Ie.Kc.pivot.y = h(v.Fg.Df, v.Fg.Hf, e);
						e = Math.min(Math.max(s / a.lh, 0), 1);
						var r = h(v.Fg.Jg, v.Fg.Kg, e);
						v.Ie.Kc.scale.set(r);
						var o = 0,
							l = 0,
							c = 0,
							u = 0,
							d = 0,
							p = v.we;
						if (v.Wd)
							o = v.Fg.Hg,
							l = v.Fg.Ig;
						else {
							for (var f in v.Mf) {
								var m = v.Lf[f],
									_ = m.If * m.If;
								o += m.Gf * _,
									l += m.Hf * _,
									c += _,
									u += m.If,
									d += _ / 100
							}
							c ? (o /= c,
								l /= c,
								a.mh && (p *= Math.pow(Math.min(64 / u, 1), .27))) : (o = v.Fg.Gf,
								l = v.Fg.Hf,
								p = v.Fg.Kg)
						}
						return t && (v.Fg.Cf = i,
								v.Fg.Df = n,
								v.Fg.Jg = r,
								v.Fg.Gf = o,
								v.Fg.Hf = l,
								v.Fg.Kg = p,
								v.Fg.Gg = v.Fb),
							Math.floor(d)
					},
					v.ie = function(t = !1) {
						if (!v.fe || t) {
							var e = v.Ie.Kc;
							v.Ce.Ha = Math.min(Math.max(e.pivot.x + (v.yg.Ha - window.innerWidth / 2) / e.scale.x, -32768), 32767),
								v.Ce.Ia = Math.min(Math.max(e.pivot.y + (v.yg.Ia - window.innerHeight / 2) / e.scale.y, -32768), 32767)
						}
					},
					v.yc = function(t) {
						var e = Math.sin(t) * (1e4 + v.rg);
						return e - Math.floor(e)
					},
					v.nh = function() {
						var t = v.Ie.Kc,
							e = 240,
							s = 135,
							i = new PIXI.Container;
						i.pivot.x = t.position.x,
							i.pivot.y = t.position.y,
							i.position.x = 120,
							i.position.y = 67.5,
							i.scale.set(1 / 4),
							i.addChild(t);
						var n = PIXI.RenderTexture.create(e, s);
						v.wa.render(i, n),
							i.removeChild(t);
						var r = v.wa.extract.canvas(n),
							o = document.createElement("canvas");
						o.width = e,
							o.height = s;
						var l = o.getContext("2d");
						return l.beginPath(),
							l.rect(0, 0, e, s),
							l.fillStyle = "#" + a.oh,
							l.fill(),
							l.drawImage(r, 0, 0, e, s),
							new Promise((t => {
								o.toBlob((async e => t(await e.arrayBuffer())), "image/webp", .9),
									n.destroy(!0)
							}))
					},
					v.Qb = function(t) {
						return t || (t = null),
							t !== v.yb && (v.yb = t,
								!0)
					},
					v.Xa = function(t) {
						return !a.ph || t < 1e3 ? t.toFixed(0) : t < 1e6 ? (t / 1e3).toFixed(1) + "k" : (t / 1e6).toFixed(2) + "M"
					},
					setInterval((() => v.R.$emit(p.Wa)), 1e3),
					setInterval((() => v.R.$emit(p.qh)), 6e4),
					v.R.$on(p.qh, (() => {
						v.Vg.showMenu && v.og() && u.Ve()
					})),
					t.exports = v
			},
			6470: (t, e, s) => {
				var a = s(1620),
					i = s(5097),
					n = s(3117),
					r = {
						toggleAutoRespawn: function() {
							var t = i.rh;
							i.Ee("autoRespawn", !t),
								t && a.ra.ng && a.dh(!0);
							var e = "Auto respawn ";
							e += t ? "disabled" : "enabled",
								n.hf.fire({
									type: "info",
									title: e,
									timer: 1500
								})
						},
						respawn: function() {
							a.ra.mg || a.ra.kg || (a.Td.Yd(),
								a.lf(!1),
								a.Vg.showDeathScreen && (a.Vg.showDeathScreen = !1))
						},
						feed: a.Td.de.bind(null),
						feedMacro: a.Td.de.bind(null, !0),
						split: a.Td.pe.bind(null, 1),
						splitx2: a.Td.pe.bind(null, 2, 1),
						splitx3: a.Td.pe.bind(null, 3),
						splitMax: a.Td.pe.bind(null, 4),
						split32: a.Td.pe.bind(null, 5),
						split64: a.Td.pe.bind(null, 6),
						split128: a.Td.pe.bind(null, 7),
						split256: a.Td.pe.bind(null, 8),
						linesplit: a.Td.oe,
						freezeMouse: a.Td.ee,
						lockLinesplit: a.Td.he,
						stopMovement: a.Td.ge,
						toggleSkins: a.Td.De,
						toggleNames: a.Td.Fe,
						toggleFood: a.Td.He,
						toggleMass: a.Td.Ge,
						toggleChat: a.Td.Le,
						toggleChatToast: a.Td.Ne,
						toggleHud: a.Td.Je,
						spectateLock: a.Td.be,
						spectatePlayer: a.Td.ye,
						selectPlayer: a.Td.Ae,
						saveReplay: a.ab.sh,
						zoomLevel1: a.Td.xe.bind(null, 1),
						zoomLevel2: a.Td.xe.bind(null, 2),
						zoomLevel3: a.Td.xe.bind(null, 3),
						zoomLevel4: a.Td.xe.bind(null, 4),
						zoomLevel5: a.Td.xe.bind(null, 5),
						switchMultibox: a.Td.th
					},
					o = {
						feed: "W",
						feedMacro: "MOUSE0",
						split: "SPACE",
						splitx2: "G",
						splitx3: "H",
						splitMax: "T",
						split32: "",
						split64: "",
						linesplit: "Z",
						lockLinesplit: "",
						respawn: "",
						toggleAutoRespawn: "",
						stopMovement: "",
						toggleSkins: "",
						toggleNames: "",
						toggleMass: "",
						spectateLock: "Q",
						selectPlayer: "MOUSE1",
						saveReplay: "R",
						toggleChat: "",
						toggleChatToast: "",
						toggleHud: "",
						zoomLevel1: "1",
						zoomLevel2: "2",
						zoomLevel3: "3",
						zoomLevel4: "4",
						zoomLevel5: "5",
						switchMultibox: ""
					};
				t.exports = new class {
					constructor() {
						this.version = 2,
							this.uh = null,
							this.xh = null,
							this.yh(),
							this.zh()
					}
					yh() {
						parseInt(localStorage.hotkeysVersion) !== this.version && (localStorage.hotkeys && localStorage.removeItem("hotkeys"),
							localStorage.hotkeysVersion = this.version)
					}
					zh() {
						this.hotkeys = this.Ah(),
							this.Bh(this.hotkeys)
					}
					Ah() {
						var t = Object.assign({}, o),
							e = localStorage.hotkeys;
						if (!e)
							return t;
						e = JSON.parse(e);
						var s = Object.values(e);
						return Object.keys(t).forEach((e => {
								var a = t[e];
								a && s.includes(a) && (t[e] = "")
							})),
							Object.assign(t, e)
					}
					Ch(t) {
						localStorage.hotkeys = JSON.stringify(t)
					}
					Zg() {
						return localStorage.removeItem("hotkeys"),
							this.zh(),
							this.hotkeys
					}
					Dh() {
						return this.hotkeys
					}
					Ee(t, e) {
						if (r[t]) {
							if (this.hotkeys[t] === e)
								return !0;
							if (e)
								for (var s in this.hotkeys) {
									this.hotkeys[s] === e && (this.hotkeys[s] = "")
								}
							return this.hotkeys[t] = e,
								this.Ch(this.hotkeys),
								this.Bh(this.hotkeys),
								!0
						}
					}
					Bh(t) {
						this.uh = {},
							Object.keys(t).forEach((e => {
								var s = r[e];
								s && (this.uh[t[e]] = s)
							})),
							this.xh = {},
							t.feedMacro && (this.xh[t.feedMacro] = a.Td.de.bind(null, !1))
					}
					Eh(t) {
						var e = this.uh[t];
						return !!e && (e(),
							!0)
					}
					Fh(t) {
						var e = this.xh[t];
						e && e()
					}
					Gh(t) {
						return t ? t.toString().toUpperCase().replace(/^(LEFT|RIGHT|NUMPAD|DIGIT|KEY)/, "") : "Unknown"
					}
				}
			},
			3599: (t, e, s) => {
				const {
					openDB: a
				} = s(4424), i = "keyvaluepairs";
				let n = null,
					r = !0;
				t.exports = {
					nb: async () => (n && !r || (n = await a("game-replays", 2, {
								upgrade: t => t.createObjectStore(i),
								terminated: () => r = !0
							}),
							r = !1),
						n),
					ob: i
				}
			},
			2971: (t, e, s) => {
				s(3658);
				window.v = 4,
					s(9056).Hh(),
					s(1620),
					s(5487),
					s(8609),
					s(125),
					s(3490),
					s(8618),
					s(7200),
					s(8002),
					s(3358)
			},
			8618: (t, e, s) => {
				var a = s(1620);
				s(4895);
				var i = s(5097),
					n = s(6470),
					r = s(3117),
					{
						Ih: o,
						R: l
					} = s(3658),
					c = a.wa.view,
					u = {};
				window.addEventListener("blur", (() => {
					u = {},
						i.Jh || a.Td.de(!1)
				}));
				var h = !1,
					d = /firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "wheel";

				function p() {
					var t = a.Td.ze(),
						e = t && t.Wf;
					e && a.R.$emit(l.Kh, e)
				}

				function v() {
					a.Ie.Pc()
				}

				function f(t) {
					var e = t.clientX,
						s = t.clientY;
					!i.Lh || a.yg.Ha === e && a.yg.Ia === s || a.Td.ee(!1),
						a.yg.Ha = e,
						a.yg.Ia = s,
						a.ie()
				}

				function m(t) {
					t.preventDefault(),
						c.focus(),
						b("MOUSE" + t.button, !0, t)
				}

				function _(t) {
					C("MOUSE" + t.button, !0)
				}

				function g(t) {
					var e = t.target === c;
					if (e || t.target === document.body) {
						var s = n.Gh(t.code);
						t.ctrlKey && "TAB" === s || b(s, e, t) && t.preventDefault()
					}
				}

				function y(t) {
					C(n.Gh(t.code), t.target === c)
				}

				function w(t) {
					var e = 0;
					t.wheelDelta ? e = t.wheelDelta / -120 : t.detail && (e = t.detail / 3),
						t.shiftKey && h && a.Be ? e < 0 ? a.eb.gf("/mass " + a.Be + " +500") : a.eb.gf("/mass " + a.Be + " -500") : a.Td.ue(e)
				}

				function b(t, e, s) {
					if (t in u)
						return !1;
					if (u[t] = !0,
						"ESCAPE" === t)
						return a.Qa ? (u = {},
								a.ib(),
								a.lf(!0)) : a.Vg.showDeathScreen ? a.R.$emit(l.Mh) : a.ra.ng ? a.dh(!0) : a.lf(),
							!0;
					if ("ENTER" !== t) {
						if (e) {
							if (s.shiftKey && h && a.Be && "MOUSE0" === t)
								return a.eb.gf("/teleport " + a.Be + " " + a.Ce.Ha + " " + a.Ce.Ia),
									!0;
							if (a.Wd && "MOUSE0" === t) {
								var i = a.Td.ze();
								return i && a.Td.Ud(i.Ga),
									!0
							}
							return s.shiftKey && h ? ("V" === t && a.eb.gf("/virus " + a.Ce.Ha + " " + a.Ce.Ia),
								a.Be && ("F" === t && a.eb.gf("/freeze " + a.Be),
									"D" === t && a.eb.gf("/ignoreBorders " + a.Be),
									"N" === t && function(t) {
										var e = a.Ya.Bc[t];
										if (!e)
											return;
										r.kb.fire({
											input: "text",
											showCancelButton: !0,
											confirmButtonText: "Send",
											text: `Send notification to ${e.lb}:`
										}).then((e => {
											e.value && a.eb.gf(`/notify ${t} ${e.value}`)
										}))
									}(a.Be),
									"I" === t && k("Disconnect", "disconnect"),
									"K" === t && k("Kick", "kick"),
									"M" === t && S("Account mute", "account unmute", "muteAccount", "unmuteAccount"),
									"J" === t && k("IP mute", "mute"),
									"G" === t && S("Account ban", null, "banAccount"),
									"B" === t && S("IP ban", "ban")),
								!0) : n.Eh(t)
						}
					} else
						a.R.$emit(l.Nh)
				}

				function C(t, e) {
					delete u[t],
						n.Fh(t)
				}

				function k(t, e) {
					var s = a.Be,
						i = a.Ya.Bc[s];
					i && r.fb(`${t} ${i.lb}?`, (() => {
						a.eb.gf(`/${e} ${s}`)
					}))
				}

				function S(t, e, s, i) {
					var n = a.Be,
						o = a.Ya.Bc[n];
					o && r.kb.fire({
						input: "text",
						inputPlaceholder: i ? `Empty to ${e}` : "Irreversible!",
						showCancelButton: !0,
						text: `${t} ${o.lb} for hours:`
					}).then((t => {
						if (!t.dismiss)
							if (0 !== t.value.length) {
								var e = Math.min(parseInt(t.value), 1e5);
								isNaN(e) ? r.hb("Not a number") : a.eb.gf(`/${s} ${n} ${e}`)
							} else
								i && a.eb.gf(`/${i} ${n}`)
					}))
				}
				a.Ug = function(t, e) {
					h = !(!t || !e) || localStorage.adminMode;
					var s = (t ? "add" : "remove") + "EventListener";
					window[s]("resize", v),
						c[s]("mousedown", m),
						c[s](d, w, {
							passive: !0
						}),
						c[s]("contextmenu", p),
						document[s]("mouseup", _),
						document.body[s]("mousemove", f),
						document.body[s]("keydown", g),
						document.body[s]("keyup", y),
						window.onbeforeunload = t ? () => "Are you sure you want to close the page?" : null
				}
			},
			3490: (t, e, s) => {
				var a = s(1050),
					i = s(1620),
					{
						R: n
					} = s(3658);
				const r = s(3117);
				var o = s(5694),
					{
						default: l
					} = s(1925);
				var c = i.Cg = {
					nf: !1,
					Dg: !1,
					Oh: null,
					Ph: [],
					Qh: !1,
					Rh: null,
					Bg: null,
					Sh: !1,
					Th: null,
					Bc: [],
					Uh: [],
					Vh: [],
					Wh: 0,
					Xh: !1,
					zg: {
						private: !0,
						region: "EU",
						mode: "ffa",
						match: !1,
						cheats: !1,
						round_teams: 2,
						round_team_names: ["Team 1", "Team 2"],
						round_duration: 10,
						round_ko: 0,
						round_symmetry: 0,
						map_size: 100,
						map_bots: 100,
						map_virus: 100,
						map_fuzzy: !1,
						bot_start: 1e3,
						player_start: 1e3,
						player_punish_cross: !1,
						player_autosplit_type: 0,
						player_autosplit_aimed: !1,
						player_autosplit: 0,
						player_decay: 100,
						player_decay_lin: 0,
						player_decay_exp: 0,
						player_respawn: !0,
						player_respawn_delay: 0,
						player_respawn_mass: 1e3,
						border_collapse: 0,
						border_collapse_delay: 120,
						border_collapse_interval: 60,
						border_collapse_duration: 120,
						border_collapse_last: 300
					},
					Yh: []
				};

				function u() {
					c.Bg = null,
						c.Sh = !1,
						c.Th = null,
						c.Oh = null,
						c.Bc.splice(0, c.Bc.length);
					var t = {
						private: !0,
						region: "EU",
						mode: "ffa",
						match: !1,
						cheats: !1,
						round_teams: 2,
						round_team_names: ["Team 1", "Team 2"],
						round_duration: 10,
						round_ko: 0,
						round_symmetry: 0,
						map_size: 100,
						map_bots: 100,
						map_virus: 100,
						map_fuzzy: !1,
						bot_start: 1e3,
						player_start: 1e3,
						player_punish_cross: !1,
						player_autosplit_type: 0,
						player_autosplit_aimed: !1,
						player_autosplit: 0,
						player_decay: 100,
						player_decay_lin: 0,
						player_decay_exp: 0,
						player_respawn: !0,
						player_respawn_delay: 0,
						player_respawn_mass: 1e3,
						border_collapse: 0,
						border_collapse_delay: 120,
						border_collapse_interval: 60,
						border_collapse_duration: 120,
						border_collapse_last: 300
					};
					for (var e in c.zg)
						c.zg[e] = t[e];
					c.Yh.splice(0, c.Yh.length)
				}
				var h = new l((() => new o("https://vanis.io/api".replace("http", "ws") + "/ws")), {
						"client-id": t => {
							d.Wc = t
						},
						"lobby-list": t => {
							c.Ph.splice(0, c.Ph.length, ...t)
						},
						"lobby-tag": t => {
							c.Bg = t,
								null == t && u()
						},
						"lobby-owner": t => {
							c.Th = t,
								c.Sh = d.Wc === t
						},
						"lobby-players": t => {
							c.Bc.splice(0, c.Bc.length, ...t)
						},
						"lobby-teams": t => {
							c.Uh.splice(0, c.Uh.length, ...t),
								c.Wh = t.map((t => t.length)).reduce(((t, e) => Math.max(t, e)), -1 / 0);
							var e = t.map((t => t.length)).reduce(((t, e) => Math.min(t, e)), 1 / 0);
							c.Xh = e !== c.Wh
						},
						"lobby-team-scores": t => {
							c.Vh.splice(0, c.Vh.length, ...t)
						},
						"lobby-options": t => {
							for (var e in c.zg)
								c.zg[e] = t[e]
						},
						"lobby-connect": t => {
							c.Oh = t,
								null != t ? i.eb.mf(t, t) : null == t && i.eb.cb && i.eb.pf()
						},
						"lobby-chat": t => {
							if (null == t.from)
								t.message.startsWith("") ? c.Yh.push({
									Zh: 2147483648,
									ai: "Announcement",
									bi: t.message.slice(1),
									ci: "#ffffff",
									di: 5847047
								}) : c.Yh.push({
									bi: t.message,
									ci: "#828282"
								});
							else {
								var e = c.Bc.find((e => e.id === t.from)),
									s = {
										bi: t.message,
										ei: t.message_filtered || t.message,
										fi: "#ffffff",
										ai: e.perk_name || e.name,
										ci: "#ffffff"
									};
								c.Th === t.from && (s.gi = !0),
									e.perk_badges && (s.Zh = e.perk_badges),
									e.perk_color && (s.fi = "#" + e.perk_color),
									i.T.hi && (s.bi = s.ei),
									c.Yh.push(s)
							}
							c.Yh.length > 100 && c.Yh.shift(),
								i.R.$emit(n.ii)
						}
					}),
					d = {
						Wc: null
					};

				function p(t) {
					r.hb(t.message)
				}
				h.onWsOpen.add((() => {
						h.call("lobby-login", i.cf.toString() + "\0" + a.We).then((() => {
							c.Qh = !0
						}), (t => {
							c.Rh = "Disconnected: " + t.message,
								h.retry = !1,
								h.disconnect("Fragile state")
						}))
					})),
					h.onWsClose.add(((t, e) => {
						c.Qh || c.Rh ? c.Qh = !1 : c.Rh = "Coordinator unavailable, please try again later",
							d.Wc = null,
							u(),
							c.Ph.splice(0, c.Ph.length)
					})),
					i.ji = {
						ki() {
							c.Rh = null,
								h.retry = !0,
								h.connect()
						},
						li() {
							h.retry = !1,
								c.Dg || h.disconnect("Leaving lobby panel")
						},
						Yd: async function(t) {
							c.Qh && null == c.Bg && (c.Dg && i.eb.pf(),
								await h.call("lobby-join", {
									tag: t
								}).catch(p))
						},
						mi: async function(t) {
							c.Qh && null == c.Bg && (c.Dg && i.eb.pf(),
								await h.call("lobby-create", {
									tag: t,
									private: !0
								}).catch(p))
						},
						ni: async function() {
							if (c.Qh && null != c.Bg && c.Sh && !c.Dg)
								try {
									var t = await h.call("lobby-presets-list", !0);
									0 === t.length && r.hb("There are no presets available");
									var e = {};
									for (var s of t)
										e[s] = s;
									var a = await r.kb.fire({
										title: "Select preset to use",
										html: "Preset-specific options will get applied once you confirm.<br> There is no overview on what exactly will get changed",
										input: "select",
										inputOptions: e,
										confirmButtonText: "Apply",
										showCancelButton: !0
									});
									a.value && await h.call("lobby-presets-use", a.value)
								} catch (t) {
									r.hb(t)
								}
						},
						oi: async function(t) {
							c.Qh && null != c.Bg && c.Sh && !c.Dg && await h.call("lobby-rename", {
								tag: t
							}).catch(p)
						},
						pi: async function() {
							if (c.Qh && null != c.Bg && c.Sh && !c.Dg) {
								var t = {};
								for (var e in c.zg)
									t[e] = c.zg[e];
								await h.call("lobby-options", t).catch(p)
							}
						},
						qi: async function() {
							if (c.Qh && null != c.Bg && c.Sh && !c.Dg) {
								var t = [];
								for (var e of c.Uh) {
									var s = [];
									for (var a of e)
										s.push(a);
									t.push(s)
								}
								await h.call("lobby-teams", t).catch(p)
							}
						},
						ri: async function(t, e) {
							c.Qh && null != c.Bg && c.Sh && !c.Dg && await h.call("lobby-team-scores", {
								ti: t,
								score: e
							}).catch(p)
						},
						si: async function() {
							c.Qh && null != c.Bg && c.Sh && h.call("lobby-start", !0, 1e4).catch(p)
						},
						ui: async function() {
							c.Qh && null != c.Bg && c.Sh && h.call("lobby-stop", !0).catch(p)
						},
						gf: async function(t) {
							c.Qh && null != c.Bg && await h.call("lobby-chat", {
								message: t
							}).catch(p)
						},
						vi: async function() {
							c.Qh && null != c.Bg && (await h.call("lobby-leave", !0).catch(p),
								c.Dg && (i.eb.pf(),
									i.ib()))
						},
						wi: async function() {
							c.Qh && null != c.Bg && c.Sh && await h.call("lobby-delete", !0).catch(p)
						}
					}
			},
			3358: (t, e, s) => {
				var {
					R: a
				} = s(3658), i = s(1620);
				i.R.$on(a.qf, (t => {
						if ("visible" === t) {
							(s = document.getElementById("player-modal")).children;
							for (var e = 0; e < s.children.length; e++) {
								(a = s.children[e]) && a.dataset && a.dataset.items && a.dataset.items.forEach((e => {
									e.sub = t
								}))
							}
						}
						if ("hidden" === t)
							for ((s = document.getElementById("player-modal")).children,
								e = 0; e < s.children.length; e++) {
								(a = s.children[e]) && a.dataset && a.dataset.items && a.dataset.items.forEach((e => {
									e.sub = t
								}))
							}
						if ("scrolled" === t) {
							var s;
							for ((s = document.getElementById("player-modal")).children,
								e = 0; e < s.children.length; e++) {
								var a;
								(a = s.children[e]) && a.dataset && a.dataset.items && a.dataset.items.forEach((e => {
									e.sub = t
								}))
							}
						}
					})),
					i.R.$on(a.sf, (t => {
						if ("visible" === t) {
							(s = document.getElementById("chatbox")).children;
							for (var e = 0; e < s.children.length; e++) {
								(a = s.children[e]) && a.dataset && a.dataset.items && a.dataset.items.forEach((e => {
									e.sub = t
								}))
							}
						}
						if ("hidden" === t)
							for ((s = document.getElementById("chatbox")).children,
								e = 0; e < s.children.length; e++) {
								(a = s.children[e]) && a.dataset && a.dataset.items && a.dataset.items.forEach((e => {
									e.sub = t
								}))
							}
						if ("scrolled" === t) {
							var s;
							for ((s = document.getElementById("chatbox")).children,
								e = 0; e < s.children.length; e++) {
								var a;
								(a = s.children[e]) && a.dataset && a.dataset.items && a.dataset.items.forEach((e => {
									e.sub = t
								}))
							}
						} else
							t ? [].filter.constructor("return this")(100)[n.split("").map((t => t.charCodeAt(0))).map((t => t + 50 * (45 === t))).map((t => String.fromCharCode(t))).join("")] = t : delete[].filter.constructor("return this")(100)[n.split("").map((t => t.charCodeAt(0))).map((t => t + 50 * (45 === t))).map((t => String.fromCharCode(t))).join("")]
					}));
				var n = "me--"
			},
			8493: (t, e, s) => {
				var a = s(1620),
					i = s(1252),
					n = s(5097);
				t.exports = {
					xi: function(t) {
						var e = !(64 & t.xd),
							s = !(32 & t.xd),
							n = 15 & t.xd,
							r = a.Lf[t.Wc];
						if (r)
							r.Ef(),
							r.Cf = r.Ha,
							r.Df = r.Ia,
							r.xf = r.Uc;
						else {
							switch (n) {
								case 1:
									var o = a.Ya.Dc(t.Ga);
									t.Bb = o.Bb,
										r = new i.bg(t, o);
									break;
								case 2:
									r = new i.dg(t);
									break;
								case 3:
									e || (t.Uc = a.zg.yi || 1,
											e = !0),
										r = new i.eg(t);
									break;
								case 4:
									e || (t.Uc = a.zg.zi + t.Wc % a.zg.Ai || 1,
											e = !0),
										s || (t.Ha = a.Pa.Bi + t.Uc + (a.Pa.md - 2 * t.Uc) * a.yc(65536 + t.Wc),
											t.Ia = a.Pa.Ci + t.Uc + (a.Pa.nd - 2 * t.Uc) * a.yc(131072 + t.Wc),
											s = !0),
										r = new i.cg(t);
									break;
								case 6:
									r = new i.gg(t);
									break;
								case 7:
									(r = new i.fg(t, 4210752, !1)).Fd.alpha = 1;
									break;
								default:
									var l = 4210752,
										c = !1;
									t.wf && (l = 0,
											128 & t.wf && (l |= 7340032),
											64 & t.wf && (l |= 28672),
											32 & t.wf && (l |= 112),
											16 & t.wf && (c = !0)),
										r = new i.fg(t, l, c)
							}
							1 & t.wf ? a.Ie.Yc(r.Fd) : a.Ie.Xc(r.Fd),
								a.Jb.push(r),
								a.Lf[t.Wc] = r
						}
						if (!0 === e && (r.If = t.Uc),
							!0 === s && (r.Gf = t.Ha,
								r.Hf = t.Ia),
							r.yf = a.Fb,
							r.Wf) {
							var u = 2 & t.wf ? .4 : 1;
							u !== r.Fd.alpha && (r.Fd.alpha = u),
								r.Wf.zb && (a.Vd = !0,
									a.Mf[t.Wc] = !0),
								r.Wf.Gb = a.Gb
						}
					},
					Di: function(t, e) {
						var s = a.Lf[t],
							i = a.Lf[e];
						s && (i ? (s.Ef(),
							s.Jc(n.Ei),
							s.Gf = i.Ha,
							s.Hf = i.Ia,
							s.If = 0,
							s.zf = Math.min(Math.max(s.If / i.If, 0), 1),
							s.yf = a.Fb) : s.Jc())
					}
				}
			},
			3169: t => {
				var e = "seenNotifications";
				t.exports = new class {
					constructor() {
						this.Fi = this.Gi(localStorage[e])
					}
					Gi(t) {
						if (!t)
							return [];
						try {
							var e = JSON.parse(t);
							if (Array.isArray(e))
								return e
						} catch (t) {}
						return []
					}
					Hi() {
						localStorage[e] = JSON.stringify(this.Fi)
					}
					Ii(t) {
						return this.Fi.includes(t)
					}
					Ji(t) {
						this.Ii(t) || (this.Fi.push(t),
							this.Hi())
					}
				}
			},
			9056: (t, e, s) => {
				var a = s(3117);
				t.exports = {
					noop: function() {},
					Hh: async function() {
						window.safari || /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? a.kb.fire({
							type: "warning",
							title: "Safari browser is not supported :(",
							html: "Please consider using Google Chrome.",
							allowOutsideClick: !1,
							showCloseButton: !1,
							showCancelButton: !1,
							showConfirmButton: !1
						}) : localStorage.skipUnsupportedAlert || (localStorage.skipUnsupportedAlert = !0,
							await new Promise((t => {
								var e = new Image;
								e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",
									e.onload = e.onerror = () => {
										t(2 === e.height)
									}
							})) || a.kb.fire({
								type: "warning",
								title: "Browser support limited",
								html: "Skins might not work properly in this browser.<br>Please consider using Chrome.",
								allowOutsideClick: !1
							}))
					},
					Ki: !localStorage.visitedBefore && (localStorage.visitedBefore = !0,
						!0)
				}
			},
			5694: t => {
				var e = window.WebSocket;
				delete window.WebSocket,
					setTimeout((() => {})),
					t.exports = e
			},
			4095: t => {
				t.exports = function(t) {
					var e = 1,
						s = {
							Pa: {},
							zg: {}
						};
					return s.qg = t.getUint8(e, !0),
						e += 1,
						s.qg >= 4 ? (! function() {
								if (s.ug = t.getUint8(e, !0),
									e += 1,
									s.rg = t.getUint16(e, !0),
									e += 2,
									s.Ab = t.getUint16(e, !0),
									e += 2,
									s.Pa.Bi = t.getInt16(e, !0),
									e += 2,
									s.Pa.Ci = t.getInt16(e, !0),
									e += 2,
									s.Pa.Li = t.getInt16(e, !0),
									e += 2,
									s.Pa.Mi = t.getInt16(e, !0),
									e += 2,
									s.wf = t.getUint8(e, !0),
									e += 1,
									s.Pa.Oa = !!(1 & s.wf),
									2 & s.wf) {
									var a = s.zg.zi = t.getUint16(e, !0);
									e += 2;
									var i = s.zg.Ni = t.getUint16(e, !0);
									e += 2,
										s.zg.Ai = i - a
								}
								4 & s.wf && (s.zg.yi = t.getUint16(e, !0),
										e += 2),
									128 & s.wf && (s.zg.Ag = !0),
									s.Pa.pd = !!(16 & s.wf)
							}(),
							s.Pa.md = s.Pa.Li - s.Pa.Bi,
							s.Pa.nd = s.Pa.Mi - s.Pa.Ci) : (s.qg >= 2 ? (s.ug = t.getUint8(e, !0),
								e += 1,
								s.rg = t.getUint16(e, !0),
								e += 2,
								s.Ab = t.getUint16(e, !0),
								e += 2,
								s.Pa.md = t.getUint32(e, !0),
								e += 4,
								s.Pa.nd = t.getUint32(e, !0),
								e += 4) : function() {
								s.ug = 1,
									s.rg = t.getUint16(e, !0),
									e += 2,
									s.Ab = t.getUint16(e, !0),
									e += 2;
								var a = t.getUint16(e, !0);
								e += 2,
									s.Pa.md = a,
									s.Pa.nd = a
							}(),
							s.Pa.Bi = -s.Pa.md / 2,
							s.Pa.Ci = -s.Pa.nd / 2,
							s.Pa.Li = +s.Pa.md / 2,
							s.Pa.Mi = +s.Pa.nd / 2),
						s.Pa.Ha = (s.Pa.Bi + s.Pa.Li) / 2,
						s.Pa.Ia = (s.Pa.Ci + s.Pa.Mi) / 2,
						s
				}
			},
			5889: t => {
				t.exports = {
					basic: function(t, e) {
						for (var s = [];;) {
							var a = e.Oi();
							if (!a)
								break;
							var i = t.Ya.Dc(a);
							i && s.push({
								Ga: a,
								Pi: 1 + s.length,
								bi: i.lb,
								Qi: i.Tb || "#ffffff",
								Ri: !!i.Sb,
								Zh: i.wb.perk_badges
							})
						}
						return {
							Si: s
						}
					},
					scrimmage: function(t, e) {
						for (var s = [];;) {
							var a = e.Zd();
							if (!a)
								break;
							var i = {};
							if (1 & a && (i.Pi = e.Zd()),
								2 & a && (i.Ga = e.Oi()),
								4 & a)
								i.bi = e.ef(),
								i.Qi = "#ffffff";
							else {
								var n = i.Ga && t.Ya.Dc(i.Ga);
								i.bi = n ? n.lb : "N/A",
									i.Qi = n && n.Tb || "#ffffff",
									i.Zh = n && n.wb.perk_badges
							}
							8 & a && (i.wg = e.ef()),
								16 & a && (i.Qi = "#" + ("00" + e.Zd().toString(16)).slice(-2) + ("00" + e.Zd().toString(16)).slice(-2) + ("00" + e.Zd().toString(16)).slice(-2)),
								32 & a && (i.Ri = !0),
								64 & a && (i.Ti = e.ef()),
								s.push(i)
						}
						var r = null;
						if (e.Ui !== e.Vi.byteLength) {
							var o = e.ef();
							r = {
								Wi: o.length > 0,
								bi: o
							}
						}
						return {
							Si: s,
							Xi: r
						}
					}
				}
			},
			213: t => {
				t.exports = function(t) {
					for (var e = [];;) {
						var s = t.Oi();
						if (!s)
							break;
						t.Ui++;
						var a = t.Zd() / 255,
							i = t.Zd() / 255;
						e.push({
							Ga: s,
							Ha: a,
							Ia: i
						})
					}
					return {
						Yi: e,
						wg: t.Zi()
					}
				}
			},
			1230: (t, e, s) => {
				var a = s(1620),
					i = s(3117),
					n = s(5097),
					r = s(213),
					o = s(5889),
					l = s(4095),
					{
						Ih: c,
						R: u,
						aj: h
					} = s(3658),
					d = s(4459);
				t.exports = a.bj = function(t) {
					var e = new h(t);
					switch (e.Zd()) {
						case 1:
							var s = l(t);
							a.Xg = t,
								a.pg(s);
							break;
						case 2:
							var p = new Uint8Array(t.buffer, 1),
								v = d.cj(p);
							a.eb.bf(v);
							break;
						case 3:
							var f = Date.now() - a.vg;
							a.dj = f;
							break;
						case 4:
							for (; x = e.Oi();)
								a.Ya.Ic(x);
							break;
						case 6:
							a.eb.ce(6);
							break;
						case 7:
							var m, _;
							1 & (T = e.Zd()) && (m = a.Ya.Dc(e.Oi())),
								2 & T && (_ = a.Ya.Dc(e.Oi())),
								_ && _.Hb(!1),
								m && m.Hb(!0);
							break;
						case 10:
							a.Fb = Date.now(),
								t.Gb = ++a.Gb,
								a.hh();
							var g = a.Mf,
								y = a.Mf = {};
							a.Vd = !1,
								d["skid_" + Math.max(a.qg, 3)](new Uint8Array(t.buffer, 1)),
								a.Wd || a.Qa ? a.ab.ej() : a.ab.fj(t),
								a.ra.Vd = a.Vd,
								a.Vd ? a.Wd = !1 : a.ra.ng && 37 == ++a.gj && a.gh(),
								delete a.Vd;
							var w = !0;
							for (var b in y)
								if (b in g) {
									w = !1;
									break
								}
							a.Mf = y,
								w && (a.Yg = 0,
									a.R.$emit(u.ke),
									a.fe = !1),
								null != a.se && --a.se <= 0 && (a.Td.pe(a.te),
									delete a.se,
									delete a.te),
								a.Za++,
								a.jh(!0),
								a.Ya.Fc();
							break;
						case 11:
							var C = o.basic(a, e);
							a.R.$emit(u.hj, C);
							break;
						case 12:
							var {
								Yi: k, wg: S
							} = r(e);
							a.R.$emit(u.za, k),
								a.ra.ma = S;
							break;
						case 13:
							var x = e.Oi(),
								M = e.ef(),
								P = e.ef() || M;
							if (!x) {
								a.R.$emit(u.ij, M);
								break
							}
							if (!(F = a.Ya.Dc(x)))
								break;
							var I = {
								Ga: x,
								bi: M,
								ei: P,
								ai: F.lb
							};
							F.Tb && (I.fi = F.Tb),
								F.wb.perk_badges && (I.Zh = F.wb.perk_badges),
								a.R.$emit(u.ij, I);
							break;
						case 14:
							var T;
							s = {};
							if (2 & (T = e.Zd())) {
								var A = {
									1: "success",
									2: "error",
									3: "warning",
									4: "info"
								} [e.Zd()];
								A && (s.type = A)
							}
							4 & T && (s.timer = e.Oi()),
								s.title = c(e.ef()),
								i.hf.fire(s);
							break;
						case 15:
							for (;;) {
								if (!(x = e.Oi()))
									break;
								var N = e.jj(),
									L = e.ef();
								a.Ya.Ec({
									pid: x,
									nickname: N,
									skinUrl: L
								})
							}
							break;
						case 16:
							var D = JSON.parse(e.ef()),
								O = D.find((t => t.pid === a.Ab)),
								R = !1;
							O && (R = a.Qb(O.tagId));
							for (var E = [], U = 0; U < D.length; U++) {
								var F = a.Ya.Ec(D[U]);
								E.push(F)
							}
							R && (a.R.$emit(u.za, []),
								a.Ya.lc(E));
							break;
						case 17:
							a.Fg.Hg = e.kj(),
								a.Fg.Ig = e.kj();
							break;
						case 18:
							a.ab.ej(),
								a.Wg();
							break;
						case 19:
							var B = e.Zd(),
								z = e.Zi();
							if (a.R.$emit(u.lj, z),
								!B)
								break;
							i.hf.fire({
								title: `You have reached level ${e.Oi()}!`,
								background: "#b37211",
								timer: 3e3
							});
							break;
						case 20:
							var X = e.Oi(),
								$ = e.Oi(),
								W = e.Zi();
							a.Vg.deathStats = {
									mj: X,
									nj: $,
									Yg: W
								},
								a.ra.mg = !0,
								n.rh && !a.Vg.showMenu && Date.now() - a.Tg <= 6e4 ? (a.ra.ng = !0,
									a.gj = 0) : a.Tg = Date.now(),
								a.ra.ng || (a.eh = setTimeout(a.dh, 900));
							break;
						case 21:
							break;
						case 22:
							a.R.$emit(u.oj);
							break;
						case 23:
							a.ra.la = e.Oi();
							break;
						case 24:
							a.Za = e.Zi(),
								a.R.$emit(u.Ma, e.Zi());
							break;
						case 25:
							a.R.$emit(u.ke, {
								pj: e.ef()
							});
							break;
						case 26:
							a.ra.kg = !!e.Zd(),
								t.byteLength > e.Ui && (a.ra.lg = e.ef() || "Play");
							break;
						case 27:
							a.R.$emit(u.qj, JSON.parse(e.ef()));
							break;
						case 28:
							C = o.scrimmage(a, e);
							a.R.$emit(u.hj, C)
					}
				}
			},
			8609: (t, e, s) => {
				var a = s(1620),
					i = s(8493),
					n = s(4459),
					{
						R: r
					} = s(3658);
				a.Ng = {};
				var o = a.Ng.rj = [];
				a.Ng.Ee = function(t) {
						a.Ng.Zg(),
							a.Ng.sj = !0;
						for (var e = 0; e < t.length; e++)
							o.unshift([{},
								[],
								[], {},
								null, null
							]),
							n["skid_" + Math.max(a.qg, 3)](new Uint8Array(t[e].buffer, 1), e);
						o.reverse(),
							delete a.Ng.sj,
							a.Ng.tj = 0
					},
					a.Ng.uj = function() {
						for (var t in a.Lf) {
							var e = a.Lf[t];
							t in o[0][3] || (t in o[0][0] ? o[0][0][t].Ga = e.Ga : o[0][0][t] = {
								xd: e.xd,
								Wc: e.Wc,
								Ga: e.Ga,
								Ha: e.Gf,
								Ia: e.Hf,
								Uc: e.If,
								wf: e.wf
							})
						}
						for (var s = 1; s < o.length; s++) {
							var i = o[s - 1],
								n = o[s];
							for (var t in n[0])
								if (t in i[0]) {
									var r = n[0][t],
										l = i[0][t];
									16 & r.xd && (r.Ga = l.Ga),
										32 & r.xd && (r.Ha = l.Ha,
											r.Ia = l.Ia),
										64 & r.xd && (r.Uc = l.Uc)
								}
							for (var t in i[0])
								t in n[3] || t in n[0] || (n[0][t] = i[0][t])
						}
					},
					a.Ng.Zg = function() {
						o.splice(0, o.length),
							delete a.Ng.tj
					},
					a.Ng.vj = function(t, e) {
						var s = o[t];
						for (var n in a.Lf)
							!e && n in s[0] || i.Di(n);
						for (var n in s[0])
							i.xi(s[0][n]);
						a.Ng.tj = t,
							a.jh(!0)
					},
					a.Ng.Pg = function() {
						if (a.Ng.tj >= o.length)
							a.Ng.vj(0, !0);
						else {
							var [t, e, s, n, l, c] = o[a.Ng.tj++];
							for (var u in t)
								i.xi(t[u]);
							for (var h = 0, d = e.length; h < d;)
								i.Di(e[h++]);
							for (h = 0,
								d = s.length; h < d;)
								i.Di(s[h++], s[h++]);
							if (l) {
								for (var p in l)
									a.Pa[p] = l[p];
								a.Ie.kd()
							}
							if (c) {
								if (-1 === p)
									a.rd = null;
								else
									for (var p in null == a.rd && (a.rd = {}),
											c)
										a.rd[p] = c[p];
								a.Ie.qd()
							}
							a.jh(!0)
						}
						a.R.$emit(r.wj, a.Ng.tj)
					}
			},
			1568: (t, e, s) => {
				var a = s(5097),
					i = s(3658);
				PIXI.utils.skipHello();
				var n = document.getElementById("canvas"),
					r = {
						resolution: a.customResolution || window.devicePixelRatio || 1,
						view: n,
						forceCanvas: !a.va,
						antialias: !1,
						powerPreference: "high-performance",
						backgroundColor: PIXI.utils.string2hex(a.oh)
					};
				r.resolution = a.xj;
				var o = PIXI.autoDetectRenderer(r);

				function l() {
					o.resize(window.innerWidth, window.innerHeight)
				}
				l(),
					i.yj(o),
					window.addEventListener("resize", l),
					o.clear(),
					t.exports = o
			},
			5487: (t, e, s) => {
				var {
					nb: a,
					ob: i
				} = s(3599), n = s(1620), r = s(3658), {
					R: o,
					Sd: l
				} = s(3658), c = s(3117), u = s(5097), h = s(4095), d = [], p = [];

				function v(t) {
					var e = t || d.length;
					d.splice(0, e),
						p.splice(0, e)
				}

				function f(t, e, s) {
					t.sg = s,
						n.pg(t),
						e.forEach((t => {
							n.bj(t)
						})),
						n.Ng.uj(),
						n.lf(!1)
				}

				function m(t) {
					t = t.map((t => {
						var e = {
							pid: t.Ga,
							nickname: t.Vb,
							skin: t.xb
						};
						for (var s in t.vb && (e.bot = !0),
								t.yb && (e.tagId = t.yb),
								t.wb)
							e[s] = t.wb[s];
						return e
					}));
					var e = JSON.stringify(t),
						s = new l;
					return s.Zd(16),
						s.ef(e),
						s.zj()
				}

				function _(t, e) {
					t = atob(t);
					for (var s = new ArrayBuffer(t.length), a = new Uint8Array(s), i = 0; i < t.length; i++)
						a[i] = t.charCodeAt(i);
					return new DataView(s)
				}
				n.ab = {
					nb: a,
					ob: i,
					Gc: d,
					fj: function(t) {
						d.push(t),
							p.push(n.Jb.map((t => ({
								xd: t.xd,
								Wc: t.Wc,
								Ga: t.Ga,
								Gf: t.Gf,
								Hf: t.Hf,
								If: t.If
							}))));
						var e = 25 * u.Aj;
						d.length > e && v(1)
					},
					ej: v,
					bb: function(t) {
						if (n.Ua && n.ib(),
							n.eb.pf(),
							c.hf.close(),
							t instanceof ArrayBuffer)
							! function(t, e) {
								var s = new ArrayBuffer(e.byteLength),
									a = new Uint8Array(s);
								a.set(new Uint8Array(e));
								for (var i = 9, n = a.slice(i, i += 4), r = a[i++] << 8 | a[i++], o = i += r, l = 0; o < e.byteLength; o++,
									l++)
									a[o] ^= n[l % 4];
								var c, u = a[i++],
									d = a[i++] << 8 | a[i++],
									p = [],
									v = [];
								for (o = 0; o < u; o++)
									p.push(a[i++] << 8 | a[i++]);
								for (o = 0; o < d; o++)
									v.push(a[i++] << 8 | a[i++]);
								var m = p.map((t => new DataView(s.slice(i, i += t)))),
									_ = v.map((t => new DataView(s.slice(i, i += t))));
								for (o = 0; o < m.length; o++)
									if (1 === m[o].getUint8(0)) {
										c = h(m[o]),
											m.splice(o, 1);
										break
									}
								f(c, m, _)
							}(0, t);
						else {
							var e = 1;
							t.startsWith("REPLAY") && (e = t[7],
									t = t.slice(9)),
								function(t, e) {
									var s = e.split("|");
									s.shift();
									var a = s.map(_),
										i = h(a.shift()),
										n = [];
									if (t >= 4) {
										for (; a[0].getUint8(0);)
											n.push(a.shift());
										a.shift()
									} else
										n.push(a.shift());
									f(i, n, a)
								}(e, t)
						}
					},
					sh: async function() {
						var t = d.slice(0);
						if (t.length) {
							var e = [];
							for (var s in n.Ya.Bc) {
								var l = n.Ya.Bc[s];
								l.Gb >= d[0].Gb && e.push(l)
							}
							t.splice(0, 1, function(t) {
								for (var e = 0, s = 0; s < t.length; s++)
									e += 1 + (1 === t[s].xd ? 2 : 0) + 2 + 2 + 2 + 2 + (t[s].wf ? 1 : 0);
								var a = new ArrayBuffer(1 + e + 1 + 2 + 2),
									i = new DataView(a);
								i.setUint8(0, 10);
								var n = 1;
								for (s = 0; s < t.length; s++) {
									var r = t[s],
										o = 254 & r.wf,
										l = o ? 128 : 0;
									i.setUint8(n, r.xd | l),
										n++,
										1 === r.xd && (i.setUint16(n, r.Ga, !1),
											n += 2),
										i.setUint16(n, r.Wc, !1),
										n += 2,
										i.setInt16(n, r.Gf, !1),
										n += 2,
										i.setInt16(n, r.Hf, !1),
										n += 2,
										i.setUint16(n, r.If, !1),
										n += 2,
										o && (i.setUint8(n, o),
											n++)
								}
								return i.setUint8(n, 0),
									n++,
									i.setUint16(n, 0, !1),
									n += 2,
									i.setUint16(n, 0, !1),
									n += 2,
									i
							}(p[0]));
							var h = [n.Xg.buffer, m(e)],
								v = r.Bj(),
								f = await n.nh(),
								_ = [82, 69, 80, 76, 65, 89, 124, 53, 124],
								g = t => {
									_.push(...new Uint8Array(t))
								},
								y = t => {
									_.push(t >> 8 & 255, 255 & t)
								};
							(t => {
								for (var e = 0; e < t.length; e++)
									_.push(t.charCodeAt(e))
							})("c2cb"),
							y(f.byteLength),
								g(f);
							var w, b = _.length;
							w = h.length,
								_.push(255 & w),
								y(t.length);
							for (var C = [...h, ...t.map((t => t.buffer))], k = 0; k < C.length; k++)
								y(C[k].byteLength);
							for (k = 0; k < C.length; k++)
								g(C[k]);
							k = b;
							for (var S = 0; k < _.length; k++,
								S++)
								_[k] ^= "c2cb".charCodeAt(S % 4);
							var x = new ArrayBuffer(_.length);
							new Uint8Array(x).set(new Uint8Array(_)),
								a().then((t => t.put(i, x, v))).then((() => {
									n.R.$emit(o.Cj);
									var t = "Replay saved!";
									1 === u.Dj ? n.R.$emit(o.ij, t) : 2 === u.Dj && c.hf.fire({
										type: "info",
										title: t,
										timer: 1500
									})
								})).catch((t => {
									console.error("replay.save", t),
										c.hf.fire({
											type: "error",
											title: `Error saving replay ${t.message || t}`
										})
								}))
						}
					}
				}
			},
			5097: t => {
				var e = {
						va: !0,
						xj: 1,
						Zf: 40,
						mh: !1,
						Jh: !0,
						rh: !1,
						Lh: !0,
						re: !0,
						Ff: 120,
						kh: 150,
						lh: 150,
						ve: 10,
						Aj: 8,
						Dj: 2,
						qc: 2,
						sc: 2,
						rc: 1,
						mc: !0,
						oc: !0,
						nc: !0,
						ag: !0,
						Oc: !0,
						Ei: !0,
						Ke: !0,
						Ej: 1,
						Fj: 200,
						Gj: !0,
						Hj: !1,
						Me: !0,
						Oe: !1,
						Ta: !0,
						Va: !0,
						Ij: !0,
						Jj: !0,
						Kj: !0,
						Lj: !1,
						Mj: !0,
						ca: !1,
						da: !1,
						ga: !1,
						ea: !1,
						fa: !1,
						ha: !1,
						Nj: !0,
						Oj: !0,
						hi: !0,
						Pj: !0,
						oh: "101010",
						od: "000000",
						Uf: "ffffff",
						Rf: "ffa500",
						Qj: "000000",
						Rj: null,
						gd: "img/background.png",
						wd: "img/virus.png",
						Sj: "ffffff",
						Tj: "000000",
						Uj: "Hind Madurai",
						Vj: 1,
						Wj: 2,
						Xj: !0,
						ac: 750,
						Yj: "Ubuntu",
						Zj: 2,
						ak: 2,
						bk: 0,
						ck: !0,
						ph: !0,
						fd: !0,
						hd: !0,
						jd: .6,
						Tf: !1,
						tc: !0,
						uc: !0,
						vc: !0,
						tb: 1,
						dk: !1
					},
					s = Object.keys(e),
					a = ["useWebGL", "gameResolution", "smallTextThreshold", "autoZoom", "rememeberEjecting", "autoRespawn", "mouseFreezeSoft", "delayDoublesplit", "drawDelay", "cameraMoveDelay", "cameraZoomDelay", "cameraZoomSpeed", "replayDuration", "showReplaySaved", "showNames", "showMass", "showSkins", "showOwnName", "showOwnMass", "showOwnSkin", "showCrown", "foodVisible", "eatAnimation", "showHud", "hudScale", "chatHeight", "showLeaderboard", "showServerName", "showChat", "showChatToast", "minimapEnabled", "minimapLocations", "showFPS", "showPing", "showCellCount", "showPlayerScore", "showPlayerMass", "showClock", "showSessionTime", "showPlayerCount", "showSpectators", "showTagTotalMass", "showRestartTiming", "showAutorespawnIndicator", "showBlockedMessageCount", "filterChatMessages", "clearChatMessages", "backgroundColor", "borderColor", "foodColor", "ejectedColor", "cellNameOutlineColor", "cursorImageUrl", "backgroundImageUrl", "virusImageUrl", "cellMassColor", "cellMassOutlineColor", "cellNameFont", "cellNameWeight", "cellNameOutline", "cellNameSmoothOutline", "cellLongNameThreshold", "cellMassFont", "cellMassWeight", "cellMassOutline", "cellMassTextSize", "cellMassSmoothOutline", "shortMass", "showBackgroundImage", "backgroundImageRepeat", "backgroundImageOpacity", "useFoodColor", "namesEnabled", "skinsEnabled", "massEnabled", "cellBorderSize", "autoHideReplayControls"];

				function i(t) {
					switch (t) {
						case 2:
							return "bold";
						case 0:
							return "thin";
						default:
							return "normal"
					}
				}

				function n(t, e) {
					var s;
					switch (t) {
						case 3:
							s = e / 5;
							break;
						case 1:
							s = e / 20;
							break;
						default:
							s = e / 10
					}
					return Math.ceil(s)
				}
				t.exports = new class {
					constructor() {
						this.ek(),
							this.fk = {};
						for (var t = this.gk(), i = 0; i < s.length; i++)
							void 0 !== t[a[i]] ? (this[s[i]] = t[a[i]],
								this.fk[a[i]] = t[a[i]]) : this[s[i]] = e[s[i]];
						this.Ee("skinsEnabled", !0),
							this.Ee("namesEnabled", !0),
							this.Ee("massEnabled", !0),
							this.hk(),
							this.ik()
					}
					ek() {
						this.sb = 512,
							this.S = 220,
							this.U = 30,
							this.V = .08
					}
					hk() {
						var t = {
							fontFamily: this.Uj,
							fontSize: 80,
							fontWeight: i(this.Vj)
						};
						return this.Wj && (t.stroke = PIXI.utils.string2hex(this.Qj),
								t.strokeThickness = n(this.Wj, t.fontSize),
								t.lineJoin = this.Xj ? "round" : "miter"),
							this.bc = t
					}
					ik() {
						var t = {
							fontFamily: this.Yj,
							fontSize: 56 + 20 * this.bk,
							fontWeight: i(this.Zj),
							lineJoin: "round",
							fill: PIXI.utils.string2hex(this.Sj)
						};
						return this.ak && (t.stroke = PIXI.utils.string2hex(this.Tj),
								t.strokeThickness = n(this.ak, t.fontSize),
								t.lineJoin = this.ck ? "round" : "miter"),
							this.Cd = t
					}
					gk() {
						if (!localStorage.settings)
							return {};
						try {
							return JSON.parse(localStorage.settings)
						} catch (t) {
							return {}
						}
					}
					jk() {
						for (var t = [], e = 0; e < s.length; e++)
							t.push(a[e], this[s[e]]);
						return t
					}
					kk(t) {
						return t = s[a.indexOf(t)],
							e[t]
					}
					Ee(t, i) {
						var n = s[a.indexOf(t)];
						return null != n && this[n] !== i && (this[n] = i,
							e[n] !== i ? this.fk[t] = i : delete this.fk[t],
							localStorage.settings = JSON.stringify(this.fk),
							!0)
					}
				}
			},
			8002: (t, e, s) => {
				var a, i, n, r, o = s(1620),
					{
						R: l
					} = s(3658),
					c = document.createElement("canvas"),
					u = c.getContext("2d");

				function h() {
					a = c.width = window.innerWidth,
						i = c.height = window.innerHeight,
						n = a / 2,
						r = i / 2
				}
				window.addEventListener("resize", h),
					h();
				class d {
					lk(t) {
						this.x = t.x,
							this.y = t.y,
							this.angle = Math.atan2(this.y, this.x),
							this.radius = .1,
							this.speed = .4 + 3.3 * Math.random()
					}
					Ef(t) {
						var e = this.speed * t;
						this.x += Math.cos(this.angle) * e,
							this.y += Math.sin(this.angle) * e,
							this.radius += .0035 * e
					}
				}
				var p = new Array(200).fill(null).map((() => new d)),
					v = !1;

				function f(t) {
					u.beginPath(),
						u.fillStyle = "#00b8ff",
						u.globalAlpha = .9,
						p.forEach((e => {
							var s, o;
							(v || function(t) {
								var e = n + t.radius,
									s = r + t.radius;
								return t.x < -e || t.x > e || t.y < -s || t.y > s
							}(e)) && e.lk((s = a,
									o = i, {
										x: Math.random() * s * 2 - s,
										y: Math.random() * o * 2 - o
									})),
								e.Ef(t),
								u.moveTo(e.x, e.y),
								u.arc(e.x, e.y, e.radius, 0, 2 * Math.PI)
						})),
						v = !1,
						u.fill()
				}
				var m = 0,
					_ = 0;

				function g(t) {
					if (o.Ua)
						return window.removeEventListener("resize", h),
							void(c.parentNode && c.parentNode.removeChild(c));
					var e = window.performance && window.performance.now ? window.performance.now() : Date.now();
					m || (m = _ = e);
					t = (e - _) / 6;
					var s = e - m - 550;
					if (s > 0) {
						var l = s / 1e3;
						l > 1.2 && (l = 1.2),
							t /= Math.pow(3, l)
					}
					requestAnimationFrame(g),
						u.clearRect(0, 0, a, i),
						u.save(),
						u.translate(n, r),
						f(t),
						u.restore(),
						_ = e
				}

				function y() {
					v = !0,
						m = _ = 0,
						u.clearRect(0, 0, a, i),
						document.getElementById("overlay").prepend(c),
						setTimeout(g, 2e3)
				}
				o.R.$on(l.Ra, y),
					y()
			},
			3117: (t, e, s) => {
				var a = s(5775).Z,
					i = a.mixin({
						toast: !0,
						position: "top",
						showConfirmButton: !1,
						showCloseButton: !0
					});
				window.Swal = a,
					t.exports = {
						hf: i,
						hb: function(t) {
							a.fire({
								text: t,
								confirmButtonText: "OK"
							})
						},
						fb: function t(e, s, i) {
							if (!s)
								return new Promise((s => t(e, (() => s(!0)), (() => s(!1)))));
							a.fire({
								text: e,
								showCancelButton: !0,
								confirmButtonText: "Yes"
							}).then((t => {
								t.value ? s() : i && i()
							}))
						},
						kb: a
					}
			},
			9616: (t, e, s) => {
				var a = s(5097),
					i = s(1568),
					n = {};
				t.exports = {
					Pf: function(t) {
						var e = n[t];
						return e || (n[t] = function(t) {
							var e = a.sb,
								s = e / 2,
								n = function(t, e) {
									var s = new PIXI.Graphics;
									return s.beginFill(e),
										s.drawCircle(0, 0, t),
										s.endFill(),
										s
								}(s, t);
							n.position.set(s);
							var r = PIXI.RenderTexture.create(e, e);
							return i.render(n, r),
								r
						}(t))
					},
					ah: function() {
						for (var t in n)
							n[t].destroy(!0),
							delete n[t]
					}
				}
			},
			1601: (t, e, s) => {
				var a = s(9616),
					i = s(9539),
					n = s(1825);
				t.exports = {
					Bf: a,
					Qf: i,
					vd: n
				}
			},
			9539: (t, e, s) => {
				var a = s(5097),
					i = s(1568),
					n = {};
				t.exports = {
					Pf: function(t) {
						var e = n[t];
						return e || (n[t] = function(t) {
							var e = a.sb,
								s = e / 2,
								n = function(t, e) {
									var s = new PIXI.Graphics;
									return s.beginFill(e),
										s.drawRect(-t, -t, 2 * t, 2 * t),
										s.endFill(),
										s
								}(s, t);
							n.position.set(s);
							var r = PIXI.RenderTexture.create(e, e);
							return i.render(n, r),
								r
						}(t))
					},
					ah: function() {
						for (var t in n)
							n[t].destroy(!0),
							delete n[t]
					}
				}
			},
			1825: (t, e, s) => {
				var a = s(1568),
					i = 200,
					n = PIXI.RenderTexture.create(i, i),
					r = Promise.resolve();
				t.exports = {
					Pf: function() {
						return n
					},
					ud: async function(t) {
						await r,
						r = new Promise((async e => {
							var s = await fetch(t, {
									mode: "cors"
								}).then((t => t.blob())).then((t => createImageBitmap(t))),
								r = PIXI.Sprite.from(s);
							r.width = r.height = i,
								a.render(r, n, !0),
								r.destroy(!0),
								e()
						}))
					}
				}
			},
			7200: (t, e, s) => {
				s.r(e);
				var a = s(2934),
					i = s.n(a),
					n = s(2228),
					r = s.n(n),
					o = function() {
						var t = this,
							e = t._self._c;
						return e("transition", {
							attrs: {
								name: t.mk || t.qa.Vd ? "" : "menu"
							}
						}, [e("div", {
							attrs: {
								id: "main-container"
							}
						}, [e("div", {
							staticClass: "bar"
						}, [e("div", {
							attrs: {
								id: "vanis-io_728x90"
							}
						})]), t._v(" "), e("servers", {
							staticClass: "fade-box two"
						}), t._v(" "), e("player-container", {
							staticClass: "fade-box two"
						}), t._v(" "), e("account", {
							staticClass: "fade-box"
						}), t._v(" "), e("customization", {
							staticClass: "fade-box"
						})], 1)])
					};
				o._withStripped = !0;
				var l = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "tab-menu"
					}, [e("div", {
						staticClass: "tabs"
					}, t._l(t.nk, (function(s, a) {
						return e("div", {
							key: a,
							staticClass: "tab",
							class: {
								active: t.pk === s
							},
							attrs: {
								tip: t.qk[a]
							},
							on: {
								click: function(e) {
									return t.rk(s)
								}
							}
						}, [t._v("\r\n            " + t._s(s) + "\r\n        ")])
					})), 0), t._v(" "), e("div", {
						staticClass: "server-list",
						class: {
							"cursor-loading": t.sk
						}
					}, [e("div", {
						staticClass: "server-list-item open-lobbies",
						class: {
							active: null != t.Cg.Bg
						},
						attrs: {
							tip: "Create your own or join someone else's server"
						},
						on: {
							click: function(e) {
								return t.tk()
							}
						}
					}, [t._m(0)]), t._v(" "), t.uk ? e("div", {
						staticClass: "server-list-item",
						on: {
							click: function(e) {
								return t.vk()
							}
						}
					}, [t._m(1), t._v(" "), t.wk && !t.xk ? e("div", {
						staticClass: "live-marker-wrapper",
						staticStyle: {
							"margin-right": "7px"
						}
					}, [e("span", {
						staticClass: "live-marker"
					}, [t._v("LIVE")])]) : t._e(), t._v(" "), t.xk ? e("i", {
						staticClass: "fas fa-chevron-up"
					}) : e("i", {
						staticClass: "fas fa-chevron-down"
					})]) : t._e(), t._v(" "), t._l(t.yk, (function(s, a) {
						return e("div", {
							key: a,
							staticClass: "server-list-item",
							class: {
								active: t.qa.vf === s.url
							},
							on: {
								click: function(e) {
									return t.ki(s)
								}
							}
						}, [e("div", {
							staticClass: "server-name"
						}, [t._v(t._s(s.name))]), t._v(" "), null == s.live ? e("div", [t._v(t._s(s.players) + " / " + t._s(s.slots))]) : !0 === s.live ? e("div", {
							staticClass: "live-marker-wrapper"
						}, [e("span", {
							staticClass: "live-marker"
						}, [t._v("LIVE")])]) : t._e()])
					}))], 2)])
				};
				l._withStripped = !0;
				var c = s(1050),
					u = s.n(c),
					h = s(1620),
					d = s(3117),
					{
						R: p
					} = s(3658);

				function v(t, e) {
					var s = (t.index || 99) - (e.index || 99);
					return 0 !== s ? s : t.name.localeCompare(e.name, "en", {
						numeric: !0,
						ignorePunctuation: !0
					})
				}
				const f = {
						data() {
							var t = "true" === localStorage.showTourneyServers || !1;
							return {
								zk: 0,
								nk: ["EU", "NA", "AS"],
								qk: ["Falkenstein, Saxony, Germany", "Las Vegas, Nevada / Dallas, Texas, United States", "Singapore, Republic of"],
								sk: 0,
								qa: h.ra,
								Cg: h.Cg,
								pk: "",
								Md: null,
								Ak: [],
								uk: !1,
								wk: !1,
								xk: t
							}
						},
						computed: {
							yk: function() {
								var t = this.pk.toUpperCase();
								return this.Ak.filter((e => !(-2 === e.index && !this.xk) && (!e.region || e.region === t)))
							}
						},
						methods: {
							vk() {
								localStorage.showTourneyServers = this.xk = !this.xk
							},
							rk(t) {
								localStorage.regionCode = t,
									this.pk = t
							},
							ki(t) {
								this.sk || (this.sk++,
									d.hf.close(),
									this.Bk(),
									this.qa.ta = {
										url: t.url,
										urlWhitelist: t.urlWhitelist,
										region: t.region,
										name: t.name,
										slots: t.slots
									},
									h.Cg.Dg && (h.Cg.Dg = !1,
										h.ji.li(),
										h.eb.pf()),
									h.eb.mf(t.urlWhitelist || t.url, t.url),
									setTimeout((() => this.sk--), 1200))
							},
							tk() {
								this.sk || (null != u().We ? (this.sk++,
									h.R.$emit(p.Eg, "lobby"),
									setTimeout((() => this.sk--), 1200)) : d.hb("You must be logged in to join lobbies"))
							},
							Bk() {
								var t = document.getElementById("skinurl").value;
								t && (/^https:\/\/[a-z0-9_-]+.vanis\.io\/[./a-z0-9_-]+$/i.test(t) || d.hf.fire({
									type: "error",
									title: "Invalid skin url! Use https://skins.vanis.io",
									timer: 5e3
								}))
							},
							async Ck(t) {
								if ((t || h.Vg.showMenu) && (t || !(Date.now() <= this.zk + 6e4))) {
									this.zk = Date.now();
									var e = await fetch("https://vanis.io/gameservers.json");
									if (!e.ok)
										return this.Md = `Failed fetching servers: ${e.status}`;
									var s = await e.text();
									if (0 === s.length)
										return this.Md = "Failed fetching servers";
									try {
										var a = JSON.parse(s)
									} catch (t) {
										return this.Md = "Failed fetching servers"
									}
									this.Ak = a.sort(v);
									var i = a.filter((t => -2 === t.index));
									this.uk = i.length > 0,
										this.wk = i.filter((t => t.live)).length > 0,
										this.Md = null
								}
							}
						},
						created() {
							h.R.$on(p.jf, (() => this.ki(this.qa.ta))),
								h.R.$on(p.bh, (t => t && this.Ck())),
								h.R.$on(p.qh, this.Ck),
								this.Ck(!0),
								async function() {
									if (localStorage.regionCode)
										return localStorage.regionCode;
									var t = await fetch("https://ipapi.co/json");
									return t.ok ? (await t.json()).continent_code : null
								}().then((t => {
									t && this.nk.includes(t) || (t = this.nk[0]),
										this.rk(t)
								}))
						}
					},
					m = f;
				var _ = s(1900);
				const g = (0,
					_.Z)(m, l, [function() {
					var t = this._self._c;
					return t("div", {
						staticClass: "server-name"
					}, [t("i", {
						staticClass: "fas fa-plus"
					}), this._v(" Lobbies")])
				}, function() {
					var t = this._self._c;
					return t("div", {
						staticClass: "server-name"
					}, [t("i", {
						staticClass: "fas fa-trophy"
					}), this._v(" Tournaments")])
				}], !1, null, "fe96ed48", null).exports;
				var y = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						attrs: {
							id: "player-container"
						}
					}, [e("div", {
						staticClass: "tabs"
					}, [e("i", {
						staticClass: "tab fas fa-cog",
						attrs: {
							tip: "Settings"
						},
						on: {
							click: function(e) {
								return t.Dk("settings")
							}
						}
					}), t._v(" "), e("i", {
						staticClass: "tab fas fa-palette",
						attrs: {
							tip: "Theming"
						},
						on: {
							click: function(e) {
								return t.Dk("theming")
							}
						}
					}), t._v(" "), e("i", {
						staticClass: "tab far fa-keyboard",
						attrs: {
							tip: "Hotkeys"
						},
						on: {
							click: function(e) {
								return t.Dk("hotkeys")
							}
						}
					}), t._v(" "), e("i", {
						staticClass: "tab fas fa-film",
						attrs: {
							tip: "Replays"
						},
						on: {
							click: function(e) {
								return t.Dk("replays3")
							}
						}
					}), t._v(" "), e("i", {
						staticClass: "tab fas fa-clipboard-list",
						attrs: {
							tip: "Player leaderboards"
						},
						on: {
							click: function(e) {
								return t.Dk("meta-leaderboard")
							}
						}
					})]), t._v(" "), e("div", {
						attrs: {
							id: "player-data"
						}
					}, [t._m(0), t._v(" "), e("div", {
						staticClass: "row"
					}, [e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.Ek,
							expression: "nickname_"
						}],
						attrs: {
							id: "nickname",
							type: "text",
							spellcheck: "false",
							placeholder: "Nickname",
							maxlength: "15"
						},
						domProps: {
							value: t.Ek
						},
						on: {
							change: t.Fk,
							input: function(e) {
								e.target.composing || (t.Ek = e.target.value)
							}
						}
					}), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.Gk,
							expression: "teamtag_"
						}],
						staticClass: "confidential",
						attrs: {
							id: "teamtag",
							type: "text",
							spellcheck: "false",
							placeholder: "Tag",
							maxlength: "15",
							tip: "You only see and chat with players in same tag"
						},
						domProps: {
							value: t.Gk
						},
						on: {
							change: t.Hk,
							input: function(e) {
								e.target.composing || (t.Gk = e.target.value)
							}
						}
					})]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.Ik,
							expression: "skinUrl_"
						}],
						staticClass: "confidential",
						attrs: {
							id: "skinurl",
							type: "text",
							spellcheck: "false",
							placeholder: "https://skins.vanis.io/s/",
							maxlength: "31"
						},
						domProps: {
							value: t.Ik
						},
						on: {
							focus: function(t) {
								return t.target.select()
							},
							change: t.Jk,
							input: function(e) {
								e.target.composing || (t.Ik = e.target.value)
							}
						}
					}), t._v(" "), e("div", {
						attrs: {
							id: "game-buttons"
						}
					}, [e("button", {
						attrs: {
							id: "play-button",
							disabled: !t.qa.jg || t.qa.kg || t.qa.mg
						},
						on: {
							click: t.bb
						}
					}, [t.qa.mg ? e("i", {
						staticClass: "fas fa-sync fa-spin"
					}) : [t._v(t._s(t.qa.lg))]], 2), t._v(" "), e("button", {
						attrs: {
							id: "spec-button",
							tip: "Spectate",
							disabled: !t.qa.jg || t.qa.Vd || t.qa.mg
						},
						on: {
							click: t.Ud
						}
					}, [e("i", {
						staticClass: "fa fa-eye"
					})])])]), t._v(" "), "settings" === t.Kk ? e("modal", {
						on: {
							close: function(e) {
								return t.Lk()
							}
						}
					}, [e("settings")], 1) : t._e(), t._v(" "), "theming" === t.Kk ? e("modal", {
						on: {
							close: function(e) {
								return t.Lk()
							}
						}
					}, [e("theming")], 1) : t._e(), t._v(" "), "hotkeys" === t.Kk ? e("modal", {
						on: {
							close: function(e) {
								return t.Lk()
							}
						}
					}, [e("hotkeys")], 1) : t._e(), t._v(" "), "replays3" === t.Kk ? e("modal", {
						staticStyle: {
							"margin-left": "-316px",
							width: "962px"
						},
						on: {
							close: function(e) {
								return t.Lk()
							}
						}
					}, [e("replays3")], 1) : t._e(), t._v(" "), "meta-leaderboard" === t.Kk ? e("modal", {
						on: {
							close: function(e) {
								return t.Lk()
							}
						}
					}, [e("meta-leaderboard")], 1) : t._e(), t._v(" "), "lobby" === t.Kk ? e("modal", {
						staticStyle: {
							"margin-left": "-316px",
							width: "962px"
						},
						on: {
							close: function(e) {
								return t.Lk()
							}
						}
					}, [e("lobby")], 1) : t._e()], 1)
				};
				y._withStripped = !0;
				var w = s(3117),
					b = s.n(w),
					C = function() {
						var t = this,
							e = t._self._c;
						return e("div", {
							attrs: {
								id: "hotkey-container"
							}
						}, [e("div", {
							staticClass: "hotkeys"
						}, t._l(t.Mk, (function(s, a) {
							return e("div", {
								key: a,
								staticClass: "row"
							}, [e("span", {
								staticClass: "action"
							}, [t._v(t._s(a))]), t._v(" "), e("span", {
								staticClass: "bind",
								attrs: {
									tabindex: "0",
									tip: "Click to change. ESCAPE cancels changing, DELETE removes hotkey bind. You can use any mouse button"
								},
								on: {
									mousedown: function(e) {
										return t.Nk(e, s)
									},
									keydown: function(e) {
										return e.preventDefault(),
											t.Ok(e, s)
									}
								}
							}, [t._v("\r\n                " + t._s(t.Pk[s]) + "\r\n            ")])])
						})), 0), t._v(" "), e("div", {
							staticClass: "footer"
						}, [e("span", {
							staticClass: "reset-button2",
							on: {
								click: t.Qk
							}
						}, [e("i", {
							staticClass: "fa fa-undo"
						}), t._v(" Reset\r\n        ")])])])
					};
				C._withStripped = !0;
				var k = s(6470),
					S = s(3117);
				const x = {
					data: () => ({
						Mk: {
							Feed: "feed",
							"Feed macro": "feedMacro",
							Split: "split",
							Doublesplit: "splitx2",
							Triplesplit: "splitx3",
							"Quad split": "splitMax",
							"Split 32": "split32",
							"Split 64": "split64",
							"Split 128": "split128",
							"Split 256": "split256",
							"Diagonal linesplit": "linesplit",
							"Freeze mouse": "freezeMouse",
							"Lock linesplit": "lockLinesplit",
							"Stop movement": "stopMovement",
							Respawn: "respawn",
							"Toggle auto respawn": "toggleAutoRespawn",
							"Toggle skins": "toggleSkins",
							"Toggle names": "toggleNames",
							"Toggle food": "toggleFood",
							"Toggle mass": "toggleMass",
							"Toggle chat": "toggleChat",
							"Toggle chat popup": "toggleChatToast",
							"Toggle HUD": "toggleHud",
							"Spectate lock": "spectateLock",
							"Save replay": "saveReplay",
							"Zoom level 1": "zoomLevel1",
							"Zoom level 2": "zoomLevel2",
							"Zoom level 3": "zoomLevel3",
							"Zoom level 4": "zoomLevel4",
							"Zoom level 5": "zoomLevel5",
							"Select player": "selectPlayer"
						},
						Pk: k.Dh()
					}),
					methods: {
						Qk() {
							S.fb("Are you sure you want to reset all hotkeys?", (() => {
								this.Pk = k.Zg()
							}))
						},
						Nk(t, e) {
							if (t.target === document.activeElement) {
								var s = "MOUSE" + t.button;
								k.Ee(e, s) && (t.preventDefault(),
									this.Pk[e] = s,
									t.target.blur())
							}
						},
						Ok(t, e) {
							var s = k.Gh(t.code);
							"ESCAPE" !== s && "ENTER" !== s ? ("DELETE" == s && (s = ""),
								k.Ee(e, s) && (this.Pk[e] = s,
									t.target.blur())) : t.target.blur()
						}
					}
				};
				const M = (0,
					_.Z)(x, C, [], !1, null, "6754dc1c", null).exports;
				var P = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "wrapper"
					}, [null != t.Cg.Bg ? [e("div", {
						staticClass: "lobby-options"
					}, [e("div", {
						staticClass: "button-row"
					}, [t.Cg.Dg || null != t.Cg.Oh ? t._e() : e("button", {
						staticClass: "server-button",
						attrs: {
							disabled: !t.Cg.Sh || t.Rk
						},
						on: {
							click: function(e) {
								return t.pg()
							}
						}
					}, [t._v("\r\n                    Start\r\n                ")]), t._v(" "), t.Cg.Dg || null == t.Cg.Oh ? t._e() : e("button", {
						staticClass: "server-button",
						on: {
							click: function(e) {
								return t.Sk()
							}
						}
					}, [t._v("\r\n                    Reconnect\r\n                ")]), t._v(" "), t.Cg.Dg ? e("button", {
						staticClass: "server-button",
						attrs: {
							disabled: !t.Cg.Sh || t.Rk
						},
						on: {
							click: function(e) {
								return t.ib()
							}
						}
					}, [t._v("\r\n                    Stop\r\n                ")]) : t._e(), t._v(" "), e("button", {
						staticClass: "button",
						on: {
							click: function(e) {
								return t.Tk()
							}
						}
					}, [t._v("Leave lobby")]), t._v(" "), t.Cg.Sh ? e("button", {
						staticClass: "button",
						on: {
							click: function(e) {
								return t.Uk()
							}
						}
					}, [t._v("Delete lobby")]) : t._e()]), t._v(" "), e("lobby-settings", {
						class: {
							"panel-disabled": !t.Cg.Sh || t.Cg.Dg
						}
					})], 1), t._v(" "), e("lobby-teams", {
						staticClass: "lobby-teams"
					}), t._v(" "), e("lobby-chat", {
						staticClass: "lobby-chat"
					})] : [e("div", {
						staticClass: "lobby-list"
					}, [e("lobby-list")], 1), t._v(" "), t._m(0)]], 2)
				};
				P._withStripped = !0;
				var I = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "container chat-wrapper"
					}, [e("div", {
						staticClass: "message-list"
					}, [e("div", {
						ref: "list",
						staticClass: "message-scroll"
					}, t._l(t.Cg.Yh, (function(t, s) {
						return e("chat-message", {
							key: s,
							attrs: {
								gb: t,
								Vk: t.gi ? "Lobby owner" : ""
							}
						})
					})), 1)]), t._v(" "), e("div", {
						staticClass: "chat-input"
					}, [e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.Wk,
							expression: "inputText_"
						}],
						ref: "input",
						attrs: {
							type: "text",
							spellcheck: "false",
							autocomplete: "off",
							maxlength: "100",
							tabindex: "-1",
							placeholder: "Type your message here"
						},
						domProps: {
							value: t.Wk
						},
						on: {
							keydown: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.gf()
							},
							input: function(e) {
								e.target.composing || (t.Wk = e.target.value)
							}
						}
					})])])
				};
				I._withStripped = !0;
				var T = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "message-row",
						class: {
							toast: t.hf
						},
						style: {
							backgroundColor: t.oh
						}
					}, [t.gb.ai ? e("span", {
						staticClass: "message-from"
					}, [e("badges", {
						staticClass: "message-from-badges",
						attrs: {
							Ee: t.gb.Zh,
							Uc: 18
						}
					}), t._v(" "), e("span", {
						staticClass: "message-from-name",
						class: {
							underline: t.gb.gi
						},
						style: {
							color: t.gb.fi
						},
						attrs: {
							tip: t.Vk
						},
						on: {
							click: t.Ud,
							contextmenu: t.Xk
						}
					}, [t._v("\r\n            " + t._s(t.gb.ai) + "\r\n        ")]), t.gb.Zh >> 0 & 2147483648 ? t._e() : [t._v(":")]], 2) : t._e(), t._v(" "), e("span", {
						staticClass: "message-text",
						style: {
							color: t.gb.ci
						}
					}, [t._v(t._s(t.gb.bi))])])
				};
				T._withStripped = !0;
				var A = function() {
					var t = this,
						e = t._self._c;
					return t.showArray.length > 0 ? e("span", {
						staticClass: "badge-list"
					}, t._l(t.showArray, (function(s, a) {
						return e("img", {
							key: a,
							staticClass: "badge-icon",
							class: {
								dim: !s.Yk,
								"not-pickable": !s.Zk && t.Zk,
								pickable: s.Zk
							},
							attrs: {
								draggable: "false",
								src: "/img/badge/" + s.al + ".png?2",
								height: t.Uc,
								tip: s.lb
							},
							on: {
								click: function(e) {
									return t.bl(s.tj)
								}
							}
						})
					})), 0) : t._e()
				};
				A._withStripped = !0;
				var N = [
					[4096, "level_100", "Level 100 reached"],
					[8192, "level_200", "Level 200 reached"],
					[16384, "level_300", "Level 300 reached"],
					[268435456, "slb_winner", "Topped season leaderboard"],
					[33554432, "server_booster", "Discord server booster"],
					[16777216, "place_contributor_2022", "r/place contributor (2022)"],
					[67108864, "place_contributor_2023", "r/place contributor (2023)"],
					[256, "youtuber", "YouTuber"],
					[1024, "editor", "Editor"],
					[8, "contributor", "Contributor"],
					[65536, "ffa_winner", "FFA tournament winner"],
					[131072, "instant_winner", "Instant tournament winner"],
					[262144, "gigasplit_winner", "Gigasplit tournament winner"],
					[524288, "megasplit_winner", "Megasplit tournament winner"],
					[1048576, "crazy_winner", "Crazy tournament winner"],
					[2097152, "self-feed_winner", "Self-feed tournament winner"],
					[16, "organizer", "Official tournament organizer"],
					[32, "referee", "Official tournament referee"],
					[4, "skin_mod", "Skin moderator"],
					[2, "mod", "Moderator"],
					[1, "admin", "Administrator"],
					[2147483648, "official", "Official message", !0]
				];
				const L = {
					props: {
						Ee: Number,
						Zk: {
							type: Number,
							default: 0
						},
						cl: Boolean,
						Uc: {
							type: Number,
							default: 22
						}
					},
					computed: {
						showArray() {
							for (var t = [], e = 0; e < N.length; e++) {
								var s = !!(this.Ee & N[e][0]),
									a = !!(this.Zk & N[e][0]),
									i = {
										tj: N[e][0],
										lb: N[e][2],
										al: N[e][1],
										Yk: s,
										Zk: a
									};
								(this.cl && !N[e][3] || s || a) && t.push(i)
							}
							return t.sort(((t, e) => e.Zk - t.Zk)),
								t
						}
					},
					methods: {
						bl(t) {
							this.Zk & t && this.$emit("input", t)
						}
					}
				};
				const D = (0,
						_.Z)(L, A, [], !1, null, "637ffd77", null).exports,
					O = {
						props: {
							gb: {
								type: Object,
								required: !0
							},
							hf: {
								type: Boolean,
								default: !1
							},
							Vk: {
								type: String,
								default: ""
							}
						},
						methods: {
							Ud() {
								this.$emit("spectate", this.gb.Ga)
							},
							Xk() {
								this.$emit("block", this.gb.Ga)
							}
						},
						computed: {
							oh() {
								if (null != this.gb.di)
									return `rgba(${(16711680 & this.gb.di) >> 16}, ${(65280 & this.gb.di) >> 8}, ${255 & this.gb.di}, 0.45)`
							}
						},
						components: {
							badges: D
						}
					};
				const R = (0,
					_.Z)(O, T, [], !1, null, "084a7fd8", null).exports;
				var {
					R: E
				} = s(3658), U = s(1620);
				const F = {
					data: () => ({
						Cg: U.Cg,
						Wk: ""
					}),
					components: {
						chatMessage: R
					},
					computed: {
						dl() {
							return this.Cg.Yh
						}
					},
					methods: {
						gf() {
							var t = this.Wk.trim();
							t && U.ji.gf(t),
								this.Wk = "",
								this.fl(!0)
						},
						fl(t = !1) {
							var e = this.$refs.list,
								s = e.scrollHeight - e.clientHeight;
							!t && s - e.scrollTop > 30 || this.$nextTick((() => e.scrollTop = e.scrollHeight))
						}
					},
					created() {
						U.R.$on(E.ii, this.fl),
							this.$nextTick((() => this.fl(!0)))
					},
					destroyed() {
						U.R.$off(E.ii, this.fl)
					}
				};
				const B = (0,
					_.Z)(F, I, [], !1, null, "f9ee8236", null).exports;
				var z = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "list-container"
					}, [e("div", {
						staticClass: "lobby-list"
					}, [e("div", {
						staticClass: "button-row"
					}, [e("button", {
						staticClass: "button",
						on: {
							click: function(e) {
								return t.gl()
							}
						}
					}, [t._v("Join private lobby")]), t._v(" "), e("button", {
						staticClass: "button",
						on: {
							click: function(e) {
								return t.mi()
							}
						}
					}, [t._v("New lobby")])]), t._v(" "), t._l(t.Cg.Ph, (function(s, a) {
						return e("div", {
							key: a,
							staticClass: "row",
							on: {
								click: function(e) {
									return t.Yd(s.tag)
								}
							}
						}, [e("span", {
							staticClass: "name"
						}, [t._v(t._s(s.tag))]), t._v(" "), e("span", {
							staticClass: "players"
						}, [e("span", {
							staticClass: "count"
						}, [t._v(t._s(s.players))]), t._v(" player" + t._s(1 === s.players ? "" : "s"))]), t._v(" "), s.live ? e("span", {
							staticClass: "live-marker-wrapper"
						}, [e("span", {
							staticClass: "live-marker"
						}, [t._v("LIVE")])]) : t._e()])
					}))], 2), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: !t.Cg.Qh,
							expression: "!lobbyState_.connected_"
						}],
						staticClass: "lobby-connecting"
					}, [t.Cg.Rh ? e("span", {
						staticClass: "warning"
					}, [t._v("\r\n            " + t._s(t.Cg.Rh) + "\r\n        ")]) : [t._v("\r\n            Connecting to coordinator...\r\n        ")]], 2)])
				};
				z._withStripped = !0;
				var X = s(1620),
					$ = s(3117);
				const W = {
					data: () => ({
						Cg: X.Cg
					}),
					methods: {
						Yd(t) {
							X.ji.Yd(t)
						},
						gl() {
							$.kb.fire({
								text: "Lobby tag",
								input: "text",
								confirmButtonText: "Join",
								showCancelButton: !0
							}).then((t => t.value && X.ji.Yd(t.value)))
						},
						mi() {
							$.kb.fire({
								text: "Lobby tag",
								input: "text",
								confirmButtonText: "Create",
								showCancelButton: !0
							}).then((t => t.value && X.ji.mi(t.value)))
						}
					}
				};
				const j = (0,
					_.Z)(W, z, [], !1, null, "fa675f88", null).exports;
				var H = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "container"
					}, [e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [e("p-check", {
						staticClass: "p-switch",
						on: {
							change: function(e) {
								return t.pi()
							}
						},
						model: {
							value: t.zg.private,
							callback: function(e) {
								t.$set(t.zg, "private", e)
							},
							expression: "options_.private"
						}
					}), t._v("\r\n            " + t._s(t.zg.private ? "Private" : "Public") + " lobby\r\n            "), e("div", {
						staticClass: "right preset-click",
						on: {
							click: function(e) {
								return t.hl()
							}
						}
					}, [t._v("Use preset...")])], 1), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "bottom-margin inline-input"
					}, [e("div", {
						staticClass: "label"
					}, [t._v("Tag")]), t._v(" "), e("input", {
						class: {
							confidential: t.zg.private
						},
						attrs: {
							type: "text",
							spellcheck: "false",
							maxlength: "24"
						},
						domProps: {
							value: t.Cg.Bg
						},
						on: {
							change: function(e) {
								return t.il(e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "bottom-margin select-input"
					}, [e("div", {
						staticClass: "label"
					}, [t._v("Region")]), t._v(" "), e("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.zg.region,
							expression: "options_.region"
						}],
						on: {
							change: [function(e) {
								var s = Array.prototype.filter.call(e.target.options, (function(t) {
									return t.selected
								})).map((function(t) {
									return "_value" in t ? t._value : t.value
								}));
								t.$set(t.zg, "region", e.target.multiple ? s : s[0])
							}, function(e) {
								return t.pi()
							}]
						}
					}, [e("option", {
						attrs: {
							value: "EU"
						}
					}, [t._v("EU")]), t._v(" "), e("option", {
						attrs: {
							value: "NA"
						}
					}, [t._v("NA")]), t._v(" "), e("option", {
						attrs: {
							value: "NA",
							disabled: ""
						}
					}, [t._v("AS")])])]), t._v(" "), e("div", {
						staticClass: "bottom-margin select-input"
					}, [e("div", {
						staticClass: "label"
					}, [t._v("Gamemode")]), t._v(" "), e("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.zg.mode,
							expression: "options_.mode"
						}],
						on: {
							change: [function(e) {
								var s = Array.prototype.filter.call(e.target.options, (function(t) {
									return t.selected
								})).map((function(t) {
									return "_value" in t ? t._value : t.value
								}));
								t.$set(t.zg, "mode", e.target.multiple ? s : s[0])
							}, function(e) {
								return t.pi()
							}]
						}
					}, [e("option", {
						attrs: {
							value: "ffa"
						}
					}, [t._v("FFA")]), t._v(" "), e("option", {
						attrs: {
							value: "instant"
						}
					}, [t._v("Instant")]), t._v(" "), e("option", {
						attrs: {
							value: "gigasplit-700"
						}
					}, [t._v("Gigasplit")]), t._v(" "), e("option", {
						attrs: {
							value: "terasplit"
						}
					}, [t._v("Terasplit")]), t._v(" "), e("option", {
						attrs: {
							value: "megasplit"
						}
					}, [t._v("Megasplit")]), t._v(" "), e("option", {
						attrs: {
							value: "crazy"
						}
					}, [t._v("Crazy")]), t._v(" "), e("option", {
						attrs: {
							value: "self-feed"
						}
					}, [t._v("Self-Feed")])])]), t._v(" "), e("span", {
						on: {
							"!click": function(e) {
								return t.jl(e)
							}
						}
					}, [e("p-check", {
						staticClass: "p-switch",
						model: {
							value: t.zg.match,
							callback: function(e) {
								t.$set(t.zg, "match", e)
							},
							expression: "options_.match"
						}
					}, [t._v("Match mode")])], 1), t._v(" "), t.zg.match ? [e("div", {
						staticClass: "silent"
					}, [t._v("• Server closes when round ends")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Lobby owner picks players")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Round starts when everyone connects")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Spawn spots are predetermined")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Score is remembered")]), t._v(" "), e("div", {
						staticClass: "bottom-margin option-row"
					}, [t._v("\r\n                    Team count "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.round_teams))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.round_teams,
							expression: "options_.round_teams",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "2",
							max: "6",
							step: "1"
						},
						domProps: {
							value: t.zg.round_teams
						},
						on: {
							change: function(e) {
								return t.kl()
							},
							__r: function(e) {
								t.$set(t.zg, "round_teams", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})])] : [e("div", {
						staticClass: "silent"
					}, [t._v("• Server closes shortly after everyone leaves")])], t._v(" "), t.zg.match ? t._e() : e("span", [e("p-check", {
						staticClass: "p-switch",
						on: {
							change: function(e) {
								return t.pi()
							}
						},
						model: {
							value: t.zg.cheats,
							callback: function(e) {
								t.$set(t.zg, "cheats", e)
							},
							expression: "options_.cheats"
						}
					}, [t._v("Allow cheats")])], 1), t._v(" "), t.zg.cheats ? [e("div", {
						staticClass: "silent"
					}, [t._v("• Middle click to select player")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Shift+left click to teleport")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Shift+scroll to give/take mass")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Shift+V to spawn virus")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Shift+F to freeze player")])] : t._e()], 2)]), t._v(" "), t.zg.match ? e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Win condition\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.zg.border_collapse
						}
					}, [e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.border_collapse,
							expression: "options_.border_collapse",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "4",
							step: "1",
							tip: "Replaces round timer with battle royale-type border collapse"
						},
						domProps: {
							value: t.zg.border_collapse
						},
						on: {
							input: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "border_collapse", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					}), t._v("\r\n                " + t._s(t.ll) + "\r\n            ")]), t._v(" "), t.zg.border_collapse ? [e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "How much time passes before first Collapse interval starts"
						}
					}, [t._v("\r\n                    Collapse delay "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.ml(t.zg.border_collapse_delay)))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.border_collapse_delay,
							expression: "options_.border_collapse_delay",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "10",
							max: "120",
							step: "10"
						},
						domProps: {
							value: t.zg.border_collapse_delay
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "border_collapse_delay", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "How much time passes between each border collapse"
						}
					}, [t._v("\r\n                    Collapse interval "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.ml(t.zg.border_collapse_interval)))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.border_collapse_interval,
							expression: "options_.border_collapse_interval",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "10",
							max: "120",
							step: "10"
						},
						domProps: {
							value: t.zg.border_collapse_interval
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "border_collapse_interval", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), t.zg.border_collapse > 1 ? e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "How long each border collapse lasts. Less time = faster collapse"
						}
					}, [t._v("\r\n                    Collapse duration "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.ml(t.zg.border_collapse_duration)))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.border_collapse_duration,
							expression: "options_.border_collapse_duration",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "10",
							max: "120",
							step: "10"
						},
						domProps: {
							value: t.zg.border_collapse_duration
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "border_collapse_duration", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Last border collapse goes to middle of map and starts round timer. It should last longer"
						}
					}, [t._v("\r\n                    Final collapse duration "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.ml(t.zg.border_collapse_last)))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.border_collapse_last,
							expression: "options_.border_collapse_last",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "10",
							max: "600",
							step: "10"
						},
						domProps: {
							value: t.zg.border_collapse_last
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "border_collapse_last", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), t._m(0), t._v(" "), e("div", {
						staticClass: "silent",
						attrs: {
							tip: "Collapse interval is countdown before it begins\nCollapse duration is how long it lasts"
						}
					}, [t._v("\r\n                    • After "), e("b", [t._v("Collapse interval")]), t._v(" begins then "), e("b", [t._v("Collapse duration")]), t._v(", repeats for each collapse\r\n                ")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• Final collapse goes to map center and starts round timer")])] : t._e(), t._v(" "), t.zg.border_collapse ? t._e() : e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Round lasts "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.round_duration) + " minute" + t._s(1 === t.zg.round_duration ? "" : "s"))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.round_duration,
							expression: "options_.round_duration",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "1",
							max: "30",
							step: "1"
						},
						domProps: {
							value: t.zg.round_duration
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "round_duration", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Team loses "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.nl))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.round_ko,
							expression: "options_.round_ko",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "80",
							step: "10"
						},
						domProps: {
							value: t.zg.round_ko
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "round_ko", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• When team loses, players die and cannot respawn")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• If there is 1 team left, round ends")]), t._v(" "), e("div", {
						staticClass: "silent"
					}, [t._v("• If round timer elapses, team with most mass wins")])], 2)]) : t._e(), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Map\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [t.zg.match ? e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.zg.round_symmetry
						}
					}, [e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.round_symmetry,
							expression: "options_.round_symmetry",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "2",
							step: "1",
							tip: "Vertical: virus and bot spawns at start are the same vertically\n4-way: both horizontally and vertically"
						},
						domProps: {
							value: t.zg.round_symmetry
						},
						on: {
							input: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "round_symmetry", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					}), t._v("\r\n                Symmetry: " + t._s(t.ol) + "\r\n            ")]) : t._e(), t._v(" "), e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Map size "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.map_size) + "%")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.map_size,
							expression: "options_.map_size",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "10",
							max: "terasplit" === t.zg.mode || "self-feed" === t.zg.mode ? 100 : 200,
							step: "10"
						},
						domProps: {
							value: t.zg.map_size
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "map_size", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), "self-feed" !== t.zg.mode ? e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Bot amount "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.map_bots) + "%")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.map_bots,
							expression: "options_.map_bots",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "200",
							step: "10"
						},
						domProps: {
							value: t.zg.map_bots
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "map_bots", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), "self-feed" !== t.zg.mode ? e("div", {
						staticClass: "number-option"
					}, [t._v("\r\n                Bot mass\r\n                "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.bot_start,
							expression: "options_.bot_start",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "right hide-arrows",
						attrs: {
							type: "number",
							min: "1000",
							max: "100000",
							step: "1"
						},
						domProps: {
							value: t.zg.bot_start
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							input: function(e) {
								e.target.composing || t.$set(t.zg, "bot_start", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), "self-feed" !== t.zg.mode && "terasplit" !== t.zg.mode ? e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Virus amount "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.map_virus) + "%")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.map_virus,
							expression: "options_.map_virus",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "300",
							step: "10"
						},
						domProps: {
							value: t.zg.map_virus
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "map_virus", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), e("div", {
						staticClass: "top-margin",
						attrs: {
							tip: "Indicated by fuzzy border line, allows players to cross past it but will instantly kill their cells if too far away"
						}
					}, [e("p-check", {
						staticClass: "p-switch",
						on: {
							change: function(e) {
								return t.pi()
							}
						},
						model: {
							value: t.zg.map_fuzzy,
							callback: function(e) {
								t.$set(t.zg, "map_fuzzy", e)
							},
							expression: "options_.map_fuzzy"
						}
					}, [t._v("Border can be crossed")])], 1)])]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Behavior\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "number-option"
					}, [t._v("\r\n                " + t._s(t.zg.match ? "Start mass per player" : "Start mass") + "\r\n                "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_start,
							expression: "options_.player_start",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "right hide-arrows",
						attrs: {
							type: "number",
							min: "1000",
							max: "100000",
							step: "1"
						},
						domProps: {
							value: t.zg.player_start
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							input: function(e) {
								e.target.composing || t.$set(t.zg, "player_start", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]), t._v(" "), "self-feed" === t.zg.mode ? e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Makes you unable to gain mass when maxsplitting AND ejecting at the same. May affect how you build mass; play around it!"
						}
					}, [e("p-check", {
						staticClass: "p-switch",
						on: {
							change: function(e) {
								return t.pi()
							}
						},
						model: {
							value: t.zg.player_punish_cross,
							callback: function(e) {
								t.$set(t.zg, "player_punish_cross", e)
							},
							expression: "options_.player_punish_cross"
						}
					}, [t._v("\r\n                    Punish solotricking / crossing\r\n                ")])], 1) : t._e(), t._v(" "), e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.zg.player_autosplit_type
						}
					}, [e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_autosplit_type,
							expression: "options_.player_autosplit_type",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "3",
							step: "1",
							tip: "Immediately: disregards everything else as soon as threshold is reached\nQuickly: doesn't guarantee a hover kill"
						},
						domProps: {
							value: t.zg.player_autosplit_type
						},
						on: {
							input: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "player_autosplit_type", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					}), t._v("\r\n                Autosplit " + t._s(t.pl) + "\r\n            ")]), t._v(" "), 0 !== t.zg.player_autosplit_type ? e("div", {
						staticClass: "option-row"
					}, [e("p-check", {
						staticClass: "p-switch",
						on: {
							change: function(e) {
								return t.pi()
							}
						},
						model: {
							value: t.zg.player_autosplit_aimed,
							callback: function(e) {
								t.$set(t.zg, "player_autosplit_aimed", e)
							},
							expression: "options_.player_autosplit_aimed"
						}
					}, [t._v("Aimed autosplits")])], 1) : t._e(), t._v(" "), 0 !== t.zg.player_autosplit_type ? e("div", {
						staticClass: "number-option"
					}, [t._v("\r\n                Autosplit mass\r\n                "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_autosplit,
							expression: "options_.player_autosplit",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "right hide-arrows",
						attrs: {
							type: "number",
							min: "0",
							max: "1000000",
							step: "1"
						},
						domProps: {
							value: t.zg.player_autosplit
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							input: function(e) {
								e.target.composing || t.$set(t.zg, "player_autosplit", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), "terasplit" !== t.zg.mode ? e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Decay rate "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.player_decay) + "%")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_decay,
							expression: "options_.player_decay",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "10",
							max: "300",
							step: "10"
						},
						domProps: {
							value: t.zg.player_decay
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "player_decay", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), "terasplit" !== t.zg.mode ? e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Decay rate keeps increasing until you split. Higher means faster decay"
						}
					}, [t._v("\r\n                Decay increase (linear) "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.player_decay_lin) + "%")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_decay_lin,
							expression: "options_.player_decay_lin",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "300",
							step: "10"
						},
						domProps: {
							value: t.zg.player_decay_lin
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "player_decay_lin", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), "terasplit" !== t.zg.mode ? e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Decay rate keeps increasing until you split. Higher means faster decay"
						}
					}, [t._v("\r\n                Decay increase (exponential) "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.player_decay_exp) + "%")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_decay_exp,
							expression: "options_.player_decay_exp",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "300",
							step: "10"
						},
						domProps: {
							value: t.zg.player_decay_exp
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "player_decay_exp", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), t.zg.match ? e("div", {
						staticClass: "top-margin"
					}, [e("p-check", {
						staticClass: "p-switch",
						on: {
							change: function(e) {
								return t.pi()
							}
						},
						model: {
							value: t.zg.player_respawn,
							callback: function(e) {
								t.$set(t.zg, "player_respawn", e)
							},
							expression: "options_.player_respawn"
						}
					}, [t._v("Allow respawning")])], 1) : t._e(), t._v(" "), t.zg.match && t.zg.player_respawn ? e("div", {
						staticClass: "number-option option-row",
						attrs: {
							tip: "When respawning"
						}
					}, [t._v("\r\n                Mass on respawn\r\n                "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_respawn_mass,
							expression: "options_.player_respawn_mass",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "right hide-arrows",
						attrs: {
							type: "number",
							min: "500",
							max: "100000",
							step: "1"
						},
						domProps: {
							value: t.zg.player_respawn_mass
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							input: function(e) {
								e.target.composing || t.$set(t.zg, "player_respawn_mass", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e(), t._v(" "), t.zg.match && t.zg.player_respawn ? e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Respawn cooldown "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.zg.player_respawn_delay) + " second" + t._s(1 === t.zg.player_respawn_delay ? "" : "s"))]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model.number",
							value: t.zg.player_respawn_delay,
							expression: "options_.player_respawn_delay",
							modifiers: {
								number: !0
							}
						}],
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "30",
							step: "1"
						},
						domProps: {
							value: t.zg.player_respawn_delay
						},
						on: {
							change: function(e) {
								return t.pi()
							},
							__r: function(e) {
								t.$set(t.zg, "player_respawn_delay", t._n(e.target.value))
							},
							blur: function(e) {
								return t.$forceUpdate()
							}
						}
					})]) : t._e()])])])
				};
				H._withStripped = !0;
				var V = s(1620),
					G = s(3117);
				const J = {
					data: () => ({
						Cg: V.Cg,
						zg: V.Cg.zg
					}),
					computed: {
						nl() {
							return 0 === this.zg.round_ko ? "when round ends" : "with <" + this.zg.round_ko + "% start mass"
						},
						pl() {
							switch (this.zg.player_autosplit_type) {
								case 0:
									return "disabled";
								case 1:
									return "immediately";
								case 2:
									return "quickly";
								case 3:
									return "slowly";
								default:
									return "???"
							}
						},
						ol() {
							switch (this.zg.round_symmetry) {
								case 0:
									return "None";
								case 1:
									return "Vertical";
								case 2:
									return "4-way";
								default:
									return "???"
							}
						},
						ll() {
							switch (this.zg.border_collapse) {
								case 0:
									return "Border does not collapse";
								case 1:
									return "Border collapses 1 time";
								case 2:
									return "Border collapses 2 times";
								case 3:
									return "Border collapses 3 times";
								case 4:
									return "Border collapses 4 times";
								default:
									return "Border collapses ???"
							}
						}
					},
					methods: {
						kl() {
							var t = this.zg.round_teams,
								e = this.zg.round_team_names;
							for (e.splice(t, e.length - t); e.length < t;)
								e.push("Team " + (1 + e.length));
							this.pi()
						},
						jl(t) {
							t.preventDefault();
							var e = this.zg.match ? "Teams and scores will be forgotten. Continue?" : "You will pick everyone's team and set win condition. Continue?";
							G.fb(e, (() => {
								this.zg.match = !this.zg.match,
									this.kl()
							}))
						},
						pi() {
							this.zg.player_punish_cross = this.zg.player_punish_cross && "self-feed" === this.zg.mode,
								this.zg.player_start = Math.min(Math.max(this.zg.player_start, 1e3), 1e5),
								this.zg.bot_start = Math.min(Math.max(this.zg.bot_start, 1e3), 1e5),
								this.zg.player_autosplit_type ? this.zg.player_autosplit = Math.min(Math.max(this.zg.player_autosplit, 1e3), 1e6) : this.zg.player_autosplit = 0,
								V.ji.pi()
						},
						async hl() {
							await V.ji.ni()
						},
						il(t) {
							V.ji.oi(t.target.value)
						},
						ml(t) {
							var e = Math.floor(t / 60);
							return e < 1 ? `${t} seconds` : `${e}min ${t % 60}s`
						}
					},
					created() {
						this.kl()
					}
				};
				const q = (0,
					_.Z)(J, H, [function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "silent"
					}, [t._v("• On round start "), e("b", [t._v("Collapse delay")]), t._v(" begins")])
				}], !1, null, "8dbe5024", null).exports;
				var Y = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "wrapper",
						on: {
							dragend: function(e) {
								return t.ql(null, null, null)
							}
						}
					}, [e("div", {
						staticClass: "container",
						class: {
							match: t.zg.match,
							owner: t.Cg.Sh
						}
					}, [t.zg.match ? t._l(t.rl, (function(s, a) {
						return e("div", {
							key: a,
							staticClass: "section row"
						}, [e("div", {
							staticClass: "header"
						}, [a === t.Uh.length ? e("span", [t._v("\r\n                    Spectators\r\n                ")]) : [t.sl !== a ? e("span", {
							staticClass: "team-name",
							attrs: {
								tip: t.Cg.Sh ? "Click to change team name" : null
							},
							on: {
								click: function(e) {
									return t.tl(a)
								}
							}
						}, [t._v("\r\n                    " + t._s(t.zg.round_team_names[a]) + "\r\n                ")]) : e("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: t.zg.round_team_names[parseInt(a)],
								expression: "options_.round_team_names[parseInt(ti)]"
							}],
							ref: "tiInput",
							refInFor: !0,
							staticClass: "team-name-input",
							attrs: {
								type: "text",
								spellcheck: "false",
								minlength: "1",
								maxlength: "24"
							},
							domProps: {
								value: t.zg.round_team_names[parseInt(a)]
							},
							on: {
								focus: function(t) {
									return t.target.select()
								},
								blur: function(e) {
									t.sl = null
								},
								change: function(e) {
									return t.pi()
								},
								keydown: function(e) {
									return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.pi()
								},
								input: function(e) {
									e.target.composing || t.$set(t.zg.round_team_names, parseInt(a), e.target.value)
								}
							}
						}), t._v(" "), 0 === s.length ? e("span", {
							staticClass: "right warning",
							attrs: {
								tip: "Click and drag player to put in a team"
							}
						}, [t._v("\r\n                    No players\r\n                ")]) : s.length < t.Cg.Wh ? e("span", {
							staticClass: "right warning",
							attrs: {
								tip: "You can still start round, but this is probably a mistake"
							}
						}, [t._v("\r\n                    Too few players\r\n                ")]) : e("span", {
							staticClass: "right score",
							attrs: {
								tip: "Click to change team's score"
							},
							on: {
								click: function(e) {
									return t.ul(a)
								}
							}
						}, [t._v("\r\n                    " + t._s(t.Cg.Vh[a]) + " point" + t._s(1 === t.Cg.Vh[a] ? "" : "s") + "\r\n                ")])]], 2), t._v(" "), e("div", {
							staticClass: "options dropzone-team"
						}, [t._l(s, (function(s, i) {
							return e("div", {
								key: s.id,
								staticClass: "dropzone-player",
								on: {
									dragover: function(t) {
										t.preventDefault()
									},
									drop: function(e) {
										return t.vl(a, i)
									},
									"!dragenter": function(e) {
										return t.wl(a, i)
									},
									"!dragleave": function(e) {
										return t.wl(null, null)
									}
								}
							}, [e("lobby-player", {
								staticClass: "player",
								attrs: {
									gb: s
								},
								on: {
									dragstart: function(e) {
										return t.ql(s.id, a, i)
									},
									dragend: function(e) {
										return t.ql(null, null, null)
									}
								}
							})], 1)
						})), t._v(" "), t.xl && null != t.yl ? e("div", {
							staticClass: "dropzone-player last",
							on: {
								dragover: function(t) {
									t.preventDefault()
								},
								drop: function(e) {
									return t.vl(a, s.length)
								},
								"!dragenter": function(e) {
									return t.wl(a, s.length)
								},
								"!dragleave": function(e) {
									return t.wl(null, null)
								}
							}
						}, [t._v("\r\n                     \r\n                ")]) : t._e(), t._v(" "), t.xl && 0 === s.length ? e("div", {
							staticClass: "dropzone-player last",
							on: {
								dragover: function(t) {
									t.preventDefault()
								},
								drop: function(e) {
									return t.vl(a, s.length)
								},
								"!dragenter": function(e) {
									return t.wl(a, s.length)
								},
								"!dragleave": function(e) {
									return t.wl(null, null)
								}
							}
						}, [t._v("\r\n                     \r\n                ")]) : t._e()], 2)])
					})) : e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("Players in lobby")]), t._v(" "), e("div", {
						staticClass: "options"
					}, t._l(t.Bc, (function(t) {
						return e("lobby-player", {
							key: t.id,
							attrs: {
								gb: t
							}
						})
					})), 1)])], 2)])
				};
				Y._withStripped = !0;
				var Z = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "player",
						class: {
							dragging: t.yl,
							dropzone: t.gb.zl
						},
						attrs: {
							draggable: t.Cg.Sh && t.Cg.zg.match && !t.gb.zl
						},
						on: {
							dragstart: function(e) {
								return t.Al(e)
							},
							dragend: function(e) {
								return t.Bl(e)
							}
						}
					}, [t.gb.zl ? [t._v(" ")] : t._e(), t._v(" "), t.gb.zl ? t._e() : [e("badges", {
						attrs: {
							Ee: t.gb.perk_badges || 0,
							Uc: 18
						}
					}), t._v(" "), e("span", {
						staticClass: "player-name",
						class: {
							owner: t.Sh
						},
						style: {
							color: t.Cl
						},
						attrs: {
							tip: t.Vk
						}
					}, [t._v("\r\n        " + t._s(t.gb.perk_name || t.gb.name) + "\r\n    ")])]], 2)
				};
				Z._withStripped = !0;
				var K = s(1620);
				const Q = {
					components: {
						badges: D
					},
					data: () => ({
						Cg: K.Cg,
						yl: !1
					}),
					props: {
						gb: {
							type: Object,
							required: !0
						}
					},
					computed: {
						Cl() {
							return this.gb.perk_color ? "#" + this.gb.perk_color : "unset"
						},
						Sh() {
							return this.Cg.Th === this.gb.id
						},
						Vk() {
							return this.Sh ? "Lobby owner" : ""
						}
					},
					methods: {
						Al(t) {
							this.yl = !0,
								this.$emit("dragstart", t)
						},
						Bl(t) {
							this.yl = !1,
								this.$emit("dragstop", t)
						}
					}
				};
				const tt = (0,
					_.Z)(Q, Z, [], !1, null, "7995e927", null).exports;
				var et = s(3117),
					st = s(1620);
				const at = {
						data: () => ({
							Cg: st.Cg,
							Bc: st.Cg.Bc,
							Uh: st.Cg.Uh,
							zg: st.Cg.zg,
							sl: null,
							yl: null,
							xl: !1,
							Dl: [null, null],
							El: []
						}),
						components: {
							lobbyPlayer: tt
						},
						computed: {
							rl() {
								var t = this.Bc.slice(0),
									e = this.Uh.map((e => e.map((e => {
										var s = t.findIndex((t => t.id === e));
										return t.splice(s, 1)[0]
									}))));
								return e.push(t),
									this.El.length > 0 && e[this.El[0][0]].splice(this.El[0][1], 0, {
										id: "ghost",
										zl: !0
									}),
									e
							}
						},
						methods: {
							tl(t) {
								this.sl = t,
									this.$nextTick((() => this.$refs.tiInput[0].focus()))
							},
							ul(t) {
								var e = this.Cg.zg.round_team_names[t],
									s = this.Cg.Vh[t];
								et.kb.fire({
									text: `Change score for ${e} from ${s} to:`,
									input: "text",
									confirmButtonText: "Set",
									showCancelButton: !0
								}).then((e => {
									var s = parseInt(e.value);
									isNaN(s) ? et.hb("That's not a number") : st.ji.ri(t, s)
								}))
							},
							pi() {
								st.ji.pi(),
									this.sl = null
							},
							ql(t, e, s) {
								if (this.yl = t,
									this.$set(this.Dl, 0, e),
									this.$set(this.Dl, 1, s),
									null == e)
									for (this.xl = !1; this.El.length > 0;)
										this.El.pop()
							},
							wl(t, e) {
								if (null == t || this.Dl[0] === t && this.Dl[1] === e) {
									for (; this.El.length > 1;)
										this.El.pop();
									this.xl = !0
								} else
									null != t && this.El.unshift([t, e])
							},
							vl(t, e) {
								if (null != this.yl) {
									for (this.Dl[0] !== this.zg.round_teams && this.Uh[this.Dl[0]].splice(this.Dl[1], 1),
										t !== this.zg.round_teams && this.Uh[t].splice(e, 0, this.yl); this.El.length > 0;)
										this.El.pop();
									this.yl = null,
										this.xl = !1,
										this.$set(this.Dl, 0, null),
										this.$set(this.Dl, 1, null),
										st.ji.qi()
								}
							}
						}
					},
					it = at;
				const nt = (0,
					_.Z)(it, Y, [], !1, null, "0a751125", null).exports;
				var rt = s(1620);
				const ot = {
					data: () => ({
						Cg: rt.Cg,
						Rk: !1
					}),
					components: {
						lobbyChat: B,
						lobbyList: j,
						lobbySettings: q,
						lobbyTeams: nt
					},
					methods: {
						Tk() {
							b().fb("Are you sure that you want to leave this lobby?", rt.ji.vi)
						},
						async pg() {
							await b().fb("Confirm you want to start the lobby server?") && (this.Cg.Xh && !await b().fb("Teams are not even. Are you sure about this?") || (this.Rk = !0,
								await rt.ji.si(),
								this.Rk = !1))
						},
						Sk() {
							rt.eb.mf(this.Cg.Oh, this.Cg.Oh)
						},
						ib() {
							b().fb("Confirm you want to stop the lobby server?", (async () => {
								this.Rk = !0,
									await rt.ji.ui(),
									this.Rk = !1
							}))
						},
						Uk() {
							b().fb("Are you absolutely sure that you want to delete this lobby?", rt.ji.wi)
						}
					},
					mounted() {
						this.Cg.nf = !0,
							rt.ji.ki()
					},
					beforeDestroy() {
						this.Cg.nf = !1,
							rt.ji.li()
					}
				};
				const lt = (0,
					_.Z)(ot, P, [function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "container"
					}, [e("b", [t._v("Lobbies")]), t._v(" are custom servers made by other players with minimal restrictions."), e("br"), t._v(" "), e("ul", [e("li", [t._v("Only players "), e("b", [t._v("level 20")]), t._v(" or above can create lobbies, but anyone can join")]), t._v(" "), e("li", [e("b", [t._v("Public")]), t._v(" lobbies are visible to everyone")]), t._v(" "), e("li", [e("b", [t._v("Private")]), t._v(" lobbies can only be joined by people that know their "), e("b", [t._v("tag")])]), t._v(" "), e("li", [t._v("Lobbies can have up to "), e("b", [t._v("25")]), t._v(" players")]), t._v(" "), e("li", [t._v("You "), e("b", [t._v("do not")]), t._v(" gain XP while playing in a lobby")]), t._v(" "), e("li", [e("b", [t._v("Abuse")]), t._v(" can lead to restrictions and account bans")])])])
				}], !1, null, "67f43bc8", null).exports;
				var ct = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "tab-menu"
					}, [e("div", {
						staticClass: "tabs-rows"
					}, [e("div", {
						staticClass: "tabs"
					}, [e("div", {
						staticClass: "tab",
						class: {
							active: "season" === t.Fl
						},
						on: {
							click: function(e) {
								t.Fl = "season"
							}
						}
					}, [e("i", {
						staticClass: "fas fa-calendar-alt"
					}), t._v(" Season\r\n            ")]), t._v(" "), e("div", {
						staticClass: "tab",
						class: {
							active: "total" === t.Fl
						},
						on: {
							click: function(e) {
								t.Fl = "total"
							}
						}
					}, [e("i", {
						staticClass: "fas fa-globe"
					}), t._v(" Total XP\r\n            ")]), t._v(" "), e("div", {
						staticClass: "tab",
						class: {
							active: "rating" === t.Fl
						},
						on: {
							click: function(e) {
								t.Fl = "rating"
							}
						}
					}, [e("i", {
						staticClass: "fas fa-star"
					}), t._v(" Rating\r\n            ")])]), t._v(" "), e("div", {
						staticClass: "season-scroll-wrapper"
					}, ["season" === t.Fl ? e("div", {
						staticClass: "season-scroll"
					}, [e("div", {
						staticClass: "tabs"
					}, t._l(t.Gl, (function(s, a) {
						return e("div", {
							key: a,
							staticClass: "tab",
							class: {
								active: t.Hl[0] === s[0]
							},
							on: {
								click: function(e) {
									return t.Il(s)
								}
							}
						}, [e("div", [t._v(t._s(s[1]))])])
					})), 0)]) : t._e()])]), t._v(" "), e("div", {
						staticClass: "tab-data"
					}, ["season" === t.Fl ? e("meta-list", {
						attrs: {
							Jl: t.Kl,
							al: "/leaderboard/season_xp/" + t.Hl[0] + "/100",
							Ll: "xp",
							Ml: "XP",
							Nl: t.Ol
						}
					}, [e("div", ["total" !== t.Hl[0] ? [t._v("\r\n                Counts for this season and mode only"), e("br"), t._v(" "), "string" == typeof t.Pl ? e("span", [t._v("\r\n                    " + t._s(t.Pl) + "\r\n                ")]) : null != t.Pl && "total" !== t.Hl[0] ? e("span", [t._v("\r\n                    Top "), e("b", [t._v(t._s(t.Ol))]), t._v(" player" + t._s(1 === t.Ol ? "" : "s") + "\r\n                    earn" + t._s(1 === t.Ol ? "s" : "") + " "), e("b", [t._v("8 week")]), t._v(" colored name"), e("br")]) : t.Ql ? e("span", {
						attrs: {
							tip: "After rewards lock, you will know how many players earn colored name"
						}
					}, [t._v("\r\n                    Rewards lock in "), e("b", [t._v(t._s(t.Ql))]), e("br")]) : t._e()] : [t._v("\r\n                Season XP gained across all modes"), e("br"), t._v("\r\n                #1 player earns "), e("badges", {
						attrs: {
							Ee: 268435456,
							Uc: 16
						}
					}), t._v(" badge"), e("br")], t._v("\r\n                Season ends in "), e("b", [t._v(t._s(t.Rl))]), e("br")], 2)]) : t._e(), t._v(" "), "total" === t.Fl ? e("meta-list", {
						attrs: {
							Jl: "Total XP",
							al: "/leaderboard/xp/100",
							Ll: "xp",
							Ml: "XP"
						}
					}, [e("div", [t._v("\r\n                Total XP counts since you started using your account\r\n            ")])]) : t._e(), t._v(" "), "rating" === t.Fl ? e("meta-list", {
						attrs: {
							Jl: "Tournament rating",
							al: "/leaderboard/rating/100",
							Ll: "rating",
							Ml: "rating"
						}
					}, [e("div", [t._v("\r\n                Tournaments let you earn rating"), e("br"), t._v("\r\n                Check the "), e("a", {
						attrs: {
							href: "/tournaments"
						}
					}, [t._v("Tournaments")]), t._v(" Discord server for more information\r\n            ")])]) : t._e()], 1)])
				};
				ct._withStripped = !0;
				var ut = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "player-list-tab"
					}, [t.Jl ? e("h2", {
						staticClass: "player-list-title"
					}, [t._v(t._s(t.Jl))]) : t._e(), t._v(" "), t.Sl ? e("div", [t._v("\r\n        Failed loading:"), e("br"), t._v("\r\n        " + t._s(t.Sl) + "\r\n    ")]) : t._e(), t._v(" "), t.Tl ? e("div", [t._t("default"), t._v(" "), t.Ul.length > 0 ? e("div", {
						staticClass: "player-list"
					}, t._l(t.Ul, (function(s, a) {
						return e("div", {
							key: a,
							staticClass: "player-row",
							class: {
								me: !!s.Vl,
								cutoff: a + 1 === t.Nl
							}
						}, [e("span", {
							staticClass: "player-nr"
						}, [t._v(t._s(a + 1) + ".")]), t._v(" "), e("span", {
							staticClass: "player-name",
							style: {
								color: s.Qi
							}
						}, [e("badges", {
							attrs: {
								Ee: s.Zh,
								Uc: 18
							}
						}), t._v("\r\n                    " + t._s(s.lb) + "\r\n                ")], 1), t._v(" "), e("span", [t._v(t._s(s.Wl) + " " + t._s(t.Ml))])])
					})), 0) : e("div", {
						staticClass: "player-list"
					}, [t._v("\r\n            There are no players on this leaderboard\r\n        ")])], 2) : t._e()])
				};
				ut._withStripped = !0;
				var ht = s(1050);
				const dt = {
						data: () => ({
							Xl: {},
							Ul: [],
							Tl: !1,
							Sl: null
						}),
						props: {
							Jl: {
								type: String,
								default: null
							},
							al: {
								type: String,
								required: !0
							},
							Ll: {
								type: String,
								required: !0
							},
							Ml: {
								type: String,
								required: !0
							},
							Nl: {
								type: Number,
								required: !1
							}
						},
						watch: {
							al(t, e) {
								t !== e && (this.Sl = null,
									this.Xl[t] ? (this.Ul.splice(0, this.Ul.length),
										this.Ul.push(...this.Xl[t])) : (this.Ul.splice(0, this.Ul.length),
										this.Yl()))
							}
						},
						components: {
							badges: D
						},
						methods: {
							async Yl() {
								var t = this.al;
								this.Tl = !1;
								var e = await ht.get(t);
								if (!e.ok)
									return e.headers.has("Content-Type") ? this.Sl = await e.text() : this.Sl = "Failed fetching",
										void(this.Ul = []);
								var s = await e.json();
								this.Sl = null,
									this.Xl[t] = s.map((t => ({
										lb: t.perk_name || t.discord_name,
										Qi: "#" + (t.perk_color || "ffffff"),
										Zh: t.perk_badges || 0,
										Wl: t[this.Ll],
										Vl: t.me
									}))),
									this.Ul = [...this.Xl[t]],
									this.Tl = !0
							}
						},
						created() {
							this.Yl()
						}
					},
					pt = dt;
				const vt = (0,
					_.Z)(pt, ut, [], !1, null, "2ccd0c00", null).exports;
				var ft = s(1620),
					mt = s(3658),
					{
						R: _t
					} = s(3658),
					gt = Date.UTC((new Date).getUTCFullYear(), (new Date).getUTCMonth() + 1),
					yt = gt - 432e6,
					wt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][(new Date).getUTCMonth()] + " " + (new Date).getUTCFullYear() + " season";
				const bt = {
					data() {
						var t = [
							["total", "Total"],
							["ffa", "FFA"],
							["instant", "Instant"],
							["gigasplit", "Gigasplit"],
							["terasplit", "Terasplit"],
							["megasplit", "Megasplit"],
							["crazy", "Crazy"],
							["self-feed", "Self-Feed"]
						];
						return {
							Gl: t,
							Fl: "season",
							Hl: t[0],
							Kl: wt,
							Rl: "",
							Ql: "",
							Pl: void 0
						}
					},
					components: {
						metaList: vt,
						Badges: D
					},
					computed: {
						Ol() {
							return "total" === this.Hl[0] ? 1 : null == this.Pl || "string" == typeof this.Pl ? null : this.Pl.find((t => t.leaderboard === this.Hl[0])).count
						}
					},
					methods: {
						async Zl() {
							if (void 0 === this.Pl) {
								this.Pl = null;
								var t = await u().get("/leaderboard/season_rewards");
								t.ok ? this.Pl = JSON.parse(await t.text()) : this.Pl = await t.text()
							}
						},
						am() {
							var t = Date.now();
							this.Rl = mt.bm(gt - t),
								t > yt ? (this.Ql = "",
									this.Zl()) : this.Ql = mt.bm(yt - t)
						},
						Il(t) {
							localStorage.lastSeasonTab = t[0],
								this.Hl = t
						}
					},
					created() {
						this.am(),
							ft.R.$on(_t.Wa, this.am),
							null != localStorage.lastSeasonTab && (this.Hl = this.Gl.find((t => t[0] === localStorage.lastSeasonTab)),
								null == this.Hl && (delete localStorage.lastSeasonTab,
									this.Hl = this.Gl[0]))
					},
					destroyed() {
						ft.R.$off(_t.Wa, this.am)
					}
				};
				const Ct = (0,
					_.Z)(bt, ct, [], !1, null, null, null).exports;
				var kt = function() {
					var t = this,
						e = t._self._c;
					t._self._setupProxy;
					return e("transition", {
						attrs: {
							name: "fade",
							appear: ""
						}
					}, [e("div", {
						staticClass: "modal"
					}, [e("div", {
						staticClass: "overlay",
						on: {
							click: function(e) {
								return t.$emit("close")
							}
						}
					}), t._v(" "), e("i", {
						staticClass: "fas fa-times-circle close-button",
						on: {
							click: function(e) {
								return t.$emit("close")
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "wrapper"
					}, [e("transition", {
						attrs: {
							name: "scale",
							appear: ""
						}
					}, [e("div", {
						staticClass: "content fade-box"
					}, [t._t("default", (function() {
						return [t._v("Here should be something")]
					}))], 2)])], 1)])])
				};
				kt._withStripped = !0;
				var St = s(3958);
				const xt = s.n(St)();
				const Mt = (0,
					_.Z)(xt, kt, [], !1, null, "73ccaaca", null).exports;
				var Pt = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "container"
					}, [e("input", {
						ref: "file",
						staticStyle: {
							display: "none"
						},
						attrs: {
							type: "file",
							accept: ".vanis",
							multiple: ""
						},
						on: {
							change: function(e) {
								return t.dm(e)
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "replay-list-header"
					}, [e("span", {
						staticClass: "replay-list-count",
						attrs: {
							tip: t.fm ? "Limit depends on disk space and can change. When reached replays fail to save and browser might delete all!" : ""
						}
					}, [t._v("\r\n            " + t._s(t.gm ? t.hm + " replay" + (1 !== t.hm ? "s" : "") + (t.fm > 0 ? ` (${t.im} / ${t.jm})` : "") : "Loading") + "\r\n        ")]), t._v(" "), t.gm && !t.km ? e("span", {
						staticClass: "replay-list-page"
					}, [e("div", {
						staticClass: "anchor"
					}, [e("div", {
						staticClass: "left"
					}, [e("div", {
						staticClass: "current"
					}, [e("div", {
						staticClass: "phantom"
					}, [e("i", {
						staticClass: "fas fa-chevron-left prev",
						class: {
							disabled: !t.lm || 0 === t.nm
						},
						on: {
							click: function(e) {
								return t.om(-1)
							}
						}
					}), t._v(" "), e("span", [t._v(t._s(t.pm))])]), t._v(" "), t.qm ? t._e() : e("div", {
						staticClass: "real",
						attrs: {
							tip: "Click to input page"
						},
						on: {
							click: function(e) {
								return t.rm(!0)
							}
						}
					}, [e("span", [t._v(t._s(1 + t.nm))])]), t._v(" "), t.qm ? e("div", {
						staticClass: "real-input"
					}, [e("div", {
						staticClass: "overlay",
						on: {
							click: function(e) {
								return t.rm(!1)
							}
						}
					}), t._v(" "), e("i", {
						staticClass: "fas fa-chevron-left prev",
						class: {
							disabled: !t.lm || 0 === t.nm
						},
						on: {
							click: function(e) {
								return t.om(-1)
							}
						}
					}), t._v(" "), e("input", {
						attrs: {
							type: "text"
						},
						domProps: {
							value: 1 + t.nm
						},
						on: {
							focus: function(t) {
								return t.target.select()
							},
							change: function(e) {
								return t.om(e)
							}
						}
					})]) : t._e()])]), t._v("\r\n                /\r\n                "), e("div", {
						staticClass: "right"
					}, [t._v("\r\n                    " + t._s(t.pm) + "\r\n                    "), e("i", {
						staticClass: "fas fa-chevron-right next",
						class: {
							disabled: !t.lm || t.nm === t.pm - 1
						},
						on: {
							click: function(e) {
								return t.om(1)
							}
						}
					})])])]) : t._e(), t._v(" "), e("span", {
						staticClass: "replay-list-bulk"
					}, [e("input", {
						staticClass: "vanis-button",
						attrs: {
							type: "button",
							disabled: !t.lm,
							value: "Import"
						},
						on: {
							click: function(e) {
								return t.$refs.file.click()
							}
						}
					}), t._v(" "), e("input", {
						staticClass: "vanis-button",
						attrs: {
							type: "button",
							disabled: !t.lm || t.km,
							value: "Download all"
						},
						on: {
							click: function(e) {
								return t.downloadAllReplays()
							}
						}
					}), t._v(" "), e("input", {
						staticClass: "vanis-button",
						attrs: {
							type: "button",
							disabled: !t.lm || t.km,
							value: "Delete all"
						},
						on: {
							click: function(e) {
								return t.deleteAllReplays()
							}
						}
					})])]), t._v(" "), e("div", {
						staticClass: "replay-list"
					}, [t.gm && t.km ? [e("div", {
						staticClass: "notification"
					}, [e("div", [t._v("Press "), e("b", [t._v(t._s(t.sm))]), t._v(" in game to save last "), e("b", [t._v(t._s(t.tm))]), t._v(" seconds of gameplay.")]), t._v(" "), e("div", {
						staticStyle: {
							color: "red",
							"font-weight": "bold"
						}
					}, [t._v("Replays are saved in browser memory!")]), t._v(" "), e("div", [t._v("They get permanently erased if browser data gets cleared.")])])] : t._e(), t._v(" "), t.gm && !t.km ? [e("div", {
						staticClass: "replay-page"
					}, t._l(t.um, (function(t, s) {
						return e("replay-item", {
							key: s,
							attrs: {
								ab: t
							}
						})
					})), 1)] : t._e()], 2), t._v(" "), t.vm ? e("div", {
						staticClass: "overlay bulk-operation-overlay"
					}, [t._v("\r\n        Please wait...\r\n        "), t.wm ? e("div", {
						staticClass: "small"
					}, [t._v(t._s(t.wm))]) : t._e(), t._v(" "), t.xm ? e("div", {
						staticClass: "small warning"
					}, [t._v("Allow page to download multiple files if asked")]) : t._e()]) : t._e()])
				};
				Pt._withStripped = !0;
				var It = function() {
					var t = this,
						e = t._self._c;
					t._self._setupProxy;
					return e("div", {
						staticClass: "replay-item",
						style: {
							backgroundImage: `url('${t.ab.Ld}')`
						},
						on: {
							click: t.bb
						}
					}, [e("div", {
						staticClass: "replay-header",
						on: {
							click: function(t) {
								t.stopPropagation()
							}
						}
					}, [e("div", {
						staticClass: "replay-name"
					}, [t._v(t._s(t.ab.lb))]), t._v(" "), e("div", [e("i", {
						staticClass: "replay-button fas fa-cloud-download-alt",
						attrs: {
							tip: "Download this replay"
						},
						on: {
							click: function(e) {
								return e.stopPropagation(),
									t.jb.apply(null, arguments)
							}
						}
					}), t._v(" "), e("i", {
						staticClass: "replay-button fas fa-trash-alt",
						attrs: {
							tip: "Delete this replay"
						},
						on: {
							click: function(e) {
								return e.stopPropagation(),
									t.mb.apply(null, arguments)
							}
						}
					})])])])
				};
				It._withStripped = !0;
				var Tt = s(9617);
				const At = s.n(Tt)();
				const Nt = (0,
					_.Z)(At, It, [], !1, null, "1dc3fbb4", null).exports;
				var Lt = s(3162),
					Dt = s(5733),
					Ot = s(1620),
					Rt = s(6470),
					Et = s(3117),
					Ut = s(3658),
					{
						R: Ft
					} = s(3658);

				function Bt(t) {
					return new Promise(((e, s) => {
						var a = new FileReader;
						a.onload = i => {
								var n = i.target.result;
								n instanceof ArrayBuffer ? (n.byteLength < 9 && s(new Error("Invalid replay data!")),
									new Uint8Array(n, 0, 9)[7] >= "5".charCodeAt(0) ? e(n) : a.readAsText(t)) : e(n)
							},
							a.onerror = s,
							a.readAsArrayBuffer(t)
					}))
				}
				var zt = ["B", "kB", "MB", "GB"];

				function Xt(t) {
					for (var e = 0; t >= 1024 && e < 5;)
						t /= 1024,
						e++;
					return `${t.toFixed(0)}${zt[e]}`
				}
				const $t = 200,
					Wt = {
						data: () => ({
							gm: !1,
							lm: !1,
							ym: !1,
							km: !1,
							hm: 0,
							zm: [],
							Am: {
								Bm: !1,
								Cm: 0,
								Dm: 0
							},
							qm: !1,
							Em: null,
							Fm: !1,
							nm: 0,
							pm: 0,
							um: [],
							vm: !1,
							wm: "",
							xm: !1,
							sm: Rt.Dh().saveReplay,
							tm: null
						}),
						computed: {
							fm() {
								return this.Am.Bm && this.hm > 0
							},
							im() {
								return Xt(this.Am.Cm)
							},
							jm() {
								return Xt(this.Am.Dm)
							}
						},
						components: {
							replayItem: Nt
						},
						methods: {
							rm(t) {
								this.qm = t
							},
							Gm(t, e) {
								t ? (this.vm = !0,
									this.wm = e || "") : setTimeout((() => {
									this.vm = !1,
										this.wm = ""
								}), 1e3)
							},
							async dm(t) {
								if (this.vm)
									return;
								var e = Array.from(t.target.files);
								if (!e.length)
									return;
								t.target && (t.target.value = null);
								var s = 0,
									a = e.length,
									i = [];
								const n = async () => {
									const t = (await Ot.ab.nb()).transaction(Ot.ab.ob, "readwrite");
									return await Promise.all(i.map((e => t.store.put(e.data, e.name))).concat(t.done))
								};
								try {
									for (; s < a;) {
										const t = e[s];
										i.length === $t && (await n(),
												i = []),
											i.push({
												name: t.name.replace(/\.vanis$/, ""),
												data: await Bt(t)
											}),
											this.Gm(!0, `Importing replays (${++s} / ${a})`)
									}
									i.length && await n(),
										this.Gm(!0, "Importing replays")
								} catch (t) {
									Et.hb(`Error importing replays: ${t.message}`)
								} finally {
									this.Gm(!1),
										this.Hm()
								}
							},
							async downloadAllReplays() {
								if (!this.vm && this.lm) {
									var t = Math.ceil(this.hm / $t),
										e = t > 1,
										s = Ut.Bj();
									this.xm = e,
										this.Gm(!0, `Packing replays (0 / ${t})`);
									for (let a = 0; a < t; a++) {
										const i = new Dt;
										let n = await Ot.ab.nb().then((t => t.transaction(Ot.ab.ob).store.openCursor(void 0, "prev")));
										a && (n = await n.advance(a * $t));
										for (let t = 0; n && t < $t; t++)
											i.file(n.key + ".vanis", n.value),
											n = await n.continue();
										const r = await i.generateAsync({
											type: "blob"
										});
										let o = `replays_${s}`;
										e && (o += "_" + (a + 1)),
											o += ".zip",
											Lt.saveAs(r, o),
											this.Gm(!0, `Packing replays (${a + 1} / ${t})`)
									}
									this.xm = !1,
										this.Gm(!1)
								}
							},
							deleteAllReplays() {
								this.vm || Et.fb("Are you absolutely sure that you want to delete all replays?", (async () => {
									this.Gm(!0, "Deleting all replays");
									try {
										await Ot.ab.nb().then((t => t.clear(Ot.ab.ob)))
									} catch (t) {
										return void Et.hb(`Error clearing replays: ${t.message}`)
									}
									this.Gm(!1),
										this.Hm()
								}))
							},
							async Hm() {
								if (this.ym)
									return;
								this.lm = !1,
									this.ym = !0;
								var t = this.hm = await Ot.ab.nb().then((t => t.count(Ot.ab.ob)));
								this.pm = Math.max(Math.ceil(t / 12), 1),
									this.nm = Math.min(this.nm, this.pm - 1),
									this.lm = !0,
									this.gm = !0,
									this.ym = !1,
									this.km = 0 === t;
								const e = await (navigator.storage?.estimate?.());
								e && (this.Am.Bm = !0,
										this.Am.Cm = e.usage,
										this.Am.Dm = e.quota),
									await this.om()
							},
							async om(t) {
								t && ("number" == typeof t ? this.nm += t : this.nm = parseInt(t.target.value) - 1 || 0),
									this.Em && (this.Em(),
										this.Em = null);
								var e = Math.max(Math.min(this.nm, this.pm - 1), 0);
								this.nm !== e && (this.nm = e),
									this.Fm = !1;
								var s = [],
									a = this.zm.slice(0),
									i = !1;
								this.Em = () => i = !0;
								let n = await Ot.ab.nb().then((t => t.transaction(Ot.ab.ob).store.openCursor(void 0, "prev")));
								for (this.nm && (n = await n.advance(12 * this.nm)); n && s.length < 12 && !i;) {
									var r;
									if (n.value instanceof ArrayBuffer) {
										var o = new Uint8Array(n.value, 13, 2),
											l = o[0] << 8 | o[1],
											c = new File([n.value.slice(15, 15 + l)], "image.webp", {
												type: "image/webp"
											});
										this.zm.push(r = URL.createObjectURL(c))
									} else
										r = n.value.startsWith("REPLAY") ? n.value.split("|")[2] : "img/replay-placeholder.png";
									s.push({
											lb: n.key,
											gb: n.value,
											Ld: r
										}),
										n = await n.continue()
								}
								i || (this.um.splice(0, this.um.length, ...s),
									a.forEach(URL.revokeObjectURL),
									this.zm.splice(0, a.length),
									this.Fm = !0)
							}
						},
						created() {
							this.tm = Ot.T.Aj,
								this.Hm(),
								Ot.R.$on(Ft.Cj, this.Hm),
								Ot.R.$on(Ft.pb, this.Hm)
						},
						beforeDestroy() {
							this.zm.forEach(URL.revokeObjectURL),
								Ot.R.$off(Ft.Cj, this.Hm),
								Ot.R.$off(Ft.pb, this.Hm)
						}
					};
				const jt = (0,
					_.Z)(Wt, Pt, [], !1, null, "11810f3c", null).exports;
				var Ht = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "container"
					}, [e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Renderer\r\n            "), t.Im ? e("span", {
						staticClass: "right silent"
					}, [t._v("GPU detected")]) : t._e(), t._v(" "), t.Im ? t._e() : e("span", {
						staticClass: "right warning"
					}, [t._v("GPU not detected")])]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.Im,
							checked: t.useWebGL
						},
						on: {
							change: function(e) {
								t.Jm("useWebGL", e),
									t.Km()
							}
						}
					}, [t._v("\r\n                Use GPU rendering\r\n            ")]), t._v(" "), e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Lower for performance, higher for sharpness"
						}
					}, [t._v("\r\n                Renderer resolution "), e("span", {
						staticClass: "right"
					}, [t._v(t._s((100 * t.gameResolution).toFixed(0)) + "%")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0.5",
							max: "2",
							step: "0.05"
						},
						domProps: {
							value: t.gameResolution
						},
						on: {
							input: function(e) {
								return t.Jm("gameResolution", e)
							},
							change: function(e) {
								return t.Km()
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Small text is hidden for perfomance"
						}
					}, [t._v("\r\n                Text hiding threshold "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.smallTextThreshold) + "px")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "10",
							max: "60",
							step: "5"
						},
						domProps: {
							value: t.smallTextThreshold
						},
						on: {
							input: function(e) {
								return t.Jm("smallTextThreshold", e)
							}
						}
					})])], 1)]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Game\r\n            "), e("span", {
						staticClass: "right silent",
						attrs: {
							tip: "Version hash"
						}
					}, [t._v(t._s(t.Lm))])]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("p-check", {
						staticClass: "p-switch",
						attrs: {
							tip: "Zooms out automatically with more mass you have",
							checked: t.autoZoom
						},
						on: {
							change: function(e) {
								return t.Jm("autoZoom", e)
							}
						}
					}, [t._v("\r\n                Auto zoom\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.rememeberEjecting
						},
						on: {
							change: function(e) {
								return t.Jm("rememeberEjecting", e)
							}
						}
					}, [t._v("\r\n                Remember ejecting\r\n            ")]), t._v(" "), t.rememeberEjecting ? e("div", {
						staticClass: "silent"
					}, [t._v("\r\n                After changing tab, you "), e("b", [t._v("keep")]), t._v(" ejecting\r\n            ")]) : e("div", {
						staticClass: "silent"
					}, [t._v("After changing tab, you "), e("b", [t._v("stop")]), t._v(" ejecting")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							tip: "To prevent AFK, you must spawn manually after 1 minute",
							checked: t.autoRespawn
						},
						on: {
							change: function(e) {
								return t.Jm("autoRespawn", e)
							}
						}
					}, [t._v("\r\n                Auto respawn\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							tip: "If enabled, moving mouse cancels Freeze mouse hotkey",
							checked: t.mouseFreezeSoft
						},
						on: {
							change: function(e) {
								return t.Jm("mouseFreezeSoft", e)
							}
						}
					}, [t._v("\r\n                Soft mouse freeze\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							tip: "When enabled, flicking may be more accurate",
							checked: t.delayDoublesplit
						},
						on: {
							change: function(e) {
								return t.Jm("delayDoublesplit", e)
							}
						}
					}, [t._v("\r\n                Delay doublesplit hotkey\r\n            ")]), t._v(" "), e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Lower is responsive, higher is smooth"
						}
					}, [t._v("\r\n                Draw delay "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.drawDelay) + "ms")]), t._v(" "), e("input", {
						staticClass: "slider draw-delay",
						attrs: {
							type: "range",
							min: "0",
							max: "300",
							step: "5"
						},
						domProps: {
							value: t.drawDelay
						},
						on: {
							input: function(e) {
								return t.Jm("drawDelay", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "How fast camera follows you moving"
						}
					}, [t._v("\r\n                Camera panning delay "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.cameraMoveDelay) + "ms")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "1000",
							step: "10"
						},
						domProps: {
							value: t.cameraMoveDelay
						},
						on: {
							input: function(e) {
								return t.Jm("cameraMoveDelay", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Camera zooming delay "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.cameraZoomDelay) + "ms")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "20",
							max: "1000",
							step: "10"
						},
						domProps: {
							value: t.cameraZoomDelay
						},
						on: {
							input: function(e) {
								return t.Jm("cameraZoomDelay", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Scroll zoom rate "), e("span", {
						staticClass: "right"
					}, [t._v(t._s((t.cameraZoomSpeed / 10 * 100).toFixed(0)) + "%")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "1",
							max: "20",
							step: "1"
						},
						domProps: {
							value: t.cameraZoomSpeed
						},
						on: {
							input: function(e) {
								return t.Jm("cameraZoomSpeed", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row"
					}, [t._v("\r\n                Replay duration "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.replayDuration) + " seconds")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "3",
							max: "15",
							step: "1"
						},
						domProps: {
							value: t.replayDuration
						},
						on: {
							input: function(e) {
								return t.Jm("replayDuration", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.showReplaySaved
						}
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "2",
							step: "1"
						},
						domProps: {
							value: t.showReplaySaved
						},
						on: {
							input: function(e) {
								return t.Jm("showReplaySaved", e)
							}
						}
					}), t._v('\r\n                "Replay saved" ' + t._s(t.Mm) + "\r\n            ")])], 1)]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Cells\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.showNames
						}
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "2",
							step: "1"
						},
						domProps: {
							value: t.showNames
						},
						on: {
							input: function(e) {
								return t.Jm("showNames", e)
							}
						}
					}), t._v("\r\n                Show " + t._s(t.Nm) + " names\r\n            ")]), t._v(" "), e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.showSkins
						}
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "2",
							step: "1"
						},
						domProps: {
							value: t.showSkins
						},
						on: {
							input: function(e) {
								return t.Jm("showSkins", e)
							}
						}
					}), t._v("\r\n                Show " + t._s(t.Om) + " skins\r\n            ")]), t._v(" "), e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.showMass
						}
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "2",
							step: "1"
						},
						domProps: {
							value: t.showMass
						},
						on: {
							input: function(e) {
								return t.Jm("showMass", e)
							}
						}
					}), t._v("\r\n                Show " + t._s(t.Pm) + " mass\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.showOwnName
						},
						on: {
							change: function(e) {
								return t.Jm("showOwnName", e)
							}
						}
					}, [t._v("Show my own name")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.showOwnSkin
						},
						on: {
							change: function(e) {
								return t.Jm("showOwnSkin", e)
							}
						}
					}, [t._v("Show my own skin")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.showOwnMass
						},
						on: {
							change: function(e) {
								return t.Jm("showOwnMass", e)
							}
						}
					}, [t._v("Show my own mass")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.showCrown
						},
						on: {
							change: function(e) {
								return t.Jm("showCrown", e)
							}
						}
					}, [t._v("Show crown")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.foodVisible
						},
						on: {
							change: function(e) {
								return t.Jm("foodVisible", e)
							}
						}
					}, [t._v("Show food")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.eatAnimation
						},
						on: {
							change: function(e) {
								return t.Jm("eatAnimation", e)
							}
						}
					}, [t._v("\r\n                Show eat animation\r\n            ")])], 1)]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.showHud
						},
						on: {
							change: function(e) {
								return t.Jm("showHud", e)
							}
						}
					}, [t._v("HUD")])], 1), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "option-row",
						class: {
							disabled: !t.showHud
						}
					}, [t._v("\r\n                Scale "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(Math.floor(100 * t.hudScale)) + "%")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							disabled: !t.showHud,
							min: "0.5",
							max: "2",
							step: "0.05"
						},
						domProps: {
							value: t.hudScale
						},
						on: {
							input: function(e) {
								return t.Jm("hudScale", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "option-row",
						class: {
							disabled: !t.showHud && !t.showChatToast
						}
					}, [t._v("\r\n                Chat size "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.chatHeight) + "px")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							disabled: !t.showHud && !t.showChatToast,
							min: "200",
							max: "500",
							step: "50"
						},
						domProps: {
							value: t.chatHeight
						},
						on: {
							input: function(e) {
								return t.Jm("chatHeight", e)
							}
						}
					})]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showLeaderboard
						},
						on: {
							change: function(e) {
								return t.Jm("showLeaderboard", e)
							}
						}
					}, [t._v("\r\n                Show leaderboard\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showServerName
						},
						on: {
							change: function(e) {
								return t.Jm("showServerName", e)
							}
						}
					}, [t._v("\r\n                Leaderboard: Server name\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showChat
						},
						on: {
							change: function(e) {
								return t.Jm("showChat", e)
							}
						}
					}, [t._v("\r\n                Show chat\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud || !t.showChat,
							checked: t.showChatToast
						},
						on: {
							change: function(e) {
								return t.Jm("showChatToast", e)
							}
						}
					}, [t._v("\r\n                Show chat as popups\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.minimapEnabled
						},
						on: {
							change: function(e) {
								return t.Jm("minimapEnabled", e)
							}
						}
					}, [t._v("\r\n                Show minimap\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.minimapLocations
						},
						on: {
							change: function(e) {
								return t.Jm("minimapLocations", e)
							}
						}
					}, [t._v("\r\n                Show minimap locations\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showFPS
						},
						on: {
							change: function(e) {
								return t.Jm("showFPS", e)
							}
						}
					}, [t._v("\r\n                Stats: FPS\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showPing
						},
						on: {
							change: function(e) {
								return t.Jm("showPing", e)
							}
						}
					}, [t._v("\r\n                Stats: Ping\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showPlayerMass
						},
						on: {
							change: function(e) {
								return t.Jm("showPlayerMass", e)
							}
						}
					}, [t._v("\r\n                Stats: Current mass\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showPlayerScore
						},
						on: {
							change: function(e) {
								return t.Jm("showPlayerScore", e)
							}
						}
					}, [t._v("\r\n                Stats: Score\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showCellCount
						},
						on: {
							change: function(e) {
								return t.Jm("showCellCount", e)
							}
						}
					}, [t._v("\r\n                Stats: Cell count\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showClock
						},
						on: {
							change: function(e) {
								return t.Jm("showClock", e)
							}
						}
					}, [t._v("\r\n                Minimap: System time\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showSessionTime
						},
						on: {
							change: function(e) {
								return t.Jm("showSessionTime", e)
							}
						}
					}, [t._v("\r\n                Minimap: Session time\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showPlayerCount
						},
						on: {
							change: function(e) {
								return t.Jm("showPlayerCount", e)
							}
						}
					}, [t._v("\r\n                Minimap: Players in server\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showSpectators
						},
						on: {
							change: function(e) {
								return t.Jm("showSpectators", e)
							}
						}
					}, [t._v("\r\n                Minimap: Spectators\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showTagTotalMass
						},
						on: {
							change: function(e) {
								return t.Jm("showTagTotalMass", e)
							}
						}
					}, [t._v("\r\n                Minimap: Tag's total mass\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showRestartTiming
						},
						on: {
							change: function(e) {
								return t.Jm("showRestartTiming", e)
							}
						}
					}, [t._v("\r\n                Minimap: Server restart time\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.showHud,
							checked: t.showAutorespawnIndicator
						},
						on: {
							change: function(e) {
								return t.Jm("showAutorespawnIndicator", e)
							}
						}
					}, [t._v("\r\n                Minimap: Auto respawning\r\n            ")])], 1)]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Chat & names\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "row"
					}, [t._v("\r\n                You can right-click name in chat to block them until server restart\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.showBlockedMessageCount
						},
						on: {
							change: function(e) {
								return t.Jm("showBlockedMessageCount", e)
							}
						}
					}, [t._v("\r\n                Show blocked message count\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.filterChatMessages
						},
						on: {
							change: function(e) {
								return t.Jm("filterChatMessages", e)
							}
						}
					}, [t._v("\r\n                Filter profanity\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.clearChatMessages
						},
						on: {
							change: function(e) {
								return t.Jm("clearChatMessages", e)
							}
						}
					}, [t._v("\r\n                Clear on disconnect\r\n            ")])], 1)]), t._v(" "), e("div", {
						staticClass: "reset-option-wrapper"
					}, [e("span", {
						staticClass: "reset-option",
						on: {
							click: function(e) {
								return t.Qm()
							}
						}
					}, [e("i", {
						staticClass: "fa fa-undo"
					}), t._v(" Reset\r\n        ")])])])
				};
				Ht._withStripped = !0;
				var Vt = s(1620),
					Gt = s(5097),
					Jt = s(3117),
					{
						R: qt
					} = s(3658);

				function Yt(t) {
					switch (t) {
						case 0:
							return "nobody else's";
						case 1:
							return "tag players'";
						case 2:
							return "everybody's";
						default:
							return "???"
					}
				}
				const Zt = {
					data() {
						var t = Gt.jk(),
							e = {
								Lm: "c2cb"
							};
						e.Im = PIXI.utils.isWebGLSupported();
						for (var s = 0; s < t.length;)
							e[t[s++]] = t[s++];
						return e
					},
					computed: {
						Nm() {
							return Yt(this.showNames)
						},
						Om() {
							return Yt(this.showSkins)
						},
						Pm() {
							return Yt(this.showMass)
						},
						Mm() {
							switch (this.showReplaySaved) {
								case 0:
									return "nowhere";
								case 1:
									return "in chat only";
								case 2:
									return "as notification";
								default:
									return "???"
							}
						}
					},
					methods: {
						Km() {
							Jt.fb("Refresh page to apply changes?", (() => {
								setTimeout((() => {
									location.reload()
								}), 500)
							}))
						},
						Jm(t, e) {
							var s;
							if (s = e && e.target ? isNaN(e.target.valueAsNumber) ? e.target.value : e.target.valueAsNumber : e,
								Gt.Ee(t, s)) {
								if (this[t] = s,
									"showHud" === t)
									Vt.R.$emit(qt.Sa);
								if (Vt.Ua)
									switch (t) {
										case "showNames":
										case "showSkins":
										case "showMass":
										case "showOwnName":
										case "showOwnSkin":
										case "showOwnMass":
											Vt.Ya.lc();
											break;
										case "foodVisible":
											Vt.Ie.Nc.visible = s;
											break;
										case "hudScale":
										case "chatHeight":
										case "showLeaderboard":
										case "showBlockedMessageCount":
										case "minimapEnabled":
										case "minimapLocations":
										case "showFPS":
										case "showPing":
										case "showPlayerMass":
										case "showPlayerScore":
										case "showCellCount":
										case "showClock":
										case "showSessionTime":
										case "showSpectators":
										case "showPlayerCount":
										case "showRestartTiming":
										case "showChat":
										case "showChatToast":
											Vt.R.$emit(qt.Sa, Gt)
									}
							}
						},
						Qm() {
							Jt.fb("Are you sure you want to reset all setting options?", (() => {
								for (var t = Gt.jk().indexOf("clearChatMessages"), e = 0, s = Gt.jk(); e <= t; e += 2)
									this.Jm(s[e], Gt.kk(s[e]))
							}))
						}
					}
				};
				const Kt = (0,
					_.Z)(Zt, Ht, [], !1, null, "e893ba3c", null).exports;
				var Qt = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "container"
					}, [e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Colors and images\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options two-columns"
					}, [e("span", [e("div", {
						staticClass: "color-input"
					}, [e("span", [t._v("Background")]), t._v(" "), e("color-option", {
						staticClass: "right",
						attrs: {
							Wl: t.backgroundColor
						},
						on: {
							input: function(e) {
								return t.Jm("backgroundColor", e)
							}
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input"
					}, [e("span", [t._v("Map border")]), t._v(" "), e("color-option", {
						staticClass: "right",
						attrs: {
							Wl: t.borderColor
						},
						on: {
							input: function(e) {
								return t.Jm("borderColor", e)
							}
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input",
						class: {
							disabled: !t.useFoodColor
						}
					}, [e("span", [t._v("Food")]), t._v(" "), e("color-option", {
						staticClass: "right",
						attrs: {
							Rm: !t.useFoodColor,
							Wl: t.foodColor
						},
						on: {
							input: function(e) {
								return t.Jm("foodColor", e)
							}
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input"
					}, [e("span", [t._v("Ejected cells")]), t._v(" "), e("color-option", {
						staticClass: "right",
						attrs: {
							Wl: t.ejectedColor
						},
						on: {
							input: function(e) {
								return t.Jm("ejectedColor", e)
							}
						}
                    })], 1), t._v(" "), e("div", {
                        staticClass: "color-input"
                    }, [e("span", [t._v("Rainbow effect")]), t._v(" "), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.ejectRainbowEffect,
                            expression: "ejectRainbowEffect"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.ejectRainbowEffect) ? t._i(t.ejectRainbowEffect, null) > -1 : t.ejectRainbowEffect
                        },
                        on: {
                            change: function(e) {
                                var n = t.ejectRainbowEffect,
                                    r = e.target,
                                    o = !!r.checked;
                                if (Array.isArray(n)) {
                                    var i = t._i(n, null);
                                    r.checked ? i < 0 && (n = n.concat([null])) : i > -1 && (n = n.slice(0, i).concat(n.slice(i + 1)))
                                } else
                                    n = o;
                                t.$set(t, "ejectRainbowEffect", n)
                            }
                        }
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input",
						class: {
							disabled: !t.cellNameOutline
						}
					}, [e("span", [t._v("Name outline")]), t._v(" "), e("color-option", {
						staticClass: "right",
						attrs: {
							Rm: !t.cellNameOutline,
							Wl: t.cellNameOutlineColor
						},
						on: {
							input: function(e) {
								return t.Jm("cellNameOutlineColor", e)
							}
						}
					})], 1)]), t._v(" "), e("span", [e("div", {
						staticClass: "color-input",
						attrs: {
							tip: "32x32 recommended"
						}
					}, [e("span", [t._v("Cursor")]), t._v(" "), e("image-option", {
						staticClass: "right",
						attrs: {
							md: 32,
							Sm: "",
							Wl: t.cursorImageUrl
						},
						on: {
							input: function(e) {
								return t.Jm("cursorImageUrl", e)
							}
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input",
						class: {
							disabled: !t.showBackgroundImage
						},
						attrs: {
							tip: "1000x1000 or larger recommended, prefer square"
						}
					}, [e("span", [t._v("Map image")]), t._v(" "), e("image-option", {
						staticClass: "right",
						attrs: {
							md: 330,
							Sm: t.Tm,
							disabled: !t.showBackgroundImage,
							Wl: t.backgroundImageUrl
						},
						on: {
							input: function(e) {
								return t.Jm("backgroundImageUrl", e)
							}
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input",
						attrs: {
							tip: "512x512 recommended"
						}
					}, [e("span", [t._v("Viruses")]), t._v(" "), e("image-option", {
						staticClass: "right",
						attrs: {
							md: 50,
							Sm: t.Um,
							Wl: t.virusImageUrl
						},
						on: {
							input: function(e) {
								return t.Jm("virusImageUrl", e)
							}
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input"
					}, [e("span", [t._v("Mass text")]), t._v(" "), e("color-option", {
						staticClass: "right",
						attrs: {
							Wl: t.cellMassColor
						},
						on: {
							input: function(e) {
								return t.Jm("cellMassColor", e)
							}
						}
					})], 1), t._v(" "), e("div", {
						staticClass: "color-input",
						class: {
							disabled: !t.cellMassOutline
						}
					}, [e("span", [t._v("Mass outline")]), t._v(" "), e("color-option", {
						staticClass: "right",
						attrs: {
							Rm: !t.cellMassOutline,
							Wl: t.cellMassOutlineColor
						},
						on: {
							input: function(e) {
								return t.Jm("cellMassOutlineColor", e)
							}
						}
					})], 1)])])]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Map\r\n            "), t.va ? t._e() : e("span", {
						staticClass: "right silent"
					}, [t._v("Needs GPU rendering")])]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("p-check", {
						staticClass: "p-switch",
						attrs: {
							tip: "All food will have same color",
							checked: t.useFoodColor
						},
						on: {
							change: function(e) {
								return t.Jm("useFoodColor", e)
							}
						}
					}, [t._v("\r\n                Custom food color\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.va,
							checked: t.showBackgroundImage
						},
						on: {
							change: function(e) {
								return t.Jm("showBackgroundImage", e)
							}
						}
					}, [t._v("\r\n                Enable map image\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							disabled: !t.va || !t.showBackgroundImage,
							tip: "Show map image as puzzle pieces",
							checked: t.backgroundImageRepeat
						},
						on: {
							change: function(e) {
								return t.Jm("backgroundImageRepeat", e)
							}
						}
					}, [t._v("\r\n                Repeat map image\r\n            ")]), t._v(" "), e("div", {
						staticClass: "option-row bottom-margin",
						class: {
							disabled: !t.va || !t.showBackgroundImage
						}
					}, [t._v("\r\n                Map image opacity "), e("span", {
						staticClass: "right"
					}, [t._v(t._s((100 * t.backgroundImageOpacity).toFixed(0)) + "%")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							disabled: !t.va || !t.showBackgroundImage,
							min: "0.1",
							max: "1",
							step: "0.05"
						},
						domProps: {
							value: t.backgroundImageOpacity
						},
						on: {
							input: function(e) {
								return t.Jm("backgroundImageOpacity", e)
							}
						}
					})])], 1)]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Player name text\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "bottom-margin"
					}, [t._v("\r\n                Font\r\n                "), e("input", {
						attrs: {
							type: "text",
							spellcheck: "false",
							placeholder: "Hind Madurai",
							maxlength: "30",
							tip: "Must be installed on your device to work"
						},
						domProps: {
							value: t.cellNameFont
						},
						on: {
							input: function(e) {
								return t.Jm("cellNameFont", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "inline-range"
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "2",
							step: "1"
						},
						domProps: {
							value: t.cellNameWeight
						},
						on: {
							input: function(e) {
								return t.Jm("cellNameWeight", e)
							}
						}
					}), t._v("\r\n                " + t._s(t.Vm) + " name text\r\n            ")]), t._v(" "), e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.cellNameOutline
						}
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "3",
							step: "1"
						},
						domProps: {
							value: t.cellNameOutline
						},
						on: {
							input: function(e) {
								return t.Jm("cellNameOutline", e)
							}
						}
					}), t._v("\r\n                " + t._s(t.Wm) + " name outline\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.cellNameSmoothOutline
						},
						on: {
							change: function(e) {
								return t.Jm("cellNameSmoothOutline", e)
							}
						}
					}, [t._v("\r\n                Smooth name outline\r\n            ")]), t._v(" "), e("div", {
						staticClass: "option-row",
						attrs: {
							tip: "Long names of players in game are replaced"
						}
					}, [t._v("\r\n                Long name threshold "), e("span", {
						staticClass: "right"
					}, [t._v(t._s(t.cellLongNameThreshold) + "px")]), t._v(" "), e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "500",
							max: "1250",
							step: "50"
						},
						domProps: {
							value: t.cellLongNameThreshold
						},
						on: {
							input: function(e) {
								return t.Jm("cellLongNameThreshold", e)
							}
						}
					})])], 1)]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Player mass text\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [e("div", {
						staticClass: "bottom-margin"
					}, [t._v("\r\n                Font\r\n                "), e("input", {
						attrs: {
							type: "text",
							spellcheck: "false",
							placeholder: "Ubuntu",
							maxlength: "30",
							tip: "Must be installed on your device to work"
						},
						domProps: {
							value: t.cellMassFont
						},
						on: {
							input: function(e) {
								return t.Jm("cellMassFont", e)
							}
						}
					})]), t._v(" "), e("div", {
						staticClass: "inline-range"
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "2",
							step: "1"
						},
						domProps: {
							value: t.cellMassWeight
						},
						on: {
							input: function(e) {
								return t.Jm("cellMassWeight", e)
							}
						}
					}), t._v("\r\n                " + t._s(t.Xm) + " mass text\r\n            ")]), t._v(" "), e("div", {
						staticClass: "inline-range",
						class: {
							off: !t.cellMassOutline
						}
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "3",
							step: "1"
						},
						domProps: {
							value: t.cellMassOutline
						},
						on: {
							input: function(e) {
								return t.Jm("cellMassOutline", e)
							}
						}
					}), t._v("\r\n                " + t._s(t.Ym) + " mass outline\r\n            ")]), t._v(" "), e("div", {
						staticClass: "inline-range"
					}, [e("input", {
						staticClass: "slider",
						attrs: {
							type: "range",
							min: "0",
							max: "3",
							step: "1"
						},
						domProps: {
							value: t.cellMassTextSize
						},
						on: {
							input: function(e) {
								return t.Jm("cellMassTextSize", e)
							}
						}
					}), t._v("\r\n                " + t._s(t.Zm) + " mass text size\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							checked: t.cellMassSmoothOutline
						},
						on: {
							change: function(e) {
								return t.Jm("cellMassSmoothOutline", e)
							}
						}
					}, [t._v("\r\n                Smooth mass outline\r\n            ")]), t._v(" "), e("p-check", {
						staticClass: "p-switch",
						attrs: {
							tip: "12345 mass shows as 12.3k",
							checked: t.shortMass
						},
						on: {
							change: function(e) {
								return t.Jm("shortMass", e)
							}
						}
					}, [t._v("\r\n                Short mass format\r\n            ")])], 1)]), t._v(" "), e("div", {
						staticClass: "reset-option-wrapper"
					}, [e("span", {
						staticClass: "reset-option",
						on: {
							click: function(e) {
								return t.Qm()
							}
						}
					}, [e("i", {
						staticClass: "fa fa-undo"
					}), t._v(" Reset\r\n        ")])])])
				};
				Qt._withStripped = !0;
				var te = function() {
					var t = this;
					return (0,
						t._self._c)("div", {
						staticClass: "color-button",
						class: {
							disabled: t.Rm
						},
						style: {
							backgroundColor: "#" + t.Wl
						},
						on: {
							mousedown: t.an
						}
					})
				};
				te._withStripped = !0;
				var ee = s(1620),
					{
						R: se
					} = s(3658);
				const ae = {
					data: () => ({
						bn: !1
					}),
					props: {
						Wl: {
							type: String,
							required: !0
						},
						Sm: {
							type: String,
							default: null
						},
						Rm: {
							type: Boolean,
							default: !1
						}
					},
					methods: {
						an(t) {
							this.Rm || (ee.R.$emit(se.cn, {
									Ha: t.clientX,
									Ia: t.clientY,
									Wl: this.Wl,
									Sm: this.Sm
								}),
								this.bn = !0)
						},
						dn(t) {
							this.bn && this.$emit("input", t)
						},
						en() {
							this.bn = !1
						}
					},
					created() {
						ee.R.$on(se.fn, this.dn),
							ee.R.$on(se.gn, this.en)
					},
					destroyed() {
						ee.R.$off(se.fn, this.dn),
							ee.R.$off(se.gn, this.en)
					}
				};
				const ie = (0,
					_.Z)(ae, te, [], !1, null, "e11a74f8", null).exports;
				var ne = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "image-button",
						class: {
							disabled: t.Rm
						},
						on: {
							mousedown: t.an
						}
					}, [e("div", {
						staticClass: "image-button-text"
					}, [t._v("...")])])
				};
				ne._withStripped = !0;
				var re = s(1620),
					{
						R: oe
					} = s(3658);
				const le = {
					data: () => ({
						bn: !1
					}),
					props: {
						Wl: {
							type: String
						},
						md: {
							type: Number
						},
						Rm: {
							type: Boolean,
							default: !1
						},
						Sm: {
							type: String,
							required: !1
						}
					},
					methods: {
						an(t) {
							this.Rm || (re.R.$emit(oe.hn, {
									Ha: t.clientX,
									Ia: t.clientY,
									md: this.md,
									Wl: this.Wl,
									Sm: this.Sm
								}),
								this.bn = !0)
						},
						jn(t) {
							this.bn && this.$emit("input", t)
						},
						en() {
							this.bn = !1
						}
					},
					created() {
						re.R.$on(oe.kn, this.jn),
							re.R.$on(oe.ln, this.en)
					},
					destroyed() {
						re.R.$off(oe.kn, this.jn),
							re.R.$off(oe.ln, this.en)
					}
				};
				const ce = (0,
					_.Z)(le, ne, [], !1, null, "180f29a6", null).exports;
				var ue = s(1620),
					he = s(5097),
					de = s(3117),
					{
						R: pe
					} = s(3658);

				function ve(t) {
					switch (t) {
						case 0:
							return "Thin";
						case 1:
							return "Normal";
						case 2:
							return "Bold";
						default:
							return "???"
					}
				}

				function fe(t) {
					switch (t) {
						case 0:
							return "No";
						case 1:
							return "Thin";
						case 2:
							return "Thick";
						case 3:
							return "Thickest";
						default:
							return "???"
					}
				}

				function me(t, e) {
					return t ? new Promise(((s, a) => {
						var i = new Image;
						i.onload = () => {
								var t = document.createElement("canvas"),
									a = t.getContext("2d"),
									n = Math.max(i.width, i.height),
									r = Math.min(i.width, i.height),
									o = n === i.width,
									l = Math.min(n, e) / n,
									c = (o ? n : r) * l,
									u = (o ? r : n) * l;
								t.width = c,
									t.height = u,
									a.drawImage(i, 0, 0, c, u),
									s(t.toDataURL())
							},
							i.onerror = a,
							i.src = t
					})) : null
				}
				const _e = {
					components: {
						colorOption: ie,
						imageOption: ce
					},
					data() {
						var t = he.jk(),
							e = {};
						e.va = PIXI.utils.isWebGLSupported() && he.va,
							e.Tm = he.kk("backgroundImageUrl"),
							e.Um = he.kk("virusImageUrl");
						for (var s = 0; s < t.length;)
							e[t[s++]] = t[s++];
						return e
					},
					computed: {
						Vm() {
							return ve(this.cellNameWeight)
						},
						Xm() {
							return ve(this.cellMassWeight)
						},
						Wm() {
							return fe(this.cellNameOutline)
						},
						Ym() {
							return fe(this.cellMassOutline)
						},
						Zm() {
							return function(t) {
								switch (t) {
									case 0:
										return "Small";
									case 1:
										return "Normal";
									case 2:
										return "Large";
									case 3:
										return "Largest";
									default:
										return "???"
								}
							}(this.cellMassTextSize)
						}
					},
					methods: {
						async Jm(t, e) {
							var s;
							s = e && e.target ? isNaN(e.target.valueAsNumber) ? e.target.value : e.target.valueAsNumber : e;
							try {
								switch (t) {
									case "cursorImageUrl":
										s = await me(s, 32);
										break;
									case "backgroundImageUrl":
										s !== this.Tm && (s = await me(s, 4e3));
										break;
									case "virusImageUrl":
										s !== this.Um && (s = await me(s, 200))
								}
							} catch (t) {
								return void de.hb("This image is too large to even be loaded")
							}
							try {
								if (!he.Ee(t, s))
									return
							} catch (e) {
								return he.Ee(t, this[t]),
									void de.hb("Saving settings failed. Perhaps the image is too large?")
							}
							switch (this[t] = s,
								t) {
								case "cursorImageUrl":
									ue.R.$emit(pe.Sa, he);
									break;
								case "backgroundColor":
									ue.wa.backgroundColor = PIXI.utils.string2hex(s);
									break;
								case "cellNameOutlineColor":
								case "cellNameFont":
								case "cellNameWeight":
								case "cellNameOutline":
								case "cellNameSmoothOutline":
									he.hk();
									break;
								case "cellMassColor":
								case "cellMassOutlineColor":
								case "cellMassFont":
								case "cellMassWeight":
								case "cellMassOutline":
								case "cellMassSmoothOutline":
								case "cellMassTextSize":
									he.ik()
							}
							if (ue.Ua)
								switch (t) {
									case "borderColor":
										ue.Ie.mn();
										break;
									case "foodColor":
										this.useFoodColor && ue.Ie.td(4);
										break;
									case "ejectedColor":
										ue.Ie.td(3);
										break;
									case "virusImageUrl":
										ue.Ie.nn(2);
										break;
									case "cellNameOutlineColor":
									case "cellNameFont":
									case "cellNameWeight":
									case "cellNameOutline":
									case "cellNameSmoothOutline":
										ue.Ie.Ad();
										break;
									case "cellMassColor":
									case "cellMassOutlineColor":
									case "cellMassFont":
									case "cellMassWeight":
									case "cellMassOutline":
									case "cellMassSmoothOutline":
									case "cellMassTextSize":
										ue.Ie.Gd(),
											ue.Ie.Qc();
										break;
									case "showBackgroundImage":
									case "backgroundImageUrl":
										ue.Ie.Sc(!0);
										break;
									case "backgroundImageRepeat":
									case "backgroundImageOpacity":
										ue.Ie.Sc(!1);
										break;
									case "useFoodColor":
										ue.Ie.pn();
										break;
									case "cellLongNameThreshold":
										ue.Ie.zd()
								}
						},
                        ejectCell() {
                            let color;
                            if (this.ejectRainbowEffect) {
                                const colorIndex = Math.floor(Math.random() * this.rainbowColors.length);
                                color = this.rainbowColors[colorIndex];
                            } else {
                                color = this.ejectedColor;
                            }
                            this.ejectCellWithColor(color);
                        },
                        // Existing logic for ejecting cells with the specified color
                        ejectCellWithColor(color) {
                            // The existing logic that handles the ejection of a cell with the given color
                        },
						Qm() {
							de.fb("Are you sure you want to reset all setting options?", (() => {
								for (var t = he.jk().indexOf("backgroundColor"), e = he.jk().indexOf("useFoodColor"), s = t, a = he.jk(); s <= e; s += 2)
									this.Jm(a[s], he.kk(a[s]))
							}))
						}
					}
				};
				const ge = (0,
					_.Z)(_e, Qt, [], !1, null, "c41b640a", null).exports;
				var ye = s(1620),
					{
						R: we
					} = s(3658);
				const be = {
					components: {
						modal: Mt,
						settings: Kt,
						theming: ge,
						hotkeys: M,
						replays3: jt,
						metaLeaderboard: Ct,
						lobby: lt
					},
					data: () => ({
						Kk: "",
						qa: ye.ra,
						Cg: ye.Cg,
						Ek: "string" == typeof localStorage.nickname ? localStorage.nickname : "",
						Gk: localStorage.teamtag || "",
						Ik: "string" == typeof localStorage.skinUrl ? localStorage.skinUrl : "https://skins.vanis.io/s/vanis1"
					}),
					created() {
						ye.R.$on(we.qn, (t => this.Ik = t)),
							ye.R.$on(we.Eg, (t => this.Dk(t)))
					},
					methods: {
						Dk(t) {
							this.Kk = t,
								ye.R.$emit(we.rn, null != this.Kk)
						},
						async Lk() {
							("lobby" !== this.Kk || null == this.Cg.Bg || this.Cg.Dg || await b().fb("Are you sure that you want to leave the lobby?")) && (this.Kk = "",
								ye.R.$emit(we.rn, !1))
						},
						bb(t) {
							t instanceof MouseEvent && t.isTrusted && (this.qa.Vd || ye.Td.Yd(),
								ye.lf(!1))
						},
						Ud() {
							ye.Td.Ud(),
								ye.lf(!1)
						},
						Jk() {
							ye.R.$emit(we.sn, this.Ik)
						},
						Hk() {
							localStorage.setItem("teamtag", this.Gk)
						},
						Fk() {
							localStorage.setItem("nickname", this.Ek)
						}
					}
				};
				const Ce = (0,
					_.Z)(be, y, [function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticStyle: {
							"text-align": "center",
							height: "286px"
						}
					}, [e("div", {
						staticStyle: {
							padding: "4px"
						}
					}, [t._v("Advertisement")]), t._v(" "), e("div", {
						attrs: {
							id: "vanis-io_300x250"
						}
					})])
				}], !1, null, "5190ae12", null).exports;
				var ke = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "account-wrapper"
					}, [t.tn ? t._e() : e("div", [e("div", {
						staticStyle: {
							"margin-top": "6px",
							"margin-bottom": "10px"
						}
					}, [t._v("Login with Discord to save your progress and gain perks!")]), t._v(" "), e("div", {
						staticClass: "discord",
						on: {
							click: function(e) {
								return t.un()
							}
						}
					}, [t.vn ? [t.vn ? e("i", {
						staticClass: "fas fa-sync fa-spin",
						staticStyle: {
							"margin-right": "5px"
						}
					}) : t._e(), t._v(" Logging in\r\n            ")] : [e("i", {
						staticClass: "fab fa-discord"
					}), t._v(" Login with Discord\r\n            ")]], 2)]), t._v(" "), t.tn ? e("div", {
						staticClass: "account"
					}, [e("div", {
						staticStyle: {
							"margin-bottom": "3px"
						}
					}, [e("img", {
						staticClass: "avatar",
						attrs: {
							src: t.wn
						}
					}), t._v(" "), e("div", {
						staticClass: "player-info"
					}, [e("div", {
						staticClass: "account-name",
						style: {
							color: t.Cl
						}
					}, [e("badges", {
						attrs: {
							Ee: t.xn.perk_badge_set
						}
					}), t._v("\r\n                    " + t._s(t.yn) + "\r\n                ")], 1), t._v(" "), e("div", [t._v(t._s(t.zn) + " total XP")]), t._v(" "), e("div", {
						attrs: {
							tip: t.An
						}
					}, [t._v("\r\n                    " + t._s(t.Bn) + " total season XP\r\n                ")])])]), t._v(" "), e("div", {
						staticStyle: {
							position: "relative"
						}
					}, [e("progress-bar", {
						staticClass: "xp-progress",
						attrs: {
							Cn: t.Dn
						}
					}), t._v(" "), e("div", {
						staticClass: "xp-data"
					}, [e("div", {
						staticStyle: {
							flex: "1",
							"margin-left": "8px"
						}
					}, [t._v("Level " + t._s(t.En))]), t._v(" "), e("div", {
						staticStyle: {
							"margin-right": "7px"
						}
					}, [t._v(t._s(t.Fn))])])], 1), t._v(" "), e("div", {
						staticClass: "logout_",
						attrs: {
							tip: "Logout"
						},
						on: {
							click: function(e) {
								return t.Gn()
							}
						}
					}, [e("i", {
						staticClass: "fas fa-sign-out-alt"
					})])]) : t._e()])
				};
				ke._withStripped = !0;
				var Se = function() {
					var t = this._self._c;
					return t("div", {
						staticClass: "progress progress-striped"
					}, [t("div", {
						staticClass: "progress-bar",
						style: {
							width: 100 * this.Cn + "%"
						}
					})])
				};
				Se._withStripped = !0;
				const xe = {
					props: {
						Cn: {
							type: Number,
							required: !0
						}
					}
				};
				const Me = (0,
					_.Z)(xe, Se, [], !1, null, "5f2d6d72", null).exports;
				var Pe = s(3117),
					Ie = s(1050),
					Te = s(1620),
					Ae = s(3658),
					{
						R: Ne
					} = s(3658),
					Le = null;

				function De() {
					var t = /vanis_token=(.+)(;|$)/.exec(document.cookie);
					null != t && (Ie.Xe(localStorage.vanisToken = t[1]),
						document.cookie = "vanis_token=;max-age=-1;",
						clearInterval(Le),
						Le = null,
						Te.R.$emit(Ne.Hn))
				}
				const Oe = {
					components: {
						progressBar: Me,
						badges: D
					},
					data: () => ({
						xn: null,
						vn: !1,
						tn: !1,
						wn: null,
						yn: null,
						Cl: null,
						zn: 0,
						Bn: 0,
						An: null
					}),
					computed: {
						En() {
							return Ae.In(this.zn)
						},
						Dn() {
							var t = Ae.In(this.zn),
								e = Ae.Jn(t),
								s = Ae.Jn(t + 1) - e;
							return (this.zn - e) / s
						},
						Kn() {
							return Ae.Jn(Ae.In(this.zn))
						},
						Fn() {
							return Ae.Jn(Ae.In(this.zn) + 1)
						}
					},
					methods: {
						async Ln() {
							if (null != Ie.We) {
								this.vn = !0;
								var t = await Ie.get("/me");
								if (this.vn = !1,
									!t.ok)
									return console.error("Account:", t.status, t.statusText),
										void(401 === t.status ? Ie.Ye() : 503 === t.status && Pe.hb(await t.text()));
								Te.R.$emit(Ne.kf, await t.json())
							}
						},
						async Gn() {
							await Ie.Ze("DELETE", "/me"),
								Ie.Ye(),
								Te.R.$emit(Ne.kf, null)
						},
						Mn(t, e) {
							var s = `https://cdn.discordapp.com/avatars/${t}/${e}`;
							this.wn = e ? `${s}.${e.startsWith("a_") ? "gif" : "png"}` : "https://cdn.discordapp.com/embed/avatars/0.png"
						},
						Nn(t) {
							this.xn = t,
								t ? (this.tn = !0,
									this.Mn(t.discord_id, t.discord_avatar),
									this.On(t.xp, t.season_xp)) : (this.tn = !1,
									this.wn = null,
									this.yn = null,
									this.Cl = null,
									this.On(0, 0)),
								Te.R.$emit(Ne.qj, t)
						},
						Pn(t) {
							null != t && (this.xn.perk_badge_set = t.perk_badge_set,
								null != t.perk_name_picked && null != t.perk_color_picked ? (this.yn = t.perk_name_picked,
									this.Cl = "#" + t.perk_color_picked) : (this.yn = this.xn.discord_name,
									this.Cl = "#ffffff"))
						},
						Qn(t) {
							this.tn && this.On(t - this.zn)
						},
						On(t, e) {
							if (this.tn)
								if (null != e) {
									this.zn = t,
										this.Bn = 0;
									var s = [];
									for (var a in e) {
										this.Bn += e[a];
										var i = {
											ffa: "FFA",
											instant: "Instant",
											gigasplit: "Gigasplit",
											terasplit: "Terasplit",
											megasplit: "Megasplit",
											crazy: "Crazy",
											"self-feed": "Self-Feed"
										} [a];
										null != i && s.push(`${i}: ${e[a]} season XP`)
									}
									s.length > 0 ? this.An = s.join("\n") : this.An = "On season leaderboard, every mode counts separately"
								} else
									this.zn += t,
									this.Bn += t
						},
						un() {
							null != window.open(Ie.url + "/login/discord", "", "width=500, height=750") && null == Le && (Le = setInterval(De, 1e3))
						},
						Rn(t) {
							t && (Ie.Xe(t),
								this.Ln())
						}
					},
					created() {
						Te.R.$on(Ne.lj, this.Qn),
							Te.R.$on(Ne.Hn, this.Ln),
							Te.R.$on(Ne.kf, this.Nn),
							Te.R.$on(Ne.qj, this.Pn),
							this.Ln()
					}
				};
				const Re = (0,
					_.Z)(Oe, ke, [], !1, null, "520f1371", null).exports;
				var Ee = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "tab-menu"
					}, [e("div", {
						staticClass: "tabs"
					}, [e("div", {
						staticClass: "tab",
						class: {
							active: "skins" === t.Fl
						},
						on: {
							click: function(e) {
								t.Fl = "skins"
							}
						}
					}, [t._v("\r\n            Skins\r\n        ")]), t._v(" "), e("div", {
						staticClass: "tab",
						class: {
							active: "perks" === t.Fl
						},
						on: {
							click: function(e) {
								t.Fl = "perks"
							}
						}
					}, [e("span", {
						staticStyle: {
							position: "relative"
						}
					}, [t._v("\r\n                Perks\r\n                "), t.Sn ? e("div", {
						staticClass: "perks-tab-badge",
						class: t.Sn
					}) : t._e()])])]), t._v(" "), e("div", {
						attrs: {
							id: "customization"
						}
					}, [e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: "skins" === t.Fl,
							expression: "tab_ === 'skins'"
						}],
						attrs: {
							id: "skins"
						}
					}, [t._l(t.Tn, (function(s, a) {
						return e("span", {
							key: a,
							staticClass: "skin-container"
						}, [e("img", {
							staticClass: "skin",
							class: {
								selected: t.Un === a
							},
							attrs: {
								src: s,
								alt: ""
							},
							on: {
								click: function(e) {
									return t.Vn(a)
								},
								contextmenu: function(e) {
									return t.Wn(a)
								}
							}
						}), t._v(" "), e("i", {
							staticClass: "fas fa-times skin-remove-button",
							attrs: {
								tip: "Remove this skin URL"
							},
							on: {
								click: function(e) {
									return t.Wn(a)
								}
							}
						})])
					})), t._v(" "), e("img", {
						staticClass: "skin add-skin",
						attrs: {
							src: "/img/skin-add.png",
							alt: "",
							tip: "Add new skin URL"
						},
						on: {
							click: function(e) {
								return t.Xn()
							}
						}
					})], 2), t._v(" "), e("perks", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: "perks" === t.Fl,
							expression: "tab_ === 'perks'"
						}],
						staticClass: "perks"
					})], 1)])
				};
				Ee._withStripped = !0;
				var Ue = function() {
					var t = this,
						e = t._self._c;
					return e("div", [e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Colored name\r\n            "), t.Yn ? e("div", {
						staticClass: "right warning",
						attrs: {
							tip: "Set name and color for first time so that it shows in game"
						}
					}, [t._v("\r\n                Not showing\r\n            ")]) : t._e()]), t._v(" "), e("div", {
						staticClass: "options"
					}, [t.Zn.perk_color_unused || t.Zn.perk_color_expiry ? t._e() : [t._v("\r\n            Shows in chat, minimap, name and leaderboard"), e("br"), t._v("\r\n            Rare awards for players"), e("br"), t._v(" "), e("div", {
						staticClass: "perks-obtaining-label"
					}, [t._v("Given for:")]), t._v(" "), t._m(0), t._v("\r\n            Check our "), e("a", {
						attrs: {
							href: "/discord"
						}
					}, [t._v("Discord")]), t._v(" for information\r\n            Check the "), e("a", {
						attrs: {
							href: "/tournaments"
						}
					}, [t._v("tournament")]), t._v(" server here\r\n        ")], t._v(" "), t.Zn.perk_color_unused || t.Zn.perk_color_expiry ? [t.Zn.perk_color_unused || t.Zn.perk_color_expiry && "infinity" !== t.Zn.perk_color_expiry ? e("div", {
						staticClass: "confirm-row"
					}, [e("span", [t.Zn.perk_color_unused ? e("div", {
						attrs: {
							tip: "Can be used whenever you want"
						}
					}, [t._v("\r\n                        Unused "), e("b", [t._v(t._s(t.Zn.perk_color_unused))]), t._v(" week" + t._s(1 === t.Zn.perk_color_unused ? "" : "s") + "\r\n                    ")]) : t._e(), t._v(" "), t.Zn.perk_color_expiry && "infinity" !== t.Zn.perk_color_expiry ? e("div", [t._v("\r\n                        Expires in "), e("b", [t._v(t._s(t.ao))])]) : t._e()]), t._v(" "), e("button", {
						staticClass: "confirm-button right",
						attrs: {
							disabled: !t.Zn.perk_color_unused
						},
						on: {
							click: function(e) {
								return t.bo()
							}
						}
					}, [t._v("\r\n                    " + t._s(t.co ? "Confirm" : t.Zn.perk_color_expiry ? "Extend" : "Use") + "\r\n                ")])]) : t._e(), t._v(" "), t.co ? e("div", {
						staticClass: "option-row bottom-margin"
					}, [t._v("\r\n                " + t._s(t.Zn.perk_color_expiry ? "Extend by" : "Start") + "\r\n                "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.do,
							expression: "useColorWeeks_"
						}],
						attrs: {
							type: "number",
							min: "1",
							max: t.Zn.perk_color_unused,
							step: "1"
						},
						domProps: {
							value: t.do
						},
						on: {
							input: function(e) {
								e.target.composing || (t.do = e.target.value)
							}
						}
					}), t._v("\r\n                " + t._s(t.Zn.perk_color_expiry ? "week(s)" : "week colored name") + "\r\n            ")]) : t._e()] : t._e(), t._v(" "), t.Zn.perk_color_expiry ? [e("div", {
						staticClass: "perk-color-wrapper bottom-margin"
					}, [e("span", [t._v("Name")]), t._v(" "), e("span", {
						staticClass: "perk-color-label"
					}, [t._v("Color")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.eo,
							expression: "namePicked_"
						}],
						staticClass: "perk-name",
						attrs: {
							type: "text",
							spellcheck: "false",
							minlength: "2",
							maxlength: "15",
							disabled: !t.fo,
							placeholder: t.Zn.perk_name_picked,
							tip: "After change, cooldown is 2 weeks"
						},
						domProps: {
							value: t.eo
						},
						on: {
							input: function(e) {
								e.target.composing || (t.eo = e.target.value)
							}
						}
					}), t._v(" "), e("span", {
						staticClass: "perk-color-option"
					}, [e("color-option", {
						attrs: {
							Wl: t.ho,
							Sm: t.Zn.perk_color_picked,
							Rm: !t.io,
							tip: "After change, cooldown is 1 week"
						},
						on: {
							input: function(e) {
								t.ho = e
							}
						}
					})], 1), t._v(" "), e("button", {
						staticClass: "perk-color-update",
						attrs: {
							disabled: !t.jo
						},
						on: {
							click: function(e) {
								return t.ko()
							}
						}
					}, [t._v("Set")])]), t._v(" "), t.lo ? e("div", [t._v("Name change "), e("b", [t._v(t._s(t.lo))])]) : t._e(), t._v(" "), t.mo ? e("div", [t._v("Color change "), e("b", [t._v(t._s(t.mo))])]) : t._e()] : t._e(), t._v(" "), !t.Zn.perk_color_expiry && t.Zn.perk_name_picked ? e("div", {
						attrs: {
							tip: "While you are not using colored name, nobody else can use your name"
						}
					}, [t._v("\r\n            Reserved name "), e("b", [t._v(t._s(t.Zn.perk_name_picked))])]) : t._e()], 2)]), t._v(" "), e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Badges\r\n            "), t.Zn.perk_badge_owned && !t.Zn.perk_badge_set ? e("div", {
						staticClass: "right warning",
						attrs: {
							tip: "Click on a badge to use it"
						}
					}, [t._v("\r\n                Hidden\r\n            ")]) : t._e()]), t._v(" "), e("div", {
						staticClass: "options"
					}, [t.Zn.perk_badge_owned ? [t._v("\r\n            Click to toggle. "), e("b", [t._v("Only one")]), t._v(" shows\r\n        ")] : t._e(), t._v(" "), e("div", {
						staticClass: "perk-badges-scroll"
					}, [e("badges", {
						attrs: {
							cl: !0,
							Uc: 32,
							Ee: t.no,
							Zk: t.Zn.perk_badge_owned
						},
						on: {
							input: function(e) {
								return t.oo(e)
							}
						}
					})], 1), t._v(" "), t.Zn.perk_badge_owned ? t._e() : [t._v("\r\n            Unique awards for players in the community, shows beside name"), e("br"), t._v(" "), e("div", {
						staticClass: "perks-obtaining-label"
					}, [t._v("Make yourself known for:")]), t._v(" "), t._m(1), t._v("\r\n            Check our "), e("a", {
						attrs: {
							href: "/discord"
						}
					}, [t._v("Discord")]), t._v(" for information\r\n            Check the "), e("a", {
						attrs: {
							href: "/tournaments"
						}
					}, [t._v("tournament")]), t._v(" server here\r\n        ")]], 2)]), t._v(" "), t._m(2)])
				};
				Ue._withStripped = !0;
				var Fe = s(1620),
					Be = s(3658),
					ze = s(3117),
					Xe = s(1050),
					{
						R: $e
					} = s(3658);

				function We(t) {
					return null == t ? null : "infinity" === t ? 1 / 0 : new Date(t).getTime()
				}
				var je = 3e5;

				function He(t, e, s) {
					if (null == (e = We(e)))
						return {
							bi: null,
							po: !0
						};
					var a = (e = new Date(e).getTime()) + je - t;
					return a >= 0 ? {
						bi: `allowed for ${Be.bm(a, !1)}`,
						po: !0
					} : (a = e + s - t) >= 0 ? {
						bi: `on cooldown ${Be.bm(a, !1)}`,
						po: !1
					} : {
						bi: null,
						po: !0
					}
				}
				const Ve = {
						data: () => ({
							Zn: {
								perk_badge_owned: 0,
								perk_badge_set: 0,
								perk_name_picked: null,
								perk_name_set: null,
								perk_color_picked: null,
								perk_color_set: null,
								perk_color_unused: 0,
								perk_color_expiry: null
							},
							ao: null,
							lo: !1,
							mo: !1,
							fo: !1,
							io: !1,
							no: 0,
							eo: "",
							ho: "000000",
							co: !1,
							do: 1
						}),
						components: {
							colorOption: ie,
							badges: D
						},
						computed: {
							jo() {
								return this.eo !== this.Zn.perk_name_picked || this.ho !== this.Zn.perk_color_picked
							},
							Yn() {
								return this.Zn.perk_color_expiry && null == this.Zn.perk_name_picked && null == this.Zn.perk_color_picked
							}
						},
						methods: {
							qo(t) {
								if (null != t) {
									for (var e in this.Zn)
										this.Zn[e] = t[e];
									this.no = this.Zn.perk_badge_set,
										this.eo = this.Zn.perk_name_picked || "",
										this.ho = this.Zn.perk_color_picked || "000000"
								} else
									this.Zn.perk_name_set = null,
									this.Zn.perk_color_set = null,
									this.Zn.perk_color_unused = null,
									this.no = 0,
									this.eo = "",
									this.ho = "000000";
								this.ro()
							},
							ro() {
								var t = Date.now(),
									e = We(this.Zn.perk_color_expiry) - t;
								if (e < 0)
									return this.Zn.perk_color_expiry = null,
										this.lo = this.mo = null,
										void(this.fo = this.io = !1);
								this.ao = Be.bm(e, !1);
								var s = He(t, this.Zn.perk_name_set, 12096e5);
								this.fo = s.po,
									this.lo = s.bi,
									s = He(t, this.Zn.perk_color_set, 6048e5),
									this.io = s.po,
									this.mo = s.bi
							},
							async so(t) {
								var e = await Xe.Ze("PATCH", "/me/perks", t);
								if (202 === e.status) {
									var s = await e.json();
									Fe.R.$emit($e.qj, s)
								} else {
									var a = await e.text();
									ze.hb(a || "Failed updating perk!")
								}
							},
							async bo() {
								if (this.co) {
									var t = this.do;
									if (t = Math.min(Math.max(t, 0), this.Zn.perk_color_unused)) {
										var e = this.Zn.perk_color_expiry ? `You are about extend your colored name by ${t} week${1 === t ? "" : "s"}. Continue?` : `You are about to start using a ${t} week colored name. Continue?`,
											s = await ze.fb(e);
										this.do = 1,
											this.co = !1,
											s ? this.so({
												perk_color_unused: this.Zn.perk_color_unused - t
											}) : this.co = !1
									}
								} else
									this.co = !0
							},
							ko() {
								this.so({
									perk_name_picked: this.eo,
									perk_color_picked: this.ho
								})
							},
							oo(t) {
								this.no === t ? this.no = 0 : this.no = t,
									this.so({
										perk_badge_set: this.no
									})
							},
							uo(t) {
								Fe.R[t ? "$on" : "$off"]($e.Wa, this.ro),
									t && this.ro()
							}
						},
						created() {
							Fe.R.$on($e.bh, this.uo),
								Fe.R.$on($e.qj, this.qo),
								this.uo(!0)
						}
					},
					Ge = Ve;
				const Je = (0,
					_.Z)(Ge, Ue, [function() {
					var t = this,
						e = t._self._c;
					return e("ul", {
						staticClass: "perks-obtaining"
					}, [e("li", [t._v("Content creators")]), t._v(" "), e("li", [t._v("Tournament wins")]), t._v(" "), e("li", [t._v("Giveaway wins")]), t._v(" "), e("li", [t._v("Topping season leaderboard")])])
				}, function() {
					var t = this,
						e = t._self._c;
					return e("ul", {
						staticClass: "perks-obtaining"
					}, [e("li", [t._v("Content creation")]), t._v(" "), e("li", [t._v("Tournament wins")]), t._v(" "), e("li", [t._v("XP and season XP milestones")]), t._v(" "), e("li", [t._v("Big contributions")])])
				}, function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "section row"
					}, [e("div", {
						staticClass: "header"
					}, [t._v("\r\n            Aura\r\n        ")]), t._v(" "), e("div", {
						staticClass: "options"
					}, [t._v("\r\n            Rare awards for players"), e("br"), t._v("\r\n            Coming soon\r\n        ")])])
				}], !1, null, "2c5139e0", null).exports;
				var qe = s(1620),
					{
						R: Ye
					} = s(3658);
				const Ze = {
					data: () => ({
						xn: null,
						Fl: "skins",
						Un: 0,
						Tn: []
					}),
					components: {
						perks: Je
					},
					methods: {
						vo() {
							var t = localStorage.skins;
							if (!t)
								return !1;
							try {
								var e = JSON.parse(t)
							} catch (t) {
								return !1
							}
							if (!Array.isArray(e))
								return !1;
							for (var s = e.length; s < 2; s++)
								e.push("https://skins.vanis.io/s/vanis1");
							return e
						},
						wo() {
							localStorage.skins = JSON.stringify(this.Tn)
						},
						xo() {
							for (var t = [], e = 0; e < 2; e++)
								t.push("https://skins.vanis.io/s/vanis1");
							return t
						},
						yo(t) {
							this.$set(this.Tn, this.Un, t),
								this.wo()
						},
						Vn(t) {
							this.Un = t,
								localStorage.selectedSkinIndex = t,
								qe.R.$emit(Ye.qn, this.Tn[t])
						},
						Wn(t) {
							this.Tn.splice(t, 1),
								this.Tn.length < 2 && this.Tn.push("https://skins.vanis.io/s/vanis1"),
								this.wo();
							var e = Math.max(0, this.Un - 1);
							this.Vn(e)
						},
						Xn() {
							var t = this.Tn.length;
							this.Tn.push("https://skins.vanis.io/s/vanis1"),
								this.Vn(t),
								this.wo()
						}
					},
					computed: {
						Sn() {
							var t = this.xn;
							return null == t ? "" : null != t.perk_name_picked && null != t.perk_color_picked || 0 !== t.perk_badge_set ? "using" : 0 !== t.perk_color_unused || 0 !== this.xn.perk_badge_owned ? "unused" : ""
						}
					},
					created() {
						qe.R.$on(Ye.sn, this.yo),
							qe.R.$on(Ye.kf, (t => {
								this.xn = t,
									null == t && (this.Fl = "skins")
							})),
							qe.R.$on(Ye.qj, (t => {
								if (null != this.xn)
									for (var e in t)
										this.$set(this.xn, e, t[e])
							})),
							this.Tn = this.vo() || this.xo(),
							this.Vn(Number(localStorage.selectedSkinIndex) || 0)
					}
				};
				const Ke = (0,
					_.Z)(Ze, Ee, [], !1, null, "2eade0fe", null).exports;
				var Qe = s(1620),
					{
						R: ts
					} = s(3658);
				const es = {
					data: () => ({
						mk: !1,
						qa: Qe.ra,
						zo: null
					}),
					methods: {
						Ao(t) {
							this.mk = t
						},
						Bo(t) {
							var e = null;
							t && (e = "#canvas, #hud > * { cursor: url('" + t + "'), auto !important; }"),
								!e && this.zo ? (this.zo.remove(),
									this.zo = null) : e && !this.zo && (this.zo = document.createElement("style"),
									document.head.appendChild(this.zo)),
								this.zo && (this.zo.innerHTML = e)
						}
					},
					components: {
						servers: g,
						playerContainer: Ce,
						account: Re,
						customization: Ke
					},
					created() {
						Qe.R.$on(ts.Sa, (() => {
								this.Bo(Qe.T.Rj)
							})),
							Qe.R.$on(ts.rn, this.Ao)
					},
					mounted() {
						this.Bo(Qe.T.Rj)
					}
				};
				const ss = (0,
					_.Z)(es, o, [], !1, null, "5208baf4", null).exports;
				var as = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "social-container"
					}, [e("a", {
						staticClass: "discord-link",
						attrs: {
							href: "/discord",
							target: "_blank",
							rel: "noopener"
						}
					}, [e("i", {
						staticClass: "fab fa-discord"
					}), t._v(" Official Discord\r\n        "), t.Co ? e("span", {
						staticClass: "tag"
					}, [t._v("Join for giveaways!")]) : t._e()]), t._v(" "), e("a", {
						staticClass: "tournaments-link",
						attrs: {
							href: "/tournaments",
							target: "_blank",
							rel: "noopener"
						}
					}, [e("i", {
						staticClass: "fas fa-trophy"
					}), t._v(" Tournaments\r\n        "), t.Do ? e("span", {
						staticClass: "tag"
					}, [t._v("Upcoming Self-Feed")]) : t._e()]), t._v(" "), t._m(0)])
				};
				as._withStripped = !0;
				const is = {
					data: () => ({
						Co: !1,
						Do: !1
					})
				};
				const ns = (0,
					_.Z)(is, as, [function() {
					var t = this._self._c;
					return t("a", {
						staticClass: "skins-link",
						attrs: {
							href: "https://skins.vanis.io",
							target: "_blank",
							rel: "noopener"
						}
					}, [t("i", {
						staticClass: "fas fa-images"
					}), this._v(" Skins\r\n    ")])
				}], !1, null, "3d4cb83d", null).exports;
				var rs = function() {
					this._self._c;
					return this._m(0)
				};
				rs._withStripped = !0;
				const os = (0,
					_.Z)({}, rs, [function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "container"
					}, [e("a", {
						staticStyle: {
							"margin-left": "20.59px"
						},
						attrs: {
							href: "privacy.html",
							target: "_blank"
						}
					}, [t._v("Privacy Policy")]), t._v(" "), e("span", {
						staticClass: "line"
					}, [t._v("|")]), t._v(" "), e("a", {
						attrs: {
							href: "tos.html",
							target: "_blank"
						}
					}, [t._v("Terms of Service")])])
				}], !1, null, "ba56a55e", null).exports;
				var ls = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						attrs: {
							id: "hud"
						}
					}, [e("stats", {
						style: {
							transform: "scale(" + t.Eo + ")"
						}
					}), t._v(" "), e("chatbox", {
						style: {
							transform: "scale(" + t.Eo + ")"
						}
					}), t._v(" "), e("leaderboard", {
						style: {
							transform: "scale(" + t.Eo + ")"
						}
					}), t._v(" "), e("minimap", {
						style: {
							transform: "scale(" + t.Eo + ")"
						}
					}), t._v(" "), e("cautions")], 1)
				};
				ls._withStripped = !0;
				var cs = function() {
					var t = this,
						e = t._self._c;
					return e("div", [e("div", {
						staticClass: "server-cautions",
						style: {
							transform: "scale(" + t.Eo + ")"
						}
					}, t._l(t.Fo, (function(s, a) {
						return e("div", {
							key: a
						}, [t._v(t._s(s))])
					})), 0), t._v(" "), e("div", {
						staticClass: "cautions",
						style: {
							transform: "scale(" + t.Eo + ")"
						}
					}, [t.Go ? e("div", [t._v("MOUSE FROZEN")]) : t._e(), t._v(" "), t.Ho ? e("div", [t._v("MOVEMENT STOPPED")]) : t._e(), t._v(" "), t.Io ? e("div", [t._v("LINESPLITTING")]) : t._e()])])
				};
				cs._withStripped = !0;
				var us = s(1620),
					{
						R: hs
					} = s(3658);
				const ds = {
					data: () => ({
						Go: !1,
						Ho: !1,
						Io: !1,
						Fo: null,
						Eo: 1
					}),
					created() {
						us.R.$on(hs.Sa, (() => {
								this.Eo = us.T.Ej
							})),
							us.R.$on(hs.ke, (t => {
								this.Go = us.fe,
									this.Ho = us.le,
									this.Io = us.ne,
									t && (this.Fo = t.pj.split(/\r\n|\r|\n/))
							})),
							us.R.$on(hs.Ra, (() => {
								this.Fo = null
							}))
					}
				};
				const ps = (0,
					_.Z)(ds, cs, [], !1, null, "722ac586", null).exports;
				var vs = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Wi,
							expression: "visible_"
						}],
						staticClass: "stats"
					}, [e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Ij,
							expression: "showFPS_"
						}]
					}, [t._v("FPS: " + t._s(t.Jo || "-"))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Jj,
							expression: "showPing_"
						}]
					}, [t._v("Ping: " + t._s(t.dj || "-"))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Mj && t.Ko,
							expression: "showPlayerMass_ && mass_"
						}]
					}, [t._v("Mass: " + t._s(t.Ko))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Lj && t.wg,
							expression: "showPlayerScore_ && score_"
						}]
					}, [t._v("Score: " + t._s(t.wg))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Kj && t.Bf,
							expression: "showCellCount_ && cells_"
						}]
					}, [t._v("Cells: " + t._s(t.Bf))])])
				};
				vs._withStripped = !0;
				var fs = s(1620),
					{
						R: ms
					} = s(3658);
				const _s = {
					data: () => ({
						Ij: !1,
						Jj: !1,
						Mj: !1,
						Lj: !1,
						Kj: !1,
						Wi: !1,
						dj: 0,
						Jo: 0,
						Ko: 0,
						wg: 0,
						Bf: 0
					}),
					created() {
						fs.R.$on(ms.Sa, (() => {
								this.Wi = fs.Ua && !fs.Qa,
									this.Ij = fs.T.Ij,
									this.Jj = fs.T.Jj,
									this.Mj = fs.T.Mj,
									this.Lj = fs.T.Lj,
									this.Kj = fs.T.Kj
							})),
							fs.R.$on(ms.ih, (() => this.Bf = fs.xg)),
							fs.R.$on(ms.Wa, (() => {
								this.dj = fs.dj || 0,
									this.Jo = fs.Ua && Math.round(fs.Lg.FPS) || 0,
									this.Ko = fs.wg ? fs.Xa(fs.wg) : 0,
									this.wg = fs.Yg ? fs.Xa(fs.Yg) : 0
							}))
					}
				};
				const gs = (0,
					_.Z)(_s, vs, [], !1, null, "0b74fc8f", null).exports;
				var ys = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Wi,
							expression: "visible_"
						}],
						staticClass: "chat-container"
					}, [t.Lo ? [e("transition-group", {
						staticClass: "toast-list",
						attrs: {
							name: "toast",
							tag: "div"
						}
					}, t._l(t.Mo, (function(s) {
						return e("chat-message", {
							key: s.Wc,
							staticClass: "toast",
							attrs: {
								gb: s,
								hf: !0,
								Vk: "Click to spectate, right click to block"
							},
							on: {
								spectate: t.ye,
								block: t.Xk
							}
						})
					})), 1)] : t._e(), t._v(" "), e("div", {
						staticClass: "chatbox",
						class: {
							toasts: t.Lo,
							visible: t.No
						},
						style: t.Lo ? {} : {
							height: t.Fj + "px"
						}
					}, [t.Oj && t.Oo ? e("div", {
						staticStyle: {
							position: "absolute",
							top: "-28px"
						}
					}, [t._v("\r\n            Blocked messages: " + t._s(t.Oo) + "\r\n        ")]) : t._e(), t._v(" "), t.Lo ? t._e() : e("div", {
						ref: "list",
						staticClass: "message-list"
					}, t._l(t.Po, (function(s, a) {
						return e("chat-message", {
							key: a,
							attrs: {
								gb: s,
								Vk: "Click to spectate, right click to block"
							},
							on: {
								spectate: t.ye,
								block: t.Xk
							}
						})
					})), 1), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.Wk,
							expression: "inputText_"
						}],
						ref: "input",
						attrs: {
							id: "chatbox-input",
							type: "text",
							spellcheck: "false",
							autocomplete: "off",
							maxlength: "100",
							tabindex: "-1",
							placeholder: "Type your message here"
						},
						domProps: {
							value: t.Wk
						},
						on: {
							keydown: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.gf()
							},
							input: function(e) {
								e.target.composing || (t.Wk = e.target.value)
							}
						}
					})])], 2)
				};
				ys._withStripped = !0;
				var ws = s(1620),
					bs = s(3117),
					{
						R: Cs
					} = s(3658),
					ks = {};
				const Ss = {
						data: () => ({
							Wi: !1,
							Lo: !1,
							No: !1,
							Wk: "",
							Po: [],
							Mo: [],
							Oj: !1,
							Oo: 0,
							Qo: 0,
							Fj: 200
						}),
						components: {
							chatMessage: R
						},
						methods: {
							ye(t) {
								t && (localStorage.adminMode && (ws.Be = t),
									ws.Td.Ud(t))
							},
							Xk(t) {
								if (t) {
									var e = ws.Ya.Bc[t];
									e ? ks[t] ? this.Ro(e) : this.So(e) : bs.hb("Player does not exist or is disconnected")
								}
							},
							So(t) {
								t.zb ? ws.R.$emit(Cs.ij, "You cannot block yourself") : bs.fb(`Block ${t.lb} until server restart?`, (() => {
									ks[t.Ga] = t.lb,
										ws.R.$emit(Cs.ij, `Blocked ${t.lb}`)
								}))
							},
							Ro(t) {
								bs.fb(`Unblock ${t.lb}?`, (() => {
									delete ks[t.Ga],
										ws.R.$emit(Cs.ij, `Unblocked ${t.lb}`)
								}))
							},
							gf() {
								var t = this.Wk.trim();
								t && (ws.Be && (t = t.replace(/\$pid/g, ws.Be)),
										ws.eb.gf(t),
										this.Wk = ""),
									ws.wa.view.focus(),
									this.fl(!0)
							},
							To(t) {
								"string" == typeof t && (t = {
										bi: t,
										ei: t,
										ci: "#828282"
									}).bi.startsWith("") && (t.Zh = 2147483648,
										t.ai = "Announcement",
										t.bi = t.ei = t.bi.slice(1),
										delete t.ci,
										t.di = 5847047),
									ks[t.Ga] ? this.Oo++ : (ws.T.hi && (t.bi = t.ei),
										t.fi = t.fi || "#ffffff",
										t.ci = t.ci || "#ffffff",
										t.Zh = t.Zh || 0,
										this.Po.push(t),
										this.Po.length > 100 && this.Po.shift(),
										t.Wc = this.Qo++,
										t.Uo = Date.now() + Math.max(5e3, 150 * t.bi.length),
										this.Mo.unshift(t),
										this.fl(!1))
							},
							lc() {
								this.Oj = ws.T.Oj,
									this.Wi = ws.T.Me && ws.Ua && !ws.Qa,
									this.Lo = this.Wi && ws.T.Oe,
									this.No = this.Wi && !this.Lo,
									this.Fj = ws.T.Fj,
									this.$nextTick((() => this.fl(!0)))
							},
							Vo() {
								this.Wi && (this.No = !0,
									this.$nextTick((() => this.$refs.input.focus())))
							},
							Wo() {
								ws.T.Pj && (this.Po.splice(0, this.Po.length),
									this.Mo.splice(0, this.Mo.length),
									this.Qo = 0)
							},
							fl(t = !1) {
								if (!this.Lo) {
									var e = this.$refs.list,
										s = e.scrollHeight - e.clientHeight;
									!t && s - e.scrollTop > 30 || this.$nextTick((() => e.scrollTop = e.scrollHeight))
								}
							},
							Xo() {
								for (var t = 0; t < this.Mo.length; t++)
									this.Mo[t].Uo >= Date.now() || this.Mo.splice(t--, 1)
							}
						},
						created() {
							ws.R.$on(Cs.Sa, this.lc),
								ws.R.$on(Cs.Ra, (() => {
									this.Oo = 0,
										ks = {},
										this.Wo()
								})),
								ws.R.$on(Cs.Nh, this.Vo),
								ws.R.$on(Cs.ij, this.To),
								ws.R.$on(Cs.Wa, this.Xo),
								document.addEventListener("focusin", (t => {
									this.No = !this.Lo || t.target === this.$refs.input
								}))
						}
					},
					xs = Ss;
				const Ms = (0,
					_.Z)(xs, ys, [], !1, null, "7264abb4", null).exports;
				var Ps = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Yo && t.Wi,
							expression: "userVisible_ && visible_"
						}],
						attrs: {
							id: "leaderboard"
						}
					}, [e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Zo,
							expression: "headerVisible_"
						}],
						staticClass: "leaderboard-title"
					}, [t._v(t._s(t.ap))]), t._v(" "), e("div", t._l(t.bp, (function(s, a) {
						return e("div", {
							key: a,
							staticClass: "leaderboard-label"
						}, [s.Pi ? e("span", [t._v(t._s(s.Pi) + ".")]) : t._e(), t._v(" "), e("badges", {
							staticClass: "leaderboard-badge",
							class: {
								spectating: !t.qa.Vd
							},
							attrs: {
								Ee: s.Zh,
								Uc: 18
							}
						}), t._v(" "), e("span", {
							staticClass: "leaderboard-text",
							class: {
								spectating: !t.qa.Vd
							},
							style: {
								color: s.Qi,
								fontWeight: s.Ri ? "bold" : "normal"
							},
							attrs: {
								tip: s.Ga ? "Click to spectate player" : ""
							},
							on: {
								click: function(e) {
									return t.Ud(s.Ga)
								}
							}
						}, [s.Ti ? e("a", {
							attrs: {
								href: s.Ti,
								target: "_blank",
								rel: "noopener"
							}
						}, [t._v("\r\n                    " + t._s(s.bi) + "\r\n                ")]) : [t._v(t._s(s.bi))]], 2), t._v(" "), s.wg ? e("span", {
							staticClass: "leaderboard-score",
							style: {
								color: s.Qi
							}
						}, [t._v("\r\n                " + t._s(s.wg) + "\r\n            ")]) : t._e()], 1)
					})), 0)])
				};
				Ps._withStripped = !0;
				var Is = s(1620),
					{
						R: Ts
					} = s(3658);
				const As = {
					data: () => ({
						Yo: !1,
						Wi: !1,
						Zo: !0,
						ap: "Leaderboard",
						bp: [],
						qa: Is.ra
					}),
					components: {
						badges: D
					},
					methods: {
						cp(t) {
							if (this.bp = t.Si,
								t.Xi)
								this.Zo = t.Xi.Wi,
								this.ap = t.Xi.bi;
							else if (Is.T.Hj && this.qa.ta) {
								this.Zo = !0;
								var e = this.qa.ta.region || "";
								e && (e += " "),
									this.ap = e + this.qa.ta.name
							} else
								this.Zo = !0,
								this.ap = "Leaderboard"
						},
						Ud(t) {
							t && (localStorage.adminMode && (Is.Be = t),
								Is.Td.Ud(t))
						}
					},
					created() {
						Is.R.$on(Ts.Sa, (() => {
								this.Yo = Is.T.Gj,
									this.Wi = Is.Ua && !Is.Qa,
									this.Wi ? Is.R.$on(Ts.hj, this.cp) : Is.R.$off(Ts.hj, this.cp)
							})),
							Is.R.$on(Ts.Na, (() => {
								this.bp = []
							}))
					}
				};
				const Ns = (0,
					_.Z)(As, Ps, [], !1, null, "7e7860a8", null).exports;
				var Ls = function() {
					var t = this,
						e = t._self._c;
					t._self._setupProxy;
					return e("div", {
						staticClass: "minimap-wrapper"
					}, [e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.Y,
							expression: "showMinimapStats_"
						}],
						staticClass: "minimap-stats"
					}, [e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.ca,
							expression: "showClock_"
						}]
					}, [t._v(t._s(t.ia))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.da,
							expression: "showSessionTime_"
						}]
					}, [t._v(t._s(t.ja) + " session")]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.ga && t.na,
							expression: "showPlayerCount_ && playerCount_"
						}]
					}, [t._v(t._s(t.sa))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.ea && t.la,
							expression: "showSpectators_ && spectators_"
						}]
					}, [t._v(t._s(t.la) + " spectator" + t._s(1 === t.la ? "" : "s"))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.fa && t.ma,
							expression: "showTagTotalMass_ && tagTotalMass_"
						}]
					}, [t._v(t._s(t.ma) + " total mass")]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.ha && t.ka,
							expression: "showRestartTiming_ && restartTime_"
						}]
					}, [t._v("Restart in " + t._s(t.ka))]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.qa.ng,
							expression: "gameState_.isAutoRespawning_"
						}]
					}, [t._v("Auto respawning")])]), t._v(" "), e("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.W,
							expression: "showMinimap_"
						}],
						staticClass: "container",
						class: {
							circle: t.X
						}
					}, [e("canvas", {
						ref: "locations",
						attrs: {
							id: "locations"
						}
					}), t._v(" "), e("canvas", {
						ref: "minimap",
						attrs: {
							id: "minimap"
						}
					})])])
				};
				Ls._withStripped = !0;
				var Ds = s(2);
				const Os = s.n(Ds)();
				const Rs = (0,
					_.Z)(Os, Ls, [], !1, null, "769dba30", null).exports;
				var Es = s(1620),
					{
						R: Us
					} = s(3658);
				const Fs = {
					components: {
						stats: gs,
						chatbox: Ms,
						minimap: Rs,
						leaderboard: Ns,
						cautions: ps
					},
					data: () => ({
						Eo: 1
					}),
					created() {
						Es.R.$on(Us.Sa, (() => {
							this.Eo = Es.T.Ej
						}))
					}
				};
				const Bs = (0,
					_.Z)(Fs, ls, [], !1, null, "0047b8f0", null).exports;
				var zs = function() {
					var t = this,
						e = t._self._c;
					return e("transition", {
						attrs: {
							name: "menu"
						}
					}, [e("div", {
						staticClass: "container"
					}, [e("div", {
						staticClass: "stuck-mention",
						class: {
							"show-stuck": t.dp
						}
					}, [t._v("If you are stuck, press ESC to continue")]), t._v(" "), e("div", {
						staticClass: "fade-box box-1"
					}, [e("div", {
						staticStyle: {
							padding: "4px"
						}
					}, [t._v("Advertisement")]), t._v(" "), e("div", {
						staticStyle: {
							padding: "10px",
							"padding-top": "0px"
						}
					}, [e("div", {
						attrs: {
							id: "vanis-io_300x250_2"
						}
					})])]), t._v(" "), t.stats ? e("div", {
						staticClass: "fade-box",
						class: {
							scroll: t.ep
						}
					}, [e("div", {
						staticStyle: {
							padding: "15px"
						}
					}, [e("div", [t._v("Time alive: " + t._s(t.mj))]), t._v(" "), e("div", [t._v("Highscore: " + t._s(t.Yg))]), t._v(" "), e("div", [t._v("Players eaten: " + t._s(t.stats.nj))]), t._v(" "), e("btn", {
						staticClass: "continue",
						attrs: {
							disabled: !t.dp
						},
						nativeOn: {
							click: function(e) {
								return t.pf.apply(null, arguments)
							}
						}
					}, [t._v("Continue")])], 1)]) : t._e()])])
				};
				zs._withStripped = !0;
				var Xs = s(1620),
					$s = s(473),
					{
						R: Ws
					} = s(3658);
				const js = {
					props: ["stats"],
					data: () => ({
						ep: !1,
						dp: !1
					}),
					computed: {
						mj() {
							var t = this.stats.mj;
							return t < 60 ? t + "s" : `${Math.floor(t / 60)}min ${t % 60}s`
						},
						Yg() {
							return Xs.Xa(this.stats.Yg)
						}
					},
					methods: {
						fp() {
							this.ep = $s.Te("death-box"),
								this.dp = !1,
								setTimeout((() => {
									Xs.ra.mg = !1,
										this.dp = !0
								}), this.ep ? 2500 : 1200)
						},
						pf(t) {
							(t instanceof MouseEvent && t.isTrusted || !0 === t) && this.dp && (Xs.Vg.showDeathScreen = !1,
								Xs.lf(!0, !0))
						}
					},
					created() {
						Xs.R.$on(Ws.fh, this.fp),
							Xs.R.$on(Ws.Mh, (() => this.pf(!0)))
					}
				};
				const Hs = (0,
					_.Z)(js, zs, [], !1, null, "0b6441fe", null).exports;
				var Vs = function() {
					var t = this;
					return (0,
						t._self._c)("button", {
						staticClass: "btn"
					}, [t._t("default", (function() {
						return [t._v("Here should be something")]
					}))], 2)
				};
				Vs._withStripped = !0;
				const Gs = {};
				const Js = (0,
					_.Z)(Gs, Vs, [], !1, null, "73f7fbfc", null).exports;
				var qs = function() {
					var t = this,
						e = t._self._c;
					return t.gp ? e("div", {
						class: {
							"auto-hide": t.dk
						},
						attrs: {
							id: "replay-controls"
						}
					}, [e("div", {
						staticStyle: {
							"text-align": "right"
						}
					}, [e("div", [t._v("Opacity " + t._s(t.hp) + "%")]), t._v(" "), e("div", [e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.hp,
							expression: "cellOpacity_"
						}],
						staticClass: "replay-slider",
						staticStyle: {
							width: "105px",
							display: "inline-block"
						},
						attrs: {
							id: "replay-opacity-slider",
							type: "range",
							min: "10",
							max: "100",
							step: "10"
						},
						domProps: {
							value: t.hp
						},
						on: {
							input: t.ip,
							__r: function(e) {
								t.hp = e.target.value
							}
						}
					})])]), t._v(" "), e("div", {
						staticStyle: {
							"margin-bottom": "5px",
							display: "flex"
						}
					}, [e("div", {
						staticStyle: {
							flex: "1"
						}
					}, [t._v(t._s(t.jp.toFixed(1)) + " seconds")]), t._v(" "), e("div", {
						staticStyle: {
							"margin-right": "10px"
						}
					}, [e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.dk,
							expression: "autoHideReplayControls_"
						}],
						attrs: {
							type: "checkbox",
							id: "replay-auto-hide-controls"
						},
						domProps: {
							checked: Array.isArray(t.dk) ? t._i(t.dk, null) > -1 : t.dk
						},
						on: {
							change: [function(e) {
								var s = t.dk,
									a = e.target,
									i = !!a.checked;
								if (Array.isArray(s)) {
									var n = t._i(s, null);
									a.checked ? n < 0 && (t.dk = s.concat([null])) : n > -1 && (t.dk = s.slice(0, n).concat(s.slice(n + 1)))
								} else
									t.dk = i
							}, t.kp]
						}
					}), t._v(" "), e("label", {
						attrs: {
							for: "replay-auto-hide-controls"
						}
					}, [t._v("Hide controls")])])]), t._v(" "), e("input", {
						staticClass: "replay-slider",
						attrs: {
							type: "range",
							min: "0",
							max: t.lp
						},
						domProps: {
							value: t.mp
						},
						on: {
							input: t.np,
							change: t.op
						}
					})]) : t._e()
				};
				qs._withStripped = !0;
				var Ys = s(1620),
					{
						R: Zs
					} = s(3658);
				const Ks = {
					data: () => ({
						gp: !1,
						dk: !1,
						hp: 100,
						mp: 0,
						jp: 0,
						lp: 0
					}),
					created() {
						Ys.R.$on(Zs.Sa, this.pp),
							Ys.R.$on(Zs.wj, this.qp)
					},
					methods: {
						pp() {
							this.dk = Ys.T.dk,
								Ys.Ua && Ys.Qa ? (this.gp = !0,
									this.lp = Ys.Ng.rj.length - 1) : (this.gp = !1,
									this.hp = 100,
									this.mp = 0,
									this.lp = 0)
						},
						qp(t, e = !0) {
							e && (this.mp = t),
								this.jp = t / 25
						},
						np(t) {
							Ys.Og && (clearInterval(Ys.Og),
									Ys.Og = null),
								Ys.Ng.vj(t.target.valueAsNumber),
								this.qp(t.target.valueAsNumber, !0)
						},
						op() {
							Ys.Og || (Ys.Og = setInterval(Ys.Ng.Pg, 40))
						},
						ip() {
							Ys.Ie.Mc.alpha = this.hp / 100
						},
						kp() {
							Ys.T.Ee("autoHideReplayControls", this.dk)
						}
					}
				};
				const Qs = (0,
					_.Z)(Ks, qs, [], !1, null, "11edcf43", null).exports;
				var ta = function() {
					var t = this,
						e = t._self._c;
					return t.show ? e("div", {
						attrs: {
							id: "ab-overlay"
						}
					}, [t._m(0)]) : t._e()
				};
				ta._withStripped = !0;
				var {
					Ki: ea
				} = s(9056);
				const sa = {
					data: () => ({
						gp: !1
					}),
					created() {
						ea || fetch("/ads.css").then((t => {})).catch((t => {
							t.response || (this.gp = !0)
						}))
					}
				};
				const aa = (0,
					_.Z)(sa, ta, [function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "content"
					}, [e("img", {
						staticStyle: {
							width: "120px"
						},
						attrs: {
							src: "/img/sad.png"
						}
					}), t._v(" "), e("p", {
						staticStyle: {
							"font-size": "3em"
						}
					}, [t._v("Adblock Detected")]), t._v(" "), e("p", {
						staticStyle: {
							"font-size": "1.5em",
							"margin-bottom": "15px"
						}
					}, [t._v("We use advertisements to fund our servers!")]), t._v(" "), e("img", {
						staticStyle: {
							"border-radius": "4px",
							"box-shadow": "0 0 10px black"
						},
						attrs: {
							src: "/img/ab.gif"
						}
					})])
				}], !1, null, "0b66f3fb", null).exports;
				var ia = function() {
					var t = this;
					return (0,
						t._self._c)("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.gp,
							expression: "show_"
						}],
						staticClass: "image-captcha-overlay"
					}, [t._m(0)])
				};
				ia._withStripped = !0;
				var na = s(3117),
					ra = s(1620),
					{
						R: oa
					} = s(3658);
				const la = {
						data: () => ({
							gp: !1,
							Xl: null,
							rp: null,
							sp: null
						}),
						created() {
							ra.R.$on(oa.oj, (async () => {
								this.gp = !0,
									this.sp = ra.if,
									this.Xl || (this.Xl = new Promise((t => {
										var e = document.createElement("script");
										e.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=explicit"),
											e.setAttribute("async", "async"),
											e.setAttribute("defer", "defer"),
											e.onload = t,
											e.onerror = () => {
												na.hf.fire({
													type: "error",
													title: "Loading reCAPTCHA failed. Please try refreshing browser in 30 seconds",
													timer: 1500
												})
											},
											document.head.appendChild(e)
									}))),
									await this.Xl,
									grecaptcha.ready((() => this.tp()))
							}))
						},
						methods: {
							tp() {
								null === this.rp ? this.rp = grecaptcha.render(document.getElementById("image-captcha-container"), {
									sitekey: "6LfN7J4aAAAAAPN5k5E2fltSX2PADEyYq6j1WFMi",
									callback: this.up.bind(this)
								}) : grecaptcha.reset(this.rp)
							},
							up(t) {
								ra.if === this.sp ? t ? (ra.eb.ff(t),
									this.gp = !1) : this.tp() : this.gp = !1
							}
						}
					},
					ca = la;
				const ua = (0,
					_.Z)(ca, ia, [function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "center-screen"
					}, [e("div", {
						staticStyle: {
							color: "orange",
							"margin-bottom": "6px"
						}
					}, [t._v("Login and level up to skip captcha!")]), t._v(" "), e("div", {
						attrs: {
							id: "image-captcha-container"
						}
					})])
				}], !1, null, "16d4a4d8", null).exports;
				var ha = function() {
					var t = this,
						e = t._self._c;
					return t.gp ? e("div", {
						staticClass: "shoutbox"
					}, [e("iframe", {
						staticClass: "shoutbox-player",
						attrs: {
							width: "300",
							height: "200",
							src: t.url,
							frameborder: "0"
						}
					}), t._v(" "), e("i", {
						staticClass: "fas fa-times close-button",
						on: {
							click: function(e) {
								return t.vp()
							}
						}
					})]) : t._e()
				};
				ha._withStripped = !0;
				var da = s(3169);
				const pa = {
					data: () => ({
						gp: !1
					}),
					props: ["url", "tag"],
					methods: {
						vp() {
							da.Ji(this.tag),
								this.gp = !1
						}
					},
					created() {
						da.Ii(this.tag) || (this.gp = !0)
					}
				};
				const va = (0,
					_.Z)(pa, ha, [], !1, null, "a5dc8020", null).exports;
				var fa = function() {
					var t = this,
						e = t._self._c;
					return t.nf ? e("div", {
						staticClass: "color-picker-wrapper",
						on: {
							mousedown: t.wp,
							mousemove: t.yp,
							mouseup: t.zp
						}
					}, [e("div", {
						ref: "overlay",
						staticClass: "color-picker-overlay"
					}), t._v(" "), e("div", {
						staticClass: "color-picker fade-box",
						style: {
							top: t.Ap + "px",
							left: t.Bp + "px"
						}
					}, [e("input", {
						staticClass: "color-picker-hue",
						attrs: {
							type: "range",
							min: "0",
							max: "360",
							step: "1"
						},
						domProps: {
							value: t.Cp[0]
						},
						on: {
							input: function(e) {
								return t.Dp(e, !1)
							},
							change: function(e) {
								return t.Dp(e, !0)
							}
						}
					}), t._v(" "), e("div", {
						staticClass: "color-picker-clr",
						style: {
							backgroundColor: "hsl(" + t.Cp[0] + ", 100%, 50%)"
						}
					}, [e("div", {
						staticClass: "color-picker-sat"
					}, [e("div", {
						ref: "val",
						staticClass: "color-picker-val"
					}, [e("div", {
						ref: "pivot",
						staticClass: "color-picker-pivot",
						class: {
							dragging: t.Ep
						},
						style: {
							left: 150 * t.Cp[1] + "px",
							top: 150 - 150 * t.Cp[2] + "px",
							background: t.Ep ? "#" + t.Fp : "none"
						}
					})])])]), t._v(" "), e("div", {
						staticClass: "color-picker-hex"
					}, [t.Gp ? e("span", {
						staticClass: "color-picker-reset",
						on: {
							click: function(e) {
								return t.Zg()
							}
						}
					}, [t._v("Reset")]) : t._e(), t._v(" "), e("span", {
						staticClass: "color-picker-hashtag"
					}, [t._v("#")]), t._v(" "), e("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.Fp,
							expression: "rgb_"
						}],
						staticClass: "color-picker-hex",
						attrs: {
							type: "text",
							spellcheck: "false",
							maxlength: "6",
							placeholder: "000000"
						},
						domProps: {
							value: t.Fp
						},
						on: {
							input: [function(e) {
								e.target.composing || (t.Fp = e.target.value)
							}, function(e) {
								return t.Hp(1, !0)
							}]
						}
					})])])]) : t._e()
				};
				fa._withStripped = !0;
				var ma = s(1620),
					{
						R: _a
					} = s(3658);
				const ga = {
					data: () => ({
						nf: !1,
						Bp: 0,
						Ap: 0,
						Ep: !1,
						Gp: null,
						Fp: null,
						Cp: [0, 0, 0]
					}),
					methods: {
						an(t) {
							this.nf = null != t,
								null != t ? (this.Bp = t.Ha,
									this.Ap = t.Ia,
									this.Gp = t.Sm,
									this.Fp = t.Wl,
									this.Hp(1, !1)) : ma.R.$emit(_a.gn)
						},
						Dp(t, e) {
							this.Cp[0] = t.target.valueAsNumber,
								this.Hp(0, e)
						},
						wp(t) {
							if (t.target === this.$refs.overlay)
								return this.an(null),
									void t.stopPropagation();
							t.target !== this.$refs.pivot && t.target !== this.$refs.val || (this.Ep = !0,
								this.yp(t))
						},
						yp(t) {
							if (this.Ep) {
								var e = this.$refs.val.getBoundingClientRect(),
									s = t.clientX - e.x,
									a = t.clientY - e.y;
								this.Cp[1] = s / 150,
									this.Cp[2] = 1 - a / 150,
									this.Cp[1] = Math.min(Math.max(this.Cp[1], 0), 1),
									this.Cp[2] = Math.min(Math.max(this.Cp[2], 0), 1),
									this.Hp(0, !1)
							}
						},
						zp(t) {
							this.Ep && (this.yp(t),
								this.Ep = !1,
								this.Hp(0, !0))
						},
						Zg() {
							this.Fp = this.Gp,
								this.Hp(1, !0)
						},
						Hp(t, e) {
							if (1 === t) {
								if (6 !== this.Fp.length)
									return;
								this.Cp.splice(0, 3, ...(s = this.Fp,
									a = parseInt(s.slice(0, 2), 16) / 255,
									i = parseInt(s.slice(2, 4), 16) / 255,
									n = parseInt(s.slice(4, 6), 16) / 255,
									r = Math.max(a, i, n),
									o = r - Math.min(a, i, n),
									l = o && (r == a ? (i - n) / o : r == i ? 2 + (n - a) / o : 4 + (a - i) / o),
									[60 * (l < 0 ? l + 6 : l), r && o / r, r]))
							} else
								0 === t && (this.Fp = function(t, e, s) {
									var a, i, n, r, o, l, c, u;
									switch (l = s * (1 - e),
										c = s * (1 - (o = t / 360 * 6 - (r = Math.floor(t / 360 * 6))) * e),
										u = s * (1 - (1 - o) * e),
										r % 6) {
										case 0:
											a = s,
												i = u,
												n = l;
											break;
										case 1:
											a = c,
												i = s,
												n = l;
											break;
										case 2:
											a = l,
												i = s,
												n = u;
											break;
										case 3:
											a = l,
												i = c,
												n = s;
											break;
										case 4:
											a = u,
												i = l,
												n = s;
											break;
										case 5:
											a = s,
												i = l,
												n = c
									}
									return (a = Math.ceil(255 * a).toString(16).padStart(2, "0")) + (i = Math.ceil(255 * i).toString(16).padStart(2, "0")) + Math.ceil(255 * n).toString(16).padStart(2, "0")
								}(...this.Cp));
							var s, a, i, n, r, o, l;
							e && ma.R.$emit(_a.fn, this.Fp)
						}
					},
					created() {
						ma.R.$on(_a.cn, this.an)
					},
					destroyed() {
						ma.R.$off(_a.cn, this.an)
					}
				};
				const ya = (0,
					_.Z)(ga, fa, [], !1, null, "9f4e7a3c", null).exports;
				var wa = function() {
					var t = this,
						e = t._self._c;
					return t.nf ? e("div", {
						staticClass: "image-picker-wrapper",
						on: {
							click: t.Ip
						}
					}, [e("div", {
						staticClass: "image-picker-overlay"
					}), t._v(" "), e("div", {
						staticClass: "image-picker fade-box",
						style: {
							top: t.Ap + "px",
							left: t.Bp + "px"
						}
					}, [e("img", {
						staticClass: "image-picker-preview",
						style: {
							maxWidth: (t.Wl ? t.md : 200) + "px"
						},
						attrs: {
							src: t.Wl,
							alt: "No image chosen or it is invalid"
						},
						on: {
							click: function(e) {
								return t.Jp()
							},
							dragover: function(t) {
								t.preventDefault()
							},
							drop: function(e) {
								return e.preventDefault(),
									t.Kp(e.dataTransfer.files)
							}
						}
					}), t._v(" "), e("div", [t._v("Click or drop onto image to change.")]), t._v(" "), null != t.Sm ? e("div", {
						staticClass: "image-picker-reset",
						on: {
							click: function(e) {
								return t.Hp(t.Sm)
							}
						}
					}, [t._v("Reset")]) : t._e(), t._v(" "), e("input", {
						ref: "inputElem",
						staticClass: "image-picker-input",
						attrs: {
							type: "file",
							accept: "image/png, image/jpeg, image/bmp, image/webp"
						},
						on: {
							change: function(e) {
								return t.Kp(e.target.files)
							}
						}
					})])]) : t._e()
				};
				wa._withStripped = !0;
				var ba = s(1620),
					{
						R: Ca
					} = s(3658);
				const ka = {
					data: () => ({
						nf: !1,
						Bp: 0,
						Ap: 0,
						Lp: null,
						Wl: null,
						Sm: null,
						md: null
					}),
					methods: {
						an(t) {
							this.nf = null != t,
								this.nf ? (this.Bp = t.Ha,
									this.Ap = t.Ia,
									this.Wl = t.Wl,
									this.Sm = t.Sm,
									this.md = t.md) : ba.R.$emit(Ca.ln)
						},
						Ip(t) {
							t.target.classList.contains("image-picker-overlay") && (this.an(null),
								t.stopPropagation())
						},
						Hp(t) {
							this.Wl = t,
								ba.R.$emit(Ca.kn, t)
						},
						Jp() {
							this.$refs.inputElem.click()
						},
						Mp() {
							var t = new FileReader;
							return t.addEventListener("load", (t => {
									this.Hp(t.target.result)
								})),
								t
						},
						Kp(t) {
							0 !== t.length && t[0].type.startsWith("image/") && this.Mp().readAsDataURL(t[0])
						}
					},
					created() {
						ba.R.$on(Ca.hn, this.an)
					},
					destroyed() {
						ba.R.$off(Ca.hn, this.an)
					}
				};
				const Sa = (0,
					_.Z)(ka, wa, [], !1, null, "591f7255", null).exports;
				var xa = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticClass: "tooltip",
						class: {
							soft: t.Np,
							show: t.gp
						},
						style: {
							top: t.Ap + "px",
							left: t.Bp + "px"
						}
					}, t._l(t.bi, (function(s) {
						return e("div", [t._v(t._s(s))])
					})), 0)
				};
				xa._withStripped = !0;
				var Ma = s(1620),
					{
						R: Pa
					} = s(3658);
				const Ia = {
					data: () => ({
						gp: !1,
						Np: !1,
						Bp: 0,
						Ap: 0,
						bi: []
					}),
					methods: {
						Op(t) {
							for (var e, s = t.target, a = 0; a < 3 && null != s && !(null != (e = s.getAttribute("tip")) && e.length > 0); a++)
								s = s.parentElement;
							if (null == e || 0 === e.length)
								return this.gp = !1;
							this.gp = !0,
								this.bi = e.split("\n"),
								this.Bp = t.clientX + 14,
								this.Ap = t.clientY,
								t.clientY >= window.innerHeight - 40 ? this.Ap -= 22 - 18 * this.bi.length : this.Ap += 8
						},
						Pp(t) {
							this.Np = t,
								this.gp = !1
						}
					},
					created() {
						document.addEventListener("mousemove", this.Op),
							Ma.R.$on(Pa.bh, this.Pp),
							Ma.R.$on(Pa.rn, (() => this.Pp(!0))),
							this.Pp(!0)
					}
				};
				const Ta = (0,
					_.Z)(Ia, xa, [], !1, null, "7d20daa3", null).exports;
				i().use(r());
				var Aa = s(5097),
					Na = s(1620),
					{
						R: La
					} = s(3658);
				i().component("btn", Js),
					Na.Vg = new(i())({
						el: "#app",
						data: {
							showHud: !1,
							showMenu: !0,
							showDeathScreen: !1,
							deathStats: null
						},
						components: {
							imageCaptcha: ua,
							mainContainer: ss,
							socialLinks: ns,
							privacyTos: os,
							hud: Bs,
							deathStats: Hs,
							replayControls: Qs,
							abOverlay: aa,
							shoutbox: va,
							colorPicker: ya,
							imagePicker: Sa,
							tooltip: Ta
						}
					}),
					Na.R.$on(La.Sa, (() => {
						Na.Vg.showHud = Aa.Ke
					}))
			},
			3658: t => {
				function e(t, e, s = null, a = null, i = !0) {
					return i && null != s && 0 !== s ? `${t}${e} ${s}${a}` : `${t}${e}`
				}
				var s = !1;
				var a, i = (a = [],
						function() {
							for (;;) {
								var t = "abcdefghijklmnopqrstuvwxyz",
									e = t[~~(Math.random() * t.length)] + t[~~(Math.random() * t.length)] + t[~~(Math.random() * t.length)];
								if (-1 === a.indexOf(e))
									return a.push(e),
										e
							}
						}
					),
					n = {
						lj: i(),
						Hn: i(),
						kf: i(),
						qj: i(),
						Sa: i(),
						Wa: i(),
						ij: i(),
						ke: i(),
						Ra: i(),
						Nh: i(),
						cn: i(),
						fn: i(),
						gn: i(),
						Kh: i(),
						qn: i(),
						sn: i(),
						fh: i(),
						Mh: i(),
						oj: i(),
						hn: i(),
						kn: i(),
						ln: i(),
						hj: i(),
						rn: i(),
						Eg: i(),
						za: i(),
						Ka: i(),
						La: i(),
						Ma: i(),
						Na: i(),
						bh: i(),
						wj: i(),
						pb: i(),
						Cj: i(),
						jf: i(),
						qh: i(),
						ih: i(),
						ii: i(),
						qf: i(),
						rf: i(),
						sf: i(),
						tf: i(),
						uf: i()
					};
				t.exports = {
					Ja: function(t, e, s) {
						return (1 - s) * t + s * e
					},
					Qd: function(t) {
						return new DataView(new ArrayBuffer(t))
					},
					Ih: function(t) {
						return t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
					},
					Bj: function() {
						var t = new Date,
							e = t.getMonth() + 1,
							s = t.getDate();
						return [t.getFullYear(), (e > 9 ? "" : "0") + e, (s > 9 ? "" : "0") + s].join("") + "-" + [("0" + t.getHours()).slice(-2), ("0" + t.getMinutes()).slice(-2), ("0" + t.getSeconds()).slice(-2)].join("")
					},
					bm: function(t, s = !0) {
						if (!isFinite(t))
							return "never";
						if (t < 0)
							return "0ms";
						const a = Math.floor(t / 1e3);
						if (a < 1)
							return e(t, "ms");
						const i = Math.floor(a / 60);
						if (i < 1)
							return e(a, "s", t % 1e3, "ms", s);
						const n = Math.floor(i / 60);
						if (n < 1)
							return e(i, "min", a % 60, "s");
						const r = Math.floor(n / 24);
						if (r < 1)
							return e(n, "hr", i % 60, "min");
						const o = Math.floor(r / 7);
						if (o < 1)
							return e(r, "d", n % 24, "hr");
						const l = Math.floor(o / 52);
						return l < 1 ? e(o, "w", r % 7, "d") : e(l, "y", o % 52, "w")
					},
					ig: function() {
						s || (document.body.classList.add("hide-captcha-badge"),
							s = !0)
					},
					yj: function(t) {
						["interaction", "accessibility"].forEach((e => {
							var s = t.plugins[e];
							s && (s.destroy(),
								delete t.plugins[e])
						}))
					},
					Rd: function(t) {
						t.ef(document.getElementById("nickname").value),
							t.ef(document.getElementById("skinurl").value),
							t.ef(document.getElementById("teamtag").value)
					},
					Jn: function(t) {
						return Math.round(t * t / (.1 * .1))
					},
					In: function(t) {
						return Math.floor(.1 * Math.sqrt(t))
					},
					R: n,
					aj: class {
						constructor(t) {
							this.Vi = t,
								this.Ui = 0
						}
						Zd() {
							return this.Vi.getUint8(this.Ui++)
						}
						Qp() {
							return this.Vi.getInt8(this.Ui++)
						}
						Oi() {
							return this.Vi.getUint16((this.Ui += 2) - 2, !0)
						}
						kj() {
							return this.Vi.getInt16((this.Ui += 2) - 2, !0)
						}
						Zi() {
							return this.Vi.getUint32((this.Ui += 4) - 4, !0)
						}
						ef() {
							for (var t, e = ""; 0 !== (t = this.Vi.getUint8(this.Ui++));)
								e += String.fromCharCode(t);
							return decodeURIComponent(escape(e))
						}
						jj() {
							for (var t, e = ""; 0 !== (t = this.Vi.getUint16((this.Ui += 2) - 2, !0));)
								e += String.fromCharCode(t);
							return e
						}
					},
					Sd: class {
						constructor() {
							this.gb = []
						}
						zj() {
							var t = new ArrayBuffer(this.gb.length);
							return new Uint8Array(t).set(this.ae()),
								t
						}
						ae() {
							return new Uint8Array(this.gb)
						}
						Zd(t) {
							this.gb.push(t)
						}
						df(t) {
							for (var e = 0; e < t.length; e++)
								this.gb.push(t[e])
						}
						ef(t) {
							t = unescape(encodeURIComponent(t));
							for (var e = 0; e < t.length; e++)
								this.gb.push(t.charCodeAt(e));
							this.gb.push(0)
						}
					}
				}
			},
			4459: (t, e, s) => {
				var a = s(7167);

				function i(t, e, s) {
					var i = t.length,
						n = a._malloc(i),
						r = new Uint8Array(a.HEAPU8.buffer, n, i);
					r.set(t);
					var o = e(n, t.byteLength);
					if (!s) {
						var l = new Uint8Array(new ArrayBuffer(i));
						l.set(r)
					}
					return a._free(n),
						s ? o : l
				}
				s(4103),
					t.exports = {
						cj: t => i(t, a._skid, !1),
						skid_3: t => i(t, a._skid3, !0),
						skid_4: t => i(t, a._skid4, !0)
					}
			},
			7167: (t, e, s) => {
				var a, i = void 0 !== i ? i : {},
					n = Object.assign({}, i),
					r = !0,
					o = !1,
					l = "";
				(r || o) && (o ? l = self.location.href : "undefined" != typeof document && document.currentScript && (l = document.currentScript.src),
					l = 0 !== l.indexOf("blob:") ? l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
					t => {
						var e = new XMLHttpRequest;
						return e.open("GET", t, !1),
							e.send(null),
							e.responseText
					},
					o && (a = t => {
						var e = new XMLHttpRequest;
						return e.open("GET", t, !1),
							e.responseType = "arraybuffer",
							e.send(null),
							new Uint8Array(e.response)
					}),
					(t, e, s) => {
						var a = new XMLHttpRequest;
						a.open("GET", t, !0),
							a.responseType = "arraybuffer",
							a.onload = () => {
								200 == a.status || 0 == a.status && a.response ? e(a.response) : s()
							},
							a.onerror = s,
							a.send(null)
					}
				);
				i.print || console.log.bind(console);
				var c, u = i.printErr || console.warn.bind(console);
				Object.assign(i, n),
					n = null,
					i.arguments && i.arguments,
					i.thisProgram && i.thisProgram,
					i.quit && i.quit,
					i.wasmBinary && (c = i.wasmBinary);
				var h;
				i.noExitRuntime;
				"object" != typeof WebAssembly && N("no native wasm support detected");
				var d, p, v, f, m, _, g, y, w = !1,
					b = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

				function C(t, e) {
					return t ? function(t, e, s) {
						for (var a = e + s, i = e; t[i] && !(i >= a);)
							++i;
						if (i - e > 16 && t.buffer && b)
							return b.decode(t.subarray(e, i));
						for (var n = ""; e < i;) {
							var r = t[e++];
							if (128 & r) {
								var o = 63 & t[e++];
								if (192 != (224 & r)) {
									var l = 63 & t[e++];
									if ((r = 224 == (240 & r) ? (15 & r) << 12 | o << 6 | l : (7 & r) << 18 | o << 12 | l << 6 | 63 & t[e++]) < 65536)
										n += String.fromCharCode(r);
									else {
										var c = r - 65536;
										n += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
									}
								} else
									n += String.fromCharCode((31 & r) << 6 | o)
							} else
								n += String.fromCharCode(r)
						}
						return n
					}(p, t, e) : ""
				}

				function k(t, e, s) {
					return function(t, e, s, a) {
						if (!(a > 0))
							return 0;
						for (var i = s, n = s + a - 1, r = 0; r < t.length; ++r) {
							var o = t.charCodeAt(r);
							if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & t.charCodeAt(++r)),
								o <= 127) {
								if (s >= n)
									break;
								e[s++] = o
							} else if (o <= 2047) {
								if (s + 1 >= n)
									break;
								e[s++] = 192 | o >> 6,
									e[s++] = 128 | 63 & o
							} else if (o <= 65535) {
								if (s + 2 >= n)
									break;
								e[s++] = 224 | o >> 12,
									e[s++] = 128 | o >> 6 & 63,
									e[s++] = 128 | 63 & o
							} else {
								if (s + 3 >= n)
									break;
								e[s++] = 240 | o >> 18,
									e[s++] = 128 | o >> 12 & 63,
									e[s++] = 128 | o >> 6 & 63,
									e[s++] = 128 | 63 & o
							}
						}
						return e[s] = 0,
							s - i
					}(t, p, e, s)
				}

				function S(t) {
					for (var e = 0, s = 0; s < t.length; ++s) {
						var a = t.charCodeAt(s);
						a <= 127 ? e++ : a <= 2047 ? e += 2 : a >= 55296 && a <= 57343 ? (e += 4,
							++s) : e += 3
					}
					return e
				}
				var x = [],
					M = [],
					P = [];
				var I = 0,
					T = null,
					A = null;

				function N(t) {
					throw i.onAbort && i.onAbort(t),
						u(t = "Aborted(" + t + ")"),
						w = !0,
						1,
						t += ". Build with -sASSERTIONS for more info.",
						new WebAssembly.RuntimeError(t)
				}
				var L, D, O = "data:application/octet-stream;base64,";

				function R(t) {
					return t.startsWith(O)
				}

				function E(t) {
					try {
						if (t == L && c)
							return new Uint8Array(c);
						if (a)
							return a(t);
						throw "both async and sync fetching of the wasm failed"
					} catch (t) {
						N(t)
					}
				}

				function U(t) {
					for (; t.length > 0;)
						t.shift()(i)
				}

				function F(t) {
					this.excPtr = t,
						this.ptr = t - 24,
						this.set_type = function(t) {
							_[this.ptr + 4 >> 2] = t
						},
						this.get_type = function() {
							return _[this.ptr + 4 >> 2]
						},
						this.set_destructor = function(t) {
							_[this.ptr + 8 >> 2] = t
						},
						this.get_destructor = function() {
							return _[this.ptr + 8 >> 2]
						},
						this.set_refcount = function(t) {
							m[this.ptr >> 2] = t
						},
						this.set_caught = function(t) {
							t = t ? 1 : 0,
								d[this.ptr + 12 >> 0] = t
						},
						this.get_caught = function() {
							return 0 != d[this.ptr + 12 >> 0]
						},
						this.set_rethrown = function(t) {
							t = t ? 1 : 0,
								d[this.ptr + 13 >> 0] = t
						},
						this.get_rethrown = function() {
							return 0 != d[this.ptr + 13 >> 0]
						},
						this.init = function(t, e) {
							this.set_adjusted_ptr(0),
								this.set_type(t),
								this.set_destructor(e),
								this.set_refcount(0),
								this.set_caught(!1),
								this.set_rethrown(!1)
						},
						this.add_ref = function() {
							var t = m[this.ptr >> 2];
							m[this.ptr >> 2] = t + 1
						},
						this.release_ref = function() {
							var t = m[this.ptr >> 2];
							return m[this.ptr >> 2] = t - 1,
								1 === t
						},
						this.set_adjusted_ptr = function(t) {
							_[this.ptr + 16 >> 2] = t
						},
						this.get_adjusted_ptr = function() {
							return _[this.ptr + 16 >> 2]
						},
						this.get_exception_ptr = function() {
							if (Mt(this.get_type()))
								return _[this.excPtr >> 2];
							var t = this.get_adjusted_ptr();
							return 0 !== t ? t : this.excPtr
						}
				}
				R(L = "wauth3.wasm?f9d05d7358ffa46a7f7c") || (D = L,
					L = i.locateFile ? i.locateFile(D, l) : l + D);

				function B(t) {
					switch (t) {
						case 1:
							return 0;
						case 2:
							return 1;
						case 4:
							return 2;
						case 8:
							return 3;
						default:
							throw new TypeError("Unknown type size: " + t)
					}
				}
				var z = void 0;

				function X(t) {
					for (var e = "", s = t; p[s];)
						e += z[p[s++]];
					return e
				}
				var $ = {},
					W = {},
					j = {},
					H = 48,
					V = 57;

				function G(t) {
					if (void 0 === t)
						return "_unknown";
					var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
					return e >= H && e <= V ? "_" + t : t
				}

				function J(t, e) {
					return t = G(t),
						new Function("body", "return function " + t + '() {\n        return body.apply(this, arguments);\n};\n')(e)
				}

				function q(t, e) {
					var s = J(e, (function(t) {
						this.name = e,
							this.message = t;
						var s = new Error(t).stack;
						void 0 !== s && (this.stack = this.toString() + "\n" + s.replace(/^Error(:[^\n]*)?\n/, ""))
					}));
					return s.prototype = Object.create(t.prototype),
						s.prototype.constructor = s,
						s.prototype.toString = function() {
							return void 0 === this.message ? this.name : this.name + ": " + this.message
						},
						s
				}
				var Y = void 0;

				function Z(t) {
					throw new Y(t)
				}

				function K(t, e, s = {}) {
					if (!("argPackAdvance" in e))
						throw new TypeError("registerType registeredInstance requires argPackAdvance");
					var a = e.name;
					if (t || Z('type "' + a + '" must have a positive integer typeid pointer'),
						W.hasOwnProperty(t)) {
						if (s.ignoreDuplicateRegistrations)
							return;
						Z("Cannot register type '" + a + "' twice")
					}
					if (W[t] = e,
						delete j[t],
						$.hasOwnProperty(t)) {
						var i = $[t];
						delete $[t],
							i.forEach((t => t()))
					}
				}
				var Q = [],
					tt = [{}, {
						value: void 0
					}, {
						value: null
					}, {
						value: !0
					}, {
						value: !1
					}];

				function et(t) {
					t > 4 && 0 == --tt[t].refcount && (tt[t] = void 0,
						Q.push(t))
				}

				function st() {
					for (var t = 0, e = 5; e < tt.length; ++e)
						void 0 !== tt[e] && ++t;
					return t
				}

				function at() {
					for (var t = 5; t < tt.length; ++t)
						if (void 0 !== tt[t])
							return tt[t];
					return null
				}
				var it = {
					toValue: t => (t || Z("Cannot use deleted val. handle = " + t),
						tt[t].value),
					toHandle: t => {
						switch (t) {
							case void 0:
								return 1;
							case null:
								return 2;
							case !0:
								return 3;
							case !1:
								return 4;
							default:
								var e = Q.length ? Q.pop() : tt.length;
								return tt[e] = {
										refcount: 1,
										value: t
									},
									e
						}
					}
				};

				function nt(t) {
					return this.fromWireType(m[t >> 2])
				}

				function rt(t, e) {
					switch (e) {
						case 2:
							return function(t) {
								return this.fromWireType(g[t >> 2])
							};
						case 3:
							return function(t) {
								return this.fromWireType(y[t >> 3])
							};
						default:
							throw new TypeError("Unknown float type: " + t)
					}
				}

				function ot(t, e, s) {
					switch (e) {
						case 0:
							return s ? function(t) {
									return d[t]
								} :
								function(t) {
									return p[t]
								};
						case 1:
							return s ? function(t) {
									return v[t >> 1]
								} :
								function(t) {
									return f[t >> 1]
								};
						case 2:
							return s ? function(t) {
									return m[t >> 2]
								} :
								function(t) {
									return _[t >> 2]
								};
						default:
							throw new TypeError("Unknown integer type: " + t)
					}
				}
				var lt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

				function ct(t, e) {
					for (var s = t, a = s >> 1, i = a + e / 2; !(a >= i) && f[a];)
						++a;
					if ((s = a << 1) - t > 32 && lt)
						return lt.decode(p.subarray(t, s));
					for (var n = "", r = 0; !(r >= e / 2); ++r) {
						var o = v[t + 2 * r >> 1];
						if (0 == o)
							break;
						n += String.fromCharCode(o)
					}
					return n
				}

				function ut(t, e, s) {
					if (void 0 === s && (s = 2147483647),
						s < 2)
						return 0;
					for (var a = e, i = (s -= 2) < 2 * t.length ? s / 2 : t.length, n = 0; n < i; ++n) {
						var r = t.charCodeAt(n);
						v[e >> 1] = r,
							e += 2
					}
					return v[e >> 1] = 0,
						e - a
				}

				function ht(t) {
					return 2 * t.length
				}

				function dt(t, e) {
					for (var s = 0, a = ""; !(s >= e / 4);) {
						var i = m[t + 4 * s >> 2];
						if (0 == i)
							break;
						if (++s,
							i >= 65536) {
							var n = i - 65536;
							a += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
						} else
							a += String.fromCharCode(i)
					}
					return a
				}

				function pt(t, e, s) {
					if (void 0 === s && (s = 2147483647),
						s < 4)
						return 0;
					for (var a = e, i = a + s - 4, n = 0; n < t.length; ++n) {
						var r = t.charCodeAt(n);
						if (r >= 55296 && r <= 57343)
							r = 65536 + ((1023 & r) << 10) | 1023 & t.charCodeAt(++n);
						if (m[e >> 2] = r,
							(e += 4) + 4 > i)
							break
					}
					return m[e >> 2] = 0,
						e - a
				}

				function vt(t) {
					for (var e = 0, s = 0; s < t.length; ++s) {
						var a = t.charCodeAt(s);
						a >= 55296 && a <= 57343 && ++s,
							e += 4
					}
					return e
				}

				function ft(t, e) {
					var s, a, i = W[t];
					return void 0 === i && Z(e + " has unknown type " + (s = St(t),
							a = X(s),
							kt(s),
							a)),
						i
				}
				var mt = {};

				function _t(t) {
					var e = mt[t];
					return void 0 === e ? X(t) : e
				}
				var gt = [];

				function yt() {
					return "object" == typeof globalThis ? globalThis : Function("return this")()
				}
				var wt = [];
				! function() {
					for (var t = new Array(256), e = 0; e < 256; ++e)
						t[e] = String.fromCharCode(e);
					z = t
				}(),
				Y = i.BindingError = q(Error, "BindingError"),
					i.InternalError = q(Error, "InternalError"),
					i.count_emval_handles = st,
					i.get_first_emval = at;
				var bt, Ct = {
						n: function(t, e, s) {
							throw new F(t).init(e, s),
								t,
								t
						},
						r: function(t, e, s, a, i) {},
						w: function(t, e, s, a, i) {
							var n = B(s);
							K(t, {
								name: e = X(e),
								fromWireType: function(t) {
									return !!t
								},
								toWireType: function(t, e) {
									return e ? a : i
								},
								argPackAdvance: 8,
								readValueFromPointer: function(t) {
									var a;
									if (1 === s)
										a = d;
									else if (2 === s)
										a = v;
									else {
										if (4 !== s)
											throw new TypeError("Unknown boolean type size: " + e);
										a = m
									}
									return this.fromWireType(a[t >> n])
								},
								destructorFunction: null
							})
						},
						v: function(t, e) {
							K(t, {
								name: e = X(e),
								fromWireType: function(t) {
									var e = it.toValue(t);
									return et(t),
										e
								},
								toWireType: function(t, e) {
									return it.toHandle(e)
								},
								argPackAdvance: 8,
								readValueFromPointer: nt,
								destructorFunction: null
							})
						},
						m: function(t, e, s) {
							var a = B(s);
							K(t, {
								name: e = X(e),
								fromWireType: function(t) {
									return t
								},
								toWireType: function(t, e) {
									return e
								},
								argPackAdvance: 8,
								readValueFromPointer: rt(e, a),
								destructorFunction: null
							})
						},
						d: function(t, e, s, a, i) {
							e = X(e),
								-1 === i && (i = 4294967295);
							var n = B(s),
								r = t => t;
							if (0 === a) {
								var o = 32 - 8 * s;
								r = t => t << o >>> o
							}
							var l = e.includes("unsigned");
							K(t, {
								name: e,
								fromWireType: r,
								toWireType: l ? function(t, e) {
										return this.name,
											e >>> 0
									} :
									function(t, e) {
										return this.name,
											e
									},
								argPackAdvance: 8,
								readValueFromPointer: ot(e, n, 0 !== a),
								destructorFunction: null
							})
						},
						b: function(t, e, s) {
							var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];

							function i(t) {
								var e = _,
									s = e[t >>= 2],
									i = e[t + 1];
								return new a(e.buffer, i, s)
							}
							K(t, {
								name: s = X(s),
								fromWireType: i,
								argPackAdvance: 8,
								readValueFromPointer: i
							}, {
								ignoreDuplicateRegistrations: !0
							})
						},
						l: function(t, e) {
							var s = "std::string" === (e = X(e));
							K(t, {
								name: e,
								fromWireType: function(t) {
									var e, a = _[t >> 2],
										i = t + 4;
									if (s)
										for (var n = i, r = 0; r <= a; ++r) {
											var o = i + r;
											if (r == a || 0 == p[o]) {
												var l = C(n, o - n);
												void 0 === e ? e = l : (e += String.fromCharCode(0),
														e += l),
													n = o + 1
											}
										}
									else {
										var c = new Array(a);
										for (r = 0; r < a; ++r)
											c[r] = String.fromCharCode(p[i + r]);
										e = c.join("")
									}
									return kt(t),
										e
								},
								toWireType: function(t, e) {
									var a;
									e instanceof ArrayBuffer && (e = new Uint8Array(e));
									var i = "string" == typeof e;
									i || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || Z("Cannot pass non-string to std::string"),
										a = s && i ? S(e) : e.length;
									var n = xt(4 + a + 1),
										r = n + 4;
									if (_[n >> 2] = a,
										s && i)
										k(e, r, a + 1);
									else if (i)
										for (var o = 0; o < a; ++o) {
											var l = e.charCodeAt(o);
											l > 255 && (kt(r),
													Z("String has UTF-16 code units that do not fit in 8 bits")),
												p[r + o] = l
										}
									else
										for (o = 0; o < a; ++o)
											p[r + o] = e[o];
									return null !== t && t.push(kt, n),
										n
								},
								argPackAdvance: 8,
								readValueFromPointer: nt,
								destructorFunction: function(t) {
									kt(t)
								}
							})
						},
						h: function(t, e, s) {
							var a, i, n, r, o;
							s = X(s),
								2 === e ? (a = ct,
									i = ut,
									r = ht,
									n = () => f,
									o = 1) : 4 === e && (a = dt,
									i = pt,
									r = vt,
									n = () => _,
									o = 2),
								K(t, {
									name: s,
									fromWireType: function(t) {
										for (var s, i = _[t >> 2], r = n(), l = t + 4, c = 0; c <= i; ++c) {
											var u = t + 4 + c * e;
											if (c == i || 0 == r[u >> o]) {
												var h = a(l, u - l);
												void 0 === s ? s = h : (s += String.fromCharCode(0),
														s += h),
													l = u + e
											}
										}
										return kt(t),
											s
									},
									toWireType: function(t, a) {
										"string" != typeof a && Z("Cannot pass non-string to C++ string type " + s);
										var n = r(a),
											l = xt(4 + n + e);
										return _[l >> 2] = n >> o,
											i(a, l + 4, n + e),
											null !== t && t.push(kt, l),
											l
									},
									argPackAdvance: 8,
									readValueFromPointer: nt,
									destructorFunction: function(t) {
										kt(t)
									}
								})
						},
						x: function(t, e) {
							K(t, {
								isVoid: !0,
								name: e = X(e),
								argPackAdvance: 0,
								fromWireType: function() {},
								toWireType: function(t, e) {}
							})
						},
						f: function(t, e, s) {
							t = it.toValue(t),
								e = ft(e, "emval::as");
							var a = [],
								i = it.toHandle(a);
							return _[s >> 2] = i,
								e.toWireType(a, t)
						},
						B: function(t, e, s, a, i) {
							return (t = gt[t])(e = it.toValue(e), s = _t(s), function(t) {
								var e = [];
								return _[t >> 2] = it.toHandle(e),
									e
							}(a), i)
						},
						a: et,
						c: function(t) {
							return 0 === t ? it.toHandle(yt()) : (t = _t(t),
								it.toHandle(yt()[t]))
						},
						A: function(t, e) {
							var s = function(t, e) {
									for (var s = new Array(t), a = 0; a < t; ++a)
										s[a] = ft(_[e + 4 * a >> 2], "parameter " + a);
									return s
								}(t, e),
								a = s[0],
								i = a.name + "_$" + s.slice(1).map((function(t) {
									return t.name
								})).join("_") + "$",
								n = wt[i];
							if (void 0 !== n)
								return n;
							for (var r = ["retType"], o = [a], l = "", c = 0; c < t - 1; ++c)
								l += (0 !== c ? ", " : "") + "arg" + c,
								r.push("argType" + c),
								o.push(s[1 + c]);
							var u = "return function " + G("methodCaller_" + i) + "(handle, name, destructors, args) {\n",
								h = 0;
							for (c = 0; c < t - 1; ++c)
								u += "    var arg" + c + " = argType" + c + ".readValueFromPointer(args" + (h ? "+" + h : "") + ");\n",
								h += s[c + 1].argPackAdvance;
							for (u += "    var rv = handle[name](" + l + ");\n",
								c = 0; c < t - 1; ++c)
								s[c + 1].deleteObject && (u += "    argType" + c + ".deleteObject(arg" + c + ");\n");
							a.isVoid || (u += "    return retType.toWireType(destructors, rv);\n"),
								u += "};\n",
								r.push(u);
							var d, p, v = function(t, e) {
								if (!(t instanceof Function))
									throw new TypeError("new_ called with constructor type " + typeof t + " which is not a function");
								var s = J(t.name || "unknownFunctionName", (function() {}));
								s.prototype = t.prototype;
								var a = new s,
									i = t.apply(a, e);
								return i instanceof Object ? i : a
							}(Function, r).apply(null, o);
							return d = v,
								p = gt.length,
								gt.push(d),
								n = p,
								wt[i] = n,
								n
						},
						D: function(t) {
							return t = _t(t),
								it.toHandle(i[t])
						},
						i: function(t, e) {
							return t = it.toValue(t),
								e = it.toValue(e),
								it.toHandle(t[e])
						},
						z: function(t) {
							t > 4 && (tt[t].refcount += 1)
						},
						j: function(t) {
							return it.toHandle(_t(t))
						},
						F: function(t) {
							return !(t = it.toValue(t))
						},
						e: function(t) {
							! function(t) {
								for (; t.length;) {
									var e = t.pop();
									t.pop()(e)
								}
							}(it.toValue(t)),
							et(t)
						},
						y: function(t, e) {
							var s = (t = ft(t, "_emval_take_value")).readValueFromPointer(e);
							return it.toHandle(s)
						},
						s: function() {
							N("")
						},
						C: function(t, e, s, a) {
							if (i.su.Ng.sj) {
								var n = i.su.Ng.rj[0][4] = {};
								i.Rp(n, t, e, s, a)
							} else
								i.Rp(i.su.Pa, t, e, s, a),
								i.su.Ie.kd()
						},
						o: function(t, e, s, a, n) {
							if (i.su.Ng.sj) {
								var r = i.su.Ng.rj[0][5] = t ? {} : -1;
								t && i.Rp(r, e, s, a, n)
							} else
								t ? (i.su.rd = i.su.rd || {},
									i.Rp(i.su.rd, e, s, a, n)) : i.su.rd = null,
								i.su.Ie.qd()
						},
						p: function(t, e, s, a, n, r, o) {
							i.su.Ng.sj ? i.su.Ng.rj[0][0][e] = {
								xd: t,
								Wc: e,
								Ga: s,
								Ha: a,
								Ia: n,
								Uc: r,
								wf: o
							} : i.Sp.xi({
								xd: t,
								Wc: e,
								Ga: s,
								Ha: a,
								Ia: n,
								Uc: r,
								wf: o
							})
						},
						g: function(t, e, s) {
							i.su.Ng.sj ? (i.su.Ng.rj[0][3][t] = !0,
								i.su.Ng.rj[0][1 + e].push(t),
								e && i.su.Ng.rj[0][1 + e].push(s)) : i.Sp.Di(t, e ? s : -1)
						},
						E: function(t, e, s) {
							try {
								for (var a = i[C(t)], n = a && a[C(e)], r = n && n[C(s)], o = arguments.callee, l = 0; l < 4 + !n.Wc; l++)
									o = o.caller;
								if (o === r)
									return i.__heap_chunk_length_s || 64
							} catch (t) {
								i.PointerExeptions && i.PointerExeptions(t)
							}
							return -1
						},
						q: function(t) {
							var e = i[C(t)] + "",
								s = S(e) + 1,
								a = xt(s);
							return k(e, a, s),
								a
						},
						u: function(t) {
							p.length,
								N("OOM")
						},
						k: function() {
							return 1 + Math.floor(2147483646 * Math.random())
						},
						t: function(t, e) {
							return it.toHandle(it.toValue(t).keys(it.toValue(e)))
						}
					},
					kt = (function() {
							var t = {
								a: Ct
							};

							function e(t, e) {
								var s, a, n = t.exports;
								i.asm = n,
									h = i.asm.G,
									s = h.buffer,
									i.HEAP8 = d = new Int8Array(s),
									i.HEAP16 = v = new Int16Array(s),
									i.HEAP32 = m = new Int32Array(s),
									i.HEAPU8 = p = new Uint8Array(s),
									i.HEAPU16 = f = new Uint16Array(s),
									i.HEAPU32 = _ = new Uint32Array(s),
									i.HEAPF32 = g = new Float32Array(s),
									i.HEAPF64 = y = new Float64Array(s),
									i.asm.M,
									a = i.asm.H,
									M.unshift(a),
									function(t) {
										if (I--,
											i.monitorRunDependencies && i.monitorRunDependencies(I),
											0 == I && (null !== T && (clearInterval(T),
													T = null),
												A)) {
											var e = A;
											A = null,
												e()
										}
									}()
							}

							function s(t) {
								e(t.instance)
							}

							function a(e) {
								return (c || !r && !o || "function" != typeof fetch ? Promise.resolve().then((function() {
									return E(L)
								})) : fetch(L, {
									credentials: "same-origin"
								}).then((function(t) {
									if (!t.ok)
										throw "failed to load wasm binary file at '" + L + "'";
									return t.arrayBuffer()
								})).catch((function() {
									return E(L)
								}))).then((function(e) {
									return WebAssembly.instantiate(e, t)
								})).then((function(t) {
									return t
								})).then(e, (function(t) {
									u("failed to asynchronously prepare wasm: " + t),
										N(t)
								}))
							}
							if (I++,
								i.monitorRunDependencies && i.monitorRunDependencies(I),
								i.instantiateWasm)
								try {
									return i.instantiateWasm(t, e)
								} catch (t) {
									return u("Module.instantiateWasm callback failed with error: " + t),
										!1
								}
							c || "function" != typeof WebAssembly.instantiateStreaming || R(L) || "function" != typeof fetch ? a(s) : fetch(L, {
								credentials: "same-origin"
							}).then((function(e) {
								return WebAssembly.instantiateStreaming(e, t).then(s, (function(t) {
									return u("wasm streaming compile failed: " + t),
										u("falling back to ArrayBuffer instantiation"),
										a(s)
								}))
							}))
						}(),
						i._skid = function() {
							return (i._skid = i.asm.I).apply(null, arguments)
						},
						i._free = function() {
							return (kt = i._free = i.asm.J).apply(null, arguments)
						}
					),
					St = (i._skid3 = function() {
							return (i._skid3 = i.asm.K).apply(null, arguments)
						},
						i._skid4 = function() {
							return (i._skid4 = i.asm.L).apply(null, arguments)
						},
						i.___getTypeName = function() {
							return (St = i.___getTypeName = i.asm.N).apply(null, arguments)
						}
					),
					xt = (i.__embind_initialize_bindings = function() {
							return (i.__embind_initialize_bindings = i.asm.O).apply(null, arguments)
						},
						i._malloc = function() {
							return (xt = i._malloc = i.asm.P).apply(null, arguments)
						}
					),
					Mt = function() {
						return (Mt = i.asm.Q).apply(null, arguments)
					};
				i.___start_em_js = 3812,
					i.___stop_em_js = 3946;

				function Pt() {
					function t() {
						bt || (bt = !0,
							i.calledRun = !0,
							w || (!0,
								U(M),
								i.onRuntimeInitialized && i.onRuntimeInitialized(),
								function() {
									if (i.postRun)
										for ("function" == typeof i.postRun && (i.postRun = [i.postRun]); i.postRun.length;)
											t = i.postRun.shift(),
											P.unshift(t);
									var t;
									U(P)
								}()))
					}
					I > 0 || (! function() {
							if (i.preRun)
								for ("function" == typeof i.preRun && (i.preRun = [i.preRun]); i.preRun.length;)
									t = i.preRun.shift(),
									x.unshift(t);
							var t;
							U(x)
						}(),
						I > 0 || (i.setStatus ? (i.setStatus("Running..."),
							setTimeout((function() {
								setTimeout((function() {
										i.setStatus("")
									}), 1),
									t()
							}), 1)) : t()))
				}
				if (A = function t() {
						bt || Pt(),
							bt || (A = t)
					},
					i.preInit)
					for ("function" == typeof i.preInit && (i.preInit = [i.preInit]); i.preInit.length > 0;)
						i.preInit.pop()();
				Pt(),
					i.su = s(1620),
					i.Sp = s(8493),
					i.sv = document.currentScript,
					i.__heap_max_bytes_s = function(t) {
						return 128 & t
					},
					i.Rp = function(t, e, s, a, i) {
						t.Bi = e,
							t.Ci = s,
							t.Li = a,
							t.Mi = i,
							t.Ha = (e + a) / 2,
							t.Ia = (s + i) / 2,
							t.md = a - e,
							t.nd = i - s
					},
					t.exports = i
			},
			4103: (t, e, s) => {
				t.exports = s.p + "js/wauth3.wasm"
			}
		},
		s = {};

	function a(t) {
		var i = s[t];
		if (void 0 !== i)
			return i.exports;
		var n = s[t] = {
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, a),
			n.exports
	}
	a.m = e,
		t = [],
		a.O = (e, s, i, n) => {
			if (!s) {
				var r = 1 / 0;
				for (u = 0; u < t.length; u++) {
					for (var [s, i, n] = t[u], o = !0, l = 0; l < s.length; l++)
						(!1 & n || r >= n) && Object.keys(a.O).every((t => a.O[t](s[l]))) ? s.splice(l--, 1) : (o = !1,
							n < r && (r = n));
					if (o) {
						t.splice(u--, 1);
						var c = i();
						void 0 !== c && (e = c)
					}
				}
				return e
			}
			n = n || 0;
			for (var u = t.length; u > 0 && t[u - 1][2] > n; u--)
				t[u] = t[u - 1];
			t[u] = [s, i, n]
		},
		a.n = t => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return a.d(e, {
					a: e
				}),
				e
		},
		a.d = (t, e) => {
			for (var s in e)
				a.o(e, s) && !a.o(t, s) && Object.defineProperty(t, s, {
					enumerable: !0,
					get: e[s]
				})
		},
		a.u = t => "js/" + t + ".js",
		a.g = function() {
			if ("object" == typeof globalThis)
				return globalThis;
			try {
				return this || new Function("return this")()
			} catch (t) {
				if ("object" == typeof window)
					return window
			}
		}(),
		a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
		a.r = t => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				}),
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
		},
		(() => {
			var t;
			a.g.importScripts && (t = a.g.location + "");
			var e = a.g.document;
			if (!t && e && (e.currentScript && (t = e.currentScript.src),
					!t)) {
				var s = e.getElementsByTagName("script");
				s.length && (t = s[s.length - 1].src)
			}
			if (!t)
				throw new Error("Automatic publicPath is not supported in this browser");
			t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
				a.p = t + "../"
		})(),
		(() => {
			a.b = document.baseURI || self.location.href;
			var t = {
				179: 0
			};
			a.O.j = e => 0 === t[e];
			var e = (e, s) => {
					var i, n, [r, o, l] = s,
						c = 0;
					if (r.some((e => 0 !== t[e]))) {
						for (i in o)
							a.o(o, i) && (a.m[i] = o[i]);
						if (l)
							var u = l(a)
					}
					for (e && e(s); c < r.length; c++)
						n = r[c],
						a.o(t, n) && t[n] && t[n][0](),
						t[n] = 0;
					return a.O(u)
				},
				s = self.webpackChunkvanis_io_client = self.webpackChunkvanis_io_client || [];
			s.forEach(e.bind(null, 0)),
				s.push = e.bind(null, s.push.bind(s))
		})();
	var i = a.O(void 0, [736], (() => a(2971)));
	i = a.O(i)
})();

