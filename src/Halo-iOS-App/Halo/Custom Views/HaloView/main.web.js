! function c(a, b, d) {
    function e(g, h) {
        if (!b[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[g] = {
                exports: {}
            };
            a[g][0].call(k.exports, function(b) {
                var c = a[g][1][b];
                return e(c ? c : b)
            }, k, k.exports, c, a, b, d)
        }
        return b[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        (function(b) {
            function c(a) {
                u.halo && u.halo.setMode(a)
            }

            function d(a, b) {
                u.halo && (u.dirty = !0, "scale" == a ? u.camera.setFov(b) : u.halo.setGlobalParam(a, b))
            }

            function e(a) {
                u.halo && Object.keys(a).forEach(function(b) {
                    d(b, a[b])
                })
            }

            function f(a) {
                u.arcball && u.arcball.setPosition([1, 1, 1])
            }

            function g(a) {
                u.halo && u.halo.addTimeStamp(a)
            }

            function h() {
                u.halo && (u.halo.ringInstances = [], u.halo.waveInstances = [])
            }

            function i(a) {
                console.log("HaloInitialize", a || ""), opts = {
                    width: 1280,
                    height: 720,
                    scale: 100,
                    limitedGUI: !1
                };
                for (var b in a)
                    if (a.hasOwnProperty(b))
                        if ("initialState" == b) {
                            var c = a[b];
                            for (var d in c) c.hasOwnProperty(d) && (u[d] = c[d])
                        } else opts[b] = a[b];
                opts.assetsPath && (t = opts.assetsPath), j.create({
                    settings: {
                        width: opts.width,
                        height: opts.height,
                        canvas: p ? document.getElementById("haloCanvas") : null,
                        fullScreen: opts.fullScreen,
                        pixelRatio: q ? 2 : 1
                    },
                    init: function() {
                        var a = this.getContext(),
                            b = this.getWidth(),
                            c = this.getHeight();
                        this.fx = r(a), u.halo = this.halo = new o(a, this, {
                            lineDotsTexture: p ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAACMGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BY29ybiB2ZXJzaW9uIDQuNS42PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjkwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45MDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cv3R9vgAAAESSURBVHgB7dTBDQAgDMSwism7ObBFPmaBSC66ue3b8VKBf/4Nv4D7p9efOXFfngCBUMAAhPjSBGoBA1BfQJ9AKGAAQnxpArWAAagvoE8gFDAAIb40gVrAANQX0CcQChiAEF+aQC1gAOoL6BMIBQxAiC9NoBYwAPUF9AmEAgYgxJcmUAsYgPoC+gRCAQMQ4ksTqAUMQH0BfQKhgAEI8aUJ1AIGoL6APoFQwACE+NIEagEDUF9An0AoYABCfGkCtYABqC+gTyAUMAAhvjSBWsAA1BfQJxAKGIAQX5pALWAA6gvoEwgFDECIL02gFjAA9QX0CYQCBiDElyZQCxiA+gL6BEIBAxDiSxOoBQxAfQF9AqHAA8/R/cI9DrF6AAAAAElFTkSuQmCC" : t + "/textures/line-dots.png",
                            lineSolidTexture: p ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAIAAAByyzGzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAACMGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BY29ybiB2ZXJzaW9uIDQuNS40PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjkwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45MDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CgvZ/TsAAAC3SURBVHgB7dMBFQAgDIRQtX/n7ZmDvwZw487McQxUDbwqOG4GvgEB+IO0AQGk5wcvAD+QNiCA9PzgBeAH0gYEkJ4fvAD8QNqAANLzgxeAH0gbEEB6fvAC8ANpAwJIzw9eAH4gbUAA6fnBC8APpA0IID0/eAH4gbQBAaTnBy8AP5A2IID0/OAF4AfSBgSQnh+8APxA2oAA0vODF4AfSBsQQHp+8ALwA2kDAkjPD14AfiBtQADp+cEvr0sDPePH0dAAAAAASUVORK5CYII=" : t + "/textures/line-solid.png",
                            colorTexture: p ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAABACAYAAABsv8+/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHXSURBVHic7dZLTuNAAEDB7pxo5v53S7OAiAAxsQ2aWbwqKcJOuz9BXrz55+9ac4xx+4y767k+3X8e3/ju0P06t8ahORt7/Pjs99+tX1jj2f06Mefovgf3OLXvjvfq6/0ac6y3v9fXg95dv45dN555PDbHGmPtmX99uP9tztM9Np85MX99nX+7P77/x9/13fznzzwYW8fO+P7Mmf33zf/23VmP9jgwf+vdm2uMyxzjMt4+T67njmc+XG+MzyNrHFtnnVlvntn/N/4/e85yt3bI5X8fAAD49wQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgKAXcnS/sfhruFcAAAAASUVORK5CYII=" : t + "/textures/calories-gradient.png",
                            gridColorTexture: p ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAIAAAByyzGzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAACMGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BY29ybiB2ZXJzaW9uIDQuNS40PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjkwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45MDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CgvZ/TsAAAC3SURBVHgB7dMBFQAgDIRQtX/n7ZmDvwZw487McQxUDbwqOG4GvgEB+IO0AQGk5wcvAD+QNiCA9PzgBeAH0gYEkJ4fvAD8QNqAANLzgxeAH0gbEEB6fvAC8ANpAwJIzw9eAH4gbUAA6fnBC8APpA0IID0/eAH4gbQBAaTnBy8AP5A2IID0/OAF4AfSBgSQnh+8APxA2oAA0vODF4AfSBsQQHp+8ALwA2kDAkjPD14AfiBtQADp+cEvr0sDPePH0dAAAAAASUVORK5CYII=" : t + "/textures/line-solid.png"
                        }), Object.keys(u).forEach(function(a) {
                            this.halo.setGlobalParam(a, u[a])
                        }.bind(this)), this.initGUI();
                        var d = opts.scale;
                        u.camera = new k(d, b / c), u.camera.setPosition([0, 3, 0]), u.camera.setUp([0, 0, 1]), u.camera2D = new l(0, 0, b, c), opts.arcball !== !1 && (u.arcball = new m(u.camera, b, c), this.addEventListener(u.arcball)), a.setProjectionMatrix(u.camera.getProjectionMatrix()), a.setViewMatrix(u.camera.getViewMatrix())
                    },
                    onWindowResize: function() {
                        u.camera.setAspectRatio(this.getWidth() / this.getHeight()), this.ctx.viewport(0, 0, this.getWidth(), this.getHeight())
                    },
                    initGUI: function() {
                        this.gui = new n(this.getContext(), this.getWidth(), this.getHeight()), this.addEventListener(this.gui), p && opts.gui !== !0 ? this.gui.toggleEnabled() : q && this.gui.toggleEnabled(), this.gui.addHeader("Global Params"), opts.limitedGUI !== !0 && (this.gui.addParam("Global size", u, "size", {}, function(a) {
                            this.halo.setGlobalParam("size", a)
                        }.bind(this)), this.gui.addParam("Global color", u, "color", {}, function(a) {
                            this.halo.setGlobalParam("color", a)
                        }.bind(this)), this.gui.addParam("Global color (multiple)", u, "colorStr", {}, function(a) {
                            var b = a.split(",").map(function(a) {
                                return parseFloat(a)
                            }).filter(function(a) {
                                return !isNaN(a)
                            });
                            console.log("colorRatios", b), this.halo.setGlobalParam("color", b)
                        }.bind(this)), this.gui.addParam("Global color center", u, "colorCenter", {}, function(a) {
                            this.halo.setGlobalParam("colorCenter", a)
                        }.bind(this)), this.gui.addParam("Global color ratio", u, "colorCenterRatio", {}, function(a) {
                            this.halo.setGlobalParam("colorCenterRatio", a)
                        }.bind(this))), this.gui.addParam("Global complexity", u, "complexity", {}, function(a) {
                            this.halo.setGlobalParam("complexity", a)
                        }.bind(this)), this.gui.addParam("Global wobble", u, "wobble", {}, function(a) {
                            this.halo.setGlobalParam("wobble", a)
                        }.bind(this)), this.gui.addParam("Global wobble fadeout", u, "wobbleFadeout", {}, function(a) {
                            this.halo.setGlobalParam("wobbleFadeout", a)
                        }.bind(this)), this.gui.addParam("Global speed", u, "speed", {}, function(a) {
                            this.halo.setGlobalParam("speed", a)
                        }.bind(this)), this.gui.addParam("Lateral speedup", u, "lateralSpeedup", {
                            min: 0,
                            max: 5
                        }, function(a) {
                            this.halo.setGlobalParam("lateralSpeedup", a)
                        }.bind(this)), this.gui.addParam("Horizontal Noise", u, "horizontalNoiseScale", {
                            min: 0,
                            max: 1
                        }, function(a) {
                            this.halo.setGlobalParam("horizontalNoiseScale", a)
                        }.bind(this)), opts.limitedGUI !== !0 && (this.gui.addParam("Global brightness", u, "brightness", {}, function(a) {
                            this.halo.setGlobalParam("brightness", a)
                        }.bind(this)), this.gui.addParam("Global background", u, "background", {}, function(a) {
                            this.halo.setGlobalParam("background", a)
                        }.bind(this)), this.gui.addParam("Global glow", u, "glow", {}, function(a) {
                            this.halo.setGlobalParam("glow", a)
                        }.bind(this)), this.gui.addParam("Global growth", u, "growth", {}, function(a) {
                            this.halo.setGlobalParam("growth", a)
                        }.bind(this))), this.gui.addHeader("Additional Params"), this.gui.addParam("ringResolution", u, "ringResolution", {
                            min: 24,
                            max: 256
                        }, function(a) {
                            this.halo.setGlobalParam("ringResolution", a)
                        }.bind(this)), opts.limitedGUI !== !0 && (this.gui.addTexture2D("Line solid", this.halo.lineSolidTexture).setPosition(180, 10), this.gui.addTexture2D("Line dots", this.halo.lineDotsTexture), this.gui.addTexture2D("Grid color", this.halo.gridColorTexture), this.gui.addTexture2D("Color spectrum (overrides texture)", this.halo.colorSpectrumTexture)), this.gui.addParam("Max num rings", u, "maxNumRings", {
                            min: 1,
                            max: 100
                        }, function(a) {
                            this.halo.setGlobalParam("maxNumRings", a)
                        }.bind(this)), this.gui.addTexture2D("Color texture", this.halo.colorTexture), this.gui.addParam("Min ring radius", u, "minRingRadius", {}, function(a) {
                            this.halo.setGlobalParam("minRingRadius", a)
                        }.bind(this)), this.gui.addParam("Highlight ring", u, "highlightRing", {}, function(a) {
                            this.halo.setGlobalParam("highlightRing", a)
                        }.bind(this)), this.gui.addParam("Even line distribution", u, "evenLineDistribution", {}, function(a) {
                            this.halo.setGlobalParam("evenLineDistribution", a)
                        }.bind(this)), this.gui.addParam("Aura opacity", u, "auraOpacity", {}, function(a) {
                            this.halo.setGlobalParam("auraOpacity", a)
                        }.bind(this)), this.gui.addParam("Wave intensity", u, "waveIntensity", {
                            min: 0,
                            max: 1
                        }, function(a) {
                            this.halo.setGlobalParam("waveIntensity", a)
                        }.bind(this)), this.gui.addParam("Wave speed", u, "waveSpeed", {}, function(a) {
                            this.halo.setGlobalParam("waveSpeed", a)
                        }.bind(this)), this.gui.addParam("Wave count", u, "waveCount", {
                            min: 0,
                            max: 6,
                            step: 1
                        }, function(a) {
                            this.halo.setGlobalParam("waveCount", a)
                        }.bind(this)), this.gui.addParam("Wave color", u, "waveColor", {}, function(a) {
                            this.halo.setGlobalParam("waveColor", a)
                        }.bind(this)), this.gui.addParam("Stratified", u, "stratified", {}, function(a) {
                            this.halo.setGlobalParam("stratified", a)
                        }.bind(this)), opts.limitedGUI !== !0 && (this.gui.addParam("Solid lines", u, "solidLines", {}, function(a) {
                            this.halo.setGlobalParam("solidLines", a)
                        }.bind(this)), this.gui.addParam("Show grid", u, "showGrid", {}, function(a) {
                            this.halo.setGlobalParam("showGrid", a)
                        }.bind(this)), this.gui.addButton("Add few more data points", function() {
                            for (var a = s["int"](2, 10), b = 0; a > b; b++) {
                                var c = s.chance(.3);
                                g({
                                    color: .1 + (c ? s["float"](0, .8) : 0),
                                    complexity: .5 + (c ? s["float"](0, .1) : 0),
                                    speed: .2
                                })
                            }
                        }.bind(this)), this.gui.addButton("Reset data points", function() {
                            h()
                        }.bind(this)))
                    },
                    onKeyPress: function(a) {
                        "G" == a.str && this.gui.toggleEnabled(), "d" == a.str && (u.debug = !0)
                    },
                    drawScene: function() {
                        var a = this.getContext();
                        a.pushState(a.COLOR_BIT | a.DEPTH_BIT | a.BLEND_BIT), a.pushViewMatrix(), a.pushProjectionMatrix(), a.setProjectionMatrix(u.camera.getProjectionMatrix()), a.setViewMatrix(u.camera.getViewMatrix()), a.setClearColor(0, 0, 0, 0), a.setBlend(!0), a.setBlendFunc(a.ONE, a.ONE), a.setDepthTest(!1), a.setDepthMask(0), a.clear(a.COLOR_BIT), this.halo.draw(u.camera, u.camera2D, this.getWidth(), this.getHeight()), a.popViewMatrix(), a.popProjectionMatrix(), a.popState()
                    },
                    drawSceneGlow: function() {
                        var a = this.getContext();
                        a.pushState(a.COLOR_BIT | a.DEPTH_BIT | a.BLEND_BIT), a.pushViewMatrix(), a.pushProjectionMatrix(), a.setProjectionMatrix(u.camera.getProjectionMatrix()), a.setViewMatrix(u.camera.getViewMatrix()), a.setClearColor(this.halo.backgroundTransparent[0], this.halo.backgroundTransparent[1], this.halo.backgroundTransparent[2], this.halo.backgroundTransparent[3]), a.clear(a.COLOR_BIT | a.DEPTH_BIT), this.halo.drawSolid(u.camera, u.camera2D, this.getWidth(), this.getHeight()), a.popViewMatrix(), a.popProjectionMatrix(), a.popState()
                    },
                    draw: function() {
                        var a = this.getContext();
                        if (a.setClearColor(this.halo.background[0], this.halo.background[1], this.halo.background[2], 1), a.clear(a.COLOR_BIT | a.DEPTH_BIT), a.setDepthTest(!0), !(this.getTime().getElapsedFrames() < 5)) {
                            var b = this.getWidth(),
                                c = this.getHeight();
                            u.arcball && u.arcball.apply(), this.halo.update();
                            var d = this.fx.reset(),
                                e = d.render({
                                    drawFunc: this.drawScene.bind(this),
                                    width: b,
                                    height: c
                                });
                            a.setBlend(!1), glow = d.render({
                                drawFunc: this.drawSceneGlow.bind(this)
                            }).downsample4().downsample2().blur5().blur5();
                            var f = e.add(glow, {
                                scale: this.halo.glow
                            });
                            this.halo.background[0] + this.halo.background[1] + this.halo.background[2] == 0;
                            a.setClearColor(this.halo.background[0], this.halo.background[1], this.halo.background[2], 1), a.clear(a.COLOR_BIT), f.blit({
                                width: b,
                                height: c
                            }), this.gui && (this.gui.enabled && u.dirty && (this.gui.items[0].dirty = !0, u.dirty = !1), this.gui.draw())
                        }
                    }
                })
            }
            var j = a("pex-sys/Window"),
                k = (a("pex-color"), a("pex-math/Vec3"), a("pex-math/Vec2"), a("pex-cam").PerspCamera),
                l = a("pex-cam").OrthoCamera,
                m = a("pex-cam").Arcball,
                n = a("pex-gui"),
                o = a("ora-halo"),
                p = a("is-browser"),
                q = a("is-ios"),
                r = a("pex-fx"),
                s = a("pex-random"),
                t = p ? "/assets" : b + "/../assets",
                u = {
                    halo: null,
                    camera: null,
                    arcball: null,
                    size: .6,
                    color: .05,
                    colorStr: "0.5,0.5",
                    colorCenter: 0,
                    colorCenterRatio: 0,
                    highlightRing: .8,
                    complexity: .7,
                    brightness: 1,
                    speed: .5,
                    colorTextureIndex: 0,
                    wobble: 0,
                    wobbleFadeout: 1,
                    debug: !0,
                    growth: .01,
                    background: [0, 0, 0, 1],
                    glow: .75,
                    growth: .05,
                    solidLines: !0,
                    showGrid: !1,
                    evenLineDistribution: !0,
                    minRingRadius: .35,
                    minNumRings: 10,
                    maxNumRings: 80,
                    ringResolution: 128,
                    auraOpacity: .5,
                    waveColor: .5,
                    waveCount: 0,
                    waveIntensity: 0,
                    waveSpeed: .15,
                    stratified: !1,
                    lateralSpeedup: 2,
                    horizontalNoiseScale: 1,
                    complexityFrequency: 1.2
                };
            p ? (window.HaloSetMode = c, window.HaloSetGlobalParam = d, window.HaloSetGlobalParams = e, window.HaloAddTimeStamp = g, window.HaloResetTimeStamps = h, window.HaloInitialize = i, window.HaloResetCamera = f) : (i(), c("present"), e({}))
        }).call(this, "/app")
    }, {
        "is-browser": 103,
        "is-ios": 105,
        "ora-halo": 6,
        "pex-cam": 125,
        "pex-color": 127,
        "pex-fx": 151,
        "pex-gui": 159,
        "pex-math/Vec2": 171,
        "pex-math/Vec3": 172,
        "pex-random": 175,
        "pex-sys/Window": 185
    }],
    2: [function(a, b, c) {
        function d(a) {
            a = a.replace(/^#/, "");
            var b = parseInt(a, 16),
                c = [0, 0, 0, 0];
            return c[0] = (b >> 16 & 255) / 255, c[1] = (b >> 8 & 255) / 255, c[2] = (255 & b) / 255, c[3] = 1, c
        }

        function e(a) {
            for (var b = [], c = 0; a > c; c++) b.push(c);
            return b
        }

        function f(a, b) {
            return e(b).map(function(c) {
                return l(a, c / b)
            })
        }

        function g(a, b, c) {
            var d = f(a, b),
                e = document.createElement("canvas");
            e.width = b, e.height = c;
            var g = e.getContext("2d");
            return d.forEach(function(a, b) {
                var d = 255 * a[0] | 0,
                    e = 255 * a[1] | 0,
                    f = 255 * a[2] | 0;
                g.fillStyle = "rgb(" + d + "," + e + "," + f + ")", g.fillRect(b, 0, 1, c)
            }), e
        }

        function h(a, b, c) {
            var d = f(a, b),
                e = k.SkCanvas.create(b, c),
                g = new k.SkPaint;
            return d.forEach(function(a, b) {
                g.setColor(255 * a[0] | 0, 255 * a[1] | 0, 255 * a[2] | 0, 255), e.drawRect(g, b, 0, b + 1, c)
            }), e
        }

        function i(a, b, c) {
            return "string" == typeof a[0] && (a = a.map(d)), j ? g(a, b, c) : h(a, b, c)
        }
        var j = a("is-browser"),
            k = j ? {} : a("plask"),
            l = a("interpolate-arrays");
        b.exports = i
    }, {
        "interpolate-arrays": 102,
        "is-browser": 103,
        plask: 49
    }],
    3: [function(a, b, c) {
        function d(a) {
            var b = {
                positions: [],
                cells: [],
                uvs: []
            };
            return a = a || {}, a.cellSize = a.cellSize || 3, a.x = a.x || 0, a.y = a.y || 0, a.z = a.z || 0, a.startRadian = a.startRadian || 0, a.endRadian = a.endRadian || 1.5 * Math.PI, a.innerRadius = "number" == typeof a.innerRadius ? a.innerRadius : 40, a.outerRadius = a.outerRadius || 200, a.numBands = a.numBands || 2, a.numSlices = a.numSlices || 40, a.drawOutline = void 0 !== a.drawOutline ? a.drawOutline : !0, e(a, b.positions, b.cells, b.uvs), b
        }

        function e(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a, m = l.cellSize, n = l.endRadian - l.startRadian, o = Math.floor(Math.abs(n) / (2 * Math.PI) * l.numSlices), p = n / o, q = (l.outerRadius - l.innerRadius) / (l.numBands - 1), r = 0, s = o; s >= r; r++) {
                e = r * p + l.startRadian, k = (r - 1) * l.numBands, j = r * l.numBands;
                for (var t = 0, u = l.numBands; u > t; t++) i = l.innerRadius + q * t, f = Math.cos(e) * i + l.x, g = l.y, h = Math.sin(e) * i + l.z, b.push([f, g, h]), d.push([r / s, t / (u - 1)]), 1 == m ? c.push([j + t]) : 2 == m ? r > 0 && u > t + 1 && (c.push([k + t, j + t]), c.push([j + t + 1, k + t + 1]), l.drawOutline || c.push([j + t, j + t + 1])) : 3 == m && r > 0 && u > t + 1 && (c.push([j + t, k + t + 1, k + t]), c.push([j + t, j + t + 1, k + t + 1]))
            }
            if (2 == m && n % Math.PI * 2 != 0) {
                for (var t = 0, u = l.numBands - 1; u > t; t++) c.push([j + t, j + t + 1]);
                j = 0;
                for (var t = 0, u = l.numBands - 1; u > t; t++) c.push([j + t, j + t + 1])
            }
        }
        b.exports = d
    }, {}],
    4: [function(a, b, c) {
        function d(a, b) {
            if (b >= 1) return a[a.length - 1];
            if (1 == a.length) return a[0];
            var c = a.length - 1,
                d = b * c,
                f = Math.floor(d),
                g = d - f;
            return e(a[f], a[f + 1], g)
        }
        var e = a("lerp-array");
        b.exports = d
    }, {
        "lerp-array": 108
    }],
    5: [function(a, b, c) {
        function d(a, b, c, d, e) {
            a = a || 1, b = b || 16, c = c || 0, d = d || 1, e = void 0 === e ? !1 : !0;
            for (var f = e ? b - 1 : b, g = [], h = 0; b > h; h++) {
                var i = [0, 0, 0],
                    j = 2 * Math.PI * h / f;
                i[c] = a * Math.cos(j), i[d] = a * Math.sin(j), g.push(i)
            }
            return g
        }
        b.exports = d
    }, {}],
    6: [function(a, b, c) {
        function d(a, b, c) {
            this.ctx = a, this.window = b, this.minRingRadius = .2, this.maxRingRadius = 1, this.minNumRings = 10, this.maxNumRings = 80, this.size = 0, this.speed = .5, this.lateralSpeedup = 2, this.horizontalNoiseScale = 1, this.color = 0, this.colorCenter = 0, this.colorCenterRatio = 0, this.complexity = 0, this.brightness = 1, this.wobble = 0, this.wobbleFadeout = 1, this.time = 0, this.mode = u.PRESENT, this.enableLabels = !1, this.background = [0, 0, 0, 1], this.backgroundTransparent = [0, 0, 0, 0], this.grid = [.75, .75, .75, 1], this.showGrid = !0, this.spectrum = [
                [.1, .1, .1, 1]
            ], this.growth = .05, this.glow = .75, this.scale = 40, this.ringResolution = 128, this.stratified = !1, this.showAuraAtRing = -1, this.auraOpacity = .5, this.amplitudeScale = 1, this.highlightRing = .8, this.complexityFrequency = 1.2, this.ringInstances = [], this.waveInstances = [], this.waveIntensity = 0, this.waveSpeed = .15, this.waveColor = .5, this.waveCount = 0, this.buildMesh(c), this.gridLineInstances = [], this.gridLineLabels = [], this.updateGridLines(), this.solidLines = !1, this.evenLineDistribution = !1, this.buildAura()
        }
        var e = (a("pex-math/Vec3"), a("pex-math/Vec2"), a("pex-color")),
            f = a("make-circle"),
            g = a("re-map"),
            h = (a("ramda"), a("create-gradient")),
            i = a("is-browser"),
            j = a("pex-io"),
            k = a("geo-arc"),
            l = a("pex-math/Utils"),
            m = a("interpolate-floats"),
            n = Math.floor,
            o = (Math.pow, l.smoothstep),
            p = l.clamp,
            q = (l.lerp, '#define GLSLIFY 1\nfloat remap(float v, float oldmin, float oldmax, float newmin, float newmax) {\n  return newmin + (v - oldmin)/(oldmax - oldmin)*(newmax - newmin);\n}\n\nuniform mat4 uProjectionMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uModelMatrix;\n\nuniform float radius;\nuniform float radiusHeightScale;\nuniform float radiusHeightLocalScale;\nuniform float complexity;\nuniform float time;\nuniform float time5;\nuniform float speed;\nuniform float wobble;\nuniform float wobbleFadeout;\nuniform float wobbleFrequency;\nuniform float horizontalOffset;\nuniform float horizontalOffset2;\nuniform float amplitudeScale;\nuniform float lateralSpeedup;\nuniform float horizontalNoiseScale;\nuniform float complexityFrequency;\nuniform bool stratified;\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nconst float PI = 3.14159265359;\n\n//\n// GLSL textureless classic 2D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-08-22\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289_2_0(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_2_1(vec4 x)\n{\n  return mod289_2_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_2_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec2 fade_2_3(vec2 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise_2_4(vec2 P)\n{\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod289_2_0(Pi); // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n\n  vec4 i = permute_2_1(permute_2_1(ix) + iy);\n\n  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;\n  vec4 gy_2_5 = abs(gx) - 0.5 ;\n  vec4 tx_2_6 = floor(gx + 0.5);\n  gx = gx - tx_2_6;\n\n  vec2 g00 = vec2(gx.x,gy_2_5.x);\n  vec2 g10 = vec2(gx.y,gy_2_5.y);\n  vec2 g01 = vec2(gx.z,gy_2_5.z);\n  vec2 g11 = vec2(gx.w,gy_2_5.w);\n\n  vec4 norm = taylorInvSqrt_2_2(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n\n  vec2 fade_xy = fade_2_3(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return 2.3 * n_xy;\n}\n\n\n\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_7(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_7(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_8(vec4 x)\n{\n  return mod289_1_7(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_9(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade_1_10(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise_1_11(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289_1_7(Pi0);\n  Pi1 = mod289_1_7(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute_1_8(permute_1_8(ix) + iy);\n  vec4 ixy0 = permute_1_8(ixy + iz0);\n  vec4 ixy1 = permute_1_8(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt_1_9(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt_1_9(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade_1_10(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n\n\n\nvoid main() {\n  float t = aTexCoord0.x;\n  vec3 pos = aPosition.xyz;\n  if (!stratified) {\n    pos *= radius;\n  }\n  float x = pos.x;\n  float z = pos.z;\n  float nx = x * 14.0; //remaping 0..1 to 3..14 radius of original halo\n  float nz = z * 14.0; //remaping 0..1 to 3..14 radius of original halo\n  float horizontalNoiseScaleValue = horizontalNoiseScale;\n  if (stratified) {\n    pos *= radius;\n    x *= radius;\n    z *= radius;\n    horizontalNoiseScaleValue = 0.5;\n  }\n\n\n\n  float sinValue = sin( t * PI * 2.0 );\n  float cosValue = cos( t * PI * 2.0 );\n\n  float rampedComplexity = complexity;\n  float frequency = remap(rampedComplexity, 0.0, 1.0, 0.1, complexityFrequency);\n  float amplitude = radiusHeightScale * (1.0 - (1.0 - radiusHeightLocalScale) * (1.0 - radiusHeightLocalScale)); //remaping 0..1 to 3..14 radius of original halo\n\n  float amplitude2 = 3.0 * (1.0 - (1.0 - radiusHeightLocalScale) * (1.0 - radiusHeightLocalScale)); //remaping 0..1 to 3..14 radius of original halo\n\n  float horizontalFrequency = rampedComplexity * 1.0 * complexityFrequency;\n  float horizontalAmplitude = horizontalNoiseScaleValue * radiusHeightScale * amplitude2 * complexity; //remaping 0..1 to 3..14 radius of original halo\n  float horizontalSpeed = speed;\n  float horizontalOffsetAmplitude = amplitudeScale * sin(horizontalOffset/5.0 * PI) / 5.0; //remaping 0..1 to 3..14 radius of original halo\n  float horizontalOffsetAmplitude2 = amplitudeScale * sin(horizontalOffset2/5.0 * PI) / 5.0; //remaping 0..1 to 3..14 radius of original halo\n  float wobbleAmplitude = wobble * (1.0 - wobbleFadeout + (wobbleFadeout * radiusHeightLocalScale * amplitude));\n\n  vec2 noiseDir = vec2(frequency * nx + time * (speed + lateralSpeedup), frequency * nz + time * (speed + lateralSpeedup));\n\n  vec2 wobbleDir = vec2( wobbleFrequency * nx + time * speed, wobbleFrequency * nz + time * speed );\n\n  float y = amplitudeScale * amplitude * ( 0.5 + 0.5 * cnoise_2_4( noiseDir ));\n\n  vec2 horizontalNoiseDir = vec2( horizontalFrequency * nx, horizontalFrequency * nz);\n  horizontalNoiseDir -= normalize(horizontalNoiseDir) * horizontalOffset;\n\n  vec2 horizontalNoiseDir2 = vec2( horizontalFrequency * nx, horizontalFrequency * nz);\n  horizontalNoiseDir2 -= normalize(horizontalNoiseDir2) * horizontalOffset2;\n\n  float perlin1 = cnoise_2_4( horizontalNoiseDir );\n  float perlin2 = cnoise_2_4( horizontalNoiseDir2 );\n  float perlin3 = cnoise_2_4( wobbleDir );\n\n  x += horizontalOffsetAmplitude * horizontalAmplitude * ( perlin1 ) * cosValue;\n  z += horizontalOffsetAmplitude * horizontalAmplitude * ( perlin1 ) * sinValue;\n\n  x += horizontalOffsetAmplitude2 * horizontalAmplitude * ( perlin2 ) * cosValue;\n  z += horizontalOffsetAmplitude2 * horizontalAmplitude * ( perlin2 ) * sinValue;\n\n  //wobble\n  x += wobbleAmplitude * ( perlin3 ) * cosValue;\n  z += wobbleAmplitude * ( perlin3 ) * sinValue;\n\n  pos.x += x;\n  pos.y = y;\n  pos.z += z;\n\n  vTexCoord = aTexCoord0;\n\n  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n}\n'),
            r = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D lineTexture;\nuniform sampler2D colorTexture;\nuniform float radiusHeightScale;\n\nuniform float radius;\nuniform float complexity;\nuniform float color;\nuniform float colorCenter;\nuniform float colorCenterRatio;\nuniform vec4  colorOverride;\nuniform float brightness;\nuniform float alpha;\nuniform float opacity;\nuniform float index;\nuniform float lineType;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  vec2 lineTextureScale = vec2(floor(150.0 * radius * (1.0 + complexity)), 1.0);\n  vec4 linePattern = texture2D(lineTexture, (1.0 - lineType) * vTexCoord * lineTextureScale);\n  vec4 lineColorOutside  = texture2D(colorTexture, vec2(color, 0.5));\n  vec4 lineColorCenter  = texture2D(colorTexture, vec2(colorCenter, 0.5));\n\n\n\n  //0....ratio.....1\n  //0    1         1\n  float k = 1.0;\n  float ratio = 2.0 * colorCenterRatio;\n  if (index < ratio && ratio > 0.0) {\n    k = index / ratio;\n  }\n  vec4 lineColor = mix(lineColorCenter, lineColorOutside, k);\n\n  if (color < 0.0) {\n      lineColor = vec4(1.0);\n  }\n\n  gl_FragColor = linePattern * lineColor;\n\n  gl_FragColor *= alpha * brightness * opacity;\n}\n",
            s = "#define GLSLIFY 1\nattribute vec4 aPosition;\nattribute vec2 aTexCoord0;\n\nuniform mat4 uProjectionMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uModelMatrix;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aPosition;\n    vTexCoord = aTexCoord0;\n}\n",
            t = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\nuniform float opacity;\n\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.25 * (1.0-vTexCoord.y), 1.0);\n    gl_FragColor *= vec4(smoothstep(0.0, 0.1, vTexCoord.y));\n    gl_FragColor.rgb *= opacity;\n}\n",
            u = {
                PRESENT: "present",
                TIMELINE: "timeline"
            };
        i && (j.loadImage = function(a, b) {
            var c = new Image;
            c.onload = function() {
                b(null, c)
            }, c.onerror = function(a) {
                console.log("err", a)
            }, c.src = a
        }), d.prototype.buildMesh = function(a) {
            var b = this.ctx,
                c = this.lineDotsTexture = b.createTexture2D(null, 256, 32, {
                    repeat: !0,
                    mipmap: !0
                });
            j.loadImage(a.lineDotsTexture, function(a, d) {
                c.update(d, d.width, d.height, {
                    repeat: !0,
                    mipmap: !0
                }), b.bindTexture(c)
            }.bind(this));
            var d = this.lineSolidTexture = b.createTexture2D(null, 256, 32, {
                repeat: !0,
                mipmap: !0
            });
            j.loadImage(a.lineSolidTexture, function(a, e) {
                d.update(e, e.width, e.height, {
                    repeat: !0,
                    mipmap: !0
                }), b.bindTexture(c)
            }.bind(this));
            var e = this.colorTexture = b.createTexture2D(null, 256, 32);
            j.loadImage(a.colorTexture, function(a, b) {
                e.update(b, b.width, b.height, {
                    repeat: !1
                })
            });
            var f = (this.colorSpectrumTexture = b.createTexture2D(h(this.spectrum, 256, 32), 256, 32), this.gridColorTexture = b.createTexture2D(h([this.grid], 256, 32), 256, 32));
            this.ringProgram = b.createProgram(q, r), this.gridProgram = b.createProgram(q, r), this.defaultRingUniforms = {
                lineTexture: c,
                colorTexture: e
            }, this.defaultGridUniforms = {
                lineTexture: c,
                colorTexture: f
            }, this.updateGeometry(this.mode)
        }, d.prototype.buildAura = function() {
            var a = this.ctx,
                b = k({
                    cellSize: 3,
                    x: 0,
                    y: 0,
                    z: 0,
                    startRadian: 0,
                    endRadian: 2 * Math.PI,
                    innerRadius: 2,
                    outerRadius: 2.5,
                    numBands: 2,
                    numSlices: 40,
                    drawOutline: !1
                }),
                c = [{
                    data: b.positions,
                    location: a.ATTRIB_POSITION
                }, {
                    data: b.uvs,
                    location: a.ATTRIB_TEX_COORD_0
                }],
                d = {
                    data: b.cells,
                    usage: a.STATIC_DRAW
                };
            this.auraMesh = a.createMesh(c, d, a.TRIANGLES), this.auraProgram = a.createProgram(s, t)
        }, d.prototype.setMode = function(a) {
            this.mode = a, this.ringInstances = [], this.updateGeometry(this.mode)
        }, d.prototype.updateGeometry = function(a) {
            var b = this.ctx,
                c = this.ringResolution,
                d = f(1, c, 0, 2, !0),
                e = d.map(function(a, b) {
                    return [b / (d.length - 1), 0]
                }),
                g = d.map(function(a, b) {
                    return [b, (b + 1) % d.length]
                });
            g.pop();
            var h = [{
                    data: d,
                    location: b.ATTRIB_POSITION
                }, {
                    data: e,
                    location: b.ATTRIB_TEX_COORD_0
                }],
                i = {
                    data: g,
                    usage: b.STATIC_DRAW
                };
            this.ringMesh, this.ringMesh = b.createMesh(h, i, b.LINES), this.gridMesh = b.createMesh(h, i, b.LINES)
        }, d.prototype.updateGridLines = function() {
            this.gridLineInstances = [];
            for (var a = 10, b = 1; a >= b; b++) {
                var c = b / a,
                    d = this.evenLineDistribution ? c : 1 - (c - 1) * (c - 1),
                    e = g(d, 0, 1, this.minRingRadius, 1.1 * this.maxRingRadius);
                if (this.gridLineInstances.push({
                        uniforms: {
                            radius: e,
                            color: 0,
                            colorCenter: 0,
                            colorCenterRatio: 0,
                            complexity: 0,
                            speed: .5,
                            time: 0,
                            alpha: .5,
                            brightness: 1,
                            wobble: 0,
                            wobbleFadeout: this.wobbleFadeout,
                            wobbleFrequency: .08,
                            horizontalOffset: 0,
                            horizontalOffset2: 2.5,
                            stratified: this.stratified,
                            amplitudeScale: this.amplitudeScale
                        }
                    }), b >= 2 && this.enableLabels) {
                    var f = "" + b / 10;
                    "1" == f && (f = "1.0");
                    var h = new TextBox("" + f, "Arial", 10, {
                        origin: TextBox.Origin.Left
                    });
                    h.radius = e, this.gridLineLabels[b] = h
                }
            }
        }, d.prototype.setGlobalParam = function(a, b) {
            if (void 0 !== this[a] && "function" != typeof this[a] && ("background" == a ? Array.isArray(b) ? this[a] = b : this[a] = e.fromHex(b) : "colorTexture" == a ? this.setColorTexture(b) : "spectrum" == a ? this.setColorSpectrum(b) : "waveIntensity" == a ? (console.log("waveIntensity", b), this.waveCount = Math.ceil(8 * b), this.waveSpeed = .1 + .15 * b) : "color" == a ? (Array.isArray(b) || (b = [b]), 0 == b.length && (b = [0]), this[a] = b) : this[a] = b, "minRingRadius" == a && this.updateGridLines(), "ringResolution" == a && this.updateGeometry(), this.mode == u.TIMELINE))
                for (var c = 0; c < this.ringInstances.length; c++) this.setTimeStampParam(c, a, b)
        }, d.prototype.setTimeStampParam = function(a, b, c) {
            if (!(a >= this.ringInstances.length)) {
                var d = this.ringInstances[a];
                d.uniforms[b] = c, d.uniformsTargets[b] = c
            }
        }, d.prototype.update = function() {
            var a = g(this.speed, 0, 1, .2, 1);
            this.time += a * this.window.getTime().getDeltaSeconds(), this.amplitudeScale = 2 - this.size, this.size < .2 ? this.complexityFrequency = g(this.size, 0, .2, 3, 2.5) : this.size < .5 ? this.complexityFrequency = g(this.size, .2, .5, 2.5, 1.75) : this.size < .5 ? this.complexityFrequency = g(this.size, .2, .5, 2.5, 1.5) : this.complexityFrequency = g(this.size, .5, 1, 1.5, 1), this.mode == u.PRESENT && this.updateParams(), this.animate(), this.updateWaves()
        }, d.prototype.updateWaves = function() {
            for (var a = (this.window.getTime().getElapsedSeconds(), 0), b = 0; b < this.ringInstances.length; b++) 1 == this.ringInstances[b].uniforms.opacity && (a = b);
            this.waveInstances.forEach(function(b) {
                b.uniforms.waveLife += this.waveSpeed * this.window.getTime().getDeltaSeconds(), b.uniforms.waveLife > 1 && (b.uniforms.waveLife = 0);
                for (var c = this.ringInstances[Math.min(Math.floor(b.uniforms.waveLife * this.maxNumRings), this.ringInstances.length - 1)], d = c ? Object.keys(c.uniforms) : [], e = 0; e < d.length; e++) b.uniforms[d[e]] = c.uniforms[d[e]];
                b.uniforms.waveLife < .05 && (b.uniforms.opacity = o(0, .05, b.uniforms.waveLife));
                var f = 1;
                b.uniforms.waveLife > f - .05 && (b.uniforms.opacity = 1 - p(o(f - .05, f, b.uniforms.waveLife), 0, 1));
                var e = a * b.uniforms.waveLife,
                    h = g(e, 0, this.maxNumRings, 0, 1),
                    i = this.evenLineDistribution ? h : 1 - (h - 1) * (h - 1);
                b.uniforms.radius = g(i, 0, 1, this.minRingRadius, this.maxRingRadius), b.uniforms.color = this.waveColor, b.uniforms.brightness = 1, b.uniforms.alpha = 1
            }.bind(this));
            var c = this.waveInstances.length;
            for (this.waveInstances.length > this.waveCount && (this.waveInstances.length = this.waveCount); this.waveInstances.length < this.waveCount;) {
                var d = (this.waveInstances.length + 1) / 5,
                    e = this.evenLineDistribution ? d : 1 - (d - 1) * (d - 1);
                this.waveInstances.push({
                    uniforms: {
                        waveLife: this.waveInstances.length / 5,
                        radius: g(e, 0, 1, this.minRingRadius, this.maxRingRadius),
                        color: this.waveColor,
                        colorCenter: 0,
                        colorCenterRatio: 0,
                        complexity: this.complexity,
                        speed: this.speed,
                        time: 0,
                        alpha: 1,
                        opacity: 0,
                        lineType: 1,
                        brightness: 1,
                        wobble: this.wobble,
                        wobbleFadeout: this.wobbleFadeout,
                        wobbleFrequency: .08,
                        radiusHeightScale: 1,
                        radiusHeightLocalScale: 1,
                        horizontalOffset: 0,
                        horizontalOffset2: 2.5,
                        stratified: !1,
                        amplitudeScale: this.amplitudeScale
                    },
                    uniformsTargets: {
                        waveLife: this.waveInstances.length / 5,
                        radius: g(e, 0, 1, this.minRingRadius, this.maxRingRadius),
                        color: this.waveColor,
                        colorCenter: 0,
                        colorCenterRatio: 0,
                        complexity: this.complexity,
                        speed: this.speed,
                        time: 0,
                        alpha: 1,
                        opacity: 0,
                        lineType: 1,
                        brightness: 1,
                        wobble: this.wobble,
                        wobbleFadeout: this.wobbleFadeout,
                        wobbleFrequency: .08,
                        radiusHeightScale: 1,
                        radiusHeightLocalScale: 1,
                        horizontalOffset: 0,
                        horizontalOffset2: 2.5,
                        stratified: !1,
                        amplitudeScale: this.amplitudeScale
                    }
                })
            }
            c != this.waveInstances.length && this.waveInstances.forEach(function(a, b) {
                a.uniforms.waveLife = b / this.waveInstances.length
            }.bind(this))
        }, d.prototype.updateParams = function() {
            var a = n(g(this.size, 0, 1, this.minNumRings, this.maxNumRings)),
                b = this.ringInstances[this.ringInstances.length - 1];
            for (g(this.speed, 0, 1, .2, 1); this.ringInstances.length < a;) this.ringInstances.push({
                uniforms: {
                    radius: 1,
                    color: 0,
                    colorCenter: 0,
                    colorCenterRatio: 0,
                    complexity: b ? b.uniforms.complexity : 0,
                    speed: .5,
                    time: b ? b.uniforms.time : 0,
                    alpha: 0,
                    opacity: 1,
                    lineType: 0,
                    brightness: 1,
                    wobble: 0,
                    wobbleFadeout: this.wobbleFadeout,
                    wobbleFrequency: .08,
                    horizontalOffset: 0,
                    horizontalOffset2: 2.5,
                    stratified: this.stratified,
                    amplitudeScale: this.amplitudeScale
                },
                uniformsTargets: {
                    radius: 1,
                    color: 0,
                    colorCenter: 0,
                    colorCenterRatio: 0,
                    complexity: b ? b.uniforms.complexity : 0,
                    speed: .5,
                    time: 0,
                    alpha: 1,
                    opacity: 1,
                    lineType: 0,
                    brightness: 1,
                    wobble: 0,
                    wobbleFadeout: this.wobbleFadeout,
                    wobbleFrequency: .08,
                    horizontalOffset: 0,
                    horizontalOffset2: 2.5,
                    stratified: this.stratified,
                    amplitudeScale: this.amplitudeScale
                }
            });
            for (; this.ringInstances.length > 0 && this.ringInstances.length > this.maxNumRings;) this.ringInstances.pop();
            for (var c = this.color.length > 1, d = 0; d < this.ringInstances.length; d++) {
                var e = this.ringInstances[d];
                e.uniformsTargets.alpha = a > d ? 1 : 0, 0 == e.uniformsTargets.alpha && (e.uniforms.alpha = 0);
                var f = g(d, 0, this.maxNumRings, 0, 1),
                    h = this.evenLineDistribution ? f : 1 - (f - 1) * (f - 1);
                e.uniformsTargets.radius = g(h, 0, 1, this.minRingRadius, this.maxRingRadius), e.uniforms.radius = g(h, 0, 1, this.minRingRadius, this.maxRingRadius), e.uniformsTargets.color = m(this.color, d / this.ringInstances.length), e.uniformsTargets.colorCenter = c ? 0 : this.colorCenter, e.uniformsTargets.colorCenterRatio = c ? 0 : this.colorCenterRatio, e.uniformsTargets.complexity = this.complexity, e.uniformsTargets.speed = g(this.speed, 0, 1, .2, 1), e.uniformsTargets.brightness = g(this.brightness, 0, 1, .3, 1), e.uniformsTargets.wobble = g(this.wobble, 0, 1, 0, 1)
            }
        }, d.prototype.addTimeStamp = function(a) {
            if (!(this.ringInstances.length >= this.maxNumRings)) {
                var b = (this.ringInstances[this.ringInstances.length - 1], g(this.ringInstances.length, 0, this.maxNumRings, 0, 1)),
                    c = this.evenLineDistribution ? b : 1 - (b - 1) * (b - 1);
                this.ringInstances.push({
                    uniforms: {
                        radius: g(c, 0, 1, this.minRingRadius, this.maxRingRadius),
                        color: a.color,
                        colorCenter: a.colorCenter,
                        colorCenterRatio: a.colorCenterRatio,
                        complexity: this.complexity,
                        speed: a.speed || this.speed,
                        time: 0,
                        alpha: 0,
                        opacity: void 0 !== a.opacity ? a.opacity : 1,
                        lineType: void 0 !== a.lineType ? a.lineType : 0,
                        brightness: 1,
                        wobble: this.wobble,
                        wobbleFadeout: this.wobbleFadeout,
                        wobbleFrequency: .08,
                        radiusHeightScale: 1,
                        radiusHeightLocalScale: 1,
                        horizontalOffset: 0,
                        horizontalOffset2: 2.5,
                        stratified: this.stratified,
                        amplitudeScale: this.amplitudeScale
                    },
                    uniformsTargets: {
                        radius: 1,
                        color: a.color,
                        colorCenter: a.colorCenter,
                        colorCenterRatio: a.colorCenterRatio,
                        complexity: this.complexity,
                        speed: a.speed || this.speed,
                        time: 0,
                        alpha: 1,
                        opacity: void 0 !== a.opacity ? a.opacity : 1,
                        lineType: void 0 !== a.lineType ? a.lineType : 0,
                        brightness: 1,
                        wobble: 0,
                        radiusHeightScale: 1,
                        radiusHeightLocalScale: 1,
                        horizontalOffset: 0,
                        horizontalOffset2: 0,
                        stratified: this.stratified,
                        amplitudeScale: this.amplitudeScale
                    }
                });
                for (var d = 0; d < this.ringInstances.length - this.maxNumRings; d++) this.ringInstances[d].uniformsTargets.alpha = 0;
                for (var d = 0; d < this.ringInstances.length; d++) {
                    var e = this.ringInstances[d],
                        b = g(d, 0, this.maxNumRings, 0, 1),
                        c = this.evenLineDistribution ? b : 1 - (b - 1) * (b - 1);
                    e.uniformsTargets.radius = g(c, 0, 1, this.minRingRadius, this.maxRingRadius)
                }
            }
        }, d.prototype.animate = function() {
            for (var a = 0; a < this.ringInstances.length; a++) {
                var b = this.ringInstances[a];
                g(a, 0, this.maxNumRings, 0, 1), p(g(a, 0, this.minNumRings + this.size * (this.maxNumRings - this.minNumRings), 0, 1), 0, 1);
                if (b.uniforms.radiusHeightScale = this.ringInstances.length / this.maxNumRings, b.uniforms.radiusHeightLocalScale = p(g((a + 1) / this.maxNumRings, 0, this.size, 0, 1), 0, 1), b.uniforms.radius += (b.uniformsTargets.radius - b.uniforms.radius) * this.growth, b.uniforms.color += (b.uniformsTargets.color - b.uniforms.color) * this.growth, b.uniforms.colorCenter += (b.uniformsTargets.colorCenter - b.uniforms.colorCenter) * this.growth, b.uniforms.colorCenterRatio += (b.uniformsTargets.colorCenterRatio - b.uniforms.colorCenterRatio) * this.growth, b.uniforms.complexity += (b.uniformsTargets.complexity - b.uniforms.complexity) * this.growth, b.uniforms.speed += (b.uniformsTargets.speed - b.uniforms.speed) * this.growth, b.uniforms.brightness += (b.uniformsTargets.brightness - b.uniforms.brightness) * this.growth, b.uniforms.alpha += (b.uniformsTargets.alpha - b.uniforms.alpha) * this.growth / 2, b.uniforms.wobble += (b.uniformsTargets.wobble - b.uniforms.wobble) * this.growth / 2, b.uniforms.index = a / this.ringInstances.length, b.uniforms.time = .25 * this.time, b.uniforms.stratified = this.stratified, b.uniforms.highlight = 0, b.uniforms.lateralSpeedup = this.lateralSpeedup, b.uniforms.horizontalNoiseScale = this.horizontalNoiseScale, b.uniforms.amplitudeScale = this.amplitudeScale, b.uniforms.complexityFrequency = this.complexityFrequency, this.highlightRing) {
                    var c = (a - 1) / this.maxNumRings,
                        d = a / this.maxNumRings;
                    c <= this.highlightRing && this.highlightRing < d && (b.uniforms.highlight = 4 * this.window.getPixelRatio())
                }
                var e = this.window.getTime().getElapsedSeconds();
                b.uniforms.horizontalOffset = this.stratified ? .05 * (e / 5 - Math.floor(e / 5)) : 5 * (e / 5 - Math.floor(e / 5)), b.uniforms.horizontalOffset2 = this.stratified ? .05 * ((e + 2.5) / 5 - Math.floor((e + 2.5) / 5)) : 5 * ((e + 2.5) / 5 - Math.floor((e + 2.5) / 5)), 0 == b.uniformsTargets.alpha && b.uniforms.alpha < .01 && (this.ringInstances.splice(a, 1), a--)
            }
            for (var a = 0; a < this.ringInstances.length; a++) {
                var b = this.ringInstances[a],
                    f = g(a, 0, this.maxNumRings, 0, 1),
                    h = this.evenLineDistribution ? f : 1 - (f - 1) * (f - 1);
                b.uniformsTargets.radius = g(h, 0, 1, this.minRingRadius, this.maxRingRadius)
            }
        }, d.prototype.setColorTexture = function(a) {
            j.loadImage(a, function(a, b) {
                return a ? void console.log(a) : (console.log("old", this.colorTexture.getWidth(), this.colorTexture.getHeight()), console.log("new", b.width, b.height), void this.colorTexture.update(b, b.width, b.height))
            }.bind(this))
        }, d.prototype.setColorSpectrum = function(a) {
            this.spectrum = a;
            var b = this.colorSpectrumTexture;
            console.log("Halo.setColorSpectrum", a, b.getWidth(), b.getHeight());
            var c = h(a, b.getWidth(), b.getHeight());
            b.update(c), this.defaultRingUniforms.colorTexture = this.colorSpectrumTexture
        }, d.prototype.drawMeshInstances = function(a, b, c, d, e) {
            a.bindProgram(c), a.bindMesh(this.ringMesh);
            var f = 0;
            for (uniformName in e) c.hasUniform(uniformName) && (a.bindTexture(e[uniformName], f), c.setUniform(uniformName, f), f++);
            for (var g = 0; g < d.length; g++) {
                var h = d[g];
                h.uniforms.highlight && (a.pushState(a.LINE_WIDTH_BIT), a.setLineWidth(h.uniforms.highlight), h.uniforms.color = -1);
                for (uniformName in h.uniforms) c.hasUniform(uniformName) && c.setUniform(uniformName, h.uniforms[uniformName]);
                a.drawMesh(), h.uniforms.highlight && a.popState()
            }
        }, d.prototype.draw = function(a, b, c, d) {
            var e = this.ctx;
            this.defaultRingUniforms.lineTexture = this.solidLines ? this.lineSolidTexture : this.lineDotsTexture, e.pushState(e.LINE_WIDTH_BIT), e.setLineWidth(1), this.drawMeshInstances(e, a, this.ringProgram, this.ringInstances, this.defaultRingUniforms), e.setLineWidth(2), this.drawMeshInstances(e, a, this.ringProgram, this.waveInstances, this.defaultRingUniforms), e.setLineWidth(2), this.showGrid && this.drawMeshInstances(e, a, this.gridProgram, this.gridLineInstances, this.defaultGridUniforms), e.popState(), this.showAuraAtRing > -1 && (e.bindProgram(this.auraProgram), this.auraProgram.setUniform("opacity", this.auraOpacity), e.bindMesh(this.auraMesh), e.drawMesh())
        }, d.prototype.drawSolid = function(a) {
            var b = this.ctx;
            this.backgroundTransparent[0] = this.background[0], this.backgroundTransparent[1] = this.background[1], this.backgroundTransparent[2] = this.background[2], b.pushState(b.LINE_WIDTH_BIT), b.setLineWidth(3 * this.window.getPixelRatio()), this.defaultRingUniforms.lineTexture = this.lineSolidTexture, this.drawMeshInstances(b, a, this.ringProgram, this.ringInstances, this.defaultRingUniforms), this.drawMeshInstances(b, a, this.ringProgram, this.waveInstances, this.defaultRingUniforms), b.popState()
        }, d.prototype.dispose = function() {
            this.mesh.material.dispose(), this.mesh.dispose()
        }, d.HaloModes = u, b.exports = d
    }, {
        "create-gradient": 2,
        "geo-arc": 3,
        "interpolate-floats": 4,
        "is-browser": 103,
        "make-circle": 5,
        "pex-color": 127,
        "pex-io": 161,
        "pex-math/Utils": 170,
        "pex-math/Vec2": 171,
        "pex-math/Vec3": 172,
        ramda: 199,
        "re-map": 201
    }],
    7: [function(a, b, c) {
        var d = c;
        d.bignum = a("bn.js"), d.define = a("./asn1/api").define, d.base = a("./asn1/base"), d.constants = a("./asn1/constants"), d.decoders = a("./asn1/decoders"), d.encoders = a("./asn1/encoders")
    }, {
        "./asn1/api": 8,
        "./asn1/base": 10,
        "./asn1/constants": 14,
        "./asn1/decoders": 16,
        "./asn1/encoders": 19,
        "bn.js": 22
    }],
    8: [function(a, b, c) {
        function d(a, b) {
            this.name = a, this.body = b, this.decoders = {}, this.encoders = {}
        }
        var e = a("../asn1"),
            f = a("inherits"),
            g = c;
        g.define = function(a, b) {
            return new d(a, b)
        }, d.prototype._createNamed = function(b) {
            var c;
            try {
                c = a("vm").runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
            } catch (d) {
                c = function(a) {
                    this._initNamed(a)
                }
            }
            return f(c, b), c.prototype._initNamed = function(a) {
                b.call(this, a)
            }, new c(this)
        }, d.prototype._getDecoder = function(a) {
            return this.decoders.hasOwnProperty(a) || (this.decoders[a] = this._createNamed(e.decoders[a])), this.decoders[a]
        }, d.prototype.decode = function(a, b, c) {
            return this._getDecoder(b).decode(a, c)
        }, d.prototype._getEncoder = function(a) {
            return this.encoders.hasOwnProperty(a) || (this.encoders[a] = this._createNamed(e.encoders[a])), this.encoders[a]
        }, d.prototype.encode = function(a, b, c) {
            return this._getEncoder(b).encode(a, c)
        }
    }, {
        "../asn1": 7,
        inherits: 101,
        vm: 234
    }],
    9: [function(a, b, c) {
        function d(a, b) {
            return g.call(this, b), h.isBuffer(a) ? (this.base = a, this.offset = 0, void(this.length = a.length)) : void this.error("Input not Buffer")
        }

        function e(a, b) {
            if (Array.isArray(a)) this.length = 0, this.value = a.map(function(a) {
                return a instanceof e || (a = new e(a, b)), this.length += a.length, a
            }, this);
            else if ("number" == typeof a) {
                if (!(a >= 0 && 255 >= a)) return b.error("non-byte EncoderBuffer value");
                this.value = a, this.length = 1
            } else if ("string" == typeof a) this.value = a, this.length = h.byteLength(a);
            else {
                if (!h.isBuffer(a)) return b.error("Unsupported type: " + typeof a);
                this.value = a, this.length = a.length
            }
        }
        var f = a("inherits"),
            g = a("../base").Reporter,
            h = a("buffer").Buffer;
        f(d, g), c.DecoderBuffer = d, d.prototype.save = function() {
            return {
                offset: this.offset,
                reporter: g.prototype.save.call(this)
            }
        }, d.prototype.restore = function(a) {
            var b = new d(this.base);
            return b.offset = a.offset, b.length = this.offset, this.offset = a.offset, g.prototype.restore.call(this, a.reporter), b
        }, d.prototype.isEmpty = function() {
            return this.offset === this.length
        }, d.prototype.readUInt8 = function(a) {
            return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(a || "DecoderBuffer overrun")
        }, d.prototype.skip = function(a, b) {
            if (!(this.offset + a <= this.length)) return this.error(b || "DecoderBuffer overrun");
            var c = new d(this.base);
            return c._reporterState = this._reporterState, c.offset = this.offset, c.length = this.offset + a, this.offset += a, c
        }, d.prototype.raw = function(a) {
            return this.base.slice(a ? a.offset : this.offset, this.length)
        }, c.EncoderBuffer = e, e.prototype.join = function(a, b) {
            return a || (a = new h(this.length)), b || (b = 0), 0 === this.length ? a : (Array.isArray(this.value) ? this.value.forEach(function(c) {
                c.join(a, b), b += c.length
            }) : ("number" == typeof this.value ? a[b] = this.value : "string" == typeof this.value ? a.write(this.value, b) : h.isBuffer(this.value) && this.value.copy(a, b), b += this.length), a)
        }
    }, {
        "../base": 10,
        buffer: 51,
        inherits: 101
    }],
    10: [function(a, b, c) {
        var d = c;
        d.Reporter = a("./reporter").Reporter, d.DecoderBuffer = a("./buffer").DecoderBuffer, d.EncoderBuffer = a("./buffer").EncoderBuffer, d.Node = a("./node")
    }, {
        "./buffer": 9,
        "./node": 11,
        "./reporter": 12
    }],
    11: [function(a, b, c) {
        function d(a, b) {
            var c = {};
            this._baseState = c, c.enc = a, c.parent = b || null, c.children = null, c.tag = null, c.args = null, c.reverseArgs = null, c.choice = null, c.optional = !1, c.any = !1, c.obj = !1, c.use = null, c.useDecoder = null, c.key = null, c["default"] = null, c.explicit = null, c.implicit = null, c.contains = null, c.parent || (c.children = [], this._wrap())
        }
        var e = a("../base").Reporter,
            f = a("../base").EncoderBuffer,
            g = a("../base").DecoderBuffer,
            h = a("minimalistic-assert"),
            i = ["seq", "seqof", "set", "setof", "octstr", "bitstr", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "ia5str", "utf8str", "bmpstr", "numstr", "printstr"],
            j = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(i),
            k = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];
        b.exports = d;
        var l = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit"];
        d.prototype.clone = function() {
            var a = this._baseState,
                b = {};
            l.forEach(function(c) {
                b[c] = a[c]
            });
            var c = new this.constructor(b.parent);
            return c._baseState = b, c
        }, d.prototype._wrap = function() {
            var a = this._baseState;
            j.forEach(function(b) {
                this[b] = function() {
                    var c = new this.constructor(this);
                    return a.children.push(c), c[b].apply(c, arguments)
                }
            }, this)
        }, d.prototype._init = function(a) {
            var b = this._baseState;
            h(null === b.parent), a.call(this), b.children = b.children.filter(function(a) {
                return a._baseState.parent === this
            }, this), h.equal(b.children.length, 1, "Root node can have only one child")
        }, d.prototype._useArgs = function(a) {
            var b = this._baseState,
                c = a.filter(function(a) {
                    return a instanceof this.constructor
                }, this);
            a = a.filter(function(a) {
                return !(a instanceof this.constructor)
            }, this), 0 !== c.length && (h(null === b.children), b.children = c, c.forEach(function(a) {
                a._baseState.parent = this
            }, this)), 0 !== a.length && (h(null === b.args), b.args = a, b.reverseArgs = a.map(function(a) {
                if ("object" != typeof a || a.constructor !== Object) return a;
                var b = {};
                return Object.keys(a).forEach(function(c) {
                    c == (0 | c) && (c |= 0);
                    var d = a[c];
                    b[d] = c
                }), b
            }))
        }, k.forEach(function(a) {
            d.prototype[a] = function() {
                var b = this._baseState;
                throw new Error(a + " not implemented for encoding: " + b.enc)
            }
        }), i.forEach(function(a) {
            d.prototype[a] = function() {
                var b = this._baseState,
                    c = Array.prototype.slice.call(arguments);
                return h(null === b.tag), b.tag = a, this._useArgs(c), this
            }
        }), d.prototype.use = function(a) {
            var b = this._baseState;
            return h(null === b.use), b.use = a, this
        }, d.prototype.optional = function() {
            var a = this._baseState;
            return a.optional = !0, this
        }, d.prototype.def = function(a) {
            var b = this._baseState;
            return h(null === b["default"]), b["default"] = a, b.optional = !0, this
        }, d.prototype.explicit = function(a) {
            var b = this._baseState;
            return h(null === b.explicit && null === b.implicit), b.explicit = a, this
        }, d.prototype.implicit = function(a) {
            var b = this._baseState;
            return h(null === b.explicit && null === b.implicit), b.implicit = a, this
        }, d.prototype.obj = function() {
            var a = this._baseState,
                b = Array.prototype.slice.call(arguments);
            return a.obj = !0, 0 !== b.length && this._useArgs(b), this
        }, d.prototype.key = function(a) {
            var b = this._baseState;
            return h(null === b.key), b.key = a, this
        }, d.prototype.any = function() {
            var a = this._baseState;
            return a.any = !0, this
        }, d.prototype.choice = function(a) {
            var b = this._baseState;
            return h(null === b.choice), b.choice = a, this._useArgs(Object.keys(a).map(function(b) {
                return a[b]
            })), this
        }, d.prototype.contains = function(a) {
            var b = this._baseState;
            return h(null === b.use), b.contains = a, this
        }, d.prototype._decode = function(a) {
            var b = this._baseState;
            if (null === b.parent) return a.wrapResult(b.children[0]._decode(a));
            var c, d = b["default"],
                e = !0;
            if (null !== b.key && (c = a.enterKey(b.key)), b.optional) {
                var f = null;
                if (null !== b.explicit ? f = b.explicit : null !== b.implicit ? f = b.implicit : null !== b.tag && (f = b.tag), null !== f || b.any) {
                    if (e = this._peekTag(a, f, b.any), a.isError(e)) return e
                } else {
                    var h = a.save();
                    try {
                        null === b.choice ? this._decodeGeneric(b.tag, a) : this._decodeChoice(a), e = !0
                    } catch (i) {
                        e = !1
                    }
                    a.restore(h)
                }
            }
            var j;
            if (b.obj && e && (j = a.enterObject()), e) {
                if (null !== b.explicit) {
                    var k = this._decodeTag(a, b.explicit);
                    if (a.isError(k)) return k;
                    a = k
                }
                if (null === b.use && null === b.choice) {
                    if (b.any) var h = a.save();
                    var l = this._decodeTag(a, null !== b.implicit ? b.implicit : b.tag, b.any);
                    if (a.isError(l)) return l;
                    b.any ? d = a.raw(h) : a = l
                }
                if (d = b.any ? d : null === b.choice ? this._decodeGeneric(b.tag, a) : this._decodeChoice(a), a.isError(d)) return d;
                if (!b.any && null === b.choice && null !== b.children) {
                    var m = b.children.some(function(b) {
                        b._decode(a)
                    });
                    if (m) return err
                }
                if (b.contains && ("octstr" === b.tag || "bitstr" === b.tag)) {
                    var n = new g(d);
                    d = this._getUse(b.contains, a._reporterState.obj)._decode(n)
                }
            }
            return b.obj && e && (d = a.leaveObject(j)), null === b.key || null === d && e !== !0 || a.leaveKey(c, b.key, d), d
        }, d.prototype._decodeGeneric = function(a, b) {
            var c = this._baseState;
            return "seq" === a || "set" === a ? null : "seqof" === a || "setof" === a ? this._decodeList(b, a, c.args[0]) : "octstr" === a || "bitstr" === a ? this._decodeStr(b, a) : "ia5str" === a || "utf8str" === a || "bmpstr" === a ? this._decodeStr(b, a) : "numstr" === a || "printstr" === a ? this._decodeStr(b, a) : "objid" === a && c.args ? this._decodeObjid(b, c.args[0], c.args[1]) : "objid" === a ? this._decodeObjid(b, null, null) : "gentime" === a || "utctime" === a ? this._decodeTime(b, a) : "null_" === a ? this._decodeNull(b) : "bool" === a ? this._decodeBool(b) : "int" === a || "enum" === a ? this._decodeInt(b, c.args && c.args[0]) : null !== c.use ? this._getUse(c.use, b._reporterState.obj)._decode(b) : b.error("unknown tag: " + a)
        }, d.prototype._getUse = function(a, b) {
            var c = this._baseState;
            return c.useDecoder = this._use(a, b), h(null === c.useDecoder._baseState.parent), c.useDecoder = c.useDecoder._baseState.children[0], c.implicit !== c.useDecoder._baseState.implicit && (c.useDecoder = c.useDecoder.clone(), c.useDecoder._baseState.implicit = c.implicit), c.useDecoder
        }, d.prototype._decodeChoice = function(a) {
            var b = this._baseState,
                c = null,
                d = !1;
            return Object.keys(b.choice).some(function(e) {
                var f = a.save(),
                    g = b.choice[e];
                try {
                    var h = g._decode(a);
                    if (a.isError(h)) return !1;
                    c = {
                        type: e,
                        value: h
                    }, d = !0
                } catch (i) {
                    return a.restore(f), !1
                }
                return !0
            }, this), d ? c : a.error("Choice not matched")
        }, d.prototype._createEncoderBuffer = function(a) {
            return new f(a, this.reporter)
        }, d.prototype._encode = function(a, b, c) {
            var d = this._baseState;
            if (null === d["default"] || d["default"] !== a) {
                var e = this._encodeValue(a, b, c);
                if (void 0 !== e && !this._skipDefault(e, b, c)) return e
            }
        }, d.prototype._encodeValue = function(a, b, c) {
            var d = this._baseState;
            if (null === d.parent) return d.children[0]._encode(a, b || new e);
            var f = null;
            if (this.reporter = b, d.optional && void 0 === a) {
                if (null === d["default"]) return;
                a = d["default"]
            }
            var g = null,
                h = !1;
            if (d.any) f = this._createEncoderBuffer(a);
            else if (d.choice) f = this._encodeChoice(a, b);
            else if (d.contains) g = this._getUse(d.contains, c)._encode(a, b), h = !0;
            else if (d.children) g = d.children.map(function(c) {
                if ("null_" === c._baseState.tag) return c._encode(null, b, a);
                if (null === c._baseState.key) return b.error("Child should have a key");
                var d = b.enterKey(c._baseState.key);
                if ("object" != typeof a) return b.error("Child expected, but input is not object");
                var e = c._encode(a[c._baseState.key], b, a);
                return b.leaveKey(d), e
            }, this).filter(function(a) {
                return a
            }), g = this._createEncoderBuffer(g);
            else if ("seqof" === d.tag || "setof" === d.tag) {
                if (!d.args || 1 !== d.args.length) return b.error("Too many args for : " + d.tag);
                if (!Array.isArray(a)) return b.error("seqof/setof, but data is not Array");
                var i = this.clone();
                i._baseState.implicit = null, g = this._createEncoderBuffer(a.map(function(c) {
                    var d = this._baseState;
                    return this._getUse(d.args[0], a)._encode(c, b)
                }, i))
            } else null !== d.use ? f = this._getUse(d.use, c)._encode(a, b) : (g = this._encodePrimitive(d.tag, a), h = !0);
            var f;
            if (!d.any && null === d.choice) {
                var j = null !== d.implicit ? d.implicit : d.tag,
                    k = null === d.implicit ? "universal" : "context";
                null === j ? null === d.use && b.error("Tag could be ommited only for .use()") : null === d.use && (f = this._encodeComposite(j, h, k, g))
            }
            return null !== d.explicit && (f = this._encodeComposite(d.explicit, !1, "context", f)), f
        }, d.prototype._encodeChoice = function(a, b) {
            var c = this._baseState,
                d = c.choice[a.type];
            return d || h(!1, a.type + " not found in " + JSON.stringify(Object.keys(c.choice))), d._encode(a.value, b)
        }, d.prototype._encodePrimitive = function(a, b) {
            var c = this._baseState;
            if ("octstr" === a || "bitstr" === a || "ia5str" === a) return this._encodeStr(b, a);
            if ("utf8str" === a || "bmpstr" === a) return this._encodeStr(b, a);
            if ("numstr" === a || "printstr" === a) return this._encodeStr(b, a);
            if ("objid" === a && c.args) return this._encodeObjid(b, c.reverseArgs[0], c.args[1]);
            if ("objid" === a) return this._encodeObjid(b, null, null);
            if ("gentime" === a || "utctime" === a) return this._encodeTime(b, a);
            if ("null_" === a) return this._encodeNull();
            if ("int" === a || "enum" === a) return this._encodeInt(b, c.args && c.reverseArgs[0]);
            if ("bool" === a) return this._encodeBool(b);
            throw new Error("Unsupported tag: " + a)
        }, d.prototype._isNumstr = function(a) {
            return /^[0-9 ]*$/.test(a)
        }, d.prototype._isPrintstr = function(a) {
            return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(a)
        }
    }, {
        "../base": 10,
        "minimalistic-assert": 111
    }],
    12: [function(a, b, c) {
        function d(a) {
            this._reporterState = {
                obj: null,
                path: [],
                options: a || {},
                errors: []
            }
        }

        function e(a, b) {
            this.path = a, this.rethrow(b)
        }
        var f = a("inherits");
        c.Reporter = d, d.prototype.isError = function(a) {
            return a instanceof e
        }, d.prototype.save = function() {
            var a = this._reporterState;
            return {
                obj: a.obj,
                pathLen: a.path.length
            }
        }, d.prototype.restore = function(a) {
            var b = this._reporterState;
            b.obj = a.obj, b.path = b.path.slice(0, a.pathLen)
        }, d.prototype.enterKey = function(a) {
            return this._reporterState.path.push(a)
        }, d.prototype.leaveKey = function(a, b, c) {
            var d = this._reporterState;
            d.path = d.path.slice(0, a - 1), null !== d.obj && (d.obj[b] = c)
        }, d.prototype.enterObject = function() {
            var a = this._reporterState,
                b = a.obj;
            return a.obj = {}, b
        }, d.prototype.leaveObject = function(a) {
            var b = this._reporterState,
                c = b.obj;
            return b.obj = a, c
        }, d.prototype.error = function(a) {
            var b, c = this._reporterState,
                d = a instanceof e;
            if (b = d ? a : new e(c.path.map(function(a) {
                    return "[" + JSON.stringify(a) + "]"
                }).join(""), a.message || a, a.stack), !c.options.partial) throw b;
            return d || c.errors.push(b), b
        }, d.prototype.wrapResult = function(a) {
            var b = this._reporterState;
            return b.options.partial ? {
                result: this.isError(a) ? null : a,
                errors: b.errors
            } : a
        }, f(e, Error), e.prototype.rethrow = function(a) {
            return this.message = a + " at: " + (this.path || "(shallow)"), Error.captureStackTrace(this, e), this
        }
    }, {
        inherits: 101
    }],
    13: [function(a, b, c) {
        var d = a("../constants");
        c.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        }, c.tagClassByName = d._reverse(c.tagClass), c.tag = {
            0: "end",
            1: "bool",
            2: "int",
            3: "bitstr",
            4: "octstr",
            5: "null_",
            6: "objid",
            7: "objDesc",
            8: "external",
            9: "real",
            10: "enum",
            11: "embed",
            12: "utf8str",
            13: "relativeOid",
            16: "seq",
            17: "set",
            18: "numstr",
            19: "printstr",
            20: "t61str",
            21: "videostr",
            22: "ia5str",
            23: "utctime",
            24: "gentime",
            25: "graphstr",
            26: "iso646str",
            27: "genstr",
            28: "unistr",
            29: "charstr",
            30: "bmpstr"
        }, c.tagByName = d._reverse(c.tag)
    }, {
        "../constants": 14
    }],
    14: [function(a, b, c) {
        var d = c;
        d._reverse = function(a) {
            var b = {};
            return Object.keys(a).forEach(function(c) {
                (0 | c) == c && (c = 0 | c);
                var d = a[c];
                b[d] = c
            }), b
        }, d.der = a("./der")
    }, {
        "./der": 13
    }],
    15: [function(a, b, c) {
        function d(a) {
            this.enc = "der", this.name = a.name, this.entity = a, this.tree = new e, this.tree._init(a.body)
        }

        function e(a) {
            j.Node.call(this, "der", a)
        }

        function f(a, b) {
            var c = a.readUInt8(b);
            if (a.isError(c)) return c;
            var d = l.tagClass[c >> 6],
                e = 0 === (32 & c);
            if (31 === (31 & c)) {
                var f = c;
                for (c = 0; 128 === (128 & f);) {
                    if (f = a.readUInt8(b), a.isError(f)) return f;
                    c <<= 7, c |= 127 & f
                }
            } else c &= 31;
            var g = l.tag[c];
            return {
                cls: d,
                primitive: e,
                tag: c,
                tagStr: g
            }
        }

        function g(a, b, c) {
            var d = a.readUInt8(c);
            if (a.isError(d)) return d;
            if (!b && 128 === d) return null;
            if (0 === (128 & d)) return d;
            var e = 127 & d;
            if (e >= 4) return a.error("length octect is too long");
            d = 0;
            for (var f = 0; e > f; f++) {
                d <<= 8;
                var g = a.readUInt8(c);
                if (a.isError(g)) return g;
                d |= g
            }
            return d
        }
        var h = a("inherits"),
            i = a("../../asn1"),
            j = i.base,
            k = i.bignum,
            l = i.constants.der;
        b.exports = d, d.prototype.decode = function(a, b) {
            return a instanceof j.DecoderBuffer || (a = new j.DecoderBuffer(a, b)), this.tree._decode(a, b)
        }, h(e, j.Node), e.prototype._peekTag = function(a, b, c) {
            if (a.isEmpty()) return !1;
            var d = a.save(),
                e = f(a, 'Failed to peek tag: "' + b + '"');
            return a.isError(e) ? e : (a.restore(d), e.tag === b || e.tagStr === b || c)
        }, e.prototype._decodeTag = function(a, b, c) {
            var d = f(a, 'Failed to decode tag of "' + b + '"');
            if (a.isError(d)) return d;
            var e = g(a, d.primitive, 'Failed to get length of "' + b + '"');
            if (a.isError(e)) return e;
            if (!c && d.tag !== b && d.tagStr !== b && d.tagStr + "of" !== b) return a.error('Failed to match tag: "' + b + '"');
            if (d.primitive || null !== e) return a.skip(e, 'Failed to match body of: "' + b + '"');
            var h = a.save(),
                i = this._skipUntilEnd(a, 'Failed to skip indefinite length body: "' + this.tag + '"');
            return a.isError(i) ? i : (e = a.offset - h.offset, a.restore(h), a.skip(e, 'Failed to match body of: "' + b + '"'))
        }, e.prototype._skipUntilEnd = function(a, b) {
            for (;;) {
                var c = f(a, b);
                if (a.isError(c)) return c;
                var d = g(a, c.primitive, b);
                if (a.isError(d)) return d;
                var e;
                if (e = c.primitive || null !== d ? a.skip(d) : this._skipUntilEnd(a, b), a.isError(e)) return e;
                if ("end" === c.tagStr) break
            }
        }, e.prototype._decodeList = function(a, b, c) {
            for (var d = []; !a.isEmpty();) {
                var e = this._peekTag(a, "end");
                if (a.isError(e)) return e;
                var f = c.decode(a, "der");
                if (a.isError(f) && e) break;
                d.push(f)
            }
            return d
        }, e.prototype._decodeStr = function(a, b) {
            if ("octstr" === b) return a.raw();
            if ("bitstr" === b) {
                var c = a.readUInt8();
                return a.isError(c) ? c : {
                    unused: c,
                    data: a.raw()
                }
            }
            if ("ia5str" === b || "utf8str" === b) return a.raw().toString();
            if ("numstr" === b) {
                var d = a.raw().toString("ascii");
                return this._isNumstr(d) ? d : a.error("Decoding of string type: numstr unsupported characters")
            }
            if ("printstr" === b) {
                var e = a.raw().toString("ascii");
                return this._isPrintstr(e) ? e : a.error("Decoding of string type: printstr unsupported characters")
            }
            if ("bmpstr" === b) {
                var f = a.raw();
                if (f.length % 2 === 1) return a.error("Decoding of string type: bmpstr length mismatch");
                for (var g = "", h = 0; h < f.length / 2; h++) g += String.fromCharCode(f.readUInt16BE(2 * h));
                return g
            }
            return a.error("Decoding of string type: " + b + " unsupported")
        }, e.prototype._decodeObjid = function(a, b, c) {
            for (var d, e = [], f = 0; !a.isEmpty();) {
                var g = a.readUInt8();
                f <<= 7, f |= 127 & g, 0 === (128 & g) && (e.push(f), f = 0)
            }
            128 & g && e.push(f);
            var h = e[0] / 40 | 0,
                i = e[0] % 40;
            if (d = c ? e : [h, i].concat(e.slice(1)), b) {
                var j = b[d.join(" ")];
                void 0 === j && (j = b[d.join(".")]), void 0 !== j && (d = j)
            }
            return d
        }, e.prototype._decodeTime = function(a, b) {
            var c = a.raw().toString();
            if ("gentime" === b) var d = 0 | c.slice(0, 4),
                e = 0 | c.slice(4, 6),
                f = 0 | c.slice(6, 8),
                g = 0 | c.slice(8, 10),
                h = 0 | c.slice(10, 12),
                i = 0 | c.slice(12, 14);
            else {
                if ("utctime" !== b) return a.error("Decoding " + b + " time is not supported yet");
                var d = 0 | c.slice(0, 2),
                    e = 0 | c.slice(2, 4),
                    f = 0 | c.slice(4, 6),
                    g = 0 | c.slice(6, 8),
                    h = 0 | c.slice(8, 10),
                    i = 0 | c.slice(10, 12);
                d = 70 > d ? 2e3 + d : 1900 + d
            }
            return Date.UTC(d, e - 1, f, g, h, i, 0)
        }, e.prototype._decodeNull = function(a) {
            return null
        }, e.prototype._decodeBool = function(a) {
            var b = a.readUInt8();
            return a.isError(b) ? b : 0 !== b
        }, e.prototype._decodeInt = function(a, b) {
            var c = a.raw(),
                d = new k(c);
            return b && (d = b[d.toString(10)] || d), d
        }, e.prototype._use = function(a, b) {
            return "function" == typeof a && (a = a(b)), a._getDecoder("der").tree
        }
    }, {
        "../../asn1": 7,
        inherits: 101
    }],
    16: [function(a, b, c) {
        var d = c;
        d.der = a("./der"), d.pem = a("./pem")
    }, {
        "./der": 15,
        "./pem": 17
    }],
    17: [function(a, b, c) {
        function d(a) {
            g.call(this, a), this.enc = "pem"
        }
        var e = a("inherits"),
            f = a("buffer").Buffer,
            g = (a("../../asn1"), a("./der"));
        e(d, g), b.exports = d, d.prototype.decode = function(a, b) {
            for (var c = a.toString().split(/[\r\n]+/g), d = b.label.toUpperCase(), e = /^-----(BEGIN|END) ([^-]+)-----$/, h = -1, i = -1, j = 0; j < c.length; j++) {
                var k = c[j].match(e);
                if (null !== k && k[2] === d) {
                    if (-1 !== h) {
                        if ("END" !== k[1]) break;
                        i = j;
                        break
                    }
                    if ("BEGIN" !== k[1]) break;
                    h = j
                }
            }
            if (-1 === h || -1 === i) throw new Error("PEM section not found for: " + d);
            var l = c.slice(h + 1, i).join("");
            l.replace(/[^a-z0-9\+\/=]+/gi, "");
            var m = new f(l, "base64");
            return g.prototype.decode.call(this, m, b)
        }
    }, {
        "../../asn1": 7,
        "./der": 15,
        buffer: 51,
        inherits: 101
    }],
    18: [function(a, b, c) {
        function d(a) {
            this.enc = "der", this.name = a.name, this.entity = a, this.tree = new e, this.tree._init(a.body)
        }

        function e(a) {
            k.Node.call(this, "der", a)
        }

        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function g(a, b, c, d) {
            var e;
            if ("seqof" === a ? a = "seq" : "setof" === a && (a = "set"), l.tagByName.hasOwnProperty(a)) e = l.tagByName[a];
            else {
                if ("number" != typeof a || (0 | a) !== a) return d.error("Unknown tag: " + a);
                e = a
            }
            return e >= 31 ? d.error("Multi-octet tag encoding unsupported") : (b || (e |= 32), e |= l.tagClassByName[c || "universal"] << 6)
        }
        var h = a("inherits"),
            i = a("buffer").Buffer,
            j = a("../../asn1"),
            k = j.base,
            l = (j.bignum, j.constants.der);
        b.exports = d, d.prototype.encode = function(a, b) {
            return this.tree._encode(a, b).join()
        }, h(e, k.Node), e.prototype._encodeComposite = function(a, b, c, d) {
            var e = g(a, b, c, this.reporter);
            if (d.length < 128) {
                var f = new i(2);
                return f[0] = e, f[1] = d.length, this._createEncoderBuffer([f, d])
            }
            for (var h = 1, j = d.length; j >= 256; j >>= 8) h++;
            var f = new i(2 + h);
            f[0] = e, f[1] = 128 | h;
            for (var j = 1 + h, k = d.length; k > 0; j--, k >>= 8) f[j] = 255 & k;
            return this._createEncoderBuffer([f, d])
        }, e.prototype._encodeStr = function(a, b) {
            if ("octstr" === b) return this._createEncoderBuffer(a);
            if ("bitstr" === b) return this._createEncoderBuffer([0 | a.unused, a.data]);
            if ("ia5str" === b || "utf8str" === b) return this._createEncoderBuffer(a);
            if ("bmpstr" === b) {
                for (var c = new i(2 * a.length), d = 0; d < a.length; d++) c.writeUInt16BE(a.charCodeAt(d), 2 * d);
                return this._createEncoderBuffer(c)
            }
            return "numstr" === b ? this._isNumstr(a) ? this._createEncoderBuffer(a) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === b ? this._isPrintstr(a) ? this._createEncoderBuffer(a) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : this.reporter.error("Encoding of string type: " + b + " unsupported")
        }, e.prototype._encodeObjid = function(a, b, c) {
            if ("string" == typeof a) {
                if (!b) return this.reporter.error("string objid given, but no values map found");
                if (!b.hasOwnProperty(a)) return this.reporter.error("objid not found in values map");
                a = b[a].split(/[\s\.]+/g);
                for (var d = 0; d < a.length; d++) a[d] |= 0
            } else if (Array.isArray(a)) {
                a = a.slice();
                for (var d = 0; d < a.length; d++) a[d] |= 0
            }
            if (!Array.isArray(a)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(a));
            if (!c) {
                if (a[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                a.splice(0, 2, 40 * a[0] + a[1])
            }
            for (var e = 0, d = 0; d < a.length; d++) {
                var f = a[d];
                for (e++; f >= 128; f >>= 7) e++
            }
            for (var g = new i(e), h = g.length - 1, d = a.length - 1; d >= 0; d--) {
                var f = a[d];
                for (g[h--] = 127 & f;
                    (f >>= 7) > 0;) g[h--] = 128 | 127 & f
            }
            return this._createEncoderBuffer(g)
        }, e.prototype._encodeTime = function(a, b) {
            var c, d = new Date(a);
            return "gentime" === b ? c = [f(d.getFullYear()), f(d.getUTCMonth() + 1), f(d.getUTCDate()), f(d.getUTCHours()), f(d.getUTCMinutes()), f(d.getUTCSeconds()), "Z"].join("") : "utctime" === b ? c = [f(d.getFullYear() % 100), f(d.getUTCMonth() + 1), f(d.getUTCDate()), f(d.getUTCHours()), f(d.getUTCMinutes()), f(d.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + b + " time is not supported yet"), this._encodeStr(c, "octstr")
        }, e.prototype._encodeNull = function() {
            return this._createEncoderBuffer("")
        }, e.prototype._encodeInt = function(a, b) {
            if ("string" == typeof a) {
                if (!b) return this.reporter.error("String int or enum given, but no values map");
                if (!b.hasOwnProperty(a)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(a));
                a = b[a]
            }
            if ("number" != typeof a && !i.isBuffer(a)) {
                var c = a.toArray();
                !a.sign && 128 & c[0] && c.unshift(0), a = new i(c)
            }
            if (i.isBuffer(a)) {
                var d = a.length;
                0 === a.length && d++;
                var e = new i(d);
                return a.copy(e), 0 === a.length && (e[0] = 0), this._createEncoderBuffer(e)
            }
            if (128 > a) return this._createEncoderBuffer(a);
            if (256 > a) return this._createEncoderBuffer([0, a]);
            for (var d = 1, f = a; f >= 256; f >>= 8) d++;
            for (var e = new Array(d), f = e.length - 1; f >= 0; f--) e[f] = 255 & a, a >>= 8;
            return 128 & e[0] && e.unshift(0), this._createEncoderBuffer(new i(e))
        }, e.prototype._encodeBool = function(a) {
            return this._createEncoderBuffer(a ? 255 : 0)
        }, e.prototype._use = function(a, b) {
            return "function" == typeof a && (a = a(b)), a._getEncoder("der").tree
        }, e.prototype._skipDefault = function(a, b, c) {
            var d, e = this._baseState;
            if (null === e["default"]) return !1;
            var f = a.join();
            if (void 0 === e.defaultBuffer && (e.defaultBuffer = this._encodeValue(e["default"], b, c).join()), f.length !== e.defaultBuffer.length) return !1;
            for (d = 0; d < f.length; d++)
                if (f[d] !== e.defaultBuffer[d]) return !1;
            return !0
        }
    }, {
        "../../asn1": 7,
        buffer: 51,
        inherits: 101
    }],
    19: [function(a, b, c) {
        var d = c;
        d.der = a("./der"), d.pem = a("./pem")
    }, {
        "./der": 18,
        "./pem": 20
    }],
    20: [function(a, b, c) {
        function d(a) {
            f.call(this, a), this.enc = "pem"
        }
        var e = a("inherits"),
            f = (a("buffer").Buffer, a("../../asn1"), a("./der"));
        e(d, f), b.exports = d, d.prototype.encode = function(a, b) {
            for (var c = f.prototype.encode.call(this, a), d = c.toString("base64"), e = ["-----BEGIN " + b.label + "-----"], g = 0; g < d.length; g += 64) e.push(d.slice(g, g + 64));
            return e.push("-----END " + b.label + "-----"), e.join("\n")
        }
    }, {
        "../../asn1": 7,
        "./der": 18,
        buffer: 51,
        inherits: 101
    }],
    21: [function(a, b, c) {
        var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        ! function(a) {
            "use strict";

            function b(a) {
                var b = a.charCodeAt(0);
                return b === g || b === l ? 62 : b === h || b === m ? 63 : i > b ? -1 : i + 10 > b ? b - i + 26 + 26 : k + 26 > b ? b - k : j + 26 > b ? b - j + 26 : void 0
            }

            function c(a) {
                function c(a) {
                    j[l++] = a
                }
                var d, e, g, h, i, j;
                if (a.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var k = a.length;
                i = "=" === a.charAt(k - 2) ? 2 : "=" === a.charAt(k - 1) ? 1 : 0, j = new f(3 * a.length / 4 - i), g = i > 0 ? a.length - 4 : a.length;
                var l = 0;
                for (d = 0, e = 0; g > d; d += 4, e += 3) h = b(a.charAt(d)) << 18 | b(a.charAt(d + 1)) << 12 | b(a.charAt(d + 2)) << 6 | b(a.charAt(d + 3)), c((16711680 & h) >> 16), c((65280 & h) >> 8), c(255 & h);
                return 2 === i ? (h = b(a.charAt(d)) << 2 | b(a.charAt(d + 1)) >> 4, c(255 & h)) : 1 === i && (h = b(a.charAt(d)) << 10 | b(a.charAt(d + 1)) << 4 | b(a.charAt(d + 2)) >> 2, c(h >> 8 & 255), c(255 & h)), j
            }

            function e(a) {
                function b(a) {
                    return d.charAt(a)
                }

                function c(a) {
                    return b(a >> 18 & 63) + b(a >> 12 & 63) + b(a >> 6 & 63) + b(63 & a)
                }
                var e, f, g, h = a.length % 3,
                    i = "";
                for (e = 0, g = a.length - h; g > e; e += 3) f = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], i += c(f);
                switch (h) {
                    case 1:
                        f = a[a.length - 1], i += b(f >> 2), i += b(f << 4 & 63), i += "==";
                        break;
                    case 2:
                        f = (a[a.length - 2] << 8) + a[a.length - 1], i += b(f >> 10), i += b(f >> 4 & 63), i += b(f << 2 & 63), i += "="
                }
                return i
            }
            var f = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                g = "+".charCodeAt(0),
                h = "/".charCodeAt(0),
                i = "0".charCodeAt(0),
                j = "a".charCodeAt(0),
                k = "A".charCodeAt(0),
                l = "-".charCodeAt(0),
                m = "_".charCodeAt(0);
            a.toByteArray = c, a.fromByteArray = e
        }("undefined" == typeof c ? this.base64js = {} : c)
    }, {}],
    22: [function(a, b, c) {
        ! function(b, c) {
            "use strict";

            function d(a, b) {
                if (!a) throw new Error(b || "Assertion failed")
            }

            function e(a, b) {
                a.super_ = b;
                var c = function() {};
                c.prototype = b.prototype, a.prototype = new c, a.prototype.constructor = a
            }

            function f(a, b, c) {
                return null !== a && "object" == typeof a && Array.isArray(a.words) ? a : (this.negative = 0, this.words = null, this.length = 0, this.red = null, void(null !== a && (("le" === b || "be" === b) && (c = b, b = 10), this._init(a || 0, b || 10, c || "be"))))
            }

            function g(a, b, c) {
                for (var d = 0, e = Math.min(a.length, c), f = b; e > f; f++) {
                    var g = a.charCodeAt(f) - 48;
                    d <<= 4, d |= g >= 49 && 54 >= g ? g - 49 + 10 : g >= 17 && 22 >= g ? g - 17 + 10 : 15 & g
                }
                return d
            }

            function h(a, b, c, d) {
                for (var e = 0, f = Math.min(a.length, c), g = b; f > g; g++) {
                    var h = a.charCodeAt(g) - 48;
                    e *= d, e += h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h
                }
                return e
            }

            function i(a) {
                for (var b = new Array(a.bitLength()), c = 0; c < b.length; c++) {
                    var d = c / 26 | 0,
                        e = c % 26;
                    b[c] = (a.words[d] & 1 << e) >>> e
                }
                return b
            }

            function j(a, b, c) {
                c.negative = b.negative ^ a.negative;
                var d = a.length + b.length | 0;
                c.length = d, d = d - 1 | 0;
                var e = 0 | a.words[0],
                    f = 0 | b.words[0],
                    g = e * f,
                    h = 67108863 & g,
                    i = g / 67108864 | 0;
                c.words[0] = h;
                for (var j = 1; d > j; j++) {
                    for (var k = i >>> 26, l = 67108863 & i, m = Math.min(j, b.length - 1), n = Math.max(0, j - a.length + 1); m >= n; n++) {
                        var o = j - n | 0;
                        e = 0 | a.words[o], f = 0 | b.words[n], g = e * f + l, k += g / 67108864 | 0, l = 67108863 & g
                    }
                    c.words[j] = 0 | l, i = 0 | k
                }
                return 0 !== i ? c.words[j] = 0 | i : c.length--, c.strip()
            }

            function k(a, b, c) {
                c.negative = b.negative ^ a.negative, c.length = a.length + b.length;
                for (var d = 0, e = 0, f = 0; f < c.length - 1; f++) {
                    var g = e;
                    e = 0;
                    for (var h = 67108863 & d, i = Math.min(f, b.length - 1), j = Math.max(0, f - a.length + 1); i >= j; j++) {
                        var k = f - j,
                            l = 0 | a.words[k],
                            m = 0 | b.words[j],
                            n = l * m,
                            o = 67108863 & n;
                        g = g + (n / 67108864 | 0) | 0, o = o + h | 0, h = 67108863 & o, g = g + (o >>> 26) | 0, e += g >>> 26, g &= 67108863
                    }
                    c.words[f] = h, d = g, g = e
                }
                return 0 !== d ? c.words[f] = d : c.length--, c.strip()
            }

            function l(a, b, c) {
                var d = new m;
                return d.mulp(a, b, c)
            }

            function m(a, b) {
                this.x = a, this.y = b
            }

            function n(a, b) {
                this.name = a, this.p = new f(b, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }

            function o() {
                n.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }

            function p() {
                n.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }

            function q() {
                n.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }

            function r() {
                n.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }

            function s(a) {
                if ("string" == typeof a) {
                    var b = f._prime(a);
                    this.m = b.p, this.prime = b
                } else this.m = a, this.prime = null
            }

            function t(a) {
                s.call(this, a), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            "object" == typeof b ? b.exports = f : c.BN = f, f.BN = f, f.wordSize = 26;
            var u;
            try {
                u = a("buffer").Buffer
            } catch (v) {}
            f.max = function(a, b) {
                return a.cmp(b) > 0 ? a : b
            }, f.min = function(a, b) {
                return a.cmp(b) < 0 ? a : b
            }, f.prototype._init = function(a, b, c) {
                if ("number" == typeof a) return this._initNumber(a, b, c);
                if ("object" == typeof a) return this._initArray(a, b, c);
                "hex" === b && (b = 16), d(b === (0 | b) && b >= 2 && 36 >= b), a = a.toString().replace(/\s+/g, "");
                var e = 0;
                "-" === a[0] && e++, 16 === b ? this._parseHex(a, e) : this._parseBase(a, b, e), "-" === a[0] && (this.negative = 1), this.strip(), "le" === c && this._initArray(this.toArray(), b, c)
            }, f.prototype._initNumber = function(a, b, c) {
                0 > a && (this.negative = 1, a = -a), 67108864 > a ? (this.words = [67108863 & a], this.length = 1) : 4503599627370496 > a ? (this.words = [67108863 & a, a / 67108864 & 67108863], this.length = 2) : (d(9007199254740992 > a), this.words = [67108863 & a, a / 67108864 & 67108863, 1], this.length = 3), "le" === c && this._initArray(this.toArray(), b, c)
            }, f.prototype._initArray = function(a, b, c) {
                if (d("number" == typeof a.length), a.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(a.length / 3), this.words = new Array(this.length);
                for (var e = 0; e < this.length; e++) this.words[e] = 0;
                var f, g, h = 0;
                if ("be" === c)
                    for (e = a.length - 1, f = 0; e >= 0; e -= 3) g = a[e] | a[e - 1] << 8 | a[e - 2] << 16, this.words[f] |= g << h & 67108863, this.words[f + 1] = g >>> 26 - h & 67108863, h += 24, h >= 26 && (h -= 26, f++);
                else if ("le" === c)
                    for (e = 0, f = 0; e < a.length; e += 3) g = a[e] | a[e + 1] << 8 | a[e + 2] << 16, this.words[f] |= g << h & 67108863, this.words[f + 1] = g >>> 26 - h & 67108863, h += 24, h >= 26 && (h -= 26, f++);
                return this.strip()
            }, f.prototype._parseHex = function(a, b) {
                this.length = Math.ceil((a.length - b) / 6), this.words = new Array(this.length);
                for (var c = 0; c < this.length; c++) this.words[c] = 0;
                var d, e, f = 0;
                for (c = a.length - 6, d = 0; c >= b; c -= 6) e = g(a, c, c + 6), this.words[d] |= e << f & 67108863, this.words[d + 1] |= e >>> 26 - f & 4194303, f += 24, f >= 26 && (f -= 26, d++);
                c + 6 !== b && (e = g(a, b, c + 6), this.words[d] |= e << f & 67108863, this.words[d + 1] |= e >>> 26 - f & 4194303), this.strip()
            }, f.prototype._parseBase = function(a, b, c) {
                this.words = [0], this.length = 1;
                for (var d = 0, e = 1; 67108863 >= e; e *= b) d++;
                d--, e = e / b | 0;
                for (var f = a.length - c, g = f % d, i = Math.min(f, f - g) + c, j = 0, k = c; i > k; k += d) j = h(a, k, k + d, b), this.imuln(e), this.words[0] + j < 67108864 ? this.words[0] += j : this._iaddn(j);
                if (0 !== g) {
                    var l = 1;
                    for (j = h(a, k, a.length, b), k = 0; g > k; k++) l *= b;
                    this.imuln(l), this.words[0] + j < 67108864 ? this.words[0] += j : this._iaddn(j)
                }
            }, f.prototype.copy = function(a) {
                a.words = new Array(this.length);
                for (var b = 0; b < this.length; b++) a.words[b] = this.words[b];
                a.length = this.length, a.negative = this.negative, a.red = this.red
            }, f.prototype.clone = function() {
                var a = new f(null);
                return this.copy(a), a
            }, f.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                return this._normSign()
            }, f.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
            }, f.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            };
            var w = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                x = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                y = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            f.prototype.toString = function(a, b) {
                a = a || 10, b = 0 | b || 1;
                var c;
                if (16 === a || "hex" === a) {
                    c = "";
                    for (var e = 0, f = 0, g = 0; g < this.length; g++) {
                        var h = this.words[g],
                            i = (16777215 & (h << e | f)).toString(16);
                        f = h >>> 24 - e & 16777215, c = 0 !== f || g !== this.length - 1 ? w[6 - i.length] + i + c : i + c, e += 2, e >= 26 && (e -= 26, g--)
                    }
                    for (0 !== f && (c = f.toString(16) + c); c.length % b !== 0;) c = "0" + c;
                    return 0 !== this.negative && (c = "-" + c), c
                }
                if (a === (0 | a) && a >= 2 && 36 >= a) {
                    var j = x[a],
                        k = y[a];
                    c = "";
                    var l = this.clone();
                    for (l.negative = 0; !l.isZero();) {
                        var m = l.modn(k).toString(a);
                        l = l.idivn(k), c = l.isZero() ? m + c : w[j - m.length] + m + c
                    }
                    for (this.isZero() && (c = "0" + c); c.length % b !== 0;) c = "0" + c;
                    return 0 !== this.negative && (c = "-" + c), c
                }
                d(!1, "Base should be between 2 and 36")
            }, f.prototype.toNumber = function() {
                var a, b = this.bitLength();
                return 26 >= b ? a = this.words[0] : 52 >= b ? a = 67108864 * this.words[1] + this.words[0] : 53 === b ? a = 4503599627370496 + 67108864 * this.words[1] + this.words[0] : d(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -a : a
            }, f.prototype.toJSON = function() {
                return this.toString(16)
            }, f.prototype.toBuffer = function(a, b) {
                return d("undefined" != typeof u), this.toArrayLike(u, a, b)
            }, f.prototype.toArray = function(a, b) {
                return this.toArrayLike(Array, a, b)
            }, f.prototype.toArrayLike = function(a, b, c) {
                var e = this.byteLength(),
                    f = c || Math.max(1, e);
                d(f >= e, "byte array longer than desired length"), d(f > 0, "Requested array length <= 0"), this.strip();
                var g, h, i = "le" === b,
                    j = new a(f),
                    k = this.clone();
                if (i) {
                    for (h = 0; !k.isZero(); h++) g = k.andln(255), k.iushrn(8), j[h] = g;
                    for (; f > h; h++) j[h] = 0
                } else {
                    for (h = 0; f - e > h; h++) j[h] = 0;
                    for (h = 0; !k.isZero(); h++) g = k.andln(255), k.iushrn(8), j[f - h - 1] = g
                }
                return j
            }, Math.clz32 ? f.prototype._countBits = function(a) {
                return 32 - Math.clz32(a)
            } : f.prototype._countBits = function(a) {
                var b = a,
                    c = 0;
                return b >= 4096 && (c += 13, b >>>= 13), b >= 64 && (c += 7, b >>>= 7), b >= 8 && (c += 4, b >>>= 4), b >= 2 && (c += 2, b >>>= 2), c + b
            }, f.prototype._zeroBits = function(a) {
                if (0 === a) return 26;
                var b = a,
                    c = 0;
                return 0 === (8191 & b) && (c += 13, b >>>= 13), 0 === (127 & b) && (c += 7, b >>>= 7), 0 === (15 & b) && (c += 4, b >>>= 4), 0 === (3 & b) && (c += 2, b >>>= 2), 0 === (1 & b) && c++, c
            }, f.prototype.bitLength = function() {
                var a = this.words[this.length - 1],
                    b = this._countBits(a);
                return 26 * (this.length - 1) + b
            }, f.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var a = 0, b = 0; b < this.length; b++) {
                    var c = this._zeroBits(this.words[b]);
                    if (a += c, 26 !== c) break
                }
                return a
            }, f.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, f.prototype.toTwos = function(a) {
                return 0 !== this.negative ? this.abs().inotn(a).iaddn(1) : this.clone()
            }, f.prototype.fromTwos = function(a) {
                return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone()
            }, f.prototype.isNeg = function() {
                return 0 !== this.negative
            }, f.prototype.neg = function() {
                return this.clone().ineg()
            }, f.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, f.prototype.iuor = function(a) {
                for (; this.length < a.length;) this.words[this.length++] = 0;
                for (var b = 0; b < a.length; b++) this.words[b] = this.words[b] | a.words[b];
                return this.strip()
            }, f.prototype.ior = function(a) {
                return d(0 === (this.negative | a.negative)), this.iuor(a)
            }, f.prototype.or = function(a) {
                return this.length > a.length ? this.clone().ior(a) : a.clone().ior(this)
            }, f.prototype.uor = function(a) {
                return this.length > a.length ? this.clone().iuor(a) : a.clone().iuor(this)
            }, f.prototype.iuand = function(a) {
                var b;
                b = this.length > a.length ? a : this;
                for (var c = 0; c < b.length; c++) this.words[c] = this.words[c] & a.words[c];
                return this.length = b.length, this.strip()
            }, f.prototype.iand = function(a) {
                return d(0 === (this.negative | a.negative)), this.iuand(a)
            }, f.prototype.and = function(a) {
                return this.length > a.length ? this.clone().iand(a) : a.clone().iand(this)
            }, f.prototype.uand = function(a) {
                return this.length > a.length ? this.clone().iuand(a) : a.clone().iuand(this)
            }, f.prototype.iuxor = function(a) {
                var b, c;
                this.length > a.length ? (b = this, c = a) : (b = a, c = this);
                for (var d = 0; d < c.length; d++) this.words[d] = b.words[d] ^ c.words[d];
                if (this !== b)
                    for (; d < b.length; d++) this.words[d] = b.words[d];
                return this.length = b.length, this.strip()
            }, f.prototype.ixor = function(a) {
                return d(0 === (this.negative | a.negative)), this.iuxor(a)
            }, f.prototype.xor = function(a) {
                return this.length > a.length ? this.clone().ixor(a) : a.clone().ixor(this)
            }, f.prototype.uxor = function(a) {
                return this.length > a.length ? this.clone().iuxor(a) : a.clone().iuxor(this)
            }, f.prototype.inotn = function(a) {
                d("number" == typeof a && a >= 0);
                for (var b = 0 | Math.ceil(a / 26), c = a % 26; this.length < b;) this.words[this.length++] = 0;
                c > 0 && b--;
                for (var e = 0; b > e; e++) this.words[e] = 67108863 & ~this.words[e];
                return c > 0 && (this.words[e] = ~this.words[e] & 67108863 >> 26 - c), this.strip()
            }, f.prototype.notn = function(a) {
                return this.clone().inotn(a)
            }, f.prototype.setn = function(a, b) {
                d("number" == typeof a && a >= 0);
                for (var c = a / 26 | 0, e = a % 26; this.length <= c;) this.words[this.length++] = 0;
                return b ? this.words[c] = this.words[c] | 1 << e : this.words[c] = this.words[c] & ~(1 << e), this.strip()
            }, f.prototype.iadd = function(a) {
                var b;
                if (0 !== this.negative && 0 === a.negative) return this.negative = 0, b = this.isub(a), this.negative ^= 1, this._normSign();
                if (0 === this.negative && 0 !== a.negative) return a.negative = 0, b = this.isub(a), a.negative = 1, b._normSign();
                var c, d;
                this.length > a.length ? (c = this, d = a) : (c = a, d = this);
                for (var e = 0, f = 0; f < d.length; f++) b = (0 | c.words[f]) + (0 | d.words[f]) + e, this.words[f] = 67108863 & b, e = b >>> 26;
                for (; 0 !== e && f < c.length; f++) b = (0 | c.words[f]) + e, this.words[f] = 67108863 & b, e = b >>> 26;
                if (this.length = c.length, 0 !== e) this.words[this.length] = e, this.length++;
                else if (c !== this)
                    for (; f < c.length; f++) this.words[f] = c.words[f];
                return this
            }, f.prototype.add = function(a) {
                var b;
                return 0 !== a.negative && 0 === this.negative ? (a.negative = 0, b = this.sub(a), a.negative ^= 1, b) : 0 === a.negative && 0 !== this.negative ? (this.negative = 0, b = a.sub(this), this.negative = 1, b) : this.length > a.length ? this.clone().iadd(a) : a.clone().iadd(this)
            }, f.prototype.isub = function(a) {
                if (0 !== a.negative) {
                    a.negative = 0;
                    var b = this.iadd(a);
                    return a.negative = 1, b._normSign()
                }
                if (0 !== this.negative) return this.negative = 0, this.iadd(a), this.negative = 1, this._normSign();
                var c = this.cmp(a);
                if (0 === c) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var d, e;
                c > 0 ? (d = this, e = a) : (d = a, e = this);
                for (var f = 0, g = 0; g < e.length; g++) b = (0 | d.words[g]) - (0 | e.words[g]) + f, f = b >> 26, this.words[g] = 67108863 & b;
                for (; 0 !== f && g < d.length; g++) b = (0 | d.words[g]) + f, f = b >> 26, this.words[g] = 67108863 & b;
                if (0 === f && g < d.length && d !== this)
                    for (; g < d.length; g++) this.words[g] = d.words[g];
                return this.length = Math.max(this.length, g), d !== this && (this.negative = 1), this.strip()
            }, f.prototype.sub = function(a) {
                return this.clone().isub(a)
            };
            var z = function(a, b, c) {
                var d, e, f, g = a.words,
                    h = b.words,
                    i = c.words,
                    j = 0,
                    k = 0 | g[0],
                    l = 8191 & k,
                    m = k >>> 13,
                    n = 0 | g[1],
                    o = 8191 & n,
                    p = n >>> 13,
                    q = 0 | g[2],
                    r = 8191 & q,
                    s = q >>> 13,
                    t = 0 | g[3],
                    u = 8191 & t,
                    v = t >>> 13,
                    w = 0 | g[4],
                    x = 8191 & w,
                    y = w >>> 13,
                    z = 0 | g[5],
                    A = 8191 & z,
                    B = z >>> 13,
                    C = 0 | g[6],
                    D = 8191 & C,
                    E = C >>> 13,
                    F = 0 | g[7],
                    G = 8191 & F,
                    H = F >>> 13,
                    I = 0 | g[8],
                    J = 8191 & I,
                    K = I >>> 13,
                    L = 0 | g[9],
                    M = 8191 & L,
                    N = L >>> 13,
                    O = 0 | h[0],
                    P = 8191 & O,
                    Q = O >>> 13,
                    R = 0 | h[1],
                    S = 8191 & R,
                    T = R >>> 13,
                    U = 0 | h[2],
                    V = 8191 & U,
                    W = U >>> 13,
                    X = 0 | h[3],
                    Y = 8191 & X,
                    Z = X >>> 13,
                    $ = 0 | h[4],
                    _ = 8191 & $,
                    aa = $ >>> 13,
                    ba = 0 | h[5],
                    ca = 8191 & ba,
                    da = ba >>> 13,
                    ea = 0 | h[6],
                    fa = 8191 & ea,
                    ga = ea >>> 13,
                    ha = 0 | h[7],
                    ia = 8191 & ha,
                    ja = ha >>> 13,
                    ka = 0 | h[8],
                    la = 8191 & ka,
                    ma = ka >>> 13,
                    na = 0 | h[9],
                    oa = 8191 & na,
                    pa = na >>> 13;
                c.negative = a.negative ^ b.negative, c.length = 19, d = Math.imul(l, P), e = Math.imul(l, Q), e += Math.imul(m, P), f = Math.imul(m, Q);
                var qa = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (qa >>> 26), qa &= 67108863, d = Math.imul(o, P), e = Math.imul(o, Q), e += Math.imul(p, P), f = Math.imul(p, Q), d += Math.imul(l, S), e += Math.imul(l, T), e += Math.imul(m, S), f += Math.imul(m, T);
                var ra = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (ra >>> 26), ra &= 67108863, d = Math.imul(r, P), e = Math.imul(r, Q), e += Math.imul(s, P), f = Math.imul(s, Q), d += Math.imul(o, S), e += Math.imul(o, T), e += Math.imul(p, S), f += Math.imul(p, T), d += Math.imul(l, V), e += Math.imul(l, W), e += Math.imul(m, V), f += Math.imul(m, W);
                var sa = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (sa >>> 26), sa &= 67108863, d = Math.imul(u, P), e = Math.imul(u, Q), e += Math.imul(v, P), f = Math.imul(v, Q), d += Math.imul(r, S), e += Math.imul(r, T), e += Math.imul(s, S), f += Math.imul(s, T), d += Math.imul(o, V), e += Math.imul(o, W), e += Math.imul(p, V), f += Math.imul(p, W), d += Math.imul(l, Y), e += Math.imul(l, Z), e += Math.imul(m, Y), f += Math.imul(m, Z);
                var ta = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (ta >>> 26), ta &= 67108863, d = Math.imul(x, P), e = Math.imul(x, Q), e += Math.imul(y, P), f = Math.imul(y, Q), d += Math.imul(u, S), e += Math.imul(u, T), e += Math.imul(v, S), f += Math.imul(v, T), d += Math.imul(r, V), e += Math.imul(r, W), e += Math.imul(s, V), f += Math.imul(s, W), d += Math.imul(o, Y), e += Math.imul(o, Z), e += Math.imul(p, Y), f += Math.imul(p, Z), d += Math.imul(l, _), e += Math.imul(l, aa), e += Math.imul(m, _), f += Math.imul(m, aa);
                var ua = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (ua >>> 26), ua &= 67108863, d = Math.imul(A, P), e = Math.imul(A, Q), e += Math.imul(B, P), f = Math.imul(B, Q), d += Math.imul(x, S), e += Math.imul(x, T), e += Math.imul(y, S), f += Math.imul(y, T), d += Math.imul(u, V), e += Math.imul(u, W), e += Math.imul(v, V), f += Math.imul(v, W), d += Math.imul(r, Y), e += Math.imul(r, Z), e += Math.imul(s, Y), f += Math.imul(s, Z), d += Math.imul(o, _), e += Math.imul(o, aa), e += Math.imul(p, _), f += Math.imul(p, aa), d += Math.imul(l, ca), e += Math.imul(l, da), e += Math.imul(m, ca), f += Math.imul(m, da);
                var va = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (va >>> 26), va &= 67108863, d = Math.imul(D, P), e = Math.imul(D, Q), e += Math.imul(E, P), f = Math.imul(E, Q), d += Math.imul(A, S), e += Math.imul(A, T), e += Math.imul(B, S), f += Math.imul(B, T), d += Math.imul(x, V), e += Math.imul(x, W), e += Math.imul(y, V), f += Math.imul(y, W), d += Math.imul(u, Y), e += Math.imul(u, Z), e += Math.imul(v, Y), f += Math.imul(v, Z), d += Math.imul(r, _), e += Math.imul(r, aa), e += Math.imul(s, _), f += Math.imul(s, aa), d += Math.imul(o, ca), e += Math.imul(o, da), e += Math.imul(p, ca), f += Math.imul(p, da), d += Math.imul(l, fa), e += Math.imul(l, ga), e += Math.imul(m, fa), f += Math.imul(m, ga);
                var wa = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (wa >>> 26), wa &= 67108863, d = Math.imul(G, P), e = Math.imul(G, Q), e += Math.imul(H, P), f = Math.imul(H, Q), d += Math.imul(D, S), e += Math.imul(D, T), e += Math.imul(E, S), f += Math.imul(E, T), d += Math.imul(A, V), e += Math.imul(A, W), e += Math.imul(B, V), f += Math.imul(B, W), d += Math.imul(x, Y), e += Math.imul(x, Z), e += Math.imul(y, Y), f += Math.imul(y, Z), d += Math.imul(u, _), e += Math.imul(u, aa), e += Math.imul(v, _), f += Math.imul(v, aa), d += Math.imul(r, ca), e += Math.imul(r, da), e += Math.imul(s, ca), f += Math.imul(s, da), d += Math.imul(o, fa), e += Math.imul(o, ga), e += Math.imul(p, fa), f += Math.imul(p, ga), d += Math.imul(l, ia), e += Math.imul(l, ja), e += Math.imul(m, ia), f += Math.imul(m, ja);
                var xa = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (xa >>> 26), xa &= 67108863, d = Math.imul(J, P), e = Math.imul(J, Q), e += Math.imul(K, P), f = Math.imul(K, Q), d += Math.imul(G, S), e += Math.imul(G, T), e += Math.imul(H, S), f += Math.imul(H, T), d += Math.imul(D, V), e += Math.imul(D, W), e += Math.imul(E, V), f += Math.imul(E, W), d += Math.imul(A, Y), e += Math.imul(A, Z), e += Math.imul(B, Y), f += Math.imul(B, Z), d += Math.imul(x, _), e += Math.imul(x, aa), e += Math.imul(y, _), f += Math.imul(y, aa), d += Math.imul(u, ca), e += Math.imul(u, da), e += Math.imul(v, ca), f += Math.imul(v, da), d += Math.imul(r, fa), e += Math.imul(r, ga), e += Math.imul(s, fa), f += Math.imul(s, ga), d += Math.imul(o, ia), e += Math.imul(o, ja), e += Math.imul(p, ia), f += Math.imul(p, ja), d += Math.imul(l, la), e += Math.imul(l, ma), e += Math.imul(m, la), f += Math.imul(m, ma);
                var ya = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (ya >>> 26), ya &= 67108863, d = Math.imul(M, P), e = Math.imul(M, Q), e += Math.imul(N, P), f = Math.imul(N, Q), d += Math.imul(J, S), e += Math.imul(J, T), e += Math.imul(K, S), f += Math.imul(K, T), d += Math.imul(G, V), e += Math.imul(G, W), e += Math.imul(H, V), f += Math.imul(H, W), d += Math.imul(D, Y), e += Math.imul(D, Z), e += Math.imul(E, Y), f += Math.imul(E, Z), d += Math.imul(A, _), e += Math.imul(A, aa), e += Math.imul(B, _), f += Math.imul(B, aa), d += Math.imul(x, ca), e += Math.imul(x, da), e += Math.imul(y, ca), f += Math.imul(y, da), d += Math.imul(u, fa), e += Math.imul(u, ga), e += Math.imul(v, fa), f += Math.imul(v, ga), d += Math.imul(r, ia), e += Math.imul(r, ja), e += Math.imul(s, ia), f += Math.imul(s, ja), d += Math.imul(o, la), e += Math.imul(o, ma), e += Math.imul(p, la), f += Math.imul(p, ma), d += Math.imul(l, oa), e += Math.imul(l, pa), e += Math.imul(m, oa), f += Math.imul(m, pa);
                var za = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (za >>> 26), za &= 67108863, d = Math.imul(M, S), e = Math.imul(M, T), e += Math.imul(N, S), f = Math.imul(N, T), d += Math.imul(J, V), e += Math.imul(J, W), e += Math.imul(K, V), f += Math.imul(K, W), d += Math.imul(G, Y), e += Math.imul(G, Z), e += Math.imul(H, Y), f += Math.imul(H, Z), d += Math.imul(D, _), e += Math.imul(D, aa), e += Math.imul(E, _), f += Math.imul(E, aa), d += Math.imul(A, ca), e += Math.imul(A, da), e += Math.imul(B, ca), f += Math.imul(B, da), d += Math.imul(x, fa), e += Math.imul(x, ga), e += Math.imul(y, fa), f += Math.imul(y, ga), d += Math.imul(u, ia), e += Math.imul(u, ja), e += Math.imul(v, ia), f += Math.imul(v, ja), d += Math.imul(r, la), e += Math.imul(r, ma), e += Math.imul(s, la), f += Math.imul(s, ma), d += Math.imul(o, oa), e += Math.imul(o, pa), e += Math.imul(p, oa), f += Math.imul(p, pa);
                var Aa = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Aa >>> 26), Aa &= 67108863, d = Math.imul(M, V), e = Math.imul(M, W), e += Math.imul(N, V), f = Math.imul(N, W), d += Math.imul(J, Y), e += Math.imul(J, Z), e += Math.imul(K, Y), f += Math.imul(K, Z), d += Math.imul(G, _), e += Math.imul(G, aa), e += Math.imul(H, _), f += Math.imul(H, aa), d += Math.imul(D, ca), e += Math.imul(D, da), e += Math.imul(E, ca), f += Math.imul(E, da), d += Math.imul(A, fa), e += Math.imul(A, ga), e += Math.imul(B, fa), f += Math.imul(B, ga), d += Math.imul(x, ia), e += Math.imul(x, ja), e += Math.imul(y, ia), f += Math.imul(y, ja), d += Math.imul(u, la), e += Math.imul(u, ma), e += Math.imul(v, la), f += Math.imul(v, ma), d += Math.imul(r, oa), e += Math.imul(r, pa), e += Math.imul(s, oa), f += Math.imul(s, pa);
                var Ba = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Ba >>> 26), Ba &= 67108863, d = Math.imul(M, Y), e = Math.imul(M, Z), e += Math.imul(N, Y), f = Math.imul(N, Z), d += Math.imul(J, _), e += Math.imul(J, aa), e += Math.imul(K, _), f += Math.imul(K, aa), d += Math.imul(G, ca), e += Math.imul(G, da), e += Math.imul(H, ca), f += Math.imul(H, da), d += Math.imul(D, fa), e += Math.imul(D, ga), e += Math.imul(E, fa), f += Math.imul(E, ga), d += Math.imul(A, ia), e += Math.imul(A, ja), e += Math.imul(B, ia), f += Math.imul(B, ja), d += Math.imul(x, la), e += Math.imul(x, ma), e += Math.imul(y, la), f += Math.imul(y, ma), d += Math.imul(u, oa), e += Math.imul(u, pa), e += Math.imul(v, oa), f += Math.imul(v, pa);
                var Ca = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Ca >>> 26), Ca &= 67108863, d = Math.imul(M, _), e = Math.imul(M, aa), e += Math.imul(N, _), f = Math.imul(N, aa), d += Math.imul(J, ca), e += Math.imul(J, da), e += Math.imul(K, ca), f += Math.imul(K, da), d += Math.imul(G, fa), e += Math.imul(G, ga), e += Math.imul(H, fa), f += Math.imul(H, ga), d += Math.imul(D, ia), e += Math.imul(D, ja), e += Math.imul(E, ia), f += Math.imul(E, ja), d += Math.imul(A, la), e += Math.imul(A, ma), e += Math.imul(B, la), f += Math.imul(B, ma), d += Math.imul(x, oa), e += Math.imul(x, pa), e += Math.imul(y, oa), f += Math.imul(y, pa);
                var Da = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Da >>> 26), Da &= 67108863, d = Math.imul(M, ca), e = Math.imul(M, da), e += Math.imul(N, ca), f = Math.imul(N, da), d += Math.imul(J, fa), e += Math.imul(J, ga), e += Math.imul(K, fa), f += Math.imul(K, ga), d += Math.imul(G, ia), e += Math.imul(G, ja), e += Math.imul(H, ia), f += Math.imul(H, ja), d += Math.imul(D, la), e += Math.imul(D, ma), e += Math.imul(E, la), f += Math.imul(E, ma), d += Math.imul(A, oa), e += Math.imul(A, pa), e += Math.imul(B, oa), f += Math.imul(B, pa);
                var Ea = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Ea >>> 26), Ea &= 67108863, d = Math.imul(M, fa), e = Math.imul(M, ga), e += Math.imul(N, fa), f = Math.imul(N, ga), d += Math.imul(J, ia), e += Math.imul(J, ja), e += Math.imul(K, ia), f += Math.imul(K, ja), d += Math.imul(G, la), e += Math.imul(G, ma), e += Math.imul(H, la), f += Math.imul(H, ma), d += Math.imul(D, oa), e += Math.imul(D, pa), e += Math.imul(E, oa), f += Math.imul(E, pa);
                var Fa = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Fa >>> 26), Fa &= 67108863, d = Math.imul(M, ia), e = Math.imul(M, ja), e += Math.imul(N, ia), f = Math.imul(N, ja), d += Math.imul(J, la), e += Math.imul(J, ma), e += Math.imul(K, la), f += Math.imul(K, ma), d += Math.imul(G, oa), e += Math.imul(G, pa), e += Math.imul(H, oa), f += Math.imul(H, pa);
                var Ga = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Ga >>> 26), Ga &= 67108863, d = Math.imul(M, la), e = Math.imul(M, ma), e += Math.imul(N, la), f = Math.imul(N, ma), d += Math.imul(J, oa), e += Math.imul(J, pa), e += Math.imul(K, oa), f += Math.imul(K, pa);
                var Ha = j + d + ((8191 & e) << 13);
                j = f + (e >>> 13) + (Ha >>> 26), Ha &= 67108863, d = Math.imul(M, oa), e = Math.imul(M, pa), e += Math.imul(N, oa), f = Math.imul(N, pa);
                var Ia = j + d + ((8191 & e) << 13);
                return j = f + (e >>> 13) + (Ia >>> 26), Ia &= 67108863, i[0] = qa, i[1] = ra, i[2] = sa, i[3] = ta, i[4] = ua, i[5] = va, i[6] = wa, i[7] = xa, i[8] = ya, i[9] = za, i[10] = Aa, i[11] = Ba, i[12] = Ca, i[13] = Da, i[14] = Ea, i[15] = Fa, i[16] = Ga, i[17] = Ha, i[18] = Ia, 0 !== j && (i[19] = j, c.length++), c
            };
            Math.imul || (z = j), f.prototype.mulTo = function(a, b) {
                var c, d = this.length + a.length;
                return c = 10 === this.length && 10 === a.length ? z(this, a, b) : 63 > d ? j(this, a, b) : 1024 > d ? k(this, a, b) : l(this, a, b)
            }, m.prototype.makeRBT = function(a) {
                for (var b = new Array(a), c = f.prototype._countBits(a) - 1, d = 0; a > d; d++) b[d] = this.revBin(d, c, a);
                return b
            }, m.prototype.revBin = function(a, b, c) {
                if (0 === a || a === c - 1) return a;
                for (var d = 0, e = 0; b > e; e++) d |= (1 & a) << b - e - 1, a >>= 1;
                return d
            }, m.prototype.permute = function(a, b, c, d, e, f) {
                for (var g = 0; f > g; g++) d[g] = b[a[g]], e[g] = c[a[g]]
            }, m.prototype.transform = function(a, b, c, d, e, f) {
                this.permute(f, a, b, c, d, e);
                for (var g = 1; e > g; g <<= 1)
                    for (var h = g << 1, i = Math.cos(2 * Math.PI / h), j = Math.sin(2 * Math.PI / h), k = 0; e > k; k += h)
                        for (var l = i, m = j, n = 0; g > n; n++) {
                            var o = c[k + n],
                                p = d[k + n],
                                q = c[k + n + g],
                                r = d[k + n + g],
                                s = l * q - m * r;
                            r = l * r + m * q, q = s, c[k + n] = o + q, d[k + n] = p + r, c[k + n + g] = o - q, d[k + n + g] = p - r, n !== h && (s = i * l - j * m, m = i * m + j * l, l = s)
                        }
            }, m.prototype.guessLen13b = function(a, b) {
                var c = 1 | Math.max(b, a),
                    d = 1 & c,
                    e = 0;
                for (c = c / 2 | 0; c; c >>>= 1) e++;
                return 1 << e + 1 + d
            }, m.prototype.conjugate = function(a, b, c) {
                if (!(1 >= c))
                    for (var d = 0; c / 2 > d; d++) {
                        var e = a[d];
                        a[d] = a[c - d - 1], a[c - d - 1] = e, e = b[d], b[d] = -b[c - d - 1], b[c - d - 1] = -e
                    }
            }, m.prototype.normalize13b = function(a, b) {
                for (var c = 0, d = 0; b / 2 > d; d++) {
                    var e = 8192 * Math.round(a[2 * d + 1] / b) + Math.round(a[2 * d] / b) + c;
                    a[d] = 67108863 & e, c = 67108864 > e ? 0 : e / 67108864 | 0
                }
                return a
            }, m.prototype.convert13b = function(a, b, c, e) {
                for (var f = 0, g = 0; b > g; g++) f += 0 | a[g], c[2 * g] = 8191 & f, f >>>= 13, c[2 * g + 1] = 8191 & f, f >>>= 13;
                for (g = 2 * b; e > g; ++g) c[g] = 0;
                d(0 === f), d(0 === (-8192 & f))
            }, m.prototype.stub = function(a) {
                for (var b = new Array(a), c = 0; a > c; c++) b[c] = 0;
                return b
            }, m.prototype.mulp = function(a, b, c) {
                var d = 2 * this.guessLen13b(a.length, b.length),
                    e = this.makeRBT(d),
                    f = this.stub(d),
                    g = new Array(d),
                    h = new Array(d),
                    i = new Array(d),
                    j = new Array(d),
                    k = new Array(d),
                    l = new Array(d),
                    m = c.words;
                m.length = d, this.convert13b(a.words, a.length, g, d), this.convert13b(b.words, b.length, j, d), this.transform(g, f, h, i, d, e), this.transform(j, f, k, l, d, e);
                for (var n = 0; d > n; n++) {
                    var o = h[n] * k[n] - i[n] * l[n];
                    i[n] = h[n] * l[n] + i[n] * k[n], h[n] = o
                }
                return this.conjugate(h, i, d), this.transform(h, i, m, f, d, e), this.conjugate(m, f, d), this.normalize13b(m, d), c.negative = a.negative ^ b.negative, c.length = a.length + b.length, c.strip()
            }, f.prototype.mul = function(a) {
                var b = new f(null);
                return b.words = new Array(this.length + a.length), this.mulTo(a, b)
            }, f.prototype.mulf = function(a) {
                var b = new f(null);
                return b.words = new Array(this.length + a.length), l(this, a, b)
            }, f.prototype.imul = function(a) {
                return this.clone().mulTo(a, this)
            }, f.prototype.imuln = function(a) {
                d("number" == typeof a), d(67108864 > a);
                for (var b = 0, c = 0; c < this.length; c++) {
                    var e = (0 | this.words[c]) * a,
                        f = (67108863 & e) + (67108863 & b);
                    b >>= 26, b += e / 67108864 | 0, b += f >>> 26, this.words[c] = 67108863 & f
                }
                return 0 !== b && (this.words[c] = b, this.length++), this
            }, f.prototype.muln = function(a) {
                return this.clone().imuln(a)
            }, f.prototype.sqr = function() {
                return this.mul(this)
            }, f.prototype.isqr = function() {
                return this.imul(this.clone())
            }, f.prototype.pow = function(a) {
                var b = i(a);
                if (0 === b.length) return new f(1);
                for (var c = this, d = 0; d < b.length && 0 === b[d]; d++, c = c.sqr());
                if (++d < b.length)
                    for (var e = c.sqr(); d < b.length; d++, e = e.sqr()) 0 !== b[d] && (c = c.mul(e));
                return c
            }, f.prototype.iushln = function(a) {
                d("number" == typeof a && a >= 0);
                var b, c = a % 26,
                    e = (a - c) / 26,
                    f = 67108863 >>> 26 - c << 26 - c;
                if (0 !== c) {
                    var g = 0;
                    for (b = 0; b < this.length; b++) {
                        var h = this.words[b] & f,
                            i = (0 | this.words[b]) - h << c;
                        this.words[b] = i | g, g = h >>> 26 - c
                    }
                    g && (this.words[b] = g, this.length++)
                }
                if (0 !== e) {
                    for (b = this.length - 1; b >= 0; b--) this.words[b + e] = this.words[b];
                    for (b = 0; e > b; b++) this.words[b] = 0;
                    this.length += e
                }
                return this.strip()
            }, f.prototype.ishln = function(a) {
                return d(0 === this.negative), this.iushln(a)
            }, f.prototype.iushrn = function(a, b, c) {
                d("number" == typeof a && a >= 0);
                var e;
                e = b ? (b - b % 26) / 26 : 0;
                var f = a % 26,
                    g = Math.min((a - f) / 26, this.length),
                    h = 67108863 ^ 67108863 >>> f << f,
                    i = c;
                if (e -= g, e = Math.max(0, e), i) {
                    for (var j = 0; g > j; j++) i.words[j] = this.words[j];
                    i.length = g
                }
                if (0 === g);
                else if (this.length > g)
                    for (this.length -= g, j = 0; j < this.length; j++) this.words[j] = this.words[j + g];
                else this.words[0] = 0, this.length = 1;
                var k = 0;
                for (j = this.length - 1; j >= 0 && (0 !== k || j >= e); j--) {
                    var l = 0 | this.words[j];
                    this.words[j] = k << 26 - f | l >>> f, k = l & h
                }
                return i && 0 !== k && (i.words[i.length++] = k), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
            }, f.prototype.ishrn = function(a, b, c) {
                return d(0 === this.negative), this.iushrn(a, b, c)
            }, f.prototype.shln = function(a) {
                return this.clone().ishln(a)
            }, f.prototype.ushln = function(a) {
                return this.clone().iushln(a)
            }, f.prototype.shrn = function(a) {
                return this.clone().ishrn(a)
            }, f.prototype.ushrn = function(a) {
                return this.clone().iushrn(a)
            }, f.prototype.testn = function(a) {
                d("number" == typeof a && a >= 0);
                var b = a % 26,
                    c = (a - b) / 26,
                    e = 1 << b;
                if (this.length <= c) return !1;
                var f = this.words[c];
                return !!(f & e)
            }, f.prototype.imaskn = function(a) {
                d("number" == typeof a && a >= 0);
                var b = a % 26,
                    c = (a - b) / 26;
                if (d(0 === this.negative, "imaskn works only with positive numbers"), 0 !== b && c++, this.length = Math.min(c, this.length), 0 !== b) {
                    var e = 67108863 ^ 67108863 >>> b << b;
                    this.words[this.length - 1] &= e
                }
                return this.strip()
            }, f.prototype.maskn = function(a) {
                return this.clone().imaskn(a)
            }, f.prototype.iaddn = function(a) {
                return d("number" == typeof a), d(67108864 > a), 0 > a ? this.isubn(-a) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < a ? (this.words[0] = a - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(a), this.negative = 1, this) : this._iaddn(a)
            }, f.prototype._iaddn = function(a) {
                this.words[0] += a;
                for (var b = 0; b < this.length && this.words[b] >= 67108864; b++) this.words[b] -= 67108864, b === this.length - 1 ? this.words[b + 1] = 1 : this.words[b + 1]++;
                return this.length = Math.max(this.length, b + 1), this
            }, f.prototype.isubn = function(a) {
                if (d("number" == typeof a), d(67108864 > a), 0 > a) return this.iaddn(-a);
                if (0 !== this.negative) return this.negative = 0, this.iaddn(a), this.negative = 1, this;
                if (this.words[0] -= a, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var b = 0; b < this.length && this.words[b] < 0; b++) this.words[b] += 67108864, this.words[b + 1] -= 1;
                return this.strip()
            }, f.prototype.addn = function(a) {
                return this.clone().iaddn(a)
            }, f.prototype.subn = function(a) {
                return this.clone().isubn(a)
            }, f.prototype.iabs = function() {
                return this.negative = 0, this
            }, f.prototype.abs = function() {
                return this.clone().iabs()
            }, f.prototype._ishlnsubmul = function(a, b, c) {
                var e, f = a.length + c;
                if (this.words.length < f) {
                    var g = new Array(f);
                    for (e = 0; e < this.length; e++) g[e] = this.words[e];
                    this.words = g
                } else e = this.length;
                for (this.length = Math.max(this.length, f); e < this.length; e++) this.words[e] = 0;
                var h, i = 0;
                for (e = 0; e < a.length; e++) {
                    h = (0 | this.words[e + c]) + i;
                    var j = (0 | a.words[e]) * b;
                    h -= 67108863 & j, i = (h >> 26) - (j / 67108864 | 0), this.words[e + c] = 67108863 & h
                }
                for (; e < this.length - c; e++) h = (0 | this.words[e + c]) + i, i = h >> 26, this.words[e + c] = 67108863 & h;
                if (0 === i) return this.strip();
                for (d(-1 === i), i = 0, e = 0; e < this.length; e++) h = -(0 | this.words[e]) + i, i = h >> 26, this.words[e] = 67108863 & h;
                return this.negative = 1, this.strip()
            }, f.prototype._wordDiv = function(a, b) {
                var c = this.length - a.length,
                    d = this.clone(),
                    e = a,
                    g = 0 | e.words[e.length - 1],
                    h = this._countBits(g);
                c = 26 - h, 0 !== c && (e = e.ushln(c), d.iushln(c), g = 0 | e.words[e.length - 1]);
                var i, j = d.length - e.length;
                if ("mod" !== b) {
                    i = new f(null), i.length = j + 1, i.words = new Array(i.length);
                    for (var k = 0; k < i.length; k++) i.words[k] = 0
                }
                var l = d.clone()._ishlnsubmul(e, 1, j);
                0 === l.negative && (d = l, i && (i.words[j] = 1));
                for (var m = j - 1; m >= 0; m--) {
                    var n = 67108864 * (0 | d.words[e.length + m]) + (0 | d.words[e.length + m - 1]);
                    for (n = Math.min(n / g | 0, 67108863), d._ishlnsubmul(e, n, m); 0 !== d.negative;) n--, d.negative = 0, d._ishlnsubmul(e, 1, m), d.isZero() || (d.negative ^= 1);
                    i && (i.words[m] = n)
                }
                return i && i.strip(), d.strip(), "div" !== b && 0 !== c && d.iushrn(c), {
                    div: i || null,
                    mod: d
                }
            }, f.prototype.divmod = function(a, b, c) {
                if (d(!a.isZero()), this.isZero()) return {
                    div: new f(0),
                    mod: new f(0)
                };
                var e, g, h;
                return 0 !== this.negative && 0 === a.negative ? (h = this.neg().divmod(a, b), "mod" !== b && (e = h.div.neg()), "div" !== b && (g = h.mod.neg(), c && 0 !== g.negative && g.iadd(a)), {
                    div: e,
                    mod: g
                }) : 0 === this.negative && 0 !== a.negative ? (h = this.divmod(a.neg(), b), "mod" !== b && (e = h.div.neg()), {
                    div: e,
                    mod: h.mod
                }) : 0 !== (this.negative & a.negative) ? (h = this.neg().divmod(a.neg(), b), "div" !== b && (g = h.mod.neg(), c && 0 !== g.negative && g.isub(a)), {
                    div: h.div,
                    mod: g
                }) : a.length > this.length || this.cmp(a) < 0 ? {
                    div: new f(0),
                    mod: this
                } : 1 === a.length ? "div" === b ? {
                    div: this.divn(a.words[0]),
                    mod: null
                } : "mod" === b ? {
                    div: null,
                    mod: new f(this.modn(a.words[0]))
                } : {
                    div: this.divn(a.words[0]),
                    mod: new f(this.modn(a.words[0]))
                } : this._wordDiv(a, b)
            }, f.prototype.div = function(a) {
                return this.divmod(a, "div", !1).div
            }, f.prototype.mod = function(a) {
                return this.divmod(a, "mod", !1).mod
            }, f.prototype.umod = function(a) {
                return this.divmod(a, "mod", !0).mod
            }, f.prototype.divRound = function(a) {
                var b = this.divmod(a);
                if (b.mod.isZero()) return b.div;
                var c = 0 !== b.div.negative ? b.mod.isub(a) : b.mod,
                    d = a.ushrn(1),
                    e = a.andln(1),
                    f = c.cmp(d);
                return 0 > f || 1 === e && 0 === f ? b.div : 0 !== b.div.negative ? b.div.isubn(1) : b.div.iaddn(1)
            }, f.prototype.modn = function(a) {
                d(67108863 >= a);
                for (var b = (1 << 26) % a, c = 0, e = this.length - 1; e >= 0; e--) c = (b * c + (0 | this.words[e])) % a;
                return c
            }, f.prototype.idivn = function(a) {
                d(67108863 >= a);
                for (var b = 0, c = this.length - 1; c >= 0; c--) {
                    var e = (0 | this.words[c]) + 67108864 * b;
                    this.words[c] = e / a | 0, b = e % a
                }
                return this.strip()
            }, f.prototype.divn = function(a) {
                return this.clone().idivn(a)
            }, f.prototype.egcd = function(a) {
                d(0 === a.negative), d(!a.isZero());
                var b = this,
                    c = a.clone();
                b = 0 !== b.negative ? b.umod(a) : b.clone();
                for (var e = new f(1), g = new f(0), h = new f(0), i = new f(1), j = 0; b.isEven() && c.isEven();) b.iushrn(1), c.iushrn(1), ++j;
                for (var k = c.clone(), l = b.clone(); !b.isZero();) {
                    for (var m = 0, n = 1; 0 === (b.words[0] & n) && 26 > m; ++m, n <<= 1);
                    if (m > 0)
                        for (b.iushrn(m); m-- > 0;)(e.isOdd() || g.isOdd()) && (e.iadd(k), g.isub(l)), e.iushrn(1), g.iushrn(1);
                    for (var o = 0, p = 1; 0 === (c.words[0] & p) && 26 > o; ++o, p <<= 1);
                    if (o > 0)
                        for (c.iushrn(o); o-- > 0;)(h.isOdd() || i.isOdd()) && (h.iadd(k), i.isub(l)), h.iushrn(1), i.iushrn(1);
                    b.cmp(c) >= 0 ? (b.isub(c), e.isub(h), g.isub(i)) : (c.isub(b), h.isub(e), i.isub(g))
                }
                return {
                    a: h,
                    b: i,
                    gcd: c.iushln(j)
                }
            }, f.prototype._invmp = function(a) {
                d(0 === a.negative), d(!a.isZero());
                var b = this,
                    c = a.clone();
                b = 0 !== b.negative ? b.umod(a) : b.clone();
                for (var e = new f(1), g = new f(0), h = c.clone(); b.cmpn(1) > 0 && c.cmpn(1) > 0;) {
                    for (var i = 0, j = 1; 0 === (b.words[0] & j) && 26 > i; ++i, j <<= 1);
                    if (i > 0)
                        for (b.iushrn(i); i-- > 0;) e.isOdd() && e.iadd(h), e.iushrn(1);
                    for (var k = 0, l = 1; 0 === (c.words[0] & l) && 26 > k; ++k, l <<= 1);
                    if (k > 0)
                        for (c.iushrn(k); k-- > 0;) g.isOdd() && g.iadd(h), g.iushrn(1);
                    b.cmp(c) >= 0 ? (b.isub(c), e.isub(g)) : (c.isub(b), g.isub(e))
                }
                var m;
                return m = 0 === b.cmpn(1) ? e : g, m.cmpn(0) < 0 && m.iadd(a), m
            }, f.prototype.gcd = function(a) {
                if (this.isZero()) return a.abs();
                if (a.isZero()) return this.abs();
                var b = this.clone(),
                    c = a.clone();
                b.negative = 0, c.negative = 0;
                for (var d = 0; b.isEven() && c.isEven(); d++) b.iushrn(1), c.iushrn(1);
                for (;;) {
                    for (; b.isEven();) b.iushrn(1);
                    for (; c.isEven();) c.iushrn(1);
                    var e = b.cmp(c);
                    if (0 > e) {
                        var f = b;
                        b = c, c = f
                    } else if (0 === e || 0 === c.cmpn(1)) break;
                    b.isub(c)
                }
                return c.iushln(d)
            }, f.prototype.invm = function(a) {
                return this.egcd(a).a.umod(a)
            }, f.prototype.isEven = function() {
                return 0 === (1 & this.words[0])
            }, f.prototype.isOdd = function() {
                return 1 === (1 & this.words[0])
            }, f.prototype.andln = function(a) {
                return this.words[0] & a
            }, f.prototype.bincn = function(a) {
                d("number" == typeof a);
                var b = a % 26,
                    c = (a - b) / 26,
                    e = 1 << b;
                if (this.length <= c) {
                    for (var f = this.length; c + 1 > f; f++) this.words[f] = 0;
                    return this.words[c] |= e, this.length = c + 1, this
                }
                var g = e;
                for (f = c; 0 !== g && f < this.length; f++) {
                    var h = 0 | this.words[f];
                    h += g, g = h >>> 26, h &= 67108863, this.words[f] = h
                }
                return 0 !== g && (this.words[f] = g, this.length++), this
            }, f.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }, f.prototype.cmpn = function(a) {
                var b = 0 > a;
                if (0 !== this.negative && !b) return -1;
                if (0 === this.negative && b) return 1;
                this.strip();
                var c;
                if (this.length > 1) c = 1;
                else {
                    b && (a = -a), d(67108863 >= a, "Number is too big");
                    var e = 0 | this.words[0];
                    c = e === a ? 0 : a > e ? -1 : 1
                }
                return 0 !== this.negative && (c = -c), c
            }, f.prototype.cmp = function(a) {
                if (0 !== this.negative && 0 === a.negative) return -1;
                if (0 === this.negative && 0 !== a.negative) return 1;
                var b = this.ucmp(a);
                return 0 !== this.negative ? -b : b
            }, f.prototype.ucmp = function(a) {
                if (this.length > a.length) return 1;
                if (this.length < a.length) return -1;
                for (var b = 0, c = this.length - 1; c >= 0; c--) {
                    var d = 0 | this.words[c],
                        e = 0 | a.words[c];
                    if (d !== e) {
                        e > d ? b = -1 : d > e && (b = 1);
                        break
                    }
                }
                return b
            }, f.prototype.gtn = function(a) {
                return 1 === this.cmpn(a)
            }, f.prototype.gt = function(a) {
                return 1 === this.cmp(a)
            }, f.prototype.gten = function(a) {
                return this.cmpn(a) >= 0
            }, f.prototype.gte = function(a) {
                return this.cmp(a) >= 0
            }, f.prototype.ltn = function(a) {
                return -1 === this.cmpn(a)
            }, f.prototype.lt = function(a) {
                return -1 === this.cmp(a)
            }, f.prototype.lten = function(a) {
                return this.cmpn(a) <= 0
            }, f.prototype.lte = function(a) {
                return this.cmp(a) <= 0
            }, f.prototype.eqn = function(a) {
                return 0 === this.cmpn(a)
            }, f.prototype.eq = function(a) {
                return 0 === this.cmp(a)
            }, f.red = function(a) {
                return new s(a)
            }, f.prototype.toRed = function(a) {
                return d(!this.red, "Already a number in reduction context"), d(0 === this.negative, "red works only with positives"), a.convertTo(this)._forceRed(a)
            }, f.prototype.fromRed = function() {
                return d(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, f.prototype._forceRed = function(a) {
                return this.red = a, this
            }, f.prototype.forceRed = function(a) {
                return d(!this.red, "Already a number in reduction context"), this._forceRed(a)
            }, f.prototype.redAdd = function(a) {
                return d(this.red, "redAdd works only with red numbers"), this.red.add(this, a)
            }, f.prototype.redIAdd = function(a) {
                return d(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, a)
            }, f.prototype.redSub = function(a) {
                return d(this.red, "redSub works only with red numbers"), this.red.sub(this, a)
            }, f.prototype.redISub = function(a) {
                return d(this.red, "redISub works only with red numbers"), this.red.isub(this, a)
            }, f.prototype.redShl = function(a) {
                return d(this.red, "redShl works only with red numbers"), this.red.ushl(this, a)
            }, f.prototype.redMul = function(a) {
                return d(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.mul(this, a)
            }, f.prototype.redIMul = function(a) {
                return d(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.imul(this, a)
            }, f.prototype.redSqr = function() {
                return d(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, f.prototype.redISqr = function() {
                return d(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, f.prototype.redSqrt = function() {
                return d(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, f.prototype.redInvm = function() {
                return d(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, f.prototype.redNeg = function() {
                return d(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, f.prototype.redPow = function(a) {
                return d(this.red && !a.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, a)
            };
            var A = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            n.prototype._tmp = function() {
                var a = new f(null);
                return a.words = new Array(Math.ceil(this.n / 13)), a
            }, n.prototype.ireduce = function(a) {
                var b, c = a;
                do this.split(c, this.tmp), c = this.imulK(c), c = c.iadd(this.tmp), b = c.bitLength(); while (b > this.n);
                var d = b < this.n ? -1 : c.ucmp(this.p);
                return 0 === d ? (c.words[0] = 0, c.length = 1) : d > 0 ? c.isub(this.p) : c.strip(), c
            }, n.prototype.split = function(a, b) {
                a.iushrn(this.n, 0, b)
            }, n.prototype.imulK = function(a) {
                return a.imul(this.k)
            }, e(o, n), o.prototype.split = function(a, b) {
                for (var c = 4194303, d = Math.min(a.length, 9), e = 0; d > e; e++) b.words[e] = a.words[e];
                if (b.length = d, a.length <= 9) return a.words[0] = 0, void(a.length = 1);
                var f = a.words[9];
                for (b.words[b.length++] = f & c, e = 10; e < a.length; e++) {
                    var g = 0 | a.words[e];
                    a.words[e - 10] = (g & c) << 4 | f >>> 22, f = g
                }
                f >>>= 22, a.words[e - 10] = f, 0 === f && a.length > 10 ? a.length -= 10 : a.length -= 9
            }, o.prototype.imulK = function(a) {
                a.words[a.length] = 0, a.words[a.length + 1] = 0, a.length += 2;
                for (var b = 0, c = 0; c < a.length; c++) {
                    var d = 0 | a.words[c];
                    b += 977 * d, a.words[c] = 67108863 & b, b = 64 * d + (b / 67108864 | 0)
                }
                return 0 === a.words[a.length - 1] && (a.length--, 0 === a.words[a.length - 1] && a.length--), a
            }, e(p, n), e(q, n), e(r, n), r.prototype.imulK = function(a) {
                for (var b = 0, c = 0; c < a.length; c++) {
                    var d = 19 * (0 | a.words[c]) + b,
                        e = 67108863 & d;
                    d >>>= 26, a.words[c] = e, b = d
                }
                return 0 !== b && (a.words[a.length++] = b), a
            }, f._prime = function B(a) {
                if (A[a]) return A[a];
                var B;
                if ("k256" === a) B = new o;
                else if ("p224" === a) B = new p;
                else if ("p192" === a) B = new q;
                else {
                    if ("p25519" !== a) throw new Error("Unknown prime " + a);
                    B = new r
                }
                return A[a] = B, B
            }, s.prototype._verify1 = function(a) {
                d(0 === a.negative, "red works only with positives"), d(a.red, "red works only with red numbers")
            }, s.prototype._verify2 = function(a, b) {
                d(0 === (a.negative | b.negative), "red works only with positives"), d(a.red && a.red === b.red, "red works only with red numbers")
            }, s.prototype.imod = function(a) {
                return this.prime ? this.prime.ireduce(a)._forceRed(this) : a.umod(this.m)._forceRed(this)
            }, s.prototype.neg = function(a) {
                return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
            }, s.prototype.add = function(a, b) {
                this._verify2(a, b);
                var c = a.add(b);
                return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this)
            }, s.prototype.iadd = function(a, b) {
                this._verify2(a, b);
                var c = a.iadd(b);
                return c.cmp(this.m) >= 0 && c.isub(this.m), c
            }, s.prototype.sub = function(a, b) {
                this._verify2(a, b);
                var c = a.sub(b);
                return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this)
            }, s.prototype.isub = function(a, b) {
                this._verify2(a, b);
                var c = a.isub(b);
                return c.cmpn(0) < 0 && c.iadd(this.m), c
            }, s.prototype.shl = function(a, b) {
                return this._verify1(a), this.imod(a.ushln(b))
            }, s.prototype.imul = function(a, b) {
                return this._verify2(a, b), this.imod(a.imul(b))
            }, s.prototype.mul = function(a, b) {
                return this._verify2(a, b), this.imod(a.mul(b))
            }, s.prototype.isqr = function(a) {
                return this.imul(a, a.clone())
            }, s.prototype.sqr = function(a) {
                return this.mul(a, a)
            }, s.prototype.sqrt = function(a) {
                if (a.isZero()) return a.clone();
                var b = this.m.andln(3);
                if (d(b % 2 === 1), 3 === b) {
                    var c = this.m.add(new f(1)).iushrn(2);
                    return this.pow(a, c)
                }
                for (var e = this.m.subn(1), g = 0; !e.isZero() && 0 === e.andln(1);) g++, e.iushrn(1);
                d(!e.isZero());
                var h = new f(1).toRed(this),
                    i = h.redNeg(),
                    j = this.m.subn(1).iushrn(1),
                    k = this.m.bitLength();
                for (k = new f(2 * k * k).toRed(this); 0 !== this.pow(k, j).cmp(i);) k.redIAdd(i);
                for (var l = this.pow(k, e), m = this.pow(a, e.addn(1).iushrn(1)), n = this.pow(a, e), o = g; 0 !== n.cmp(h);) {
                    for (var p = n, q = 0; 0 !== p.cmp(h); q++) p = p.redSqr();
                    d(o > q);
                    var r = this.pow(l, new f(1).iushln(o - q - 1));
                    m = m.redMul(r), l = r.redSqr(), n = n.redMul(l), o = q
                }
                return m
            }, s.prototype.invm = function(a) {
                var b = a._invmp(this.m);
                return 0 !== b.negative ? (b.negative = 0, this.imod(b).redNeg()) : this.imod(b)
            }, s.prototype.pow = function(a, b) {
                if (b.isZero()) return new f(1);
                if (0 === b.cmpn(1)) return a.clone();
                var c = 4,
                    d = new Array(1 << c);
                d[0] = new f(1).toRed(this), d[1] = a;
                for (var e = 2; e < d.length; e++) d[e] = this.mul(d[e - 1], a);
                var g = d[0],
                    h = 0,
                    i = 0,
                    j = b.bitLength() % 26;
                for (0 === j && (j = 26), e = b.length - 1; e >= 0; e--) {
                    for (var k = b.words[e], l = j - 1; l >= 0; l--) {
                        var m = k >> l & 1;
                        g !== d[0] && (g = this.sqr(g)), 0 !== m || 0 !== h ? (h <<= 1, h |= m, i++, (i === c || 0 === e && 0 === l) && (g = this.mul(g, d[h]), i = 0, h = 0)) : i = 0
                    }
                    j = 26
                }
                return g
            }, s.prototype.convertTo = function(a) {
                var b = a.umod(this.m);
                return b === a ? b.clone() : b
            }, s.prototype.convertFrom = function(a) {
                var b = a.clone();
                return b.red = null, b
            }, f.mont = function(a) {
                return new t(a)
            }, e(t, s), t.prototype.convertTo = function(a) {
                return this.imod(a.ushln(this.shift))
            }, t.prototype.convertFrom = function(a) {
                var b = this.imod(a.mul(this.rinv));
                return b.red = null, b
            }, t.prototype.imul = function(a, b) {
                if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                var c = a.imul(b),
                    d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    e = c.isub(d).iushrn(this.shift),
                    f = e;
                return e.cmp(this.m) >= 0 ? f = e.isub(this.m) : e.cmpn(0) < 0 && (f = e.iadd(this.m)), f._forceRed(this)
            }, t.prototype.mul = function(a, b) {
                if (a.isZero() || b.isZero()) return new f(0)._forceRed(this);
                var c = a.mul(b),
                    d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    e = c.isub(d).iushrn(this.shift),
                    g = e;
                return e.cmp(this.m) >= 0 ? g = e.isub(this.m) : e.cmpn(0) < 0 && (g = e.iadd(this.m)), g._forceRed(this)
            }, t.prototype.invm = function(a) {
                var b = this.imod(a._invmp(this.m).mul(this.r2));
                return b._forceRed(this)
            }
        }("undefined" == typeof b || b, this)
    }, {}],
    23: [function(a, b, c) {
        function d(a) {
            this.rand = a
        }
        var e;
        if (b.exports = function(a) {
                return e || (e = new d(null)), e.generate(a)
            }, b.exports.Rand = d, d.prototype.generate = function(a) {
                return this._rand(a)
            }, "object" == typeof window) window.crypto && window.crypto.getRandomValues ? d.prototype._rand = function(a) {
            var b = new Uint8Array(a);
            return window.crypto.getRandomValues(b), b
        } : window.msCrypto && window.msCrypto.getRandomValues ? d.prototype._rand = function(a) {
            var b = new Uint8Array(a);
            return window.msCrypto.getRandomValues(b), b
        } : d.prototype._rand = function() {
            throw new Error("Not implemented yet")
        };
        else try {
            var f = a("crypto");
            d.prototype._rand = function(a) {
                return f.randomBytes(a)
            }
        } catch (g) {
            d.prototype._rand = function(a) {
                for (var b = new Uint8Array(a), c = 0; c < b.length; c++) b[c] = this.rand.getByte();
                return b
            }
        }
    }, {}],
    24: [function(a, b, c) {}, {}],
    25: [function(a, b, c) {
        (function(a) {
            function b(a) {
                var b, c;
                return b = a > h || 0 > a ? (c = Math.abs(a) % h, 0 > a ? h - c : c) : a
            }

            function d(a) {
                for (var b = 0; b < a.length; a++) a[b] = 0;
                return !1
            }

            function e() {
                this.SBOX = [], this.INV_SBOX = [], this.SUB_MIX = [
                    [],
                    [],
                    [],
                    []
                ], this.INV_SUB_MIX = [
                    [],
                    [],
                    [],
                    []
                ], this.init(), this.RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
            }

            function f(a) {
                for (var b = a.length / 4, c = new Array(b), d = -1; ++d < b;) c[d] = a.readUInt32BE(4 * d);
                return c
            }

            function g(a) {
                this._key = f(a), this._doReset()
            }
            var h = Math.pow(2, 32);
            e.prototype.init = function() {
                var a, b, c, d, e, f, g, h, i, j;
                for (a = function() {
                        var a, c;
                        for (c = [], b = a = 0; 256 > a; b = ++a) 128 > b ? c.push(b << 1) : c.push(b << 1 ^ 283);
                        return c
                    }(), e = 0, i = 0, b = j = 0; 256 > j; b = ++j) c = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4, c = c >>> 8 ^ 255 & c ^ 99, this.SBOX[e] = c, this.INV_SBOX[c] = e, f = a[e], g = a[f], h = a[g], d = 257 * a[c] ^ 16843008 * c, this.SUB_MIX[0][e] = d << 24 | d >>> 8, this.SUB_MIX[1][e] = d << 16 | d >>> 16, this.SUB_MIX[2][e] = d << 8 | d >>> 24, this.SUB_MIX[3][e] = d, d = 16843009 * h ^ 65537 * g ^ 257 * f ^ 16843008 * e, this.INV_SUB_MIX[0][c] = d << 24 | d >>> 8, this.INV_SUB_MIX[1][c] = d << 16 | d >>> 16, this.INV_SUB_MIX[2][c] = d << 8 | d >>> 24, this.INV_SUB_MIX[3][c] = d, 0 === e ? e = i = 1 : (e = f ^ a[a[a[h ^ f]]], i ^= a[a[i]]);
                return !0
            };
            var i = new e;
            g.blockSize = 16, g.prototype.blockSize = g.blockSize, g.keySize = 32, g.prototype.keySize = g.keySize, g.prototype._doReset = function() {
                var a, b, c, d, e, f;
                for (c = this._key, b = c.length, this._nRounds = b + 6, e = 4 * (this._nRounds + 1), this._keySchedule = [], d = 0; e > d; d++) this._keySchedule[d] = b > d ? c[d] : (f = this._keySchedule[d - 1], d % b === 0 ? (f = f << 8 | f >>> 24, f = i.SBOX[f >>> 24] << 24 | i.SBOX[f >>> 16 & 255] << 16 | i.SBOX[f >>> 8 & 255] << 8 | i.SBOX[255 & f], f ^= i.RCON[d / b | 0] << 24) : b > 6 && d % b === 4 ? f = i.SBOX[f >>> 24] << 24 | i.SBOX[f >>> 16 & 255] << 16 | i.SBOX[f >>> 8 & 255] << 8 | i.SBOX[255 & f] : void 0, this._keySchedule[d - b] ^ f);
                for (this._invKeySchedule = [], a = 0; e > a; a++) d = e - a, f = this._keySchedule[d - (a % 4 ? 0 : 4)], this._invKeySchedule[a] = 4 > a || 4 >= d ? f : i.INV_SUB_MIX[0][i.SBOX[f >>> 24]] ^ i.INV_SUB_MIX[1][i.SBOX[f >>> 16 & 255]] ^ i.INV_SUB_MIX[2][i.SBOX[f >>> 8 & 255]] ^ i.INV_SUB_MIX[3][i.SBOX[255 & f]];
                return !0
            }, g.prototype.encryptBlock = function(b) {
                b = f(new a(b));
                var c = this._doCryptBlock(b, this._keySchedule, i.SUB_MIX, i.SBOX),
                    d = new a(16);
                return d.writeUInt32BE(c[0], 0), d.writeUInt32BE(c[1], 4), d.writeUInt32BE(c[2], 8), d.writeUInt32BE(c[3], 12), d
            }, g.prototype.decryptBlock = function(b) {
                b = f(new a(b));
                var c = [b[3], b[1]];
                b[1] = c[0], b[3] = c[1];
                var d = this._doCryptBlock(b, this._invKeySchedule, i.INV_SUB_MIX, i.INV_SBOX),
                    e = new a(16);
                return e.writeUInt32BE(d[0], 0), e.writeUInt32BE(d[3], 4), e.writeUInt32BE(d[2], 8), e.writeUInt32BE(d[1], 12), e
            }, g.prototype.scrub = function() {
                d(this._keySchedule), d(this._invKeySchedule), d(this._key)
            }, g.prototype._doCryptBlock = function(a, c, d, e) {
                var f, g, h, i, j, k, l, m, n;
                g = a[0] ^ c[0], h = a[1] ^ c[1], i = a[2] ^ c[2], j = a[3] ^ c[3], f = 4;
                for (var o = 1; o < this._nRounds; o++) k = d[0][g >>> 24] ^ d[1][h >>> 16 & 255] ^ d[2][i >>> 8 & 255] ^ d[3][255 & j] ^ c[f++], l = d[0][h >>> 24] ^ d[1][i >>> 16 & 255] ^ d[2][j >>> 8 & 255] ^ d[3][255 & g] ^ c[f++], m = d[0][i >>> 24] ^ d[1][j >>> 16 & 255] ^ d[2][g >>> 8 & 255] ^ d[3][255 & h] ^ c[f++], n = d[0][j >>> 24] ^ d[1][g >>> 16 & 255] ^ d[2][h >>> 8 & 255] ^ d[3][255 & i] ^ c[f++], g = k, h = l, i = m, j = n;
                return k = (e[g >>> 24] << 24 | e[h >>> 16 & 255] << 16 | e[i >>> 8 & 255] << 8 | e[255 & j]) ^ c[f++], l = (e[h >>> 24] << 24 | e[i >>> 16 & 255] << 16 | e[j >>> 8 & 255] << 8 | e[255 & g]) ^ c[f++], m = (e[i >>> 24] << 24 | e[j >>> 16 & 255] << 16 | e[g >>> 8 & 255] << 8 | e[255 & h]) ^ c[f++], n = (e[j >>> 24] << 24 | e[g >>> 16 & 255] << 16 | e[h >>> 8 & 255] << 8 | e[255 & i]) ^ c[f++], [b(k), b(l), b(m), b(n)]
            }, c.AES = g
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    26: [function(a, b, c) {
        (function(c) {
            function d(a, b, e, h) {
                if (!(this instanceof d)) return new d(a, b, e);
                g.call(this), this._finID = c.concat([e, new c([0, 0, 0, 1])]), e = c.concat([e, new c([0, 0, 0, 2])]), this._cipher = new f.AES(b), this._prev = new c(e.length), this._cache = new c(""), this._secCache = new c(""), this._decrypt = h, this._alen = 0, this._len = 0, e.copy(this._prev), this._mode = a;
                var j = new c(4);
                j.fill(0), this._ghash = new i(this._cipher.encryptBlock(j)), this._authTag = null, this._called = !1
            }

            function e(a, b) {
                var c = 0;
                a.length !== b.length && c++;
                for (var d = Math.min(a.length, b.length), e = -1; ++e < d;) c += a[e] ^ b[e];
                return c
            }
            var f = a("./aes"),
                g = a("cipher-base"),
                h = a("inherits"),
                i = a("./ghash"),
                j = a("buffer-xor");
            h(d, g), b.exports = d, d.prototype._update = function(a) {
                if (!this._called && this._alen) {
                    var b = 16 - this._alen % 16;
                    16 > b && (b = new c(b), b.fill(0), this._ghash.update(b))
                }
                this._called = !0;
                var d = this._mode.encrypt(this, a);
                return this._decrypt ? this._ghash.update(a) : this._ghash.update(d), this._len += a.length, d
            }, d.prototype._final = function() {
                if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
                var a = j(this._ghash["final"](8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
                if (this._decrypt) {
                    if (e(a, this._authTag)) throw new Error("Unsupported state or unable to authenticate data")
                } else this._authTag = a;
                this._cipher.scrub()
            }, d.prototype.getAuthTag = function() {
                if (!this._decrypt && c.isBuffer(this._authTag)) return this._authTag;
                throw new Error("Attempting to get auth tag in unsupported state")
            }, d.prototype.setAuthTag = function(a) {
                if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
                this._authTag = a
            }, d.prototype.setAAD = function(a) {
                if (this._called) throw new Error("Attempting to set AAD in unsupported state");
                this._ghash.update(a), this._alen += a.length
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./aes": 25,
        "./ghash": 30,
        buffer: 51,
        "buffer-xor": 50,
        "cipher-base": 53,
        inherits: 101
    }],
    27: [function(a, b, c) {
        function d() {
            return Object.keys(g)
        }
        var e = a("./encrypter");
        c.createCipher = c.Cipher = e.createCipher, c.createCipheriv = c.Cipheriv = e.createCipheriv;
        var f = a("./decrypter");
        c.createDecipher = c.Decipher = f.createDecipher, c.createDecipheriv = c.Decipheriv = f.createDecipheriv;
        var g = a("./modes");
        c.listCiphers = c.getCiphers = d
    }, {
        "./decrypter": 28,
        "./encrypter": 29,
        "./modes": 31
    }],
    28: [function(a, b, c) {
        (function(b) {
            function d(a, c, f) {
                return this instanceof d ? (j.call(this), this._cache = new e, this._last = void 0, this._cipher = new i.AES(c), this._prev = new b(f.length), f.copy(this._prev), this._mode = a, void(this._autopadding = !0)) : new d(a, c, f)
            }

            function e() {
                return this instanceof e ? void(this.cache = new b("")) : new e
            }

            function f(a) {
                for (var b = a[15], c = -1; ++c < b;)
                    if (a[c + (16 - b)] !== b) throw new Error("unable to decrypt data");
                return 16 !== b ? a.slice(0, 16 - b) : void 0
            }

            function g(a, c, e) {
                var f = l[a.toLowerCase()];
                if (!f) throw new TypeError("invalid suite type");
                if ("string" == typeof e && (e = new b(e)), "string" == typeof c && (c = new b(c)), c.length !== f.key / 8) throw new TypeError("invalid key length " + c.length);
                if (e.length !== f.iv) throw new TypeError("invalid iv length " + e.length);
                return "stream" === f.type ? new m(p[f.mode], c, e, !0) : "auth" === f.type ? new n(p[f.mode], c, e, !0) : new d(p[f.mode], c, e)
            }

            function h(a, b) {
                var c = l[a.toLowerCase()];
                if (!c) throw new TypeError("invalid suite type");
                var d = o(b, !1, c.key, c.iv);
                return g(a, d.key, d.iv)
            }
            var i = a("./aes"),
                j = a("cipher-base"),
                k = a("inherits"),
                l = a("./modes"),
                m = a("./streamCipher"),
                n = a("./authCipher"),
                o = a("evp_bytestokey");
            k(d, j), d.prototype._update = function(a) {
                this._cache.add(a);
                for (var c, d, e = []; c = this._cache.get(this._autopadding);) d = this._mode.decrypt(this, c), e.push(d);
                return b.concat(e)
            }, d.prototype._final = function() {
                var a = this._cache.flush();
                if (this._autopadding) return f(this._mode.decrypt(this, a));
                if (a) throw new Error("data not multiple of block length")
            }, d.prototype.setAutoPadding = function(a) {
                return this._autopadding = !!a, this
            }, e.prototype.add = function(a) {
                this.cache = b.concat([this.cache, a])
            }, e.prototype.get = function(a) {
                var b;
                if (a) {
                    if (this.cache.length > 16) return b = this.cache.slice(0, 16), this.cache = this.cache.slice(16), b
                } else if (this.cache.length >= 16) return b = this.cache.slice(0, 16), this.cache = this.cache.slice(16), b;
                return null
            }, e.prototype.flush = function() {
                return this.cache.length ? this.cache : void 0
            };
            var p = {
                ECB: a("./modes/ecb"),
                CBC: a("./modes/cbc"),
                CFB: a("./modes/cfb"),
                CFB8: a("./modes/cfb8"),
                CFB1: a("./modes/cfb1"),
                OFB: a("./modes/ofb"),
                CTR: a("./modes/ctr"),
                GCM: a("./modes/ctr")
            };
            c.createDecipher = h, c.createDecipheriv = g
        }).call(this, a("buffer").Buffer)
    }, {
        "./aes": 25,
        "./authCipher": 26,
        "./modes": 31,
        "./modes/cbc": 32,
        "./modes/cfb": 33,
        "./modes/cfb1": 34,
        "./modes/cfb8": 35,
        "./modes/ctr": 36,
        "./modes/ecb": 37,
        "./modes/ofb": 38,
        "./streamCipher": 39,
        buffer: 51,
        "cipher-base": 53,
        evp_bytestokey: 89,
        inherits: 101
    }],
    29: [function(a, b, c) {
        (function(b) {
            function d(a, c, f) {
                return this instanceof d ? (i.call(this), this._cache = new e, this._cipher = new h.AES(c), this._prev = new b(f.length), f.copy(this._prev), this._mode = a, void(this._autopadding = !0)) : new d(a, c, f)
            }

            function e() {
                return this instanceof e ? void(this.cache = new b("")) : new e
            }

            function f(a, c, e) {
                var f = k[a.toLowerCase()];
                if (!f) throw new TypeError("invalid suite type");
                if ("string" == typeof e && (e = new b(e)), "string" == typeof c && (c = new b(c)), c.length !== f.key / 8) throw new TypeError("invalid key length " + c.length);
                if (e.length !== f.iv) throw new TypeError("invalid iv length " + e.length);
                return "stream" === f.type ? new m(o[f.mode], c, e) : "auth" === f.type ? new n(o[f.mode], c, e) : new d(o[f.mode], c, e)
            }

            function g(a, b) {
                var c = k[a.toLowerCase()];
                if (!c) throw new TypeError("invalid suite type");
                var d = l(b, !1, c.key, c.iv);
                return f(a, d.key, d.iv)
            }
            var h = a("./aes"),
                i = a("cipher-base"),
                j = a("inherits"),
                k = a("./modes"),
                l = a("evp_bytestokey"),
                m = a("./streamCipher"),
                n = a("./authCipher");
            j(d, i), d.prototype._update = function(a) {
                this._cache.add(a);
                for (var c, d, e = []; c = this._cache.get();) d = this._mode.encrypt(this, c), e.push(d);
                return b.concat(e)
            }, d.prototype._final = function() {
                var a = this._cache.flush();
                if (this._autopadding) return a = this._mode.encrypt(this, a), this._cipher.scrub(), a;
                if ("10101010101010101010101010101010" !== a.toString("hex")) throw this._cipher.scrub(), new Error("data not multiple of block length")
            }, d.prototype.setAutoPadding = function(a) {
                return this._autopadding = !!a, this
            }, e.prototype.add = function(a) {
                this.cache = b.concat([this.cache, a])
            }, e.prototype.get = function() {
                if (this.cache.length > 15) {
                    var a = this.cache.slice(0, 16);
                    return this.cache = this.cache.slice(16), a
                }
                return null
            }, e.prototype.flush = function() {
                for (var a = 16 - this.cache.length, c = new b(a), d = -1; ++d < a;) c.writeUInt8(a, d);
                var e = b.concat([this.cache, c]);
                return e
            };
            var o = {
                ECB: a("./modes/ecb"),
                CBC: a("./modes/cbc"),
                CFB: a("./modes/cfb"),
                CFB8: a("./modes/cfb8"),
                CFB1: a("./modes/cfb1"),
                OFB: a("./modes/ofb"),
                CTR: a("./modes/ctr"),
                GCM: a("./modes/ctr")
            };
            c.createCipheriv = f, c.createCipher = g
        }).call(this, a("buffer").Buffer)
    }, {
        "./aes": 25,
        "./authCipher": 26,
        "./modes": 31,
        "./modes/cbc": 32,
        "./modes/cfb": 33,
        "./modes/cfb1": 34,
        "./modes/cfb8": 35,
        "./modes/ctr": 36,
        "./modes/ecb": 37,
        "./modes/ofb": 38,
        "./streamCipher": 39,
        buffer: 51,
        "cipher-base": 53,
        evp_bytestokey: 89,
        inherits: 101
    }],
    30: [function(a, b, c) {
        (function(a) {
            function c(b) {
                this.h = b, this.state = new a(16), this.state.fill(0), this.cache = new a("")
            }

            function d(a) {
                return [a.readUInt32BE(0), a.readUInt32BE(4), a.readUInt32BE(8), a.readUInt32BE(12)]
            }

            function e(b) {
                b = b.map(f);
                var c = new a(16);
                return c.writeUInt32BE(b[0], 0), c.writeUInt32BE(b[1], 4), c.writeUInt32BE(b[2], 8), c.writeUInt32BE(b[3], 12), c
            }

            function f(a) {
                var b, c;
                return b = a > i || 0 > a ? (c = Math.abs(a) % i, 0 > a ? i - c : c) : a
            }

            function g(a, b) {
                return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]]
            }
            var h = new a(16);
            h.fill(0), b.exports = c, c.prototype.ghash = function(a) {
                for (var b = -1; ++b < a.length;) this.state[b] ^= a[b];
                this._multiply()
            }, c.prototype._multiply = function() {
                for (var a, b, c, f = d(this.h), h = [0, 0, 0, 0], i = -1; ++i < 128;) {
                    for (b = 0 !== (this.state[~~(i / 8)] & 1 << 7 - i % 8), b && (h = g(h, f)), c = 0 !== (1 & f[3]), a = 3; a > 0; a--) f[a] = f[a] >>> 1 | (1 & f[a - 1]) << 31;
                    f[0] = f[0] >>> 1, c && (f[0] = f[0] ^ 225 << 24)
                }
                this.state = e(h)
            }, c.prototype.update = function(b) {
                this.cache = a.concat([this.cache, b]);
                for (var c; this.cache.length >= 16;) c = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(c)
            }, c.prototype["final"] = function(b, c) {
                return this.cache.length && this.ghash(a.concat([this.cache, h], 16)), this.ghash(e([0, b, 0, c])), this.state
            };
            var i = Math.pow(2, 32)
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    31: [function(a, b, c) {
        c["aes-128-ecb"] = {
            cipher: "AES",
            key: 128,
            iv: 0,
            mode: "ECB",
            type: "block"
        }, c["aes-192-ecb"] = {
            cipher: "AES",
            key: 192,
            iv: 0,
            mode: "ECB",
            type: "block"
        }, c["aes-256-ecb"] = {
            cipher: "AES",
            key: 256,
            iv: 0,
            mode: "ECB",
            type: "block"
        }, c["aes-128-cbc"] = {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CBC",
            type: "block"
        }, c["aes-192-cbc"] = {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CBC",
            type: "block"
        }, c["aes-256-cbc"] = {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CBC",
            type: "block"
        }, c.aes128 = c["aes-128-cbc"], c.aes192 = c["aes-192-cbc"], c.aes256 = c["aes-256-cbc"], c["aes-128-cfb"] = {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB",
            type: "stream"
        }, c["aes-192-cfb"] = {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB",
            type: "stream"
        }, c["aes-256-cfb"] = {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB",
            type: "stream"
        }, c["aes-128-cfb8"] = {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        }, c["aes-192-cfb8"] = {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        }, c["aes-256-cfb8"] = {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        }, c["aes-128-cfb1"] = {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        }, c["aes-192-cfb1"] = {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        }, c["aes-256-cfb1"] = {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        }, c["aes-128-ofb"] = {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "OFB",
            type: "stream"
        }, c["aes-192-ofb"] = {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "OFB",
            type: "stream"
        }, c["aes-256-ofb"] = {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "OFB",
            type: "stream"
        }, c["aes-128-ctr"] = {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CTR",
            type: "stream"
        }, c["aes-192-ctr"] = {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CTR",
            type: "stream"
        }, c["aes-256-ctr"] = {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CTR",
            type: "stream"
        }, c["aes-128-gcm"] = {
            cipher: "AES",
            key: 128,
            iv: 12,
            mode: "GCM",
            type: "auth"
        }, c["aes-192-gcm"] = {
            cipher: "AES",
            key: 192,
            iv: 12,
            mode: "GCM",
            type: "auth"
        }, c["aes-256-gcm"] = {
            cipher: "AES",
            key: 256,
            iv: 12,
            mode: "GCM",
            type: "auth"
        }
    }, {}],
    32: [function(a, b, c) {
        var d = a("buffer-xor");
        c.encrypt = function(a, b) {
            var c = d(b, a._prev);
            return a._prev = a._cipher.encryptBlock(c), a._prev
        }, c.decrypt = function(a, b) {
            var c = a._prev;
            a._prev = b;
            var e = a._cipher.decryptBlock(b);
            return d(e, c)
        }
    }, {
        "buffer-xor": 50
    }],
    33: [function(a, b, c) {
        (function(b) {
            function d(a, c, d) {
                var f = c.length,
                    g = e(c, a._cache);
                return a._cache = a._cache.slice(f), a._prev = b.concat([a._prev, d ? c : g]), g
            }
            var e = a("buffer-xor");
            c.encrypt = function(a, c, e) {
                for (var f, g = new b(""); c.length;) {
                    if (0 === a._cache.length && (a._cache = a._cipher.encryptBlock(a._prev), a._prev = new b("")), !(a._cache.length <= c.length)) {
                        g = b.concat([g, d(a, c, e)]);
                        break
                    }
                    f = a._cache.length, g = b.concat([g, d(a, c.slice(0, f), e)]), c = c.slice(f)
                }
                return g
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "buffer-xor": 50
    }],
    34: [function(a, b, c) {
        (function(a) {
            function b(a, b, c) {
                for (var e, f, g, h = -1, i = 8, j = 0; ++h < i;) e = a._cipher.encryptBlock(a._prev), f = b & 1 << 7 - h ? 128 : 0, g = e[0] ^ f, j += (128 & g) >> h % 8, a._prev = d(a._prev, c ? f : g);
                return j
            }

            function d(b, c) {
                var d = b.length,
                    e = -1,
                    f = new a(b.length);
                for (b = a.concat([b, new a([c])]); ++e < d;) f[e] = b[e] << 1 | b[e + 1] >> 7;
                return f
            }
            c.encrypt = function(c, d, e) {
                for (var f = d.length, g = new a(f), h = -1; ++h < f;) g[h] = b(c, d[h], e);
                return g
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    35: [function(a, b, c) {
        (function(a) {
            function b(b, c, d) {
                var e = b._cipher.encryptBlock(b._prev),
                    f = e[0] ^ c;
                return b._prev = a.concat([b._prev.slice(1), new a([d ? c : f])]), f
            }
            c.encrypt = function(c, d, e) {
                for (var f = d.length, g = new a(f), h = -1; ++h < f;) g[h] = b(c, d[h], e);
                return g
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    36: [function(a, b, c) {
        (function(b) {
            function d(a) {
                for (var b, c = a.length; c--;) {
                    if (b = a.readUInt8(c), 255 !== b) {
                        b++, a.writeUInt8(b, c);
                        break
                    }
                    a.writeUInt8(0, c)
                }
            }

            function e(a) {
                var b = a._cipher.encryptBlock(a._prev);
                return d(a._prev), b
            }
            var f = a("buffer-xor");
            c.encrypt = function(a, c) {
                for (; a._cache.length < c.length;) a._cache = b.concat([a._cache, e(a)]);
                var d = a._cache.slice(0, c.length);
                return a._cache = a._cache.slice(c.length), f(c, d)
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "buffer-xor": 50
    }],
    37: [function(a, b, c) {
        c.encrypt = function(a, b) {
            return a._cipher.encryptBlock(b)
        }, c.decrypt = function(a, b) {
            return a._cipher.decryptBlock(b)
        }
    }, {}],
    38: [function(a, b, c) {
        (function(b) {
            function d(a) {
                return a._prev = a._cipher.encryptBlock(a._prev), a._prev
            }
            var e = a("buffer-xor");
            c.encrypt = function(a, c) {
                for (; a._cache.length < c.length;) a._cache = b.concat([a._cache, d(a)]);
                var f = a._cache.slice(0, c.length);
                return a._cache = a._cache.slice(c.length), e(c, f)
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "buffer-xor": 50
    }],
    39: [function(a, b, c) {
        (function(c) {
            function d(a, b, g, h) {
                return this instanceof d ? (f.call(this),
                    this._cipher = new e.AES(b), this._prev = new c(g.length), this._cache = new c(""), this._secCache = new c(""), this._decrypt = h, g.copy(this._prev), void(this._mode = a)) : new d(a, b, g)
            }
            var e = a("./aes"),
                f = a("cipher-base"),
                g = a("inherits");
            g(d, f), b.exports = d, d.prototype._update = function(a) {
                return this._mode.encrypt(this, a, this._decrypt)
            }, d.prototype._final = function() {
                this._cipher.scrub()
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./aes": 25,
        buffer: 51,
        "cipher-base": 53,
        inherits: 101
    }],
    40: [function(a, b, c) {
        function d(a, b) {
            var c, d;
            if (a = a.toLowerCase(), m[a]) c = m[a].key, d = m[a].iv;
            else {
                if (!l[a]) throw new TypeError("invalid suite type");
                c = 8 * l[a].key, d = l[a].iv
            }
            var e = i(b, !1, c, d);
            return f(a, e.key, e.iv)
        }

        function e(a, b) {
            var c, d;
            if (a = a.toLowerCase(), m[a]) c = m[a].key, d = m[a].iv;
            else {
                if (!l[a]) throw new TypeError("invalid suite type");
                c = 8 * l[a].key, d = l[a].iv
            }
            var e = i(b, !1, c, d);
            return g(a, e.key, e.iv)
        }

        function f(a, b, c) {
            if (a = a.toLowerCase(), m[a]) return j.createCipheriv(a, b, c);
            if (l[a]) return new k({
                key: b,
                iv: c,
                mode: a
            });
            throw new TypeError("invalid suite type")
        }

        function g(a, b, c) {
            if (a = a.toLowerCase(), m[a]) return j.createDecipheriv(a, b, c);
            if (l[a]) return new k({
                key: b,
                iv: c,
                mode: a,
                decrypt: !0
            });
            throw new TypeError("invalid suite type")
        }

        function h() {
            return Object.keys(l).concat(j.getCiphers())
        }
        var i = a("evp_bytestokey"),
            j = a("browserify-aes/browser"),
            k = a("browserify-des"),
            l = a("browserify-des/modes"),
            m = a("browserify-aes/modes");
        c.createCipher = c.Cipher = d, c.createCipheriv = c.Cipheriv = f, c.createDecipher = c.Decipher = e, c.createDecipheriv = c.Decipheriv = g, c.listCiphers = c.getCiphers = h
    }, {
        "browserify-aes/browser": 27,
        "browserify-aes/modes": 31,
        "browserify-des": 41,
        "browserify-des/modes": 42,
        evp_bytestokey: 89
    }],
    41: [function(a, b, c) {
        (function(c) {
            function d(a) {
                e.call(this);
                var b, d = a.mode.toLowerCase(),
                    f = h[d];
                b = a.decrypt ? "decrypt" : "encrypt";
                var g = a.key;
                ("des-ede" === d || "des-ede-cbc" === d) && (g = c.concat([g, g.slice(0, 8)]));
                var i = a.iv;
                this._des = f.create({
                    key: g,
                    iv: i,
                    type: b
                })
            }
            var e = a("cipher-base"),
                f = a("des.js"),
                g = a("inherits"),
                h = {
                    "des-ede3-cbc": f.CBC.instantiate(f.EDE),
                    "des-ede3": f.EDE,
                    "des-ede-cbc": f.CBC.instantiate(f.EDE),
                    "des-ede": f.EDE,
                    "des-cbc": f.CBC.instantiate(f.DES),
                    "des-ecb": f.DES
                };
            h.des = h["des-cbc"], h.des3 = h["des-ede3-cbc"], b.exports = d, g(d, e), d.prototype._update = function(a) {
                return new c(this._des.update(a))
            }, d.prototype._final = function() {
                return new c(this._des["final"]())
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "cipher-base": 53,
        "des.js": 61,
        inherits: 101
    }],
    42: [function(a, b, c) {
        c["des-ecb"] = {
            key: 8,
            iv: 0
        }, c["des-cbc"] = c.des = {
            key: 8,
            iv: 8
        }, c["des-ede3-cbc"] = c.des3 = {
            key: 24,
            iv: 8
        }, c["des-ede3"] = {
            key: 24,
            iv: 0
        }, c["des-ede-cbc"] = {
            key: 16,
            iv: 8
        }, c["des-ede"] = {
            key: 16,
            iv: 0
        }
    }, {}],
    43: [function(a, b, c) {
        (function(c) {
            function d(a) {
                var b = f(a),
                    c = b.toRed(g.mont(a.modulus)).redPow(new g(a.publicExponent)).fromRed();
                return {
                    blinder: c,
                    unblinder: b.invm(a.modulus)
                }
            }

            function e(a, b) {
                var e = d(b),
                    f = b.modulus.byteLength(),
                    h = (g.mont(b.modulus), new g(a).mul(e.blinder).umod(b.modulus)),
                    i = h.toRed(g.mont(b.prime1)),
                    j = h.toRed(g.mont(b.prime2)),
                    k = b.coefficient,
                    l = b.prime1,
                    m = b.prime2,
                    n = i.redPow(b.exponent1),
                    o = j.redPow(b.exponent2);
                n = n.fromRed(), o = o.fromRed();
                var p = n.isub(o).imul(k).umod(l);
                return p.imul(m), o.iadd(p), new c(o.imul(e.unblinder).umod(b.modulus).toArray(!1, f))
            }

            function f(a) {
                for (var b = a.modulus.byteLength(), c = new g(h(b)); c.cmp(a.modulus) >= 0 || !c.umod(a.prime1) || !c.umod(a.prime2);) c = new g(h(b));
                return c
            }
            var g = a("bn.js"),
                h = a("randombytes");
            b.exports = e, e.getr = f
        }).call(this, a("buffer").Buffer)
    }, {
        "bn.js": 22,
        buffer: 51,
        randombytes: 200
    }],
    44: [function(a, b, c) {
        (function(a) {
            "use strict";
            c["RSA-SHA224"] = c.sha224WithRSAEncryption = {
                sign: "rsa",
                hash: "sha224",
                id: new a("302d300d06096086480165030402040500041c", "hex")
            }, c["RSA-SHA256"] = c.sha256WithRSAEncryption = {
                sign: "rsa",
                hash: "sha256",
                id: new a("3031300d060960864801650304020105000420", "hex")
            }, c["RSA-SHA384"] = c.sha384WithRSAEncryption = {
                sign: "rsa",
                hash: "sha384",
                id: new a("3041300d060960864801650304020205000430", "hex")
            }, c["RSA-SHA512"] = c.sha512WithRSAEncryption = {
                sign: "rsa",
                hash: "sha512",
                id: new a("3051300d060960864801650304020305000440", "hex")
            }, c["RSA-SHA1"] = {
                sign: "rsa",
                hash: "sha1",
                id: new a("3021300906052b0e03021a05000414", "hex")
            }, c["ecdsa-with-SHA1"] = {
                sign: "ecdsa",
                hash: "sha1",
                id: new a("", "hex")
            }, c.DSA = c["DSA-SHA1"] = c["DSA-SHA"] = {
                sign: "dsa",
                hash: "sha1",
                id: new a("", "hex")
            }, c["DSA-SHA224"] = c["DSA-WITH-SHA224"] = {
                sign: "dsa",
                hash: "sha224",
                id: new a("", "hex")
            }, c["DSA-SHA256"] = c["DSA-WITH-SHA256"] = {
                sign: "dsa",
                hash: "sha256",
                id: new a("", "hex")
            }, c["DSA-SHA384"] = c["DSA-WITH-SHA384"] = {
                sign: "dsa",
                hash: "sha384",
                id: new a("", "hex")
            }, c["DSA-SHA512"] = c["DSA-WITH-SHA512"] = {
                sign: "dsa",
                hash: "sha512",
                id: new a("", "hex")
            }, c["DSA-RIPEMD160"] = {
                sign: "dsa",
                hash: "rmd160",
                id: new a("", "hex")
            }, c["RSA-RIPEMD160"] = c.ripemd160WithRSA = {
                sign: "rsa",
                hash: "rmd160",
                id: new a("3021300906052b2403020105000414", "hex")
            }, c["RSA-MD5"] = c.md5WithRSAEncryption = {
                sign: "rsa",
                hash: "md5",
                id: new a("3020300c06082a864886f70d020505000410", "hex")
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    45: [function(a, b, c) {
        (function(c) {
            function d(a) {
                l.Writable.call(this);
                var b = n[a];
                if (!b) throw new Error("Unknown message digest");
                this._hashType = b.hash, this._hash = i(b.hash), this._tag = b.id, this._signType = b.sign
            }

            function e(a) {
                l.Writable.call(this);
                var b = n[a];
                if (!b) throw new Error("Unknown message digest");
                this._hash = i(b.hash), this._tag = b.id, this._signType = b.sign
            }

            function f(a) {
                return new d(a)
            }

            function g(a) {
                return new e(a)
            }
            var h = a("./algos"),
                i = a("create-hash"),
                j = a("inherits"),
                k = a("./sign"),
                l = a("stream"),
                m = a("./verify"),
                n = {};
            Object.keys(h).forEach(function(a) {
                n[a] = n[a.toLowerCase()] = h[a]
            }), j(d, l.Writable), d.prototype._write = function(a, b, c) {
                this._hash.update(a), c()
            }, d.prototype.update = function(a, b) {
                return "string" == typeof a && (a = new c(a, b)), this._hash.update(a), this
            }, d.prototype.sign = function(a, b) {
                this.end();
                var d = this._hash.digest(),
                    e = k(c.concat([this._tag, d]), a, this._hashType, this._signType);
                return b ? e.toString(b) : e
            }, j(e, l.Writable), e.prototype._write = function(a, b, c) {
                this._hash.update(a), c()
            }, e.prototype.update = function(a, b) {
                return "string" == typeof a && (a = new c(a, b)), this._hash.update(a), this
            }, e.prototype.verify = function(a, b, d) {
                "string" == typeof b && (b = new c(b, d)), this.end();
                var e = this._hash.digest();
                return m(b, c.concat([this._tag, e]), a, this._signType)
            }, b.exports = {
                Sign: f,
                Verify: g,
                createSign: f,
                createVerify: g
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./algos": 44,
        "./sign": 47,
        "./verify": 48,
        buffer: 51,
        "create-hash": 56,
        inherits: 101,
        stream: 231
    }],
    46: [function(a, b, c) {
        "use strict";
        c["1.3.132.0.10"] = "secp256k1", c["1.3.132.0.33"] = "p224", c["1.2.840.10045.3.1.1"] = "p192", c["1.2.840.10045.3.1.7"] = "p256", c["1.3.132.0.34"] = "p384", c["1.3.132.0.35"] = "p521"
    }, {}],
    47: [function(a, b, c) {
        (function(c) {
            function d(a, b, c, d) {
                var g = q(b);
                if (g.curve) {
                    if ("ecdsa" !== d) throw new Error("wrong private key type");
                    return e(a, g)
                }
                if ("dsa" === g.type) {
                    if ("dsa" !== d) throw new Error("wrong private key type");
                    return f(a, g, c)
                }
                if ("rsa" !== d) throw new Error("wrong private key type");
                for (var h = g.modulus.byteLength(), i = [0, 1]; a.length + i.length + 1 < h;) i.push(255);
                i.push(0);
                for (var j = -1; ++j < a.length;) i.push(a[j]);
                var k = n(i, g);
                return k
            }

            function e(a, b) {
                var d = o[b.curve.join(".")];
                if (!d) throw new Error("unknown curve " + b.curve.join("."));
                var e = new s(d),
                    f = e.genKeyPair();
                f._importPrivate(b.privateKey);
                var g = f.sign(a);
                return new c(g.toDER())
            }

            function f(a, b, c) {
                for (var d, e = b.params.priv_key, f = b.params.p, j = b.params.q, m = b.params.g, n = new r(0), o = i(a, j).mod(j), p = !1, q = h(e, j, a, c); p === !1;) d = k(j, q, c), n = l(m, d, f, j), p = d.invm(j).imul(o.add(e.mul(n))).mod(j), p.cmpn(0) || (p = !1, n = new r(0));
                return g(n, p)
            }

            function g(a, b) {
                a = a.toArray(), b = b.toArray(), 128 & a[0] && (a = [0].concat(a)), 128 & b[0] && (b = [0].concat(b));
                var d = a.length + b.length + 4,
                    e = [48, d, 2, a.length];
                return e = e.concat(a, [2, b.length], b), new c(e)
            }

            function h(a, b, d, e) {
                if (a = new c(a.toArray()), a.length < b.byteLength()) {
                    var f = new c(b.byteLength() - a.length);
                    f.fill(0), a = c.concat([f, a])
                }
                var g = d.length,
                    h = j(d, b),
                    i = new c(g);
                i.fill(1);
                var k = new c(g);
                return k.fill(0), k = m(e, k).update(i).update(new c([0])).update(a).update(h).digest(), i = m(e, k).update(i).digest(), k = m(e, k).update(i).update(new c([1])).update(a).update(h).digest(), i = m(e, k).update(i).digest(), {
                    k: k,
                    v: i
                }
            }

            function i(a, b) {
                var c = new r(a),
                    d = (a.length << 3) - b.bitLength();
                return d > 0 && c.ishrn(d), c
            }

            function j(a, b) {
                a = i(a, b), a = a.mod(b);
                var d = new c(a.toArray());
                if (d.length < b.byteLength()) {
                    var e = new c(b.byteLength() - d.length);
                    e.fill(0), d = c.concat([e, d])
                }
                return d
            }

            function k(a, b, d) {
                var e, f;
                do {
                    for (e = new c(""); 8 * e.length < a.bitLength();) b.v = m(d, b.k).update(b.v).digest(), e = c.concat([e, b.v]);
                    f = i(e, a), b.k = m(d, b.k).update(b.v).update(new c([0])).digest(), b.v = m(d, b.k).update(b.v).digest()
                } while (-1 !== f.cmp(a));
                return f
            }

            function l(a, b, c, d) {
                return a.toRed(r.mont(c)).redPow(b).fromRed().mod(d)
            }
            var m = a("create-hmac"),
                n = a("browserify-rsa"),
                o = a("./curves"),
                p = a("elliptic"),
                q = a("parse-asn1"),
                r = a("bn.js"),
                s = p.ec;
            b.exports = d, b.exports.getKey = h, b.exports.makeKey = k
        }).call(this, a("buffer").Buffer)
    }, {
        "./curves": 46,
        "bn.js": 22,
        "browserify-rsa": 43,
        buffer: 51,
        "create-hmac": 59,
        elliptic: 71,
        "parse-asn1": 117
    }],
    48: [function(a, b, c) {
        (function(c) {
            function d(a, b, d, g) {
                var h = j(d);
                if ("ec" === h.type) {
                    if ("ecdsa" !== g) throw new Error("wrong public key type");
                    return e(a, b, h)
                }
                if ("dsa" === h.type) {
                    if ("dsa" !== g) throw new Error("wrong public key type");
                    return f(a, b, h)
                }
                if ("rsa" !== g) throw new Error("wrong public key type");
                for (var i = h.modulus.byteLength(), l = [1], m = 0; b.length + l.length + 2 < i;) l.push(255), m++;
                l.push(0);
                for (var n = -1; ++n < b.length;) l.push(b[n]);
                l = new c(l);
                var o = k.mont(h.modulus);
                a = new k(a).toRed(o), a = a.redPow(new k(h.publicExponent)), a = new c(a.fromRed().toArray());
                var p = 0;
                for (8 > m && (p = 1), i = Math.min(a.length, l.length), a.length !== l.length && (p = 1), n = -1; ++n < i;) p |= a[n] ^ l[n];
                return 0 === p
            }

            function e(a, b, c) {
                var d = h[c.data.algorithm.curve.join(".")];
                if (!d) throw new Error("unknown curve " + c.data.algorithm.curve.join("."));
                var e = new l(d),
                    f = c.data.subjectPrivateKey.data;
                return e.verify(b, a, f)
            }

            function f(a, b, c) {
                var d = c.data.p,
                    e = c.data.q,
                    f = c.data.g,
                    h = c.data.pub_key,
                    i = j.signature.decode(a, "der"),
                    l = i.s,
                    m = i.r;
                g(l, e), g(m, e);
                var n = k.mont(d),
                    o = l.invm(e),
                    p = f.toRed(n).redPow(new k(b).mul(o).mod(e)).fromRed().mul(h.toRed(n).redPow(m.mul(o).mod(e)).fromRed()).mod(d).mod(e);
                return !p.cmp(m)
            }

            function g(a, b) {
                if (a.cmpn(0) <= 0) throw new Error("invalid sig");
                if (a.cmp(b) >= b) throw new Error("invalid sig")
            }
            var h = a("./curves"),
                i = a("elliptic"),
                j = a("parse-asn1"),
                k = a("bn.js"),
                l = i.ec;
            b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "./curves": 46,
        "bn.js": 22,
        buffer: 51,
        elliptic: 71,
        "parse-asn1": 117
    }],
    49: [function(a, b, c) {
        arguments[4][24][0].apply(c, arguments)
    }, {
        dup: 24
    }],
    50: [function(a, b, c) {
        (function(a) {
            b.exports = function(b, c) {
                for (var d = Math.min(b.length, c.length), e = new a(d), f = 0; d > f; ++f) e[f] = b[f] ^ c[f];
                return e
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    51: [function(a, b, c) {
        (function(b) {
            "use strict";

            function d() {
                function a() {}
                try {
                    var b = new Uint8Array(1);
                    return b.foo = function() {
                        return 42
                    }, b.constructor = a, 42 === b.foo() && b.constructor === a && "function" == typeof b.subarray && 0 === b.subarray(1, 1).byteLength
                } catch (c) {
                    return !1
                }
            }

            function e() {
                return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function f(a) {
                return this instanceof f ? (f.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof a ? g(this, a) : "string" == typeof a ? h(this, a, arguments.length > 1 ? arguments[1] : "utf8") : i(this, a)) : arguments.length > 1 ? new f(a, arguments[1]) : new f(a)
            }

            function g(a, b) {
                if (a = p(a, 0 > b ? 0 : 0 | q(b)), !f.TYPED_ARRAY_SUPPORT)
                    for (var c = 0; b > c; c++) a[c] = 0;
                return a
            }

            function h(a, b, c) {
                ("string" != typeof c || "" === c) && (c = "utf8");
                var d = 0 | s(b, c);
                return a = p(a, d), a.write(b, c), a
            }

            function i(a, b) {
                if (f.isBuffer(b)) return j(a, b);
                if (Y(b)) return k(a, b);
                if (null == b) throw new TypeError("must start with number, buffer, array or string");
                if ("undefined" != typeof ArrayBuffer) {
                    if (b.buffer instanceof ArrayBuffer) return l(a, b);
                    if (b instanceof ArrayBuffer) return m(a, b)
                }
                return b.length ? n(a, b) : o(a, b)
            }

            function j(a, b) {
                var c = 0 | q(b.length);
                return a = p(a, c), b.copy(a, 0, 0, c), a
            }

            function k(a, b) {
                var c = 0 | q(b.length);
                a = p(a, c);
                for (var d = 0; c > d; d += 1) a[d] = 255 & b[d];
                return a
            }

            function l(a, b) {
                var c = 0 | q(b.length);
                a = p(a, c);
                for (var d = 0; c > d; d += 1) a[d] = 255 & b[d];
                return a
            }

            function m(a, b) {
                return f.TYPED_ARRAY_SUPPORT ? (b.byteLength, a = f._augment(new Uint8Array(b))) : a = l(a, new Uint8Array(b)), a
            }

            function n(a, b) {
                var c = 0 | q(b.length);
                a = p(a, c);
                for (var d = 0; c > d; d += 1) a[d] = 255 & b[d];
                return a
            }

            function o(a, b) {
                var c, d = 0;
                "Buffer" === b.type && Y(b.data) && (c = b.data, d = 0 | q(c.length)), a = p(a, d);
                for (var e = 0; d > e; e += 1) a[e] = 255 & c[e];
                return a
            }

            function p(a, b) {
                f.TYPED_ARRAY_SUPPORT ? (a = f._augment(new Uint8Array(b)), a.__proto__ = f.prototype) : (a.length = b, a._isBuffer = !0);
                var c = 0 !== b && b <= f.poolSize >>> 1;
                return c && (a.parent = Z), a
            }

            function q(a) {
                if (a >= e()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e().toString(16) + " bytes");
                return 0 | a
            }

            function r(a, b) {
                if (!(this instanceof r)) return new r(a, b);
                var c = new f(a, b);
                return delete c.parent, c
            }

            function s(a, b) {
                "string" != typeof a && (a = "" + a);
                var c = a.length;
                if (0 === c) return 0;
                for (var d = !1;;) switch (b) {
                    case "ascii":
                    case "binary":
                    case "raw":
                    case "raws":
                        return c;
                    case "utf8":
                    case "utf-8":
                        return R(a).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * c;
                    case "hex":
                        return c >>> 1;
                    case "base64":
                        return U(a).length;
                    default:
                        if (d) return R(a).length;
                        b = ("" + b).toLowerCase(), d = !0
                }
            }

            function t(a, b, c) {
                var d = !1;
                if (b = 0 | b, c = void 0 === c || c === 1 / 0 ? this.length : 0 | c, a || (a = "utf8"), 0 > b && (b = 0), c > this.length && (c = this.length), b >= c) return "";
                for (;;) switch (a) {
                    case "hex":
                        return F(this, b, c);
                    case "utf8":
                    case "utf-8":
                        return B(this, b, c);
                    case "ascii":
                        return D(this, b, c);
                    case "binary":
                        return E(this, b, c);
                    case "base64":
                        return A(this, b, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return G(this, b, c);
                    default:
                        if (d) throw new TypeError("Unknown encoding: " + a);
                        a = (a + "").toLowerCase(), d = !0
                }
            }

            function u(a, b, c, d) {
                c = Number(c) || 0;
                var e = a.length - c;
                d ? (d = Number(d), d > e && (d = e)) : d = e;
                var f = b.length;
                if (f % 2 !== 0) throw new Error("Invalid hex string");
                d > f / 2 && (d = f / 2);
                for (var g = 0; d > g; g++) {
                    var h = parseInt(b.substr(2 * g, 2), 16);
                    if (isNaN(h)) throw new Error("Invalid hex string");
                    a[c + g] = h
                }
                return g
            }

            function v(a, b, c, d) {
                return V(R(b, a.length - c), a, c, d)
            }

            function w(a, b, c, d) {
                return V(S(b), a, c, d)
            }

            function x(a, b, c, d) {
                return w(a, b, c, d)
            }

            function y(a, b, c, d) {
                return V(U(b), a, c, d)
            }

            function z(a, b, c, d) {
                return V(T(b, a.length - c), a, c, d)
            }

            function A(a, b, c) {
                return 0 === b && c === a.length ? W.fromByteArray(a) : W.fromByteArray(a.slice(b, c))
            }

            function B(a, b, c) {
                c = Math.min(a.length, c);
                for (var d = [], e = b; c > e;) {
                    var f = a[e],
                        g = null,
                        h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (c >= e + h) {
                        var i, j, k, l;
                        switch (h) {
                            case 1:
                                128 > f && (g = f);
                                break;
                            case 2:
                                i = a[e + 1], 128 === (192 & i) && (l = (31 & f) << 6 | 63 & i, l > 127 && (g = l));
                                break;
                            case 3:
                                i = a[e + 1], j = a[e + 2], 128 === (192 & i) && 128 === (192 & j) && (l = (15 & f) << 12 | (63 & i) << 6 | 63 & j, l > 2047 && (55296 > l || l > 57343) && (g = l));
                                break;
                            case 4:
                                i = a[e + 1], j = a[e + 2], k = a[e + 3], 128 === (192 & i) && 128 === (192 & j) && 128 === (192 & k) && (l = (15 & f) << 18 | (63 & i) << 12 | (63 & j) << 6 | 63 & k, l > 65535 && 1114112 > l && (g = l))
                        }
                    }
                    null === g ? (g = 65533, h = 1) : g > 65535 && (g -= 65536, d.push(g >>> 10 & 1023 | 55296), g = 56320 | 1023 & g), d.push(g), e += h
                }
                return C(d)
            }

            function C(a) {
                var b = a.length;
                if ($ >= b) return String.fromCharCode.apply(String, a);
                for (var c = "", d = 0; b > d;) c += String.fromCharCode.apply(String, a.slice(d, d += $));
                return c
            }

            function D(a, b, c) {
                var d = "";
                c = Math.min(a.length, c);
                for (var e = b; c > e; e++) d += String.fromCharCode(127 & a[e]);
                return d
            }

            function E(a, b, c) {
                var d = "";
                c = Math.min(a.length, c);
                for (var e = b; c > e; e++) d += String.fromCharCode(a[e]);
                return d
            }

            function F(a, b, c) {
                var d = a.length;
                (!b || 0 > b) && (b = 0), (!c || 0 > c || c > d) && (c = d);
                for (var e = "", f = b; c > f; f++) e += Q(a[f]);
                return e
            }

            function G(a, b, c) {
                for (var d = a.slice(b, c), e = "", f = 0; f < d.length; f += 2) e += String.fromCharCode(d[f] + 256 * d[f + 1]);
                return e
            }

            function H(a, b, c) {
                if (a % 1 !== 0 || 0 > a) throw new RangeError("offset is not uint");
                if (a + b > c) throw new RangeError("Trying to access beyond buffer length")
            }

            function I(a, b, c, d, e, g) {
                if (!f.isBuffer(a)) throw new TypeError("buffer must be a Buffer instance");
                if (b > e || g > b) throw new RangeError("value is out of bounds");
                if (c + d > a.length) throw new RangeError("index out of range")
            }

            function J(a, b, c, d) {
                0 > b && (b = 65535 + b + 1);
                for (var e = 0, f = Math.min(a.length - c, 2); f > e; e++) a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e)
            }

            function K(a, b, c, d) {
                0 > b && (b = 4294967295 + b + 1);
                for (var e = 0, f = Math.min(a.length - c, 4); f > e; e++) a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255
            }

            function L(a, b, c, d, e, f) {
                if (b > e || f > b) throw new RangeError("value is out of bounds");
                if (c + d > a.length) throw new RangeError("index out of range");
                if (0 > c) throw new RangeError("index out of range")
            }

            function M(a, b, c, d, e) {
                return e || L(a, b, c, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(a, b, c, d, 23, 4), c + 4
            }

            function N(a, b, c, d, e) {
                return e || L(a, b, c, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(a, b, c, d, 52, 8), c + 8
            }

            function O(a) {
                if (a = P(a).replace(aa, ""), a.length < 2) return "";
                for (; a.length % 4 !== 0;) a += "=";
                return a
            }

            function P(a) {
                return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
            }

            function Q(a) {
                return 16 > a ? "0" + a.toString(16) : a.toString(16)
            }

            function R(a, b) {
                b = b || 1 / 0;
                for (var c, d = a.length, e = null, f = [], g = 0; d > g; g++) {
                    if (c = a.charCodeAt(g), c > 55295 && 57344 > c) {
                        if (!e) {
                            if (c > 56319) {
                                (b -= 3) > -1 && f.push(239, 191, 189);
                                continue
                            }
                            if (g + 1 === d) {
                                (b -= 3) > -1 && f.push(239, 191, 189);
                                continue
                            }
                            e = c;
                            continue
                        }
                        if (56320 > c) {
                            (b -= 3) > -1 && f.push(239, 191, 189), e = c;
                            continue
                        }
                        c = (e - 55296 << 10 | c - 56320) + 65536
                    } else e && (b -= 3) > -1 && f.push(239, 191, 189);
                    if (e = null, 128 > c) {
                        if ((b -= 1) < 0) break;
                        f.push(c)
                    } else if (2048 > c) {
                        if ((b -= 2) < 0) break;
                        f.push(c >> 6 | 192, 63 & c | 128)
                    } else if (65536 > c) {
                        if ((b -= 3) < 0) break;
                        f.push(c >> 12 | 224, c >> 6 & 63 | 128, 63 & c | 128)
                    } else {
                        if (!(1114112 > c)) throw new Error("Invalid code point");
                        if ((b -= 4) < 0) break;
                        f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, 63 & c | 128)
                    }
                }
                return f
            }

            function S(a) {
                for (var b = [], c = 0; c < a.length; c++) b.push(255 & a.charCodeAt(c));
                return b
            }

            function T(a, b) {
                for (var c, d, e, f = [], g = 0; g < a.length && !((b -= 2) < 0); g++) c = a.charCodeAt(g), d = c >> 8, e = c % 256, f.push(e), f.push(d);
                return f
            }

            function U(a) {
                return W.toByteArray(O(a))
            }

            function V(a, b, c, d) {
                for (var e = 0; d > e && !(e + c >= b.length || e >= a.length); e++) b[e + c] = a[e];
                return e
            }
            var W = a("base64-js"),
                X = a("ieee754"),
                Y = a("isarray");
            c.Buffer = f, c.SlowBuffer = r, c.INSPECT_MAX_BYTES = 50, f.poolSize = 8192;
            var Z = {};
            f.TYPED_ARRAY_SUPPORT = void 0 !== b.TYPED_ARRAY_SUPPORT ? b.TYPED_ARRAY_SUPPORT : d(), f.TYPED_ARRAY_SUPPORT ? (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array) : (f.prototype.length = void 0, f.prototype.parent = void 0), f.isBuffer = function(a) {
                return !(null == a || !a._isBuffer)
            }, f.compare = function(a, b) {
                if (!f.isBuffer(a) || !f.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
                if (a === b) return 0;
                for (var c = a.length, d = b.length, e = 0, g = Math.min(c, d); g > e && a[e] === b[e];) ++e;
                return e !== g && (c = a[e], d = b[e]), d > c ? -1 : c > d ? 1 : 0
            }, f.isEncoding = function(a) {
                switch (String(a).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, f.concat = function(a, b) {
                if (!Y(a)) throw new TypeError("list argument must be an Array of Buffers.");
                if (0 === a.length) return new f(0);
                var c;
                if (void 0 === b)
                    for (b = 0, c = 0; c < a.length; c++) b += a[c].length;
                var d = new f(b),
                    e = 0;
                for (c = 0; c < a.length; c++) {
                    var g = a[c];
                    g.copy(d, e), e += g.length
                }
                return d
            }, f.byteLength = s, f.prototype.toString = function() {
                var a = 0 | this.length;
                return 0 === a ? "" : 0 === arguments.length ? B(this, 0, a) : t.apply(this, arguments)
            }, f.prototype.equals = function(a) {
                if (!f.isBuffer(a)) throw new TypeError("Argument must be a Buffer");
                return this === a ? !0 : 0 === f.compare(this, a)
            }, f.prototype.inspect = function() {
                var a = "",
                    b = c.INSPECT_MAX_BYTES;
                return this.length > 0 && (a = this.toString("hex", 0, b).match(/.{2}/g).join(" "), this.length > b && (a += " ... ")), "<Buffer " + a + ">"
            }, f.prototype.compare = function(a) {
                if (!f.isBuffer(a)) throw new TypeError("Argument must be a Buffer");
                return this === a ? 0 : f.compare(this, a)
            }, f.prototype.indexOf = function(a, b) {
                function c(a, b, c) {
                    for (var d = -1, e = 0; c + e < a.length; e++)
                        if (a[c + e] === b[-1 === d ? 0 : e - d]) {
                            if (-1 === d && (d = e), e - d + 1 === b.length) return c + d
                        } else d = -1;
                    return -1
                }
                if (b > 2147483647 ? b = 2147483647 : -2147483648 > b && (b = -2147483648), b >>= 0, 0 === this.length) return -1;
                if (b >= this.length) return -1;
                if (0 > b && (b = Math.max(this.length + b, 0)), "string" == typeof a) return 0 === a.length ? -1 : String.prototype.indexOf.call(this, a, b);
                if (f.isBuffer(a)) return c(this, a, b);
                if ("number" == typeof a) return f.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, a, b) : c(this, [a], b);
                throw new TypeError("val must be string, number or Buffer")
            }, f.prototype.get = function(a) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(a)
            }, f.prototype.set = function(a, b) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(a, b)
            }, f.prototype.write = function(a, b, c, d) {
                if (void 0 === b) d = "utf8", c = this.length, b = 0;
                else if (void 0 === c && "string" == typeof b) d = b, c = this.length, b = 0;
                else if (isFinite(b)) b = 0 | b, isFinite(c) ? (c = 0 | c, void 0 === d && (d = "utf8")) : (d = c, c = void 0);
                else {
                    var e = d;
                    d = b, b = 0 | c, c = e
                }
                var f = this.length - b;
                if ((void 0 === c || c > f) && (c = f), a.length > 0 && (0 > c || 0 > b) || b > this.length) throw new RangeError("attempt to write outside buffer bounds");
                d || (d = "utf8");
                for (var g = !1;;) switch (d) {
                    case "hex":
                        return u(this, a, b, c);
                    case "utf8":
                    case "utf-8":
                        return v(this, a, b, c);
                    case "ascii":
                        return w(this, a, b, c);
                    case "binary":
                        return x(this, a, b, c);
                    case "base64":
                        return y(this, a, b, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return z(this, a, b, c);
                    default:
                        if (g) throw new TypeError("Unknown encoding: " + d);
                        d = ("" + d).toLowerCase(), g = !0
                }
            }, f.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var $ = 4096;
            f.prototype.slice = function(a, b) {
                var c = this.length;
                a = ~~a, b = void 0 === b ? c : ~~b, 0 > a ? (a += c, 0 > a && (a = 0)) : a > c && (a = c), 0 > b ? (b += c, 0 > b && (b = 0)) : b > c && (b = c), a > b && (b = a);
                var d;
                if (f.TYPED_ARRAY_SUPPORT) d = f._augment(this.subarray(a, b));
                else {
                    var e = b - a;
                    d = new f(e, void 0);
                    for (var g = 0; e > g; g++) d[g] = this[g + a]
                }
                return d.length && (d.parent = this.parent || this), d
            }, f.prototype.readUIntLE = function(a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);) d += this[a + f] * e;
                return d
            }, f.prototype.readUIntBE = function(a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = this[a + --b], e = 1; b > 0 && (e *= 256);) d += this[a + --b] * e;
                return d
            }, f.prototype.readUInt8 = function(a, b) {
                return b || H(a, 1, this.length), this[a]
            }, f.prototype.readUInt16LE = function(a, b) {
                return b || H(a, 2, this.length), this[a] | this[a + 1] << 8
            }, f.prototype.readUInt16BE = function(a, b) {
                return b || H(a, 2, this.length), this[a] << 8 | this[a + 1]
            }, f.prototype.readUInt32LE = function(a, b) {
                return b || H(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3]
            }, f.prototype.readUInt32BE = function(a, b) {
                return b || H(a, 4, this.length), 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3])
            }, f.prototype.readIntLE = function(a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);) d += this[a + f] * e;
                return e *= 128, d >= e && (d -= Math.pow(2, 8 * b)), d
            }, f.prototype.readIntBE = function(a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = b, e = 1, f = this[a + --d]; d > 0 && (e *= 256);) f += this[a + --d] * e;
                return e *= 128, f >= e && (f -= Math.pow(2, 8 * b)), f
            }, f.prototype.readInt8 = function(a, b) {
                return b || H(a, 1, this.length), 128 & this[a] ? -1 * (255 - this[a] + 1) : this[a]
            }, f.prototype.readInt16LE = function(a, b) {
                b || H(a, 2, this.length);
                var c = this[a] | this[a + 1] << 8;
                return 32768 & c ? 4294901760 | c : c
            }, f.prototype.readInt16BE = function(a, b) {
                b || H(a, 2, this.length);
                var c = this[a + 1] | this[a] << 8;
                return 32768 & c ? 4294901760 | c : c
            }, f.prototype.readInt32LE = function(a, b) {
                return b || H(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24
            }, f.prototype.readInt32BE = function(a, b) {
                return b || H(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]
            }, f.prototype.readFloatLE = function(a, b) {
                return b || H(a, 4, this.length), X.read(this, a, !0, 23, 4)
            }, f.prototype.readFloatBE = function(a, b) {
                return b || H(a, 4, this.length), X.read(this, a, !1, 23, 4)
            }, f.prototype.readDoubleLE = function(a, b) {
                return b || H(a, 8, this.length), X.read(this, a, !0, 52, 8)
            }, f.prototype.readDoubleBE = function(a, b) {
                return b || H(a, 8, this.length), X.read(this, a, !1, 52, 8)
            }, f.prototype.writeUIntLE = function(a, b, c, d) {
                a = +a, b = 0 | b, c = 0 | c, d || I(this, a, b, c, Math.pow(2, 8 * c), 0);
                var e = 1,
                    f = 0;
                for (this[b] = 255 & a; ++f < c && (e *= 256);) this[b + f] = a / e & 255;
                return b + c
            }, f.prototype.writeUIntBE = function(a, b, c, d) {
                a = +a, b = 0 | b, c = 0 | c, d || I(this, a, b, c, Math.pow(2, 8 * c), 0);
                var e = c - 1,
                    f = 1;
                for (this[b + e] = 255 & a; --e >= 0 && (f *= 256);) this[b + e] = a / f & 255;
                return b + c
            }, f.prototype.writeUInt8 = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (a = Math.floor(a)), this[b] = 255 & a, b + 1
            }, f.prototype.writeUInt16LE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8) : J(this, a, b, !0), b + 2
            }, f.prototype.writeUInt16BE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = 255 & a) : J(this, a, b, !1), b + 2
            }, f.prototype.writeUInt32LE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = 255 & a) : K(this, a, b, !0), b + 4
            }, f.prototype.writeUInt32BE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = 255 & a) : K(this, a, b, !1), b + 4
            }, f.prototype.writeIntLE = function(a, b, c, d) {
                if (a = +a, b = 0 | b, !d) {
                    var e = Math.pow(2, 8 * c - 1);
                    I(this, a, b, c, e - 1, -e)
                }
                var f = 0,
                    g = 1,
                    h = 0 > a ? 1 : 0;
                for (this[b] = 255 & a; ++f < c && (g *= 256);) this[b + f] = (a / g >> 0) - h & 255;
                return b + c
            }, f.prototype.writeIntBE = function(a, b, c, d) {
                if (a = +a, b = 0 | b, !d) {
                    var e = Math.pow(2, 8 * c - 1);
                    I(this, a, b, c, e - 1, -e)
                }
                var f = c - 1,
                    g = 1,
                    h = 0 > a ? 1 : 0;
                for (this[b + f] = 255 & a; --f >= 0 && (g *= 256);) this[b + f] = (a / g >> 0) - h & 255;
                return b + c
            }, f.prototype.writeInt8 = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (a = Math.floor(a)), 0 > a && (a = 255 + a + 1), this[b] = 255 & a, b + 1
            }, f.prototype.writeInt16LE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8) : J(this, a, b, !0), b + 2
            }, f.prototype.writeInt16BE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = 255 & a) : J(this, a, b, !1), b + 2
            }, f.prototype.writeInt32LE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : K(this, a, b, !0), b + 4
            }, f.prototype.writeInt32BE = function(a, b, c) {
                return a = +a, b = 0 | b, c || I(this, a, b, 4, 2147483647, -2147483648), 0 > a && (a = 4294967295 + a + 1), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = 255 & a) : K(this, a, b, !1), b + 4
            }, f.prototype.writeFloatLE = function(a, b, c) {
                return M(this, a, b, !0, c)
            }, f.prototype.writeFloatBE = function(a, b, c) {
                return M(this, a, b, !1, c)
            }, f.prototype.writeDoubleLE = function(a, b, c) {
                return N(this, a, b, !0, c)
            }, f.prototype.writeDoubleBE = function(a, b, c) {
                return N(this, a, b, !1, c)
            }, f.prototype.copy = function(a, b, c, d) {
                if (c || (c = 0), d || 0 === d || (d = this.length), b >= a.length && (b = a.length), b || (b = 0), d > 0 && c > d && (d = c), d === c) return 0;
                if (0 === a.length || 0 === this.length) return 0;
                if (0 > b) throw new RangeError("targetStart out of bounds");
                if (0 > c || c >= this.length) throw new RangeError("sourceStart out of bounds");
                if (0 > d) throw new RangeError("sourceEnd out of bounds");
                d > this.length && (d = this.length), a.length - b < d - c && (d = a.length - b + c);
                var e, g = d - c;
                if (this === a && b > c && d > b)
                    for (e = g - 1; e >= 0; e--) a[e + b] = this[e + c];
                else if (1e3 > g || !f.TYPED_ARRAY_SUPPORT)
                    for (e = 0; g > e; e++) a[e + b] = this[e + c];
                else a._set(this.subarray(c, c + g), b);
                return g
            }, f.prototype.fill = function(a, b, c) {
                if (a || (a = 0), b || (b = 0), c || (c = this.length), b > c) throw new RangeError("end < start");
                if (c !== b && 0 !== this.length) {
                    if (0 > b || b >= this.length) throw new RangeError("start out of bounds");
                    if (0 > c || c > this.length) throw new RangeError("end out of bounds");
                    var d;
                    if ("number" == typeof a)
                        for (d = b; c > d; d++) this[d] = a;
                    else {
                        var e = R(a.toString()),
                            f = e.length;
                        for (d = b; c > d; d++) this[d] = e[d % f]
                    }
                    return this
                }
            }, f.prototype.toArrayBuffer = function() {
                if ("undefined" != typeof Uint8Array) {
                    if (f.TYPED_ARRAY_SUPPORT) return new f(this).buffer;
                    for (var a = new Uint8Array(this.length), b = 0, c = a.length; c > b; b += 1) a[b] = this[b];
                    return a.buffer
                }
                throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
            };
            var _ = f.prototype;
            f._augment = function(a) {
                return a.constructor = f, a._isBuffer = !0, a._set = a.set, a.get = _.get, a.set = _.set, a.write = _.write, a.toString = _.toString, a.toLocaleString = _.toString, a.toJSON = _.toJSON, a.equals = _.equals, a.compare = _.compare, a.indexOf = _.indexOf, a.copy = _.copy, a.slice = _.slice, a.readUIntLE = _.readUIntLE, a.readUIntBE = _.readUIntBE, a.readUInt8 = _.readUInt8, a.readUInt16LE = _.readUInt16LE, a.readUInt16BE = _.readUInt16BE, a.readUInt32LE = _.readUInt32LE, a.readUInt32BE = _.readUInt32BE, a.readIntLE = _.readIntLE, a.readIntBE = _.readIntBE, a.readInt8 = _.readInt8, a.readInt16LE = _.readInt16LE, a.readInt16BE = _.readInt16BE, a.readInt32LE = _.readInt32LE, a.readInt32BE = _.readInt32BE, a.readFloatLE = _.readFloatLE, a.readFloatBE = _.readFloatBE, a.readDoubleLE = _.readDoubleLE, a.readDoubleBE = _.readDoubleBE, a.writeUInt8 = _.writeUInt8, a.writeUIntLE = _.writeUIntLE, a.writeUIntBE = _.writeUIntBE, a.writeUInt16LE = _.writeUInt16LE, a.writeUInt16BE = _.writeUInt16BE, a.writeUInt32LE = _.writeUInt32LE, a.writeUInt32BE = _.writeUInt32BE, a.writeIntLE = _.writeIntLE, a.writeIntBE = _.writeIntBE, a.writeInt8 = _.writeInt8, a.writeInt16LE = _.writeInt16LE, a.writeInt16BE = _.writeInt16BE, a.writeInt32LE = _.writeInt32LE, a.writeInt32BE = _.writeInt32BE, a.writeFloatLE = _.writeFloatLE, a.writeFloatBE = _.writeFloatBE, a.writeDoubleLE = _.writeDoubleLE, a.writeDoubleBE = _.writeDoubleBE, a.fill = _.fill, a.inspect = _.inspect, a.toArrayBuffer = _.toArrayBuffer, a
            };
            var aa = /[^+\/0-9A-Za-z-_]/g
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 21,
        ieee754: 99,
        isarray: 52
    }],
    52: [function(a, b, c) {
        var d = {}.toString;
        b.exports = Array.isArray || function(a) {
            return "[object Array]" == d.call(a)
        }
    }, {}],
    53: [function(a, b, c) {
        (function(c) {
            function d(a) {
                e.call(this), this.hashMode = "string" == typeof a, this.hashMode ? this[a] = this._finalOrDigest : this["final"] = this._finalOrDigest, this._decoder = null, this._encoding = null
            }
            var e = a("stream").Transform,
                f = a("inherits"),
                g = a("string_decoder").StringDecoder;
            b.exports = d, f(d, e), d.prototype.update = function(a, b, d) {
                "string" == typeof a && (a = new c(a, b));
                var e = this._update(a);
                return this.hashMode ? this : (d && (e = this._toString(e, d)), e)
            }, d.prototype.setAutoPadding = function() {}, d.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state")
            }, d.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state")
            }, d.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state")
            }, d.prototype._transform = function(a, b, c) {
                var d;
                try {
                    this.hashMode ? this._update(a) : this.push(this._update(a))
                } catch (e) {
                    d = e
                } finally {
                    c(d)
                }
            }, d.prototype._flush = function(a) {
                var b;
                try {
                    this.push(this._final())
                } catch (c) {
                    b = c
                } finally {
                    a(b)
                }
            }, d.prototype._finalOrDigest = function(a) {
                var b = this._final() || new c("");
                return a && (b = this._toString(b, a, !0)), b
            }, d.prototype._toString = function(a, b, c) {
                if (this._decoder || (this._decoder = new g(b), this._encoding = b), this._encoding !== b) throw new Error("can't switch encodings");
                var d = this._decoder.write(a);
                return c && (d += this._decoder.end()), d
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        inherits: 101,
        stream: 231,
        string_decoder: 232
    }],
    54: [function(a, b, c) {
        (function(a) {
            function b(a) {
                return Array.isArray ? Array.isArray(a) : "[object Array]" === q(a)
            }

            function d(a) {
                return "boolean" == typeof a
            }

            function e(a) {
                return null === a
            }

            function f(a) {
                return null == a
            }

            function g(a) {
                return "number" == typeof a
            }

            function h(a) {
                return "string" == typeof a
            }

            function i(a) {
                return "symbol" == typeof a
            }

            function j(a) {
                return void 0 === a
            }

            function k(a) {
                return "[object RegExp]" === q(a)
            }

            function l(a) {
                return "object" == typeof a && null !== a
            }

            function m(a) {
                return "[object Date]" === q(a)
            }

            function n(a) {
                return "[object Error]" === q(a) || a instanceof Error
            }

            function o(a) {
                return "function" == typeof a
            }

            function p(a) {
                return null === a || "boolean" == typeof a || "number" == typeof a || "string" == typeof a || "symbol" == typeof a || "undefined" == typeof a
            }

            function q(a) {
                return Object.prototype.toString.call(a)
            }
            c.isArray = b, c.isBoolean = d, c.isNull = e, c.isNullOrUndefined = f, c.isNumber = g, c.isString = h, c.isSymbol = i, c.isUndefined = j, c.isRegExp = k, c.isObject = l, c.isDate = m, c.isError = n, c.isFunction = o, c.isPrimitive = p, c.isBuffer = a.isBuffer
        }).call(this, {
            isBuffer: a("../../is-buffer/index.js")
        })
    }, {
        "../../is-buffer/index.js": 104
    }],
    55: [function(a, b, c) {
        (function(c) {
            function d(a) {
                this.curveType = h[a], this.curveType || (this.curveType = {
                    name: a
                }), this.curve = new f.ec(this.curveType.name), this.keys = void 0
            }

            function e(a, b, d) {
                Array.isArray(a) || (a = a.toArray());
                var e = new c(a);
                if (d && e.length < d) {
                    var f = new c(d - e.length);
                    f.fill(0), e = c.concat([f, e])
                }
                return b ? e.toString(b) : e
            }
            var f = a("elliptic"),
                g = a("bn.js");
            b.exports = function(a) {
                return new d(a)
            };
            var h = {
                secp256k1: {
                    name: "secp256k1",
                    byteLength: 32
                },
                secp224r1: {
                    name: "p224",
                    byteLength: 28
                },
                prime256v1: {
                    name: "p256",
                    byteLength: 32
                },
                prime192v1: {
                    name: "p192",
                    byteLength: 24
                },
                ed25519: {
                    name: "ed25519",
                    byteLength: 32
                },
                secp384r1: {
                    name: "p384",
                    byteLength: 48
                },
                secp521r1: {
                    name: "p521",
                    byteLength: 66
                }
            };
            h.p224 = h.secp224r1, h.p256 = h.secp256r1 = h.prime256v1, h.p192 = h.secp192r1 = h.prime192v1, h.p384 = h.secp384r1, h.p521 = h.secp521r1, d.prototype.generateKeys = function(a, b) {
                return this.keys = this.curve.genKeyPair(), this.getPublicKey(a, b)
            }, d.prototype.computeSecret = function(a, b, d) {
                b = b || "utf8", c.isBuffer(a) || (a = new c(a, b));
                var f = this.curve.keyFromPublic(a).getPublic(),
                    g = f.mul(this.keys.getPrivate()).getX();
                return e(g, d, this.curveType.byteLength)
            }, d.prototype.getPublicKey = function(a, b) {
                var c = this.keys.getPublic("compressed" === b, !0);
                return "hybrid" === b && (c[c.length - 1] % 2 ? c[0] = 7 : c[0] = 6), e(c, a)
            }, d.prototype.getPrivateKey = function(a) {
                return e(this.keys.getPrivate(), a)
            }, d.prototype.setPublicKey = function(a, b) {
                return b = b || "utf8", c.isBuffer(a) || (a = new c(a, b)), this.keys._importPublic(a), this
            }, d.prototype.setPrivateKey = function(a, b) {
                b = b || "utf8", c.isBuffer(a) || (a = new c(a, b));
                var d = new g(a);
                return d = d.toString(16), this.keys._importPrivate(d), this
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "bn.js": 22,
        buffer: 51,
        elliptic: 71
    }],
    56: [function(a, b, c) {
        (function(c) {
            "use strict";

            function d(a) {
                j.call(this, "digest"), this._hash = a, this.buffers = []
            }

            function e(a) {
                j.call(this, "digest"), this._hash = a
            }
            var f = a("inherits"),
                g = a("./md5"),
                h = a("ripemd160"),
                i = a("sha.js"),
                j = a("cipher-base");
            f(d, j), d.prototype._update = function(a) {
                this.buffers.push(a)
            }, d.prototype._final = function() {
                var a = c.concat(this.buffers),
                    b = this._hash(a);
                return this.buffers = null, b
            }, f(e, j), e.prototype._update = function(a) {
                this._hash.update(a)
            }, e.prototype._final = function() {
                return this._hash.digest()
            }, b.exports = function(a) {
                return a = a.toLowerCase(), "md5" === a ? new d(g) : "rmd160" === a || "ripemd160" === a ? new d(h) : new e(i(a))
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./md5": 58,
        buffer: 51,
        "cipher-base": 53,
        inherits: 101,
        ripemd160: 213,
        "sha.js": 223
    }],
    57: [function(a, b, c) {
        (function(a) {
            "use strict";

            function b(b, c) {
                if (b.length % f !== 0) {
                    var d = b.length + (f - b.length % f);
                    b = a.concat([b, g], d)
                }
                for (var e = [], h = c ? b.readInt32BE : b.readInt32LE, i = 0; i < b.length; i += f) e.push(h.call(b, i));
                return e
            }

            function d(b, c, d) {
                for (var e = new a(c), f = d ? e.writeInt32BE : e.writeInt32LE, g = 0; g < b.length; g++) f.call(e, b[g], 4 * g, !0);
                return e
            }

            function e(c, e, f, g) {
                a.isBuffer(c) || (c = new a(c));
                var i = e(b(c, g), c.length * h);
                return d(i, f, g)
            }
            var f = 4,
                g = new a(f);
            g.fill(0);
            var h = 8;
            c.hash = e
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    58: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            a[b >> 5] |= 128 << b % 32, a[(b + 64 >>> 9 << 4) + 14] = b;
            for (var c = 1732584193, d = -271733879, e = -1732584194, k = 271733878, l = 0; l < a.length; l += 16) {
                var m = c,
                    n = d,
                    o = e,
                    p = k;
                c = f(c, d, e, k, a[l + 0], 7, -680876936), k = f(k, c, d, e, a[l + 1], 12, -389564586), e = f(e, k, c, d, a[l + 2], 17, 606105819), d = f(d, e, k, c, a[l + 3], 22, -1044525330), c = f(c, d, e, k, a[l + 4], 7, -176418897), k = f(k, c, d, e, a[l + 5], 12, 1200080426), e = f(e, k, c, d, a[l + 6], 17, -1473231341), d = f(d, e, k, c, a[l + 7], 22, -45705983), c = f(c, d, e, k, a[l + 8], 7, 1770035416), k = f(k, c, d, e, a[l + 9], 12, -1958414417), e = f(e, k, c, d, a[l + 10], 17, -42063), d = f(d, e, k, c, a[l + 11], 22, -1990404162), c = f(c, d, e, k, a[l + 12], 7, 1804603682), k = f(k, c, d, e, a[l + 13], 12, -40341101), e = f(e, k, c, d, a[l + 14], 17, -1502002290), d = f(d, e, k, c, a[l + 15], 22, 1236535329), c = g(c, d, e, k, a[l + 1], 5, -165796510), k = g(k, c, d, e, a[l + 6], 9, -1069501632), e = g(e, k, c, d, a[l + 11], 14, 643717713), d = g(d, e, k, c, a[l + 0], 20, -373897302), c = g(c, d, e, k, a[l + 5], 5, -701558691), k = g(k, c, d, e, a[l + 10], 9, 38016083), e = g(e, k, c, d, a[l + 15], 14, -660478335), d = g(d, e, k, c, a[l + 4], 20, -405537848), c = g(c, d, e, k, a[l + 9], 5, 568446438), k = g(k, c, d, e, a[l + 14], 9, -1019803690), e = g(e, k, c, d, a[l + 3], 14, -187363961), d = g(d, e, k, c, a[l + 8], 20, 1163531501), c = g(c, d, e, k, a[l + 13], 5, -1444681467), k = g(k, c, d, e, a[l + 2], 9, -51403784), e = g(e, k, c, d, a[l + 7], 14, 1735328473), d = g(d, e, k, c, a[l + 12], 20, -1926607734), c = h(c, d, e, k, a[l + 5], 4, -378558), k = h(k, c, d, e, a[l + 8], 11, -2022574463), e = h(e, k, c, d, a[l + 11], 16, 1839030562), d = h(d, e, k, c, a[l + 14], 23, -35309556), c = h(c, d, e, k, a[l + 1], 4, -1530992060), k = h(k, c, d, e, a[l + 4], 11, 1272893353), e = h(e, k, c, d, a[l + 7], 16, -155497632), d = h(d, e, k, c, a[l + 10], 23, -1094730640), c = h(c, d, e, k, a[l + 13], 4, 681279174), k = h(k, c, d, e, a[l + 0], 11, -358537222), e = h(e, k, c, d, a[l + 3], 16, -722521979), d = h(d, e, k, c, a[l + 6], 23, 76029189), c = h(c, d, e, k, a[l + 9], 4, -640364487), k = h(k, c, d, e, a[l + 12], 11, -421815835), e = h(e, k, c, d, a[l + 15], 16, 530742520), d = h(d, e, k, c, a[l + 2], 23, -995338651), c = i(c, d, e, k, a[l + 0], 6, -198630844), k = i(k, c, d, e, a[l + 7], 10, 1126891415), e = i(e, k, c, d, a[l + 14], 15, -1416354905), d = i(d, e, k, c, a[l + 5], 21, -57434055), c = i(c, d, e, k, a[l + 12], 6, 1700485571), k = i(k, c, d, e, a[l + 3], 10, -1894986606), e = i(e, k, c, d, a[l + 10], 15, -1051523), d = i(d, e, k, c, a[l + 1], 21, -2054922799), c = i(c, d, e, k, a[l + 8], 6, 1873313359), k = i(k, c, d, e, a[l + 15], 10, -30611744), e = i(e, k, c, d, a[l + 6], 15, -1560198380), d = i(d, e, k, c, a[l + 13], 21, 1309151649), c = i(c, d, e, k, a[l + 4], 6, -145523070), k = i(k, c, d, e, a[l + 11], 10, -1120210379), e = i(e, k, c, d, a[l + 2], 15, 718787259), d = i(d, e, k, c, a[l + 9], 21, -343485551), c = j(c, m), d = j(d, n), e = j(e, o), k = j(k, p)
            }
            return Array(c, d, e, k)
        }

        function e(a, b, c, d, e, f) {
            return j(k(j(j(b, a), j(d, f)), e), c)
        }

        function f(a, b, c, d, f, g, h) {
            return e(b & c | ~b & d, a, b, f, g, h)
        }

        function g(a, b, c, d, f, g, h) {
            return e(b & d | c & ~d, a, b, f, g, h)
        }

        function h(a, b, c, d, f, g, h) {
            return e(b ^ c ^ d, a, b, f, g, h)
        }

        function i(a, b, c, d, f, g, h) {
            return e(c ^ (b | ~d), a, b, f, g, h)
        }

        function j(a, b) {
            var c = (65535 & a) + (65535 & b),
                d = (a >> 16) + (b >> 16) + (c >> 16);
            return d << 16 | 65535 & c
        }

        function k(a, b) {
            return a << b | a >>> 32 - b
        }
        var l = a("./helpers");
        b.exports = function(a) {
            return l.hash(a, d, 16)
        }
    }, {
        "./helpers": 57
    }],
    59: [function(a, b, c) {
        (function(c) {
            "use strict";

            function d(a, b) {
                g.call(this), a = a.toLowerCase(), "string" == typeof b && (b = new c(b));
                var d = "sha512" === a || "sha384" === a ? 128 : 64;
                this._alg = a, this._key = b, b.length > d ? b = e(a).update(b).digest() : b.length < d && (b = c.concat([b, h], d));
                for (var f = this._ipad = new c(d), i = this._opad = new c(d), j = 0; d > j; j++) f[j] = 54 ^ b[j], i[j] = 92 ^ b[j];
                this._hash = e(a).update(f)
            }
            var e = a("create-hash/browser"),
                f = a("inherits"),
                g = a("stream").Transform,
                h = new c(128);
            h.fill(0), f(d, g), d.prototype.update = function(a, b) {
                return this._hash.update(a, b), this
            }, d.prototype._transform = function(a, b, c) {
                this._hash.update(a), c()
            }, d.prototype._flush = function(a) {
                this.push(this.digest()), a()
            }, d.prototype.digest = function(a) {
                var b = this._hash.digest();
                return e(this._alg).update(this._opad).update(b).digest(a)
            }, b.exports = function(a, b) {
                return new d(a, b)
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "create-hash/browser": 56,
        inherits: 101,
        stream: 231
    }],
    60: [function(a, b, c) {
        "use strict";
        c.randomBytes = c.rng = c.pseudoRandomBytes = c.prng = a("randombytes"), c.createHash = c.Hash = a("create-hash"), c.createHmac = c.Hmac = a("create-hmac");
        var d = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(a("browserify-sign/algos")));
        c.getHashes = function() {
            return d
        };
        var e = a("pbkdf2");
        c.pbkdf2 = e.pbkdf2, c.pbkdf2Sync = e.pbkdf2Sync;
        var f = a("browserify-cipher");
        ["Cipher", "createCipher", "Cipheriv", "createCipheriv", "Decipher", "createDecipher", "Decipheriv", "createDecipheriv", "getCiphers", "listCiphers"].forEach(function(a) {
            c[a] = f[a]
        });
        var g = a("diffie-hellman");
        ["DiffieHellmanGroup", "createDiffieHellmanGroup", "getDiffieHellman", "createDiffieHellman", "DiffieHellman"].forEach(function(a) {
            c[a] = g[a]
        });
        var h = a("browserify-sign");
        ["createSign", "Sign", "createVerify", "Verify"].forEach(function(a) {
            c[a] = h[a]
        }), c.createECDH = a("create-ecdh");
        var i = a("public-encrypt");
        ["publicEncrypt", "privateEncrypt", "publicDecrypt", "privateDecrypt"].forEach(function(a) {
            c[a] = i[a]
        }), ["createCredentials"].forEach(function(a) {
            c[a] = function() {
                throw new Error(["sorry, " + a + " is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
            }
        })
    }, {
        "browserify-cipher": 40,
        "browserify-sign": 45,
        "browserify-sign/algos": 44,
        "create-ecdh": 55,
        "create-hash": 56,
        "create-hmac": 59,
        "diffie-hellman": 67,
        pbkdf2: 118,
        "public-encrypt": 192,
        randombytes: 200
    }],
    61: [function(a, b, c) {
        "use strict";
        c.utils = a("./des/utils"), c.Cipher = a("./des/cipher"), c.DES = a("./des/des"), c.CBC = a("./des/cbc"), c.EDE = a("./des/ede")
    }, {
        "./des/cbc": 62,
        "./des/cipher": 63,
        "./des/des": 64,
        "./des/ede": 65,
        "./des/utils": 66
    }],
    62: [function(a, b, c) {
        "use strict";

        function d(a) {
            f.equal(a.length, 8, "Invalid IV length"), this.iv = new Array(8);
            for (var b = 0; b < this.iv.length; b++) this.iv[b] = a[b]
        }

        function e(a) {
            function b(b) {
                a.call(this, b), this._cbcInit()
            }
            g(b, a);
            for (var c = Object.keys(h), d = 0; d < c.length; d++) {
                var e = c[d];
                b.prototype[e] = h[e]
            }
            return b.create = function(a) {
                return new b(a)
            }, b
        }
        var f = a("minimalistic-assert"),
            g = a("inherits"),
            h = {};
        c.instantiate = e, h._cbcInit = function() {
            var a = new d(this.options.iv);
            this._cbcState = a
        }, h._update = function(a, b, c, d) {
            var e = this._cbcState,
                f = this.constructor.super_.prototype,
                g = e.iv;
            if ("encrypt" === this.type) {
                for (var h = 0; h < this.blockSize; h++) g[h] ^= a[b + h];
                f._update.call(this, g, 0, c, d);
                for (var h = 0; h < this.blockSize; h++) g[h] = c[d + h]
            } else {
                f._update.call(this, a, b, c, d);
                for (var h = 0; h < this.blockSize; h++) c[d + h] ^= g[h];
                for (var h = 0; h < this.blockSize; h++) g[h] = a[b + h]
            }
        }
    }, {
        inherits: 101,
        "minimalistic-assert": 111
    }],
    63: [function(a, b, c) {
        "use strict";

        function d(a) {
            this.options = a, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0
        }
        var e = a("minimalistic-assert");
        b.exports = d, d.prototype._init = function() {}, d.prototype.update = function(a) {
            return 0 === a.length ? [] : "decrypt" === this.type ? this._updateDecrypt(a) : this._updateEncrypt(a)
        }, d.prototype._buffer = function(a, b) {
            for (var c = Math.min(this.buffer.length - this.bufferOff, a.length - b), d = 0; c > d; d++) this.buffer[this.bufferOff + d] = a[b + d];
            return this.bufferOff += c, c
        }, d.prototype._flushBuffer = function(a, b) {
            return this._update(this.buffer, 0, a, b), this.bufferOff = 0, this.blockSize
        }, d.prototype._updateEncrypt = function(a) {
            var b = 0,
                c = 0,
                d = (this.bufferOff + a.length) / this.blockSize | 0,
                e = new Array(d * this.blockSize);
            0 !== this.bufferOff && (b += this._buffer(a, b), this.bufferOff === this.buffer.length && (c += this._flushBuffer(e, c)));
            for (var f = a.length - (a.length - b) % this.blockSize; f > b; b += this.blockSize) this._update(a, b, e, c), c += this.blockSize;
            for (; b < a.length; b++, this.bufferOff++) this.buffer[this.bufferOff] = a[b];
            return e
        }, d.prototype._updateDecrypt = function(a) {
            for (var b = 0, c = 0, d = Math.ceil((this.bufferOff + a.length) / this.blockSize) - 1, e = new Array(d * this.blockSize); d > 0; d--) b += this._buffer(a, b), c += this._flushBuffer(e, c);
            return b += this._buffer(a, b), e
        }, d.prototype["final"] = function(a) {
            var b;
            a && (b = this.update(a));
            var c;
            return c = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), b ? b.concat(c) : c
        }, d.prototype._pad = function(a, b) {
            if (0 === b) return !1;
            for (; b < a.length;) a[b++] = 0;
            return !0
        }, d.prototype._finalEncrypt = function() {
            if (!this._pad(this.buffer, this.bufferOff)) return [];
            var a = new Array(this.blockSize);
            return this._update(this.buffer, 0, a, 0), a
        }, d.prototype._unpad = function(a) {
            return a
        }, d.prototype._finalDecrypt = function() {
            e.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
            var a = new Array(this.blockSize);
            return this._flushBuffer(a, 0), this._unpad(a)
        }
    }, {
        "minimalistic-assert": 111
    }],
    64: [function(a, b, c) {
        "use strict";

        function d() {
            this.tmp = new Array(2), this.keys = null
        }

        function e(a) {
            j.call(this, a);
            var b = new d;
            this._desState = b, this.deriveKeys(b, a.key)
        }
        var f = a("minimalistic-assert"),
            g = a("inherits"),
            h = a("../des"),
            i = h.utils,
            j = h.Cipher;
        g(e, j), b.exports = e, e.create = function(a) {
            return new e(a)
        };
        var k = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        e.prototype.deriveKeys = function(a, b) {
            a.keys = new Array(32), f.equal(b.length, this.blockSize, "Invalid key length");
            var c = i.readUInt32BE(b, 0),
                d = i.readUInt32BE(b, 4);
            i.pc1(c, d, a.tmp, 0), c = a.tmp[0], d = a.tmp[1];
            for (var e = 0; e < a.keys.length; e += 2) {
                var g = k[e >>> 1];
                c = i.r28shl(c, g), d = i.r28shl(d, g), i.pc2(c, d, a.keys, e)
            }
        }, e.prototype._update = function(a, b, c, d) {
            var e = this._desState,
                f = i.readUInt32BE(a, b),
                g = i.readUInt32BE(a, b + 4);
            i.ip(f, g, e.tmp, 0), f = e.tmp[0], g = e.tmp[1], "encrypt" === this.type ? this._encrypt(e, f, g, e.tmp, 0) : this._decrypt(e, f, g, e.tmp, 0), f = e.tmp[0], g = e.tmp[1], i.writeUInt32BE(c, f, d), i.writeUInt32BE(c, g, d + 4)
        }, e.prototype._pad = function(a, b) {
            for (var c = a.length - b, d = b; d < a.length; d++) a[d] = c;
            return !0
        }, e.prototype._unpad = function(a) {
            for (var b = a[a.length - 1], c = a.length - b; c < a.length; c++) f.equal(a[c], b);
            return a.slice(0, a.length - b)
        }, e.prototype._encrypt = function(a, b, c, d, e) {
            for (var f = b, g = c, h = 0; h < a.keys.length; h += 2) {
                var j = a.keys[h],
                    k = a.keys[h + 1];
                i.expand(g, a.tmp, 0), j ^= a.tmp[0], k ^= a.tmp[1];
                var l = i.substitute(j, k),
                    m = i.permute(l),
                    n = g;
                g = (f ^ m) >>> 0, f = n
            }
            i.rip(g, f, d, e)
        }, e.prototype._decrypt = function(a, b, c, d, e) {
            for (var f = c, g = b, h = a.keys.length - 2; h >= 0; h -= 2) {
                var j = a.keys[h],
                    k = a.keys[h + 1];
                i.expand(f, a.tmp, 0), j ^= a.tmp[0], k ^= a.tmp[1];
                var l = i.substitute(j, k),
                    m = i.permute(l),
                    n = f;
                f = (g ^ m) >>> 0, g = n
            }
            i.rip(f, g, d, e)
        }
    }, {
        "../des": 61,
        inherits: 101,
        "minimalistic-assert": 111
    }],
    65: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            f.equal(b.length, 24, "Invalid key length");
            var c = b.slice(0, 8),
                d = b.slice(8, 16),
                e = b.slice(16, 24);
            "encrypt" === a ? this.ciphers = [j.create({
                type: "encrypt",
                key: c
            }), j.create({
                type: "decrypt",
                key: d
            }), j.create({
                type: "encrypt",
                key: e
            })] : this.ciphers = [j.create({
                type: "decrypt",
                key: e
            }), j.create({
                type: "encrypt",
                key: d
            }), j.create({
                type: "decrypt",
                key: c
            })]
        }

        function e(a) {
            i.call(this, a);
            var b = new d(this.type, this.options.key);
            this._edeState = b
        }
        var f = a("minimalistic-assert"),
            g = a("inherits"),
            h = a("../des"),
            i = h.Cipher,
            j = h.DES;
        g(e, i), b.exports = e, e.create = function(a) {
            return new e(a)
        }, e.prototype._update = function(a, b, c, d) {
            var e = this._edeState;
            e.ciphers[0]._update(a, b, c, d), e.ciphers[1]._update(c, d, c, d), e.ciphers[2]._update(c, d, c, d)
        }, e.prototype._pad = j.prototype._pad, e.prototype._unpad = j.prototype._unpad
    }, {
        "../des": 61,
        inherits: 101,
        "minimalistic-assert": 111
    }],
    66: [function(a, b, c) {
        "use strict";
        c.readUInt32BE = function(a, b) {
            var c = a[0 + b] << 24 | a[1 + b] << 16 | a[2 + b] << 8 | a[3 + b];
            return c >>> 0
        }, c.writeUInt32BE = function(a, b, c) {
            a[0 + c] = b >>> 24, a[1 + c] = b >>> 16 & 255, a[2 + c] = b >>> 8 & 255, a[3 + c] = 255 & b
        }, c.ip = function(a, b, c, d) {
            for (var e = 0, f = 0, g = 6; g >= 0; g -= 2) {
                for (var h = 0; 24 >= h; h += 8) e <<= 1, e |= b >>> h + g & 1;
                for (var h = 0; 24 >= h; h += 8) e <<= 1, e |= a >>> h + g & 1
            }
            for (var g = 6; g >= 0; g -= 2) {
                for (var h = 1; 25 >= h; h += 8) f <<= 1, f |= b >>> h + g & 1;
                for (var h = 1; 25 >= h; h += 8) f <<= 1, f |= a >>> h + g & 1
            }
            c[d + 0] = e >>> 0, c[d + 1] = f >>> 0
        }, c.rip = function(a, b, c, d) {
            for (var e = 0, f = 0, g = 0; 4 > g; g++)
                for (var h = 24; h >= 0; h -= 8) e <<= 1, e |= b >>> h + g & 1, e <<= 1, e |= a >>> h + g & 1;
            for (var g = 4; 8 > g; g++)
                for (var h = 24; h >= 0; h -= 8) f <<= 1, f |= b >>> h + g & 1, f <<= 1, f |= a >>> h + g & 1;
            c[d + 0] = e >>> 0, c[d + 1] = f >>> 0
        }, c.pc1 = function(a, b, c, d) {
            for (var e = 0, f = 0, g = 7; g >= 5; g--) {
                for (var h = 0; 24 >= h; h += 8) e <<= 1, e |= b >> h + g & 1;
                for (var h = 0; 24 >= h; h += 8) e <<= 1, e |= a >> h + g & 1
            }
            for (var h = 0; 24 >= h; h += 8) e <<= 1, e |= b >> h + g & 1;
            for (var g = 1; 3 >= g; g++) {
                for (var h = 0; 24 >= h; h += 8) f <<= 1, f |= b >> h + g & 1;
                for (var h = 0; 24 >= h; h += 8) f <<= 1, f |= a >> h + g & 1
            }
            for (var h = 0; 24 >= h; h += 8) f <<= 1, f |= a >> h + g & 1;
            c[d + 0] = e >>> 0, c[d + 1] = f >>> 0
        }, c.r28shl = function(a, b) {
            return a << b & 268435455 | a >>> 28 - b
        };
        var d = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        c.pc2 = function(a, b, c, e) {
            for (var f = 0, g = 0, h = d.length >>> 1, i = 0; h > i; i++) f <<= 1, f |= a >>> d[i] & 1;
            for (var i = h; i < d.length; i++) g <<= 1, g |= b >>> d[i] & 1;
            c[e + 0] = f >>> 0, c[e + 1] = g >>> 0
        }, c.expand = function(a, b, c) {
            var d = 0,
                e = 0;
            d = (1 & a) << 5 | a >>> 27;
            for (var f = 23; f >= 15; f -= 4) d <<= 6, d |= a >>> f & 63;
            for (var f = 11; f >= 3; f -= 4) e |= a >>> f & 63, e <<= 6;
            e |= (31 & a) << 1 | a >>> 31, b[c + 0] = d >>> 0, b[c + 1] = e >>> 0
        };
        var e = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        c.substitute = function(a, b) {
            for (var c = 0, d = 0; 4 > d; d++) {
                var f = a >>> 18 - 6 * d & 63,
                    g = e[64 * d + f];
                c <<= 4, c |= g
            }
            for (var d = 0; 4 > d; d++) {
                var f = b >>> 18 - 6 * d & 63,
                    g = e[256 + 64 * d + f];
                c <<= 4, c |= g
            }
            return c >>> 0
        };
        var f = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        c.permute = function(a) {
            for (var b = 0, c = 0; c < f.length; c++) b <<= 1, b |= a >>> f[c] & 1;
            return b >>> 0
        }, c.padSplit = function(a, b, c) {
            for (var d = a.toString(2); d.length < b;) d = "0" + d;
            for (var e = [], f = 0; b > f; f += c) e.push(d.slice(f, f + c));
            return e.join(" ")
        }
    }, {}],
    67: [function(a, b, c) {
        (function(b) {
            function d(a) {
                var c = new b(g[a].prime, "hex"),
                    d = new b(g[a].gen, "hex");
                return new h(c, d)
            }

            function e(a, c, d, g) {
                return b.isBuffer(c) || void 0 === i[c] ? e(a, "binary", c, d) : (c = c || "binary", g = g || "binary", d = d || new b([2]), b.isBuffer(d) || (d = new b(d, g)), "number" == typeof a ? new h(f(a, d), d, !0) : (b.isBuffer(a) || (a = new b(a, c)), new h(a, d, !0)))
            }
            var f = a("./lib/generatePrime"),
                g = a("./lib/primes.json"),
                h = a("./lib/dh"),
                i = {
                    binary: !0,
                    hex: !0,
                    base64: !0
                };
            c.DiffieHellmanGroup = c.createDiffieHellmanGroup = c.getDiffieHellman = d, c.createDiffieHellman = c.DiffieHellman = e
        }).call(this, a("buffer").Buffer)
    }, {
        "./lib/dh": 68,
        "./lib/generatePrime": 69,
        "./lib/primes.json": 70,
        buffer: 51
    }],
    68: [function(a, b, c) {
        (function(c) {
            function d(a, b) {
                return b = b || "utf8", c.isBuffer(a) || (a = new c(a, b)), this._pub = new i(a), this
            }

            function e(a, b) {
                return b = b || "utf8", c.isBuffer(a) || (a = new c(a, b)), this._priv = new i(a), this
            }

            function f(a, b) {
                var c = b.toString("hex"),
                    d = [c, a.toString(16)].join("_");
                if (d in s) return s[d];
                var e = 0;
                if (a.isEven() || !q.simpleSieve || !q.fermatTest(a) || !k.test(a)) return e += 1, e += "02" === c || "05" === c ? 8 : 4, s[d] = e, e;
                k.test(a.shrn(1)) || (e += 2);
                var f;
                switch (c) {
                    case "02":
                        a.mod(l).cmp(m) && (e += 8);
                        break;
                    case "05":
                        f = a.mod(n), f.cmp(o) && f.cmp(p) && (e += 8);
                        break;
                    default:
                        e += 4
                }
                return s[d] = e, e
            }

            function g(a, b, c) {
                this.setGenerator(b), this.__prime = new i(a), this._prime = i.mont(this.__prime), this._primeLen = a.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, c ? (this.setPublicKey = d, this.setPrivateKey = e) : this._primeCode = 8
            }

            function h(a, b) {
                var d = new c(a.toArray());
                return b ? d.toString(b) : d
            }
            var i = a("bn.js"),
                j = a("miller-rabin"),
                k = new j,
                l = new i(24),
                m = new i(11),
                n = new i(10),
                o = new i(3),
                p = new i(7),
                q = a("./generatePrime"),
                r = a("randombytes");
            b.exports = g;
            var s = {};
            Object.defineProperty(g.prototype, "verifyError", {
                enumerable: !0,
                get: function() {
                    return "number" != typeof this._primeCode && (this._primeCode = f(this.__prime, this.__gen)), this._primeCode
                }
            }), g.prototype.generateKeys = function() {
                return this._priv || (this._priv = new i(r(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
            }, g.prototype.computeSecret = function(a) {
                a = new i(a), a = a.toRed(this._prime);
                var b = a.redPow(this._priv).fromRed(),
                    d = new c(b.toArray()),
                    e = this.getPrime();
                if (d.length < e.length) {
                    var f = new c(e.length - d.length);
                    f.fill(0), d = c.concat([f, d])
                }
                return d
            }, g.prototype.getPublicKey = function(a) {
                return h(this._pub, a)
            }, g.prototype.getPrivateKey = function(a) {
                return h(this._priv, a)
            }, g.prototype.getPrime = function(a) {
                return h(this.__prime, a)
            }, g.prototype.getGenerator = function(a) {
                return h(this._gen, a)
            }, g.prototype.setGenerator = function(a, b) {
                return b = b || "utf8", c.isBuffer(a) || (a = new c(a, b)), this.__gen = a, this._gen = new i(a), this
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./generatePrime": 69,
        "bn.js": 22,
        buffer: 51,
        "miller-rabin": 110,
        randombytes: 200
    }],
    69: [function(a, b, c) {
        function d() {
            if (null !== t) return t;
            var a = 1048576,
                b = [];
            b[0] = 2;
            for (var c = 1, d = 3; a > d; d += 2) {
                for (var e = Math.ceil(Math.sqrt(d)), f = 0; c > f && b[f] <= e && d % b[f] !== 0; f++);
                c !== f && b[f] <= e || (b[c++] = d)
            }
            return t = b, b
        }

        function e(a) {
            for (var b = d(), c = 0; c < b.length; c++)
                if (0 === a.modn(b[c])) return 0 === a.cmpn(b[c]) ? !0 : !1;
            return !0
        }

        function f(a) {
            var b = i.mont(a);
            return 0 === n.toRed(b).redPow(a.subn(1)).fromRed().cmpn(1)
        }

        function g(a, b) {
            if (16 > a) return new i(2 === b || 5 === b ? [140, 123] : [140, 39]);
            b = new i(b);
            for (var c, d;;) {
                for (c = new i(h(Math.ceil(a / 8))); c.bitLength() > a;) c.ishrn(1);
                if (c.isEven() && c.iadd(m), c.testn(1) || c.iadd(n), b.cmp(n)) {
                    if (!b.cmp(o))
                        for (; c.mod(p).cmp(q);) c.iadd(s)
                } else
                    for (; c.mod(j).cmp(r);) c.iadd(s);
                if (d = c.shrn(1), e(d) && e(c) && f(d) && f(c) && l.test(d) && l.test(c)) return c
            }
        }
        var h = a("randombytes");
        b.exports = g, g.simpleSieve = e, g.fermatTest = f;
        var i = a("bn.js"),
            j = new i(24),
            k = a("miller-rabin"),
            l = new k,
            m = new i(1),
            n = new i(2),
            o = new i(5),
            p = (new i(16), new i(8), new i(10)),
            q = new i(3),
            r = (new i(7), new i(11)),
            s = new i(4),
            t = (new i(12), null)
    }, {
        "bn.js": 22,
        "miller-rabin": 110,
        randombytes: 200
    }],
    70: [function(a, b, c) {
        b.exports = {
            modp1: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
            },
            modp2: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
            },
            modp5: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
            },
            modp14: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
            },
            modp15: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
            },
            modp16: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
            },
            modp17: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
            },
            modp18: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
            }
        }
    }, {}],
    71: [function(a, b, c) {
        "use strict";
        var d = c;
        d.version = a("../package.json").version, d.utils = a("./elliptic/utils"), d.rand = a("brorand"), d.hmacDRBG = a("./elliptic/hmac-drbg"), d.curve = a("./elliptic/curve"), d.curves = a("./elliptic/curves"), d.ec = a("./elliptic/ec"), d.eddsa = a("./elliptic/eddsa")
    }, {
        "../package.json": 87,
        "./elliptic/curve": 74,
        "./elliptic/curves": 77,
        "./elliptic/ec": 78,
        "./elliptic/eddsa": 81,
        "./elliptic/hmac-drbg": 84,
        "./elliptic/utils": 86,
        brorand: 23
    }],
    72: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            this.type = a, this.p = new f(b.p, 16), this.red = b.prime ? f.red(b.prime) : f.mont(this.p), this.zero = new f(0).toRed(this.red), this.one = new f(1).toRed(this.red), this.two = new f(2).toRed(this.red), this.n = b.n && new f(b.n, 16), this.g = b.g && this.pointFromJSON(b.g, b.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4)
        }

        function e(a, b) {
            this.curve = a, this.type = b, this.precomputed = null
        }
        var f = a("bn.js"),
            g = a("../../elliptic"),
            h = g.utils,
            i = h.getNAF,
            j = h.getJSF,
            k = h.assert;
        b.exports = d, d.prototype.point = function() {
            throw new Error("Not implemented")
        }, d.prototype.validate = function() {
            throw new Error("Not implemented")
        }, d.prototype._fixedNafMul = function(a, b) {
            k(a.precomputed);
            var c = a._getDoubles(),
                d = i(b, 1),
                e = (1 << c.step + 1) - (c.step % 2 === 0 ? 2 : 1);
            e /= 3;
            for (var f = [], g = 0; g < d.length; g += c.step) {
                for (var h = 0, b = g + c.step - 1; b >= g; b--) h = (h << 1) + d[b];
                f.push(h)
            }
            for (var j = this.jpoint(null, null, null), l = this.jpoint(null, null, null), m = e; m > 0; m--) {
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    h === m ? l = l.mixedAdd(c.points[g]) : h === -m && (l = l.mixedAdd(c.points[g].neg()))
                }
                j = j.add(l)
            }
            return j.toP()
        }, d.prototype._wnafMul = function(a, b) {
            var c = 4,
                d = a._getNAFPoints(c);
            c = d.wnd;
            for (var e = d.points, f = i(b, c), g = this.jpoint(null, null, null), h = f.length - 1; h >= 0; h--) {
                for (var b = 0; h >= 0 && 0 === f[h]; h--) b++;
                if (h >= 0 && b++, g = g.dblp(b), 0 > h) break;
                var j = f[h];
                k(0 !== j), g = "affine" === a.type ? j > 0 ? g.mixedAdd(e[j - 1 >> 1]) : g.mixedAdd(e[-j - 1 >> 1].neg()) : j > 0 ? g.add(e[j - 1 >> 1]) : g.add(e[-j - 1 >> 1].neg())
            }
            return "affine" === a.type ? g.toP() : g
        }, d.prototype._wnafMulAdd = function(a, b, c, d) {
            for (var e = this._wnafT1, f = this._wnafT2, g = this._wnafT3, h = 0, k = 0; d > k; k++) {
                var l = b[k],
                    m = l._getNAFPoints(a);
                e[k] = m.wnd, f[k] = m.points
            }
            for (var k = d - 1; k >= 1; k -= 2) {
                var n = k - 1,
                    o = k;
                if (1 === e[n] && 1 === e[o]) {
                    var p = [b[n], null, null, b[o]];
                    0 === b[n].y.cmp(b[o].y) ? (p[1] = b[n].add(b[o]), p[2] = b[n].toJ().mixedAdd(b[o].neg())) : 0 === b[n].y.cmp(b[o].y.redNeg()) ? (p[1] = b[n].toJ().mixedAdd(b[o]), p[2] = b[n].add(b[o].neg())) : (p[1] = b[n].toJ().mixedAdd(b[o]), p[2] = b[n].toJ().mixedAdd(b[o].neg()));
                    var q = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        r = j(c[n], c[o]);
                    h = Math.max(r[0].length, h), g[n] = new Array(h), g[o] = new Array(h);
                    for (var s = 0; h > s; s++) {
                        var t = 0 | r[0][s],
                            u = 0 | r[1][s];
                        g[n][s] = q[3 * (t + 1) + (u + 1)], g[o][s] = 0, f[n] = p
                    }
                } else g[n] = i(c[n], e[n]), g[o] = i(c[o], e[o]), h = Math.max(g[n].length, h), h = Math.max(g[o].length, h)
            }
            for (var v = this.jpoint(null, null, null), w = this._wnafT4, k = h; k >= 0; k--) {
                for (var x = 0; k >= 0;) {
                    for (var y = !0, s = 0; d > s; s++) w[s] = 0 | g[s][k], 0 !== w[s] && (y = !1);
                    if (!y) break;
                    x++, k--
                }
                if (k >= 0 && x++, v = v.dblp(x), 0 > k) break;
                for (var s = 0; d > s; s++) {
                    var l, z = w[s];
                    0 !== z && (z > 0 ? l = f[s][z - 1 >> 1] : 0 > z && (l = f[s][-z - 1 >> 1].neg()), v = "affine" === l.type ? v.mixedAdd(l) : v.add(l))
                }
            }
            for (var k = 0; d > k; k++) f[k] = null;
            return v.toP()
        }, d.BasePoint = e, e.prototype.eq = function() {
            throw new Error("Not implemented")
        }, e.prototype.validate = function() {
            return this.curve.validate(this)
        }, d.prototype.decodePoint = function(a, b) {
            a = h.toArray(a, b);
            var c = this.p.byteLength();
            if (4 === a[0] && a.length - 1 === 2 * c) return this.point(a.slice(1, 1 + c), a.slice(1 + c, 1 + 2 * c));
            if ((2 === a[0] || 3 === a[0]) && a.length - 1 === c) return this.pointFromX(a.slice(1, 1 + c), 3 === a[0]);
            throw new Error("Unknown point format")
        }, e.prototype.encodeCompressed = function(a) {
            return this.encode(a, !0)
        }, e.prototype._encode = function(a) {
            var b = this.curve.p.byteLength(),
                c = this.getX().toArray("be", b);
            return a ? [this.getY().isEven() ? 2 : 3].concat(c) : [4].concat(c, this.getY().toArray("be", b))
        }, e.prototype.encode = function(a, b) {
            return h.encode(this._encode(b), a)
        }, e.prototype.precompute = function(a) {
            if (this.precomputed) return this;
            var b = {
                doubles: null,
                naf: null,
                beta: null
            };
            return b.naf = this._getNAFPoints(8), b.doubles = this._getDoubles(4, a), b.beta = this._getBeta(), this.precomputed = b, this
        }, e.prototype._hasDoubles = function(a) {
            if (!this.precomputed) return !1;
            var b = this.precomputed.doubles;
            return b ? b.points.length >= Math.ceil((a.bitLength() + 1) / b.step) : !1
        }, e.prototype._getDoubles = function(a, b) {
            if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
            for (var c = [this], d = this, e = 0; b > e; e += a) {
                for (var f = 0; a > f; f++) d = d.dbl();
                c.push(d)
            }
            return {
                step: a,
                points: c
            }
        }, e.prototype._getNAFPoints = function(a) {
            if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
            for (var b = [this], c = (1 << a) - 1, d = 1 === c ? null : this.dbl(), e = 1; c > e; e++) b[e] = b[e - 1].add(d);
            return {
                wnd: a,
                points: b
            }
        }, e.prototype._getBeta = function() {
            return null
        }, e.prototype.dblp = function(a) {
            for (var b = this, c = 0; a > c; c++) b = b.dbl();
            return b
        }
    }, {
        "../../elliptic": 71,
        "bn.js": 22
    }],
    73: [function(a, b, c) {
        "use strict";

        function d(a) {
            this.twisted = 1 !== (0 | a.a), this.mOneA = this.twisted && -1 === (0 | a.a), this.extended = this.mOneA, j.call(this, "edwards", a), this.a = new h(a.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new h(a.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new h(a.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), k(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 === (0 | a.c)
        }

        function e(a, b, c, d, e) {
            j.BasePoint.call(this, a, "projective"), null === b && null === c && null === d ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new h(b, 16), this.y = new h(c, 16), this.z = d ? new h(d, 16) : this.curve.one, this.t = e && new h(e, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        var f = a("../curve"),
            g = a("../../elliptic"),
            h = a("bn.js"),
            i = a("inherits"),
            j = f.base,
            k = g.utils.assert;
        i(d, j), b.exports = d, d.prototype._mulA = function(a) {
            return this.mOneA ? a.redNeg() : this.a.redMul(a)
        }, d.prototype._mulC = function(a) {
            return this.oneC ? a : this.c.redMul(a)
        }, d.prototype.jpoint = function(a, b, c, d) {
            return this.point(a, b, c, d)
        }, d.prototype.pointFromX = function(a, b) {
            a = new h(a, 16), a.red || (a = a.toRed(this.red));
            var c = a.redSqr(),
                d = this.c2.redSub(this.a.redMul(c)),
                e = this.one.redSub(this.c2.redMul(this.d).redMul(c)),
                f = d.redMul(e.redInvm()),
                g = f.redSqrt();
            if (0 !== g.redSqr().redSub(f).cmp(this.zero)) throw new Error("invalid point");
            var i = g.fromRed().isOdd();
            return (b && !i || !b && i) && (g = g.redNeg()), this.point(a, g)
        }, d.prototype.pointFromY = function(a, b) {
            a = new h(a, 16), a.red || (a = a.toRed(this.red));
            var c = a.redSqr(),
                d = c.redSub(this.one),
                e = c.redMul(this.d).redAdd(this.one),
                f = d.redMul(e.redInvm());
            if (0 === f.cmp(this.zero)) {
                if (b) throw new Error("invalid point");
                return this.point(this.zero, a)
            }
            var g = f.redSqrt();
            if (0 !== g.redSqr().redSub(f).cmp(this.zero)) throw new Error("invalid point");
            return g.isOdd() !== b && (g = g.redNeg()), this.point(g, a)
        }, d.prototype.validate = function(a) {
            if (a.isInfinity()) return !0;
            a.normalize();
            var b = a.x.redSqr(),
                c = a.y.redSqr(),
                d = b.redMul(this.a).redAdd(c),
                e = this.c2.redMul(this.one.redAdd(this.d.redMul(b).redMul(c)));
            return 0 === d.cmp(e)
        }, i(e, j.BasePoint), d.prototype.pointFromJSON = function(a) {
            return e.fromJSON(this, a)
        }, d.prototype.point = function(a, b, c, d) {
            return new e(this, a, b, c, d)
        }, e.fromJSON = function(a, b) {
            return new e(a, b[0], b[1], b[2])
        }, e.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, e.prototype.isInfinity = function() {
            return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z)
        }, e.prototype._extDbl = function() {
            var a = this.x.redSqr(),
                b = this.y.redSqr(),
                c = this.z.redSqr();
            c = c.redIAdd(c);
            var d = this.curve._mulA(a),
                e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b),
                f = d.redAdd(b),
                g = f.redSub(c),
                h = d.redSub(b),
                i = e.redMul(g),
                j = f.redMul(h),
                k = e.redMul(h),
                l = g.redMul(f);
            return this.curve.point(i, j, l, k)
        }, e.prototype._projDbl = function() {
            var a, b, c, d = this.x.redAdd(this.y).redSqr(),
                e = this.x.redSqr(),
                f = this.y.redSqr();
            if (this.curve.twisted) {
                var g = this.curve._mulA(e),
                    h = g.redAdd(f);
                if (this.zOne) a = d.redSub(e).redSub(f).redMul(h.redSub(this.curve.two)), b = h.redMul(g.redSub(f)), c = h.redSqr().redSub(h).redSub(h);
                else {
                    var i = this.z.redSqr(),
                        j = h.redSub(i).redISub(i);
                    a = d.redSub(e).redISub(f).redMul(j), b = h.redMul(g.redSub(f)), c = h.redMul(j)
                }
            } else {
                var g = e.redAdd(f),
                    i = this.curve._mulC(this.c.redMul(this.z)).redSqr(),
                    j = g.redSub(i).redSub(i);
                a = this.curve._mulC(d.redISub(g)).redMul(j), b = this.curve._mulC(g).redMul(e.redISub(f)), c = g.redMul(j)
            }
            return this.curve.point(a, b, c)
        }, e.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }, e.prototype._extAdd = function(a) {
            var b = this.y.redSub(this.x).redMul(a.y.redSub(a.x)),
                c = this.y.redAdd(this.x).redMul(a.y.redAdd(a.x)),
                d = this.t.redMul(this.curve.dd).redMul(a.t),
                e = this.z.redMul(a.z.redAdd(a.z)),
                f = c.redSub(b),
                g = e.redSub(d),
                h = e.redAdd(d),
                i = c.redAdd(b),
                j = f.redMul(g),
                k = h.redMul(i),
                l = f.redMul(i),
                m = g.redMul(h);
            return this.curve.point(j, k, m, l)
        }, e.prototype._projAdd = function(a) {
            var b, c, d = this.z.redMul(a.z),
                e = d.redSqr(),
                f = this.x.redMul(a.x),
                g = this.y.redMul(a.y),
                h = this.curve.d.redMul(f).redMul(g),
                i = e.redSub(h),
                j = e.redAdd(h),
                k = this.x.redAdd(this.y).redMul(a.x.redAdd(a.y)).redISub(f).redISub(g),
                l = d.redMul(i).redMul(k);
            return this.curve.twisted ? (b = d.redMul(j).redMul(g.redSub(this.curve._mulA(f))), c = i.redMul(j)) : (b = d.redMul(j).redMul(g.redSub(f)), c = this.curve._mulC(i).redMul(j)), this.curve.point(l, b, c)
        }, e.prototype.add = function(a) {
            return this.isInfinity() ? a : a.isInfinity() ? this : this.curve.extended ? this._extAdd(a) : this._projAdd(a)
        }, e.prototype.mul = function(a) {
            return this._hasDoubles(a) ? this.curve._fixedNafMul(this, a) : this.curve._wnafMul(this, a)
        }, e.prototype.mulAdd = function(a, b, c) {
            return this.curve._wnafMulAdd(1, [this, b], [a, c], 2)
        }, e.prototype.normalize = function() {
            if (this.zOne) return this;
            var a = this.z.redInvm();
            return this.x = this.x.redMul(a), this.y = this.y.redMul(a), this.t && (this.t = this.t.redMul(a)), this.z = this.curve.one, this.zOne = !0, this
        }, e.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }, e.prototype.getX = function() {
            return this.normalize(), this.x.fromRed()
        }, e.prototype.getY = function() {
            return this.normalize(), this.y.fromRed()
        }, e.prototype.eq = function(a) {
            return this === a || 0 === this.getX().cmp(a.getX()) && 0 === this.getY().cmp(a.getY())
        }, e.prototype.toP = e.prototype.normalize, e.prototype.mixedAdd = e.prototype.add
    }, {
        "../../elliptic": 71,
        "../curve": 74,
        "bn.js": 22,
        inherits: 101
    }],
    74: [function(a, b, c) {
        "use strict";
        var d = c;
        d.base = a("./base"), d["short"] = a("./short"), d.mont = a("./mont"), d.edwards = a("./edwards")
    }, {
        "./base": 72,
        "./edwards": 73,
        "./mont": 75,
        "./short": 76
    }],
    75: [function(a, b, c) {
        "use strict";

        function d(a) {
            i.call(this, "mont", a), this.a = new g(a.a, 16).toRed(this.red), this.b = new g(a.b, 16).toRed(this.red), this.i4 = new g(4).toRed(this.red).redInvm(), this.two = new g(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }

        function e(a, b, c) {
            i.BasePoint.call(this, a, "projective"), null === b && null === c ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new g(b, 16), this.z = new g(c, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        var f = a("../curve"),
            g = a("bn.js"),
            h = a("inherits"),
            i = f.base,
            j = a("../../elliptic"),
            k = j.utils;
        h(d, i), b.exports = d, d.prototype.validate = function(a) {
            var b = a.normalize().x,
                c = b.redSqr(),
                d = c.redMul(b).redAdd(c.redMul(this.a)).redAdd(b),
                e = d.redSqrt();
            return 0 === e.redSqr().cmp(d)
        }, h(e, i.BasePoint), d.prototype.decodePoint = function(a, b) {
            return this.point(k.toArray(a, b), 1)
        }, d.prototype.point = function(a, b) {
            return new e(this, a, b)
        }, d.prototype.pointFromJSON = function(a) {
            return e.fromJSON(this, a)
        }, e.prototype.precompute = function() {}, e.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }, e.fromJSON = function(a, b) {
            return new e(a, b[0], b[1] || a.one)
        }, e.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, e.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }, e.prototype.dbl = function() {
            var a = this.x.redAdd(this.z),
                b = a.redSqr(),
                c = this.x.redSub(this.z),
                d = c.redSqr(),
                e = b.redSub(d),
                f = b.redMul(d),
                g = e.redMul(d.redAdd(this.curve.a24.redMul(e)));
            return this.curve.point(f, g)
        }, e.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve")
        }, e.prototype.diffAdd = function(a, b) {
            var c = this.x.redAdd(this.z),
                d = this.x.redSub(this.z),
                e = a.x.redAdd(a.z),
                f = a.x.redSub(a.z),
                g = f.redMul(c),
                h = e.redMul(d),
                i = b.z.redMul(g.redAdd(h).redSqr()),
                j = b.x.redMul(g.redISub(h).redSqr());
            return this.curve.point(i, j)
        }, e.prototype.mul = function(a) {
            for (var b = a.clone(), c = this, d = this.curve.point(null, null), e = this, f = []; 0 !== b.cmpn(0); b.iushrn(1)) f.push(b.andln(1));
            for (var g = f.length - 1; g >= 0; g--) 0 === f[g] ? (c = c.diffAdd(d, e), d = d.dbl()) : (d = c.diffAdd(d, e), c = c.dbl());
            return d
        }, e.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }, e.prototype.eq = function(a) {
            return 0 === this.getX().cmp(a.getX())
        }, e.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
        }, e.prototype.getX = function() {
            return this.normalize(), this.x.fromRed()
        }
    }, {
        "../../elliptic": 71,
        "../curve": 74,
        "bn.js": 22,
        inherits: 101
    }],
    76: [function(a, b, c) {
        "use strict";

        function d(a) {
            k.call(this, "short", a), this.a = new i(a.a, 16).toRed(this.red), this.b = new i(a.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(a), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
        }

        function e(a, b, c, d) {
            k.BasePoint.call(this, a, "affine"), null === b && null === c ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(b, 16), this.y = new i(c, 16), d && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
        }

        function f(a, b, c, d) {
            k.BasePoint.call(this, a, "jacobian"), null === b && null === c && null === d ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(b, 16), this.y = new i(c, 16), this.z = new i(d, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
        }
        var g = a("../curve"),
            h = a("../../elliptic"),
            i = a("bn.js"),
            j = a("inherits"),
            k = g.base,
            l = h.utils.assert;
        j(d, k), b.exports = d, d.prototype._getEndomorphism = function(a) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var b, c;
                if (a.beta) b = new i(a.beta, 16).toRed(this.red);
                else {
                    var d = this._getEndoRoots(this.p);
                    b = d[0].cmp(d[1]) < 0 ? d[0] : d[1], b = b.toRed(this.red)
                }
                if (a.lambda) c = new i(a.lambda, 16);
                else {
                    var e = this._getEndoRoots(this.n);
                    0 === this.g.mul(e[0]).x.cmp(this.g.x.redMul(b)) ? c = e[0] : (c = e[1], l(0 === this.g.mul(c).x.cmp(this.g.x.redMul(b))))
                }
                var f;
                return f = a.basis ? a.basis.map(function(a) {
                    return {
                        a: new i(a.a, 16),
                        b: new i(a.b, 16)
                    }
                }) : this._getEndoBasis(c), {
                    beta: b,
                    lambda: c,
                    basis: f
                }
            }
        }, d.prototype._getEndoRoots = function(a) {
            var b = a === this.p ? this.red : i.mont(a),
                c = new i(2).toRed(b).redInvm(),
                d = c.redNeg(),
                e = new i(3).toRed(b).redNeg().redSqrt().redMul(c),
                f = d.redAdd(e).fromRed(),
                g = d.redSub(e).fromRed();
            return [f, g]
        }, d.prototype._getEndoBasis = function(a) {
            for (var b, c, d, e, f, g, h, j, k, l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), m = a, n = this.n.clone(), o = new i(1), p = new i(0), q = new i(0), r = new i(1), s = 0; 0 !== m.cmpn(0);) {
                var t = n.div(m);
                j = n.sub(t.mul(m)), k = q.sub(t.mul(o));
                var u = r.sub(t.mul(p));
                if (!d && j.cmp(l) < 0) b = h.neg(), c = o, d = j.neg(), e = k;
                else if (d && 2 === ++s) break;
                h = j, n = m, m = j, q = o, o = k, r = p, p = u
            }
            f = j.neg(), g = k;
            var v = d.sqr().add(e.sqr()),
                w = f.sqr().add(g.sqr());
            return w.cmp(v) >= 0 && (f = b, g = c), d.negative && (d = d.neg(), e = e.neg()), f.negative && (f = f.neg(), g = g.neg()), [{
                a: d,
                b: e
            }, {
                a: f,
                b: g
            }]
        }, d.prototype._endoSplit = function(a) {
            var b = this.endo.basis,
                c = b[0],
                d = b[1],
                e = d.b.mul(a).divRound(this.n),
                f = c.b.neg().mul(a).divRound(this.n),
                g = e.mul(c.a),
                h = f.mul(d.a),
                i = e.mul(c.b),
                j = f.mul(d.b),
                k = a.sub(g).sub(h),
                l = i.add(j).neg();
            return {
                k1: k,
                k2: l
            }
        }, d.prototype.pointFromX = function(a, b) {
            a = new i(a, 16), a.red || (a = a.toRed(this.red));
            var c = a.redSqr().redMul(a).redIAdd(a.redMul(this.a)).redIAdd(this.b),
                d = c.redSqrt();
            if (0 !== d.redSqr().redSub(c).cmp(this.zero)) throw new Error("invalid point");
            var e = d.fromRed().isOdd();
            return (b && !e || !b && e) && (d = d.redNeg()), this.point(a, d)
        }, d.prototype.validate = function(a) {
            if (a.inf) return !0;
            var b = a.x,
                c = a.y,
                d = this.a.redMul(b),
                e = b.redSqr().redMul(b).redIAdd(d).redIAdd(this.b);
            return 0 === c.redSqr().redISub(e).cmpn(0)
        }, d.prototype._endoWnafMulAdd = function(a, b) {
            for (var c = this._endoWnafT1, d = this._endoWnafT2, e = 0; e < a.length; e++) {
                var f = this._endoSplit(b[e]),
                    g = a[e],
                    h = g._getBeta();
                f.k1.negative && (f.k1.ineg(), g = g.neg(!0)), f.k2.negative && (f.k2.ineg(), h = h.neg(!0)), c[2 * e] = g, c[2 * e + 1] = h, d[2 * e] = f.k1, d[2 * e + 1] = f.k2
            }
            for (var i = this._wnafMulAdd(1, c, d, 2 * e), j = 0; 2 * e > j; j++) c[j] = null, d[j] = null;
            return i
        }, j(e, k.BasePoint), d.prototype.point = function(a, b, c) {
            return new e(this, a, b, c)
        }, d.prototype.pointFromJSON = function(a, b) {
            return e.fromJSON(this, a, b)
        }, e.prototype._getBeta = function() {
            if (this.curve.endo) {
                var a = this.precomputed;
                if (a && a.beta) return a.beta;
                var b = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (a) {
                    var c = this.curve,
                        d = function(a) {
                            return c.point(a.x.redMul(c.endo.beta), a.y)
                        };
                    a.beta = b, b.precomputed = {
                        beta: null,
                        naf: a.naf && {
                            wnd: a.naf.wnd,
                            points: a.naf.points.map(d)
                        },
                        doubles: a.doubles && {
                            step: a.doubles.step,
                            points: a.doubles.points.map(d)
                        }
                    }
                }
                return b
            }
        }, e.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }, e.fromJSON = function(a, b, c) {
            function d(b) {
                return a.point(b[0], b[1], c)
            }
            "string" == typeof b && (b = JSON.parse(b));
            var e = a.point(b[0], b[1], c);
            if (!b[2]) return e;
            var f = b[2];
            return e.precomputed = {
                beta: null,
                doubles: f.doubles && {
                    step: f.doubles.step,
                    points: [e].concat(f.doubles.points.map(d))
                },
                naf: f.naf && {
                    wnd: f.naf.wnd,
                    points: [e].concat(f.naf.points.map(d))
                }
            }, e
        }, e.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }, e.prototype.isInfinity = function() {
            return this.inf
        }, e.prototype.add = function(a) {
            if (this.inf) return a;
            if (a.inf) return this;
            if (this.eq(a)) return this.dbl();
            if (this.neg().eq(a)) return this.curve.point(null, null);
            if (0 === this.x.cmp(a.x)) return this.curve.point(null, null);
            var b = this.y.redSub(a.y);
            0 !== b.cmpn(0) && (b = b.redMul(this.x.redSub(a.x).redInvm()));
            var c = b.redSqr().redISub(this.x).redISub(a.x),
                d = b.redMul(this.x.redSub(c)).redISub(this.y);
            return this.curve.point(c, d)
        }, e.prototype.dbl = function() {
            if (this.inf) return this;
            var a = this.y.redAdd(this.y);
            if (0 === a.cmpn(0)) return this.curve.point(null, null);
            var b = this.curve.a,
                c = this.x.redSqr(),
                d = a.redInvm(),
                e = c.redAdd(c).redIAdd(c).redIAdd(b).redMul(d),
                f = e.redSqr().redISub(this.x.redAdd(this.x)),
                g = e.redMul(this.x.redSub(f)).redISub(this.y);
            return this.curve.point(f, g)
        }, e.prototype.getX = function() {
            return this.x.fromRed()
        }, e.prototype.getY = function() {
            return this.y.fromRed()
        }, e.prototype.mul = function(a) {
            return a = new i(a, 16), this._hasDoubles(a) ? this.curve._fixedNafMul(this, a) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [a]) : this.curve._wnafMul(this, a)
        }, e.prototype.mulAdd = function(a, b, c) {
            var d = [this, b],
                e = [a, c];
            return this.curve.endo ? this.curve._endoWnafMulAdd(d, e) : this.curve._wnafMulAdd(1, d, e, 2)
        }, e.prototype.eq = function(a) {
            return this === a || this.inf === a.inf && (this.inf || 0 === this.x.cmp(a.x) && 0 === this.y.cmp(a.y))
        }, e.prototype.neg = function(a) {
            if (this.inf) return this;
            var b = this.curve.point(this.x, this.y.redNeg());
            if (a && this.precomputed) {
                var c = this.precomputed,
                    d = function(a) {
                        return a.neg()
                    };
                b.precomputed = {
                    naf: c.naf && {
                        wnd: c.naf.wnd,
                        points: c.naf.points.map(d)
                    },
                    doubles: c.doubles && {
                        step: c.doubles.step,
                        points: c.doubles.points.map(d)
                    }
                }
            }
            return b
        }, e.prototype.toJ = function() {
            if (this.inf) return this.curve.jpoint(null, null, null);
            var a = this.curve.jpoint(this.x, this.y, this.curve.one);
            return a
        }, j(f, k.BasePoint), d.prototype.jpoint = function(a, b, c) {
            return new f(this, a, b, c)
        }, f.prototype.toP = function() {
            if (this.isInfinity()) return this.curve.point(null, null);
            var a = this.z.redInvm(),
                b = a.redSqr(),
                c = this.x.redMul(b),
                d = this.y.redMul(b).redMul(a);
            return this.curve.point(c, d)
        }, f.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }, f.prototype.add = function(a) {
            if (this.isInfinity()) return a;
            if (a.isInfinity()) return this;
            var b = a.z.redSqr(),
                c = this.z.redSqr(),
                d = this.x.redMul(b),
                e = a.x.redMul(c),
                f = this.y.redMul(b.redMul(a.z)),
                g = a.y.redMul(c.redMul(this.z)),
                h = d.redSub(e),
                i = f.redSub(g);
            if (0 === h.cmpn(0)) return 0 !== i.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var j = h.redSqr(),
                k = j.redMul(h),
                l = d.redMul(j),
                m = i.redSqr().redIAdd(k).redISub(l).redISub(l),
                n = i.redMul(l.redISub(m)).redISub(f.redMul(k)),
                o = this.z.redMul(a.z).redMul(h);
            return this.curve.jpoint(m, n, o)
        }, f.prototype.mixedAdd = function(a) {
            if (this.isInfinity()) return a.toJ();
            if (a.isInfinity()) return this;
            var b = this.z.redSqr(),
                c = this.x,
                d = a.x.redMul(b),
                e = this.y,
                f = a.y.redMul(b).redMul(this.z),
                g = c.redSub(d),
                h = e.redSub(f);
            if (0 === g.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var i = g.redSqr(),
                j = i.redMul(g),
                k = c.redMul(i),
                l = h.redSqr().redIAdd(j).redISub(k).redISub(k),
                m = h.redMul(k.redISub(l)).redISub(e.redMul(j)),
                n = this.z.redMul(g);
            return this.curve.jpoint(l, m, n)
        }, f.prototype.dblp = function(a) {
            if (0 === a) return this;
            if (this.isInfinity()) return this;
            if (!a) return this.dbl();
            if (this.curve.zeroA || this.curve.threeA) {
                for (var b = this, c = 0; a > c; c++) b = b.dbl();
                return b
            }
            for (var d = this.curve.a, e = this.curve.tinv, f = this.x, g = this.y, h = this.z, i = h.redSqr().redSqr(), j = g.redAdd(g), c = 0; a > c; c++) {
                var k = f.redSqr(),
                    l = j.redSqr(),
                    m = l.redSqr(),
                    n = k.redAdd(k).redIAdd(k).redIAdd(d.redMul(i)),
                    o = f.redMul(l),
                    p = n.redSqr().redISub(o.redAdd(o)),
                    q = o.redISub(p),
                    r = n.redMul(q);
                r = r.redIAdd(r).redISub(m);
                var s = j.redMul(h);
                a > c + 1 && (i = i.redMul(m)), f = p, h = s, j = r
            }
            return this.curve.jpoint(f, j.redMul(e), h)
        }, f.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }, f.prototype._zeroDbl = function() {
            var a, b, c;
            if (this.zOne) {
                var d = this.x.redSqr(),
                    e = this.y.redSqr(),
                    f = e.redSqr(),
                    g = this.x.redAdd(e).redSqr().redISub(d).redISub(f);
                g = g.redIAdd(g);
                var h = d.redAdd(d).redIAdd(d),
                    i = h.redSqr().redISub(g).redISub(g),
                    j = f.redIAdd(f);
                j = j.redIAdd(j), j = j.redIAdd(j), a = i, b = h.redMul(g.redISub(i)).redISub(j), c = this.y.redAdd(this.y)
            } else {
                var k = this.x.redSqr(),
                    l = this.y.redSqr(),
                    m = l.redSqr(),
                    n = this.x.redAdd(l).redSqr().redISub(k).redISub(m);
                n = n.redIAdd(n);
                var o = k.redAdd(k).redIAdd(k),
                    p = o.redSqr(),
                    q = m.redIAdd(m);
                q = q.redIAdd(q), q = q.redIAdd(q), a = p.redISub(n).redISub(n), b = o.redMul(n.redISub(a)).redISub(q), c = this.y.redMul(this.z), c = c.redIAdd(c)
            }
            return this.curve.jpoint(a, b, c)
        }, f.prototype._threeDbl = function() {
            var a, b, c;
            if (this.zOne) {
                var d = this.x.redSqr(),
                    e = this.y.redSqr(),
                    f = e.redSqr(),
                    g = this.x.redAdd(e).redSqr().redISub(d).redISub(f);
                g = g.redIAdd(g);
                var h = d.redAdd(d).redIAdd(d).redIAdd(this.curve.a),
                    i = h.redSqr().redISub(g).redISub(g);
                a = i;
                var j = f.redIAdd(f);
                j = j.redIAdd(j), j = j.redIAdd(j), b = h.redMul(g.redISub(i)).redISub(j), c = this.y.redAdd(this.y)
            } else {
                var k = this.z.redSqr(),
                    l = this.y.redSqr(),
                    m = this.x.redMul(l),
                    n = this.x.redSub(k).redMul(this.x.redAdd(k));
                n = n.redAdd(n).redIAdd(n);
                var o = m.redIAdd(m);
                o = o.redIAdd(o);
                var p = o.redAdd(o);
                a = n.redSqr().redISub(p), c = this.y.redAdd(this.z).redSqr().redISub(l).redISub(k);
                var q = l.redSqr();
                q = q.redIAdd(q), q = q.redIAdd(q), q = q.redIAdd(q), b = n.redMul(o.redISub(a)).redISub(q)
            }
            return this.curve.jpoint(a, b, c)
        }, f.prototype._dbl = function() {
            var a = this.curve.a,
                b = this.x,
                c = this.y,
                d = this.z,
                e = d.redSqr().redSqr(),
                f = b.redSqr(),
                g = c.redSqr(),
                h = f.redAdd(f).redIAdd(f).redIAdd(a.redMul(e)),
                i = b.redAdd(b);
            i = i.redIAdd(i);
            var j = i.redMul(g),
                k = h.redSqr().redISub(j.redAdd(j)),
                l = j.redISub(k),
                m = g.redSqr();
            m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m);
            var n = h.redMul(l).redISub(m),
                o = c.redAdd(c).redMul(d);
            return this.curve.jpoint(k, n, o)
        }, f.prototype.trpl = function() {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var a = this.x.redSqr(),
                b = this.y.redSqr(),
                c = this.z.redSqr(),
                d = b.redSqr(),
                e = a.redAdd(a).redIAdd(a),
                f = e.redSqr(),
                g = this.x.redAdd(b).redSqr().redISub(a).redISub(d);
            g = g.redIAdd(g), g = g.redAdd(g).redIAdd(g), g = g.redISub(f);
            var h = g.redSqr(),
                i = d.redIAdd(d);
            i = i.redIAdd(i), i = i.redIAdd(i), i = i.redIAdd(i);
            var j = e.redIAdd(g).redSqr().redISub(f).redISub(h).redISub(i),
                k = b.redMul(j);
            k = k.redIAdd(k), k = k.redIAdd(k);
            var l = this.x.redMul(h).redISub(k);
            l = l.redIAdd(l), l = l.redIAdd(l);
            var m = this.y.redMul(j.redMul(i.redISub(j)).redISub(g.redMul(h)));
            m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m);
            var n = this.z.redAdd(g).redSqr().redISub(c).redISub(h);
            return this.curve.jpoint(l, m, n)
        }, f.prototype.mul = function(a, b) {
            return a = new i(a, b), this.curve._wnafMul(this, a)
        }, f.prototype.eq = function(a) {
            if ("affine" === a.type) return this.eq(a.toJ());
            if (this === a) return !0;
            var b = this.z.redSqr(),
                c = a.z.redSqr();
            if (0 !== this.x.redMul(c).redISub(a.x.redMul(b)).cmpn(0)) return !1;
            var d = b.redMul(this.z),
                e = c.redMul(a.z);
            return 0 === this.y.redMul(e).redISub(a.y.redMul(d)).cmpn(0)
        }, f.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }, f.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
    }, {
        "../../elliptic": 71,
        "../curve": 74,
        "bn.js": 22,
        inherits: 101
    }],
    77: [function(a, b, c) {
        "use strict";

        function d(a) {
            "short" === a.type ? this.curve = new h.curve["short"](a) : "edwards" === a.type ? this.curve = new h.curve.edwards(a) : this.curve = new h.curve.mont(a), this.g = this.curve.g, this.n = this.curve.n, this.hash = a.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }

        function e(a, b) {
            Object.defineProperty(f, a, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var c = new d(b);
                    return Object.defineProperty(f, a, {
                        configurable: !0,
                        enumerable: !0,
                        value: c
                    }), c
                }
            })
        }
        var f = c,
            g = a("hash.js"),
            h = a("../elliptic"),
            i = h.utils.assert;
        f.PresetCurve = d, e("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: g.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), e("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: g.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), e("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: g.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), e("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: g.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), e("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: g.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), e("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "0",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: g.sha256,
            gRed: !1,
            g: ["9"]
        }), e("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: g.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        var j;
        try {
            j = a("./precomputed/secp256k1")
        } catch (k) {
            j = void 0
        }
        e("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: g.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", j]
        })
    }, {
        "../elliptic": 71,
        "./precomputed/secp256k1": 85,
        "hash.js": 93
    }],
    78: [function(a, b, c) {
        "use strict";

        function d(a) {
            return this instanceof d ? ("string" == typeof a && (h(f.curves.hasOwnProperty(a), "Unknown curve " + a), a = f.curves[a]), a instanceof f.curves.PresetCurve && (a = {
                curve: a
            }), this.curve = a.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = a.curve.g, this.g.precompute(a.curve.n.bitLength() + 1), void(this.hash = a.hash || a.curve.hash)) : new d(a)
        }
        var e = a("bn.js"),
            f = a("../../elliptic"),
            g = f.utils,
            h = g.assert,
            i = a("./key"),
            j = a("./signature");
        b.exports = d, d.prototype.keyPair = function(a) {
            return new i(this, a)
        }, d.prototype.keyFromPrivate = function(a, b) {
            return i.fromPrivate(this, a, b)
        }, d.prototype.keyFromPublic = function(a, b) {
            return i.fromPublic(this, a, b)
        }, d.prototype.genKeyPair = function(a) {
            a || (a = {});
            for (var b = new f.hmacDRBG({
                    hash: this.hash,
                    pers: a.pers,
                    entropy: a.entropy || f.rand(this.hash.hmacStrength),
                    nonce: this.n.toArray()
                }), c = this.n.byteLength(), d = this.n.sub(new e(2));;) {
                var g = new e(b.generate(c));
                if (!(g.cmp(d) > 0)) return g.iaddn(1), this.keyFromPrivate(g)
            }
        }, d.prototype._truncateToN = function(a, b) {
            var c = 8 * a.byteLength() - this.n.bitLength();
            return c > 0 && (a = a.ushrn(c)), !b && a.cmp(this.n) >= 0 ? a.sub(this.n) : a
        }, d.prototype.sign = function(a, b, c, d) {
            "object" == typeof c && (d = c, c = null), d || (d = {}), b = this.keyFromPrivate(b, c), a = this._truncateToN(new e(a, 16));
            for (var g = this.n.byteLength(), h = b.getPrivate().toArray("be", g), i = a.toArray("be", g), k = new f.hmacDRBG({
                    hash: this.hash,
                    entropy: h,
                    nonce: i,
                    pers: d.pers,
                    persEnc: d.persEnc
                }), l = this.n.sub(new e(1)), m = 0; !0; m++) {
                var n = d.k ? d.k(m) : new e(k.generate(this.n.byteLength()));
                if (n = this._truncateToN(n, !0), !(n.cmpn(1) <= 0 || n.cmp(l) >= 0)) {
                    var o = this.g.mul(n);
                    if (!o.isInfinity()) {
                        var p = o.getX(),
                            q = p.umod(this.n);
                        if (0 !== q.cmpn(0)) {
                            var r = n.invm(this.n).mul(q.mul(b.getPrivate()).iadd(a));
                            if (r = r.umod(this.n), 0 !== r.cmpn(0)) {
                                var s = (o.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(q) ? 2 : 0);
                                return d.canonical && r.cmp(this.nh) > 0 && (r = this.n.sub(r), s ^= 1), new j({
                                    r: q,
                                    s: r,
                                    recoveryParam: s
                                })
                            }
                        }
                    }
                }
            }
        }, d.prototype.verify = function(a, b, c, d) {
            a = this._truncateToN(new e(a, 16)), c = this.keyFromPublic(c, d), b = new j(b, "hex");
            var f = b.r,
                g = b.s;
            if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
            if (g.cmpn(1) < 0 || g.cmp(this.n) >= 0) return !1;
            var h = g.invm(this.n),
                i = h.mul(a).umod(this.n),
                k = h.mul(f).umod(this.n),
                l = this.g.mulAdd(i, c.getPublic(), k);
            return l.isInfinity() ? !1 : 0 === l.getX().umod(this.n).cmp(f)
        }, d.prototype.recoverPubKey = function(a, b, c, d) {
            h((3 & c) === c, "The recovery param is more than two bits"), b = new j(b, d);
            var f = this.n,
                g = new e(a),
                i = b.r,
                k = b.s,
                l = 1 & c,
                m = c >> 1;
            if (i.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m) throw new Error("Unable to find sencond key candinate");
            i = m ? this.curve.pointFromX(i.add(this.curve.n), l) : this.curve.pointFromX(i, l);
            var n = f.sub(g),
                o = b.r.invm(f);
            return this.g.mulAdd(n, i, k).mul(o)
        }, d.prototype.getKeyRecoveryParam = function(a, b, c, d) {
            if (b = new j(b, d), null !== b.recoveryParam) return b.recoveryParam;
            for (var e = 0; 4 > e; e++) {
                var f;
                try {
                    f = this.recoverPubKey(a, b, e)
                } catch (a) {
                    continue
                }
                if (f.eq(c)) return e
            }
            throw new Error("Unable to find valid recovery factor")
        }
    }, {
        "../../elliptic": 71,
        "./key": 79,
        "./signature": 80,
        "bn.js": 22
    }],
    79: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            this.ec = a, this.priv = null, this.pub = null, b.priv && this._importPrivate(b.priv, b.privEnc), b.pub && this._importPublic(b.pub, b.pubEnc)
        }
        var e = a("bn.js");
        b.exports = d, d.fromPublic = function(a, b, c) {
            return b instanceof d ? b : new d(a, {
                pub: b,
                pubEnc: c
            })
        }, d.fromPrivate = function(a, b, c) {
            return b instanceof d ? b : new d(a, {
                priv: b,
                privEnc: c
            })
        }, d.prototype.validate = function() {
            var a = this.getPublic();
            return a.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : a.validate() ? a.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }, d.prototype.getPublic = function(a, b) {
            return "string" == typeof a && (b = a, a = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), b ? this.pub.encode(b, a) : this.pub
        }, d.prototype.getPrivate = function(a) {
            return "hex" === a ? this.priv.toString(16, 2) : this.priv
        }, d.prototype._importPrivate = function(a, b) {
            this.priv = new e(a, b || 16), this.priv = this.priv.umod(this.ec.curve.n)
        }, d.prototype._importPublic = function(a, b) {
            return a.x || a.y ? void(this.pub = this.ec.curve.point(a.x, a.y)) : void(this.pub = this.ec.curve.decodePoint(a, b))
        }, d.prototype.derive = function(a) {
            return a.mul(this.priv).getX()
        }, d.prototype.sign = function(a, b, c) {
            return this.ec.sign(a, this, b, c)
        }, d.prototype.verify = function(a, b) {
            return this.ec.verify(a, b, this)
        }, d.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
    }, {
        "bn.js": 22
    }],
    80: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            return a instanceof d ? a : void(this._importDER(a, b) || (l(a.r && a.s, "Signature without r or s"), this.r = new i(a.r, 16), this.s = new i(a.s, 16), void 0 === a.recoveryParam ? this.recoveryParam = null : this.recoveryParam = a.recoveryParam))
        }

        function e() {
            this.place = 0
        }

        function f(a, b) {
            var c = a[b.place++];
            if (!(128 & c)) return c;
            for (var d = 15 & c, e = 0, f = 0, g = b.place; d > f; f++, g++) e <<= 8, e |= a[g];
            return b.place = g, e
        }

        function g(a) {
            for (var b = 0, c = a.length - 1; !a[b] && !(128 & a[b + 1]) && c > b;) b++;
            return 0 === b ? a : a.slice(b)
        }

        function h(a, b) {
            if (128 > b) return void a.push(b);
            var c = 1 + (Math.log(b) / Math.LN2 >>> 3);
            for (a.push(128 | c); --c;) a.push(b >>> (c << 3) & 255);
            a.push(b)
        }
        var i = a("bn.js"),
            j = a("../../elliptic"),
            k = j.utils,
            l = k.assert;
        b.exports = d, d.prototype._importDER = function(a, b) {
            a = k.toArray(a, b);
            var c = new e;
            if (48 !== a[c.place++]) return !1;
            var d = f(a, c);
            if (d + c.place !== a.length) return !1;
            if (2 !== a[c.place++]) return !1;
            var g = f(a, c),
                h = a.slice(c.place, g + c.place);
            if (c.place += g, 2 !== a[c.place++]) return !1;
            var j = f(a, c);
            if (a.length !== j + c.place) return !1;
            var l = a.slice(c.place, j + c.place);
            return 0 === h[0] && 128 & h[1] && (h = h.slice(1)), 0 === l[0] && 128 & l[1] && (l = l.slice(1)), this.r = new i(h), this.s = new i(l), this.recoveryParam = null, !0
        }, d.prototype.toDER = function(a) {
            var b = this.r.toArray(),
                c = this.s.toArray();
            for (128 & b[0] && (b = [0].concat(b)), 128 & c[0] && (c = [0].concat(c)), b = g(b), c = g(c); !(c[0] || 128 & c[1]);) c = c.slice(1);
            var d = [2];
            h(d, b.length), d = d.concat(b), d.push(2), h(d, c.length);
            var e = d.concat(c),
                f = [48];
            return h(f, e.length), f = f.concat(e), k.encode(f, a)
        }
    }, {
        "../../elliptic": 71,
        "bn.js": 22
    }],
    81: [function(a, b, c) {
        "use strict";

        function d(a) {
            if (h("ed25519" === a, "only tested with ed25519 so far"), !(this instanceof d)) return new d(a);
            var a = f.curves[a].curve;
            this.curve = a, this.g = a.g, this.g.precompute(a.n.bitLength() + 1), this.pointClass = a.point().constructor, this.encodingLength = Math.ceil(a.n.bitLength() / 8), this.hash = e.sha512
        }
        var e = a("hash.js"),
            f = a("../../elliptic"),
            g = f.utils,
            h = g.assert,
            i = g.parseBytes,
            j = a("./key"),
            k = a("./signature");
        b.exports = d, d.prototype.sign = function(a, b) {
            a = i(a);
            var c = this.keyFromSecret(b),
                d = this.hashInt(c.messagePrefix(), a),
                e = this.g.mul(d),
                f = this.encodePoint(e),
                g = this.hashInt(f, c.pubBytes(), a).mul(c.priv()),
                h = d.add(g).umod(this.curve.n);
            return this.makeSignature({
                R: e,
                S: h,
                Rencoded: f
            })
        }, d.prototype.verify = function(a, b, c) {
            a = i(a), b = this.makeSignature(b);
            var d = this.keyFromPublic(c),
                e = this.hashInt(b.Rencoded(), d.pubBytes(), a),
                f = this.g.mul(b.S()),
                g = b.R().add(d.pub().mul(e));
            return g.eq(f)
        }, d.prototype.hashInt = function() {
            for (var a = this.hash(), b = 0; b < arguments.length; b++) a.update(arguments[b]);
            return g.intFromLE(a.digest()).umod(this.curve.n)
        }, d.prototype.keyFromPublic = function(a) {
            return j.fromPublic(this, a)
        }, d.prototype.keyFromSecret = function(a) {
            return j.fromSecret(this, a)
        }, d.prototype.makeSignature = function(a) {
            return a instanceof k ? a : new k(this, a)
        }, d.prototype.encodePoint = function(a) {
            var b = a.getY().toArray("le", this.encodingLength);
            return b[this.encodingLength - 1] |= a.getX().isOdd() ? 128 : 0, b
        }, d.prototype.decodePoint = function(a) {
            a = g.parseBytes(a);
            var b = a.length - 1,
                c = a.slice(0, b).concat(-129 & a[b]),
                d = 0 !== (128 & a[b]),
                e = g.intFromLE(c);
            return this.curve.pointFromY(e, d)
        }, d.prototype.encodeInt = function(a) {
            return a.toArray("le", this.encodingLength)
        }, d.prototype.decodeInt = function(a) {
            return g.intFromLE(a)
        }, d.prototype.isPoint = function(a) {
            return a instanceof this.pointClass
        }
    }, {
        "../../elliptic": 71,
        "./key": 82,
        "./signature": 83,
        "hash.js": 93
    }],
    82: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            this.eddsa = a, this._secret = h(b.secret), a.isPoint(b.pub) ? this._pub = b.pub : this._pubBytes = h(b.pub)
        }
        var e = a("../../elliptic"),
            f = e.utils,
            g = f.assert,
            h = f.parseBytes,
            i = f.cachedProperty;
        d.fromPublic = function(a, b) {
            return b instanceof d ? b : new d(a, {
                pub: b
            })
        }, d.fromSecret = function(a, b) {
            return b instanceof d ? b : new d(a, {
                secret: b
            })
        }, d.prototype.secret = function() {
            return this._secret
        }, i(d, function() {
            return this.eddsa.encodePoint(this.pub())
        }), i(d, function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }), i(d, function() {
            var a = this.eddsa,
                b = this.hash(),
                c = a.encodingLength - 1,
                d = b.slice(0, a.encodingLength);
            return d[0] &= 248, d[c] &= 127, d[c] |= 64, d
        }), i(d, function() {
            return this.eddsa.decodeInt(this.privBytes())
        }), i(d, function() {
            return this.eddsa.hash().update(this.secret()).digest()
        }), i(d, function() {
            return this.hash().slice(this.eddsa.encodingLength)
        }), d.prototype.sign = function(a) {
            return g(this._secret, "KeyPair can only verify"), this.eddsa.sign(a, this)
        }, d.prototype.verify = function(a, b) {
            return this.eddsa.verify(a, b, this)
        }, d.prototype.getSecret = function(a) {
            return g(this._secret, "KeyPair is public only"), f.encode(this.secret(), a)
        }, d.prototype.getPublic = function(a) {
            return f.encode(this.pubBytes(), a)
        }, b.exports = d
    }, {
        "../../elliptic": 71
    }],
    83: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            this.eddsa = a, "object" != typeof b && (b = j(b)), Array.isArray(b) && (b = {
                R: b.slice(0, a.encodingLength),
                S: b.slice(a.encodingLength)
            }), h(b.R && b.S, "Signature without R or S"), a.isPoint(b.R) && (this._R = b.R), b.S instanceof e && (this._S = b.S), this._Rencoded = Array.isArray(b.R) ? b.R : b.Rencoded, this._Sencoded = Array.isArray(b.S) ? b.S : b.Sencoded
        }
        var e = a("bn.js"),
            f = a("../../elliptic"),
            g = f.utils,
            h = g.assert,
            i = g.cachedProperty,
            j = g.parseBytes;
        i(d, function() {
            return this.eddsa.decodeInt(this.Sencoded())
        }), i(d, function() {
            return this.eddsa.decodePoint(this.Rencoded())
        }), i(d, function() {
            return this.eddsa.encodePoint(this.R())
        }), i(d, function() {
            return this.eddsa.encodeInt(this.S())
        }), d.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded())
        }, d.prototype.toHex = function() {
            return g.encode(this.toBytes(), "hex").toUpperCase()
        }, b.exports = d
    }, {
        "../../elliptic": 71,
        "bn.js": 22
    }],
    84: [function(a, b, c) {
        "use strict";

        function d(a) {
            if (!(this instanceof d)) return new d(a);
            this.hash = a.hash, this.predResist = !!a.predResist, this.outLen = this.hash.outSize, this.minEntropy = a.minEntropy || this.hash.hmacStrength, this.reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
            var b = g.toArray(a.entropy, a.entropyEnc),
                c = g.toArray(a.nonce, a.nonceEnc),
                e = g.toArray(a.pers, a.persEnc);
            h(b.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(b, c, e)
        }
        var e = a("hash.js"),
            f = a("../elliptic"),
            g = f.utils,
            h = g.assert;
        b.exports = d, d.prototype._init = function(a, b, c) {
            var d = a.concat(b).concat(c);
            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
            for (var e = 0; e < this.V.length; e++) this.K[e] = 0, this.V[e] = 1;
            this._update(d), this.reseed = 1, this.reseedInterval = 281474976710656
        }, d.prototype._hmac = function() {
            return new e.hmac(this.hash, this.K)
        }, d.prototype._update = function(a) {
            var b = this._hmac().update(this.V).update([0]);
            a && (b = b.update(a)), this.K = b.digest(), this.V = this._hmac().update(this.V).digest(), a && (this.K = this._hmac().update(this.V).update([1]).update(a).digest(), this.V = this._hmac().update(this.V).digest())
        }, d.prototype.reseed = function(a, b, c, d) {
            "string" != typeof b && (d = c, c = b, b = null), a = g.toBuffer(a, b), c = g.toBuffer(c, d), h(a.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(a.concat(c || [])), this.reseed = 1
        }, d.prototype.generate = function(a, b, c, d) {
            if (this.reseed > this.reseedInterval) throw new Error("Reseed is required");
            "string" != typeof b && (d = c, c = b, b = null), c && (c = g.toArray(c, d), this._update(c));
            for (var e = []; e.length < a;) this.V = this._hmac().update(this.V).digest(), e = e.concat(this.V);
            var f = e.slice(0, a);
            return this._update(c), this.reseed++, g.encode(f, b)
        }
    }, {
        "../elliptic": 71,
        "hash.js": 93
    }],
    85: [function(a, b, c) {
        b.exports = {
            doubles: {
                step: 4,
                points: [
                    ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                    ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                    ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                    ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                    ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                    ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                    ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                    ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                    ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                    ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                    ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                    ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                    ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                    ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                    ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                    ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                    ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                    ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                    ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                    ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                    ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                    ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                    ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                    ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                    ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                    ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                    ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                    ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                    ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                    ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                    ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                    ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                    ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                    ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                    ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                    ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                    ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                    ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                    ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                    ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                    ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                    ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                    ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                    ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                    ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                    ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                    ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                    ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                    ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                    ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                    ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                    ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                    ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                    ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                    ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                    ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                    ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                    ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                    ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                    ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                    ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                    ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                    ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                    ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                    ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                ]
            },
            naf: {
                wnd: 7,
                points: [
                    ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                    ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                    ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                    ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                    ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                    ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                    ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                    ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                    ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                    ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                    ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                    ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                    ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                    ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                    ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                    ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                    ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                    ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                    ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                    ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                    ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                    ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                    ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                    ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                    ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                    ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                    ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                    ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                    ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                    ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                    ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                    ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                    ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                    ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                    ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                    ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                    ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                    ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                    ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                    ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                    ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                    ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                    ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                    ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                    ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                    ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                    ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                    ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                    ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                    ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                    ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                    ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                    ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                    ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                    ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                    ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                    ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                    ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                    ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                    ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                    ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                    ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                    ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                    ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                    ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                    ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                    ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                    ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                    ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                    ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                    ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                    ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                    ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                    ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                    ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                    ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                    ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                    ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                    ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                    ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                    ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                    ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                    ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                    ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                    ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                    ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                    ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                    ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                    ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                    ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                    ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                    ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                    ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                    ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                    ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                    ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                    ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                    ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                    ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                    ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                    ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                    ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                    ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                    ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                    ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                    ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                    ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                    ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                    ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                    ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                    ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                    ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                    ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                    ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                    ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                    ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                    ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                    ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                    ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                    ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                    ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                    ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                    ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                    ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                    ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                    ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                    ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                ]
            }
        }
    }, {}],
    86: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            if (Array.isArray(a)) return a.slice();
            if (!a) return [];
            var c = [];
            if ("string" != typeof a) {
                for (var d = 0; d < a.length; d++) c[d] = 0 | a[d];
                return c
            }
            if (b) {
                if ("hex" === b) {
                    a = a.replace(/[^a-z0-9]+/gi, ""), a.length % 2 !== 0 && (a = "0" + a);
                    for (var d = 0; d < a.length; d += 2) c.push(parseInt(a[d] + a[d + 1], 16))
                }
            } else
                for (var d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d),
                        f = e >> 8,
                        g = 255 & e;
                    f ? c.push(f, g) : c.push(g)
                }
            return c
        }

        function e(a) {
            return 1 === a.length ? "0" + a : a
        }

        function f(a) {
            for (var b = "", c = 0; c < a.length; c++) b += e(a[c].toString(16));
            return b
        }

        function g(a, b) {
            for (var c = [], d = 1 << b + 1, e = a.clone(); e.cmpn(1) >= 0;) {
                var f;
                if (e.isOdd()) {
                    var g = e.andln(d - 1);
                    f = g > (d >> 1) - 1 ? (d >> 1) - g : g, e.isubn(f)
                } else f = 0;
                c.push(f);
                for (var h = 0 !== e.cmpn(0) && 0 === e.andln(d - 1) ? b + 1 : 1, i = 1; h > i; i++) c.push(0);
                e.iushrn(h)
            }
            return c
        }

        function h(a, b) {
            var c = [
                [],
                []
            ];
            a = a.clone(), b = b.clone();
            for (var d = 0, e = 0; a.cmpn(-d) > 0 || b.cmpn(-e) > 0;) {
                var f = a.andln(3) + d & 3,
                    g = b.andln(3) + e & 3;
                3 === f && (f = -1), 3 === g && (g = -1);
                var h;
                if (0 === (1 & f)) h = 0;
                else {
                    var i = a.andln(7) + d & 7;
                    h = 3 !== i && 5 !== i || 2 !== g ? f : -f
                }
                c[0].push(h);
                var j;
                if (0 === (1 & g)) j = 0;
                else {
                    var i = b.andln(7) + e & 7;
                    j = 3 !== i && 5 !== i || 2 !== f ? g : -g
                }
                c[1].push(j), 2 * d === h + 1 && (d = 1 - d), 2 * e === j + 1 && (e = 1 - e), a.iushrn(1), b.iushrn(1)
            }
            return c
        }

        function i(a, b) {
            var c = b.name,
                d = "_" + c;
            a.prototype[c] = function() {
                return void 0 !== this[d] ? this[d] : this[d] = b.call(this)
            }
        }

        function j(a) {
            return "string" == typeof a ? l.toArray(a, "hex") : a
        }

        function k(a) {
            return new m(a, "hex", "le")
        }
        var l = c,
            m = a("bn.js");
        l.assert = function(a, b) {
            if (!a) throw new Error(b || "Assertion failed")
        }, l.toArray = d, l.zero2 = e, l.toHex = f, l.encode = function(a, b) {
            return "hex" === b ? f(a) : a
        }, l.getNAF = g, l.getJSF = h, l.cachedProperty = i, l.parseBytes = j, l.intFromLE = k
    }, {
        "bn.js": 22
    }],
    87: [function(a, b, c) {
        b.exports = {
            _args: [
                ["elliptic@^6.0.0", "/Users/vorg/Workspace/var-150417-ora-sdk/halo-sdk-client-webgl/node_modules/browserify-sign"]
            ],
            _from: "elliptic@>=6.0.0 <7.0.0",
            _id: "elliptic@6.2.3",
            _inCache: !0,
            _installable: !0,
            _location: "/elliptic",
            _nodeVersion: "5.4.1",
            _npmUser: {
                email: "fedor@indutny.com",
                name: "indutny"
            },
            _npmVersion: "3.3.12",
            _phantomChildren: {},
            _requested: {
                name: "elliptic",
                raw: "elliptic@^6.0.0",
                rawSpec: "^6.0.0",
                scope: null,
                spec: ">=6.0.0 <7.0.0",
                type: "range"
            },
            _requiredBy: ["/browserify-sign", "/create-ecdh"],
            _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.2.3.tgz",
            _shasum: "18e46d7306b0951275a2d42063270a14b74ebe99",
            _shrinkwrap: null,
            _spec: "elliptic@^6.0.0",
            _where: "/Users/vorg/Workspace/var-150417-ora-sdk/halo-sdk-client-webgl/node_modules/browserify-sign",
            author: {
                email: "fedor@indutny.com",
                name: "Fedor Indutny"
            },
            bugs: {
                url: "https://github.com/indutny/elliptic/issues"
            },
            dependencies: {
                "bn.js": "^4.0.0",
                brorand: "^1.0.1",
                "hash.js": "^1.0.0",
                inherits: "^2.0.1"
            },
            description: "EC cryptography",
            devDependencies: {
                coveralls: "^2.11.3",
                istanbul: "^0.4.2",
                jscs: "^2.9.0",
                jshint: "^2.6.0",
                mocha: "^2.1.0"
            },
            directories: {},
            dist: {
                shasum: "18e46d7306b0951275a2d42063270a14b74ebe99",
                tarball: "http://registry.npmjs.org/elliptic/-/elliptic-6.2.3.tgz"
            },
            files: ["lib"],
            gitHead: "c32f20b22b420eb6af3c6dda28963deb7facf823",
            homepage: "https://github.com/indutny/elliptic",
            keywords: ["Cryptography", "EC", "Elliptic", "curve"],
            license: "MIT",
            main: "lib/elliptic.js",
            maintainers: [{
                name: "indutny",
                email: "fedor@indutny.com"
            }],
            name: "elliptic",
            optionalDependencies: {},
            readme: "ERROR: No README data found!",
            repository: {
                type: "git",
                url: "git+ssh://git@github.com/indutny/elliptic.git"
            },
            scripts: {
                coverage: "npm run unit --coverage",
                coveralls: "npm run coverage && cat ./coverage/lcov.info | coveralls",
                jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/*.js",
                jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/*.js",
                lint: "npm run jscs && npm run jshint",
                test: "npm run lint && npm run unit",
                unit: "istanbul test _mocha --reporter=spec test/*-test.js"
            },
            version: "6.2.3"
        }
    }, {}],
    88: [function(a, b, c) {
        function d() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function e(a) {
            return "function" == typeof a
        }

        function f(a) {
            return "number" == typeof a
        }

        function g(a) {
            return "object" == typeof a && null !== a
        }

        function h(a) {
            return void 0 === a
        }
        b.exports = d, d.EventEmitter = d, d.prototype._events = void 0, d.prototype._maxListeners = void 0, d.defaultMaxListeners = 10, d.prototype.setMaxListeners = function(a) {
            if (!f(a) || 0 > a || isNaN(a)) throw TypeError("n must be a positive number");
            return this._maxListeners = a, this
        }, d.prototype.emit = function(a) {
            var b, c, d, f, i, j;
            if (this._events || (this._events = {}), "error" === a && (!this._events.error || g(this._events.error) && !this._events.error.length)) {
                if (b = arguments[1], b instanceof Error) throw b;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if (c = this._events[a], h(c)) return !1;
            if (e(c)) switch (arguments.length) {
                case 1:
                    c.call(this);
                    break;
                case 2:
                    c.call(this, arguments[1]);
                    break;
                case 3:
                    c.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    f = Array.prototype.slice.call(arguments, 1), c.apply(this, f)
            } else if (g(c))
                for (f = Array.prototype.slice.call(arguments, 1), j = c.slice(), d = j.length, i = 0; d > i; i++) j[i].apply(this, f);
            return !0
        }, d.prototype.addListener = function(a, b) {
            var c;
            if (!e(b)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", a, e(b.listener) ? b.listener : b), this._events[a] ? g(this._events[a]) ? this._events[a].push(b) : this._events[a] = [this._events[a], b] : this._events[a] = b, g(this._events[a]) && !this._events[a].warned && (c = h(this._maxListeners) ? d.defaultMaxListeners : this._maxListeners, c && c > 0 && this._events[a].length > c && (this._events[a].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), "function" == typeof console.trace && console.trace())), this
        }, d.prototype.on = d.prototype.addListener, d.prototype.once = function(a, b) {
            function c() {
                this.removeListener(a, c), d || (d = !0, b.apply(this, arguments))
            }
            if (!e(b)) throw TypeError("listener must be a function");
            var d = !1;
            return c.listener = b, this.on(a, c), this
        }, d.prototype.removeListener = function(a, b) {
            var c, d, f, h;
            if (!e(b)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[a]) return this;
            if (c = this._events[a], f = c.length, d = -1, c === b || e(c.listener) && c.listener === b) delete this._events[a], this._events.removeListener && this.emit("removeListener", a, b);
            else if (g(c)) {
                for (h = f; h-- > 0;)
                    if (c[h] === b || c[h].listener && c[h].listener === b) {
                        d = h;
                        break
                    }
                if (0 > d) return this;
                1 === c.length ? (c.length = 0, delete this._events[a]) : c.splice(d, 1), this._events.removeListener && this.emit("removeListener", a, b)
            }
            return this
        }, d.prototype.removeAllListeners = function(a) {
            var b, c;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[a] && delete this._events[a], this;
            if (0 === arguments.length) {
                for (b in this._events) "removeListener" !== b && this.removeAllListeners(b);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (c = this._events[a], e(c)) this.removeListener(a, c);
            else if (c)
                for (; c.length;) this.removeListener(a, c[c.length - 1]);
            return delete this._events[a], this
        }, d.prototype.listeners = function(a) {
            var b;
            return b = this._events && this._events[a] ? e(this._events[a]) ? [this._events[a]] : this._events[a].slice() : []
        }, d.prototype.listenerCount = function(a) {
            if (this._events) {
                var b = this._events[a];
                if (e(b)) return 1;
                if (b) return b.length
            }
            return 0
        }, d.listenerCount = function(a, b) {
            return a.listenerCount(b)
        }
    }, {}],
    89: [function(a, b, c) {
        (function(c) {
            function d(a, b, d, f) {
                c.isBuffer(a) || (a = new c(a, "binary")), b && !c.isBuffer(b) && (b = new c(b, "binary")), d /= 8, f = f || 0;
                for (var g, h, i = 0, j = 0, k = new c(d), l = new c(f), m = 0, n = [];;) {
                    if (m++ > 0 && n.push(g), n.push(a), b && n.push(b), g = e(c.concat(n)), n = [], h = 0, d > 0)
                        for (;;) {
                            if (0 === d) break;
                            if (h === g.length) break;
                            k[i++] = g[h], d--, h++
                        }
                    if (f > 0 && h !== g.length)
                        for (;;) {
                            if (0 === f) break;
                            if (h === g.length) break;
                            l[j++] = g[h], f--, h++
                        }
                    if (0 === d && 0 === f) break
                }
                for (h = 0; h < g.length; h++) g[h] = 0;
                return {
                    key: k,
                    iv: l
                }
            }
            var e = a("create-hash/md5");
            b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "create-hash/md5": 58
    }],
    90: [function(a, b, c) {
        function d(a) {
            var b, c, d, e, f, g = a[0],
                h = a[1],
                i = a[2];
            if (0 === h) return f = i, [f, f, f];
            c = .5 > i ? i * (1 + h) : i + h - i * h, b = 2 * i - c, e = [0, 0, 0];
            for (var j = 0; 3 > j; j++) d = g + 1 / 3 * -(j - 1), 0 > d && d++, d > 1 && d--, f = 1 > 6 * d ? b + 6 * (c - b) * d : 1 > 2 * d ? c : 2 > 3 * d ? b + (c - b) * (2 / 3 - d) * 6 : b, e[j] = f;
            return e
        }
        b.exports = d
    }, {}],
    91: [function(a, b, c) {
        function d(a) {
            var b, c, d, e = a[0],
                f = a[1],
                g = a[2],
                h = Math.min(e, f, g),
                i = Math.max(e, f, g),
                j = i - h;
            return i === h ? b = 0 : e === i ? b = (f - g) / j : f === i ? b = 2 + (g - e) / j : g === i && (b = 4 + (e - f) / j), b = Math.min(60 * b, 360), 0 > b && (b += 360), d = (h + i) / 2, c = i === h ? 0 : .5 >= d ? j / (i + h) : j / (2 - i - h), [b / 360, c, d]
        }
        b.exports = d
    }, {}],
    92: [function(a, b, c) {
        (function(a) {
            "undefined" != typeof window ? b.exports = window : "undefined" != typeof a ? b.exports = a : "undefined" != typeof self ? b.exports = self : b.exports = {}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    93: [function(a, b, c) {
        var d = c;
        d.utils = a("./hash/utils"), d.common = a("./hash/common"), d.sha = a("./hash/sha"), d.ripemd = a("./hash/ripemd"), d.hmac = a("./hash/hmac"), d.sha1 = d.sha.sha1, d.sha256 = d.sha.sha256, d.sha224 = d.sha.sha224, d.sha384 = d.sha.sha384, d.sha512 = d.sha.sha512, d.ripemd160 = d.ripemd.ripemd160
    }, {
        "./hash/common": 94,
        "./hash/hmac": 95,
        "./hash/ripemd": 96,
        "./hash/sha": 97,
        "./hash/utils": 98
    }],
    94: [function(a, b, c) {
        function d() {
            this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
        }
        var e = a("../hash"),
            f = e.utils,
            g = f.assert;
        c.BlockHash = d, d.prototype.update = function(a, b) {
            if (a = f.toArray(a, b), this.pending ? this.pending = this.pending.concat(a) : this.pending = a, this.pendingTotal += a.length, this.pending.length >= this._delta8) {
                a = this.pending;
                var c = a.length % this._delta8;
                this.pending = a.slice(a.length - c, a.length), 0 === this.pending.length && (this.pending = null), a = f.join32(a, 0, a.length - c, this.endian);
                for (var d = 0; d < a.length; d += this._delta32) this._update(a, d, d + this._delta32)
            }
            return this
        }, d.prototype.digest = function(a) {
            return this.update(this._pad()), g(null === this.pending), this._digest(a)
        }, d.prototype._pad = function() {
            var a = this.pendingTotal,
                b = this._delta8,
                c = b - (a + this.padLength) % b,
                d = new Array(c + this.padLength);
            d[0] = 128;
            for (var e = 1; c > e; e++) d[e] = 0;
            if (a <<= 3, "big" === this.endian) {
                for (var f = 8; f < this.padLength; f++) d[e++] = 0;
                d[e++] = 0, d[e++] = 0, d[e++] = 0, d[e++] = 0, d[e++] = a >>> 24 & 255, d[e++] = a >>> 16 & 255, d[e++] = a >>> 8 & 255, d[e++] = 255 & a
            } else {
                d[e++] = 255 & a, d[e++] = a >>> 8 & 255, d[e++] = a >>> 16 & 255, d[e++] = a >>> 24 & 255, d[e++] = 0, d[e++] = 0, d[e++] = 0, d[e++] = 0;
                for (var f = 8; f < this.padLength; f++) d[e++] = 0
            }
            return d
        }
    }, {
        "../hash": 93
    }],
    95: [function(a, b, c) {
        function d(a, b, c) {
            return this instanceof d ? (this.Hash = a, this.blockSize = a.blockSize / 8, this.outSize = a.outSize / 8, this.inner = null, this.outer = null, void this._init(f.toArray(b, c))) : new d(a, b, c)
        }
        var e = a("../hash"),
            f = e.utils,
            g = f.assert;
        b.exports = d, d.prototype._init = function(a) {
            a.length > this.blockSize && (a = (new this.Hash).update(a).digest()), g(a.length <= this.blockSize);
            for (var b = a.length; b < this.blockSize; b++) a.push(0);
            for (var b = 0; b < a.length; b++) a[b] ^= 54;
            this.inner = (new this.Hash).update(a);
            for (var b = 0; b < a.length; b++) a[b] ^= 106;
            this.outer = (new this.Hash).update(a)
        }, d.prototype.update = function(a, b) {
            return this.inner.update(a, b), this
        }, d.prototype.digest = function(a) {
            return this.outer.update(this.inner.digest()), this.outer.digest(a)
        }
    }, {
        "../hash": 93
    }],
    96: [function(a, b, c) {
        function d() {
            return this instanceof d ? (n.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void(this.endian = "little")) : new d
        }

        function e(a, b, c, d) {
            return 15 >= a ? b ^ c ^ d : 31 >= a ? b & c | ~b & d : 47 >= a ? (b | ~c) ^ d : 63 >= a ? b & d | c & ~d : b ^ (c | ~d)
        }

        function f(a) {
            return 15 >= a ? 0 : 31 >= a ? 1518500249 : 47 >= a ? 1859775393 : 63 >= a ? 2400959708 : 2840853838
        }

        function g(a) {
            return 15 >= a ? 1352829926 : 31 >= a ? 1548603684 : 47 >= a ? 1836072691 : 63 >= a ? 2053994217 : 0
        }
        var h = a("../hash"),
            i = h.utils,
            j = i.rotl32,
            k = i.sum32,
            l = i.sum32_3,
            m = i.sum32_4,
            n = h.common.BlockHash;
        i.inherits(d, n), c.ripemd160 = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 192, d.padLength = 64, d.prototype._update = function(a, b) {
            for (var c = this.h[0], d = this.h[1], h = this.h[2], i = this.h[3], n = this.h[4], s = c, t = d, u = h, v = i, w = n, x = 0; 80 > x; x++) {
                var y = k(j(m(c, e(x, d, h, i), a[o[x] + b], f(x)), q[x]), n);
                c = n, n = i, i = j(h, 10), h = d, d = y, y = k(j(m(s, e(79 - x, t, u, v), a[p[x] + b], g(x)), r[x]), w), s = w, w = v, v = j(u, 10), u = t, t = y
            }
            y = l(this.h[1], h, v), this.h[1] = l(this.h[2], i, w), this.h[2] = l(this.h[3], n, s), this.h[3] = l(this.h[4], c, t), this.h[4] = l(this.h[0], d, u), this.h[0] = y
        }, d.prototype._digest = function(a) {
            return "hex" === a ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
        };
        var o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            p = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            q = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            r = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    }, {
        "../hash": 93
    }],
    97: [function(a, b, c) {
        function d() {
            return this instanceof d ? (V.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = W, void(this.W = new Array(64))) : new d
        }

        function e() {
            return this instanceof e ? (d.call(this), void(this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])) : new e
        }

        function f() {
            return this instanceof f ? (V.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = X, void(this.W = new Array(160))) : new f
        }

        function g() {
            return this instanceof g ? (f.call(this), void(this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])) : new g
        }

        function h() {
            return this instanceof h ? (V.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void(this.W = new Array(80))) : new h
        }

        function i(a, b, c) {
            return a & b ^ ~a & c
        }

        function j(a, b, c) {
            return a & b ^ a & c ^ b & c
        }

        function k(a, b, c) {
            return a ^ b ^ c
        }

        function l(a) {
            return F(a, 2) ^ F(a, 13) ^ F(a, 22)
        }

        function m(a) {
            return F(a, 6) ^ F(a, 11) ^ F(a, 25)
        }

        function n(a) {
            return F(a, 7) ^ F(a, 18) ^ a >>> 3
        }

        function o(a) {
            return F(a, 17) ^ F(a, 19) ^ a >>> 10
        }

        function p(a, b, c, d) {
            return 0 === a ? i(b, c, d) : 1 === a || 3 === a ? k(b, c, d) : 2 === a ? j(b, c, d) : void 0
        }

        function q(a, b, c, d, e, f) {
            var g = a & c ^ ~a & e;
            return 0 > g && (g += 4294967296), g
        }

        function r(a, b, c, d, e, f) {
            var g = b & d ^ ~b & f;
            return 0 > g && (g += 4294967296), g
        }

        function s(a, b, c, d, e, f) {
            var g = a & c ^ a & e ^ c & e;
            return 0 > g && (g += 4294967296), g
        }

        function t(a, b, c, d, e, f) {
            var g = b & d ^ b & f ^ d & f;
            return 0 > g && (g += 4294967296), g
        }

        function u(a, b) {
            var c = K(a, b, 28),
                d = K(b, a, 2),
                e = K(b, a, 7),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }

        function v(a, b) {
            var c = L(a, b, 28),
                d = L(b, a, 2),
                e = L(b, a, 7),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }

        function w(a, b) {
            var c = K(a, b, 14),
                d = K(a, b, 18),
                e = K(b, a, 9),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }

        function x(a, b) {
            var c = L(a, b, 14),
                d = L(a, b, 18),
                e = L(b, a, 9),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }

        function y(a, b) {
            var c = K(a, b, 1),
                d = K(a, b, 8),
                e = M(a, b, 7),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }

        function z(a, b) {
            var c = L(a, b, 1),
                d = L(a, b, 8),
                e = N(a, b, 7),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }

        function A(a, b) {
            var c = K(a, b, 19),
                d = K(b, a, 29),
                e = M(a, b, 6),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }

        function B(a, b) {
            var c = L(a, b, 19),
                d = L(b, a, 29),
                e = N(a, b, 6),
                f = c ^ d ^ e;
            return 0 > f && (f += 4294967296), f
        }
        var C = a("../hash"),
            D = C.utils,
            E = D.assert,
            F = D.rotr32,
            G = D.rotl32,
            H = D.sum32,
            I = D.sum32_4,
            J = D.sum32_5,
            K = D.rotr64_hi,
            L = D.rotr64_lo,
            M = D.shr64_hi,
            N = D.shr64_lo,
            O = D.sum64,
            P = D.sum64_hi,
            Q = D.sum64_lo,
            R = D.sum64_4_hi,
            S = D.sum64_4_lo,
            T = D.sum64_5_hi,
            U = D.sum64_5_lo,
            V = C.common.BlockHash,
            W = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            X = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            Y = [1518500249, 1859775393, 2400959708, 3395469782];
        D.inherits(d, V), c.sha256 = d, d.blockSize = 512, d.outSize = 256, d.hmacStrength = 192, d.padLength = 64, d.prototype._update = function(a, b) {
            for (var c = this.W, d = 0; 16 > d; d++) c[d] = a[b + d];
            for (; d < c.length; d++) c[d] = I(o(c[d - 2]), c[d - 7], n(c[d - 15]), c[d - 16]);
            var e = this.h[0],
                f = this.h[1],
                g = this.h[2],
                h = this.h[3],
                k = this.h[4],
                p = this.h[5],
                q = this.h[6],
                r = this.h[7];
            E(this.k.length === c.length);
            for (var d = 0; d < c.length; d++) {
                var s = J(r, m(k), i(k, p, q), this.k[d], c[d]),
                    t = H(l(e), j(e, f, g));
                r = q, q = p, p = k, k = H(h, s), h = g, g = f, f = e, e = H(s, t)
            }
            this.h[0] = H(this.h[0], e), this.h[1] = H(this.h[1], f), this.h[2] = H(this.h[2], g), this.h[3] = H(this.h[3], h), this.h[4] = H(this.h[4], k), this.h[5] = H(this.h[5], p), this.h[6] = H(this.h[6], q), this.h[7] = H(this.h[7], r)
        }, d.prototype._digest = function(a) {
            return "hex" === a ? D.toHex32(this.h, "big") : D.split32(this.h, "big")
        }, D.inherits(e, d), c.sha224 = e, e.blockSize = 512, e.outSize = 224, e.hmacStrength = 192, e.padLength = 64, e.prototype._digest = function(a) {
            return "hex" === a ? D.toHex32(this.h.slice(0, 7), "big") : D.split32(this.h.slice(0, 7), "big")
        }, D.inherits(f, V), c.sha512 = f, f.blockSize = 1024, f.outSize = 512, f.hmacStrength = 192, f.padLength = 128, f.prototype._prepareBlock = function(a, b) {
            for (var c = this.W, d = 0; 32 > d; d++) c[d] = a[b + d];
            for (; d < c.length; d += 2) {
                var e = A(c[d - 4], c[d - 3]),
                    f = B(c[d - 4], c[d - 3]),
                    g = c[d - 14],
                    h = c[d - 13],
                    i = y(c[d - 30], c[d - 29]),
                    j = z(c[d - 30], c[d - 29]),
                    k = c[d - 32],
                    l = c[d - 31];
                c[d] = R(e, f, g, h, i, j, k, l), c[d + 1] = S(e, f, g, h, i, j, k, l)
            }
        }, f.prototype._update = function(a, b) {
            this._prepareBlock(a, b);
            var c = this.W,
                d = this.h[0],
                e = this.h[1],
                f = this.h[2],
                g = this.h[3],
                h = this.h[4],
                i = this.h[5],
                j = this.h[6],
                k = this.h[7],
                l = this.h[8],
                m = this.h[9],
                n = this.h[10],
                o = this.h[11],
                p = this.h[12],
                y = this.h[13],
                z = this.h[14],
                A = this.h[15];
            E(this.k.length === c.length);
            for (var B = 0; B < c.length; B += 2) {
                var C = z,
                    D = A,
                    F = w(l, m),
                    G = x(l, m),
                    H = q(l, m, n, o, p, y),
                    I = r(l, m, n, o, p, y),
                    J = this.k[B],
                    K = this.k[B + 1],
                    L = c[B],
                    M = c[B + 1],
                    N = T(C, D, F, G, H, I, J, K, L, M),
                    R = U(C, D, F, G, H, I, J, K, L, M),
                    C = u(d, e),
                    D = v(d, e),
                    F = s(d, e, f, g, h, i),
                    G = t(d, e, f, g, h, i),
                    S = P(C, D, F, G),
                    V = Q(C, D, F, G);
                z = p, A = y, p = n, y = o, n = l, o = m, l = P(j, k, N, R), m = Q(k, k, N, R), j = h, k = i, h = f, i = g, f = d, g = e, d = P(N, R, S, V), e = Q(N, R, S, V)
            }
            O(this.h, 0, d, e), O(this.h, 2, f, g), O(this.h, 4, h, i), O(this.h, 6, j, k), O(this.h, 8, l, m), O(this.h, 10, n, o), O(this.h, 12, p, y), O(this.h, 14, z, A)
        }, f.prototype._digest = function(a) {
            return "hex" === a ? D.toHex32(this.h, "big") : D.split32(this.h, "big")
        }, D.inherits(g, f), c.sha384 = g, g.blockSize = 1024, g.outSize = 384, g.hmacStrength = 192, g.padLength = 128, g.prototype._digest = function(a) {
            return "hex" === a ? D.toHex32(this.h.slice(0, 12), "big") : D.split32(this.h.slice(0, 12), "big")
        }, D.inherits(h, V), c.sha1 = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 80, h.padLength = 64, h.prototype._update = function(a, b) {
            for (var c = this.W, d = 0; 16 > d; d++) c[d] = a[b + d];
            for (; d < c.length; d++) c[d] = G(c[d - 3] ^ c[d - 8] ^ c[d - 14] ^ c[d - 16], 1);
            for (var e = this.h[0], f = this.h[1], g = this.h[2], h = this.h[3], i = this.h[4], d = 0; d < c.length; d++) {
                var j = ~~(d / 20),
                    k = J(G(e, 5), p(j, f, g, h), i, c[d], Y[j]);
                i = h, h = g, g = G(f, 30), f = e, e = k
            }
            this.h[0] = H(this.h[0], e), this.h[1] = H(this.h[1], f), this.h[2] = H(this.h[2], g), this.h[3] = H(this.h[3], h), this.h[4] = H(this.h[4], i)
        }, h.prototype._digest = function(a) {
            return "hex" === a ? D.toHex32(this.h, "big") : D.split32(this.h, "big")
        }
    }, {
        "../hash": 93
    }],
    98: [function(a, b, c) {
        function d(a, b) {
            if (Array.isArray(a)) return a.slice();
            if (!a) return [];
            var c = [];
            if ("string" == typeof a)
                if (b) {
                    if ("hex" === b) {
                        a = a.replace(/[^a-z0-9]+/gi, ""), a.length % 2 !== 0 && (a = "0" + a);
                        for (var d = 0; d < a.length; d += 2) c.push(parseInt(a[d] + a[d + 1], 16))
                    }
                } else
                    for (var d = 0; d < a.length; d++) {
                        var e = a.charCodeAt(d),
                            f = e >> 8,
                            g = 255 & e;
                        f ? c.push(f, g) : c.push(g)
                    } else
                        for (var d = 0; d < a.length; d++) c[d] = 0 | a[d];
            return c
        }

        function e(a) {
            for (var b = "", c = 0; c < a.length; c++) b += h(a[c].toString(16));
            return b
        }

        function f(a) {
            var b = a >>> 24 | a >>> 8 & 65280 | a << 8 & 16711680 | (255 & a) << 24;
            return b >>> 0
        }

        function g(a, b) {
            for (var c = "", d = 0; d < a.length; d++) {
                var e = a[d];
                "little" === b && (e = f(e)), c += i(e.toString(16))
            }
            return c
        }

        function h(a) {
            return 1 === a.length ? "0" + a : a
        }

        function i(a) {
            return 7 === a.length ? "0" + a : 6 === a.length ? "00" + a : 5 === a.length ? "000" + a : 4 === a.length ? "0000" + a : 3 === a.length ? "00000" + a : 2 === a.length ? "000000" + a : 1 === a.length ? "0000000" + a : a
        }

        function j(a, b, c, d) {
            var e = c - b;
            r(e % 4 === 0);
            for (var f = new Array(e / 4), g = 0, h = b; g < f.length; g++, h += 4) {
                var i;
                i = "big" === d ? a[h] << 24 | a[h + 1] << 16 | a[h + 2] << 8 | a[h + 3] : a[h + 3] << 24 | a[h + 2] << 16 | a[h + 1] << 8 | a[h], f[g] = i >>> 0
            }
            return f
        }

        function k(a, b) {
            for (var c = new Array(4 * a.length), d = 0, e = 0; d < a.length; d++, e += 4) {
                var f = a[d];
                "big" === b ? (c[e] = f >>> 24, c[e + 1] = f >>> 16 & 255, c[e + 2] = f >>> 8 & 255, c[e + 3] = 255 & f) : (c[e + 3] = f >>> 24, c[e + 2] = f >>> 16 & 255, c[e + 1] = f >>> 8 & 255, c[e] = 255 & f)
            }
            return c
        }

        function l(a, b) {
            return a >>> b | a << 32 - b
        }

        function m(a, b) {
            return a << b | a >>> 32 - b
        }

        function n(a, b) {
            return a + b >>> 0
        }

        function o(a, b, c) {
            return a + b + c >>> 0
        }

        function p(a, b, c, d) {
            return a + b + c + d >>> 0
        }

        function q(a, b, c, d, e) {
            return a + b + c + d + e >>> 0
        }

        function r(a, b) {
            if (!a) throw new Error(b || "Assertion failed")
        }

        function s(a, b, c, d) {
            var e = a[b],
                f = a[b + 1],
                g = d + f >>> 0,
                h = (d > g ? 1 : 0) + c + e;
            a[b] = h >>> 0, a[b + 1] = g
        }

        function t(a, b, c, d) {
            var e = b + d >>> 0,
                f = (b > e ? 1 : 0) + a + c;
            return f >>> 0
        }

        function u(a, b, c, d) {
            var e = b + d;
            return e >>> 0
        }

        function v(a, b, c, d, e, f, g, h) {
            var i = 0,
                j = b;
            j = j + d >>> 0, i += b > j ? 1 : 0, j = j + f >>> 0, i += f > j ? 1 : 0, j = j + h >>> 0, i += h > j ? 1 : 0;
            var k = a + c + e + g + i;
            return k >>> 0
        }

        function w(a, b, c, d, e, f, g, h) {
            var i = b + d + f + h;
            return i >>> 0
        }

        function x(a, b, c, d, e, f, g, h, i, j) {
            var k = 0,
                l = b;
            l = l + d >>> 0, k += b > l ? 1 : 0, l = l + f >>> 0, k += f > l ? 1 : 0, l = l + h >>> 0, k += h > l ? 1 : 0, l = l + j >>> 0, k += j > l ? 1 : 0;
            var m = a + c + e + g + i + k;
            return m >>> 0
        }

        function y(a, b, c, d, e, f, g, h, i, j) {
            var k = b + d + f + h + j;
            return k >>> 0
        }

        function z(a, b, c) {
            var d = b << 32 - c | a >>> c;
            return d >>> 0
        }

        function A(a, b, c) {
            var d = a << 32 - c | b >>> c;
            return d >>> 0
        }

        function B(a, b, c) {
            return a >>> c
        }

        function C(a, b, c) {
            var d = a << 32 - c | b >>> c;
            return d >>> 0
        }
        var D = c,
            E = a("inherits");
        D.toArray = d, D.toHex = e, D.htonl = f, D.toHex32 = g, D.zero2 = h, D.zero8 = i, D.join32 = j, D.split32 = k, D.rotr32 = l, D.rotl32 = m, D.sum32 = n, D.sum32_3 = o, D.sum32_4 = p, D.sum32_5 = q, D.assert = r, D.inherits = E, c.sum64 = s, c.sum64_hi = t, c.sum64_lo = u, c.sum64_4_hi = v, c.sum64_4_lo = w, c.sum64_5_hi = x, c.sum64_5_lo = y, c.rotr64_hi = z, c.rotr64_lo = A, c.shr64_hi = B, c.shr64_lo = C
    }, {
        inherits: 101
    }],
    99: [function(a, b, c) {
        c.read = function(a, b, c, d, e) {
            var f, g, h = 8 * e - d - 1,
                i = (1 << h) - 1,
                j = i >> 1,
                k = -7,
                l = c ? e - 1 : 0,
                m = c ? -1 : 1,
                n = a[b + l];
            for (l += m, f = n & (1 << -k) - 1, n >>= -k, k += h; k > 0; f = 256 * f + a[b + l], l += m, k -= 8);
            for (g = f & (1 << -k) - 1, f >>= -k, k += d; k > 0; g = 256 * g + a[b + l], l += m, k -= 8);
            if (0 === f) f = 1 - j;
            else {
                if (f === i) return g ? NaN : (n ? -1 : 1) * (1 / 0);
                g += Math.pow(2, d), f -= j
            }
            return (n ? -1 : 1) * g * Math.pow(2, f - d)
        }, c.write = function(a, b, c, d, e, f) {
            var g, h, i, j = 8 * f - e - 1,
                k = (1 << j) - 1,
                l = k >> 1,
                m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                n = d ? 0 : f - 1,
                o = d ? 1 : -1,
                p = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
            for (b = Math.abs(b), isNaN(b) || b === 1 / 0 ? (h = isNaN(b) ? 1 : 0, g = k) : (g = Math.floor(Math.log(b) / Math.LN2), b * (i = Math.pow(2, -g)) < 1 && (g--, i *= 2), b += g + l >= 1 ? m / i : m * Math.pow(2, 1 - l), b * i >= 2 && (g++, i /= 2), g + l >= k ? (h = 0, g = k) : g + l >= 1 ? (h = (b * i - 1) * Math.pow(2, e), g += l) : (h = b * Math.pow(2, l - 1) * Math.pow(2, e), g = 0)); e >= 8; a[c + n] = 255 & h, n += o, h /= 256, e -= 8);
            for (g = g << e | h, j += e; j > 0; a[c + n] = 255 & g, n += o, g /= 256, j -= 8);
            a[c + n - o] |= 128 * p
        }
    }, {}],
    100: [function(a, b, c) {
        var d = [].indexOf;
        b.exports = function(a, b) {
            if (d) return a.indexOf(b);
            for (var c = 0; c < a.length; ++c)
                if (a[c] === b) return c;
            return -1
        }
    }, {}],
    101: [function(a, b, c) {
        "function" == typeof Object.create ? b.exports = function(a, b) {
            a.super_ = b, a.prototype = Object.create(b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : b.exports = function(a, b) {
            a.super_ = b;
            var c = function() {};
            c.prototype = b.prototype, a.prototype = new c, a.prototype.constructor = a
        }
    }, {}],
    102: [function(a, b, c) {
        function d(a, b) {
            if (b >= 1) return a[a.length - 1];
            if (1 == a.length) return a[0];
            var c = a.length - 1,
                d = b * c,
                f = Math.floor(d),
                g = d - f;
            return e(a[f], a[f + 1], g)
        }
        var e = a("lerp-array");
        b.exports = d
    }, {
        "lerp-array": 108
    }],
    103: [function(a, b, c) {
        b.exports = !0
    }, {}],
    104: [function(a, b, c) {
        b.exports = function(a) {
            return !(null == a || !(a._isBuffer || a.constructor && "function" == typeof a.constructor.isBuffer && a.constructor.isBuffer(a)))
        }
    }, {}],
    105: [function(a, b, c) {
        "use strict";
        var d = a("global/window").navigator;
        b.exports = function(a) {
            return /iPad|iPhone|iPod/.test(a)
        }(d ? d.userAgent : "")
    }, {
        "global/window": 92
    }],
    106: [function(a, b, c) {
        var d = null;
        try {
            d = a("plask")
        } catch (e) {}
        b.exports = d && d.SkCanvas ? !0 : !1
    }, {
        plask: 49
    }],
    107: [function(a, b, c) {
        b.exports = Array.isArray || function(a) {
            return "[object Array]" == Object.prototype.toString.call(a)
        }
    }, {}],
    108: [function(a, b, c) {
        var d = a("lerp");
        b.exports = function(a, b, c, e) {
            if ("number" == typeof a && "number" == typeof b) return d(a, b, c);
            var f = Math.min(a.length, b.length);
            e = e || new Array(f);
            for (var g = 0; f > g; g++) e[g] = d(a[g], b[g], c);
            return e
        }
    }, {
        lerp: 109
    }],
    109: [function(a, b, c) {
        function d(a, b, c) {
            return a * (1 - c) + b * c
        }
        b.exports = d
    }, {}],
    110: [function(a, b, c) {
        function d(a) {
            this.rand = a || new f.Rand
        }
        var e = a("bn.js"),
            f = a("brorand");
        b.exports = d, d.create = function(a) {
            return new d(a)
        }, d.prototype._rand = function(a) {
            var b = a.bitLength(),
                c = this.rand.generate(Math.ceil(b / 8));
            c[0] |= 3;
            var d = 7 & b;
            return 0 !== d && (c[c.length - 1] >>= 7 - d), new e(c)
        }, d.prototype.test = function(a, b, c) {
            var d = a.bitLength(),
                f = e.mont(a),
                g = new e(1).toRed(f);
            b || (b = Math.max(1, d / 48 | 0));
            for (var h = a.subn(1), i = h.subn(1), j = 0; !h.testn(j); j++);
            for (var k = a.shrn(j), l = h.toRed(f), m = !0; b > 0; b--) {
                var n = this._rand(i);
                c && c(n);
                var o = n.toRed(f).redPow(k);
                if (0 !== o.cmp(g) && 0 !== o.cmp(l)) {
                    for (var p = 1; j > p; p++) {
                        if (o = o.redSqr(), 0 === o.cmp(g)) return !1;
                        if (0 === o.cmp(l)) break
                    }
                    if (p === j) return !1
                }
            }
            return m
        }, d.prototype.getDivisor = function(a, b) {
            var c = a.bitLength(),
                d = e.mont(a),
                f = new e(1).toRed(d);
            b || (b = Math.max(1, c / 48 | 0));
            for (var g = a.subn(1), h = g.subn(1), i = 0; !g.testn(i); i++);
            for (var j = a.shrn(i), k = g.toRed(d); b > 0; b--) {
                var l = this._rand(h),
                    m = a.gcd(l);
                if (0 !== m.cmpn(1)) return m;
                var n = l.toRed(d).redPow(j);
                if (0 !== n.cmp(f) && 0 !== n.cmp(k)) {
                    for (var o = 1; i > o; o++) {
                        if (n = n.redSqr(), 0 === n.cmp(f)) return n.fromRed().subn(1).gcd(a);
                        if (0 === n.cmp(k)) break
                    }
                    if (o === i) return n = n.redSqr(), n.fromRed().subn(1).gcd(a)
                }
            }
            return !1
        }
    }, {
        "bn.js": 22,
        brorand: 23
    }],
    111: [function(a, b, c) {
        function d(a, b) {
            if (!a) throw new Error(b || "Assertion failed")
        }
        b.exports = d, d.equal = function(a, b, c) {
            if (a != b) throw new Error(c || "Assertion failed: " + a + " != " + b)
        }
    }, {}],
    112: [function(a, b, c) {
        function d(a) {
            return a = Math.round(a), 0 > a ? 0 : a > 255 ? 255 : a
        }

        function e(a) {
            return 0 > a ? 0 : a > 1 ? 1 : a
        }

        function f(a) {
            return d("%" === a[a.length - 1] ? parseFloat(a) / 100 * 255 : parseInt(a))
        }

        function g(a) {
            return e("%" === a[a.length - 1] ? parseFloat(a) / 100 : parseFloat(a))
        }

        function h(a, b, c) {
            return 0 > c ? c += 1 : c > 1 && (c -= 1), 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
        }

        function i(a) {
            var b = a.replace(/ /g, "").toLowerCase();
            if (b in j) return j[b].slice();
            if ("#" === b[0]) {
                if (4 === b.length) {
                    var c = parseInt(b.substr(1), 16);
                    return c >= 0 && 4095 >= c ? [(3840 & c) >> 4 | (3840 & c) >> 8, 240 & c | (240 & c) >> 4, 15 & c | (15 & c) << 4, 1] : null
                }
                if (7 === b.length) {
                    var c = parseInt(b.substr(1), 16);
                    return c >= 0 && 16777215 >= c ? [(16711680 & c) >> 16, (65280 & c) >> 8, 255 & c, 1] : null
                }
                return null
            }
            var e = b.indexOf("("),
                i = b.indexOf(")");
            if (-1 !== e && i + 1 === b.length) {
                var k = b.substr(0, e),
                    l = b.substr(e + 1, i - (e + 1)).split(","),
                    m = 1;
                switch (k) {
                    case "rgba":
                        if (4 !== l.length) return null;
                        m = g(l.pop());
                    case "rgb":
                        return 3 !== l.length ? null : [f(l[0]), f(l[1]), f(l[2]), m];
                    case "hsla":
                        if (4 !== l.length) return null;
                        m = g(l.pop());
                    case "hsl":
                        if (3 !== l.length) return null;
                        var n = (parseFloat(l[0]) % 360 + 360) % 360 / 360,
                            o = g(l[1]),
                            p = g(l[2]),
                            q = .5 >= p ? p * (o + 1) : p + o - p * o,
                            r = 2 * p - q;
                        return [d(255 * h(r, q, n + 1 / 3)), d(255 * h(r, q, n)), d(255 * h(r, q, n - 1 / 3)), m];
                    default:
                        return null
                }
            }
            return null
        }
        var j = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        try {
            c.parseCSSColor = i
        } catch (k) {}
    }, {}],
    113: [function(c, d, e) {
        function f(a) {
            return 1 === a[3] ? "#" + (1 << 24 | a[0] << 16 | a[1] << 8 | a[2]).toString(16).substr(1) : "rgba(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
        }

        function g(c) {
            var d = new h.SkPaint,
                e = new h.SkPaint;
            e.setAntiAlias(!0), e.setStrokeWidth(1), e.setStrokeMiter(10);
            var g = [{
                    paint: e,
                    lineWidth: 1,
                    lineCap: "butt",
                    lineJoin: "miter",
                    miterLimit: 10,
                    lineDash: [],
                    lineDashOffset: 0,
                    strokeColor: [0, 0, 0, 1],
                    strokeStyle: f([0, 0, 0, 1]),
                    fillColor: [0, 0, 0, 1],
                    fillStyle: f([0, 0, 0, 1])
                }],
                j = g[0],
                k = new h.SkPath;
            return {
                canvas: c,
                save: function() {
                    e = new h.SkPaint(e), j = {
                        paint: e,
                        lineWidth: j.lineWidth,
                        lineCap: j.lineCap,
                        lineJoin: j.lineJoin,
                        miterLimit: j.miterLimit,
                        lineDash: j.lineDash,
                        lineDashOffset: j.lineDashOffset,
                        strokeColor: j.strokeColor,
                        strokeStyle: j.strokeStyle,
                        fillColor: j.fillColor,
                        fillStyle: j.fillStyle
                    }, g.push(j), c.save()
                },
                restore: function() {
                    g.length > 1 && (g.pop(), j = g[g.length - 1], e = j.paint, c.restore())
                },
                get strokeStyle() {
                    return j.strokeStyle
                },
                set strokeStyle(a) {
                    var b = i(a);
                    null !== b && (j.strokeColor = b, j.strokeStyle = f(b))
                },
                get fillStyle() {
                    return j.fillStyle
                },
                set fillStyle(a) {
                    var b = i(a);
                    null !== b && (j.fillColor = b, j.fillStyle = f(b))
                },
                get lineWidth() {
                    return j.lineWidth
                },
                set lineWidth(a) {
                    "string" == typeof a && (a = parseFloat(a)), a > 0 && isFinite(a) && (j.lineWidth = a, e.setStrokeWidth(a))
                },
                get lineCap() {
                    return j.lineCap
                },
                set lineCap(a) {
                    var b = null;
                    switch (a) {
                        case "butt":
                            b = e.kButtCap;
                            break;
                        case "round":
                            b = e.kRoundCap;
                            break;
                        case "square":
                            b = e.kSquareCap;
                            break;
                        default:
                            return
                    }
                    j.lineCap = a, e.setStrokeCap(b)
                },
                get lineJoin() {
                    return j.lineJoin
                },
                set lineJoin(a) {
                    var b = null;
                    switch (a) {
                        case "round":
                            b = e.kRoundJoin;
                            break;
                        case "bevel":
                            b = e.kBevelJoin;
                            break;
                        case "miter":
                            b = e.kMiterJoin;
                            break;
                        default:
                            return
                    }
                    j.lineJoin = a, e.setStrokeJoin(b)
                },
                get miterLimit() {
                    return j.miterLimit
                },
                set miterLimit(a) {
                    a > 0 && isFinite(a) && (j.miterLimit = a, e.setStrokeMiter(a))
                },
                setLineDash: function(a) {
                    if (0 === arguments.length) throw new TypeError("Not enough arguments");
                    Array.isArray(a) || (a = []);
                    for (var b = 0, c = a.length; c > b; ++b)
                        if (a[b] < 0 || !isFinite(a[b])) return;
                    1 & a.length && (a = a.concat(a)), j.lineDash = a, 0 === a.length ? e.clearPathEffect() : e.setDashPathEffect(j.lineDash, j.lineDashOffset)
                },
                getLineDash: function() {
                    return j.lineDash.slice()
                },
                get lineDashOffset() {
                    return j.lineDashOffset
                },
                set lineDashOffset(a) {
                    "string" == typeof a && (a = parseFloat(a)), isFinite(a) && (j.lineDashOffset = a, 0 === j.lineDash.length ? e.clearPathEffect() : e.setDashPathEffect(j.lineDash, j.lineDashOffset))
                },
                setLineWidth: function(a) {
                    this.lineWidth = a
                },
                setLineCap: function(a) {
                    this.lineCap = a
                },
                setLineJoin: function(a) {
                    this.lineJoin = a
                },
                setMiterLimit: function(a) {
                    this.miterLimit = a
                },
                clearRect: function(a, b, e, f) {
                    d.setXfermodeMode(d.kClearMode), c.drawRect(d, a, b, a + e, b + f)
                },
                fillRect: function(a, b, d, f) {
                    this.save(), e.setFill();
                    var g = j.fillColor;
                    e.setColor(g[0], g[1], g[2], 255 * g[3] >> 0), c.drawRect(e, a, b, a + d, b + f), this.restore()
                },
                strokeRect: function(a, b, d, f) {
                    this.save(), e.setStroke();
                    var g = j.strokeColor;
                    e.setColor(g[0], g[1], g[2], 255 * g[3] >> 0), c.drawRect(e, a, b, a + d, b + f), this.restore()
                },
                beginPath: function() {
                    k.rewind()
                },
                closePath: function() {
                    k.close()
                },
                moveTo: function(a, b) {
                    k.moveTo(a, b)
                },
                lineTo: function(a, b) {
                    k.lineTo(a, b)
                },
                rect: function(a, b, c, d) {
                    k.addRect(a, b, a + c, b + d)
                },
                arcTo: function(a, b, c, d, e) {
                    k.arct(a, b, c, d, e)
                },
                arc: function(a, b, c, d, e, f) {
                    var g = e - d,
                        i = 180 * d / h.kPI,
                        j = 180 * g / h.kPI;
                    j >= 360 || -360 >= j ? (k.arcTo(a - c, b - c, a + c, b + c, i, 0), k.addOval(a - c, b - c, a + c, b + c, f), k.arcTo(a - c, b - c, a + c, b + c, i + j, 0, !0)) : (f && j > 0 && (j -= 360), !f && 0 > j && (j += 360), k.arcTo(a - c, b - c, a + c, b + c, i, j))
                },
                quadraticCurveTo: function(a, b, c, d) {
                    k.quadTo(a, b, c, d)
                },
                bezierCurveTo: function(a, b, c, d, e, f) {
                    k.cubicTo(a, b, c, d, e, f)
                },
                fill: function() {
                    this.save(), e.setFill();
                    var a = j.fillColor;
                    e.setColor(a[0], a[1], a[2], 255 * a[3] >> 0), c.drawPath(e, k), this.restore()
                },
                stroke: function() {
                    this.save(), e.setStroke();
                    var a = j.strokeColor;
                    e.setColor(a[0], a[1], a[2], 255 * a[3] >> 0), c.drawPath(e, k), this.restore()
                },
                clip: function() {
                    c.clipPath(k)
                },
                scale: function(a, b) {
                    c.scale(a, b)
                },
                rotate: function(a) {
                    c.rotate(180 * a / h.kPI)
                },
                translate: function(a, b) {
                    c.translate(a, b)
                },
                transform: function(a, b, d, e, f, g) {
                    c.concatMatrix(a, d, f, b, e, g, 0, 0, 1)
                },
                setTransform: function(a, b, d, e, f, g) {
                    c.setMatrix(a, d, f, b, e, g, 0, 0, 1)
                },
                createImageData: function(a, b) {
                    1 === arguments.length && (b = a.height, a = a.width);
                    var c = new Uint8Array(a * b * 4);
                    return {
                        width: a,
                        height: b,
                        data: c
                    }
                },
                getImageData: function(b, d, e, f) {
                    for (var g = c.width, h = (c.height, this.createImageData(e, f)), i = h.data, j = 0; f > j; ++j)
                        for (var k = j * e << 2, l = (d + j) * g + b << 2, m = 0; e > m; ++m) {
                            var n = c[l++],
                                o = c[l++],
                                p = c[l++];
                            a = c[l++];
                            var q = 0 === a ? 0 : 255 / a;
                            i[k++] = p * q >> 0, i[k++] = o * q >> 0, i[k++] = n * q >> 0, i[k++] = a
                        }
                    return h
                },
                putImageData: function(d, e, f) {
                    for (var g = c.width, h = (c.height, d.width), i = d.height, j = d.data, k = 0; i > k; ++k)
                        for (var l = k * h << 2, m = (f + k) * g + e << 2, n = 0; h > n; ++n) {
                            var o = j[l++],
                                p = j[l++];
                            b = j[l++], a = j[l++];
                            var q = a / 255;
                            c[m++] = b * q >> 0, c[m++] = p * q >> 0, c[m++] = o * q >> 0, c[m++] = a
                        }
                }
            }
        }
        var h = c("plask"),
            i = c("./csscolorparser.js").parseCSSColor;
        e.CanvasContext = g
    }, {
        "./csscolorparser.js": 112,
        plask: 49
    }],
    114: [function(a, b, c) {
        b.exports = {
            "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
            "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
            "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
            "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
            "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
            "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
            "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
            "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
            "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
            "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
            "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
            "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
        }
    }, {}],
    115: [function(a, b, c) {
        var d = a("asn1.js"),
            e = d.define("RSAPrivateKey", function() {
                this.seq().obj(this.key("version")["int"](), this.key("modulus")["int"](), this.key("publicExponent")["int"](), this.key("privateExponent")["int"](), this.key("prime1")["int"](), this.key("prime2")["int"](), this.key("exponent1")["int"](), this.key("exponent2")["int"](), this.key("coefficient")["int"]())
            });
        c.RSAPrivateKey = e;
        var f = d.define("RSAPublicKey", function() {
            this.seq().obj(this.key("modulus")["int"](), this.key("publicExponent")["int"]())
        });
        c.RSAPublicKey = f;
        var g = d.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(h), this.key("subjectPublicKey").bitstr())
        });
        c.PublicKey = g;
        var h = d.define("AlgorithmIdentifier", function() {
                this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p")["int"](), this.key("q")["int"](), this.key("g")["int"]()).optional())
            }),
            i = d.define("PrivateKeyInfo", function() {
                this.seq().obj(this.key("version")["int"](), this.key("algorithm").use(h), this.key("subjectPrivateKey").octstr())
            });
        c.PrivateKey = i;
        var j = d.define("EncryptedPrivateKeyInfo", function() {
            this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters")["int"]())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
        });
        c.EncryptedPrivateKey = j;
        var k = d.define("DSAPrivateKey", function() {
            this.seq().obj(this.key("version")["int"](), this.key("p")["int"](), this.key("q")["int"](), this.key("g")["int"](), this.key("pub_key")["int"](), this.key("priv_key")["int"]())
        });
        c.DSAPrivateKey = k, c.DSAparam = d.define("DSAparam", function() {
            this["int"]()
        });
        var l = d.define("ECPrivateKey", function() {
            this.seq().obj(this.key("version")["int"](), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(m), this.key("publicKey").optional().explicit(1).bitstr())
        });
        c.ECPrivateKey = l;
        var m = d.define("ECParameters", function() {
            this.choice({
                namedCurve: this.objid()
            })
        });
        c.signature = d.define("signature", function() {
            this.seq().obj(this.key("r")["int"](), this.key("s")["int"]())
        })
    }, {
        "asn1.js": 7
    }],
    116: [function(a, b, c) {
        (function(c) {
            var d = /Proc-Type: 4,ENCRYPTED\r?\nDEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\r?\n\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n/m,
                e = /^-----BEGIN (.*) KEY-----\r?\n/m,
                f = /^-----BEGIN (.*) KEY-----\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n-----END \1 KEY-----$/m,
                g = a("evp_bytestokey"),
                h = a("browserify-aes");
            b.exports = function(a, b) {
                var i, j = a.toString(),
                    k = j.match(d);
                if (k) {
                    var l = "aes" + k[1],
                        m = new c(k[2], "hex"),
                        n = new c(k[3].replace(/\r?\n/g, ""), "base64"),
                        o = g(b, m.slice(0, 8), parseInt(k[1], 10)).key,
                        p = [],
                        q = h.createDecipheriv(l, o, m);
                    p.push(q.update(n)), p.push(q["final"]()), i = c.concat(p)
                } else {
                    var r = j.match(f);
                    i = new c(r[2].replace(/\r?\n/g, ""), "base64")
                }
                var s = j.match(e)[1] + " KEY";
                return {
                    tag: s,
                    data: i
                }
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "browserify-aes": 27,
        buffer: 51,
        evp_bytestokey: 89
    }],
    117: [function(a, b, c) {
        (function(c) {
            function d(a) {
                var b;
                "object" != typeof a || c.isBuffer(a) || (b = a.passphrase, a = a.key), "string" == typeof a && (a = new c(a));
                var d, g, i = h(a, b),
                    j = i.tag,
                    k = i.data;
                switch (j) {
                    case "PUBLIC KEY":
                        switch (g = f.PublicKey.decode(k, "der"), d = g.algorithm.algorithm.join(".")) {
                            case "1.2.840.113549.1.1.1":
                                return f.RSAPublicKey.decode(g.subjectPublicKey.data, "der");
                            case "1.2.840.10045.2.1":
                                return g.subjectPrivateKey = g.subjectPublicKey, {
                                    type: "ec",
                                    data: g
                                };
                            case "1.2.840.10040.4.1":
                                return g.algorithm.params.pub_key = f.DSAparam.decode(g.subjectPublicKey.data, "der"), {
                                    type: "dsa",
                                    data: g.algorithm.params
                                };
                            default:
                                throw new Error("unknown key id " + d)
                        }
                        throw new Error("unknown key type " + j);
                    case "ENCRYPTED PRIVATE KEY":
                        k = f.EncryptedPrivateKey.decode(k, "der"), k = e(k, b);
                    case "PRIVATE KEY":
                        switch (g = f.PrivateKey.decode(k, "der"), d = g.algorithm.algorithm.join(".")) {
                            case "1.2.840.113549.1.1.1":
                                return f.RSAPrivateKey.decode(g.subjectPrivateKey, "der");
                            case "1.2.840.10045.2.1":
                                return {
                                    curve: g.algorithm.curve,
                                    privateKey: f.ECPrivateKey.decode(g.subjectPrivateKey, "der").privateKey
                                };
                            case "1.2.840.10040.4.1":
                                return g.algorithm.params.priv_key = f.DSAparam.decode(g.subjectPrivateKey, "der"), {
                                    type: "dsa",
                                    params: g.algorithm.params
                                };
                            default:
                                throw new Error("unknown key id " + d)
                        }
                        throw new Error("unknown key type " + j);
                    case "RSA PUBLIC KEY":
                        return f.RSAPublicKey.decode(k, "der");
                    case "RSA PRIVATE KEY":
                        return f.RSAPrivateKey.decode(k, "der");
                    case "DSA PRIVATE KEY":
                        return {
                            type: "dsa",
                            params: f.DSAPrivateKey.decode(k, "der")
                        };
                    case "EC PRIVATE KEY":
                        return k = f.ECPrivateKey.decode(k, "der"), {
                            curve: k.parameters.value,
                            privateKey: k.privateKey
                        };
                    default:
                        throw new Error("unknown key type " + j)
                }
            }

            function e(a, b) {
                var d = a.algorithm.decrypt.kde.kdeparams.salt,
                    e = parseInt(a.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                    f = g[a.algorithm.decrypt.cipher.algo.join(".")],
                    h = a.algorithm.decrypt.cipher.iv,
                    k = a.subjectPrivateKey,
                    l = parseInt(f.split("-")[1], 10) / 8,
                    m = j.pbkdf2Sync(b, d, e, l),
                    n = i.createDecipheriv(f, m, h),
                    o = [];
                return o.push(n.update(k)), o.push(n["final"]()), c.concat(o)
            }
            var f = a("./asn1"),
                g = a("./aesid.json"),
                h = a("./fixProc"),
                i = a("browserify-aes"),
                j = a("pbkdf2");
            b.exports = d, d.signature = f.signature
        }).call(this, a("buffer").Buffer)
    }, {
        "./aesid.json": 114,
        "./asn1": 115,
        "./fixProc": 116,
        "browserify-aes": 27,
        buffer: 51,
        pbkdf2: 118
    }],
    118: [function(a, b, c) {
        (function(b) {
            function d(a, b, c, d, f, g) {
                if ("function" == typeof f && (g = f, f = void 0), "function" != typeof g) throw new Error("No callback provided to pbkdf2");
                var h = e(a, b, c, d, f);
                setTimeout(function() {
                    g(void 0, h)
                })
            }

            function e(a, c, d, e, h) {
                if ("number" != typeof d) throw new TypeError("Iterations not a number");
                if (0 > d) throw new TypeError("Bad iterations");
                if ("number" != typeof e) throw new TypeError("Key length not a number");
                if (0 > e || e > g) throw new TypeError("Bad key length");
                h = h || "sha1", b.isBuffer(a) || (a = new b(a, "binary")), b.isBuffer(c) || (c = new b(c, "binary"));
                var i, j = 1,
                    k = new b(e),
                    l = new b(c.length + 4);
                c.copy(l, 0, 0, c.length);
                for (var m, n, o = 1; j >= o; o++) {
                    l.writeUInt32BE(o, c.length);
                    var p = f(h, a).update(l).digest();
                    i || (i = p.length, n = new b(i), j = Math.ceil(e / i), m = e - (j - 1) * i), p.copy(n, 0, 0, i);
                    for (var q = 1; d > q; q++) {
                        p = f(h, a).update(p).digest();
                        for (var r = 0; i > r; r++) n[r] ^= p[r]
                    }
                    var s = (o - 1) * i,
                        t = o === j ? m : i;
                    n.copy(k, s, 0, t)
                }
                return k
            }
            var f = a("create-hmac"),
                g = Math.pow(2, 30) - 1;
            c.pbkdf2 = d, c.pbkdf2Sync = e
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "create-hmac": 59
    }],
    119: [function(a, b, c) {
        (function(a) {
            (function() {
                var c, d, e;
                "undefined" != typeof performance && null !== performance && performance.now ? b.exports = function() {
                    return performance.now()
                } : "undefined" != typeof a && null !== a && a.hrtime ? (b.exports = function() {
                    return (c() - e) / 1e6
                }, d = a.hrtime, c = function() {
                    var a;
                    return a = d(), 1e9 * a[0] + a[1]
                }, e = c()) : Date.now ? (b.exports = function() {
                    return Date.now() - e
                }, e = Date.now()) : (b.exports = function() {
                    return (new Date).getTime() - e
                }, e = (new Date).getTime())
            }).call(this)
        }).call(this, a("_process"))
    }, {
        _process: 191
    }],
    120: [function(a, b, c) {
        function d() {
            this._position = [0, 0, 5], this._target = f.create(), this._up = f.yAxis(), this._aspectRatio = -1, this._fov = 0, this._near = 0, this._far = 0, this._frustumLeft = -1, this._frustumRight = -1, this._frustumBottom = -1, this._frustumTop = -1, this._matrixProjection = e.create(), this._matrixView = e.create(), this._matrixViewInv = e.create(), this._matrixProjectionDirty = !0, this._matrixViewDirty = !0, this._matrixViewInvDirty = !0
        }
        var e = a("pex-math/Mat4"),
            f = (a("pex-math/Vec2"), a("pex-math/Vec3")),
            g = a("pex-math/Vec4"),
            h = "%s not implemented.",
            i = f.yAxis(),
            j = (g.create(), e.create());
        d.prototype.setTarget = function(a) {
            f.set(this._target, a), this._matrixViewDirty = !0
        }, d.prototype.getTarget = function(a) {
            return a = void 0 === a ? f.create() : a, f.set(a, this._target)
        }, d.prototype.setPosition = function(a) {
            f.set(this._position, a), this._matrixViewDirty = !0
        }, d.prototype.getPosition = function(a) {
            return a = void 0 === a ? f.create() : a, f.set(a, this._position)
        }, d.prototype.setUp = function(a) {
            f.set(this._up, a), this._matrixViewDirty = !0
        }, d.prototype.getUp = function(a) {
            return a = void 0 === a ? f.create() : a, f.set(a, this._up)
        }, d.prototype.lookAt = function(a, b, c) {
            c = void 0 === c ? i : c, f.set(this._position, a), f.set(this._target, b), f.set(this._up, c), this._matrixViewDirty = !0
        }, d.prototype.getDistance = function() {
            return f.distance(this._target, this._position)
        }, d.prototype.setNear = function(a) {
            this._near = a, this._matrixProjectionDirty = !0
        }, d.prototype.getNear = function() {
            return this._near
        }, d.prototype.setFar = function(a) {
            this._far = a, this._matrixProjectionDirty = !0
        }, d.prototype.getFar = function() {
            return this._far
        }, d.prototype.getAspectRatio = function() {
            return this._aspectRatio
        }, d.prototype._updateProjectionMatrix = function() {
            throw new Error(h.replace("%s", "updateProjectionMatrix"))
        }, d.prototype._updateViewMatrix = function() {
            this._matrixViewDirty && (e.lookAt(this._matrixView, this._position, this._target, this._up), this._matrixViewDirty = !1, this._matrixViewInvDirty = !0)
        }, d.prototype.getProjectionMatrix = function() {
            return this._updateProjectionMatrix(), this._matrixProjection
        }, d.prototype.getViewMatrix = function() {
            return this._updateViewMatrix(), this._matrixView
        }, d.prototype.getInverseViewMatrix = function(a) {
            return this._updateViewMatrix(), this._matrixViewInvDirty && (e.invert(e.set(this._matrixViewInv, this._matrixView)), this._matrixViewInvDirty = !1), a = void 0 === a ? j : a, e.set(a, this._matrixViewInv)
        }, d.prototype.setFrustumOffset = function(a, b, c, d, e, f) {
            throw new Error(h.replace("%s", "setFrusumOffset"))
        }, d.prototype.getViewRay = function(a, b, c) {
            throw new Error(h.replace("%s", "getViewRay"))
        }, d.prototype.getWorldRay = function(a, b, c) {
            throw new Error(h.replace("%s", "getWorldMatrix"))
        }, d.prototype.getFrustumClippingPlanes = function() {
            throw new Error(h.replace("%s", "getFrustumClippingPlanes"))
        }, b.exports = d
    }, {
        "pex-math/Mat4": 168,
        "pex-math/Vec2": 171,
        "pex-math/Vec3": 172,
        "pex-math/Vec4": 173
    }],
    121: [function(a, b, c) {
        function d(a, b, c) {
            var d, e, f, g, h, i = a[0],
                j = a[1],
                k = a[2],
                l = a[3],
                m = b[0],
                n = b[1],
                o = b[2],
                p = b[3];
            return e = i * m + j * n + k * o + l * p, 1 - e > 1e-6 ? (d = Math.acos(e), f = Math.sin(d), g = Math.sin((1 - c) * d) / f, h = Math.sin(c * d) / f) : (g = 1 - c, h = c), a[0] = g * i + h * m, a[1] = g * j + h * n, a[2] = g * k + h * o, a[3] = g * l + h * p, a
        }

        function e(a, b, c) {
            this._camera = null, this._boundsSize = [b, c], this._center = [.5 * b, .5 * c], this._radius = null, this._radiusScale = null, this.setRadiusScale(j), this._speed = null, this.setSpeed(k), this._zoom = !1, this._distanceStep = l, this._distance = 0, this._distancePrev = 0, this._distanceTarget = 0, this._distanceMax = Number.MAX_VALUE, this._distanceMin = Number.MIN_VALUE, this._drag = !1, this._posDown = f.create(), this._posDrag = f.create(), this._posDownPtr = g.create(), this._posDragPtr = g.create(), this._posMovePtr = g.create(), this._orientCurr = h.create(), this._orientDown = h.create(), this._orientDrag = h.create(), this._orientTarget = h.create(), this._pan = !1, this._targetCameraView = g.create(), this._targetCameraWorld = g.create(), this._targetCameraWorldOriginal = g.create(), this._planeTargetView = i.create(), this._planeTargetWorld = i.create(), this._planePosDownView = g.create(), this._planePosDragView = g.create(), this._planePosDownWorld = g.create(), this._planePosDragWorld = g.create(), this._constrain = !1, this._constrainAxes = [g.copy(t), g.copy(u), g.copy(v)], this._constrainAxisIndex = 1, this._constrainMode = w.WORLD, this._constrainModePrev = -1, this._interactive = !0, this._updateRadius(), this.setCamera(a)
        }
        var f = a("pex-math/Vec2"),
            g = a("pex-math/Vec3"),
            h = (a("pex-math/Mat4"), a("pex-math/Quat")),
            i = a("pex-geom/Plane"),
            j = 1,
            k = .35,
            l = .05,
            m = f.create(),
            n = f.create(),
            o = g.create(),
            p = g.create(),
            q = g.create(),
            r = h.create(),
            s = h.create(),
            t = [1, 0, 0],
            u = [0, 1, 0],
            v = [0, 0, 1],
            w = {
                NONE: -1,
                CAMERA: 0,
                WORLD: 1
            };
        e.prototype.setCamera = function(a) {
            this._camera = a, this._distance = a.getDistance(), this._distancePrev = this._distance, this._distanceTarget = this._distance, f.toZero(this._posDown), f.toZero(this._posDrag), g.toZero(this._posDownPtr), g.toZero(this._posDragPtr), g.toZero(this._posMovePtr), h.fromMat4(this._orientCurr, a.getViewMatrix()), h.identity(this._orientDown), h.identity(this._orientDrag), h.set(this._orientTarget, this._orientCurr), g.toZero(this._targetCameraView), g.toZero(this._targetCameraWorld), g.set(this._targetCameraWorldOriginal, a.getTarget()), g.set3(this._planeTargetView[0], 0, 0, 0), g.set3(this._planeTargetView[1], 0, 1, 0), g.set3(this._planeTargetWorld[0], 0, 0, 0), g.set3(this._planeTargetWorld[1], 0, 1, 0), g.toZero(this._planePosDownView), g.toZero(this._planePosDragView), g.toZero(this._planePosDownWorld), g.toZero(this._planePosDragWorld)
        }, e.prototype.setLookDirection = function(a) {
            a = g.normalize(g.copy(a));
            var b = h.fromDirection(h.create(), a);
            h.set(this._orientTarget, h.normalize(h.invert(b)))
        }, e.prototype.getBoundsSize = function(a) {
            return a = void 0 === a ? f.create() : a, f.set(a, this._boundsSize)
        }, e.prototype.setDistanceMin = function(a) {
            this._distanceMin = a
        }, e.prototype.setDistanceMax = function(a) {
            this._distanceMax = a
        }, e.prototype.setDistance = function(a) {
            this._distanceTarget = a
        }, e.prototype.getDistance = function() {
            return this._distance
        }, e.prototype.setRadiusScale = function(a) {
            this._radiusScale = 1 / (1 / (void 0 === a ? j : a) * 2), this._updateRadius()
        }, e.prototype.getRadiusScale = function() {
            return this._radiusScale
        }, e.prototype.setSpeed = function(a) {
            this._speed = a
        }, e.prototype.getSpeed = function() {
            return this._speed
        }, e.prototype.enable = function() {
            this._interactive = !0
        }, e.prototype.disable = function() {
            this._interactive = !1
        }, e.prototype.isEnabled = function() {
            return this._interactive
        }, e.prototype._updateModifierInput = function(a) {
            this._constrainModePrev = this._constrainMode, this._constrainMode = a.shiftKey && a.ctrlKey ? w.CAMERA : a.shiftKey && a.altKey ? w.WORLD : w.NONE, this._constrain = this._constrainMode != w.NONE, this._pan = a.shiftKey && !this._constrain
        }, e.prototype._updateRadius = function() {
            var a = this._boundsSize;
            this._radius = Math.min(a[0], a[1]) * this._radiusScale
        }, e.prototype._mapSphere = function(a, b) {
            a = f.set(m, a), b = this._constrain && (b || void 0 === b);
            var c = this._distance < 0 ? -1 : 1;
            a = f.sub(a, this._center), a = f.scale(a, 1 / this._radius), a = g.set3(n, a[0], a[1] * c, 0);
            var d = g.lengthSq(a);
            return d > 1 ? g.normalize(a) : a[2] = Math.sqrt(1 - d), b && this._constrainToAxis(a, this._constrainAxes[this._constrainAxisIndex]), a
        }, e.prototype._constrainToAxis = function(a, b) {
            var c = g.dot(a, b),
                d = g.sub(a, g.scale(g.set(q, b), c)),
                e = g.length(d);
            return e > 0 ? (d[2] < 0 && g.invert(d), g.normalize(a)) : 1 == b[2] ? g.set3(a, 1, 0, 0) : g.set3(a, -b[1], b[0], 0), a
        }, e.prototype._updateNearestAxis = function(a) {
            if (this._constrain) {
                for (var b, c, d = this._constrainAxes, e = -1, f = 0, h = 0, i = d.length; i > h; ++h) b = this._constrainToAxis(g.set(o, a), d[h]), c = g.dot(b, a), c > e && (f = h, e = c);
                this._constrainAxisIndex = f
            }
        }, e.prototype.onMouseDown = function(a) {
            if (this._interactive) {
                this._updateModifierInput(a), this._drag = !1;
                var b = this._boundsSize[1],
                    c = f.set2(m, a.x, a.y);
                this._posDown = f.set(this._posDown, c);
                var d = f.set2(m, c[0], b - c[1]);
                g.set(this._posDownPtr, this._mapSphere(d)), h.set(this._orientDown, this._orientCurr), h.identity(this._orientDrag), this._pan && (g.set(this._targetCameraWorld, this._camera.getTarget()), g.multMat4(g.set(this._targetCameraView, this._targetCameraWorld), this._camera.getViewMatrix()), g.set(this._planeTargetView[0], this._targetCameraView), g.set(this._planeTargetView[1], v), g.multMat4(g.set(this._planeTargetWorld[1], this._planeTargetView[1]), this._camera.getInverseViewMatrix()))
            }
        }, e.prototype.onMouseDrag = function(a) {
            if (this._interactive) {
                this._updateModifierInput(a), this._drag = !0;
                var b = this._boundsSize[0],
                    c = this._boundsSize[1],
                    d = f.set2(m, a.x, a.y);
                if (this._posDrag = f.set(this._posDrag, d), this._pan) {
                    i.getRayIntersection(this._planeTargetView, this._camera.getViewRay(this._posDown, b, c), this._planePosDownView), i.getRayIntersection(this._planeTargetView, this._camera.getViewRay(this._posDrag, b, c), this._planePosDragView);
                    var e = this._camera.getInverseViewMatrix();
                    g.multMat4(g.set(this._planePosDownWorld, this._planePosDownView), e), g.multMat4(g.set(this._planePosDragWorld, this._planePosDragView), e);
                    var j = g.set(o, this._targetCameraWorld),
                        k = g.set(p, this._planePosDragWorld),
                        l = g.sub(k, this._planePosDownWorld);
                    this._camera.setTarget(g.sub(j, l))
                } else {
                    var n = f.set2(m, d[0], c - d[1]),
                        q = this._posDownPtr,
                        r = g.set(this._posDragPtr, this._mapSphere(n)),
                        s = g.cross(g.set(g.create(), q), r);
                    h.set4(this._orientDrag, s[0], s[1], s[2], g.dot(q, r)), h.normalize(this._orientDrag), h.set(this._orientTarget, this._orientDrag), h.mult(this._orientTarget, this._orientDown)
                }
            }
        }, e.prototype.onMouseMove = function(a) {
            this._updateModifierInput(a);
            var b = f.set2(m, a.x, this._boundsSize[1] - a.y);
            g.set(this._posMovePtr, this._mapSphere(b, !1))
        }, e.prototype.onKeyPress = function(a) {
            this._updateModifierInput(a)
        }, e.prototype.onKeyUp = function() {
            this._constrain = !1
        }, e.prototype.onMouseUp = function(a) {
            this._constrain = a.shiftKey ? this._constrain : !1, this._drag = !1
        }, e.prototype.onMouseScroll = function(a) {
            if (this._interactive) {
                var b = a.dy < 0 ? -1 : a.dy > 0 ? 1 : 0;
                0 != b && (this._distanceTarget += -1 * b * this._distanceStep * (a.altKey ? 2 : 1), this._distanceTarget = Math.max(this._distanceMin, Math.min(this._distanceTarget, this._distanceMax)))
            }
        }, e.prototype.onWindowResize = function(a) {
            var b = a.width,
                c = a.height;
            f.set2(this._boundsSize, b, c), f.set2(this._center, .5 * b, .5 * c), this._updateRadius()
        }, e.prototype.apply = function() {
            this._distance += (this._distanceTarget - this._distance) * this._speed;
            var a = h.set(r, this._orientCurr);
            if (a[3] *= -1, this._constrain) {
                if (h.slerp(this._orientCurr, this._orientTarget, this._speed), !this._drag) switch (this._constrainMode) {
                    case w.CAMERA:
                        this._constrainMode != this._constrainModePrev && (g.set(this._constrainAxes[0], t), g.set(this._constrainAxes[1], u), g.set(this._constrainAxes[2], v));
                        break;
                    case w.WORLD:
                        var b = h.invert(h.set(s, a));
                        g.set(this._constrainAxes[0], t), g.set(this._constrainAxes[1], u), g.set(this._constrainAxes[2], v), g.multQuat(this._constrainAxes[0], b), g.multQuat(this._constrainAxes[1], b), g.multQuat(this._constrainAxes[2], b)
                }
            } else d(this._orientCurr, this._orientTarget, this._speed);
            this._updateNearestAxis(this._posMovePtr);
            var c = this._camera.getTarget(),
                e = g.multQuat(g.set3(o, 0, 0, this._distance), a),
                f = g.add(g.set(p, c), e),
                i = g.multQuat(g.set(o, u), a);
            this._camera.lookAt(f, c, i), this._zoom = this._distance != this._distancePrev, this._distancePrev = this._distance
        }, e.prototype.resetPanning = function() {
            this._camera.setTarget(this._targetCameraWorldOriginal), this._pan = !1
        }, e.prototype.isPanning = function() {
            return this._pan
        }, e.prototype.isZooming = function() {
            return this._zoom
        }, e.prototype.isDragging = function() {
            return this._drag
        }, e.prototype.isConstrained = function() {
            return this._constrain
        }, e.prototype.isActive = function() {
            return this._pan || this._zoom || this._drag || this._constrain
        }, e.prototype.getState = function() {
            return [this._camera.getPosition(), this._camera.getTarget(), this._camera.getUp(), this._interactive]
        }, e.prototype.setState = function(a) {
            if (4 !== a.length) throw new Error("Invalid state.");
            this._camera.lookAt(a[0], a[1], a[2]), this._interactive = a[3], this.setCamera(this._camera)
        }, b.exports = e
    }, {
        "pex-geom/Plane": 152,
        "pex-math/Mat4": 168,
        "pex-math/Quat": 169,
        "pex-math/Vec2": 171,
        "pex-math/Vec3": 172
    }],
    122: [function(a, b, c) {
        function d() {}
        d.prototype.onMouseDown = function() {}, d.prototype.onMouseDrag = function() {}, d.prototype.onMouseUp = function() {}, d.prototype.onMouseWheel = function() {}, b.exports = d
    }, {}],
    123: [function(a, b, c) {
        function d(a, b, c) {
            e.call(this), b = void 0 === b ? g : b, c = void 0 === c ? h : c, this._frustumLeftInitial = -1, this._frustumRightInitial = -1, this._frustumBottomInitial = -1, this._frustumTopInitial = -1, this._aspectRatio = a, this.setOrtho(-a, a, -1, 1, b, c)
        }
        var e = a("./AbstractCamera"),
            f = a("pex-math/Mat4"),
            g = -10,
            h = 10;
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.prototype.setAspectRatio = function(a) {
            this._aspectRatio = a, this._frustumLeft = this._frustumLeftInitial = -a, this._frustumRight = this._frustumRightInitial = a, this._matrixProjectionDirty = !0
        }, d.prototype.setOrtho = function(a, b, c, d, e, f) {
            this._frustumLeft = this._frustumLeftInitial = a, this._frustumRight = this._frustumRightInitial = b, this._frustumBottom = this._frustumBottomInitial = c, this._frustumTop = this._frustumTopInitial = d, this._near = e, this._far = f, this._matrixProjectionDirty = !0
        }, d.prototype._updateProjectionMatrix = function() {
            this._matrixProjectionDirty && (f.ortho(this._matrixProjection, this._frustumLeft, this._frustumRight, this._frustumBottom, this._frustumTop, this._near, this._far), this._matrixProjectionDirty = !1)
        }, d.prototype.scaleFrustum = function(a) {
            this._frustumLeft = this._frustumLeftInitial * a, this._frustumRight = this._frustumRightInitial * a, this._frustumBottom = this._frustumBottomInitial * a, this._frustumTop = this._frustumTopInitial * a, this._matrixProjectionDirty = !0
        }, b.exports = d
    }, {
        "./AbstractCamera": 120,
        "pex-math/Mat4": 168
    }],
    124: [function(a, b, c) {
        function d(a, b, c, d) {
            e.call(this), this._aspectRatio = b, this.setPerspective(void 0 === a ? j : a, void 0 === b ? m : b, void 0 === c ? k : c, void 0 === d ? l : d)
        }
        var e = a("./AbstractCamera"),
            f = a("pex-math/Vec2"),
            g = a("pex-math/Vec3"),
            h = a("pex-math/Vec4"),
            i = a("pex-math/Mat4"),
            j = 60,
            k = .01,
            l = 10,
            m = 4 / 3,
            n = (f.create(), g.create(), g.create(), g.create(), h.create(), i.create());
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.prototype.setFov = function(a) {
            this._fov = a, this._matrixProjectionDirty = !0
        }, d.prototype.getFov = function() {
            return this._fov
        }, d.prototype.setAspectRatio = function(a) {
            this._aspectRatio = a, this._matrixProjectionDirty = !0
        }, d.prototype.setDistance = function(a) {
            g.sub(this._position, this._target), g.normalize(this._position), g.scale(this._position, a), this._matrixViewDirty = !0
        }, d.prototype.setPerspective = function(a, b, c, d) {
            this._fov = a, this._aspectRatio = b, this._near = c, this._far = d, this._matrixProjectionDirty = !0
        }, d.prototype._updateProjectionMatrix = function() {
            this._matrixProjectionDirty && (i.perspective(this._matrixProjection, this._fov, this._aspectRatio, this._near, this._far), this._matrixProjectionDirty = !1)
        }, d.prototype.getViewRay = function(a, b, c, d) {
            void 0 === d ? d = [
                [0, 0],
                [0, 0]
            ] : (d[0] = void 0 === d[0] ? [0, 0] : d[0], d[1] = void 0 === d[1] ? [0, 0] : d[1]);
            var e = a[0] / b * 2 - 1,
                f = -a[1] / c * 2 + 1,
                h = 2 * Math.tan(this._fov / 180 * Math.PI / 2) * this._near,
                i = h * this._aspectRatio;
            return e *= .5 * i, f *= .5 * h, g.set3(d[0], 0, 0, 0), g.normalize(g.set3(d[1], e, f, -this._near)), d
        }, d.prototype.getWorldRay = function(a, b, c, d) {
            void 0 === d ? d = [
                [0, 0],
                [0, 0]
            ] : (d[0] = void 0 === d[0] ? [0, 0] : d[0], d[1] = void 0 === d[1] ? [0, 0] : d[1]);
            var e = this.getViewRay(a, b, c, d),
                f = i.invert(i.set(n, this._matrixView));
            return g.multMat4(e[0], f), g.multMat4(e[1], f), g.normalize(g.sub(e[1], e[0])), e
        }, d.prototype.setFrustumOffset = function(a, b, c, d, e, f) {
            e = void 0 === e ? c : e, f = void 0 === f ? d : f;
            var g = this._near,
                h = this._far,
                j = e / f,
                k = Math.tan(this._fov * Math.PI / 180 * .5) * g,
                l = -k,
                m = j * l,
                n = j * k,
                o = Math.abs(n - m),
                p = Math.abs(k - l),
                q = o / e,
                r = p / f,
                s = m + a * q,
                t = m + (a + c) * q,
                u = k - (b + d) * r,
                v = k - b * r;
            i.frustum(this._matrixProjection, s, t, u, v, g, h)
        }, b.exports = d
    }, {
        "./AbstractCamera": 120,
        "pex-math/Mat4": 168,
        "pex-math/Vec2": 171,
        "pex-math/Vec3": 172,
        "pex-math/Vec4": 173
    }],
    125: [function(a, b, c) {
        b.exports = {
            OrthoCamera: a("./OrthoCamera"),
            PerspCamera: a("./PerspCamera"),
            Arcball: a("./Arcball"),
            CameraOrbiter: a("./CameraOrbiter")
        }
    }, {
        "./Arcball": 121,
        "./CameraOrbiter": 122,
        "./OrthoCamera": 123,
        "./PerspCamera": 124
    }],
    126: [function(a, b, c) {
        function d(a, b, c, d) {
            return [a || 0, b || 0, c || 0, void 0 === d ? 1 : d]
        }

        function e(a, b) {
            return void 0 !== b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice(0)
        }

        function f(a, b, c, e) {
            return d(a, b, c, e)
        }

        function g(a, b, c, d, e) {
            return a[0] = b, a[1] = c, a[2] = d, a[3] = void 0 !== e ? e : 1, a
        }

        function h(a, b, c, d, e) {
            return a[0] = b, a[1] = c, a[2] = d, a[3] = void 0 !== e ? e : 1, a
        }

        function i(a) {
            return [a[0] / 255, a[1] / 255, a[2] / 255, 4 == a.length ? a[3] / 255 : 1]
        }

        function j(a, b) {
            return b = b || [0, 0, 0], b[0] = Math.round(255 * a[0]), b[1] = Math.round(255 * a[1]), b[2] = Math.round(255 * a[2]), b
        }

        function k(a, b, c, e) {
            var f = d();
            return l(f, a, b, c, e), f
        }

        function l(a, b, c, d, e) {
            e = e || 1;
            var f = Math.floor(6 * b),
                g = 6 * b - f,
                h = d * (1 - c),
                i = d * (1 - g * c),
                j = d * (1 - (1 - g) * c);
            switch (f % 6) {
                case 0:
                    a[0] = d, a[1] = j, a[2] = h;
                    break;
                case 1:
                    a[0] = i, a[1] = d, a[2] = h;
                    break;
                case 2:
                    a[0] = h, a[1] = d, a[2] = j;
                    break;
                case 3:
                    a[0] = h, a[1] = i, a[2] = d;
                    break;
                case 4:
                    a[0] = j, a[1] = h, a[2] = d;
                    break;
                case 5:
                    a[0] = d, a[1] = h, a[2] = i
            }
            return a[3] = e, a
        }

        function m(a) {
            var b, c = a[0],
                d = a[1],
                e = a[2],
                f = Math.max(c, d, e),
                g = Math.min(c, d, e),
                h = f,
                i = f - g,
                j = 0 === f ? 0 : i / f;
            if (f === g) b = 0;
            else {
                switch (f) {
                    case c:
                        b = (d - e) / i + (e > d ? 6 : 0);
                        break;
                    case d:
                        b = (e - c) / i + 2;
                        break;
                    case e:
                        b = (c - d) / i + 4
                }
                b /= 6
            }
            return [b, j, h, a[3]]
        }

        function n(a, b, c, e) {
            var f = d();
            return o(f, a, b, c, e), f
        }

        function o(a, b, c, d, e) {
            function f(a, b, c) {
                return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + (b - a) * (2 / 3 - c) * 6 : a
            }
            if (e = e || 1, 0 === c) a[0] = a[1] = a[2] = d;
            else {
                var g = .5 > d ? d * (1 + c) : d + c - d * c,
                    h = 2 * d - g;
                a[0] = f(h, g, b + 1 / 3), a[1] = f(h, g, b), a[2] = f(h, g, b - 1 / 3)
            }
            return a[3] = e, a
        }

        function p(a) {
            var b, c, d = a[0],
                e = a[1],
                f = a[2],
                g = Math.max(d, e, f),
                h = Math.min(d, e, f),
                i = (g + h) / 2;
            if (g === h) b = c = 0;
            else {
                var j = g - h;
                switch (c = i > .5 ? j / (2 - g - h) : j / (g + h), g) {
                    case d:
                        b = (e - f) / j + (f > e ? 6 : 0);
                        break;
                    case e:
                        b = (f - d) / j + 2;
                        break;
                    case f:
                        b = (d - e) / j + 4
                }
                b /= 6
            }
            return [b, c, i, a[3]]
        }

        function q(a) {
            var b = d();
            return r(b, a), b
        }

        function r(a, b) {
            b = b.replace(/^#/, "");
            var c = parseInt(b, 16);
            return a[0] = (c >> 16 & 255) / 255, a[1] = (c >> 8 & 255) / 255, a[2] = (255 & c) / 255, a[3] = 1, a
        }

        function s(a) {
            var b = [a[0], a[1], a[2]].map(function(a) {
                return Math.floor(255 * a)
            });
            return "#" + (b[2] | b[1] << 8 | b[0] << 16 | 1 << 24).toString(16).slice(1).toUpperCase()
        }

        function t(a, b, c) {
            var e = d();
            return w(e, a, b, c), e
        }

        function u(a) {
            return a /= 100, 0 > a && (a = 0), a > .0031308 ? a = 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, a
        }

        function v(a) {
            return a > .04045 ? a = Math.pow((a + .055) / 1.055, 2.4) : a /= 12.92, a *= 100
        }

        function w(a, b, c, d) {
            var e = 3.2406 * b + -1.5372 * c + d * -.4986,
                f = b * -.9689 + 1.8758 * c + .0415 * d,
                g = .0557 * b + c * -.204 + 1.057 * d;
            return a[0] = u(e), a[1] = u(f), a[2] = u(g), a[3] = 1, a
        }

        function x(a) {
            var b = v(a[0]),
                c = v(a[1]),
                d = v(a[2]);
            return [.4124 * b + .3576 * c + .1805 * d, .2126 * b + .7152 * c + .0722 * d, .0193 * b + .1192 * c + .9505 * d]
        }

        function y(a, b, c) {
            var e = d();
            return B(e, a, b, c), e
        }

        function z(a, b) {
            var c = Math.pow(a, 3);
            return a = c > .008856 ? c : (a - 16 / 116) / 7.787, a *= b
        }

        function A(a, b) {
            return a /= b, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116;
        }

        function B(a, b, c, d) {
            var e = [95.047, 100, 108.883],
                f = (b + 16) / 116,
                g = c / 500 + f,
                h = f - d / 200;
            return g = z(g, e[0]), f = z(f, e[1]), h = z(h, e[2]), w(a, g, f, h)
        }

        function C(a) {
            var b = x(a),
                c = [95.047, 100, 108.883],
                d = A(b[0], c[0]),
                e = A(b[1], c[1]),
                f = A(b[2], c[2]);
            return [116 * e - 16, 500 * (d - e), 200 * (e - f)]
        }
        var D = (a("lerp"), {
            create: d,
            copy: e,
            fromRGB: f,
            setRGB: h,
            set: g,
            fromRGBBytes: i,
            getRGBBytes: j,
            fromHSV: k,
            setHSV: l,
            getHSV: m,
            fromHSL: n,
            setHSL: o,
            getHSL: p,
            fromHex: q,
            setHex: r,
            getHex: s,
            fromXYZ: t,
            setXYZ: w,
            getXYZ: x,
            fromLab: y,
            setLab: B,
            getLab: C
        });
        b.exports = D
    }, {
        lerp: 109
    }],
    127: [function(a, b, c) {
        b.exports = a("./Color")
    }, {
        "./Color": 126
    }],
    128: [function(a, b, c) {
        function d(a, b, c, d, e) {
            var f = a.getGL();
            this._ctx = a, this._target = void 0 === b ? f.ARRAY_BUFFER : b, this._usage = void 0 === d ? f.STATIC_DRAW : d, this._length = 0, this._byteLength = 0, this._data = null, this._dataType = null, this._preserveData = void 0 === e ? !1 : e, this._handle = f.createBuffer(), void 0 !== c && 0 !== c && this.bufferData(c)
        }
        d.prototype._getHandle = function() {
            return this._handle
        }, d.prototype.setTarget = function(a) {
            this._target = a
        }, d.prototype.getTarget = function() {
            return this._target
        }, d.prototype.setUsage = function(a) {
            this._usage = a
        }, d.prototype.getUsage = function() {
            return this._usage
        }, d.prototype.getLength = function() {
            return this._length
        }, d.prototype.getByteLength = function() {
            return this._byteLength
        }, d.prototype.getDataType = function() {
            return this._dataType
        }, d.prototype.getData = function() {
            return this._data
        }, d.prototype.bufferData = function(a) {
            var b = this._ctx,
                c = b.getGL();
            if (b._bindBuffer(this), void 0 === a) {
                if (null !== this._data) return c.bufferData(this._target, this._data, this._usage), void b._unbindBuffer(this);
                throw new Error("No size or data passed. Or no preserved data set.")
            }
            if (a !== this._data)
                if (void 0 !== a.byteLength) {
                    this._length = a.length, this._byteLength = a.byteLength;
                    var d = a.constructor;
                    switch (d) {
                        case Float32Array:
                            this._dataType = c.FLOAT;
                            break;
                        case Uint16Array:
                            this._dataType = c.UNSIGNED_SHORT;
                            break;
                        case Uint32Array:
                            this._dataType = c.UNSIGNED_INT;
                            break;
                        default:
                            throw new TypeError("Unsupported data type.")
                    }
                    this._preserveData && a && (null !== this._data && this._data.length == a.length ? this._data.set(a) : this._data = new d(a))
                } else this._length = a, this._byteLength = null, this._dataType = null, this._data = null;
            c.bufferData(this._target, a, this._usage), b._unbindBuffer(this)
        }, d.prototype.bufferSubData = function(a, b) {
            var c = this._ctx.getGL();
            if (c.bufferSubData(this._target, a, b), this._preserveData && b != this._data) {
                a /= this._data.BYTES_PER_ELEMENT;
                for (var d = 0, e = this._data.length; e > a; ++d, a += 1) this._data[a] = b[d]
            }
        }, d.prototype.dispose = function() {
            if (!this._handle) throw new Error("Buffer already disposed.");
            this._gl.deleteBuffer(this._handle), this._handle = null, this._data = null
        }, b.exports = d
    }, {}],
    129: [function(a, b, c) {
        function d(a) {
            if (Array.isArray(a)) return a;
            var b = new Array(Object.keys(a).length);
            for (var c in a) b[+c] = a[c];
            return b
        }

        function e(a) {
            this._gl = a, this._mask = -1, this._maskStack = [], this._bitMap = {}, this._bitMap[x] = a.DEPTH_BUFFER_BIT, this._bitMap[y] = a.COLOR_BUFFER_BIT, this._bitMap[x | y] = a.DEPTH_BUFFER_BIT | a.COLOR_BUFFER_BIT, this.ALL_BIT = w, this.DEPTH_BIT = x, this._depthTest = !1, this._depthMask = a.getParameter(a.DEPTH_WRITEMASK), this._depthFunc = a.getParameter(a.DEPTH_FUNC), this._depthClearValue = a.getParameter(a.DEPTH_CLEAR_VALUE), this._depthRange = d(a.getParameter(a.DEPTH_RANGE)).slice(0, 2), this._polygonOffset = [a.getParameter(a.POLYGON_OFFSET_FACTOR), a.getParameter(a.POLYGON_OFFSET_UNITS)], this._depthStack = [], this.COLOR_BIT = y, this._clearColor = [0, 0, 0, 1], this._colorMask = a.getParameter(a.COLOR_WRITEMASK), this._colorStack = [], this.SCISSOR_BIT = B, this._scissorTest = a.getParameter(a.SCISSOR_TEST), this._scissorBox = d(a.getParameter(a.SCISSOR_BOX)).slice(0, 4), this._scissorStack = [], this.VIEWPORT_BIT = A, this._viewport = d(a.getParameter(a.VIEWPORT)).slice(0, 4), this._viewportStack = [], this.STENCIL_BIT = z, this._stencilTest = a.getParameter(a.STENCIL_TEST), this._stencilFunc = [a.getParameter(a.STENCIL_FUNC), a.getParameter(a.STENCIL_REF), 255], this._stencilFuncSeparate = [a.FRONT, this._stencilFunc[0], a.getParameter(a.STENCIL_REF), this._stencilFunc[2]], this._stencilOp = [a.getParameter(a.STENCIL_FAIL), a.getParameter(a.STENCIL_PASS_DEPTH_FAIL), a.getParameter(a.STENCIL_PASS_DEPTH_PASS)], this._stencilOpSeparate = [a.FRONT, this._stencilOp[0], this._stencilOp[1], this._stencilOp[2]], this._stencilStack = [], this.CULL_BIT = C, this._cullFace = a.getParameter(a.CULL_FACE), this._cullFaceMode = a.getParameter(a.CULL_FACE_MODE), this._cullStack = [], this.BLEND_BIT = D, this._blend = a.getParameter(a.BLEND), this._blendColor = d(a.getParameter(a.BLEND_COLOR)).slice(0, 4), this._blendEquation = a.getParameter(a.BLEND_EQUATION), this._blendEquationSeparate = [a.getParameter(a.BLEND_EQUATION_RGB), a.getParameter(a.BLEND_EQUATION_ALPHA)], this._blendFunc = [a.ONE, a.ZERO], this._blendFuncSeparate = [a.ZERO, a.ZERO, a.ZERO, a.ZERO], this._blendStack = [], this.LINE_WIDTH_BIT = E, this._lineWidth = a.getParameter(a.LINE_WIDTH), this._lineWidthStack = [], this.MATRIX_PROJECTION_BIT = F, this.MATRIX_VIEW_BIT = G, this.MATRIX_MODEL_BIT = H, this._matrix = {}, this._matrix[N] = g.create(), this._matrix[O] = g.create(), this._matrix[P] = g.create(), this._matrix[Q] = f.create(), this._matrix[R] = g.create(), this._matrixStack = {}, this._matrixStack[F] = [], this._matrixStack[G] = [], this._matrixStack[H] = [], this._matrixTypeByUniformNameMap = {}, this._matrixTypeByUniformNameMap[l.PROJECTION_MATRIX] = N, this._matrixTypeByUniformNameMap[l.VIEW_MATRIX] = O, this._matrixTypeByUniformNameMap[l.MODEL_MATRIX] = P, this._matrixTypeByUniformNameMap[l.NORMAL_MATRIX] = Q, this._matrixTypeByUniformNameMap[l.INVERSE_VIEW_MATRIX] = R, this._matrix4Temp = g.create(), this._matrix4F32Temp = new Float32Array(16), this._matrix3F32Temp = new Float32Array(9), this._matrixTempByTypeMap = {}, this._matrixTempByTypeMap[N] = this._matrixTempByTypeMap[O] = this._matrixTempByTypeMap[P] = this._matrixTempByTypeMap[R] = this._matrix4F32Temp, this._matrixTempByTypeMap[Q] = this._matrix3F32Temp, this._matrixSend = {}, this._matrixSend[N] = !1, this._matrixSend[O] = !1, this._matrixSend[P] = !1, this._matrixSend[Q] = !1, this._matrixSend[R] = !1, this._matrixTypesByUniformInProgram = {}, this.PROGRAM_BIT = K, this._program = null, this._programStack = [], this._bufferPrev = {}, this._bufferPrev[a.ARRAY_BUFFER] = null, this._bufferPrev[a.ELEMENT_ARRAY_BUFFER] = null, this._buffer = {}, this._buffer[a.ARRAY_BUFFER] = null, this._buffer[a.ELEMENT_ARRAY_BUFFER] = null, this.VERTEX_ARRAY_BIT = J, this._vertexArray = null, this._vertexArrayHasIndexBuffer = !1, this._vertexArrayIndexBufferDataType = null, this._vertexArrayHasDivisor = !1, this._vertexArrayStack = [], this.MESH_BIT = M, this._mesh = null, this._meshPrimitiveType = null, this._meshHasIndexBuffer = !1, this._meshIndexBufferDataType = null, this._meshCount = 0, this._meshHasDivisor = !1, this._meshStack = [], this.TEXTURE_BIT = L, this._maxTextureImageUnits = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS), this._textures = new Array(this._maxTextureImageUnits), this._textureStack = [], this.MAX_TEXTURE_IMAGE_UNITS = this._maxTextureImageUnits, this.FRAMEBUFFER_BIT = I, this._framebuffer = null, this._framebufferStack = [], this.ATTRIB_POSITION = m.POSITION, this.ATTRIB_COLOR = m.COLOR, this.ATTRIB_TEX_COORD_0 = m.TEX_COORD_0, this.ATTRIB_TEX_COORD_1 = m.TEX_COORD_1, this.ATTRIB_TEX_COORD_2 = m.TEX_COORD_2, this.ATTRIB_TEX_COORD_3 = m.TEX_COORD_3, this.ATTRIB_NORMAL = m.NORMAL, this.ATTRIB_TANGENT = m.TANGENT, this.ATTRIB_BITANGENT = m.BITANGENT, this.ATTRIB_BONE_INDEX = m.BONE_INDEX, this.ATTRIB_BONE_WEIGHT = m.BONE_WEIGHT, this.ATTRIB_CUSTOM_0 = m.CUSTOM_0, this.ATTRIB_CUSTOM_1 = m.CUSTOM_1, this.ATTRIB_CUSTOM_2 = m.CUSTOM_2, this.ATTRIB_CUSTOM_3 = m.CUSTOM_3, this.ATTRIB_CUSTOM_4 = m.CUSTOM_4, this.FUNC_ADD = a.FUNC_ADD, this.FUNC_SUBSTRACT = a.FUNC_SUBSTRACT, this.FUNC_REVERSE_SUBSTRACT = a.FUNC_REVERSE_SUBSTRACT, this.ZERO = a.ZERO, this.ONE = a.ONE, this.SRC_COLOR = a.SRC_COLOR, this.ONE_MINUS_SRC_COLOR = a.ONE_MINUS_SRC_COLOR, this.DST_COLOR = a.DST_COLOR, this.ONE_MINUS_DST_COLOR = a.ONE_MINUS_DST_COLOR, this.SRC_ALPHA = a.SRC_ALPHA, this.ONE_MINUS_SRC_ALPHA = a.ONE_MINUS_SRC_ALPHA, this.DST_ALPHA = a.DST_ALPHA, this.ONE_MINUS_DST_ALPHA = a.ONE_MINUS_DST_ALPHA, this.SRC_ALPHA_SATURATE = a.SRC_ALPHA_SATURATE, this.CONSTANT_COLOR = a.CONSTANT_COLOR, this.ONE_MINUS_CONSTANT_COLOR = a.CONSTANT_COLOR, this.CONSTANT_ALPHA = a.CONSTANT_ALPHA, this.ONE_MINUS_CONSTANT_ALPHA = a.ONE_MINUS_CONSTANT_ALPHA, this.FRONT = a.FRONT, this.BACK = a.BACK, this.FRONT_AND_BACK = a.FRONT_AND_BACK, this.FLOAT = a.FLOAT, this.UNSIGNED_SHORT = a.UNSIGNED_SHORT, this.UNSIGNED_INT = a.UNSIGNED_INT, this.UNSIGNED_BYTE = a.UNSIGNED_BYTE, this.RGBA = a.RGBA, this.DEPTH_COMPONENT = a.DEPTH_COMPONENT, this.NEAREST = a.NEAREST, this.LINEAR = a.LINEAR, this.NEAREST_MIPMAP_NEAREST = a.NEAREST_MIPMAP_NEAREST, this.NEAREST_MIPMAP_LINEAR = a.NEAREST_MIPMAP_LINEAR, this.LINEAR_MIPMAP_NEAREST = a.LINEAR_MIPMAP_NEAREST, this.LINEAR_MIPMAP_LINEAR = a.LINEAR_MIPMAP_LINEAR, this.TEXTURE_2D = a.TEXTURE_2D, this.TEXTURE_CUBE_MAP_POSITIVE_X = a.TEXTURE_CUBE_MAP_POSITIVE_X, this.TEXTURE_CUBE_MAP_NEGATIVE_X = a.TEXTURE_CUBE_MAP_NEGATIVE_X, this.TEXTURE_CUBE_MAP_POSITIVE_Y = a.TEXTURE_CUBE_MAP_POSITIVE_Y, this.TEXTURE_CUBE_MAP_NEGATIVE_Y = a.TEXTURE_CUBE_MAP_NEGATIVE_Y, this.TEXTURE_CUBE_MAP_POSITIVE_Z = a.TEXTURE_CUBE_MAP_POSITIVE_Z, this.TEXTURE_CUBE_MAP_NEGATIVE_Z = a.TEXTURE_CUBE_MAP_NEGATIVE_Z, this.STATIC_DRAW = a.STATIC_DRAW, this.DYNAMIC_DRAW = a.DYNAMIC_DRAW, this.ARRAY_BUFFER = a.ARRAY_BUFFER, this.ELEMENT_ARRAY_BUFFER = a.ELEMENT_ARRAY_BUFFER, this.POINTS = a.POINTS, this.LINES = a.LINES, this.LINE_STRIP = a.LINE_STRIP, this.LINE_LOOP = a.LINE_LOOP, this.TRIANGLES = a.TRIANGLES, this.TRIANGLE_STRIP = a.TRIANGLE_STRIP, this.TRIANGLE_FAN = a.TRIANGLE_FAN, this._caps = [], this.CAPS_WEBGL2 = S, this.CAPS_INSTANCED_ARRAYS = T, this.CAPS_TEXTURE_FLOAT = U, this.CAPS_TEXTURE_FLOAT_LINEAR = V, this.CAPS_TEXTURE_HALF_FLOAT = W, this.CAPS_TEXTURE_HALF_FLOAT_LINEAR = X, this.CAPS_DEPTH_TEXTURE = Y, this.CAPS_SRGB = Z, this.CAPS_ELEMENT_INDEX_UINT = $;
            var b = !1;
            if (this._caps[S] = b, a.drawElementsInstanced) this._caps[T] = !0;
            else {
                var c = a.getExtension("ANGLE_instanced_arrays");
                c ? (this._caps[T] = !0, a.drawElementsInstanced = c.drawElementsInstancedANGLE.bind(c), a.drawArraysInstanced = c.drawArraysInstancedANGLE.bind(c), a.vertexAttribDivisor = c.vertexAttribDivisorANGLE.bind(c)) : (this._caps[T] = !1, a.drawElementsInstanced = function() {
                    throw new Error("ANGLE_instanced_arrays not supported")
                }, a.drawArraysInstanced = function() {
                    throw new Error("ANGLE_instanced_arrays not supported")
                }, a.vertexAttribDivisor = function() {
                    throw new Error("ANGLE_instanced_arrays not supported")
                })
            }
            if (this._caps[U] = u || b || null != a.getExtension("OES_texture_float"), this._caps[V] = u || b || null != a.getExtension("OES_texture_float_linear"), this._caps[W] = u || b || null != a.getExtension("OES_texture_half_float"), this._caps[X] = u || b || null != a.getExtension("OES_texture_half_float_linear"), a.HALF_FLOAT) this.HALF_FLOAT = a.HALF_FLOAT;
            else {
                var c = a.getExtension("OES_texture_half_float");
                c && (this.HALF_FLOAT = c.HALF_FLOAT_OES)
            }
            if (this._caps[Y] = u || b || null != a.getExtension("WEBGL_depth_texture"), a.SRGB) this._caps[Z] = !0, this.SRGB = a.SRGB_EXT, this.SRGB8_ALPHA8 = a.SRGB8_ALPHA8_EXT, this.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = a.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING;
            else {
                var c = a.getExtension("EXT_sRGB");
                c ? (this._caps[Z] = !0, this.SRGB = c.SRGB_EXT, this.SRGB8_ALPHA8 = c.SRGB8_ALPHA8_EXT, this.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = c.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT) : this._caps[Z] = !1
            }
            if (u || b) this._caps[$] = !0;
            else {
                var c = a.getExtension("OES_element_index_uint");
                c ? this._caps[$] = !0 : this._caps[$] = !1
            }
        }
        var f = a("pex-math/Mat3"),
            g = a("pex-math/Mat4"),
            h = a("pex-math/Vec2"),
            i = a("pex-math/Vec3"),
            j = a("pex-math/Vec4"),
            k = a("./Program"),
            l = a("./ProgramUniform"),
            m = a("./ProgramAttributeLocation"),
            n = a("./Buffer"),
            o = a("./VertexArray"),
            p = a("./Mesh"),
            q = a("./Framebuffer"),
            r = a("./Texture2D"),
            s = a("./TextureCube"),
            t = a("is-browser"),
            u = !t,
            v = "Invalid pop. Bit %s stack is empty.",
            w = (1 << 30) - 1,
            x = 2,
            y = 4,
            z = 8,
            A = 16,
            B = 32,
            C = 64,
            D = 128,
            E = 256,
            F = 65536,
            G = 1 << 17,
            H = 1 << 18,
            I = 1 << 19,
            J = 1 << 21,
            K = 1 << 22,
            L = 1 << 23,
            M = 1 << 24,
            N = "matrixProjection",
            O = "matrixView",
            P = "matrixModel",
            Q = "matrixNormal",
            R = "matrixInverseView",
            S = 0,
            T = 1,
            U = 2,
            V = 3,
            W = 4,
            X = 5,
            Y = 6,
            Z = 7,
            $ = 8;
        e.prototype.getGL = function() {
            return this._gl
        }, e.prototype.pushState = function(a) {
            a = void 0 === a ? w : a, (a & x) == x && this._depthStack.push([this._depthTest, this._depthMask, this._depthFunc, this._depthClearValue, h.copy(this._depthRange), h.copy(this._polygonOffset)]), (a & y) == y && this._colorStack.push([j.copy(this._clearColor), j.copy(this._colorMask)]), (a & z) == z && this._stencilStack.push([this._stencilTest, i.copy(this._stencilFunc), j.copy(this._stencilFuncSeparate), i.copy(this._stencilOp), j.copy(this._stencilOpSeparate)]), (a & A) == A && this._viewportStack.push(j.copy(this._viewport)), (a & B) == B && this._scissorStack.push([this._scissorTest, j.copy(this._scissorBox)]), (a & C) == C && this._cullStack.push([this._cullFace, this._cullFaceMode]), (a & D) == D && this._blendStack.push([this._blend, j.copy(this._blendColor), this._blendEquation, h.copy(this._blendEquationSeparate), h.copy(this._blendFunc), j.copy(this._blendFuncSeparate)]), (a & E) == E && this._lineWidthStack.push(this._lineWidth), (a & F) == F && this.pushProjectionMatrix(), (a & G) == G && this.pushViewMatrix(), (a & H) == H && this.pushModelMatrix(), (a & J) == J && this._vertexArrayStack.push(this._vertexArray), (a & K) == K && this._programStack.push(this._program), (a & L) == L && this._textureStack.push(this._textures.slice(0)), (a & I) == I && this._framebufferStack.push(this._framebuffer), (a & M) == M && this._meshStack.push(this._mesh), this._mask = a, this._maskStack.push(this._mask)
        }, e.prototype.popState = function() {
            var a, b, c = this._mask = this._maskStack.pop();
            if ((c & y) == y) {
                if (0 == this._colorStack.length) throw new Error(v.replace("%s", "COLOR_BIT"));
                a = this._colorStack[this._colorStack.length - 1], b = a[0], this.setClearColor(b[0], b[1], b[2], b[3]), b = a[1], this.setColorMask(b[0], b[1], b[2], b[3])
            }
            if ((c & x) == x) {
                if (0 == this._depthStack.length) throw new Error(v.replace("%s", "DEPTH_BIT"));
                a = this._depthStack.pop(), this.setDepthTest(a[0]), this.setDepthMask(a[1]), this.setDepthFunc(a[2]), this.setClearDepth(a[3]), b = a[4], this.setDepthRange(b[0], b[1]), b = a[5], this.setPolygonOffset(b[0], b[1])
            }
            if ((c & z) == z) {
                if (0 == this._stencilStack.length) throw new Error(v.replace("%s", "STENCIL_BIT"));
                a = this._stencilStack.pop(), this.setStencilTest(a[0]), b = a[1], this.setStencilFunc(b[0], b[1], b[2]), b = a[2], this.setStencilFuncSeparate(b[0], b[1], b[2], b[3]), b = a[3], this.setStencilOp(b[0], b[1], b[2]), b = a[4], this.setStencilOpSeparate(b[0], b[1], b[2], b[3])
            }
            if ((c & A) == A) {
                if (0 == this._viewportStack.length) throw new Error(v.replace("%s", "VIEWPORT_BIT"));
                b = this._viewportStack.pop(), this.setViewport(b[0], b[1], b[2], b[3])
            }
            if ((c & B) == B) {
                if (0 == this._scissorStack.length) throw new Error(v.replace("%s", "SCISSOR_BIT"));
                a = this._scissorStack.pop(), this.setScissorTest(a[0]), b = a[1], this.setScissor(b[0], b[1], b[2], b[3])
            }
            if ((c & C) == C) {
                if (0 == this._cullStack.length) throw new Error(v.replace("%s", "CULL_BIT"));
                a = this._cullStack.pop(), this.setCullFace(a[0]), this.setCullFaceMode(a[1])
            }
            if ((c & D) == D) {
                if (0 == this._blendStack.length) throw new Error(v.replace("%s", "BLEND_BIT"));
                a = this._blendStack.pop(), this.setBlend(a[0]), b = a[1], this.setBlendColor(b[0], b[1], b[2], b[3]), this.setBlendEquation(a[2]), b = a[3], this.setBlendEquationSeparate(b[0], b[1]), b = a[4], this.setBlendFunc(b[0], b[1]), b = a[5], this.setBlendFuncSeparate(b[0], b[1], b[2], b[3])
            }
            if ((c & E) == E) {
                if (0 == this._lineWidthStack.length) throw new Error(v.replace("%s", "LINE_WIDTH_BIT"));
                b = this._lineWidthStack.pop(), this.setLineWidth(b)
            }
            if ((c & F) == F && this.popProjectionMatrix(), (c & G) == G && this.popViewMatrix(), (c & H) == H && this.popModelMatrix(), (c & K) == K) {
                if (0 == this._programStack.length) throw new Error(v.replace("%s", "PROGRAM_BIT"));
                b = this._programStack.pop(), this.bindProgram(b)
            }
            if ((c & J) == J) {
                if (0 == this._vertexArrayStack.length) throw new Error(v.replace("%s", "VERTEX_ARRAY_BIT"));
                b = this._vertexArrayStack.pop(), this.bindVertexArray(b)
            }
            if ((c & L) == L) {
                if (0 == this._textureStack.length) throw new Error(v.replace("%s", "TEXTURE_BIT"));
                a = this._textureStack.pop();
                for (var d = 0, e = a.length; e > d; ++d) this.bindTexture(a[d], d)
            }(c & I) == I && (b = this._framebufferStack.pop(), this.bindFramebuffer(b)), (c & M) == M && (b = this._meshStack.pop(), this.bindMesh(b))
        }, e.prototype.getState = function(a) {
            a = void 0 === a ? w : a;
            var b = [];
            return (a & x) == x && b.push([this._depthTest, this._depthMask, this._depthFunc, this._depthClearValue, h.copy(this._depthRange), h.copy(this._polygonOffset)]), (a & y) == y && b.push([j.copy(this._clearColor), j.copy(this._colorMask)]), (a & z) == z && b.push([this._stencilTest, i.copy(this._stencilFunc), j.copy(this._stencilFuncSeparate), i.copy(this._stencilOp), j.copy(this._stencilOpSeparate)]), (a & A) == A && b.push(j.copy(this._viewport)), (a & B) == B && b.push([this._scissorTest, this._scissorStack]), (a & C) == C && b.push([this._cullFace, this._cullFaceMode]), (a & D) == D && b.push([this._blend, j.copy(this._blendColor), this._blendEquation, h.copy(this._blendEquationSeparate), h.copy(this._blendFunc)]), (a & E) == E && b.push(this._lineWidth), (a & F) == F && b.push(g.copy(this._matrix[F])), (a & G) == G && b.push(g.copy(this._matrix[G])), (a & H) == H && b.push(g.copy(this._matrix[H])), (a & K) == K && b.push(this._program), (a & L) == L && b.push(this._textures.slice(0)), (a & I) == I && b.push(this._framebuffer), (a & M) == M && b.push(this._mesh), b.length > 1 ? b : b[0]
        }, e.prototype.setViewport = function(a, b, c, d) {
            j.equals4(this._viewport, a, b, c, d) || (j.set4(this._viewport, a, b, c, d), this._gl.viewport(a, b, c, d))
        }, e.prototype.getViewport = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._viewport)
        }, e.prototype.setCullFace = function(a) {
            a != this._cullFace && (a ? this._gl.enable(this._gl.CULL_FACE) : this._gl.disable(this._gl.CULL_FACE), this._cullFace = a)
        }, e.prototype.getCullFace = function() {
            return this._cullFace
        }, e.prototype.setCullFaceMode = function(a) {
            a != this._cullFaceMode && (this._gl.cullFace(a), this._cullFaceMode = a)
        }, e.prototype.getCullFaceMode = function() {
            return this._cullFaceMode
        }, e.prototype.setScissorTest = function(a) {
            a != this._scissorTest && (a ? this._gl.enable(this._gl.SCISSOR_TEST) : this._gl.disable(this._gl.SCISSOR_TEST), this._scissorTest = a)
        }, e.prototype.getScissorTest = function() {
            return this._scissorTest
        }, e.prototype.setScissor = function(a, b, c, d) {
            j.equals4(this._scissorBox, a, b, c, d) || (this._gl.scissor(a, b, c, d), j.set4(this._scissorBox, a, b, c, d))
        }, e.prototype.getScissor = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._scissorBox)
        }, e.prototype.setStencilTest = function(a) {
            a != this._stencilTest && (a ? this._gl.enable(this._gl.STENCIL_TEST) : this._gl.disable(this._gl.STENCIL_TEST), this._stencilTest = a)
        }, e.prototype.getStencilTest = function() {
            return this._stencilTest
        }, e.prototype.setStencilFunc = function(a, b, c) {
            i.equals3(this._stencilFunc, a, b, c) || (this._gl.stencilFunc(a, b, c), i.set3(this._stencilFunc, a, b, c))
        }, e.prototype.getStencilFunc = function(a) {
            return a = void 0 === a ? i.create() : a, i.set(a, this._stencilFunc)
        }, e.prototype.setStencilFuncSeparate = function(a, b, c, d) {
            j.equals4(this._stencilFuncSeparate, a, b, c, d) || (this._gl.stencilFuncSeparate(a, b, c, d), j.set4(this._stencilFuncSeparate, a, b, c, d))
        }, e.prototype.getStencilFuncSeparate = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._stencilFuncSeparate)
        }, e.prototype.setStencilOp = function(a, b, c) {
            i.equals3(this._stencilOp, a, b, c) || (this._gl.stencilOp(a, b, c), i.set3(this._stencilOp, a, b, c))
        }, e.prototype.getStencilOp = function(a) {
            return a = void 0 === a ? i.create() : a, i.set(a, this._stencilOp)
        }, e.prototype.setStencilOpSeparate = function(a, b, c, d) {
            j.equals4(this._stencilFuncSeparate, a, b, c, d) || (this._gl.stencilOpSeparate(a, b, c, d), j.set4(this._stencilFuncSeparate, a, b, c, d))
        }, e.prototype.getStencilOpSeparate = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._stencilOpSeparate)
        }, e.prototype.clearStencil = function(a) {
            this._gl.clearStencil(a)
        }, e.prototype.setClearColor = function(a, b, c, d) {
            j.equals4(this._clearColor, a, b, c, d) || (this._gl.clearColor(a, b, c, d), j.set4(this._clearColor, a, b, c, d))
        }, e.prototype.getClearColor = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._clearColor)
        }, e.prototype.setColorMask = function(a, b, c, d) {
            j.equals4(this._colorMask, a, b, c, d) || (this._gl.colorMask(a, b, c, d), j.set4(this._colorMask, a, b, c, d))
        }, e.prototype.getColorMask = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._colorMask)
        }, e.prototype.setDepthTest = function(a) {
            a !== this._depthTest && (a ? this._gl.enable(this._gl.DEPTH_TEST) : this._gl.disable(this._gl.DEPTH_TEST), this._depthTest = a)
        }, e.prototype.getDepthTest = function() {
            return this._depthTest
        }, e.prototype.setDepthMask = function(a) {
            a != this._depthMask && (this._gl.depthMask(a), this._depthMask = a)
        }, e.prototype.getDepthMask = function() {
            return this._depthMask
        }, e.prototype.setDepthFunc = function(a) {
            a != this._depthFunc && (this._gl.depthFunc(a), this._depthFunc = a)
        }, e.prototype.getDepthFunc = function() {
            return this._depthFunc
        }, e.prototype.setClearDepth = function(a) {
            a != this._depthClearValue && (this._gl.clearDepth(a), this._depthClearValue = a)
        }, e.prototype.getClearDepth = function() {
            return this._depthClearValue
        }, e.prototype.setDepthRange = function(a, b) {
            h.equals2(this._depthRange, a, b) || (this._gl.depthRange(a, b), this._depthRange[0] = a, this._depthRange[1] = b)
        }, e.prototype.getDepthRange = function(a) {
            return a = void 0 === a ? h.create() : a, h.set(a, this._depthRange)
        }, e.prototype.setPolygonOffset = function(a, b) {
            h.equals(this._polygonOffset, a, b) || (this._gl.polygonOffset(a, b), this._polygonOffset[0] = a, this._polygonOffset[1] = b)
        }, e.prototype.getPolygonOffset = function(a) {
            return a = void 0 === a ? h.create() : a, h.set(a, this._polygonOffset)
        }, e.prototype.setLineWidth = function(a) {
            this._lineWidth != a && (this._gl.lineWidth(a), this._lineWidth = a)
        }, e.prototype.getLineWidth = function() {
            return this._lineWidth
        }, e.prototype.setBlend = function(a) {
            a != this._blend && (a ? this._gl.enable(this._gl.BLEND) : this._gl.disable(this._gl.BLEND), this._blend = a)
        }, e.prototype.getBlend = function() {
            return this._blend
        }, e.prototype.setBlendColor = function(a, b, c, d) {
            j.equals4(this._blendColor, a, b, c, d) || (this._gl.blendColor(a, b, c, d), j.set4(this._blendColor, a, b, c, d))
        }, e.prototype.getBlendColor = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._blendColor)
        }, e.prototype.setBlendEquation = function(a) {
            a != this._blendEquation && (this._gl.blendEquation(a), this._blendEquation = a)
        }, e.prototype.getBlendEquation = function() {
            return this._blendEquation
        }, e.prototype.setBlendEquationSeparate = function(a, b) {
            h.equals2(this._blendEquationSeparate, a, b) || (this._gl.blendEquationSeparate(a, b), h.set2(this._blendEquationSeparate, a, b))
        }, e.prototype.getBlendEquationSeparate = function(a) {
            return a = void 0 === a ? h.create() : a, h.set(a, this._blendEquationSeparate)
        }, e.prototype.setBlendFunc = function(a, b) {
            h.equals2(this._blendFunc, a, b) || (this._gl.blendFunc(a, b), h.set2(this._blendFunc, a, b))
        }, e.prototype.getBlendFunc = function(a) {
            return a = void 0 === a ? h.create() : a, h.set(a, this._blendFunc)
        }, e.prototype.setBlendFuncSeparate = function(a, b, c, d) {
            j.equals4(this._blendFuncSeparate, a, b, c, d) || (this._gl.blendFuncSeparate(a, b, c, d), j.set4(this._blendFuncSeparate, a, b, c, d))
        }, e.prototype.getBlendFuncSeparate = function(a) {
            return a = void 0 === a ? j.create() : a, j.set(a, this._blendFuncSeparate)
        }, e.prototype.clear = function(a) {
            this._gl.clear(this._bitMap[a])
        }, e.prototype.setProjectionMatrix = function(a) {
            g.set(this._matrix[N], a), this._matrixSend[N] = !1
        }, e.prototype.setViewMatrix = function(a) {
            g.set(this._matrix[O], a), this._matrixSend[O] = !1
        }, e.prototype.setModelMatrix = function(a) {
            g.set(this._matrix[P], a), this._matrixSend[P] = !1
        }, e.prototype.getProjectionMatrix = function(a) {
            return a = void 0 === a ? g.create() : a, g.set(a, this._matrix[N])
        }, e.prototype.getViewMatrix = function(a) {
            return a = void 0 === a ? g.create() : a, g.set(a, this._matrix[O])
        }, e.prototype.getModelMatrix = function(a) {
            return a = void 0 === a ? g.create() : a, g.set(a, this._matrix[P])
        }, e.prototype.pushProjectionMatrix = function() {
            this._matrixStack[F].push(g.copy(this._matrix[N]))
        }, e.prototype.popProjectionMatrix = function() {
            this._matrix[N] = this._matrixStack[F].pop(), this._matrixSend[N] = !1
        }, e.prototype.pushViewMatrix = function() {
            this._matrixStack[G].push(g.copy(this._matrix[O]))
        }, e.prototype.popViewMatrix = function() {
            this._matrix[O] = this._matrixStack[G].pop(), this._matrixSend[O] = !1
        }, e.prototype.pushModelMatrix = function() {
            this._matrixStack[H].push(g.copy(this._matrix[P]))
        }, e.prototype.popModelMatrix = function() {
            this._matrix[P] = this._matrixStack[H].pop(), this._matrixSend[P] = !1
        }, e.prototype.pushMatrices = function() {
            this.pushProjectionMatrix(), this.pushViewMatrix(), this.pushModelMatrix()
        }, e.prototype.popMatrices = function() {
            this.popModelMatrix(), this.popViewMatrix(), this.popProjectionMatrix()
        }, e.prototype.loadIdentity = function() {
            g.identity(this._matrix[P]), this._matrixSend[P] = !1
        }, e.prototype.loadIdentities = function() {
            g.identity(this._matrix[N]), this._matrixSend[N] = !1, g.identity(this._matrix[O]), this._matrixSend[O] = !1, this.loadIdentity()
        }, e.prototype.scale = function(a) {
            g.scale(this._matrix[P], a), this._matrixSend[P] = !1
        }, e.prototype.translate = function(a) {
            g.translate(this._matrix[P], a), this._matrixSend[P] = !1
        }, e.prototype.rotate = function(a, b) {
            g.rotate(this._matrix[P], a, b), this._matrixSend[P] = !1
        }, e.prototype.rotateXYZ = function(a) {
            g.rotateXYZ(this._matrix[P], a), this._matrixSend[P] = !1
        }, e.prototype.rotateQuat = function(a) {
            g.mult(this._matrix[P], g.fromQuat(this._matrix4Temp, a)), this._matrixSend[P] = !1
        }, e.prototype.multMatrix = function(a) {
            g.mult(this._matrix[P], a), this._matrixSend[P] = !1
        }, e.prototype.createProgram = function(a, b, c) {
            return new k(this, a, b, c)
        }, e.prototype.bindProgram = function(a) {
            if (a !== this._program) {
                if (!a) return this._program = null, void(this._matrixTypesByUniformInProgram = {});
                a._bindInternal(), this._program = a, this._matrixSend[N] = !1, this._matrixSend[O] = !1, this._matrixSend[P] = !1, this._matrixSend[Q] = !1, this._matrixSend[R] = !1, this._matrixTypesByUniformInProgram = {};
                for (var b in l) {
                    var c = l[b];
                    a.hasUniform(c) && (this._matrixTypesByUniformInProgram[c] = this._matrixTypeByUniformNameMap[c])
                }
            }
        }, e.prototype.getProgram = function() {
            return this._program
        }, e.prototype.createBuffer = function(a, b, c, d) {
            return new n(this, a, b, c, d)
        }, e.prototype._bindBuffer = function(a) {
            var b = a.getTarget();
            this._bufferPrev[b] = this._buffer[b], a !== this._buffer[b] && this._gl.bindBuffer(b, a._getHandle()), this._buffer[b] = a
        }, e.prototype._unbindBuffer = function(a) {
            var b = a.getTarget(),
                c = this._bufferPrev[b];
            this._buffer[b] !== c && this._gl.bindBuffer(b, null !== c ? c._getHandle() : c), this._buffer[b] = c
        }, e.prototype.createVertexArray = function(a, b) {
            return new o(this, a, b)
        }, e.prototype.bindVertexArray = function(a) {
            if (a !== this._vertexArray) {
                if (!a) return this._vertexArray = null, this._vertexArrayHasIndexBuffer = !1, this._vertexArrayIndexBufferDataType = null, void(this._vertexArrayHasDivisor = !1);
                a._bindInternal(), this._vertexArray = a, this._vertexArrayHasIndexBuffer = a.hasIndexBuffer(), this._vertexArrayIndexBufferDataType = this._vertexArrayHasIndexBuffer ? a.getIndexBuffer().getDataType() : null, this._vertexArrayHasDivisor = a.hasDivisor()
            }
        }, e.prototype.getVertexArray = function() {
            return this._vertexArray
        }, e.prototype.createMesh = function(a, b, c) {
            return new p(this, a, b, c)
        }, e.prototype.bindMesh = function(a) {
            null === a ? (this._meshPrimitiveType = null, this._meshHasIndexBuffer = !1, this._meshIndexBufferDataType = null, this._meshCount = 0, this._meshHasDivisor = null) : (this._meshPrimitiveType = a._primiviteType, this._meshHasIndexBuffer = null !== a._indices, this._meshIndexBufferDataType = this._meshHasIndexBuffer ? a._indices.buffer.getDataType() : null, this._meshCount = a._count, this._meshHasDivisor = a._hasDivisor, this.bindVertexArray(a._vao)), this._mesh = a
        }, e.prototype.drawMesh = function(a) {
            this._updateMatrixUniforms(), this._meshHasIndexBuffer ? this._meshHasDivisor ? this._gl.drawElementsInstanced(this._meshPrimitiveType, this._meshCount, this._meshIndexBufferDataType, 0, a) : this._gl.drawElements(this._meshPrimitiveType, this._meshCount, this._meshIndexBufferDataType, 0) : this._meshHasDivisor ? this._gl.drawArraysInstanced(this._meshPrimitiveType, 0, this._meshCount, a) : this._gl.drawArrays(this._meshPrimitiveType, 0, this._meshCount)
        }, e.prototype.getMesh = function() {
            return this._mesh
        }, e.prototype.createTexture2D = function(a, b, c, d) {
            return new r(this, a, b, c, d)
        }, e.prototype.createTextureCube = function(a, b, c, d) {
            return new s(this, a, b, c, d)
        }, e.prototype.bindTexture = function(a, b) {
            b = b || 0, this._textures[b] != a && (this._gl.activeTexture(this._gl.TEXTURE0 + b), a && a._bindInternal(), this._textures[b] = a)
        }, e.prototype.getTexture = function(a) {
            return a = a || 0, this._textures[a]
        }, e.prototype.createFramebuffer = function(a, b) {
            return new q(this, a, b)
        }, e.prototype.bindFramebuffer = function(a) {
            a = void 0 === a ? null : a, a != this._framebuffer && (a ? a._bindInternal() : this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null), this._framebuffer = a)
        }, e.prototype.getFramebuffer = function() {
            return this._framebuffer
        }, e.prototype._updateMatrixUniforms = function() {
            if (!(void 0 === this._matrixTypesByUniformInProgram[l.NORMAL_MATRIX] || this._matrixSend[O] && this._matrixSend[P])) {
                var a = g.set(this._matrix4Temp, this._matrix[O]);
                g.mult(a, this._matrix[P]), g.invert(a), g.transpose(a), f.fromMat4(this._matrix[Q], a), this._matrixSend[Q] = !1
            }
            void 0 === this._matrixTypesByUniformInProgram[l.INVERSE_VIEW_MATRIX] || this._matrixSend[O] || (g.invert(g.set(this._matrix[R], this._matrix[O])), this._matrixSend[R] = !1);
            for (var b in this._matrixTypesByUniformInProgram) {
                var c = this._matrixTypesByUniformInProgram[b];
                if (!this._matrixSend[c]) {
                    var d = this._matrixTempByTypeMap[c];
                    d.set(this._matrix[c]), this._program.setUniform(b, d), this._matrixSend[c] = !0
                }
            }
        }, e.prototype.drawArrays = function(a, b, c) {
            this._updateMatrixUniforms(), this._gl.drawArrays(a, b, c)
        }, e.prototype.drawArraysInstanced = function(a, b, c, d) {
            this._updateMatrixUniforms(), this._gl.drawArraysInstanced(a, b, c, d)
        }, e.prototype.drawElements = function(a, b, c) {
            this._updateMatrixUniforms(), this._gl.drawElements(a, b, this._vertexArrayIndexBufferDataType, c)
        }, e.prototype.drawElementsInstanced = function(a, b, c, d) {
            this._updateMatrixUniforms(), this._gl.drawElementsInstanced(a, b, this._vertexArrayIndexBufferDataType, c, d)
        }, e.prototype.draw = function(a, b, c) {
            this._updateMatrixUniforms(), this._vertexArrayHasIndexBuffer ? this._vertexArrayHasDivisor ? this._gl.drawElementsInstanced(a, c, this._vertexArrayIndexBufferDataType, 0, 1e3) : this._gl.drawElements(a, c, this._vertexArrayIndexBufferDataType, b) : this._vertexArrayHasDivisor ? this._gl.drawArraysInstanced(a, b, c, 1e3) : this._gl.drawArrays(a, b, c)
        }, e.prototype.readPixels = function(a, b, c, d, e, f, g) {
            this._gl.readPixels(a, b, c, d, e, f, g)
        }, e.prototype.isSupported = function(a) {
            return this._caps[a]
        }, b.exports = e
    }, {
        "./Buffer": 128,
        "./Framebuffer": 130,
        "./Mesh": 131,
        "./Program": 132,
        "./ProgramAttributeLocation": 133,
        "./ProgramUniform": 134,
        "./Texture2D": 135,
        "./TextureCube": 136,
        "./VertexArray": 137,
        "is-browser": 138,
        "pex-math/Mat3": 167,
        "pex-math/Mat4": 168,
        "pex-math/Vec2": 171,
        "pex-math/Vec3": 172,
        "pex-math/Vec4": 173
    }],
    130: [function(a, b, c) {
        function d(a, b, c) {
            this._ctx = a;
            var d = a.getGL();
            if (this._handle = d.createFramebuffer(), this._colorAttachments = [], this._colorAttachmentsPositions = [], this._depthAttachment = null, this._width = 0, this._height = 0, e && (this._webglDrawBuffersExt = d.getExtension("WEBGL_draw_buffers"), console.log(this._webglDrawBuffersExt)), b && b[0] ? (this._width = b[0].texture.getWidth(), this._height = b[0].texture.getHeight()) : c && (this._width = c.texture.getWidth(), this._height = c.texture.getHeight()), a.bindFramebuffer(this), b)
                for (var f = 0; f < b.length; f++) {
                    var g = b[f],
                        h = g.texture,
                        i = g.level || 0,
                        j = h.getTarget() || g.target,
                        k = h.getHandle();
                    d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0 + f, j, k, i), this._colorAttachments.push(g), this._colorAttachmentsPositions.push(d.COLOR_ATTACHMENT0 + f)
                }
            if (c) {
                var l = c.texture,
                    j = l.getTarget() || c.target,
                    i = c.level || 0,
                    k = l.getHandle();
                d.framebufferTexture2D(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, j, k, i), this._depthAttachment = c
            }
            a.bindFramebuffer(null)
        }
        var e = a("is-browser");
        d.prototype.setColorAttachment = function(a, b, c, d) {
            var e = this._ctx.getGL();
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + a, b, c, d)
        }, d.prototype.getColorAttachment = function(a) {
            return this._colorAttachments[a]
        }, d.prototype.setDepthAttachment = function(a, b, c) {
            var d = this._ctx.getGL();
            d.framebufferTexture2D(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, a, b, c)
        }, d.prototype.getDepthAttachment = function() {
            return this._depthAttachment
        }, d.prototype.getWidth = function() {
            return this._width
        }, d.prototype.getHeight = function() {
            return this._height
        }, d.prototype._bindInternal = function() {
            var a = this._ctx.getGL();
            a.bindFramebuffer(a.FRAMEBUFFER, this._handle), this._colorAttachmentsPositions.length > 1 && (e ? this._webglDrawBuffersExt.drawBuffersWEBGL(this._colorAttachmentsPositions) : a.drawBuffers(this._colorAttachmentsPositions))
        }, b.exports = d
    }, {
        "is-browser": 138
    }],
    131: [function(a, b, c) {
        function d(a, b, c) {
            for (var d = 0, e = a.length; e > d; d++)
                for (var f = 0; c > f; f++) b[d * c + f] = a[d][f];
        }

        function e(a) {
            return 0 == a.length || void 0 === a[0].length
        }

        function f(a, b, c, f) {
            this._ctx = a;
            var g = [];
            this._attributes = [], this._attributesMap = [], this._hasDivisor = !1;
            for (var h = 0, i = 0, j = b.length; j > i; i++) {
                var k = b[i],
                    l = k.data,
                    m = k.location,
                    n = k.size || l[0] && l[0].length ? l[0].length : 1;
                if (!l.length) throw new Error("Mesh: Empty attribute data is not supported");
                if (void 0 === m) throw new Error("Mesh: Unknown attribute location at index " + i);
                var o = new Float32Array(l.length * n);
                e(l) ? o.set(l) : d(l, o, n);
                var p = k.usage || a.STATIC_DRAW,
                    q = a.createBuffer(a.ARRAY_BUFFER, o, p),
                    r = {
                        buffer: q,
                        location: m,
                        size: k.size || n,
                        divisor: k.divisor || null
                    },
                    s = {
                        data: l,
                        dataArray: o,
                        buffer: q,
                        location: m,
                        size: k.size || n
                    };
                g.push(r), this._attributes.push(s), this._attributesMap[m] = s, m == a.ATTRIB_POSITION && (h = l.length), null !== r.divisor && (this._hasDivisor = !0)
            }
            var t = 0;
            if (c) {
                var u = c.data,
                    v = c.size || (u[0] && u[0].length ? u[0].length : 1),
                    w = c.type;
                w || (w = a.isSupported(a.CAPS_ELEMENT_INDEX_UINT) ? a.UNSIGNED_INT : a.UNSIGNED_SHORT);
                var x = w === a.UNSIGNED_INT ? Uint32Array : Uint16Array,
                    y = new x(u.length * v);
                e(u) ? y.set(u) : d(u, y, v);
                var p = c.usage || a.STATIC_DRAW,
                    z = a.createBuffer(a.ELEMENT_ARRAY_BUFFER, y, p);
                void 0 === f && (1 == v && (f = a.POINTS), 2 == v && (f = a.LINES), 3 == v && (f = a.TRIANGLES)), this._indices = {
                    data: u,
                    dataArray: y,
                    buffer: z,
                    size: v
                }, t = u.length * v
            } else this._indices = null;
            void 0 === f && (f = a.TRIANGLES), this._primiviteType = f, this._count = t || h, this._offset = 0, this._vao = a.createVertexArray(g, this._indices ? this._indices.buffer : null)
        }
        f.prototype.getAttribute = function(a) {
            return this._attributesMap[a]
        }, f.prototype.updateAttribute = function(a, b) {
            var c = this._ctx,
                f = this._attributesMap[a];
            if (!f) throw new Error("Mesh.updateAttribute: invalid attribute loaction");
            b.length * f.size != f.dataArray.length && (f.dataArray = new Float32Array(b.length * f.size)), e(b) ? f.dataArray.set(b) : d(b, f.dataArray, f.size), f.data = b, a == c.ATTRIB_POSITION && null === this._indices && (this._count = b.length), f.buffer.bufferData(f.dataArray)
        }, f.prototype.getIndices = function() {
            return this._indices
        }, f.prototype.updateIndices = function(a) {
            var b = this._indices;
            if (!b) throw new Error("Mesh.updateIndices: mesh has no indices to update");
            a.length * b.size != b.dataArray.length && (b.dataArray instanceof Uint32Array ? b.dataArray = new Uint32Array(a.length * b.size) : b.dataArray = new Uint16Array(a.length * b.size)), e(a) ? b.dataArray.set(a) : d(a, b.dataArray, b.size), b.data = a, this._count = a.length * b.size, b.buffer.bufferData(b.dataArray)
        }, b.exports = f
    }, {}],
    132: [function(a, b, c) {
        function d(a, b, c, d) {
            var e = this._gl = a.getGL();
            this._handle = e.createProgram(), this._attributes = {}, this._attributesPerLocation = {}, this._uniforms = {}, this._uniformSetterMap = {}, b && this.update(b, c, d)
        }
        var e = {
                0: "aPosition",
                1: "aColor",
                2: "aTexCoord0",
                3: "aTexCoord1",
                4: "aTexCoord2",
                5: "aTexCoord3",
                6: "aNormal",
                7: "aTangent",
                8: "aBitangent",
                9: "aBoneIndex",
                10: "aBoneWeight",
                11: "aCustom0",
                12: "aCustom1",
                13: "aCustom2",
                14: "aCustom3",
                15: "aCustom4"
            },
            f = 16,
            g = 'Uniform "%s" is not defined.',
            h = "Wrong number of arguments.",
            i = 'Unsupported uniform type "%s".',
            j = 'Attribute "%s" is not present in program.';
        d.prototype.getHandle = function() {
            return this._handle
        }, d.prototype._bindInternal = function() {
            this._gl.useProgram(this._handle)
        }, d.prototype.update = function(a, b, c) {
            var d = this._gl,
                g = this._handle,
                h = this._compileSource(d.VERTEX_SHADER, a),
                i = this._compileSource(d.FRAGMENT_SHADER, b);
            d.attachShader(g, h), d.attachShader(g, i);
            for (var k = 0; f > k; k++) {
                var l = c && c[k] || e[k];
                d.bindAttribLocation(g, k, l)
            }
            if (d.linkProgram(g), !d.getProgramParameter(g, d.LINK_STATUS)) throw new Error("PROGRAM: " + d.getProgramInfoLog(g));
            d.deleteShader(h), d.deleteShader(i), this._updateUniforms(), this._updateAttributes();
            for (var k in c) {
                var l = c[k];
                if (void 0 === this._attributes[l]) throw new Error(j.replace("%s", l))
            }
            this._updateUniformSetterMap()
        }, d.prototype._updateUniforms = function() {
            for (var a, b, c = this._gl, d = this._handle, e = c.getProgramParameter(d, c.ACTIVE_UNIFORMS), f = this._uniforms = {}, g = 0; e > g; ++g) a = c.getActiveUniform(d, g), b = a.name, f[b] = {
                type: a.type,
                location: c.getUniformLocation(d, b)
            }
        }, d.prototype._updateAttributes = function() {
            for (var a, b, c, d = this._gl, e = this._handle, f = d.getProgramParameter(e, d.ACTIVE_ATTRIBUTES), g = this._attributes = {}, h = this._attributesPerLocation = {}, i = 0; f > i; ++i) a = d.getActiveAttrib(e, i), b = a.name, c = g[b] = {
                type: a.type,
                location: d.getAttribLocation(e, b)
            }, h[c.location] = c
        }, d.prototype._compileSource = function(a, b) {
            var c = this._gl,
                d = c.createShader(a);
            if (c.shaderSource(d, b + "\n"), c.compileShader(d), !c.getShaderParameter(d, c.COMPILE_STATUS)) {
                var e = a === c.VERTEX_SHADER ? "Vertex" : "Fragment";
                throw console.log(e + " shader compilation failed"), console.log(b), new Error(e + " shader error: " + c.getShaderInfoLog(d))
            }
            return d
        }, d.prototype._updateUniformSetterMap = function() {
            var a = this._gl;
            this._uniformSetterMap = {};
            for (var b in this._uniforms) {
                var c = this._uniforms[b].type;
                if (void 0 === this._uniformSetterMap[c]) switch (c) {
                    case a.INT:
                    case a.BOOL:
                    case a.SAMPLER_2D:
                    case a.SAMPLER_CUBE:
                        this._uniformSetterMap[a.INT] = this._uniformSetterMap[a.INT] || function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== d) throw new Error(h);
                            a.uniform1i(b, c)
                        }, this._uniformSetterMap[c] = this._uniformSetterMap[a.INT];
                        break;
                    case a.FLOAT:
                        this._uniformSetterMap[c] = function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== d) throw new Error(h);
                            a.uniform1f(b, c)
                        };
                        break;
                    case a.FLOAT_VEC2:
                        this._uniformSetterMap[c] = function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== e) throw new Error(h);
                            void 0 === d ? a.uniform2fv(b, c) : a.uniform2f(b, c, d)
                        };
                        break;
                    case a.FLOAT_VEC3:
                        this._uniformSetterMap[c] = function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== f || void 0 !== d && void 0 === e) throw new Error(h);
                            void 0 === d ? a.uniform3fv(b, c) : a.uniform3f(b, c, d, e)
                        };
                        break;
                    case a.FLOAT_VEC4:
                        this._uniformSetterMap[c] = function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== d && void 0 === e || void 0 !== e && void 0 === f) throw new Error(h);
                            void 0 === d ? a.uniform4fv(b, c) : a.uniform4f(b, c, d, e, f)
                        };
                        break;
                    case a.FLOAT_MAT2:
                        this._uniformSetterMap[c] = function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== d) throw new Error(h);
                            a.uniformMatrix2fv(b, !1, c)
                        };
                        break;
                    case a.FLOAT_MAT3:
                        this._uniformSetterMap[c] = function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== d) throw new Error(h);
                            a.uniformMatrix3fv(b, !1, c)
                        };
                        break;
                    case a.FLOAT_MAT4:
                        this._uniformSetterMap[c] = function(b, c, d, e, f) {
                            if (void 0 === c || void 0 !== d) throw new Error(h);
                            a.uniformMatrix4fv(b, !1, c)
                        };
                        break;
                    default:
                        throw new Error(i.replace("%s", c))
                }
            }
        }, d.prototype.setUniform = function(a, b, c, d, e) {
            var f = this._uniforms[a];
            if (void 0 === f) throw new Error(g.replace("%s", a));
            this._uniformSetterMap[f.type](f.location, b, c, d, e)
        }, d.prototype.hasAttributeAtLocation = function(a) {
            return void 0 !== this._attributesPerLocation[a]
        }, d.prototype.hasUniform = function(a) {
            return void 0 !== this._uniforms[a]
        }, d.prototype.dispose = function() {
            return this._handle ? (this._gl.deleteProgram(this._handle), this._handle = null, this) : this
        }, b.exports = d
    }, {}],
    133: [function(a, b, c) {
        var d = {
            POSITION: 0,
            COLOR: 1,
            TEX_COORD_0: 2,
            TEX_COORD_1: 3,
            TEX_COORD_2: 4,
            TEX_COORD_3: 5,
            NORMAL: 6,
            TANGENT: 7,
            BITANGENT: 8,
            BONE_INDEX: 9,
            BONE_WEIGHT: 10,
            CUSTOM_0: 11,
            CUSTOM_1: 12,
            CUSTOM_2: 13,
            CUSTOM_3: 14,
            CUSTOM_4: 15
        };
        b.exports = d
    }, {}],
    134: [function(a, b, c) {
        var d = {
            PROJECTION_MATRIX: "uProjectionMatrix",
            VIEW_MATRIX: "uViewMatrix",
            MODEL_MATRIX: "uModelMatrix",
            NORMAL_MATRIX: "uNormalMatrix",
            INVERSE_VIEW_MATRIX: "uInverseViewMatrix"
        };
        b.exports = d
    }, {}],
    135: [function(a, b, c) {
        function d(a, b, c, d, e) {
            this._ctx = a;
            var f = a.getGL();
            this._handle = f.createTexture(), this._target = f.TEXTURE_2D, this._width = c || b && b.width || 0, this._height = d || b && b.height || 0, this.update(b, c, d, e)
        }

        function e(a, b, c) {
            for (var d = a.length / (b * c), e = 0; c / 2 > e; e++)
                for (var f = 0; b > f; f++)
                    for (var g = 0; d > g; g++) {
                        var h = (e * b + f) * d + g,
                            i = ((c - e - 1) * b + f) * d + g,
                            j = a[h];
                        a[h] = a[i], a[i] = j
                    }
        }
        var f = a("is-browser"),
            g = f ? {} : a("plask");
        d.prototype.update = function(a, b, c, d) {
            var h = this._ctx,
                i = h.getGL();
            b = this._width = b || a && a.width || 0, c = this._height = c || a && a.height || 0, h.pushState(i.TEXTURE_BIT), h.bindTexture(this, 0);
            var j = d && d.format || i.RGBA,
                k = d && d.format || i.RGBA,
                l = d && d.repeat || !1,
                m = d && d.type || i.UNSIGNED_BYTE,
                n = d && d.lod || 0,
                o = d && d.compressed || !1,
                p = d && void 0 !== d.flipY ? d.flipY : !0,
                l = d && d.repeat || !1,
                q = d && d.magFilter || i.LINEAR,
                r = d && d.minFilter || i.LINEAR;
            d && d.mipmap && (r = i.LINEAR_MIPMAP_LINEAR);
            var s = l ? i.REPEAT : i.CLAMP_TO_EDGE,
                t = l ? i.REPEAT : i.CLAMP_TO_EDGE;
            if (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, q), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, r), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, s), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, t), k == h.DEPTH_COMPONENT && !h.isSupported(h.CAPS_DEPTH_TEXTURE)) throw new Error("Texture2D - Depth Texture format is not supported");
            if (m == h.FLOAT && !h.isSupported(h.CAPS_TEXTURE_FLOAT)) throw new Error("Texture2D - Float type is not supported");
            if (m == h.HALF_FLOAT && !h.isSupported(h.CAPS_TEXTURE_HALF_FLOAT)) throw new Error("Texture2D - Half Float type is not supported");
            if (a)
                if (f) {
                    if ("dxt1" == o) {
                        var u = i.getExtension("WEBGL_compressed_texture_s3tc");
                        i.compressedTexImage2D(i.TEXTURE_2D, n, u.COMPRESSED_RGB_S3TC_DXT1_EXT, b, c, 0, a)
                    }
                    if ("dxt5" == o) {
                        var u = i.getExtension("WEBGL_compressed_texture_s3tc");
                        i.compressedTexImage2D(i.TEXTURE_2D, n, u.COMPRESSED_RGBA_S3TC_DXT5_EXT, b, c, 0, a)
                    } else i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, p), a.width && a.height ? i.texImage2D(i.TEXTURE_2D, n, j, k, m, a) : i.texImage2D(i.TEXTURE_2D, n, j, b, c, 0, k, m, a)
                } else a instanceof g.SkCanvas ? p ? i.texImage2DSkCanvas(this._target, n, a) : i.texImage2DSkCanvasNoFlip(this._target, n, a) : o ? ("dxt1" == o && i.compressedTexImage2D(i.TEXTURE_2D, 0, i.COMPRESSED_RGB_S3TC_DXT1_EXT, b, c, 0, a), "dxt5" == o && i.compressedTexImage2D(i.TEXTURE_2D, n, i.COMPRESSED_RGBA_S3TC_DXT5_EXT, b, c, 0, a)) : (p && e(a, b, c), i.texImage2D(i.TEXTURE_2D, n, j, b, c, 0, k, m, a), p && e(a, b, c));
            else i.texImage2D(i.TEXTURE_2D, n, j, b, c, 0, k, m, null);
            d && d.mipmap && i.generateMipmap(i.TEXTURE_2D), h.popState(i.TEXTURE_BIT)
        }, d.prototype._bindInternal = function() {
            var a = this._ctx.getGL();
            a.bindTexture(this._target, this._handle)
        }, d.prototype.getHandle = function() {
            return this._handle
        }, d.prototype.getTarget = function() {
            return this._target
        }, d.prototype.getWidth = function() {
            return this._width
        }, d.prototype.getHeight = function() {
            return this._height
        }, d.prototype.dispose = function() {
            var a = this._ctx.getGL();
            a.deleteTexture(this._handle), this._width = 0, this._height = 0
        }, b.exports = d
    }, {
        "is-browser": 138,
        plask: 49
    }],
    136: [function(a, b, c) {
        function d(a, b, c, d, e) {
            this._ctx = a;
            var f = a.getGL();
            this._handle = f.createTexture(), this._target = f.TEXTURE_CUBE_MAP, this._width = c || b && b[0] && b[0].data.width || 0, this._height = d || b && b[0] && b[0].data.height || 0;
            var g = (e && e.format || f.RGBA, e && e.format || f.RGBA),
                h = e && e.repeat || !1,
                i = e && e.type || f.UNSIGNED_BYTE,
                j = (e && e.flipY || !1, e && e.magFilter || f.LINEAR),
                k = e && e.minFilter || f.LINEAR;
            a.bindTexture(this, 0);
            var l = h ? f.REPEAT : f.CLAMP_TO_EDGE,
                m = h ? f.REPEAT : f.CLAMP_TO_EDGE;
            if (f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_MAG_FILTER, j), f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_MIN_FILTER, k), f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_WRAP_S, l), f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_WRAP_T, m), g == f.DEPTH_COMPONENT && !a.isSupported(a.CAPS_DEPTH_TEXTURE)) throw new Error("TextureCube - Depth Texture format is not supported");
            if (i == f.FLOAT && !a.isSupported(a.CAPS_TEXTURE_FLOAT)) throw new Error("TextureCube - Float type is not supported");
            if (i == f.HALF_FLOAT && !a.isSupported(a.CAPS_TEXTURE_HALF_FLOAT)) throw new Error("TextureCube - Half Float type is not supported");
            this.update(b, c, d, e)
        }
        var e = a("is-browser"),
            f = e ? {} : a("plask");
        d.prototype.update = function(a, b, c, d) {
            var g = this._ctx,
                h = g.getGL();
            g.bindTexture(this, 0);
            var i = d && d.format || h.RGBA,
                j = d && d.format || h.RGBA,
                k = (d && d.repeat || !1, d && d.type || h.UNSIGNED_BYTE),
                l = d && d.flipY || !1,
                m = d && d.lod || 0,
                n = a ? a.length : 6;
            this._width = b || a && a[0] && a[0].data.width || 0, this._height = c || a && a[0] && a[0].data.height || 0;
            for (var o = 0; n > o; o++) {
                var p = a ? a[o] : null,
                    q = a ? p.data : null,
                    b = a ? p.width : b,
                    c = a ? p.height : b,
                    m = a ? p.lod || 0 : 0,
                    r = a ? p.face || o : o,
                    s = g.TEXTURE_CUBE_MAP_POSITIVE_X + r;
                q ? e ? (h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, l), q.width && q.height ? h.texImage2D(s, m, i, j, k, q) : (console.log(k, "gl.FLOAT", g.FLOAT), h.texImage2D(s, m, i, b, c, 0, j, k, q))) : q instanceof f.SkCanvas ? l ? h.texImage2DSkCanvas(s, m, q) : h.texImage2DSkCanvasNoFlip(s, m, q) : h.texImage2D(s, m, i, b, c, 0, j, k, q) : h.texImage2D(s, m, i, b, c, 0, j, k, null)
            }
        }, d.prototype._bindInternal = function() {
            var a = this._ctx.getGL();
            a.bindTexture(this._target, this._handle)
        }, d.prototype.getHandle = function() {
            return this._handle
        }, d.prototype.getTarget = function() {
            return this._target
        }, d.prototype.getWidth = function() {
            return this._width
        }, d.prototype.getHeight = function() {
            return this._height
        }, d.prototype.dispose = function() {
            var a = this._ctx.getGL();
            a.deleteTexture(this._handle), this._width = 0, this._height = 0
        }, b.exports = d
    }, {
        "is-browser": 138,
        plask: 49
    }],
    137: [function(a, b, c) {
        function d(a, b, c) {
            this._ctx = a, this._attributes = {}, this._attributesPerLocation = {}, this._arrayBuffers = [], this._indexBuffer = void 0 !== c ? c : null, this._hasDivisor = !1;
            for (var d, i, j, k, l, m, n = 0, o = b.length; o > n; ++n) {
                if (d = b[n], void 0 === d.location) throw new Error(f.replace("%s", "location"));
                if (void 0 === d.size) throw new Error(f.replace("%s", "size"));
                if (void 0 === d.buffer) throw new Error(f.replace("%s", "buffer"));
                i = {};
                for (var p in d) {
                    if (j = e[p], void 0 === j && "buffer" !== p) throw new Error(g.replace("%s", p));
                    i[p] = d[p]
                }
                for (var p in e) j = e[p], void 0 === i[p] && (i[p] = j);
                for (var q in this._attributes) {
                    l = this._attributes[q];
                    for (var r = 0; r < l.length; ++r)
                        if (l[r].location === d.location) throw new Error(h.replace("%s", d.location))
                }
                k = i.buffer, m = this._arrayBuffers.indexOf(k), -1 == m && (this._arrayBuffers.push(k), m = this._arrayBuffers.length - 1, this._attributes[m] = []), i.type = k.getDataType(), delete i.buffer, this._hasDivisor = this._hasDivisor || null !== i.divisor, this._attributes[m].push(i), this._attributesPerLocation[i.location] = i
            }
        }
        var e = {
                enabled: !0,
                location: -1,
                size: -1,
                type: null,
                normalized: !1,
                stride: 0,
                offset: 0,
                divisor: null,
                prevEnabled: !1
            },
            f = 'Attribute property "%s" missing.',
            g = 'Attribute property "%s" not valid.',
            h = 'Attribute at location "%s" has already been defined.';
        d.prototype.getAttribute = function(a) {
            return this._attributesPerLocation[a]
        }, d.prototype.hasIndexBuffer = function() {
            return null !== this._indexBuffer
        }, d.prototype.getIndexBuffer = function() {
            return this._indexBuffer
        }, d.prototype.hasDivisor = function() {
            return this._hasDivisor
        }, d.prototype._bindInternal = function() {
            for (var a, b, c, d = this._ctx, e = d.getGL(), f = this._arrayBuffers, g = this._attributes, h = 0, i = f.length; i > h; ++h) {
                d._bindBuffer(f[h]), a = g[h];
                for (var j = 0, k = a.length; k > j; ++j) b = a[j], c = b.location, b.enabled ? (e.enableVertexAttribArray(c), e.vertexAttribPointer(c, b.size, b.type, b.normalized, b.stride, b.offset), null !== b.divisor && e.vertexAttribDivisor(c, b.divisor)) : e.disableVertexAttribArray(c)
            }
            null !== this._indexBuffer && d._bindBuffer(this._indexBuffer)
        }, b.exports = d
    }, {}],
    138: [function(a, b, c) {
        arguments[4][103][0].apply(c, arguments)
    }, {
        dup: 103
    }],
    139: [function(a, b, c) {
        var d = a("./FXStage"),
            e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\nuniform sampler2D tex0;\nuniform sampler2D tex1;\nuniform float scale;\n\nvoid main() {\n  vec4 color = texture2D(tex0, vTexCoord).rgba;\n  vec4 color2 = texture2D(tex1, vTexCoord).rgba;\n\n  gl_FragColor = color + color2 * scale;\n}\n";
        d.prototype.add = function(a, b) {
            var c = this.ctx;
            b = b || {}, scale = void 0 !== b.scale ? b.scale : 1;
            var d = this.getOutputSize(b.width, b.height),
                g = this.getRenderTarget(d.width, d.height, b.depth, b.bpp),
                h = this.getShader(e, f);
            return c.pushState(c.FRAMEBUFFER_BIT | c.TEXTURE_BIT | c.PROGRAM_BIT), c.bindFramebuffer(g), c.setClearColor(0, 0, 0, 0), c.clear(c.COLOR_BIT | c.DEPTH_BIT), c.bindTexture(this.getSourceTexture(), 0), c.bindTexture(this.getSourceTexture(a), 1), c.bindProgram(h), h.setUniform("tex0", 0), h.setUniform("tex1", 1), h.setUniform("scale", scale), this.drawFullScreenQuad(d.width, d.height, null, h), c.popState(c.FRAMEBUFFER_BIT | c.TEXTURE_BIT | c.PROGRAM_BIT), this.asFXStage(g, "add")
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    140: [function(a, b, c) {
        var d = a("./FXStage");
        d.prototype.blit = function(a) {
            a = a || {};
            var b = this.getOutputSize(a.width, a.height),
                c = a.x || 0,
                d = a.y || 0;
            return this.drawFullScreenQuadAt(c, d, b.width, b.height, this.getSourceTexture()), this
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    141: [function(a, b, c) {
        var d = a("./FXStage"),
            e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\n\nuniform sampler2D image;\nuniform vec2 imageSize;\n\nvoid main() {\n  vec2 texel = vec2(1.0 / imageSize.x, 1.0 / imageSize.y);\n\n  vec4 color = vec4(0.0);\n  color += 0.25 * texture2D(image, vTexCoord + vec2(texel.x * -1.0, 0.0));\n  color += 0.50 * texture2D(image, vTexCoord);\n  color += 0.25 * texture2D(image, vTexCoord + vec2(texel.x *  1.0, 0.0));\n  gl_FragColor = color;\n}\n",
            g = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec2 vTexCoord;\n\nuniform sampler2D image;\nuniform vec2 imageSize;\n\nvoid main() {\n  vec2 texel = vec2(1.0 / imageSize.x, 1.0 / imageSize.y);\n\n  vec4 color = vec4(0.0);\n  color += 0.25 * texture2D(image, vTexCoord + vec2(0.0, texel.y * -1.0));\n  color += 0.50 * texture2D(image, vTexCoord);\n  color += 0.25 * texture2D(image, vTexCoord + vec2(0.0, texel.y *  1.0));\n  gl_FragColor = color;\n}\n";
        d.prototype.blur3 = function(a) {
            a = a || {};
            var b = this.getOutputSize(a.width, a.height),
                c = this.getRenderTarget(b.width, b.height, a.depth, a.bpp),
                d = this.getRenderTarget(b.width, b.height, a.depth, a.bpp),
                h = this.getSourceTexture(),
                i = this.getShader(e, f),
                j = this.getShader(e, g),
                k = this.ctx;
            return k.pushState(k.PROGRAM_BIT | k.FRAMEBUFFER_BIT), k.bindFramebuffer(c), k.setClearColor(0, 0, 0, 0), k.clear(k.COLOR_BIT | k.DEPTH_BIT), this.drawFullScreenQuad(b.width, b.height, h, i), k.bindFramebuffer(d), k.setClearColor(0, 0, 0, 0), k.clear(k.COLOR_BIT | k.DEPTH_BIT), this.drawFullScreenQuad(b.width, b.height, c.getColorAttachment(0).texture, j), k.popState(k.PROGRAM_BIT | k.FRAMEBUFFER_BIT), this.asFXStage(d, "blur3")
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    142: [function(a, b, c) {
        var d = a("./FXStage"),
            e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\n\nuniform sampler2D image;\nuniform vec2 imageSize;\n\nvoid main() {\n    vec2 texel = vec2(1.0 / imageSize.x, 1.0 / imageSize.y);\n\n    vec4 color = vec4(0.0);\n    color += 1.0/16.0 * texture2D(image, vTexCoord + vec2(texel.x * -2.0, 0.0));\n    color += 4.0/16.0 * texture2D(image, vTexCoord + vec2(texel.x * -1.0, 0.0));\n    color += 6.0/16.0 * texture2D(image, vTexCoord + vec2(texel.x *  0.0, 0.0));\n    color += 4.0/16.0 * texture2D(image, vTexCoord + vec2(texel.x *  1.0, 0.0));\n    color += 1.0/16.0 * texture2D(image, vTexCoord + vec2(texel.x *  2.0, 0.0));\n    gl_FragColor = color;\n}\n",
            g = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\n\nuniform sampler2D image;\nuniform vec2 imageSize;\n\nvoid main() {\n    vec2 texel = vec2(1.0 / imageSize.x, 1.0 / imageSize.y);\n\n    vec4 color = vec4(0.0);\n    color += 1.0/16.0 * texture2D(image, vTexCoord + vec2(0.0, texel.y * -2.0));\n    color += 4.0/16.0 * texture2D(image, vTexCoord + vec2(0.0, texel.y * -1.0));\n    color += 6.0/16.0 * texture2D(image, vTexCoord + vec2(0.0, texel.y *  0.0));\n    color += 4.0/16.0 * texture2D(image, vTexCoord + vec2(0.0, texel.y *  1.0));\n    color += 1.0/16.0 * texture2D(image, vTexCoord + vec2(0.0, texel.y *  2.0));\n    gl_FragColor = color;\n}\n";
        d.prototype.blur5 = function(a) {
            a = a || {};
            var b = this.getOutputSize(a.width, a.height),
                c = this.getRenderTarget(b.width, b.height, a.depth, a.bpp),
                d = this.getRenderTarget(b.width, b.height, a.depth, a.bpp),
                h = this.getSourceTexture(),
                i = this.getShader(e, f),
                j = this.getShader(e, g),
                k = this.ctx;
            return k.pushState(k.PROGRAM_BIT | k.FRAMEBUFFER_BIT), k.bindFramebuffer(c), k.setClearColor(0, 0, 0, 0), k.clear(k.COLOR_BIT | k.DEPTH_BIT), this.drawFullScreenQuad(b.width, b.height, h, i), k.bindFramebuffer(d), k.setClearColor(0, 0, 0, 0), k.clear(k.COLOR_BIT | k.DEPTH_BIT), this.drawFullScreenQuad(b.width, b.height, c.getColorAttachment(0).texture, j), k.popState(k.PROGRAM_BIT | k.FRAMEBUFFER_BIT), this.asFXStage(d, "blur5")
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    143: [function(a, b, c) {
        var d = a("./FXStage"),
            e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\n\nuniform sampler2D image;\nuniform vec2 imageSize;\n\nvoid main() {\n    vec2 texel = vec2(1.0 / imageSize.x, 1.0 / imageSize.y);\n    vec4 color = vec4(0.0);\n    color += texture2D(image, vTexCoord + vec2(texel.x * -1.0, texel.y * -1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  0.0, texel.y * -1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -1.0, texel.y *  0.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  0.0, texel.y *  0.0));\n    gl_FragColor = color / 4.0;\n}\n";
        d.prototype.downsample2 = function(a) {
            a = a || {};
            var b = this.getOutputSize(a.width, a.height);
            b.width /= 2, b.height /= 2;
            var c = this.getRenderTarget(b.width, b.height, a.depth, a.bpp),
                d = this.getSourceTexture(),
                g = this.getShader(e, f),
                h = this.ctx;
            return h.pushState(h.FRAMEBUFFER_BIT), h.bindFramebuffer(c), h.setClearColor(0, 0, 0, 0), h.clear(h.COLOR_BIT | h.DEPTH_BIT), this.drawFullScreenQuad(b.width, b.height, d, g), h.popState(h.FRAMEBUFFER_BIT), this.asFXStage(c, "downsample2")
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    144: [function(a, b, c) {
        var d = a("./FXStage"),
            e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\n\nuniform sampler2D image;\nuniform vec2 imageSize;\n\nvoid main() {\n    vec2 texel = vec2(1.0 / imageSize.x, 1.0 / imageSize.y);\n    vec4 color = vec4(0.0);\n    color += texture2D(image, vTexCoord + vec2(texel.x * -2.0, texel.y * -2.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -1.0, texel.y * -2.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  0.0, texel.y * -2.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  1.0, texel.y * -2.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -2.0, texel.y * -1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -1.0, texel.y * -1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  0.0, texel.y * -1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  1.0, texel.y * -1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -2.0, texel.y *  0.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -1.0, texel.y *  0.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  0.0, texel.y *  0.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  1.0, texel.y *  0.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -2.0, texel.y *  1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x * -1.0, texel.y *  1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  0.0, texel.y *  1.0));\n    color += texture2D(image, vTexCoord + vec2(texel.x *  1.0, texel.y *  1.0));\n    gl_FragColor = color / 16.0;\n}\n";
        d.prototype.downsample4 = function(a) {
            a = a || {};
            var b = this.getOutputSize(a.width, a.height);
            b.width /= 4, b.height /= 4;
            var c = this.getRenderTarget(b.width, b.height, a.depth, a.bpp),
                d = this.getSourceTexture(),
                g = this.getShader(e, f),
                h = this.ctx;
            return h.pushState(h.FRAMEBUFFER_BIT), h.bindFramebuffer(c), h.setClearColor(0, 0, 0, 0), h.clear(h.COLOR_BIT | h.DEPTH_BIT), this.drawFullScreenQuad(b.width, b.height, d, g), h.popState(h.FRAMEBUFFER_BIT), this.asFXStage(c, "downsample4")
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    145: [function(a, b, c) {
        function d() {
            this.cache = []
        }
        d.prototype.getResource = function(a, b) {
            b = b || {};
            for (var c = 0; c < this.cache.length; c++) {
                var d = this.cache[c];
                if (d.type == a && !d.used) {
                    var e = !0;
                    for (var f in b) b[f] != d.properties[f] && (e = !1);
                    if (e) return d
                }
            }
            return null
        }, d.prototype.addResource = function(a, b, c) {
            var d = {
                type: a,
                obj: b,
                properties: c
            };
            return this.cache.push(d), d
        }, d.prototype.markAllAsNotUsed = function() {
            for (var a = 0; a < this.cache.length; a++) this.cache[a].used = !1
        }, b.exports = d
    }, {}],
    146: [function(a, b, c) {
        function d(a, b, c, d) {
            this.id = g++, this.ctx = a, this.source = b || null, this.resourceMgr = c || new e(a), this.fullscreenQuad = d || new f(a), this.defaultBPP = 8
        }
        var e = a("./FXResourceMgr"),
            f = a("./ScreenImage"),
            g = 0;
        d.prototype.reset = function() {
            return this.resourceMgr.markAllAsNotUsed(), this
        }, d.prototype.getOutputSize = function(a, b) {
            if (a && b) return {
                width: a,
                height: b
            };
            if (this.source && this.source.width) return {
                width: this.source.width,
                height: this.source.height
            };
            if (this.source && this.source.getWidth) return {
                width: this.source.getWidth(),
                height: this.source.getHeight()
            };
            var c = this.ctx.getViewport();
            return {
                width: c[2],
                height: c[3]
            }
        }, d.prototype.getRenderTarget = function(a, b, c, d) {
            c = c || !1, d = d || this.defaultBPP;
            var e = {
                    w: a,
                    h: b,
                    depth: c,
                    bpp: d
                },
                f = this.resourceMgr.getResource("RenderTarget", e),
                g = this.ctx;
            if (!f) {
                var h = g.createTexture2D(null, a, b, {
                        magFilter: g.LINEAR,
                        minFilter: g.LINEAR,
                        type: g.UNSIGNED_BYTE
                    }),
                    i = [{
                        texture: h
                    }],
                    j = null;
                if (c) {
                    var k = g.createTexture2D(null, a, b, {
                        magFilter: g.NEAREST,
                        minFilter: g.NEAREST,
                        format: g.DEPTH_COMPONENT,
                        type: g.UNSIGNED_SHORT
                    });
                    j = {
                        texture: k
                    }
                }
                var l = g.createFramebuffer(i, j);
                f = this.resourceMgr.addResource("RenderTarget", l, e)
            }
            return f.used = !0, f.obj
        }, d.prototype.getFXStage = function(a) {
            var b = {},
                c = this.resourceMgr.getResource("FXStage", b);
            if (!c) {
                var e = new d(this.ctx, null, this.resourceMgr, this.fullscreenQuad);
                c = this.resourceMgr.addResource("FXStage", e, b)
            }
            return c.used = !0, c.obj
        }, d.prototype.asFXStage = function(a, b) {
            var c = this.getFXStage(b);
            return c.source = a, c.name = b + "_" + c.id, c
        }, d.prototype.getShader = function(a, b) {
            var c = {
                    vert: a,
                    frag: b
                },
                d = this.resourceMgr.getResource("Program", c);
            if (!d) {
                var e = this.ctx,
                    f = e.createProgram(a, b);
                d = this.resourceMgr.addResource("Program", f, c)
            }
            return d.used = !0, d.obj
        }, d.prototype.getSourceTexture = function(a) {
            if (a) return a.source ? a.source.getColorAttachment ? a.source.getColorAttachment(0).texture : a.source : a.getColorAttachment ? a.getColorAttachment(0).texture : a;
            if (this.source) return this.source.getColorAttachment ? this.source.getColorAttachment(0).texture : this.source;
            throw "FXStage.getSourceTexture() No source texture!"
        }, d.prototype.drawFullScreenQuad = function(a, b, c, d) {
            this.drawFullScreenQuadAt(0, 0, a, b, c, d)
        }, d.prototype.drawFullScreenQuadAt = function(a, b, c, d, e, f) {
            var g = this.ctx;
            if (f = f || this.fullscreenQuad.program, g.pushState(g.DEPTH_BIT | g.VIEWPORT_BIT | g.MESH_BIT | g.PROGRAM_BIT | g.TEXTURE_BIT), g.setDepthTest(!1), g.setDepthMask(0), g.setViewport(a, b, c, d), g.bindMesh(this.fullscreenQuad.mesh), g.bindProgram(f), e) {
                if (f.hasUniform("imageSize")) {
                    var h = e.width || e.getWidth(),
                        i = e.height || e.getHeight();
                    f.setUniform("imageSize", [h, i])
                }
                g.bindTexture(e, 0)
            }
            g.drawMesh(), g.popState(g.DEPTH_BIT | g.VIEWPORT_BIT | g.MESH_BIT | g.PROGRAM_BIT | g.TEXTURE_BIT)
        }, d.prototype.getImage = function(a) {
            throw new Error("FXStage.getImage is not implemented!")
        }, d.prototype.getFullScreenQuad = function() {
            return this.fullscreenQuad
        }, b.exports = d
    }, {
        "./FXResourceMgr": 145,
        "./ScreenImage": 150
    }],
    147: [function(a, b, c) {
        var d = a("./FXStage"),
            e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\nuniform sampler2D tex0;\nuniform sampler2D tex1;\n\nvoid main() {\n  vec4 color = texture2D(tex0, vTexCoord);\n  vec4 color2 = texture2D(tex1, vTexCoord);\n\n  gl_FragColor = color * color2;\n}\n";
        d.prototype.mult = function(a, b) {
            var c = this.ctx;
            b = b || {}, scale = void 0 !== b.scale ? b.scale : 1;
            var d = this.getOutputSize(b.width, b.height),
                g = this.getRenderTarget(d.width, d.height, b.depth, b.bpp),
                h = this.getShader(e, f);
            return c.pushState(c.FRAMEBUFFER_BIT | c.TEXTURE_BIT | c.PROGRAM_BIT), c.bindFramebuffer(g), c.setClearColor(0, 0, 0, 0), c.clear(c.COLOR_BIT | c.DEPTH_BIT), c.bindTexture(this.getSourceTexture(), 0), c.bindTexture(this.getSourceTexture(a), 1), c.bindProgram(h), h.setUniform("tex0", 0), h.setUniform("tex1", 1), this.drawFullScreenQuad(d.width, d.height, null, h), c.popState(c.FRAMEBUFFER_BIT | c.TEXTURE_BIT | c.PROGRAM_BIT), this.asFXStage(g, "mult")
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    148: [function(a, b, c) {
        var d = a("./FXStage");
        d.prototype.render = function(a) {
            var b = this.getOutputSize(a.width, a.height),
                c = this.getRenderTarget(b.width, b.height, a.depth, a.bpp),
                d = this.ctx;
            return d.pushState(d.VIEWPORT_BIT | d.FRAMEBUFFER_BIT), d.setViewport(0, 0, b.width, b.height), d.bindFramebuffer(c), a.drawFunc && a.drawFunc(), d.popState(d.VIEWPORT_BIT | d.FRAMEBUFFER_BIT), this.asFXStage(c, "render")
        }
    }, {
        "./FXStage": 146
    }],
    149: [function(a, b, c) {
        var d = a("./FXStage"),
            e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define PI    3.14159265\n\nvarying vec2 vTexCoord;\n\nuniform sampler2D depthMap;\nuniform vec2 textureSize;\nuniform float near;\nuniform float far;\n\nconst int samples = 3;\nconst int rings = 5;\n\nuniform float strength;\nuniform float offset;\n\nvec2 rand(vec2 coord) {\n  float noiseX = (fract(sin(dot(coord, vec2(12.9898,78.233))) * 43758.5453));\n  float noiseY = (fract(sin(dot(coord, vec2(12.9898,78.233) * 2.0)) * 43758.5453));\n  return vec2(noiseX,noiseY) * 0.004;\n}\n\nfloat compareDepths( in float depth1, in float depth2 )\n{\n  float depthTolerance = far / 5.0;\n  float occlusionTolerance = far / 100.0;\n  float diff = (depth1 - depth2);\n\n  if (diff <= 0.0) return 0.0;\n  if (diff > depthTolerance) return 0.0;\n  if (diff < occlusionTolerance) return 0.0;\n\n  return 1.0;\n}\n\n//fron depth buf normalized z to linear (eye space) z\n//http://stackoverflow.com/questions/6652253/getting-the-true-z-value-from-the-depth-buffer\nfloat readDepth(vec2 coord) {\n  float z_b = texture2D(depthMap, coord).r;\n  float z_n = 2.0 * z_b - 1.0;\n  float z_e = 2.0 * near * far / (far + near - z_n * (far - near));\n  return z_e;\n}\n\nvoid main() {\n  vec2 texCoord = vec2(gl_FragCoord.x / textureSize.x, gl_FragCoord.y / textureSize.y);\n  float depth = readDepth(texCoord);\n  float z_b = texture2D(depthMap, texCoord).r;\n\n  float d;\n\n  float aspect = textureSize.x / textureSize.y;\n  vec2 noise = rand(vTexCoord);\n\n  float w = (1.0 / textureSize.x)/clamp(z_b,0.1,1.0)+(noise.x*(1.0-noise.x));\n  float h = (1.0 / textureSize.y)/clamp(z_b,0.1,1.0)+(noise.y*(1.0-noise.y));\n\n  float pw;\n  float ph;\n\n  float ao = 0.0;\n  float s = 0.0;\n  float fade = 4.0;\n\n  for (int i = 0 ; i < rings; i += 1)\n  {\n    fade *= 0.5;\n    for (int j = 0 ; j < samples*rings; j += 1)\n    {\n      if (j >= samples*i) break;\n      float step = PI * 2.0 / (float(samples) * float(i));\n      float r = 4.0 * float(i);\n      pw = r * (cos(float(j)*step));\n      ph = r * (sin(float(j)*step)) * aspect;\n      d = readDepth( vec2(texCoord.s + pw * w,texCoord.t + ph * h));\n      ao += compareDepths(depth, d) * fade;\n      s += 1.0 * fade;\n    }\n  }\n\n  ao /= s;\n  ao = clamp(ao, 0.0, 1.0);\n  ao = 1.0 - ao;\n  ao = offset + (1.0 - offset) * ao;\n  ao = pow(ao, strength);\n\n  gl_FragColor = vec4(ao, ao, ao, 1.0);\n}\n";
        d.prototype.ssao = function(a) {
            var b = this.ctx;
            a = a || {}, scale = void 0 !== a.scale ? a.scale : 1;
            var c = this.getOutputSize(a.width, a.height),
                d = this.getRenderTarget(c.width, c.height, a.depth, a.bpp),
                g = this.getShader(e, f);
            return b.pushState(b.FRAMEBUFFER_BIT | b.TEXTURE_BIT | b.PROGRAM_BIT), b.bindFramebuffer(d), b.setClearColor(0, 0, 0, 0), b.clear(b.COLOR_BIT | b.DEPTH_BIT), b.bindTexture(this.getSourceTexture(a.depthMap), 0), b.bindProgram(g),
                g.setUniform("textureSize", [c.width, c.height]), g.setUniform("depthMap", 0), g.setUniform("strength", a.strength || 1), g.setUniform("offset", a.offset || 0), g.setUniform("near", a.camera.getNear()), g.setUniform("far", a.camera.getFar()), this.drawFullScreenQuad(c.width, c.height, null, g), b.popState(b.FRAMEBUFFER_BIT | b.TEXTURE_BIT | b.PROGRAM_BIT), this.asFXStage(d, "mult")
        }, b.exports = d
    }, {
        "./FXStage": 146
    }],
    150: [function(a, b, c) {
        function d(a) {
            this.mesh = a.createMesh([{
                data: [
                    [-1, -1],
                    [1, -1],
                    [1, 1],
                    [-1, 1]
                ],
                location: a.ATTRIB_POSITION
            }, {
                data: [
                    [0, 0],
                    [1, 0],
                    [1, 1],
                    [0, 1]
                ],
                location: a.ATTRIB_TEX_COORD_0
            }], {
                data: [
                    [0, 1, 2],
                    [0, 2, 3]
                ]
            }), a.pushState(a.PROGRAM_BIT), this.program = a.createProgram(e, f), a.bindProgram(this.program), this.program.setUniform("uTexture", 0), a.popState(a.PROGRAM_BIT)
        }
        var e = "#define GLSLIFY 1\nattribute vec2 aPosition;\nattribute vec2 aTexCoord0;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vTexCoord = aTexCoord0;\n}\n",
            f = "#define GLSLIFY 1\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\n    gl_FragColor = texture2D(uTexture, vTexCoord);\n}\n";
        b.exports = d
    }, {}],
    151: [function(a, b, c) {
        var d = a("./FXStage");
        a("./Render"), a("./Blit"), a("./Add"), a("./Blur3"), a("./Blur5"), a("./Downsample2"), a("./Downsample4"), a("./Mult"), a("./SSAO"), b.exports = function(a) {
            return new d(a)
        }, b.exports.FXStage = d
    }, {
        "./Add": 139,
        "./Blit": 140,
        "./Blur3": 141,
        "./Blur5": 142,
        "./Downsample2": 143,
        "./Downsample4": 144,
        "./FXStage": 146,
        "./Mult": 147,
        "./Render": 148,
        "./SSAO": 149
    }],
    152: [function(a, b, c) {
        function d() {
            return [
                [0, 0, 0],
                [0, 1, 0]
            ]
        }

        function e(a, b, c) {
            return g.hitTestPlane(b, a[0], a[1], c)
        }

        function f(a, b) {
            var c = a[0],
                d = a[1];
            h.set(i, c), h.sub(i, b), h.normalize(i);
            var e = h.dot(i, d);
            return e > 0 ? 1 : 0 > e ? -1 : 0
        }
        var g = a("./Ray"),
            h = a("pex-math/Vec3"),
            i = h.create(),
            j = {
                create: d,
                getRayIntersection: e,
                side: f
            };
        b.exports = j
    }, {
        "./Ray": 153,
        "pex-math/Vec3": 172
    }],
    153: [function(a, b, c) {
        function d() {
            return [
                [0, 0, 0],
                [0, 0, 1]
            ]
        }

        function e(a, b, c, d, e) {
            var f = a[0],
                g = a[1],
                h = i.sub(i.set(j, c), b),
                s = i.sub(i.set(k, d), b),
                t = i.cross(i.set(l, h), s);
            if (i.length(t) < r) return -1;
            var u = i.sub(i.set(m, f), b),
                v = -i.dot(t, u),
                w = i.dot(t, g);
            if (Math.abs(w) < r) return 0 == v ? -2 : -3;
            var x = v / w;
            if (-r > x) return -4;
            var y = i.add(i.set(n, f), i.scale(i.set(o, g), x)),
                z = i.dot(h, h),
                A = i.dot(h, s),
                B = i.dot(s, s),
                C = i.sub(i.set(p, y), b),
                D = i.dot(C, h),
                E = i.dot(C, s),
                F = A * A - z * B,
                G = (A * E - B * D) / F;
            if (-r > G || G > 1 + r) return -5;
            var H = (A * D - z * E) / F;
            return -r > H || G + H > 1 + r ? -6 : (e = void 0 === e ? i.create() : e, i.set(e, h), i.scale(e, G), i.add(e, i.scale(i.set(q, s), H)), i.add(e, b), 1)
        }

        function f(a, b, c) {
            return e(a, b[0], b[1], b[2], c)
        }

        function g(a, b, c, d) {
            var e = i.set(j, a[0]),
                f = i.set(k, a[1]);
            b = i.set(l, b);
            var g = i.dot(f, c);
            if (0 == g) return null;
            var h = i.dot(i.sub(b, e), c) / g;
            return 0 > h ? null : (d = void 0 === d ? i.create() : d, i.set(d, i.add(e, i.scale(f, h))))
        }

        function h(a, b) {
            var c = a[0],
                d = a[1],
                e = 1 / d[0],
                f = 1 / d[1],
                g = 1 / d[2],
                h = b[0],
                i = b[1],
                j = h[0],
                k = h[1],
                l = h[2],
                m = i[0],
                n = i[1],
                o = i[2],
                p = (j - c[0]) * e,
                q = (m - c[0]) * e,
                r = (k - c[1]) * f,
                s = (n - c[1]) * f,
                t = (l - c[2]) * g,
                u = (o - c[2]) * g,
                v = Math.max(Math.max(Math.min(p, q), Math.min(r, s)), Math.min(t, u)),
                w = Math.min(Math.min(Math.max(p, q), Math.max(r, s)), Math.max(t, u));
            return !(0 > w || v > w)
        }
        var i = a("pex-math/Vec3"),
            j = i.create(),
            k = i.create(),
            l = i.create(),
            m = i.create(),
            n = i.create(),
            o = i.create(),
            p = i.create(),
            q = i.create(),
            r = 1e-6,
            s = {
                create: d,
                hitTestTriangle3: e,
                hitTestTriangle: f,
                hitTestPlane: g,
                intersectsAABB: h
            };
        b.exports = s
    }, {
        "pex-math/Vec3": 172
    }],
    154: [function(a, b, c) {
        function d() {
            return [
                [1 / 0, 1 / 0],
                [-(1 / 0), -(1 / 0)]
            ]
        }

        function e() {
            return [
                [0, 0],
                [0, 0]
            ]
        }

        function f(a) {
            return [a[0].slice(0), a[1].slice()]
        }

        function g(a, b) {
            return a[0][0] = b[0][0], a[0][1] = b[0][1], a[1][0] = b[1][0], a[1][1] = b[1][1], a
        }

        function h(a, b, c, d, e) {
            return a[0][0] = b, a[0][1] = c, a[1][0] = b + d, a[1][1] = c + e, a
        }

        function i(a, b) {
            return a[0][0] *= b, a[0][1] *= b, a[1][0] *= b, a[1][1] *= b, a
        }

        function j(a, b, c) {
            return a[0][0] = b[0], a[0][1] = b[1], a[1][0] = c[0], a[1][1] = c[1], a
        }

        function k(a, b, c, d, e) {
            return a[0][0] = b, a[0][1] = c, a[1][0] = d, a[1][1] = e, a
        }

        function l(a, b) {
            return void 0 === b ? [a[0][0], a[0][1]] : (b[0] = a[0][0], b[1] = a[0][1], b)
        }

        function m(a, b) {
            return void 0 === b ? [a[1][0], a[1][1]] : (b[0] = a[1][0], b[1] = a[1][1], b)
        }

        function n(a, b, c) {
            return a[1][0] = a[0][0] + b, a[1][1] = a[0][1] + c, a
        }

        function o(a, b) {
            return a[1][0] = a[0][0] + b[0], a[1][1] = a[0][1] + b[1], a
        }

        function p(a, b) {
            var c = s(a),
                d = t(a);
            return void 0 === b ? [c, d] : (b[0] = c, b[1] = d, b)
        }

        function q(a, b) {
            return a[1][0] = a[0][0] + b, a
        }

        function r(a, b) {
            return a[1][1] = a[0][1] + b, a
        }

        function s(a) {
            return a[1][0] - a[0][0]
        }

        function t(a) {
            return a[1][1] - a[0][1]
        }

        function u(a) {
            return s(a) / t(a)
        }

        function v(a, b) {
            return w(a, b[0], b[1])
        }

        function w(a, b, c) {
            return a[0][0] = b, a[0][1] = c, a[1][0] = b + s(a), a[1][1] = c + t(a), a
        }

        function x(a, b) {
            return void 0 === b ? [a[1][0], a[1]] : (b[0] = a[1][0], b[1] = a[0][1], b)
        }

        function y(a, b) {
            return void 0 === b ? [a[0][0], a[1][1]] : (b[0] = a[0][0], b[1] = a[1][1], b)
        }

        function z(a, b) {
            var c = .5 * s(a),
                d = .5 * t(a);
            return void 0 === b ? [c, d] : (b[0] = c, b[1] = d, b)
        }

        function A(a, b) {
            return B(a, b[0], b[1])
        }

        function B(a, b, c) {
            return b >= a[0][0] && b <= a[1][0] && c >= a[0][1] && c <= a[1][1]
        }

        function C(a, b) {
            return B(a, b[0][0], b[0][1]) && B(a, b[1][0], b[1][1])
        }

        function D(a, b) {
            return E(a, b[0], b[1])
        }

        function E(a, b, c) {
            var d = a[0][0],
                e = a[0][1],
                f = a[1][0],
                g = a[1][1];
            return a[0][0] = d > b ? b : d, a[0][1] = e > c ? c : e, a[1][0] = b > f ? b : f, a[1][1] = c > g ? c : g, a
        }

        function F(a, b) {
            for (var c, d, e = a[0][0], f = a[0][1], g = a[1][0], h = a[1][1], i = 0, j = b.length; j > i; ++i) c = b[i][0], d = b[i][1], e = e > c ? c : e, f = f > d ? d : f, g = c > g ? c : g, h = d > h ? d : h;
            return a[0][0] = e, a[0][1] = f, a[1][0] = g, a[1][1] = h, a
        }

        function G(a, b) {
            for (var c, d, e = a[0][0], f = a[0][1], g = a[1][0], h = a[1][1], i = 0, j = b.length; j > i; i += 2) c = b[i], d = b[i + 1], e = e > c ? c : e, f = f > d ? d : f, g = c > g ? c : g, h = d > h ? d : h;
            return a[0][0] = e, a[0][1] = f, a[1][0] = g, a[1][1] = h, a
        }

        function H(a, b) {
            return D(a, b[0]), D(a, b[1]), a
        }

        function I(a, b) {
            for (var c = 0, d = b.length; d > c; ++c) H(a, b[c]);
            return a
        }

        function J(a, b) {
            var c = a[0][0],
                d = a[0][1],
                e = a[1][0],
                f = a[1][1],
                g = b[0],
                h = b[1];
            return b[0] = Math.max(c, Math.min(g, e)) - c, b[1] = Math.max(d, Math.min(h, f)) - d, b
        }

        function K(a, b) {
            var c = a[0][0],
                d = a[0][1],
                e = a[1][0],
                f = a[1][1];
            return b[0] = Math.max(c, Math.min(b[0], e)), b[1] = Math.max(d, Math.min(b[1], f)), b
        }

        function L(a) {
            a[0][0] = a[1][0] = -Number.MAX_VALUE, a[0][1] = a[1][1] = Number.MAX_VALUE
        }

        function M(a) {
            return a[0][0] = a[0][1] = 1 / 0, a[1][0] = a[1][1] = -(1 / 0), a
        }

        function N(a) {
            return a[0][0] > a[1][0] || a[0][1] > a[1][1]
        }

        function O(a) {
            return 0 == a[0][0] && 0 == a[0][1] && 0 == a[1][0] && 0 == a[1][1]
        }

        function P(a) {
            return a[0][0] = a[0][1] = a[1][0] = a[1][1] = 0, a
        }

        function Q(a) {
            return F(d(), a)
        }

        function R(a) {
            return G(d(), a)
        }

        function S(a) {
            return I(d(), a)
        }
        var T = {
            create: d,
            zero: e,
            copy: f,
            set: g,
            set4: h,
            scale: i,
            setMinMax: j,
            setMinMax4: k,
            getMin: l,
            getMax: m,
            setSize2: n,
            setSize: o,
            getSize: p,
            setWidth: q,
            getWidth: s,
            setHeight: r,
            getHeight: t,
            getAspectRatio: u,
            setPosition: v,
            setPosition2: w,
            getPosition: l,
            getTL: l,
            getTR: x,
            getBL: y,
            getBR: m,
            getCenter: z,
            containsPoint: A,
            containsPoint2: B,
            containsRect: C,
            includePoint: D,
            includePoint2: E,
            includePoints: F,
            includePointsFlat: G,
            includeRect: H,
            includeRects: I,
            mapPoint: J,
            clampPoint: K,
            isZero: O,
            isEmpty: N,
            setEmpty: M,
            toMax: L,
            setZero: P,
            createFromPoints: Q,
            createFromPointsFlat: R,
            createFromRects: S
        };
        b.exports = T
    }, {}],
    155: [function(a, b, c) {
        function d(a, b, c) {
            this._ctx = a, this._windowWidth = b, this._windowHeight = c, this._windowSize = [b, c], this._textureRect = [0, 0, b, c], this._textureTmpRect = [0, 0, 0, 0], this.x = 0, this.y = 0, this.highdpi = 1, this.mousePos = [0, 0], this.scale = 1, this.texture2DProgram = a.createProgram(k, l), this.textureCubeProgram = a.createProgram(k, m), this.rectMesh = a.createMesh([{
                data: [
                    [-1, -1],
                    [1, -1],
                    [1, 1],
                    [-1, 1]
                ],
                location: a.ATTRIB_POSITION
            }, {
                data: [
                    [0, 0],
                    [1, 0],
                    [1, 1],
                    [0, 1]
                ],
                location: a.ATTRIB_TEX_COORD_0
            }], {
                data: [
                    [0, 1, 2],
                    [0, 2, 3]
                ]
            }), e ? this.renderer = new h(a, b, c) : this.renderer = new g(a, b, c), this.screenBounds = [0, 0, b, c], this.items = [], this.enabled = !0
        }
        var e = a("is-browser"),
            f = a("./GUIControl"),
            g = a("./SkiaRenderer"),
            h = a("./HTMLCanvasRenderer"),
            i = a("pex-geom/Rect"),
            j = a("pex-sys/KeyboardEvent"),
            k = "attribute vec4 aPosition; attribute vec2 aTexCoord0; uniform vec2 uWindowSize; uniform vec4 uRect; varying vec2 vTexCoord0; void main() {     vTexCoord0 = aTexCoord0;     vec2 pos = aPosition.xy * 0.5 + 0.5;     pos.x = uRect.x + pos.x * (uRect.z - uRect.x);     pos.y = uRect.y + pos.y * (uRect.w - uRect.y);     pos.x /= uWindowSize.x;     pos.y /= uWindowSize.y;     pos = (pos - 0.5) * 2.0;     gl_Position = vec4(pos, 0.0, 1.0); }",
            l = "varying vec2 vTexCoord0; uniform sampler2D uTexture; uniform float uHDR; void main() {     gl_FragColor = texture2D(uTexture, vec2(vTexCoord0.x, vTexCoord0.y));     if (uHDR == 1.0) {         gl_FragColor.rgb = gl_FragColor.rgb / (gl_FragColor.rgb + 1.0);         gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(1.0/2.2));     }}",
            m = "const float PI = 3.1415926; varying vec2 vTexCoord0; uniform samplerCube uTexture; uniform float uHDR; void main() {     float theta = vTexCoord0.x * 2.0 * PI - PI/2.0;     float phi = vTexCoord0.y * PI;     float x = cos(theta) * sin(phi);     float y = -cos(phi);     float z = sin(theta) * sin(phi);     vec3 N = normalize(vec3(-1.0 * x, y, z));     gl_FragColor = textureCube(uTexture, N);     if (uHDR == 1.0) {         gl_FragColor.rgb = gl_FragColor.rgb / (gl_FragColor.rgb + 1.0);         gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(1.0/2.2));     }}";
        e && (l = "precision highp float;\n" + l, m = "precision highp float;\n" + m), d.prototype.onMouseDown = function(a) {
            if (this.enabled) {
                this.items.forEach(function(a) {
                    "text" == a.type && a.focus && (a.focus = !1, a.dirty = !0)
                }), this.activeControl = null, this.mousePos[0] = a.x / this.highdpi - this.x, this.mousePos[1] = a.y / this.highdpi - this.y;
                for (var b = 0; b < this.items.length; b++)
                    if (i.containsPoint(this.items[b].activeArea, this.mousePos)) {
                        this.activeControl = this.items[b];
                        var c = this.activeControl.activeArea,
                            d = c[1][0] - c[0][0],
                            e = c[1][1] - c[0][1];
                        if (this.activeControl.active = !0, this.activeControl.dirty = !0, "button" == this.activeControl.type) this.activeControl.onclick && this.activeControl.onclick();
                        else if ("toggle" == this.activeControl.type) this.activeControl.contextObject[this.activeControl.attributeName] = !this.activeControl.contextObject[this.activeControl.attributeName], this.activeControl.onchange && this.activeControl.onchange(this.activeControl.contextObject[this.activeControl.attributeName]);
                        else if ("radiolist" == this.activeControl.type) {
                            var f = this.mousePos[1] - c[0][1],
                                g = Math.floor(this.activeControl.items.length * f / e);
                            if (0 > g) continue;
                            if (g >= this.activeControl.items.length) continue;
                            this.activeControl.contextObject[this.activeControl.attributeName] = this.activeControl.items[g].value, this.activeControl.onchange && this.activeControl.onchange(this.activeControl.items[g].value)
                        } else if ("texturelist" == this.activeControl.type) {
                            var h = null;
                            if (this.activeControl.items.forEach(function(a) {
                                    i.containsPoint(a.activeArea, this.mousePos) && (h = a)
                                }.bind(this)), !h) continue;
                            this.activeControl.contextObject[this.activeControl.attributeName] = h.value, this.activeControl.onchange && this.activeControl.onchange(h.value)
                        } else if ("color" == this.activeControl.type) {
                            var j = (this.activeControl.options.alpha ? 4 : 3, e);
                            if (this.activeControl.options.palette) {
                                var k = this.activeControl.options.paletteImage.width,
                                    l = this.activeControl.options.paletteImage.height,
                                    m = a.y / this.highdpi - c[0][1];
                                j = e - d * l / k;
                                var n = d * l / k,
                                    o = e - n;
                                if (m > o) {
                                    var p = (a.x / this.highdpi - c[0][0]) / d,
                                        q = (m - o) / n,
                                        r = Math.floor(k * p),
                                        m = Math.floor(l * q),
                                        s = this.renderer.getImageColor(this.activeControl.options.paletteImage, r, m);
                                    this.activeControl.dirty = !0, this.activeControl.contextObject[this.activeControl.attributeName][0] = s[0], this.activeControl.contextObject[this.activeControl.attributeName][1] = s[1], this.activeControl.contextObject[this.activeControl.attributeName][2] = s[2], this.activeControl.onchange && this.activeControl.onchange(this.activeControl.contextObject[this.activeControl.attributeName]);
                                    continue
                                }
                            }
                        } else "text" == this.activeControl.type && (this.activeControl.focus = !0);
                        a.stopPropagation(), this.onMouseDrag(a);
                        break
                    }
            }
        }, d.prototype.onMouseDrag = function(a) {
            if (this.enabled && this.activeControl) {
                var b = this.activeControl.activeArea,
                    c = b[1][0] - b[0][0],
                    d = b[1][1] - b[0][1];
                if ("slider" == this.activeControl.type) {
                    var e = (a.x / this.highdpi - b[0][0]) / c;
                    e = Math.max(0, Math.min(e, 1)), this.activeControl.setNormalizedValue(e), this.activeControl.onchange && this.activeControl.onchange(this.activeControl.contextObject[this.activeControl.attributeName]), this.activeControl.dirty = !0
                } else if ("multislider" == this.activeControl.type) {
                    var e = (a.x / this.highdpi - b[0][0]) / c;
                    e = Math.max(0, Math.min(e, 1));
                    var f = Math.floor(this.activeControl.getValue().length * (a.y / this.highdpi - b[0][1]) / d);
                    isNaN(this.activeControl.clickedSlider) ? this.activeControl.clickedSlider = f : f = this.activeControl.clickedSlider, this.activeControl.setNormalizedValue(e, f), this.activeControl.onchange && this.activeControl.onchange(this.activeControl.contextObject[this.activeControl.attributeName]), this.activeControl.dirty = !0
                } else if ("color" == this.activeControl.type) {
                    var g = this.activeControl.options.alpha ? 4 : 3,
                        h = d;
                    if (this.activeControl.options.palette) {
                        var i = this.activeControl.options.paletteImage.width,
                            j = this.activeControl.options.paletteImage.height,
                            k = a.y / this.highdpi - b[0][1];
                        h = d - c * j / i;
                        var l = c * j / i,
                            m = d - l;
                        if (k > m && isNaN(this.activeControl.clickedSlider)) {
                            var n = (a.x / this.highdpi - b[0][0]) / c,
                                o = (k - m) / l,
                                p = Math.floor(i * n),
                                k = Math.floor(j * o),
                                q = this.renderer.getImageColor(this.activeControl.options.paletteImage, p, k);
                            return this.activeControl.dirty = !0, this.activeControl.contextObject[this.activeControl.attributeName][0] = q[0], this.activeControl.contextObject[this.activeControl.attributeName][1] = q[1], this.activeControl.contextObject[this.activeControl.attributeName][2] = q[2], this.activeControl.onchange && this.activeControl.onchange(this.activeControl.contextObject[this.activeControl.attributeName]), void a.stopPropagation()
                        }
                    }
                    var e = (a.x / this.highdpi - b[0][0]) / c;
                    e = Math.max(0, Math.min(e, 1));
                    var f = Math.floor(g * (a.y / this.highdpi - b[0][1]) / h);
                    isNaN(this.activeControl.clickedSlider) ? this.activeControl.clickedSlider = f : f = this.activeControl.clickedSlider, this.activeControl.setNormalizedValue(e, f), this.activeControl.onchange && this.activeControl.onchange(this.activeControl.contextObject[this.activeControl.attributeName]), this.activeControl.dirty = !0
                }
                a.stopPropagation()
            }
        }, d.prototype.onMouseUp = function(a) {
            this.enabled && this.activeControl && (this.activeControl.active = !1, this.activeControl.dirty = !0, this.activeControl.clickedSlider = void 0, this.activeControl = null)
        }, d.prototype.onKeyDown = function(a) {
            var b = this.items.filter(function(a) {
                return "text" == a.type && a.focus
            })[0];
            if (b) switch (a.keyCode) {
                case j.VK_BACKSPACE:
                    var c = b.contextObject[b.attributeName];
                    b.contextObject[b.attributeName] = c.substr(0, Math.max(0, c.length - 1)), b.dirty = !0, b.onchange && b.onchange(b.contextObject[b.attributeName]), a.stopPropagation()
            }
        }, d.prototype.onKeyPress = function(a) {
            var b = this.items.filter(function(a) {
                return "text" == a.type && a.focus
            })[0];
            if (b) {
                var c = a.str.charCodeAt(0);
                c >= 32 && 126 >= c && (b.contextObject[b.attributeName] += a.str, b.dirty = !0, b.onchange && b.onchange(b.contextObject[b.attributeName]), a.stopPropagation())
            }
        }, d.prototype.addHeader = function(a) {
            var b = new f({
                type: "header",
                title: a,
                dirty: !0,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ],
                setTitle: function(a) {
                    this.title = a, this.dirty = !0
                }
            });
            return this.items.push(b), b
        }, d.prototype.addSeparator = function(a) {
            var b = new f({
                type: "separator",
                dirty: !0,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ]
            });
            return this.items.push(b), b
        }, d.prototype.addLabel = function(a) {
            var b = new f({
                type: "label",
                title: a,
                dirty: !0,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ],
                setTitle: function(a) {
                    this.title = a, this.dirty = !0
                }
            });
            return this.items.push(b), b
        }, d.prototype.addParam = function(a, b, c, d, e) {
            if (d = d || {}, "undefined" == typeof d.min && (d.min = 0), "undefined" == typeof d.max && (d.max = 1), b[c] === !1 || b[c] === !0) {
                var g = new f({
                    type: "toggle",
                    title: a,
                    contextObject: b,
                    attributeName: c,
                    activeArea: [
                        [0, 0],
                        [0, 0]
                    ],
                    options: d,
                    onchange: e,
                    dirty: !0
                });
                return this.items.push(g), g
            }
            if (!isNaN(b[c])) {
                var g = new f({
                    type: "slider",
                    title: a,
                    contextObject: b,
                    attributeName: c,
                    activeArea: [
                        [0, 0],
                        [0, 0]
                    ],
                    options: d,
                    onchange: e,
                    dirty: !0
                });
                return this.items.push(g), g
            }
            if (b[c] instanceof Array && d && "color" == d.type) {
                var g = new f({
                    type: "color",
                    title: a,
                    contextObject: b,
                    attributeName: c,
                    activeArea: [
                        [0, 0],
                        [0, 0]
                    ],
                    options: d,
                    onchange: e,
                    dirty: !0
                });
                return this.items.push(g), g
            }
            if (b[c] instanceof Array) {
                var g = new f({
                    type: "multislider",
                    title: a,
                    contextObject: b,
                    attributeName: c,
                    activeArea: [
                        [0, 0],
                        [0, 0]
                    ],
                    options: d,
                    onchange: e,
                    dirty: !0
                });
                return this.items.push(g), g
            }
            if ("string" == typeof b[c]) {
                var g = new f({
                    type: "text",
                    title: a,
                    contextObject: b,
                    attributeName: c,
                    activeArea: [
                        [0, 0],
                        [0, 0]
                    ],
                    options: d,
                    onchange: e,
                    dirty: !0
                });
                return this.items.push(g), g
            }
        }, d.prototype.addButton = function(a, b) {
            var c = new f({
                type: "button",
                title: a,
                onclick: b,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ],
                dirty: !0,
                options: {}
            });
            return this.items.push(c), c
        }, d.prototype.addRadioList = function(a, b, c, d, e) {
            var g = new f({
                type: "radiolist",
                title: a,
                contextObject: b,
                attributeName: c,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ],
                items: d,
                onchange: e,
                dirty: !0
            });
            return this.items.push(g), g
        }, d.prototype.addTexture2DList = function(a, b, c, d, e, g) {
            var h = new f({
                type: "texturelist",
                title: a,
                contextObject: b,
                attributeName: c,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ],
                items: d,
                itemsPerRow: e || 4,
                onchange: g,
                dirty: !0
            });
            return this.items.push(h), h
        }, d.prototype.addTexture2D = function(a, b, c) {
            var d = new f({
                type: "texture2D",
                title: a,
                texture: b,
                options: c,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ],
                dirty: !0
            });
            return this.items.push(d), d
        }, d.prototype.addTextureCube = function(a, b, c) {
            var d = new f({
                type: "textureCube",
                title: a,
                texture: b,
                options: c,
                activeArea: [
                    [0, 0],
                    [0, 0]
                ],
                dirty: !0,
                flipZ: 1
            });
            return this.items.push(d), d
        }, d.prototype.dispose = function() {}, d.prototype.draw = function() {
            if (this.enabled && 0 !== this.items.length) {
                this.renderer.draw(this.items, this.scale);
                var a = this._ctx;
                a.pushState(a.DEPTH_BIT | a.BLEND_BIT), a.setDepthTest(!1), a.setBlend(!0), a.setBlendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA), a.bindProgram(this.texture2DProgram), this.texture2DProgram.setUniform("uTexture", 0), this.texture2DProgram.setUniform("uWindowSize", this._windowSize), this.texture2DProgram.setUniform("uRect", this._textureRect), a.bindMesh(this.rectMesh), a.bindTexture(this.renderer.getTexture()), a.drawMesh(), a.bindProgram(this.textureCubeProgram), this.textureCubeProgram.setUniform("uTexture", 0), this.textureCubeProgram.setUniform("uWindowSize", this._windowSize), this.drawTextures(), a.popState(a.DEPTH_BIT | a.BLEND_BIT)
            }
        }, d.prototype.drawTextures = function() {
            for (var a = this._ctx, b = 0; b < this.items.length; b++) {
                var c = this.items[b],
                    d = this.scale * this.highdpi;
                if ("texture2D" == c.type) {
                    var e = [c.activeArea[0][0] * d, this._windowHeight - c.activeArea[1][1] * d, c.activeArea[1][0] * d, this._windowHeight - c.activeArea[0][1] * d];
                    a.bindProgram(this.texture2DProgram), a.bindTexture(c.texture), this.texture2DProgram.setUniform("uRect", e), a.drawMesh()
                }
                if ("texturelist" == c.type && (a.bindProgram(this.texture2DProgram), c.items.forEach(function(b) {
                        var e = [b.activeArea[0][0] * d, this._windowHeight - b.activeArea[1][1] * d, b.activeArea[1][0] * d, this._windowHeight - b.activeArea[0][1] * d];
                        this.texture2DProgram.setUniform("uRect", e), this.texture2DProgram.setUniform("uHDR", c.options && c.options.hdr ? 1 : 0), a.bindTexture(b.texture), a.drawMesh()
                    }.bind(this))), "textureCube" == c.type) {
                    a.bindProgram(this.textureCubeProgram);
                    var e = [c.activeArea[0][0] * d, this._windowHeight - c.activeArea[1][1] * d, c.activeArea[1][0] * d, this._windowHeight - c.activeArea[0][1] * d];
                    a.bindTexture(c.texture), this.textureCubeProgram.setUniform("uRect", e), this.textureCubeProgram.setUniform("uHDR", c.options && c.options.hdr ? 1 : 0), a.drawMesh()
                }
            }
        }, d.prototype.serialize = function() {
            var a = {};
            return this.items.forEach(function(b, c) {
                a[b.title] = b.getSerializedValue()
            }), a
        }, d.prototype.deserialize = function(a) {
            this.items.forEach(function(b, c) {
                void 0 !== a[b.title] && (b.setSerializedValue(a[b.title]), b.dirty = !0)
            })
        }, d.prototype.save = function(a) {
            var b = this.serialize();
            IO.saveTextFile(a, JSON.stringify(b))
        }, d.prototype.load = function(a, b) {
            var c = this;
            IO.loadTextFile(a, function(a) {
                var d = JSON.parse(a);
                c.deserialize(d), b && b()
            })
        }, d.prototype.setEnabled = function(a) {
            this.enabled = a
        }, d.prototype.isEnabled = function() {
            return this.enabled
        }, d.prototype.toggleEnabled = function() {
            return this.enabled = !this.enabled
        }, b.exports = d
    }, {
        "./GUIControl": 156,
        "./HTMLCanvasRenderer": 157,
        "./SkiaRenderer": 158,
        "is-browser": 160,
        "pex-geom/Rect": 154,
        "pex-sys/KeyboardEvent": 179
    }],
    156: [function(a, b, c) {
        function d(a) {
            for (var b in a) this[b] = a[b]
        }
        var e = a("float-rgb2hsl"),
            f = a("float-hsl2rgb");
        d.prototype.setPosition = function(a, b) {
            this.px = a, this.py = b
        }, d.prototype.getNormalizedValue = function(a) {
            if (!this.contextObject) return 0;
            var b = this.contextObject[this.attributeName],
                c = this.options;
            if (c && void 0 !== c.min && void 0 !== c.max)
                if ("multislider" == this.type) b = (b[a] - c.min) / (c.max - c.min);
                else if ("color" == this.type) {
                var d = e(b);
                0 == a && (b = d[0]), 1 == a && (b = d[1]), 2 == a && (b = d[2]), 3 == a && (b = b[4])
            } else b = (b - c.min) / (c.max - c.min);
            return b
        }, d.prototype.setNormalizedValue = function(a, b) {
            if (this.contextObject) {
                var c = this.options;
                if (c && void 0 !== c.min && void 0 !== c.max) {
                    if ("multislider" == this.type) {
                        var d = this.contextObject[this.attributeName];
                        if (b >= d.length) return;
                        d[b] = c.min + a * (c.max - c.min), a = d
                    } else if ("color" == this.type) {
                        var g = this.contextObject[this.attributeName],
                            h = e(g);
                        if (0 == b && (h[0] = a), 1 == b && (h[1] = a), 2 == b && (h[2] = a), 3 == b && (g[4] = a), 3 != b) {
                            var i = f(h);
                            g[0] = i[0], g[1] = i[1], g[2] = i[2]
                        }
                        a = g
                    } else a = c.min + a * (c.max - c.min);
                    c && c.step && (a -= a % c.step)
                }
                this.contextObject[this.attributeName] = a
            }
        }, d.prototype.getSerializedValue = function() {
            return this.contextObject ? this.contextObject[this.attributeName] : ""
        }, d.prototype.setSerializedValue = function(a) {
            "slider" == this.type ? this.contextObject[this.attributeName] = a : "multislider" == this.type ? this.contextObject[this.attributeName] = a : "color" == this.type ? (this.contextObject[this.attributeName].r = a.r, this.contextObject[this.attributeName].g = a.g, this.contextObject[this.attributeName].b = a.b, this.contextObject[this.attributeName].a = a.a) : "toggle" == this.type ? this.contextObject[this.attributeName] = a : "radiolist" == this.type && (this.contextObject[this.attributeName] = a)
        }, d.prototype.getValue = function() {
            return "slider" == this.type ? this.contextObject[this.attributeName] : "multislider" == this.type ? this.contextObject[this.attributeName] : "color" == this.type ? this.contextObject[this.attributeName] : "toggle" == this.type ? this.contextObject[this.attributeName] : 0
        }, d.prototype.getStrValue = function() {
            if ("slider" == this.type) {
                var a = "" + this.contextObject[this.attributeName],
                    b = a.indexOf(".") + 1;
                if (0 === b) return a + ".0";
                for (;
                    "0" == a.charAt(b);) b++;
                return a.substr(0, b + 2)
            }
            return "color" == this.type ? "HSLA" : "toggle" == this.type ? this.contextObject[this.attributeName] : ""
        }, b.exports = d
    }, {
        "float-hsl2rgb": 90,
        "float-rgb2hsl": 91
    }],
    157: [function(a, b, c) {
        function d(a) {
            return g(Math.floor(255 * a[0]), Math.floor(255 * a[1]), Math.floor(255 * a[2]))
        }

        function e(a, b, c) {
            this._ctx = a, this.highdpi = 1, this.canvas = document.createElement("canvas"), this.tex = a.createTexture2D(null, b, c), this.canvas.width = b, this.canvas.height = c, this.ctx = this.canvas.getContext("2d"), this.dirty = !0
        }
        var f = a("pex-geom/Rect"),
            g = a("rgb-hex");
        e.prototype.isAnyItemDirty = function(a) {
            var b = !1;
            return a.forEach(function(a) {
                a.dirty && (a.dirty = !1, b = !0)
            }), b
        }, e.prototype.draw = function(a, b) {
            function c(a) {
                var b = document.createElement("canvas");
                b.width = i, b.height = i * a.height / a.width;
                var c = b.getContext("2d");
                c.drawImage(a, 0, 0, b.width, b.height), n.options.paletteImage = b, n.options.paletteImage.ctx = c, n.options.paletteImage.data = c.getImageData(0, 0, b.width, b.height).data, n.dirty = !0
            }
            if (this.isAnyItemDirty(a)) {
                var e = this.ctx;
                e.save(), e.scale(this.highdpi, this.highdpi), e.clearRect(0, 0, this.canvas.width, this.canvas.height), e.font = "10px Monaco";
                for (var g = 10, h = 10, i = 160, j = 0, k = 0, l = 3, m = 0; m < a.length; m++) {
                    var n = a[m];
                    n.px && n.px && (h = n.px / this.highdpi, g = n.py / this.highdpi);
                    var o = 20 * b;
                    if ("slider" == n.type && (o = 20 * b + 14), "toggle" == n.type && (o = 20 * b), "multislider" == n.type && (o = 20 + 14 * n.getValue().length * b), "color" == n.type && (o = 20 + 14 * (n.options.alpha ? 4 : 3) * b), "color" == n.type && n.options.paletteImage && (o += (i * n.options.paletteImage.height / n.options.paletteImage.width + 2) * b), "button" == n.type && (o = 24 * b), "texture2D" == n.type && (o = 24 + n.texture.getHeight() * i / n.texture.getWidth()), "textureCube" == n.type && (o = 24 + i / 2), "radiolist" == n.type && (o = 18 + 20 * n.items.length * b), "texturelist" == n.type && (j = Math.floor((i - 2 * l) / n.itemsPerRow), k = Math.ceil(n.items.length / n.itemsPerRow), o = 21 + k * j), "header" == n.type && (o = 26 * b), "text" == n.type && (o = 45 * b), "separator" != n.type && (e.fillStyle = "rgba(0, 0, 0, 0.56)", e.fillRect(h, g, i, o - 2)), n.options && n.options.palette && !n.options.paletteImage)
                        if (n.options.palette.width) c(n.options.palette);
                        else {
                            var p = new Image;
                            p.src = n.options.palette, p.onload = function() {
                                c(p)
                            }
                        }
                    if ("slider" == n.type) e.fillStyle = "rgba(150, 150, 150, 1)", e.fillRect(h + 3, g + 18, i - 3 - 3, o - 5 - 18), e.fillStyle = "rgba(255, 255, 0, 1)", e.fillRect(h + 3, g + 18, (i - 3 - 3) * n.getNormalizedValue(), o - 5 - 18), f.set4(n.activeArea, h + 3, g + 18, i - 3 - 3, o - 5 - 18), e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title + " : " + n.getStrValue(), h + 4, g + 13);
                    else if ("multislider" == n.type) {
                        for (var q = 0; q < n.getValue().length; q++) e.fillStyle = "rgba(150, 150, 150, 1)", e.fillRect(h + 3, g + 18 + 14 * q * b, i - 6, 14 * b - 3), e.fillStyle = "rgba(255, 255, 0, 1)", e.fillRect(h + 3, g + 18 + 14 * q * b, (i - 6) * n.getNormalizedValue(q), 14 * b - 3);
                        f.set4(n.activeArea, h + 3, g + 18, i - 3 - 3, o - 5 - 18), e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title + " : " + n.getStrValue(), h + 4, g + 13)
                    } else if ("color" == n.type) {
                        for (var r = n.options.alpha ? 4 : 3, q = 0; r > q; q++) e.fillStyle = "rgba(150, 150, 150, 1)", e.fillRect(h + 3, g + 18 + 14 * q * b, i - 6, 14 * b - 3), e.fillStyle = "rgba(255, 255, 0, 1)", e.fillRect(h + 3, g + 18 + 14 * q * b, (i - 6) * n.getNormalizedValue(q), 14 * b - 3);
                        e.fillStyle = "#" + d(n.contextObject[n.attributeName]), e.fillRect(h + i - 12 - 3, g + 3, 12, 12), n.options.paletteImage && e.drawImage(n.options.paletteImage, h + 3, g + 18 + 14 * r, i - 6, i * n.options.paletteImage.height / n.options.paletteImage.width), e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title + " : " + n.getStrValue(), h + 4, g + 13), f.set4(n.activeArea, h + 3, g + 18, i - 3 - 3, o - 5 - 18)
                    } else if ("button" == n.type) {
                        if (e.fillStyle = n.active ? "rgba(255, 255, 0, 1)" : "rgba(150, 150, 150, 1)", e.fillRect(h + 3, g + 3, i - 3 - 3, o - 5 - 3), f.set4(n.activeArea, h + 3, g + 3, i - 3 - 3, o - 5 - 3), e.fillStyle = n.active ? "rgba(100, 100, 100, 1)" : "rgba(255, 255, 255, 1)", e.fillText(a[m].title, h + 5, g + 15), n.options.color) {
                            var s = n.options.color;
                            e.fillStyle = "rgba(" + 255 * s[0] + ", " + 255 * s[1] + ", " + 255 * s[2] + ", 1)", e.fillRect(h + i - 8, g + 3, 5, o - 5 - 3)
                        }
                    } else if ("toggle" == n.type) {
                        var t = n.contextObject[n.attributeName];
                        e.fillStyle = t ? "rgba(255, 255, 0, 1)" : "rgba(150, 150, 150, 1)", e.fillRect(h + 3, g + 3, o - 5 - 3, o - 5 - 3), f.set4(n.activeArea, h + 3, g + 3, o - 5 - 3, o - 5 - 3), e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title, h + o, g + 12)
                    } else if ("radiolist" == n.type) {
                        e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(n.title, h + 4, g + 13);
                        for (var u = 20 * b, q = 0; q < n.items.length; q++) {
                            var v = n.items[q],
                                t = n.contextObject[n.attributeName] == v.value;
                            e.fillStyle = t ? "rgba(255, 255, 0, 1)" : "rgba(150, 150, 150, 1)", e.fillRect(h + 3, 18 + q * u + g + 3, u - 5 - 3, u - 5 - 3), e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(v.name, h + 5 + u - 5, 18 + q * u + g + 13)
                        }
                        f.set4(n.activeArea, h + 3, 18 + g + 3, u - 5, n.items.length * u - 5)
                    } else if ("texturelist" == n.type) {
                        e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(n.title, h + 4, g + 13);
                        for (var q = 0; q < n.items.length; q++) {
                            var w = q % n.itemsPerRow,
                                x = Math.floor(q / n.itemsPerRow),
                                y = (this.controlBgPaint, 0);
                            n.items[q].value == n.contextObject[n.attributeName] && (e.fillStyle = "none", e.strokeStyle = "rgba(255, 255, 0, 1)", e.lineWidth = "2", e.strokeRect(h + 3 + w * j + 1, g + 18 + x * j + 1, j - 1 - 2, j - 1 - 2), e.lineWidth = "1", y = 2), n.items[q].activeArea || (n.items[q].activeArea = [
                                [0, 0],
                                [0, 0]
                            ]), f.set4(n.items[q].activeArea, h + 3 + w * j + y, g + 18 + x * j + y, j - 1 - 2 * y, j - 1 - 2 * y)
                        }
                        f.set4(n.activeArea, h + 3, 18 + g + 3, i - 3 - 3, j * k - 5)
                    } else "texture2D" == n.type ? (e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title, h + 5, g + 15), f.set4(n.activeArea, h + 3, g + 18, i - 3 - 3, o - 5 - 18)) : "textureCube" == n.type ? (e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title, h + 5, g + 15), f.set4(n.activeArea, h + 3, g + 18, i - 3 - 3, o - 5 - 18)) : "header" == n.type ? (e.fillStyle = "rgba(255, 255, 255, 1)", e.fillRect(h + 3, g + 3, i - 3 - 3, o - 5 - 3), e.fillStyle = "rgba(0, 0, 0, 1)", e.fillText(a[m].title, h + 5, g + 16)) : "text" == n.type ? (f.set4(n.activeArea, h + 3, g + 20, i - 6, o - 20 - 5), e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title, h + 3, g + 13), e.fillStyle = "rgba(50, 50, 50, 1)", e.fillRect(h + 3, g + 20, n.activeArea[1][0] - n.activeArea[0][0], n.activeArea[1][1] - n.activeArea[0][1]), e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(n.contextObject[n.attributeName], h + 3 + 3, g + 15 + 20), n.focus && (e.strokeStyle = "rgba(255, 255, 0, 1)", e.strokeRect(n.activeArea[0][0] - .5, n.activeArea[0][1] - .5, n.activeArea[1][0] - n.activeArea[0][0], n.activeArea[1][1] - n.activeArea[0][1]))) : "separator" == n.type || (e.fillStyle = "rgba(255, 255, 255, 1)", e.fillText(a[m].title, h + 5, g + 13));
                    g += o
                }
                e.restore(), this.updateTexture()
            }
        }, e.prototype.getTexture = function() {
            return this.tex
        }, e.prototype.getImageColor = function(a, b, c) {
            var d = a.data[4 * (b + c * a.width) + 0] / 255,
                e = a.data[4 * (b + c * a.width) + 1] / 255,
                f = a.data[4 * (b + c * a.width) + 2] / 255;
            return [d, e, f]
        }, e.prototype.updateTexture = function() {
            this.gl;
            this.tex.update(this.canvas, this.canvas.width, this.canvas.height, {
                flip: !1
            })
        }, b.exports = e
    }, {
        "pex-geom/Rect": 154,
        "rgb-hex": 212
    }],
    158: [function(a, b, c) {
        function d(a, b, c) {
            console.log("SkiaRenderer+", b, c), this._ctx = a, this.tex = a.createTexture2D(null, b, c), this.highdpi = 1, this.canvas = new g.create(b, c), this.canvasPaint = new h, this.fontPaint = new h, this.fontPaint.setStyle(h.kFillStyle), this.fontPaint.setColor(255, 255, 255, 255), this.fontPaint.setTextSize(10), this.fontPaint.setFontFamily("Monaco"), this.fontPaint.setStrokeWidth(0), this.headerFontPaint = new h, this.headerFontPaint.setStyle(h.kFillStyle), this.headerFontPaint.setColor(0, 0, 0, 255), this.headerFontPaint.setTextSize(10), this.headerFontPaint.setFontFamily("Monaco"), this.headerFontPaint.setStrokeWidth(0), this.fontHighlightPaint = new h, this.fontHighlightPaint.setStyle(h.kFillStyle), this.fontHighlightPaint.setColor(100, 100, 100, 255), this.fontHighlightPaint.setTextSize(10), this.fontHighlightPaint.setFontFamily("Monaco"), this.fontHighlightPaint.setStrokeWidth(0), this.panelBgPaint = new h, this.panelBgPaint.setStyle(h.kFillStyle), this.panelBgPaint.setColor(0, 0, 0, 150), this.headerBgPaint = new h, this.headerBgPaint.setStyle(h.kFillStyle), this.headerBgPaint.setColor(255, 255, 255, 255), this.textBgPaint = new h, this.textBgPaint.setStyle(h.kFillStyle), this.textBgPaint.setColor(50, 50, 50, 255), this.textBorderPaint = new h, this.textBorderPaint.setStyle(h.kStrokeStyle), this.textBorderPaint.setColor(255, 255, 0, 255), this.controlBgPaint = new h, this.controlBgPaint.setStyle(h.kFillStyle), this.controlBgPaint.setColor(150, 150, 150, 255), this.controlHighlightPaint = new h, this.controlHighlightPaint.setStyle(h.kFillStyle), this.controlHighlightPaint.setColor(255, 255, 0, 255), this.controlHighlightPaint.setAntiAlias(!0), this.controlStrokeHighlightPaint = new h, this.controlStrokeHighlightPaint.setStyle(h.kStrokeStyle), this.controlStrokeHighlightPaint.setColor(255, 255, 0, 255), this.controlStrokeHighlightPaint.setAntiAlias(!1), this.controlStrokeHighlightPaint.setStrokeWidth(2), this.controlFeaturePaint = new h, this.controlFeaturePaint.setStyle(h.kFillStyle), this.controlFeaturePaint.setColor(255, 255, 255, 255), this.controlFeaturePaint.setAntiAlias(!0), this.imagePaint = new h, this.imagePaint.setStyle(h.kFillStyle), this.imagePaint.setColor(255, 255, 255, 255), this.colorPaint = new h, this.colorPaint.setStyle(h.kFillStyle), this.colorPaint.setColor(255, 255, 255, 255)
        }
        var e = a("is-browser"),
            f = e ? {} : a("plask"),
            g = f.SkCanvas,
            h = f.SkPaint,
            i = a("pex-geom/Rect");
        d.prototype.isAnyItemDirty = function(a) {
            var b = !1;
            return a.forEach(function(a) {
                a.dirty && (a.dirty = !1, b = !0)
            }), b
        }, d.prototype.draw = function(a, b) {
            if (this.isAnyItemDirty(a)) {
                var c = this.canvas;
                c.save(), c.scale(this.highdpi, this.highdpi), c.drawColor(0, 0, 0, 0, f.SkPaint.kClearMode);
                for (var d = 10, e = 10, g = 160, h = 0, j = 0, k = 3, l = 0; l < a.length; l++) {
                    var m = a[l];
                    m.px && m.px && (e = m.px / this.highdpi, d = m.py / this.highdpi);
                    var n = 20;
                    if (m.options && m.options.palette && !m.options.paletteImage && (m.options.palette.width ? m.options.paletteImage = m.options.palette : m.options.paletteImage = f.SkCanvas.createFromImage(m.options.palette)), "slider" == m.type && (n = 20 * b + 14), "toggle" == m.type && (n = 20 * b), "multislider" == m.type && (n = 20 + 14 * m.getValue().length * b), "color" == m.type && (n = 20 + 14 * (m.options.alpha ? 4 : 3) * b), "color" == m.type && m.options.paletteImage && (n += (g * m.options.paletteImage.height / m.options.paletteImage.width + 2) * b), "button" == m.type && (n = 24 * b), "texture2D" == m.type && (n = 24 + m.texture.getHeight() * g / m.texture.getWidth()), "textureCube" == m.type && (n = 24 + g / 2),
                        "radiolist" == m.type && (n = 18 + 20 * m.items.length * b), "texturelist" == m.type && (h = Math.floor((g - 2 * k) / m.itemsPerRow), j = Math.ceil(m.items.length / m.itemsPerRow), n = 21 + j * h), "header" == m.type && (n = 26 * b), "text" == m.type && (n = 45 * b), "separator" != m.type && c.drawRect(this.panelBgPaint, e, d, e + g, d + n - 2), "slider" == m.type) {
                        m.getValue();
                        c.drawRect(this.controlBgPaint, e + 3, d + 18, e + g - 3, d + n - 5), c.drawRect(this.controlHighlightPaint, e + 3, d + 18, e + 3 + (g - 6) * m.getNormalizedValue(), d + n - 5), i.set4(m.activeArea, e + 3, d + 18, g - 3 - 3, n - 5 - 18), c.drawText(this.fontPaint, a[l].title + " : " + m.getStrValue(), e + 4, d + 13)
                    } else if ("multislider" == m.type) {
                        for (var o = 0; o < m.getValue().length; o++) c.drawRect(this.controlBgPaint, e + 3, d + 18 + 14 * o * b, e + g - 3, d + 18 + 14 * (o + 1) * b - 3), c.drawRect(this.controlHighlightPaint, e + 3, d + 18 + 14 * o * b, e + 3 + (g - 6) * m.getNormalizedValue(o), d + 18 + 14 * (o + 1) * b - 3);
                        c.drawText(this.fontPaint, a[l].title + " : " + m.getStrValue(), e + 4, d + 13), i.set4(m.activeArea, e + 4, d + 18, g - 3 - 3, n - 5 - 18)
                    } else if ("color" == m.type) {
                        for (var p = m.options.alpha ? 4 : 3, o = 0; p > o; o++) c.drawRect(this.controlBgPaint, e + 3, d + 18 + 14 * o * b, e + g - 3, d + 18 + 14 * (o + 1) * b - 3), c.drawRect(this.controlHighlightPaint, e + 3, d + 18 + 14 * o * b, e + 3 + (g - 6) * m.getNormalizedValue(o), d + 18 + 14 * (o + 1) * b - 3);
                        var q = m.getValue();
                        this.colorPaint.setColor(255 * q[0], 255 * q[1], 255 * q[2], 255), c.drawRect(this.colorPaint, e + g - 12 - 3, d + 3, e + g - 3, d + 3 + 12), m.options.paletteImage && c.drawCanvas(this.imagePaint, m.options.paletteImage, e + 3, d + 18 + 14 * p, e + g - 3, d + 18 + 14 * p + g * m.options.paletteImage.height / m.options.paletteImage.width), c.drawText(this.fontPaint, a[l].title + " : " + m.getStrValue(), e + 3, d + 13), i.set4(m.activeArea, e + 4, d + 18, g - 3 - 3, n - 5 - 18)
                    } else if ("button" == m.type) {
                        var r = m.active ? this.controlHighlightPaint : this.controlBgPaint,
                            s = m.active ? this.fontHighlightPaint : this.fontPaint;
                        if (c.drawRect(r, e + 3, d + 3, e + g - 3, d + n - 5), i.set4(m.activeArea, e + 3, d + 3, g - 3 - 3, n - 5), m.options.color) {
                            var q = m.options.color;
                            this.controlFeaturePaint.setColor(255 * q[0], 255 * q[1], 255 * q[2], 255), c.drawRect(this.controlFeaturePaint, e + g - 8, d + 3, e + g - 3, d + n - 5)
                        }
                        c.drawText(s, a[l].title, e + 5, d + 15)
                    } else if ("toggle" == m.type) {
                        var t = m.contextObject[m.attributeName],
                            u = t ? this.controlHighlightPaint : this.controlBgPaint;
                        c.drawRect(u, e + 3, d + 3, e + n - 5, d + n - 5), i.set4(m.activeArea, e + 3, d + 3, n - 5, n - 5), c.drawText(this.fontPaint, a[l].title, e + n, d + 13)
                    } else if ("radiolist" == m.type) {
                        c.drawText(this.fontPaint, m.title, e + 4, d + 14);
                        for (var v = this.controlBgPaint, w = 20 * b, o = 0; o < m.items.length; o++) {
                            var x = m.items[o],
                                t = m.contextObject[m.attributeName] == x.value,
                                v = t ? this.controlHighlightPaint : this.controlBgPaint;
                            c.drawRect(v, e + 3, 18 + o * w + d + 3, e + w - 5, w + o * w + d + 18 - 5), c.drawText(this.fontPaint, x.name, e + w, 18 + o * w + d + 13)
                        }
                        i.set4(m.activeArea, e + 3, 18 + d + 3, w - 5, m.items.length * w - 5)
                    } else if ("texturelist" == m.type) {
                        c.drawText(this.fontPaint, m.title, e + 4, d + 14);
                        for (var o = 0; o < m.items.length; o++) {
                            var y = o % m.itemsPerRow,
                                z = Math.floor(o / m.itemsPerRow),
                                v = this.controlBgPaint,
                                A = 0;
                            if (c.drawRect(v, e + 3 + y * h, d + 18 + z * h, e + 3 + (y + 1) * h - 1, d + 18 + (z + 1) * h - 1), m.items[o].value == m.contextObject[m.attributeName]) {
                                var B = this.controlStrokeHighlightPaint;
                                c.drawRect(B, e + 3 + y * h + 1, d + 18 + z * h + 1, e + 3 + (y + 1) * h - 1 - 1, d + 18 + (z + 1) * h - 1 - 1), A = 2
                            }
                            m.items[o].activeArea || (m.items[o].activeArea = [
                                [0, 0],
                                [0, 0]
                            ]), i.set4(m.items[o].activeArea, e + 3 + y * h + A, d + 18 + z * h + A, h - 1 - 2 * A, h - 1 - 2 * A)
                        }
                        i.set4(m.activeArea, e + 3, 18 + d + 3, g - 3 - 3, h * j - 5)
                    } else "texture2D" == m.type ? (c.drawText(this.fontPaint, m.title, e + 3, d + 13), i.set4(m.activeArea, e + 3, d + 18, g - 3 - 3, n - 5 - 18)) : "textureCube" == m.type ? (c.drawText(this.fontPaint, m.title, e + 3, d + 13), i.set4(m.activeArea, e + 3, d + 18, g - 3 - 3, n - 5 - 18)) : "header" == m.type ? (c.drawRect(this.headerBgPaint, e + 3, d + 3, e + g - 3, d + n - 5), c.drawText(this.headerFontPaint, a[l].title, e + 6, d + 16)) : "text" == m.type ? (c.drawText(this.fontPaint, a[l].title, e + 3, d + 13), c.drawRect(this.textBgPaint, e + 3, d + 20, e + g - 3, d + n - 5), c.drawText(this.fontPaint, m.contextObject[m.attributeName], e + 3 + 3, d + 15 + 20), i.set4(m.activeArea, e + 3, d + 20, g - 6, n - 20 - 5), m.focus && c.drawRect(this.textBorderPaint, m.activeArea[0][0], m.activeArea[0][1], m.activeArea[1][0], m.activeArea[1][1])) : "separator" == m.type || c.drawText(this.fontPaint, a[l].title, e + 3, d + 13);
                    d += n
                }
                c.restore(), this.updateTexture()
            }
        }, d.prototype.getImageColor = function(a, b, c) {
            var d = a[4 * (b + c * a.width) + 2] / 255,
                e = a[4 * (b + c * a.width) + 1] / 255,
                f = a[4 * (b + c * a.width) + 0] / 255;
            return [d, e, f]
        }, d.prototype.getTexture = function() {
            return this.tex
        }, d.prototype.getCanvas = function() {
            return this.canvas
        }, d.prototype.getCanvasPaint = function() {
            return this.canvasPaint
        }, d.prototype.updateTexture = function() {
            this.tex && this.tex.update(this.canvas, this.canvas.width, this.canvas.height)
        }, b.exports = d
    }, {
        "is-browser": 160,
        "pex-geom/Rect": 154,
        plask: 49
    }],
    159: [function(a, b, c) {
        b.exports = a("./GUI")
    }, {
        "./GUI": 155
    }],
    160: [function(a, b, c) {
        arguments[4][103][0].apply(c, arguments)
    }, {
        dup: 103
    }],
    161: [function(a, b, c) {
        b.exports = {
            loadBinary: a("./loadBinary"),
            loadImage: a("./loadImage"),
            loadText: a("./loadText"),
            loadJSON: a("./loadJSON")
        }
    }, {
        "./loadBinary": 162,
        "./loadImage": 163,
        "./loadJSON": 164,
        "./loadText": 165
    }],
    162: [function(a, b, c) {
        function d(a) {
            for (var b = new ArrayBuffer(a.length), c = new Uint8Array(b), d = 0; d < a.length; ++d) c[d] = a[d];
            return b
        }

        function e(a, b) {
            var c = new XMLHttpRequest;
            c.open("GET", a, !0), c.responseType = "arraybuffer", c.onreadystatechange = function(a) {
                4 == c.readyState && (200 == c.status ? b(null, c.response) : b("loadBinaryFile error : " + c.response, null))
            }, c.send(null)
        }

        function f(a, b) {
            try {
                if (!i.existsSync(a) && b) return b("File doesn	 exist", null)
            } catch (c) {
                return b("loadBinaryFile error : " + c.toString(), null)
            }
            var e = i.readFileSync(a),
                f = d(e);
            b(null, f)
        }

        function g(a, b) {
            h ? e(a, b) : f(a, b)
        }
        var h = a("is-browser"),
            i = a("fs");
        b.exports = g
    }, {
        fs: 49,
        "is-browser": 166
    }],
    163: [function(a, b, c) {
        function d(a, b) {
            var c = new Image;
            c.onload = function() {
                b(null, c)
            }, c.src = a
        }

        function e(a, b) {
            try {
                var c = g.SkCanvas.createFromImage(a);
                b(null, c)
            } catch (d) {
                b(d + ' "' + a + '"', null)
            }
        }
        var f = a("is-browser"),
            g = f ? {} : a("plask");
        b.exports = f ? d : e
    }, {
        "is-browser": 166,
        plask: 49
    }],
    164: [function(a, b, c) {
        function d(a, b) {
            e(a, function(a, c) {
                if (a) b(a, null);
                else try {
                    var d = JSON.parse(c);
                    b(null, d)
                } catch (e) {
                    b(e.toString(), null)
                }
            })
        }
        var e = a("./loadText");
        b.exports = d
    }, {
        "./loadText": 165
    }],
    165: [function(a, b, c) {
        function d(a, b) {
            var c = new XMLHttpRequest;
            c.open("GET", a, !0), c.onreadystatechange = function(a) {
                4 == c.readyState && (200 == c.status ? b && b(null, c.responseText) : b("WebIO.loadTextFile error : " + c.statusText, null))
            }, c.send(null)
        }

        function e(a, b) {
            if (!h.existsSync(a) && b) return b("File doesn't exist \"" + a + '"', null);
            var c = h.readFileSync(a, "utf8");
            b && b(null, c)
        }

        function f(a, b) {
            g ? d(a, b) : e(a, b)
        }
        var g = a("is-browser"),
            h = a("fs");
        b.exports = f
    }, {
        fs: 49,
        "is-browser": 166
    }],
    166: [function(a, b, c) {
        arguments[4][103][0].apply(c, arguments)
    }, {
        dup: 103
    }],
    167: [function(a, b, c) {
        function d() {
            return [1, 0, 0, 0, 1, 0, 0, 0, 1]
        }

        function e(a, b) {
            return a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3] && a[4] == b[4] && a[5] == b[5] && a[6] == b[6] && a[7] == b[7] && a[8] == b[8] && a[9] == b[9]
        }

        function f(a, b, c, d, e, f, g, h, i, j) {
            return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a[4] = f, a[5] = g, a[6] = h, a[7] = i, a[8] = j, a
        }

        function g(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a
        }

        function h(a) {
            return a[0] = a[4] = a[8] = 1, a[1] = a[2] = a[3] = a[5] = a[6] = a[7] = 0, a
        }

        function i(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[4], a[4] = b[5], a[5] = b[6], a[6] = b[8], a[7] = b[9], a[8] = b[10], a
        }

        function j(a, b) {
            var c = b[0],
                d = b[1],
                e = b[2],
                f = b[3],
                g = c + c,
                h = d + d,
                i = e + e,
                j = c * g,
                k = c * h,
                l = c * i,
                m = d * h,
                n = d * i,
                o = e * i,
                p = f * g,
                q = f * h,
                r = f * i;
            return a[0] = 1 - (m + o), a[3] = k - r, a[6] = l + q, a[1] = k + r, a[4] = 1 - (j + o), a[7] = n - p, a[2] = l - q, a[5] = n + p, a[8] = 1 - (j + m), a
        }
        var k = {
            create: d,
            set: g,
            set9: f,
            identity: h,
            equals: e,
            fromMat4: i,
            fromQuat: j
        };
        b.exports = k
    }, {}],
    168: [function(a, b, c) {
        function d() {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }

        function e(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a
        }

        function f(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
            return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a[4] = f, a[5] = g, a[6] = h, a[7] = i, a[8] = j, a[9] = k, a[10] = l, a[11] = m, a[12] = n, a[13] = o, a[14] = p, a[15] = q, a
        }

        function g(a, b) {
            return a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3] && a[4] == b[4] && a[5] == b[5] && a[6] == b[6] && a[7] == b[7] && a[8] == b[8] && a[9] == b[9] && a[10] == b[10] && a[11] == b[11] && a[12] == b[12] && a[13] == b[13] && a[14] == b[14] && a[15] == b[15]
        }

        function h(a) {
            return a.slice(0)
        }

        function i(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
            var r = a[0],
                s = a[1],
                t = a[2],
                u = a[3],
                v = a[4],
                w = a[5],
                x = a[6],
                y = a[7],
                z = a[8],
                A = a[9],
                B = a[10],
                C = a[11],
                D = a[12],
                E = a[13],
                F = a[14],
                G = a[15];
            return a[0] = b * r + c * v + d * z + e * D, a[1] = b * s + c * w + d * A + e * E, a[2] = b * t + c * x + d * B + e * F, a[3] = b * u + c * y + d * C + e * G, a[4] = f * r + g * v + h * z + i * D, a[5] = f * s + g * w + h * A + i * E, a[6] = f * t + g * x + h * B + i * F, a[7] = f * u + g * y + h * C + i * G, a[8] = j * r + k * v + l * z + m * D, a[9] = j * s + k * w + l * A + m * E, a[10] = j * t + k * x + l * B + m * F, a[11] = j * u + k * y + l * C + m * G, a[12] = n * r + o * v + p * z + q * D, a[13] = n * s + o * w + p * A + q * E, a[14] = n * t + o * x + p * B + q * F, a[15] = n * u + o * y + p * C + q * G, a
        }

        function j(a, b) {
            var c = a[0],
                d = a[1],
                e = a[2],
                f = a[3],
                g = a[4],
                h = a[5],
                i = a[6],
                j = a[7],
                k = a[8],
                l = a[9],
                m = a[10],
                n = a[11],
                o = a[12],
                p = a[13],
                q = a[14],
                r = a[15],
                s = b[0],
                t = b[1],
                u = b[2],
                v = b[3],
                w = b[4],
                x = b[5],
                y = b[6],
                z = b[7],
                A = b[8],
                B = b[9],
                C = b[10],
                D = b[11],
                E = b[12],
                F = b[13],
                G = b[14],
                H = b[15];
            return a[0] = s * c + t * g + u * k + v * o, a[1] = s * d + t * h + u * l + v * p, a[2] = s * e + t * i + u * m + v * q, a[3] = s * f + t * j + u * n + v * r, a[4] = w * c + x * g + y * k + z * o, a[5] = w * d + x * h + y * l + z * p, a[6] = w * e + x * i + y * m + z * q, a[7] = w * f + x * j + y * n + z * r, a[8] = A * c + B * g + C * k + D * o, a[9] = A * d + B * h + C * l + D * p, a[10] = A * e + B * i + C * m + D * q, a[11] = A * f + B * j + C * n + D * r, a[12] = E * c + F * g + G * k + H * o, a[13] = E * d + F * h + G * l + H * p, a[14] = E * e + F * i + G * m + H * q, a[15] = E * f + F * j + G * n + H * r, a
        }

        function k(a) {
            var b = a[0],
                c = a[1],
                d = a[2],
                e = a[3],
                f = a[4],
                g = a[5],
                h = a[6],
                i = a[7],
                j = a[8],
                k = a[9],
                l = a[10],
                m = a[11],
                n = a[12],
                o = a[13],
                p = a[14],
                q = a[15];
            a[0] = g * l * q - g * m * p - k * h * q + k * i * p + o * h * m - o * i * l, a[4] = -f * l * q + f * m * p + j * h * q - j * i * p - n * h * m + n * i * l, a[8] = f * k * q - f * m * o - j * g * q + j * i * o + n * g * m - n * i * k, a[12] = -f * k * p + f * l * o + j * g * p - j * h * o - n * g * l + n * h * k, a[1] = -c * l * q + c * m * p + k * d * q - k * e * p - o * d * m + o * e * l, a[5] = b * l * q - b * m * p - j * d * q + j * e * p + n * d * m - n * e * l, a[9] = -b * k * q + b * m * o + j * c * q - j * e * o - n * c * m + n * e * k, a[13] = b * k * p - b * l * o - j * c * p + j * d * o + n * c * l - n * d * k, a[2] = c * h * q - c * i * p - g * d * q + g * e * p + o * d * i - o * e * h, a[6] = -b * h * q + b * i * p + f * d * q - f * e * p - n * d * i + n * e * h, a[10] = b * g * q - b * i * o - f * c * q + f * e * o + n * c * i - n * e * g, a[14] = -b * g * p + b * h * o + f * c * p - f * d * o - n * c * h + n * d * g, a[3] = -c * h * m + c * i * l + g * d * m - g * e * l - k * d * i + k * e * h, a[7] = b * h * m - b * i * l - f * d * m + f * e * l + j * d * i - j * e * h, a[11] = -b * g * m + b * i * k + f * c * m - f * e * k - j * c * i + j * e * g, a[15] = b * g * l - b * h * k - f * c * l + f * d * k + j * c * h - j * d * g;
            var r = b * a[0] + c * a[4] + d * a[8] + e * a[12];
            return 0 == r ? null : (r = 1 / r, a[0] *= r, a[1] *= r, a[2] *= r, a[3] *= r, a[4] *= r, a[5] *= r, a[6] *= r, a[7] *= r, a[8] *= r, a[9] *= r, a[10] *= r, a[11] *= r, a[12] *= r, a[13] *= r, a[14] *= r, a[15] *= r, a)
        }

        function l(a) {
            var b = a[1],
                c = a[2],
                d = a[3],
                e = a[6],
                f = a[7],
                g = a[8],
                h = a[9],
                i = a[11],
                j = a[12],
                k = a[13],
                l = a[14];
            return a[1] = a[4], a[2] = g, a[3] = j, a[4] = b, a[6] = h, a[7] = k, a[8] = c, a[9] = e, a[11] = l, a[12] = d, a[13] = f, a[14] = i, a
        }

        function m(a) {
            return a[0] = a[5] = a[10] = a[15] = 1, a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = a[12] = a[13] = a[14] = 0, a
        }

        function n(a, b, c, d) {
            return a[0] = b, a[5] = c, a[10] = d, a
        }

        function o(a, b) {
            return n(a, b[0], b[1], b[2])
        }

        function p(a, b, c, d) {
            return i(a, b, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1)
        }

        function q(a, b) {
            return p(a, b[0], b[1], b[2])
        }

        function r(a, b, c, d) {
            return a[12] = b, a[13] = c, a[14] = d, a
        }

        function s(a, b) {
            return r(a, b[0], b[1], b[2])
        }

        function t(a, b, c, d) {
            return i(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, c, d, 1)
        }

        function u(a, b) {
            return t(a, b[0], b[1], b[2])
        }

        function v(a, b, c, d, e) {
            var f = Math.sqrt(c * c + d * d + e * e);
            if (1e-4 > f) return null;
            var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D;
            return f = 1 / f, c *= f, d *= f, e *= f, g = Math.sin(b), h = Math.cos(b), i = 1 - h, j = o = t = 1, k = l = m = n = p = q = r = s = u = 0, v = c * c * i + h, w = d * c * i + e * g, x = e * c * i - d * g, y = c * d * i - e * g, z = d * d * i + h, A = e * d * i + c * g, B = c * e * i + d * g, C = d * e * i - c * g, D = e * e * i + h, a[0] = j * v + n * w + r * x, a[1] = k * v + o * w + s * x, a[2] = l * v + p * w + t * x, a[3] = m * v + q * w + u * x, a[4] = j * y + n * z + r * A, a[5] = k * y + o * z + s * A, a[6] = l * y + p * z + t * A, a[7] = m * y + q * z + u * A, a[8] = j * B + n * C + r * D, a[9] = k * B + o * C + s * D, a[10] = l * B + p * C + t * D, a[11] = m * B + q * C + u * D, a
        }

        function w(a, b, c) {
            return v(a, b, c[0], c[1], c[2])
        }

        function x(a, b, c, d, e) {
            var f = Math.sqrt(c * c + d * d + e * e);
            if (1e-4 > f) return null;
            var g, h, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E;
            f = 1 / f, c *= f, d *= f, e *= f, g = Math.sin(b), h = Math.cos(b), j = 1 - h, k = p = u = 1, l = m = n = o = q = r = s = t = v = 0, w = c * c * j + h, x = d * c * j + e * g, y = e * c * j - d * g, z = c * d * j - e * g, A = d * d * j + h, B = e * d * j + c * g, C = c * e * j + d * g, D = d * e * j - c * g, E = e * e * j + h;
            var F = k * w + o * x + s * y,
                G = l * w + p * x + t * y,
                H = m * w + q * x + u * y,
                I = n * w + r * x + v * y,
                J = k * z + o * A + s * B,
                K = l * z + p * A + t * B,
                L = m * z + q * A + u * B,
                M = n * z + r * A + v * B,
                N = k * C + o * D + s * E,
                O = l * C + p * D + t * E,
                P = m * C + q * D + u * E,
                Q = n * C + r * D + v * E;
            return i(a, F, G, H, I, J, K, L, M, N, O, P, Q, 0, 0, 0, 1)
        }

        function y(a, b, c) {
            return x(a, b, c[0], c[1], c[2])
        }

        function z(a, b, c, d) {
            var e = Math.cos(b),
                f = Math.sin(b),
                g = Math.cos(c),
                h = Math.sin(c),
                i = Math.cos(d),
                j = Math.sin(d);
            return a[0] = g * i, a[4] = -e * j + f * h * i, a[8] = f * j + e * h * i, a[1] = g * j, a[5] = e * i + f * h * j, a[9] = -f * i + e * h * j, a[2] = -h, a[6] = f * g, a[10] = e * g, a
        }

        function A(a, b) {
            return z(a, b[0], b[1], b[2])
        }

        function B(a, b, c, d) {
            var e = Math.cos(b),
                f = Math.sin(b),
                g = Math.cos(c),
                h = Math.sin(c),
                j = Math.cos(d),
                k = Math.sin(d),
                l = g * j,
                m = -e * k + f * h * j,
                n = f * k + e * h * j,
                o = g * k,
                p = e * j + f * h * k,
                q = -f * j + e * h * k,
                r = -h,
                s = f * g,
                t = e * g;
            return i(a, l, o, r, 0, m, p, s, 0, n, q, t, 0, 0, 0, 0, 1)
        }

        function C(a, b) {
            return B(a, b[0], b[1], b[2])
        }

        function D(a, b, c, d, e, f, g, h, i, j) {
            return a[0] = b, a[1] = c, a[2] = d, a[4] = e, a[5] = f, a[6] = g, a[8] = h, a[9] = i, a[10] = j, a
        }

        function E(a, b, c, d) {
            return D(a, b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2])
        }

        function F(a, b) {
            var c = b[0],
                d = b[1],
                e = b[2],
                f = b[3],
                g = c + c,
                h = d + d,
                i = e + e,
                j = c * g,
                k = c * h,
                l = c * i,
                m = d * h,
                n = d * i,
                o = e * i,
                p = f * g,
                q = f * h,
                r = f * i;
            return a[0] = 1 - (m + o), a[4] = k - r, a[8] = l + q, a[1] = k + r, a[5] = 1 - (j + o), a[9] = n - p, a[2] = l - q, a[6] = n + p, a[10] = 1 - (j + m), a[3] = a[7] = a[11] = a[12] = a[13] = a[14] = 0, a[15] = 1, a
        }

        function G(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[4] = b[3], a[5] = b[4], a[6] = b[5], a[8] = b[6], a[9] = b[7], a[10] = b[8], a[3] = a[7] = a[11] = a[12] = a[13] = a[14] = 0, a[15] = 1, a
        }

        function H(a, b, c) {
            return n(d(), a, b, c)
        }

        function I(a) {
            return H(a[0], a[1], a[2])
        }

        function J(a, b, c) {
            return r(d(), a, b, c)
        }

        function K(a) {
            return J(a[0], a[1], a[2])
        }

        function L(a, b, c, e) {
            return v(d(), a, b, c, e)
        }

        function M(a, b) {
            return L(a, b[0], b[1], b[2])
        }

        function N(a, b, c) {
            return z(d(), a, b, c)
        }

        function O(a) {
            return N(a[0], a[1], a[2])
        }

        function P(a, b, c, e, f, g, h, i, j) {
            return D(d(), a, b, c, e, f, g, h, i, j)
        }

        function Q(a, b, c) {
            return P(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2])
        }

        function R(a, b, c, d, e, f, g) {
            var h = 1 / (c - b),
                i = 1 / (e - d),
                j = 1 / (f - g),
                k = 2 * f;
            return a[0] = k * h, a[1] = a[2] = 0, a[3] = 0, a[4] = 0, a[5] = k * i, a[6] = 0, a[7] = 0, a[8] = (c + b) * h, a[9] = (e + d) * i, a[10] = (g + f) * j, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = g * k * j, a[15] = 0, a
        }

        function S(a, b, c, d, e) {
            var f = 1 / Math.tan(b / 180 * Math.PI * .5),
                g = 1 / (d - e);
            return a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[12] = a[13] = a[15] = 0, a[0] = f / c, a[5] = f, a[10] = (e + d) * g, a[11] = -1, a[14] = 2 * e * d * g, a
        }

        function T(a, b, c, d, e, f, g) {
            var h = b - c,
                i = d - e,
                j = f - g;
            return a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = 0, a[0] = -2 / h, a[5] = -2 / i, a[10] = 2 / j, a[12] = (b + c) / h, a[13] = (e + d) / i, a[14] = (g + f) / j, a[15] = 1, a
        }

        function U(a, b, c, d, e, f, g, h, i, j) {
            var k, l, m, n, o, p, q, r, s, t;
            return Math.abs(b - e) < 1e-6 && Math.abs(c - f) < 1e-6 && Math.abs(d - g) < 1e-6 ? (a[0] = 1, a[1] = a[2] = a[3] = 0, a[5] = 1, a[4] = a[6] = a[7] = 0, a[10] = 1, a[8] = a[9] = a[11] = 0, a[15] = 1, a[12] = a[13] = a[14] = 0, a) : (q = b - e, r = c - f, s = d - g, t = 1 / Math.sqrt(q * q + r * r + s * s), q *= t, r *= t, s *= t, k = i * s - j * r, l = j * q - h * s, m = h * r - i * q, t = Math.sqrt(k * k + l * l + m * m), t && (t = 1 / t, k *= t, l *= t, m *= t), n = r * m - s * l, o = s * k - q * m, p = q * l - r * k, t = Math.sqrt(n * n + o * o + p * p), t && (t = 1 / t, k *= t, l *= t, m *= t), a[0] = k, a[1] = n, a[2] = q, a[3] = 0, a[4] = l, a[5] = o, a[6] = r, a[7] = 0, a[8] = m, a[9] = p, a[10] = s, a[11] = 0, a[12] = -(k * b + l * c + m * d), a[13] = -(n * b + o * c + p * d), a[14] = -(q * b + r * c + s * d), a[15] = 1, a)
        }

        function V(a, b, c, d) {
            return U(a, b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2])
        }
        var W = {
            create: d,
            set: e,
            set16: f,
            equals: g,
            copy: h,
            mult16: i,
            mult: j,
            invert: k,
            transpose: l,
            setScale3: n,
            setScale: o,
            scale3: p,
            scale: q,
            setTranslation3: r,
            setTranslation: s,
            translate3: t,
            translate: u,
            setRotationXYZ3: z,
            setRotationXYZ: A,
            rotateXYZ3: B,
            rotateXYZ: C,
            setRotation3: v,
            setRotation: w,
            rotate3: x,
            rotate: y,
            setRotationFromOnB9: D,
            setRotationFromOnB: E,
            fromQuat: F,
            fromMat3: G,
            identity: m,
            createFromScale3: H,
            createFromScale: I,
            createFromTranslation3: J,
            createFromTranslation: K,
            createFromRotation3: L,
            createFromRotation: M,
            createFromRotationXYZ: O,
            createFromRotationXYZ3: N,
            createFromOnB9: P,
            createFromOnB: Q,
            frustum: R,
            perspective: S,
            ortho: T,
            lookAt9: U,
            lookAt: V
        };
        b.exports = W
    }, {}],
    169: [function(a, b, c) {
        function d() {
            return [0, 0, 0, 1]
        }

        function e(a, b) {
            return a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3]
        }

        function f(a) {
            return a[0] = a[1] = a[2] = 0, a[3] = 1, a
        }

        function g(a) {
            return a.slice(0)
        }

        function h(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a
        }

        function i(a, b, c, d, e) {
            return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a
        }

        function j(a, b) {
            var c = a[0],
                d = a[1],
                e = a[2],
                f = a[3],
                g = b[0],
                h = b[1],
                i = b[2],
                j = b[3];
            return a[0] = f * g + c * j + d * i - e * h, a[1] = f * h + d * j + e * g - c * i, a[2] = f * i + e * j + c * h - d * g, a[3] = f * j - c * g - d * h - e * i, a
        }

        function k(a) {
            var b = o(a, a);
            return b = b ? 1 / b : 0, a[0] *= -b, a[1] *= -b, a[2] *= -b, a[3] *= b, a
        }

        function l(a) {
            return a[0] *= -1, a[1] *= -1, a[2] *= -1, a
        }

        function m(a) {
            var b = a[0],
                c = a[1],
                d = a[2],
                e = a[3];
            return Math.sqrt(b * b + c * c + d * d + e * e)
        }

        function n(a) {
            var b = m(a);
            return b > G && (b = 1 / b, a[0] *= b, a[1] *= b, a[2] *= b, a[3] *= b), a
        }

        function o(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
        }

        function p(a, b, c, d, e) {
            var f = .5 * b,
                g = Math.sin(f);
            return a[0] = c * g, a[1] = d * g, a[2] = e * g, a[3] = Math.cos(f), n(a)
        }

        function q(a, b, c) {
            return p(a, b, c[0], c[1], c[2])
        }

        function r(a, b, c, d, e, f, g, h, i, j) {
            var k, l = b + f + j;
            return l >= 0 ? (k = Math.sqrt(l + 1), a[3] = .5 * k, k = .5 / k, a[0] = (g - i) * k, a[1] = (h - d) * k, a[2] = (c - e) * k) : b > f && b > j ? (k = Math.sqrt(1 + b - f - j), a[0] = .5 * k, k = .5 / k, a[1] = (c + e) * k, a[2] = (h + d) * k, a[3] = (g - i) * k) : f > j ? (k = Math.sqrt(1 + f - b - j), a[1] = .5 * k, k = .5 / k, a[0] = (c + e) * k, a[2] = (g + i) * k, a[3] = (h - d) * k) : (k = Math.sqrt(1 + j - b - f), a[2] = .5 * k, k = .5 / k, a[0] = (h + d) * k, a[1] = (g + i) * k, a[3] = (c - e) * k), a
        }

        function s(a, b) {
            return r(a, b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8])
        }

        function t(a, b) {
            return r(a, b[0], b[1], b[2], b[4], b[5], b[6], b[8], b[9], b[10])
        }

        function u(a, b, c, d, e, f, g, h, i, j) {
            return r(a, b, c, d, e, f, g, h, i, j)
        }

        function v(a, b, c, d) {
            return u(a, b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2])
        }

        function w(a) {
            return 2 * Math.acos(a[3])
        }

        function x(a, b) {
            return b[3] = w(a), C(a, b), b
        }

        function y(a, b, c) {
            c = F.set(I, void 0 === c ? H : c);
            var d = J,
                e = K,
                f = L;
            return d = F.normalize(F.set(d, b)), f = F.normalize(F.cross(F.set(f, c), d)), e = F.cross(F.set(e, d), f), v(a, f, e, d)
        }

        function z(a, b, c, d) {
            c *= .5, b *= .5, d *= .5;
            var e = Math.sin(c),
                f = Math.cos(c),
                g = Math.sin(b),
                h = Math.cos(b),
                i = Math.sin(d),
                j = Math.cos(d),
                k = f * h,
                l = e * g;
            return a[0] = i * k - j * l, a[1] = j * e * h + i * f * g, a[2] = j * f * g - i * e * h, a[3] = j * k + i * l, a
        }

        function A(a, b, c, d, e, f, g, h, i, j) {
            var k = F.set3(I, b, c, d),
                l = F.set3(J, e, f, g),
                m = F.normalize(F.sub(l, k)),
                n = F.set3(K, h, i, j);
            return y(a, m, n)
        }

        function B(a, b, c, d) {
            return A(a, b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2])
        }

        function C(a, b) {
            var c = a[3],
                d = 1 / Math.sqrt(1 - c * c);
            return b[0] = a[0] * d, b[1] = a[1] * d, b[2] = a[2] * d, b
        }

        function D(a, b, c) {
            var d, e, f, g, h, i = a[0],
                j = a[1],
                k = a[2],
                l = a[3],
                m = b[0],
                n = b[1],
                p = b[2],
                q = b[3];
            return e = o(a, b), 0 > e ? (e = -e, a[0] = -m, a[1] = -n, a[2] = -p, a[3] = -q) : (a[0] = m, a[1] = n, a[2] = p, a[3] = q), 1 - e > 1e-6 ? (d = Math.acos(e), f = Math.sin(d), g = Math.sin((1 - c) * d) / f, h = Math.sin(c * d) / f) : (g = 1 - c, h = c), a[0] = g * i + h * a[0], a[1] = g * j + h * a[1], a[2] = g * k + h * a[2], a[3] = g * l + h * a[3], a
        }

        function E(a, b, c) {
            return z(d(), a, b, c)
        }
        var F = a("./Vec3"),
            G = (a("./Vec4"), Math.pow(2, -24)),
            H = [0, 1, 0],
            I = [0, 0, 0],
            J = [0, 0, 0],
            K = [0, 0, 0],
            L = [0, 0, 0],
            M = {
                create: d,
                equals: e,
                identity: f,
                copy: g,
                set: h,
                set4: i,
                mult: j,
                invert: k,
                conjugate: l,
                dot: o,
                length: m,
                normalize: n,
                setAxisAngle3: p,
                setAxisAngle: q,
                fromMat3: s,
                fromMat4: t,
                setAxes9: u,
                setAxes: v,
                getAngle: w,
                getAxis: C,
                getAxisAngle: x,
                setEuler: z,
                fromDirection: y,
                slerp: D,
                fromTo9: A,
                fromTo: B,
                createFromEuler: E
            };
        b.exports = M
    }, {
        "./Vec3": 172,
        "./Vec4": 173
    }],
    170: [function(a, b, c) {
        function d(a, b, c) {
            return a + (b - a) * c
        }

        function e(a, b, c) {
            return Math.max(b, Math.min(a, c))
        }

        function f(a, b, c) {
            return c = e((c - a) / (b - a), 0, 1), c * c * (3 - 2 * c)
        }

        function g(a, b, c) {
            return (a - b) / (c - b)
        }

        function h(a, b, c, d, e) {
            return d + (e - d) * g(a, b, c)
        }

        function i(a) {
            return a * Math.PI / 180
        }

        function j(a) {
            return 180 * a / Math.PI
        }

        function k(a) {
            return a - Math.floor(a)
        }

        function l(a) {
            return a / Math.abs(a)
        }

        function m(a) {
            return 0 == (a & a - 1)
        }
        var n = {
            lerp: d,
            clamp: e,
            smoothstep: f,
            normalize: g,
            map: h,
            toRadians: i,
            toDegree: j,
            frac: k,
            sgn: l,
            isPOT: m
        };
        b.exports = n
    }, {}],
    171: [function(a, b, c) {
        function d() {
            return [0, 0]
        }

        function e(a, b) {
            return a[0] = b[0], a[1] = b[1], a
        }

        function f(a, b, c) {
            return a[0] = b, a[1] = c, a
        }

        function g(a, b) {
            return a[0] == b[0] && a[1] == b[1]
        }

        function h(a, b, c) {
            return a[0] == b && a[1] == c
        }

        function i(a, b) {
            return void 0 !== b ? (b[0] = a[0], b[1] = a[1], b) : a.slice(0)
        }

        function j(a, b) {
            return a[0] += b[0], a[1] += b[1], a
        }

        function k(a, b, c) {
            return a[0] += b, a[1] += c, a
        }

        function l(a, b) {
            return a[0] -= b[0], a[1] -= b[1], a
        }

        function m(a, b, c) {
            return a[0] -= b, a[1] -= c, a
        }

        function n(a, b) {
            return a[0] *= b, a[1] *= b, a
        }

        function o(a, b) {
            return a[0] * b[0] + a[1] * b[1]
        }

        function p(a) {
            var b = a[0],
                c = a[1];
            return Math.sqrt(b * b + c * c)
        }

        function q(a) {
            var b = a[0],
                c = a[1];
            return b * b + c * c
        }

        function r(a) {
            var b = a[0],
                c = a[1],
                d = Math.sqrt(b * b + c * c);
            return d = 1 / (d || 1), a[0] *= d, a[1] *= d, a
        }

        function s(a, b) {
            return t(a, b[0], b[1])
        }

        function t(a, b, c) {
            var d = b - a[0],
                e = c - a[1];
            return Math.sqrt(d * d + e * e)
        }

        function u(a, b) {
            return v(a, b[0], b[1], b[2])
        }

        function v(a, b, c) {
            var d = b - a[0],
                e = c - a[1];
            return d * d + e * e
        }

        function w(a, b) {
            var c = a[0],
                d = a[1],
                e = c * c + d * d,
                f = b * b;
            if (f > 0 && e > f) {
                var g = b / Math.sqrt(e);
                a[0] *= g, a[1] *= g
            }
            return a
        }

        function x(a) {
            return a[0] *= -1, a[1] *= -1, a
        }

        function y(a, b, c) {
            var d = a[0],
                e = a[1];
            return a[0] = d + (b[0] - d) * c, a[1] = e + (b[1] - e) * c, a
        }

        function z(a) {
            return a[0] = a[1] = -Number.MAX_VALUE, a
        }

        function A(a) {
            return a[0] = a[1] = Number.MAX_VALUE, a
        }

        function B(a) {
            return a[0] = a[1] = 0, a
        }
        var C = {
            create: d,
            set: e,
            set2: f,
            copy: i,
            equals: g,
            equals2: h,
            add: j,
            add2: k,
            sub: l,
            sub2: m,
            scale: n,
            dot: o,
            length: p,
            lengthSq: q,
            normalize: r,
            distance: s,
            distance2: t,
            distanceSq: u,
            distanceSq2: v,
            limit: w,
            invert: x,
            lerp: y,
            toMin: z,
            toMax: A,
            toZero: B
        };
        b.exports = C
    }, {}],
    172: [function(a, b, c) {
        function d() {
            return [0, 0, 0]
        }

        function e(a, b) {
            return a[0] == b[0] && a[1] == b[1] && a[2] == b[2]
        }

        function f(a, b, c, d) {
            return a[0] == b && a[1] == c && a[2] == d
        }

        function g(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a
        }

        function h(a, b, c, d) {
            return a[0] = b, a[1] = c, a[2] = d, a
        }

        function i(a, b) {
            return a[0] += b[0], a[1] += b[1], a[2] += b[2], a
        }

        function j(a, b, c, d) {
            return a[0] += b, a[1] += c, a[2] += d, a
        }

        function k(a, b) {
            return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a
        }

        function l(a, b, c, d) {
            return a[0] -= b, a[1] -= c, a[2] -= d, a
        }

        function m(a, b) {
            return a[0] *= b, a[1] *= b, a[2] *= b, a
        }

        function n(a, b) {
            var c = a[0],
                d = a[1],
                e = a[2];
            return a[0] = b[0] * c + b[4] * d + b[8] * e + b[12], a[1] = b[1] * c + b[5] * d + b[9] * e + b[13], a[2] = b[2] * c + b[6] * d + b[10] * e + b[14], a
        }

        function o(a, b) {
            var c = a[0],
                d = a[1],
                e = a[2],
                f = b[0],
                g = b[1],
                h = b[2],
                i = b[3],
                j = i * c + g * e - h * d,
                k = i * d + h * c - f * e,
                l = i * e + f * d - g * c,
                m = -f * c - g * d - h * e;
            return a[0] = j * i + m * -f + k * -h - l * -g, a[1] = k * i + m * -g + l * -f - j * -h, a[2] = l * i + m * -h + j * -g - k * -f, a
        }

        function p(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
        }

        function q(a, b) {
            var c = a[0],
                d = a[1],
                e = a[2],
                f = b[0],
                g = b[1],
                h = b[2];
            return a[0] = d * h - g * e, a[1] = e * f - h * c, a[2] = c * g - f * d, a
        }

        function r(a, b, c, d) {
            var e = a[0],
                f = a[1],
                g = a[2];
            return a[0] = f * d - c * g, a[1] = g * b - d * e, a[2] = e * c - b * f, a
        }

        function s(a) {
            var b = a[0],
                c = a[1],
                d = a[2];
            return Math.sqrt(b * b + c * c + d * d)
        }

        function t(a) {
            var b = a[0],
                c = a[1],
                d = a[2];
            return b * b + c * c + d * d
        }

        function u(a) {
            var b = a[0],
                c = a[1],
                d = a[2],
                e = Math.sqrt(b * b + c * c + d * d);
            return e = 1 / (e || 1), a[0] *= e, a[1] *= e, a[2] *= e, a
        }

        function v(a, b) {
            return w(a, b[0], b[1], b[2])
        }

        function w(a, b, c, d) {
            var e = b - a[0],
                f = c - a[1],
                g = d - a[2];
            return Math.sqrt(e * e + f * f + g * g)
        }

        function x(a, b) {
            return y(a, b[0], b[1], b[2])
        }

        function y(a, b, c, d) {
            var e = b - a[0],
                f = c - a[1],
                g = d - a[2];
            return e * e + f * f + g * g
        }

        function z(a, b) {
            var c = a[0],
                d = a[1],
                e = a[2],
                f = c * c + d * d + e * e,
                g = b * b;
            if (g > 0 && f > g) {
                var h = b / Math.sqrt(f);
                a[0] *= h, a[1] *= h, a[2] *= h
            }
            return a
        }

        function A(a) {
            return a[0] *= -1, a[1] *= -1, a[2] *= -1, a
        }

        function B(a, b, c) {
            var d = a[0],
                e = a[1],
                f = a[2];
            return a[0] = d + (b[0] - d) * c, a[1] = e + (b[1] - e) * c, a[2] = f + (b[2] - f) * c, a
        }

        function C(a) {
            return a[0] = a[1] = a[2] = 0, a
        }

        function D(a) {
            return a[0] = a[1] = a[2] = 1, a
        }

        function E(a) {
            return a[0] = a[1] = a[2] = Number.MAX_VALUE, a
        }

        function F(a) {
            return a[0] = a[1] = a[2] = -Number.MAX_VALUE, a
        }

        function G(a) {
            return a[0] = Math.abs(a[0]), a[1] = Math.abs(a[1]), a[2] = Math.abs(a[2]), a
        }

        function H() {
            return [1, 0, 0]
        }

        function I() {
            return [0, 1, 0]
        }

        function J() {
            return [0, 0, 1]
        }

        function K(a, b) {
            return void 0 !== b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b) : a.slice(0)
        }
        var L = {
            create: d,
            set: g,
            set3: h,
            copy: K,
            equals: e,
            equals3: f,
            add: i,
            add3: j,
            sub: k,
            sub3: l,
            scale: m,
            multMat4: n,
            multQuat: o,
            dot: p,
            cross: q,
            cross3: r,
            length: s,
            lengthSq: t,
            normalize: u,
            distance: v,
            distance3: w,
            distanceSq: x,
            distanceSq3: y,
            limit: z,
            invert: A,
            lerp: B,
            toZero: C,
            toOne: D,
            toMin: F,
            toMax: E,
            toAbs: G,
            xAxis: H,
            yAxis: I,
            zAxis: J
        };
        b.exports = L
    }, {}],
    173: [function(a, b, c) {
        function d() {
            return [0, 0, 0, 1]
        }

        function e(a, b) {
            return a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3]
        }

        function f(a, b, c, d, e) {
            return a[0] == b && a[1] == c && a[2] == d && a[3] == e
        }

        function g(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a
        }

        function h(a, b, c, d, e) {
            return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a
        }

        function i(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a
        }

        function j(a) {
            return a.slice(0)
        }

        function k(a, b) {
            var c = a[0],
                d = a[1],
                e = a[2],
                f = a[3];
            return a[0] = b[0] * c + b[4] * d + b[8] * e + b[12] * f, a[1] = b[1] * c + b[5] * d + b[9] * e + b[13] * f, a[2] = b[2] * c + b[6] * d + b[10] * e + b[14] * f, a[3] = b[3] * c + b[7] * d + b[11] * e + b[15] * f, a
        }

        function l(a, b, c) {
            var d = a[0],
                e = a[1],
                f = a[2],
                g = a[3];
            return a[0] = d + (b[0] - d) * c, a[1] = e + (b[1] - e) * c, a[2] = f + (b[2] - f) * c, a[3] = g + (b[3] - g) * c, a
        }
        var m = {
            create: d,
            set: g,
            set4: h,
            fromVec3: i,
            multMat4: k,
            copy: j,
            equals: e,
            equals4: f,
            lerp: l
        };
        b.exports = m
    }, {}],
    174: [function(a, b, c) {
        var d = (a("seedrandom"), a("simplex-noise")),
            e = new d(Math.random),
            f = {};
        f.seed = function(a) {
            Math.seedrandom(a), e = new d(Math.random)
        }, f["float"] = function(a, b) {
            return 0 == arguments.length ? (a = 0, b = 1) : 1 == arguments.length && (b = a, a = 0), a + (b - a) * Math.random()
        }, f["int"] = function(a, b) {
            return 0 == arguments.length ? (a = 0, b = Math.pow(2, 53) - 1) : 1 == arguments.length && (b = a, a = 0), Math.floor(f["float"](a, b))
        }, f.vec2 = function(a) {
            "undefined" == typeof a && (a = 1);
            var b = 2 * Math.random() - 1,
                c = 2 * Math.random() - 1,
                d = Math.random() * a,
                e = Math.sqrt(b * b + c * c);
            return [d * b / e, d * c / e]
        }, f.vec3 = function(a) {
            "undefined" == typeof a && (a = 1);
            var b = 2 * Math.random() - 1,
                c = 2 * Math.random() - 1,
                d = 2 * Math.random() - 1,
                e = Math.random() * a,
                f = Math.sqrt(b * b + c * c + d * d);
            return [e * b / f, e * c / f, e * d / f]
        }, f.vec2InRect = function(a) {
            return [a[0][0] + Math.random() * (a[1][0] - a[0][0]), a[0][1] + Math.random() * (a[1][1] - a[0][1])]
        }, f.vec3InAABB = function(a) {
            var b = a[0][0] + Math.random() * (a[1][0] - a[0][0]),
                c = a[0][1] + Math.random() * (a[1][1] - a[0][1]),
                d = a[0][2] + Math.random() * (a[1][2] - a[0][2]);
            return [b, c, d]
        }, f.chance = function(a) {
            return Math.random() <= a
        }, f.element = function(a) {
            return a[Math.floor(Math.random() * a.length)]
        }, f.noise2 = function(a, b) {
            return e.noise2D(a, b)
        }, f.noise3 = function(a, b, c) {
            return e.noise3D(a, b, c)
        }, f.noise4 = function(a, b, c, d) {
            return e.noise4D(a, b, c, d)
        }, b.exports = f
    }, {
        seedrandom: 214,
        "simplex-noise": 230
    }],
    175: [function(a, b, c) {
        b.exports = a("./Random")
    }, {
        "./Random": 174
    }],
    176: [function(a, b, c) {
        function d(a, b) {
            this._sender = null, this._type = a, this._data = b;
            for (var c in b) this[c] = b[c];
            this._stopPropagation = !1
        }
        d.prototype.copy = function() {
            var a = new d(this._type, this._data);
            return a.setSender(this._sender), a
        }, d.prototype.stopPropagation = function() {
            this._stopPropagation = !0
        }, d.prototype.getSender = function() {
            return this._sender
        }, d.prototype.setSender = function(a) {
            this._sender = a
        }, d.prototype.getType = function() {
            return this._type
        }, b.exports = d
    }, {}],
    177: [function(a, b, c) {
        EventDispatcher = function() {
            this._listeners = {}
        }, EventDispatcher.prototype.addEventListener = function(a, b) {
            this._listeners[a] = this._listeners[a] || [], this._listeners[a].push(b)
        }, EventDispatcher.prototype.dispatchEvent = function(a) {
            var b = a.getType();
            if (this.hasEventListener(b)) {
                a.setSender(this);
                for (var c = this._listeners[b], d = -1, e = c.length; ++d < e && (c[d](a), !a._stopPropagation););
            }
        }, EventDispatcher.prototype.removeEventListener = function(a, b) {
            if (this.hasEventListener(a))
                if (b) {
                    for (var c = this._listeners[a], d = c.length; --d > -1;)
                        if (c[d] == b) {
                            c.splice(d, 1), 0 == c.length && delete this._listeners[a];
                            break
                        }
                } else delete this._listeners[a]
        }, EventDispatcher.prototype.removeAllEventListeners = function() {
            this._listeners = {}
        }, EventDispatcher.prototype.hasEventListener = function(a) {
            return void 0 != this._listeners[a] && null != this._listeners[a]
        }, b.exports = EventDispatcher
    }, {}],
    178: [function(a, b, c) {
        function d() {
            e.call(this)
        }
        var e = a("./EventDispatcher"),
            f = a("./KeyboardEvent");
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.prototype.handleKeyDown = function(a) {
            a.keyboard = this, this.dispatchEvent(new f(f.KEY_DOWN, a))
        }, d.prototype.handleKeyPress = function(a) {
            a.keyboard = this, this.dispatchEvent(new f(f.KEY_PRESS, a))
        }, d.prototype.handleKeyUp = function(a) {
            a.keyboard = this, this.dispatchEvent(new f(f.KEY_UP, a))
        }, b.exports = d
    }, {
        "./EventDispatcher": 177,
        "./KeyboardEvent": 179
    }],
    179: [function(a, b, c) {
        function d(a, b) {
            e.call(this, a, b)
        }
        var e = a("./Event"),
            f = a("is-plask");
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.KEY_DOWN = "keydown", d.KEY_PRESS = "keypress", d.KEY_UP = "keyup", d.VK_BACKSPACE = f ? 51 : 8, d.VK_ENTER = f ? 56 : 13, d.VK_SPACE = f ? 49 : 32, d.VK_DELETE = f ? 117 : 46, d.VK_TAB = f ? 48 : 9, d.VK_ESC = f ? 53 : 27, d.VK_UP = f ? 126 : 38, d.VK_DOWN = f ? 125 : 40, d.VK_LEFT = f ? 123 : 37, d.VK_RIGHT = f ? 124 : 39, b.exports = d
    }, {
        "./Event": 176,
        "is-plask": 106
    }],
    180: [function(a, b, c) {
        function d() {
            e.call(this), this._x = 0, this._y = 0, this._prevX = 0, this._prevY = 0, this._deltaX = 0, this._deltaY = 0, this._isDown = !1
        }
        var e = a("./EventDispatcher"),
            f = a("./MouseEvent");
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.prototype.getPosX = function() {
            return this._x
        }, d.prototype.getPosY = function() {
            return this._y
        }, d.prototype.getPos = function(a) {
            return void 0 === a ? [this._x, this._y] : (a[0] = this._x, a[1] = this._y, a)
        }, d.prototype.getPrevPosX = function() {
            return this._prevX
        }, d.prototype.getPrevPosY = function() {
            return this._prevY
        }, d.prototype.getPrevPos = function(a) {
            return void 0 === a ? [this._prevX, this._prevY] : (a[0] = this._prevX, a[1] = this._prevY, a)
        }, d.prototype.getDeltaX = function() {
            return this._deltaX
        }, d.prototype.getDeltaY = function() {
            return this._deltaY
        }, d.prototype.getDelta = function(a) {
            return void 0 === a ? [this._deltaX, this._deltaY] : (a[0] = this._deltaX, a[1] = this._deltaY, a)
        }, d.prototype.handleMouseDown = function(a) {
            this._isDown = !0, a.mouse = this, this.dispatchEvent(new f(f.MOUSE_DOWN, a))
        }, d.prototype.handleMouseUp = function(a) {
            this._isDown = !1, a.mouse = this, this.dispatchEvent(new f(f.MOUSE_UP, a))
        }, d.prototype.handleMouseMove = function(a) {
            this._prevX = this._x, this._prevY = this._y, this._x = a.x, this._y = a.y, this._deltaX = this._x - this._prevX, this._deltaY = this._y - this._prevY, a.mouse = this, this._isDown ? this.dispatchEvent(new f(f.MOUSE_DRAG, a)) : this.dispatchEvent(new f(f.MOUSE_MOVE, a))
        }, d.prototype.handleMouseScroll = function(a) {
            a.mouse = this, this.dispatchEvent(new f(f.MOUSE_SCROLL, a))
        }, b.exports = d
    }, {
        "./EventDispatcher": 177,
        "./MouseEvent": 181
    }],
    181: [function(a, b, c) {
        function d(a, b) {
            e.call(this, a, b)
        }
        var e = a("./Event");
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.MOUSE_DOWN = "mousedown", d.MOUSE_UP = "mouseup", d.MOUSE_MOVE = "mousemove", d.MOUSE_DRAG = "mousedrag", d.MOUSE_SCROLL = "mousescroll", b.exports = d
    }, {
        "./Event": 176
    }],
    182: [function(a, b, c) {
        var d = a("pex-io"),
            e = {};
        e.load = function(a, b) {
            function c() {
                f ? b(e, null) : b(null, a)
            }
            var e = {},
                f = !1,
                g = 0,
                h = Object.keys(a),
                i = h.length;
            h.forEach(function(b) {
                function h(d, h) {
                    d ? (f = !0, e[b] = d) : a[b] = h, ++g == i && c()
                }
                var j = a[b];
                j.image ? d.loadImage(j.image, h) : j.text ? d.loadText(j.text, h) : j.json ? d.loadJSON(j.json, h) : j.binary ? d.loadBinary(j.binary, h) : j.glsl ? j.glsl.then(function(a) {
                    setTimeout(function() {
                        h(null, a)
                    }, 1)
                })["catch"](function(a) {
                    h(a, null)
                }) : h("ResourceLoader.load unknown resource type " + Object.keys(j), null)
            }), 0 == h.length && c()
        }, b.exports = e
    }, {
        "pex-io": 161
    }],
    183: [function(a, b, c) {
        var d = a("is-plask"),
            e = d ? a("plask") : {},
            f = {
                getNumScreens: function() {
                    return d ? e.Window.screensInfo().length : 1
                },
                getWidth: function(a) {
                    return a = a || 0, d ? e.Window.screensInfo()[a].width : window.innerWidth
                },
                getHeight: function(a) {
                    return a = a || 0, d ? e.Window.screensInfo()[a].height : window.innerHeight
                },
                getDevicePixelRatio: function(a) {
                    return a = a || 0, d ? e.Window.screensInfo()[a].highdpi : window.devicePixelRatio
                }
            };
        b.exports = f
    }, {
        "is-plask": 106,
        plask: 49
    }],
    184: [function(a, b, c) {
        function d() {
            this._start = 0, this._now = 0, this._prev = 0, this._delta = 0, this._deltaSeconds = 0, this._elapsedSeconds = 0, this._frames = -1, this._stopped = !1, this._fpsUpdateFrequency = 1e3, this._fpsFrames = 0, this._fpsTime = 0, this._fps = 0
        }
        d.prototype._update = function(a) {
            this._prev = this._now, this._now = a, this._delta = this._now - this._prev, this._deltaSeconds = this._delta / 1e3, this._elapsedSeconds = (this._now - this._start) / 1e3, this._frames++, this._fpsTime > this._fpsUpdateFrequency ? (this._fps = Math.floor(this._fpsFrames / (this._fpsTime / 1e3) * 10) / 10, this._fpsTime = 0, this._fpsFrames = 0) : (this._fpsTime += this._delta, this._fpsFrames++)
        }, d.prototype._stop = function() {
            this._stopped = !0, this._delta = 0, this._deltaSeconds = 0, this._fpsFrames = 0, this._fpsTime = 0, this._fps = 0
        }, d.prototype._restart = function(a) {
            this._start = a, this._now = a, this._prev = a, this._delta = 0, this._frames = 0, this._stopped = !1, this._deltaSeconds = 0, this._elapsedSeconds = 0, this._fpsFrames = 0, this._fpsTime = 0, this._fps = 0
        }, d.prototype._resume = function(a) {
            this._now = a, this._prev = a, this._delta = 0, this._stopped = !1, this._fpsFrames = 0, this._fpsTime = 0, this._fps = 0
        }, d.prototype.getDelta = function() {
            return this._delta
        }, d.prototype.getDeltaSeconds = function() {
            return this._deltaSeconds
        }, d.prototype.getElapsedSeconds = function() {
            return this._elapsedSeconds
        }, d.prototype.getElapsedFrames = function() {
            return this._frames
        }, d.prototype.getFPS = function() {
            return this._fps
        }, b.exports = d
    }, {}],
    185: [function(a, b, c) {
        function d() {
            f.call(this), this._impl = null, this._ctx = null, this._resources = {}, this._time = new j, this._mouse = new k, this._keyboard = new m
        }
        var e = (a("pex-context/Context"), a("is-plask")),
            f = a("./EventDispatcher"),
            g = a("./WindowEvent"),
            h = a("./ResourceLoader"),
            i = a(e ? "./WindowImplPlask" : "./WindowImplBrowser"),
            j = a("./Time"),
            k = a("./Mouse"),
            l = a("./MouseEvent"),
            m = a("./Keyboard"),
            n = a("./KeyboardEvent"),
            o = {
                MOUSE_DOWN: "onMouseDown",
                MOUSE_UP: "onMouseUp",
                MOUSE_DRAG: "onMouseDrag",
                MOUSE_MOVE: "onMouseMove",
                MOUSE_SCROLL: "onMouseScroll",
                KEY_DOWN: "onKeyDown",
                KEY_PRESS: "onKeyPress",
                KEY_UP: "onKeyUp",
                WINDOW_RESIZE: "onWindowResize"
            };
        d.prototype = Object.create(f.prototype), d.prototype.constructor = d, d.prototype.setSize = function(a, b, c) {
            this._impl.setSize(a, b, c), this.dispatchEvent(new g(g.WINDOW_RESIZE, {
                width: this.getWidth(),
                height: this.getHeight(),
                pixelRatio: this.getPixelRatio()
            }))
        }, d.prototype.getSize = function(a) {
            return a = a || new Array(2), a[0] = this._impl.width, a[1] = this._impl.height, a
        }, d.prototype.getWidth = function() {
            return this._impl.width
        }, d.prototype.getHeight = function() {
            return this._impl.height
        }, d.prototype.getAspectRatio = function() {
            return this._impl.width / this._impl.height
        }, d.prototype.getPixelRatio = function() {
            return this._impl.pixelRatio
        }, d.prototype.getBounds = function(a) {
            return a = a || new Array(4), a[0] = a[1] = 0, a[2] = this.getWidth(), a[3] = this.getHeight(), a
        }, d.prototype.setFullScreen = function(a) {
            this._impl.setFullScreen(a)
        }, d.prototype.isFullScreen = function() {
            return this._impl.fullScreen
        }, d.prototype.toggleFullScreen = function() {
            this.isFullScreen() ? this.setFullScreen(!1) : this.setFullScreen(!0)
        }, d.prototype.getContext = function() {
            return this._ctx
        }, d.prototype.getResources = function() {
            return this._resources
        }, d.prototype.getTime = function() {
            return this._time
        }, d.prototype.getMouse = function() {
            return this._mouse
        }, d.prototype.getKeyboard = function() {
            return this._keyboard
        }, d.prototype._addEventListener = d.prototype.addEventListener, d.prototype.addEventListener = function(a, b) {
            if (void 0 !== b) this._addEventListener(a, b);
            else {
                if (null === a || "object" != typeof a) throw new Error("Invalid listener object.");
                var c = this._mouse,
                    d = this._keyboard;
                for (var e in a)
                    if ("function" == typeof a[e]) {
                        var f = a[e];
                        switch (e) {
                            case o.MOUSE_DOWN:
                                c.addEventListener(l.MOUSE_DOWN, f.bind(a));
                                break;
                            case o.MOUSE_UP:
                                c.addEventListener(l.MOUSE_UP, f.bind(a));
                                break;
                            case o.MOUSE_DRAG:
                                c.addEventListener(l.MOUSE_DRAG, f.bind(a));
                                break;
                            case o.MOUSE_MOVE:
                                c.addEventListener(l.MOUSE_MOVE, f.bind(a));
                                break;
                            case o.MOUSE_SCROLL:
                                c.addEventListener(l.MOUSE_SCROLL, f.bind(a));
                                break;
                            case o.KEY_DOWN:
                                d.addEventListener(n.KEY_DOWN, f.bind(a));
                                break;
                            case o.KEY_PRESS:
                                d.addEventListener(n.KEY_PRESS, f.bind(a));
                                break;
                            case o.KEY_UP:
                                d.addEventListener(n.KEY_UP, f.bind(a));
                                break;
                            case o.WINDOW_RESIZE:
                                this.addEventListener(g.WINDOW_RESIZE, f.bind(a))
                        }
                    }
            }
        }, d.create = function(a) {
            function b() {
                var a = c._mouse,
                    b = c._impl;
                c.onMouseDown && a.addEventListener(l.MOUSE_DOWN, c.onMouseDown.bind(c)), c.onMouseUp && a.addEventListener(l.MOUSE_UP, c.onMouseUp.bind(c)), c.onMouseMove && a.addEventListener(l.MOUSE_MOVE, c.onMouseMove.bind(c)), c.onMouseDrag && a.addEventListener(l.MOUSE_DRAG, c.onMouseDrag.bind(c)), c.onMouseScroll && a.addEventListener(l.MOUSE_SCROLL, c.onMouseScroll.bind(c));
                var d = c._keyboard;
                c.onKeyDown && d.addEventListener(n.KEY_DOWN, c.onKeyDown.bind(c)), c.onKeyPress && d.addEventListener(n.KEY_PRESS, c.onKeyPress.bind(c)), c.onKeyUp && d.addEventListener(n.KEY_UP, c.onKeyUp.bind(c));
                var b = i.create(c, f);
                c.onWindowResize && c.addEventListener(g.WINDOW_RESIZE, c.onWindowResize.bind(c)), b.addEventListener(g.WINDOW_RESIZE, function(a) {
                    c.dispatchEvent(new g(g.WINDOW_RESIZE, a))
                }), b.addEventListener(g.WINDOW_READY, function() {
                    c.init()
                }.bind(this)), c._impl = b
            }
            var c = new d;
            for (var e in a) c[e] = a[e];
            c.resources = c.resources || {};
            var f = a.settings;
            f.width = f.width || 1280, f.height = f.height || 720, f.pixelRatio = f.pixelRatio || 1, f.fullScreen = f.fullScreen || !1, h.load(c.resources, function(a, d) {
                a ? (console.log("Window.create failed loading resources"), console.log(a)) : (c._resources = d, delete c.resources, b())
            })
        }, b.exports = d
    }, {
        "./EventDispatcher": 177,
        "./Keyboard": 178,
        "./KeyboardEvent": 179,
        "./Mouse": 180,
        "./MouseEvent": 181,
        "./ResourceLoader": 182,
        "./Time": 184,
        "./WindowEvent": 186,
        "./WindowImplBrowser": 188,
        "./WindowImplPlask": 189,
        "is-plask": 106,
        "pex-context/Context": 129
    }],
    186: [function(a, b, c) {
        function d(a, b) {
            e.call(this, a, b)
        }
        var e = a("./Event");
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, d.WINDOW_RESIZE = "windowresize", d.WINDOW_READY = "windowready", b.exports = d
    }, {
        "./Event": 176
    }],
    187: [function(a, b, c) {
        function d() {
            e.call(this), this.width = 0, this.height = 0, this.fullScreen = !1, this.pixelRatio = 1
        }
        var e = a("./EventDispatcher");
        d.prototype = Object.create(e.prototype), d.prototype.setSize = function(a, b, c) {}, d.prototype.setFullScreen = function(a) {}, b.exports = d
    }, {
        "./EventDispatcher": 177
    }],
    188: [function(a, b, c) {
        function d(a, b) {
            for (var c = null, d = 0; d < k.length; d++) try {
                if (c = a.getContext(k[d], b)) break
            } catch (e) {}
            return c
        }

        function e(a, b, c, d) {
            d = void 0 === d ? 1 : d, a.width = b * d, a.height = c * d, a.style.width = b + "px", a.style.height = c + "px"
        }

        function f() {
            h.call(this), this.canvas = null
        }
        var g = (a("is-browser"), a("raf")),
            h = a("./WindowImpl"),
            i = a("pex-context/Context"),
            j = a("./WindowEvent"),
            k = ["experimental-webgl2", "webgl2", "experimental-webgl", "webgl"],
            l = {
                alpha: !1,
                depth: !0,
                stencil: !1,
                antialias: !0,
                premultipliedAlpha: !0,
                preserveDrawingBuffer: !1,
                preferLowPowerToHighPerformance: !1,
                failIfMajorPerformanceCaveat: !1
            },
            m = function() {
                var a = navigator.userAgent.toLowerCase();
                return /(iphone|ipod|ipad).* os 9_/.test(a)
            };
        f.prototype = Object.create(h.prototype), f.prototype.constructor = f, f.prototype.setSize = function(a, b, c) {
            c = void 0 === c ? this.pixelRatio : c, e(this.canvas, a, b, c), this.width = a * c, this.height = b * c, this.pixelRatio = c
        }, f.prototype.setFullScreen = function(a) {
            var b = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
            if (!(a && this.fullScreen && b) && (a || this.fullScreen || b))
                if (a) {
                    var c = this.canvas;
                    this.fullScreen = !0, c.requestFullScreen ? c.requestFullScreen() : c.webkitRequestFullScreen ? c.webkitRequestFullScreen() : c.mozRequestFullScreen && c.mozRequestFullScreen()
                } else this.fullScreen = !1, document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen && document.mozCancelFullScreen()
        }, f.create = function(a, b) {
            function c(b) {
                a._time._update(b), a.draw(), g(c)
            }

            function e() {
                if (b.canvas || document.body.appendChild(n), p.width = h * o, p.height = k * o, p.pixelRatio = o, "2d" == b.type) a._ctx = n.getContext("2d");
                else {
                    var e = l,
                        f = d(n, e);
                    if (null === f) throw new Error("WindowImplBrowser: No WebGL context is available.");
                    a._ctx = new i(f)
                }
                setTimeout(function() {
                    p.dispatchEvent(new j(j.WINDOW_READY, {})), c(0)
                }, 1)
            }
            var h, k, n = b.canvas || document.createElement("canvas"),
                o = b.pixelRatio || 1;
            b.fullScreen ? (h = m ? document.documentElement.clientWidth : window.innerWidth, k = m ? document.documentElement.clientHeight : window.innerHeight) : (h = b.width, k = b.height);
            var p = new f;
            p.canvas = n, p.setSize(h, k, o);
            var q = a._mouse;
            p.canvas.addEventListener("mousedown", function(a) {
                q.handleMouseDown({
                    x: a.offsetX * o,
                    y: a.offsetY * o,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    metaKey: a.metaKey
                })
            }), p.canvas.addEventListener("mouseup", function(a) {
                q.handleMouseUp({
                    x: a.offsetX * o,
                    y: a.offsetY * o,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    metaKey: a.metaKey
                })
            }), p.canvas.addEventListener("mousemove", function(a) {
                q.handleMouseMove({
                    x: a.offsetX * o,
                    y: a.offsetY * o,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    metaKey: a.metaKey
                })
            });
            var r = null;
            p.canvas.addEventListener("touchstart", function(a) {
                var b = Array.prototype.slice.call(a.touches).map(function(a) {
                    return a.x = a.clientX * o, a.y = a.clientY * o, a
                });
                return r = b[0], q.handleMouseDown({
                    x: b[0].x,
                    y: b[0].y,
                    altKey: !1,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    touches: b
                }), a.preventDefault(), a.stopPropagation(), !1
            }), p.canvas.addEventListener("touchend", function(a) {
                var b = Array.prototype.slice.call(a.touches).map(function(a) {
                    return a.x = a.clientX * o, a.y = a.clientY * o, a
                });
                return q.handleMouseUp({
                    x: r.x,
                    y: r.y,
                    altKey: !1,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    touches: b
                }), r = null, a.preventDefault(), a.stopPropagation(), !1
            }), p.canvas.addEventListener("touchmove", function(a) {
                var b = Array.prototype.slice.call(a.touches).map(function(a) {
                    return a.x = a.clientX * o, a.y = a.clientY * o, a
                });
                return q.handleMouseMove({
                    x: b[0].x,
                    y: b[0].y,
                    altKey: !1,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    touches: b
                }), a.preventDefault(), a.stopPropagation(), !1
            });
            var s = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
            window.addEventListener(s, function(a) {
                var b = 0,
                    c = a.wheelDelta / 10 || -a.detail / 10;
                q.handleMouseScroll({
                    dx: b,
                    dy: c,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    metaKey: a.metaKey
                })
            });
            var t = a._keyboard;
            return window.addEventListener("keydown", function(a) {
                t.handleKeyDown({
                    str: "",
                    keyCode: a.keyCode,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    metaKey: a.metaKey
                })
            }), window.addEventListener("keypress", function(a) {
                t.handleKeyPress({
                    str: String.fromCharCode(a.charCode),
                    keyCode: a.keyCode,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    metaKey: a.metaKey
                })
            }), window.addEventListener("keyup", function(a) {
                t.handleKeyUp({
                    str: "",
                    keyCode: a.keyCode,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    metaKey: a.metaKey
                })
            }), window.addEventListener("resize", function(a) {
                a.width = m ? document.documentElement.clientWidth : window.innerWidth, a.height = m ? document.documentElement.clientHeight : window.innerHeight, b.fullScreen && p.setSize(a.width, a.height, b.pixelRatio), p.dispatchEvent(new j(j.WINDOW_RESIZE, a))
            }), n.parentNode ? e() : document.body ? e() : window.addEventListener("load", function() {
                e()
            }, !1), p
        }, b.exports = f
    }, {
        "./WindowEvent": 186,
        "./WindowImpl": 187,
        "is-browser": 103,
        "pex-context/Context": 129,
        raf: 198
    }],
    189: [function(a, b, c) {
        function d() {
            g.call(this), this.plaskObj = null, this.title = ""
        }
        var e = a("plask"),
            f = a("performance-now"),
            g = a("./WindowImpl"),
            h = a("./WindowEvent"),
            i = a("pex-context/Context"),
            j = a("omgcanvas"),
            k = a("./Screen");
        d.prototype = Object.create(g.prototype), d.prototype.constructor = d, d.prototype.setFullScreen = function() {
            this.fullScreen = !this.fullScreen, this.plaskObj.setFullscreen(this.fullScreen)
        }, d.create = function(a, b) {
            b.type = b.type || "3d", b.multisample = void 0 === b.multisample ? !0 : b.multisample, b.title = b.title || "pex", b.fullscreen = b.fullScreen || !1;
            var c = b.pixelRatio = b.highdpi = b.pixelRatio || 1;
            b.fullScreen && (b.width = k.getWidth(), b.height = k.getHeight()), b.width *= c, b.height *= c;
            var g = new d,
                l = {};
            return l.settings = b, l.init = function() {
                this.framerate(60);
                var c = a._mouse;
                this.on("mouseDown", function(a) {
                    c.handleMouseDown({
                        x: a.x,
                        y: a.y,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    })
                }), this.on("mouseUp", function(a) {
                    c.handleMouseUp({
                        x: a.x,
                        y: a.y,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    })
                }), this.on("mouseMoved", function(a) {
                    c.handleMouseMove({
                        x: a.x,
                        y: a.y,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    })
                }), this.on("mouseDragged", function(a) {
                    c.handleMouseMove({
                        x: a.x,
                        y: a.y,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    })
                }), this.on("scrollWheel", function(a) {
                    c.handleMouseScroll({
                        dx: a.dx,
                        dy: a.dy,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    })
                });
                var d = a._keyboard;
                this.on("keyDown", function(a) {
                    d.handleKeyDown({
                        str: "",
                        keyCode: a.keyCode,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    }), d.handleKeyPress({
                        str: a.str,
                        keyCode: a.keyCode,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    })
                }), this.on("keyUp", function(a) {
                    d.handleKeyUp({
                        str: "",
                        keyCode: a.keyCode,
                        altKey: a.option,
                        shiftKey: a.shift,
                        ctrlKey: a.ctrl,
                        metaKey: a.cmd
                    })
                }), g.plaskObj = this, g.width = this.settings.width, g.height = this.settings.height, g.pixelRatio = this.settings.pixelRatio, "2d" == b.type ? a._ctx = new j.CanvasContext(this.canvas) : a._ctx = new i(this.gl), g.dispatchEvent(new h(h.WINDOW_READY, {}))
            }, l.draw = function() {
                a._time._update(f()), a.draw()
            }, setTimeout(function() {
                e.simpleWindow(l)
            }, 1), g
        }, b.exports = d
    }, {
        "./Screen": 183,
        "./WindowEvent": 186,
        "./WindowImpl": 187,
        omgcanvas: 113,
        "performance-now": 119,
        "pex-context/Context": 129,
        plask: 49
    }],
    190: [function(a, b, c) {
        (function(a) {
            "use strict";

            function c(b) {
                for (var c = new Array(arguments.length - 1), d = 0; d < c.length;) c[d++] = arguments[d];
                a.nextTick(function() {
                    b.apply(null, c)
                })
            }!a.version || 0 === a.version.indexOf("v0.") || 0 === a.version.indexOf("v1.") && 0 !== a.version.indexOf("v1.8.") ? b.exports = c : b.exports = a.nextTick
        }).call(this, a("_process"))
    }, {
        _process: 191
    }],
    191: [function(a, b, c) {
        function d() {
            k = !1, h.length ? j = h.concat(j) : l = -1, j.length && e()
        }

        function e() {
            if (!k) {
                var a = setTimeout(d);
                k = !0;
                for (var b = j.length; b;) {
                    for (h = j, j = []; ++l < b;) h && h[l].run();
                    l = -1, b = j.length
                }
                h = null, k = !1, clearTimeout(a)
            }
        }

        function f(a, b) {
            this.fun = a, this.array = b
        }

        function g() {}
        var h, i = b.exports = {},
            j = [],
            k = !1,
            l = -1;
        i.nextTick = function(a) {
            var b = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            j.push(new f(a, b)), 1 !== j.length || k || setTimeout(e, 0)
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.binding = function(a) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(a) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, {}],
    192: [function(a, b, c) {
        c.publicEncrypt = a("./publicEncrypt"), c.privateDecrypt = a("./privateDecrypt"), c.privateEncrypt = function(a, b) {
            return c.publicEncrypt(a, b, !0)
        }, c.publicDecrypt = function(a, b) {
            return c.privateDecrypt(a, b, !0)
        }
    }, {
        "./privateDecrypt": 194,
        "./publicEncrypt": 195
    }],
    193: [function(a, b, c) {
        (function(c) {
            function d(a) {
                var b = new c(4);
                return b.writeUInt32BE(a, 0), b
            }
            var e = a("create-hash");
            b.exports = function(a, b) {
                for (var f, g = new c(""), h = 0; g.length < b;) f = d(h++), g = c.concat([g, e("sha1").update(a).update(f).digest()]);
                return g.slice(0, b)
            }
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51,
        "create-hash": 56
    }],
    194: [function(a, b, c) {
        (function(c) {
            function d(a, b) {
                var d = (a.modulus, a.modulus.byteLength()),
                    e = (b.length, l("sha1").update(new c("")).digest()),
                    g = e.length;
                if (0 !== b[0]) throw new Error("decryption error");
                var j = b.slice(1, g + 1),
                    k = b.slice(g + 1),
                    m = i(j, h(k, g)),
                    n = i(k, h(m, d - g - 1));
                if (f(e, n.slice(0, g))) throw new Error("decryption error");
                for (var o = g; 0 === n[o];) o++;
                if (1 !== n[o++]) throw new Error("decryption error");
                return n.slice(o)
            }

            function e(a, b, c) {
                for (var d = b.slice(0, 2), e = 2, f = 0; 0 !== b[e++];)
                    if (e >= b.length) {
                        f++;
                        break
                    }
                var g = b.slice(2, e - 1);
                b.slice(e - 1, e);
                if (("0002" !== d.toString("hex") && !c || "0001" !== d.toString("hex") && c) && f++, g.length < 8 && f++, f) throw new Error("decryption error");
                return b.slice(e)
            }

            function f(a, b) {
                a = new c(a), b = new c(b);
                var d = 0,
                    e = a.length;
                a.length !== b.length && (d++, e = Math.min(a.length, b.length));
                for (var f = -1; ++f < e;) d += a[f] ^ b[f];
                return d
            }
            var g = a("parse-asn1"),
                h = a("./mgf"),
                i = a("./xor"),
                j = a("bn.js"),
                k = a("browserify-rsa"),
                l = a("create-hash"),
                m = a("./withPublic");
            b.exports = function(a, b, f) {
                var h;
                h = a.padding ? a.padding : f ? 1 : 4;
                var i = g(a),
                    l = i.modulus.byteLength();
                if (b.length > l || new j(b).cmp(i.modulus) >= 0) throw new Error("decryption error");
                var n;
                n = f ? m(new j(b), i) : k(b, i);
                var o = new c(l - n.length);
                if (o.fill(0), n = c.concat([o, n], l), 4 === h) return d(i, n);
                if (1 === h) return e(i, n, f);
                if (3 === h) return n;
                throw new Error("unknown padding")
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./mgf": 193,
        "./withPublic": 196,
        "./xor": 197,
        "bn.js": 22,
        "browserify-rsa": 43,
        buffer: 51,
        "create-hash": 56,
        "parse-asn1": 117
    }],
    195: [function(a, b, c) {
        (function(c) {
            function d(a, b) {
                var d = a.modulus.byteLength(),
                    e = b.length,
                    f = i("sha1").update(new c("")).digest(),
                    g = f.length,
                    m = 2 * g;
                if (e > d - m - 2) throw new Error("message too long");
                var n = new c(d - e - m - 2);
                n.fill(0);
                var o = d - g - 1,
                    p = h(g),
                    q = k(c.concat([f, n, new c([1]), b], o), j(p, o)),
                    r = k(p, j(q, g));
                return new l(c.concat([new c([0]), r, q], d))
            }

            function e(a, b, d) {
                var e = b.length,
                    g = a.modulus.byteLength();
                if (e > g - 11) throw new Error("message too long");
                var h;
                return d ? (h = new c(g - e - 3), h.fill(255)) : h = f(g - e - 3), new l(c.concat([new c([0, d ? 1 : 2]), h, new c([0]), b], g))
            }

            function f(a, b) {
                for (var d, e = new c(a), f = 0, g = h(2 * a), i = 0; a > f;) i === g.length && (g = h(2 * a), i = 0), d = g[i++], d && (e[f++] = d);
                return e
            }
            var g = a("parse-asn1"),
                h = a("randombytes"),
                i = a("create-hash"),
                j = a("./mgf"),
                k = a("./xor"),
                l = a("bn.js"),
                m = a("./withPublic"),
                n = a("browserify-rsa");
            b.exports = function(a, b, c) {
                var f;
                f = a.padding ? a.padding : c ? 1 : 4;
                var h, i = g(a);
                if (4 === f) h = d(i, b);
                else if (1 === f) h = e(i, b, c);
                else {
                    if (3 !== f) throw new Error("unknown padding");
                    if (h = new l(b), h.cmp(i.modulus) >= 0) throw new Error("data too long for modulus")
                }
                return c ? n(h, i) : m(h, i)
            }
        }).call(this, a("buffer").Buffer)
    }, {
        "./mgf": 193,
        "./withPublic": 196,
        "./xor": 197,
        "bn.js": 22,
        "browserify-rsa": 43,
        buffer: 51,
        "create-hash": 56,
        "parse-asn1": 117,
        randombytes: 200
    }],
    196: [function(a, b, c) {
        (function(c) {
            function d(a, b) {
                return new c(a.toRed(e.mont(b.modulus)).redPow(new e(b.publicExponent)).fromRed().toArray())
            }
            var e = a("bn.js");
            b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "bn.js": 22,
        buffer: 51
    }],
    197: [function(a, b, c) {
        b.exports = function(a, b) {
            for (var c = a.length, d = -1; ++d < c;) a[d] ^= b[d];
            return a
        }
    }, {}],
    198: [function(a, b, c) {
        (function(c) {
            for (var d = a("performance-now"), e = "undefined" == typeof window ? c : window, f = ["moz", "webkit"], g = "AnimationFrame", h = e["request" + g], i = e["cancel" + g] || e["cancelRequest" + g], j = 0; !h && j < f.length; j++) h = e[f[j] + "Request" + g], i = e[f[j] + "Cancel" + g] || e[f[j] + "CancelRequest" + g];
            if (!h || !i) {
                var k = 0,
                    l = 0,
                    m = [],
                    n = 1e3 / 60;
                h = function(a) {
                    if (0 === m.length) {
                        var b = d(),
                            c = Math.max(0, n - (b - k));
                        k = c + b, setTimeout(function() {
                            var a = m.slice(0);
                            m.length = 0;
                            for (var b = 0; b < a.length; b++)
                                if (!a[b].cancelled) try {
                                    a[b].callback(k)
                                } catch (c) {
                                    setTimeout(function() {
                                        throw c
                                    }, 0)
                                }
                        }, Math.round(c))
                    }
                    return m.push({
                        handle: ++l,
                        callback: a,
                        cancelled: !1
                    }), l
                }, i = function(a) {
                    for (var b = 0; b < m.length; b++) m[b].handle === a && (m[b].cancelled = !0)
                }
            }
            b.exports = function(a) {
                return h.call(e, a)
            }, b.exports.cancel = function() {
                i.apply(e, arguments)
            }, b.exports.polyfill = function() {
                e.requestAnimationFrame = h, e.cancelAnimationFrame = i
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "performance-now": 119
    }],
    199: [function(a, b, c) {
        (function() {
            "use strict";
            var a = {
                    "@@functional/placeholder": !0
                },
                d = function(a, b) {
                    switch (a) {
                        case 0:
                            return function() {
                                return b.apply(this, arguments)
                            };
                        case 1:
                            return function(a) {
                                return b.apply(this, arguments)
                            };
                        case 2:
                            return function(a, c) {
                                return b.apply(this, arguments)
                            };
                        case 3:
                            return function(a, c, d) {
                                return b.apply(this, arguments)
                            };
                        case 4:
                            return function(a, c, d, e) {
                                return b.apply(this, arguments)
                            };
                        case 5:
                            return function(a, c, d, e, f) {
                                return b.apply(this, arguments)
                            };
                        case 6:
                            return function(a, c, d, e, f, g) {
                                return b.apply(this, arguments)
                            };
                        case 7:
                            return function(a, c, d, e, f, g, h) {
                                return b.apply(this, arguments)
                            };
                        case 8:
                            return function(a, c, d, e, f, g, h, i) {
                                return b.apply(this, arguments)
                            };
                        case 9:
                            return function(a, c, d, e, f, g, h, i, j) {
                                return b.apply(this, arguments)
                            };
                        case 10:
                            return function(a, c, d, e, f, g, h, i, j, k) {
                                return b.apply(this, arguments)
                            };
                        default:
                            throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
                    }
                },
                e = function(a) {
                    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                    return c
                },
                f = function(a) {
                    return new RegExp(a.source, (a.global ? "g" : "") + (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.sticky ? "y" : "") + (a.unicode ? "u" : ""))
                },
                g = function(a) {
                    return function() {
                        return !a.apply(this, arguments)
                    }
                },
                h = function(a, b) {
                    a = a || [], b = b || [];
                    var c, d = a.length,
                        e = b.length,
                        f = [];
                    for (c = 0; d > c;) f[f.length] = a[c], c += 1;
                    for (c = 0; e > c;) f[f.length] = b[c], c += 1;
                    return f
                },
                i = function(a, b, c) {
                    for (var d = 0, e = c.length; e > d;) {
                        if (a(b, c[d])) return !0;
                        d += 1
                    }
                    return !1
                },
                j = function(a, b) {
                    for (var c = 0, d = b.length, e = []; d > c;) a(b[c]) && (e[e.length] = b[c]), c += 1;
                    return e
                },
                k = function(a) {
                    return {
                        "@@transducer/value": a,
                        "@@transducer/reduced": !0
                    }
                },
                l = function(a, b) {
                    return Object.prototype.hasOwnProperty.call(b, a)
                },
                m = function(a) {
                    return a
                },
                n = function() {
                    var a = Object.prototype.toString;
                    return "[object Arguments]" === a.call(arguments) ? function(b) {
                        return "[object Arguments]" === a.call(b)
                    } : function(a) {
                        return l("callee", a)
                    }
                }(),
                o = Array.isArray || function(a) {
                    return null != a && a.length >= 0 && "[object Array]" === Object.prototype.toString.call(a)
                },
                p = Number.isInteger || function(a) {
                    return a << 0 === a
                },
                q = function(a) {
                    return "[object Number]" === Object.prototype.toString.call(a)
                },
                r = function(a) {
                    return "[object Object]" === Object.prototype.toString.call(a)
                },
                s = function(a) {
                    return null != a && "object" == typeof a && a["@@functional/placeholder"] === !0
                },
                t = function(a) {
                    return "[object RegExp]" === Object.prototype.toString.call(a)
                },
                u = function(a) {
                    return "[object String]" === Object.prototype.toString.call(a)
                },
                v = function(a) {
                    return "function" == typeof a["@@transducer/step"]
                },
                w = function(a, b) {
                    for (var c = 0, d = b.length, e = Array(d); d > c;) e[c] = a(b[c]), c += 1;
                    return e
                },
                x = function(a) {
                    return [a]
                },
                y = function(a, b) {
                    return function() {
                        return b.call(this, a.apply(this, arguments))
                    }
                },
                z = function(a, b) {
                    return function() {
                        var c = this;
                        return a.apply(c, arguments).then(function(a) {
                            return b.call(c, a)
                        })
                    }
                },
                A = function(a) {
                    var b = a.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
                    return '"' + b.replace(/"/g, '\\"') + '"'
                },
                B = function(a) {
                    return a && a["@@transducer/reduced"] ? a : {
                        "@@transducer/value": a,
                        "@@transducer/reduced": !0
                    }
                },
                C = function Ee(a, b, c) {
                    switch (arguments.length) {
                        case 1:
                            return Ee(a, 0, a.length);
                        case 2:
                            return Ee(a, b, a.length);
                        default:
                            for (var d = [], e = 0, f = Math.max(0, Math.min(a.length, c) - b); f > e;) d[e] = a[b + e], e += 1;
                            return d
                    }
                },
                D = function() {
                    var a = function(a) {
                        return (10 > a ? "0" : "") + a
                    };
                    return "function" == typeof Date.prototype.toISOString ? function(a) {
                        return a.toISOString()
                    } : function(b) {
                        return b.getUTCFullYear() + "-" + a(b.getUTCMonth() + 1) + "-" + a(b.getUTCDate()) + "T" + a(b.getUTCHours()) + ":" + a(b.getUTCMinutes()) + ":" + a(b.getUTCSeconds()) + "." + (b.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                    }
                }(),
                E = {
                    init: function() {
                        return this.xf["@@transducer/init"]()
                    },
                    result: function(a) {
                        return this.xf["@@transducer/result"](a)
                    }
                },
                F = function() {
                    function a(a) {
                        this.f = a
                    }
                    return a.prototype["@@transducer/init"] = function() {
                            throw new Error("init not implemented on XWrap")
                        }, a.prototype["@@transducer/result"] = function(a) {
                            return a
                        }, a.prototype["@@transducer/step"] = function(a, b) {
                            return this.f(a, b)
                        },
                        function(b) {
                            return new a(b)
                        }
                }(),
                G = function(a, b) {
                    for (var c = 0, d = b.length - (a - 1), e = new Array(d >= 0 ? d : 0); d > c;) e[c] = C(b, c, c + a), c += 1;
                    return e
                },
                H = function(a, b) {
                    return function() {
                        var c = arguments.length;
                        if (0 === c) return b();
                        var d = arguments[c - 1];
                        return o(d) || "function" != typeof d[a] ? b.apply(this, arguments) : d[a].apply(d, C(arguments, 0, c - 1))
                    }
                },
                I = function(a) {
                    return function b(c) {
                        return 0 === arguments.length || s(c) ? b : a.apply(this, arguments)
                    }
                },
                J = function(a) {
                    return function b(c, d) {
                        switch (arguments.length) {
                            case 0:
                                return b;
                            case 1:
                                return s(c) ? b : I(function(b) {
                                    return a(c, b)
                                });
                            default:
                                return s(c) && s(d) ? b : s(c) ? I(function(b) {
                                    return a(b, d)
                                }) : s(d) ? I(function(b) {
                                    return a(c, b)
                                }) : a(c, d)
                        }
                    }
                },
                K = function(a) {
                    return function b(c, d, e) {
                        switch (arguments.length) {
                            case 0:
                                return b;
                            case 1:
                                return s(c) ? b : J(function(b, d) {
                                    return a(c, b, d)
                                });
                            case 2:
                                return s(c) && s(d) ? b : s(c) ? J(function(b, c) {
                                    return a(b, d, c)
                                }) : s(d) ? J(function(b, d) {
                                    return a(c, b, d)
                                }) : I(function(b) {
                                    return a(c, d, b)
                                });
                            default:
                                return s(c) && s(d) && s(e) ? b : s(c) && s(d) ? J(function(b, c) {
                                    return a(b, c, e)
                                }) : s(c) && s(e) ? J(function(b, c) {
                                    return a(b, d, c)
                                }) : s(d) && s(e) ? J(function(b, d) {
                                    return a(c, b, d)
                                }) : s(c) ? I(function(b) {
                                    return a(b, d, e)
                                }) : s(d) ? I(function(b) {
                                    return a(c, b, e)
                                }) : s(e) ? I(function(b) {
                                    return a(c, d, b)
                                }) : a(c, d, e)
                        }
                    }
                },
                L = function Fe(a, b, c) {
                    return function() {
                        for (var e = [], f = 0, g = a, h = 0; h < b.length || f < arguments.length;) {
                            var i;
                            h < b.length && (!s(b[h]) || f >= arguments.length) ? i = b[h] : (i = arguments[f], f += 1), e[h] = i, s(i) || (g -= 1), h += 1
                        }
                        return 0 >= g ? c.apply(this, e) : d(g, Fe(a, e, c))
                    }
                },
                M = function(a, b, c) {
                    return function() {
                        var d = arguments.length;
                        if (0 === d) return c();
                        var e = arguments[d - 1];
                        if (!o(e)) {
                            var f = C(arguments, 0, d - 1);
                            if ("function" == typeof e[a]) return e[a].apply(e, f);
                            if (v(e)) {
                                var g = b.apply(null, f);
                                return g(e)
                            }
                        }
                        return c.apply(this, arguments)
                    }
                },
                N = function(a, b) {
                    for (var c = b.length - 1; c >= 0 && a(b[c]);) c -= 1;
                    return C(b, 0, c + 1)
                },
                O = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a, this.all = !0
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.all && (a = this.xf["@@transducer/step"](a, !0)), this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.f(b) || (this.all = !1, a = B(this.xf["@@transducer/step"](a, !1))), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                P = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a, this.any = !1
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.any || (a = this.xf["@@transducer/step"](a, !1)), this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.f(b) && (this.any = !0, a = B(this.xf["@@transducer/step"](a, !0))), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                Q = function() {
                    function a(a, b) {
                        this.xf = b, this.pos = 0, this.full = !1, this.acc = new Array(a)
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.acc = null, this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.store(b), this.full ? this.xf["@@transducer/step"](a, this.getCopy()) : a
                    }, a.prototype.store = function(a) {
                        this.acc[this.pos] = a, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
                    }, a.prototype.getCopy = function() {
                        return h(C(this.acc, this.pos), C(this.acc, 0, this.pos))
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                R = function() {
                    function a(a, b) {
                        this.xf = b, this.n = a
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = E.result, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.n > 0 ? (this.n -= 1, a) : this.xf["@@transducer/step"](a, b)
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                S = function() {
                    function a(a, b) {
                        this.xf = b, this.pos = 0, this.full = !1, this.acc = new Array(a)
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.acc = null, this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.full && (a = this.xf["@@transducer/step"](a, this.acc[this.pos])), this.store(b), a
                    }, a.prototype.store = function(a) {
                        this.acc[this.pos] = a, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                T = function() {
                    function a(a, b) {
                        this.xf = b, this.pred = a, this.lastValue = void 0, this.seenFirstValue = !1
                    }
                    return a.prototype["@@transducer/init"] = function() {
                        return this.xf["@@transducer/init"]()
                    }, a.prototype["@@transducer/result"] = function(a) {
                        return this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        var c = !1;
                        return this.seenFirstValue ? this.pred(this.lastValue, b) && (c = !0) : this.seenFirstValue = !0, this.lastValue = b, c ? a : this.xf["@@transducer/step"](a, b)
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                U = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = E.result, a.prototype["@@transducer/step"] = function(a, b) {
                        if (this.f) {
                            if (this.f(b)) return a;
                            this.f = null
                        }
                        return this.xf["@@transducer/step"](a, b)
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                V = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = E.result, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.f(b) ? this.xf["@@transducer/step"](a, b) : a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                W = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a, this.found = !1
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.found || (a = this.xf["@@transducer/step"](a, void 0)), this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.f(b) && (this.found = !0, a = B(this.xf["@@transducer/step"](a, b))), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                X = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a, this.idx = -1, this.found = !1
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.found || (a = this.xf["@@transducer/step"](a, -1)), this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.idx += 1, this.f(b) && (this.found = !0, a = B(this.xf["@@transducer/step"](a, this.idx))), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                Y = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](a, this.last))
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.f(b) && (this.last = b), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                Z = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a, this.idx = -1, this.lastIdx = -1
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](a, this.lastIdx))
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.idx += 1, this.f(b) && (this.lastIdx = this.idx), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                $ = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = E.result, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.xf["@@transducer/step"](a, this.f(b))
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                _ = function() {
                    function a(a, b) {
                        this.xf = b, this.n = a
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = E.result, a.prototype["@@transducer/step"] = function(a, b) {
                        return 0 === this.n ? B(a) : (this.n -= 1, this.xf["@@transducer/step"](a, b))
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                aa = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = E.result, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.f(b) ? this.xf["@@transducer/step"](a, b) : B(a)
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                ba = J(function(a, b) {
                    return a + b
                }),
                ca = K(function(a, b, c) {
                    if (b >= c.length || b < -c.length) return c;
                    var d = 0 > b ? c.length : 0,
                        e = d + b,
                        f = h(c);
                    return f[e] = a(c[e]), f
                }),
                da = J(M("all", O, function(a, b) {
                    for (var c = 0; c < b.length;) {
                        if (!a(b[c])) return !1;
                        c += 1
                    }
                    return !0
                })),
                ea = I(function(a) {
                    return function() {
                        return a
                    }
                }),
                fa = J(function(a, b) {
                    return a && b
                }),
                ga = J(M("any", P, function(a, b) {
                    for (var c = 0; c < b.length;) {
                        if (a(b[c])) return !0;
                        c += 1
                    }
                    return !1
                })),
                ha = J(M("aperture", Q, G)),
                ia = J(function(a, b) {
                    return h(b, [a])
                }),
                ja = J(function(a, b) {
                    return a.apply(this, b)
                }),
                ka = K(function(a, b, c) {
                    var d = {};
                    for (var e in c) d[e] = c[e];
                    return d[a] = b, d
                }),
                la = K(function Ge(a, b, c) {
                    switch (a.length) {
                        case 0:
                            return b;
                        case 1:
                            return ka(a[0], b, c);
                        default:
                            return ka(a[0], Ge(C(a, 1), b, Object(c[a[0]])), c)
                    }
                }),
                ma = J(function(a, b) {
                    return d(a.length, function() {
                        return a.apply(b, arguments)
                    })
                }),
                na = J(function(a, b) {
                    return function() {
                        return a.apply(this, arguments) && b.apply(this, arguments)
                    }
                }),
                oa = I(function(a) {
                    return function(b, c) {
                        return a(b, c) ? -1 : a(c, b) ? 1 : 0
                    }
                }),
                pa = I(function(a) {
                    return function() {
                        for (var b = 0; b < a.length;) {
                            if (a[b][0].apply(this, arguments)) return a[b][1].apply(this, arguments);
                            b += 1
                        }
                    }
                }),
                qa = J(function(a, b) {
                    for (var c = {}, d = b.length, e = 0; d > e;) {
                        var f = a(b[e]);
                        c[f] = (l(f, c) ? c[f] : 0) + 1, e += 1
                    }
                    return c
                }),
                ra = J(function(a, b) {
                    return 1 === a ? I(b) : d(a, L(a, [], b))
                }),
                sa = ba(-1),
                ta = J(function(a, b) {
                    return null == b || b !== b ? a : b
                }),
                ua = K(function(a, b, c) {
                    for (var d = [], e = 0, f = b.length; f > e;) i(a, b[e], c) || i(a, b[e], d) || d.push(b[e]), e += 1;
                    return d
                }),
                va = J(function(a, b) {
                    var c = {};
                    for (var d in b) d !== a && (c[d] = b[d]);
                    return c
                }),
                wa = J(function He(a, b) {
                    switch (a.length) {
                        case 0:
                            return b;
                        case 1:
                            return va(a[0], b);
                        default:
                            var c = a[0],
                                d = C(a, 1);
                            return null == b[c] ? b : ka(c, He(d, b[c]), b)
                    }
                }),
                xa = J(function(a, b) {
                    return a / b
                }),
                ya = J(M("dropWhile", U, function(a, b) {
                    for (var c = 0, d = b.length; d > c && a(b[c]);) c += 1;
                    return C(b, c)
                })),
                za = J(function(a, b) {
                    return function() {
                        return a.apply(this, arguments) || b.apply(this, arguments)
                    }
                }),
                Aa = I(function(a) {
                    return null != a && "function" == typeof a.empty ? a.empty() : null != a && null != a.constructor && "function" == typeof a.constructor.empty ? a.constructor.empty() : o(a) ? [] : u(a) ? "" : r(a) ? {} : n(a) ? function() {
                        return arguments
                    }() : void 0
                }),
                Ba = J(function Ie(a, b) {
                    var c, d, e, f = {};
                    for (d in b) c = a[d], e = typeof c, f[d] = "function" === e ? c(b[d]) : "object" === e ? Ie(a[d], b[d]) : b[d];
                    return f
                }),
                Ca = J(M("find", W, function(a, b) {
                    for (var c = 0, d = b.length; d > c;) {
                        if (a(b[c])) return b[c];
                        c += 1
                    }
                })),
                Da = J(M("findIndex", X, function(a, b) {
                    for (var c = 0, d = b.length; d > c;) {
                        if (a(b[c])) return c;
                        c += 1
                    }
                    return -1
                })),
                Ea = J(M("findLast", Y, function(a, b) {
                    for (var c = b.length - 1; c >= 0;) {
                        if (a(b[c])) return b[c];
                        c -= 1
                    }
                })),
                Fa = J(M("findLastIndex", Z, function(a, b) {
                    for (var c = b.length - 1; c >= 0;) {
                        if (a(b[c])) return c;
                        c -= 1
                    }
                    return -1
                })),
                Ga = J(H("forEach", function(a, b) {
                    for (var c = b.length, d = 0; c > d;) a(b[d]), d += 1;
                    return b
                })),
                Ha = I(function(a) {
                    for (var b = 0, c = a.length, d = {}; c > b;) o(a[b]) && a[b].length && (d[a[b][0]] = a[b][1]), b += 1;
                    return d
                }),
                Ia = J(function(a, b) {
                    return a > b
                }),
                Ja = J(function(a, b) {
                    return a >= b
                }),
                Ka = J(l),
                La = J(function(a, b) {
                    return a in b
                }),
                Ma = J(function(a, b) {
                    return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b
                }),
                Na = I(m),
                Oa = K(function(a, b, c) {
                    return ra(Math.max(a.length, b.length, c.length), function() {
                        return a.apply(this, arguments) ? b.apply(this, arguments) : c.apply(this, arguments)
                    })
                }),
                Pa = ba(1),
                Qa = K(function(a, b, c) {
                    a = a < c.length && a >= 0 ? a : c.length;
                    var d = C(c);
                    return d.splice(a, 0, b), d
                }),
                Ra = K(function(a, b, c) {
                    return a = a < c.length && a >= 0 ? a : c.length, h(h(C(c, 0, a), b), C(c, a))
                }),
                Sa = J(H("intersperse", function(a, b) {
                    for (var c = [], d = 0, e = b.length; e > d;) d === e - 1 ? c.push(b[d]) : c.push(b[d], a), d += 1;
                    return c
                })),
                Ta = J(function(a, b) {
                    return null != b && b.constructor === a || b instanceof a
                }),
                Ua = I(function(a) {
                    return o(a) ? !0 : a ? "object" != typeof a ? !1 : a instanceof String ? !1 : 1 === a.nodeType ? !!a.length : 0 === a.length ? !0 : a.length > 0 ? a.hasOwnProperty(0) && a.hasOwnProperty(a.length - 1) : !1 : !1
                }),
                Va = I(function(a) {
                    return null == a
                }),
                Wa = function() {
                    var a = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        b = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                        c = function() {
                            return arguments.propertyIsEnumerable("length")
                        }(),
                        d = function(a, b) {
                            for (var c = 0; c < a.length;) {
                                if (a[c] === b) return !0;
                                c += 1
                            }
                            return !1
                        };
                    return I("function" != typeof Object.keys || c ? function(e) {
                        if (Object(e) !== e) return [];
                        var f, g, h = [],
                            i = c && n(e);
                        for (f in e) !l(f, e) || i && "length" === f || (h[h.length] = f);
                        if (a)
                            for (g = b.length - 1; g >= 0;) f = b[g], l(f, e) && !d(h, f) && (h[h.length] = f), g -= 1;
                        return h
                    } : function(a) {
                        return Object(a) !== a ? [] : Object.keys(a)
                    })
                }(),
                Xa = I(function(a) {
                    var b, c = [];
                    for (b in a) c[c.length] = b;
                    return c
                }),
                Ya = I(function(a) {
                    return null != a && Ta(Number, a.length) ? a.length : NaN
                }),
                Za = J(function(a, b) {
                    return b > a
                }),
                $a = J(function(a, b) {
                    return b >= a
                }),
                _a = K(function(a, b, c) {
                    for (var d = 0, e = c.length, f = [], g = [b]; e > d;) g = a(g[0], c[d]), f[d] = g[1], d += 1;
                    return [g[0], f]
                }),
                ab = K(function(a, b, c) {
                    for (var d = c.length - 1, e = [], f = [b]; d >= 0;) f = a(f[0], c[d]), e[d] = f[1], d -= 1;
                    return [f[0], e]
                }),
                bb = J(function(a, b) {
                    return b.match(a) || []
                }),
                cb = J(function(a, b) {
                    return p(a) ? !p(b) || 1 > b ? NaN : (a % b + b) % b : NaN
                }),
                db = J(function(a, b) {
                    return b > a ? b : a
                }),
                eb = K(function(a, b, c) {
                    return a(c) > a(b) ? c : b
                }),
                fb = K(function(a, b, c) {
                    var d, e = {};
                    for (d in b) l(d, b) && (e[d] = l(d, c) ? a(d, b[d], c[d]) : b[d]);
                    for (d in c) l(d, c) && !l(d, e) && (e[d] = c[d]);
                    return e
                }),
                gb = J(function(a, b) {
                    return a > b ? b : a
                }),
                hb = K(function(a, b, c) {
                    return a(c) < a(b) ? c : b
                }),
                ib = J(function(a, b) {
                    return a % b
                }),
                jb = J(function(a, b) {
                    return a * b
                }),
                kb = J(function(a, b) {
                    switch (a) {
                        case 0:
                            return function() {
                                return b.call(this)
                            };
                        case 1:
                            return function(a) {
                                return b.call(this, a)
                            };
                        case 2:
                            return function(a, c) {
                                return b.call(this, a, c)
                            };
                        case 3:
                            return function(a, c, d) {
                                return b.call(this, a, c, d)
                            };
                        case 4:
                            return function(a, c, d, e) {
                                return b.call(this, a, c, d, e)
                            };
                        case 5:
                            return function(a, c, d, e, f) {
                                return b.call(this, a, c, d, e, f)
                            };
                        case 6:
                            return function(a, c, d, e, f, g) {
                                return b.call(this, a, c, d, e, f, g)
                            };
                        case 7:
                            return function(a, c, d, e, f, g, h) {
                                return b.call(this, a, c, d, e, f, g, h)
                            };
                        case 8:
                            return function(a, c, d, e, f, g, h, i) {
                                return b.call(this, a, c, d, e, f, g, h, i)
                            };
                        case 9:
                            return function(a, c, d, e, f, g, h, i, j) {
                                return b.call(this, a, c, d, e, f, g, h, i, j)
                            };
                        case 10:
                            return function(a, c, d, e, f, g, h, i, j, k) {
                                return b.call(this, a, c, d, e, f, g, h, i, j, k)
                            };
                        default:
                            throw new Error("First argument to nAry must be a non-negative integer no greater than ten")
                    }
                }),
                lb = I(function(a) {
                    return -a
                }),
                mb = J(g(M("any", P, ga))),
                nb = I(function(a) {
                    return !a
                }),
                ob = J(function(a, b) {
                    var c = 0 > a ? b.length + a : a;
                    return u(b) ? b.charAt(c) : b[c]
                }),
                pb = I(function(a) {
                    return function() {
                        return ob(a, arguments)
                    }
                }),
                qb = J(function(a, b) {
                    var c = {};
                    return c[a] = b, c
                }),
                rb = I(x),
                sb = I(function(a) {
                    var b, c = !1;
                    return d(a.length, function() {
                        return c ? b : (c = !0, b = a.apply(this, arguments))
                    })
                }),
                tb = J(function(a, b) {
                    return a || b
                }),
                ub = function() {
                    var a = function(b) {
                        return {
                            value: b,
                            map: function(c) {
                                return a(c(b))
                            }
                        }
                    };
                    return K(function(b, c, d) {
                        return b(function(b) {
                            return a(c(b))
                        })(d).value
                    })
                }(),
                vb = J(function(a, b) {
                    return [a, b]
                }),
                wb = J(function(a, b) {
                    for (var c = b, d = 0; d < a.length;) {
                        if (null == c) return;
                        c = c[a[d]], d += 1
                    }
                    return c
                }),
                xb = K(function(a, b, c) {
                    return ta(a, wb(b, c))
                }),
                yb = K(function(a, b, c) {
                    return b.length > 0 && a(wb(b, c))
                }),
                zb = J(function(a, b) {
                    for (var c = {}, d = 0; d < a.length;) a[d] in b && (c[a[d]] = b[a[d]]), d += 1;
                    return c
                }),
                Ab = J(function(a, b) {
                    for (var c = {}, d = 0, e = a.length; e > d;) {
                        var f = a[d];
                        c[f] = b[f], d += 1
                    }
                    return c
                }),
                Bb = J(function(a, b) {
                    var c = {};
                    for (var d in b) a(b[d], d, b) && (c[d] = b[d]);
                    return c
                }),
                Cb = J(function(a, b) {
                    return h([a], b)
                }),
                Db = J(function(a, b) {
                    return b[a]
                }),
                Eb = K(function(a, b, c) {
                    return null != c && l(b, c) ? c[b] : a
                }),
                Fb = K(function(a, b, c) {
                    return a(c[b])
                }),
                Gb = J(function(a, b) {
                    for (var c = a.length, d = [], e = 0; c > e;) d[e] = b[a[e]], e += 1;
                    return d
                }),
                Hb = J(function(a, b) {
                    if (!q(a) || !q(b)) throw new TypeError("Both arguments to range must be numbers");
                    for (var c = [], d = a; b > d;) c.push(d), d += 1;
                    return c
                }),
                Ib = K(function(a, b, c) {
                    for (var d = c.length - 1; d >= 0;) b = a(b, c[d]), d -= 1;
                    return b
                }),
                Jb = I(B),
                Kb = K(function(a, b, c) {
                    return h(C(c, 0, Math.min(a, c.length)), C(c, Math.min(c.length, a + b)))
                }),
                Lb = K(function(a, b, c) {
                    return c.replace(a, b)
                }),
                Mb = I(function(a) {
                    return u(a) ? a.split("").reverse().join("") : C(a).reverse()
                }),
                Nb = K(function(a, b, c) {
                    for (var d = 0, e = c.length, f = [b]; e > d;) b = a(b, c[d]), f[d + 1] = b, d += 1;
                    return f
                }),
                Ob = K(function(a, b, c) {
                    return ub(a, ea(b), c)
                }),
                Pb = K(H("slice", function(a, b, c) {
                    return Array.prototype.slice.call(c, a, b)
                })),
                Qb = J(function(a, b) {
                    return C(b).sort(a)
                }),
                Rb = J(function(a, b) {
                    return C(b).sort(function(b, c) {
                        var d = a(b),
                            e = a(c);
                        return e > d ? -1 : d > e ? 1 : 0
                    })
                }),
                Sb = J(function(a, b) {
                    return [Pb(0, a, b), Pb(a, Ya(b), b)]
                }),
                Tb = J(function(a, b) {
                    if (0 >= a) throw new Error("First argument to splitEvery must be a positive integer");
                    for (var c = [], d = 0; d < b.length;) c.push(Pb(d, d += a, b));
                    return c
                }),
                Ub = J(function(a, b) {
                    for (var c = 0, d = b.length, e = []; d > c && !a(b[c]);) e.push(b[c]), c += 1;
                    return [e, C(b, c)]
                }),
                Vb = J(function(a, b) {
                    return a - b
                }),
                Wb = H("tail", Pb(1, 1 / 0)),
                Xb = J(M("take", _, function(a, b) {
                    return Pb(0, 0 > a ? 1 / 0 : a, b)
                })),
                Yb = J(function(a, b) {
                    for (var c = b.length - 1; c >= 0 && a(b[c]);) c -= 1;
                    return C(b, c + 1, 1 / 0)
                }),
                Zb = J(M("takeWhile", aa, function(a, b) {
                    for (var c = 0, d = b.length; d > c && a(b[c]);) c += 1;
                    return C(b, 0, c)
                })),
                $b = J(function(a, b) {
                    return a(b), b
                }),
                _b = J(function(a, b) {
                    var c, d = Number(b),
                        e = 0;
                    if (0 > d || isNaN(d)) throw new RangeError("n must be a non-negative number");
                    for (c = new Array(d); d > e;) c[e] = a(e), e += 1;
                    return c
                }),
                ac = I(function(a) {
                    var b = [];
                    for (var c in a) l(c, a) && (b[b.length] = [c, a[c]]);
                    return b
                }),
                bc = I(function(a) {
                    var b = [];
                    for (var c in a) b[b.length] = [c, a[c]];
                    return b
                }),
                cc = I(function(a) {
                    for (var b = 0, c = []; b < a.length;) {
                        for (var d = a[b], e = 0; e < d.length;) "undefined" == typeof c[e] && (c[e] = []), c[e].push(d[e]), e += 1;
                        b += 1
                    }
                    return c
                }),
                dc = function() {
                    var a = "	\n\f\r   ᠎             　\u2028\u2029\ufeff",
                        b = "​",
                        c = "function" == typeof String.prototype.trim;
                    return I(c && !a.trim() && b.trim() ? function(a) {
                        return a.trim()
                    } : function(b) {
                        var c = new RegExp("^[" + a + "][" + a + "]*"),
                            d = new RegExp("[" + a + "][" + a + "]*$");
                        return b.replace(c, "").replace(d, "")
                    })
                }(),
                ec = I(function(a) {
                    return null === a ? "Null" : void 0 === a ? "Undefined" : Object.prototype.toString.call(a).slice(8, -1)
                }),
                fc = I(function(a) {
                    return function() {
                        return a(C(arguments))
                    }
                }),
                gc = I(function(a) {
                    return kb(1, a)
                }),
                hc = J(function(a, b) {
                    return ra(a, function() {
                        for (var c, d = 1, e = b, f = 0; a >= d && "function" == typeof e;) c = d === a ? arguments.length : f + e.length, e = e.apply(this, C(arguments, f, c)), d += 1, f = c;
                        return e
                    })
                }),
                ic = J(function(a, b) {
                    for (var c = a(b), d = []; c && c.length;) d[d.length] = c[0], c = a(c[1]);
                    return d
                }),
                jc = J(function(a, b) {
                    for (var c, d = 0, e = b.length, f = []; e > d;) c = b[d], i(a, c, f) || (f[f.length] = c), d += 1;
                    return f
                }),
                kc = K(function(a, b, c) {
                    return a(c) ? c : b(c)
                }),
                lc = K(function(a, b, c) {
                    return ca(ea(b), a, c)
                }),
                mc = J(function(a, b) {
                    return ra(b.length, function() {
                        for (var c = [], d = 0; d < b.length;) c.push(b[d].call(this, arguments[d])), d += 1;
                        return a.apply(this, c.concat(C(arguments, b.length)))
                    })
                }),
                nc = I(function(a) {
                    for (var b = Wa(a), c = b.length, d = [], e = 0; c > e;) d[e] = a[b[e]], e += 1;
                    return d
                }),
                oc = I(function(a) {
                    var b, c = [];
                    for (b in a) c[c.length] = a[b];
                    return c
                }),
                pc = function() {
                    var a = function(a) {
                        return {
                            value: a,
                            map: function() {
                                return this
                            }
                        }
                    };
                    return J(function(b, c) {
                        return b(a)(c).value
                    })
                }(),
                qc = K(function(a, b, c) {
                    return a(c) ? b(c) : c
                }),
                rc = J(function(a, b) {
                    for (var c in a)
                        if (l(c, a) && !a[c](b[c])) return !1;
                    return !0
                }),
                sc = J(function(a, b) {
                    return ra(a.length, function() {
                        return b.apply(this, h([a], arguments))
                    })
                }),
                tc = J(function(a, b) {
                    for (var c, d = 0, e = a.length, f = b.length, g = []; e > d;) {
                        for (c = 0; f > c;) g[g.length] = [a[d], b[c]], c += 1;
                        d += 1
                    }
                    return g
                }),
                uc = J(function(a, b) {
                    for (var c = [], d = 0, e = Math.min(a.length, b.length); e > d;) c[d] = [a[d], b[d]], d += 1;
                    return c
                }),
                vc = J(function(a, b) {
                    for (var c = 0, d = a.length, e = {}; d > c;) e[a[c]] = b[c], c += 1;
                    return e
                }),
                wc = K(function(a, b, c) {
                    for (var d = [], e = 0, f = Math.min(b.length, c.length); f > e;) d[e] = a(b[e], c[e]), e += 1;
                    return d
                }),
                xc = ea(!1),
                yc = ea(!0),
                zc = function Je(a, b, c) {
                    var d = function(d) {
                        for (var e = b.length, f = 0; e > f;) {
                            if (a === b[f]) return c[f];
                            f += 1
                        }
                        b[f + 1] = a, c[f + 1] = d;
                        for (var g in a) d[g] = Je(a[g], b, c);
                        return d
                    };
                    switch (ec(a)) {
                        case "Object":
                            return d({});
                        case "Array":
                            return d([]);
                        case "Date":
                            return new Date(a.valueOf());
                        case "RegExp":
                            return f(a);
                        default:
                            return a
                    }
                },
                Ac = function(a) {
                    return J(function(b, c) {
                        return d(Math.max(0, b.length - c.length), function() {
                            return b.apply(this, a(c, arguments))
                        })
                    })
                },
                Bc = function(a, b) {
                    return Xb(a < b.length ? b.length - a : 0, b)
                },
                Cc = function Ke(a, b, c, d) {
                    if (Ma(a, b)) return !0;
                    if (ec(a) !== ec(b)) return !1;
                    if (null == a || null == b) return !1;
                    if ("function" == typeof a.equals || "function" == typeof b.equals) return "function" == typeof a.equals && a.equals(b) && "function" == typeof b.equals && b.equals(a);
                    switch (ec(a)) {
                        case "Arguments":
                        case "Array":
                        case "Object":
                            break;
                        case "Boolean":
                        case "Number":
                        case "String":
                            if (typeof a != typeof b || !Ma(a.valueOf(), b.valueOf())) return !1;
                            break;
                        case "Date":
                            if (!Ma(a.valueOf(), b.valueOf())) return !1;
                            break;
                        case "Error":
                            return a.name === b.name && a.message === b.message;
                        case "RegExp":
                            if (a.source !== b.source || a.global !== b.global || a.ignoreCase !== b.ignoreCase || a.multiline !== b.multiline || a.sticky !== b.sticky || a.unicode !== b.unicode) return !1;
                            break;
                        case "Map":
                        case "Set":
                            if (!Ke(e(a.entries()), e(b.entries()), c, d)) return !1;
                            break;
                        case "Int8Array":
                        case "Uint8Array":
                        case "Uint8ClampedArray":
                        case "Int16Array":
                        case "Uint16Array":
                        case "Int32Array":
                        case "Uint32Array":
                        case "Float32Array":
                        case "Float64Array":
                            break;
                        case "ArrayBuffer":
                            break;
                        default:
                            return !1
                    }
                    var f = Wa(a);
                    if (f.length !== Wa(b).length) return !1;
                    for (var g = c.length - 1; g >= 0;) {
                        if (c[g] === a) return d[g] === b;
                        g -= 1
                    }
                    for (c.push(a), d.push(b), g = f.length - 1; g >= 0;) {
                        var h = f[g];
                        if (!l(h, b) || !Ke(b[h], a[h], c, d)) return !1;
                        g -= 1
                    }
                    return c.pop(), d.pop(), !0
                },
                Dc = function(a) {
                    return function b(c) {
                        for (var d, e, f, g = [], h = 0, i = c.length; i > h;) {
                            if (Ua(c[h]))
                                for (d = a ? b(c[h]) : c[h], f = 0, e = d.length; e > f;) g[g.length] = d[f], f += 1;
                            else g[g.length] = c[h];
                            h += 1
                        }
                        return g
                    }
                },
                Ec = function() {
                    function a(a, b, c) {
                        for (var d = 0, e = c.length; e > d;) {
                            if (b = a["@@transducer/step"](b, c[d]), b && b["@@transducer/reduced"]) {
                                b = b["@@transducer/value"];
                                break
                            }
                            d += 1
                        }
                        return a["@@transducer/result"](b)
                    }

                    function b(a, b, c) {
                        for (var d = c.next(); !d.done;) {
                            if (b = a["@@transducer/step"](b, d.value), b && b["@@transducer/reduced"]) {
                                b = b["@@transducer/value"];
                                break
                            }
                            d = c.next()
                        }
                        return a["@@transducer/result"](b)
                    }

                    function c(a, b, c) {
                        return a["@@transducer/result"](c.reduce(ma(a["@@transducer/step"], a), b))
                    }
                    var d = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
                    return function(e, f, g) {
                        if ("function" == typeof e && (e = F(e)), Ua(g)) return a(e, f, g);
                        if ("function" == typeof g.reduce) return c(e, f, g);
                        if (null != g[d]) return b(e, f, g[d]());
                        if ("function" == typeof g.next) return b(e, f, g);
                        throw new TypeError("reduce: list must be array or iterable")
                    }
                }(),
                Fc = function() {
                    function a(a, b) {
                        this.f = a, this.retained = [], this.xf = b
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        return this.retained = null, this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        return this.f(b) ? this.retain(a, b) : this.flush(a, b)
                    }, a.prototype.flush = function(a, b) {
                        return a = Ec(this.xf["@@transducer/step"], a, this.retained), this.retained = [], this.xf["@@transducer/step"](a, b)
                    }, a.prototype.retain = function(a, b) {
                        return this.retained.push(b), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                Gc = function() {
                    function a(a, b) {
                        this.xf = b, this.f = a, this.inputs = {}
                    }
                    return a.prototype["@@transducer/init"] = E.init, a.prototype["@@transducer/result"] = function(a) {
                        var b;
                        for (b in this.inputs)
                            if (l(b, this.inputs) && (a = this.xf["@@transducer/step"](a, this.inputs[b]), a["@@transducer/reduced"])) {
                                a = a["@@transducer/value"];
                                break
                            }
                        return this.inputs = null, this.xf["@@transducer/result"](a)
                    }, a.prototype["@@transducer/step"] = function(a, b) {
                        var c = this.f(b);
                        return this.inputs[c] = this.inputs[c] || [c, []], this.inputs[c][1] = ia(b, this.inputs[c][1]), a
                    }, J(function(b, c) {
                        return new a(b, c)
                    })
                }(),
                Hc = I(function(a) {
                    return ra(a.length, function() {
                        var b = 0,
                            c = arguments[0],
                            d = arguments[arguments.length - 1],
                            e = C(arguments);
                        return e[0] = function() {
                            var a = c.apply(this, h(arguments, [b, d]));
                            return b += 1, a
                        }, a.apply(this, e)
                    })
                }),
                Ic = I(function(a) {
                    return kb(2, a)
                }),
                Jc = I(function(a) {
                    return null != a && "function" == typeof a.clone ? a.clone() : zc(a, [], [])
                }),
                Kc = I(function(a) {
                    return ra(a.length, a)
                }),
                Lc = J(M("drop", R, function(a, b) {
                    return Pb(Math.max(0, a), 1 / 0, b)
                })),
                Mc = J(M("dropLast", S, Bc)),
                Nc = J(M("dropLastWhile", Fc, N)),
                Oc = J(function(a, b) {
                    return Cc(a, b, [], [])
                }),
                Pc = J(M("filter", V, function(a, b) {
                    return r(b) ? Ec(function(c, d) {
                        return a(b[d]) && (c[d] = b[d]), c
                    }, {}, Wa(b)) : j(a, b)
                })),
                Qc = I(Dc(!0)),
                Rc = I(function(a) {
                    return Kc(function(b, c) {
                        var d = C(arguments);
                        return d[0] = c, d[1] = b, a.apply(this, d)
                    })
                }),
                Sc = J(M("groupBy", Gc, function(a, b) {
                    return Ec(function(b, c) {
                        var d = a(c);
                        return b[d] = ia(c, b[d] || (b[d] = [])), b
                    }, {}, b)
                })),
                Tc = ob(0),
                Uc = J(function(a, b) {
                    return Ec(function(b, c) {
                        var d = a(c);
                        return b[d] = c, b
                    }, {}, b)
                }),
                Vc = Pb(0, -1),
                Wc = K(function(a, b, c) {
                    for (var d = [], e = 0; e < b.length;) i(a, b[e], c) && (d[d.length] = b[e]), e += 1;
                    return jc(a, d)
                }),
                Xc = I(function(a) {
                    for (var b = Wa(a), c = b.length, d = 0, e = {}; c > d;) {
                        var f = b[d],
                            g = a[f],
                            h = l(g, e) ? e[g] : e[g] = [];
                        h[h.length] = f, d += 1
                    }
                    return e
                }),
                Yc = I(function(a) {
                    for (var b = Wa(a), c = b.length, d = 0, e = {}; c > d;) {
                        var f = b[d];
                        e[a[f]] = f, d += 1
                    }
                    return e
                }),
                Zc = I(function(a) {
                    return null != a && Oc(a, Aa(a))
                }),
                $c = ob(-1),
                _c = J(function(a, b) {
                    if ("function" != typeof b.lastIndexOf || o(b)) {
                        for (var c = b.length - 1; c >= 0;) {
                            if (Oc(b[c], a)) return c;
                            c -= 1
                        }
                        return -1
                    }
                    return b.lastIndexOf(a)
                }),
                ad = J(M("map", $, function(a, b) {
                    switch (Object.prototype.toString.call(b)) {
                        case "[object Function]":
                            return ra(b.length, function() {
                                return a.call(this, b.apply(this, arguments))
                            });
                        case "[object Object]":
                            return Ec(function(c, d) {
                                return c[d] = a(b[d]), c
                            }, {}, Wa(b));
                        default:
                            return w(a, b)
                    }
                })),
                bd = J(function(a, b) {
                    return Ec(function(c, d) {
                        return c[d] = a(b[d], d, b), c
                    }, {}, Wa(b))
                }),
                cd = K(function(a, b, c) {
                    return fb(function(b, c, d) {
                        return a(c, d)
                    }, b, c)
                }),
                dd = Ac(h),
                ed = Ac(Rc(h)),
                fd = J(function(a, b) {
                    return Ec(function(b, c) {
                        var d = b[a(c) ? 0 : 1];
                        return d[d.length] = c, b
                    }, [
                        [],
                        []
                    ], b)
                }),
                gd = K(function(a, b, c) {
                    return Oc(wb(a, c), b)
                }),
                hd = J(function(a, b) {
                    return ad(Db(a), b)
                }),
                id = mc(w, [Ab, Na]),
                jd = K(function(a, b, c) {
                    return Fb(Oc(b), a, c)
                }),
                kd = K(function(a, b, c) {
                    return Fb(Ta(a), b, c)
                }),
                ld = K(Ec),
                md = J(function(a, b) {
                    return Pc(g(a), b)
                }),
                nd = J(function(a, b) {
                    return _b(ea(a), b)
                }),
                od = ld(ba, 0),
                pd = J(function(a, b) {
                    return Lc(a >= 0 ? b.length - a : 0, b)
                }),
                qd = ra(4, function(a, b, c, d) {
                    return Ec(a("function" == typeof b ? F(b) : b), c, d)
                }),
                rd = K(function(a, b, c) {
                    return jc(a, h(b, c))
                }),
                sd = J(function(a, b) {
                    return rc(ad(Oc, a), b)
                }),
                td = function() {
                    var a = function(a) {
                        return {
                            "@@transducer/init": E.init,
                            "@@transducer/result": function(b) {
                                return a["@@transducer/result"](b)
                            },
                            "@@transducer/step": function(b, c) {
                                var d = a["@@transducer/step"](b, c);
                                return d["@@transducer/reduced"] ? k(d) : d
                            }
                        }
                    };
                    return function(b) {
                        var c = a(b);
                        return {
                            "@@transducer/init": E.init,
                            "@@transducer/result": function(a) {
                                return c["@@transducer/result"](a)
                            },
                            "@@transducer/step": function(a, b) {
                                return Ua(b) ? Ec(c, a, b) : Ec(c, a, [b])
                            }
                        }
                    }
                }(),
                ud = function(a, b, c) {
                    var d, e;
                    if ("function" == typeof a.indexOf) switch (typeof b) {
                        case "number":
                            if (0 === b) {
                                for (d = 1 / b; c < a.length;) {
                                    if (e = a[c], 0 === e && 1 / e === d) return c;
                                    c += 1
                                }
                                return -1
                            }
                            if (b !== b) {
                                for (; c < a.length;) {
                                    if (e = a[c], "number" == typeof e && e !== e) return c;
                                    c += 1
                                }
                                return -1
                            }
                            return a.indexOf(b, c);
                        case "string":
                        case "boolean":
                        case "function":
                        case "undefined":
                            return a.indexOf(b, c);
                        case "object":
                            if (null === b) return a.indexOf(b, c)
                    }
                    for (; c < a.length;) {
                        if (Oc(a[c], b)) return c;
                        c += 1
                    }
                    return -1
                },
                vd = J(function(a, b) {
                    return ad(a, td(b))
                }),
                wd = I(function(a) {
                    return ra(ld(db, 0, hd("length", a)), function() {
                        for (var b = 0, c = a.length; c > b;) {
                            if (!a[b].apply(this, arguments)) return !1;
                            b += 1
                        }
                        return !0
                    })
                }),
                xd = I(function(a) {
                    for (var b = a.length, c = 0; b > c;) {
                        if (ud(a, a[c], c + 1) >= 0) return !1;
                        c += 1
                    }
                    return !0
                }),
                yd = I(function(a) {
                    return ra(ld(db, 0, hd("length", a)), function() {
                        for (var b = 0, c = a.length; c > b;) {
                            if (a[b].apply(this, arguments)) return !0;
                            b += 1
                        }
                        return !1
                    })
                }),
                zd = J(function(a, b) {
                    return "function" == typeof a.ap ? a.ap(b) : "function" == typeof a ? ra(Math.max(a.length, b.length), function() {
                        return a.apply(this, arguments)(b.apply(this, arguments))
                    }) : Ec(function(a, c) {
                        return h(a, ad(c, b))
                    }, [], a)
                }),
                Ad = Kc(function(a) {
                    return a.apply(this, C(arguments, 1))
                }),
                Bd = J(M("chain", vd, function(a, b) {
                    return "function" == typeof b ? function() {
                        return b.call(this, a.apply(this, arguments)).apply(this, arguments)
                    } : Dc(!1)(ad(a, b))
                })),
                Cd = K(function(a, b, c) {
                    function d(b, c) {
                        return zd(ad(Cb, a(c)), b)
                    }
                    return Ib(d, b([]), c)
                }),
                Dd = J(function(a, b) {
                    if (a > 10) throw new Error("Constructor with greater than ten arguments");
                    return 0 === a ? function() {
                        return new b
                    } : Kc(kb(a, function(a, c, d, e, f, g, h, i, j, k) {
                        switch (arguments.length) {
                            case 1:
                                return new b(a);
                            case 2:
                                return new b(a, c);
                            case 3:
                                return new b(a, c, d);
                            case 4:
                                return new b(a, c, d, e);
                            case 5:
                                return new b(a, c, d, e, f);
                            case 6:
                                return new b(a, c, d, e, f, g);
                            case 7:
                                return new b(a, c, d, e, f, g, h);
                            case 8:
                                return new b(a, c, d, e, f, g, h, i);
                            case 9:
                                return new b(a, c, d, e, f, g, h, i, j);
                            case 10:
                                return new b(a, c, d, e, f, g, h, i, j, k)
                        }
                    }))
                }),
                Ed = J(function(a, b) {
                    return ra(Math.max.apply(Math, hd("length", b)), function() {
                        var c = arguments,
                            d = this;
                        return a.apply(d, w(function(a) {
                            return a.apply(d, c)
                        }, b))
                    })
                }),
                Fd = J(M("dropRepeatsWith", T, function(a, b) {
                    var c = [],
                        d = 1,
                        e = b.length;
                    if (0 !== e)
                        for (c[0] = b[0]; e > d;) a($c(c), b[d]) || (c[c.length] = b[d]), d += 1;
                    return c
                })),
                Gd = K(function(a, b, c) {
                    return Oc(a(b), a(c))
                }),
                Hd = K(function(a, b, c) {
                    return Oc(b[a], c[a])
                }),
                Id = J(function(a, b) {
                    return "function" != typeof b.indexOf || o(b) ? ud(b, a, 0) : b.indexOf(a)
                }),
                Jd = I(function(b) {
                    return function() {
                        return ad(ja(a, arguments), b)
                    }
                }),
                Kd = J(function(a, b) {
                    return function(c) {
                        return function(d) {
                            return ad(function(a) {
                                return b(a, d)
                            }, c(a(d)))
                        }
                    }
                }),
                Ld = I(function(a) {
                    return Kd(ob(a), lc(a))
                }),
                Md = I(function(a) {
                    return Kd(wb(a), la(a))
                }),
                Nd = I(function(a) {
                    return Kd(Db(a), ka(a))
                }),
                Od = J(function(a, b) {
                    var c = ra(a, b);
                    return ra(a, function() {
                        return Ec(zd, ad(c, arguments[0]), C(arguments, 1))
                    })
                }),
                Pd = I(function(a) {
                    return od(a) / a.length
                }),
                Qd = I(function(a) {
                    var b = a.length;
                    if (0 === b) return NaN;
                    var c = 2 - b % 2,
                        d = (b - c) / 2;
                    return Pd(C(a).sort(function(a, b) {
                        return b > a ? -1 : a > b ? 1 : 0
                    }).slice(d, d + c))
                }),
                Rd = cd(function(a, b) {
                    return b
                }),
                Sd = I(function(a) {
                    return ld(Rd, {}, a)
                }),
                Td = function() {
                    if (0 === arguments.length) throw new Error("pipe requires at least one argument");
                    return d(arguments[0].length, ld(y, arguments[0], Wb(arguments)))
                },
                Ud = function() {
                    if (0 === arguments.length) throw new Error("pipeP requires at least one argument");
                    return d(arguments[0].length, ld(z, arguments[0], Wb(arguments)))
                },
                Vd = ld(jb, 1),
                Wd = J(function(a, b) {
                    return "function" == typeof b.sequence ? b.sequence(a) : Ib(function(a, b) {
                        return zd(ad(Cb, b), a)
                    }, a([]), b)
                }),
                Xd = K(function(a, b, c) {
                    return Wd(a, ad(b, c))
                }),
                Yd = Bd(m),
                Zd = function(a, b) {
                    return ud(b, a, 0) >= 0
                },
                $d = function() {
                    var a = {
                            "@@transducer/init": Array,
                            "@@transducer/step": function(a, b) {
                                return h(a, [b])
                            },
                            "@@transducer/result": m
                        },
                        b = {
                            "@@transducer/init": String,
                            "@@transducer/step": function(a, b) {
                                return a + b
                            },
                            "@@transducer/result": m
                        },
                        c = {
                            "@@transducer/init": Object,
                            "@@transducer/step": function(a, b) {
                                return Rd(a, Ua(b) ? qb(b[0], b[1]) : b)
                            },
                            "@@transducer/result": m
                        };
                    return function(d) {
                        if (v(d)) return d;
                        if (Ua(d)) return a;
                        if ("string" == typeof d) return b;
                        if ("object" == typeof d) return c;
                        throw new Error("Cannot create transformer for " + d)
                    }
                }(),
                _d = function Le(a, b) {
                    var c = function(c) {
                            var d = b.concat([a]);
                            return Zd(c, d) ? "<Circular>" : Le(c, d)
                        },
                        d = function(a, b) {
                            return w(function(b) {
                                return A(b) + ": " + c(a[b])
                            }, b.slice().sort())
                        };
                    switch (Object.prototype.toString.call(a)) {
                        case "[object Arguments]":
                            return "(function() { return arguments; }(" + w(c, a).join(", ") + "))";
                        case "[object Array]":
                            return "[" + w(c, a).concat(d(a, md(function(a) {
                                return /^\d+$/.test(a)
                            }, Wa(a)))).join(", ") + "]";
                        case "[object Boolean]":
                            return "object" == typeof a ? "new Boolean(" + c(a.valueOf()) + ")" : a.toString();
                        case "[object Date]":
                            return "new Date(" + (isNaN(a.valueOf()) ? c(NaN) : A(D(a))) + ")";
                        case "[object Null]":
                            return "null";
                        case "[object Number]":
                            return "object" == typeof a ? "new Number(" + c(a.valueOf()) + ")" : 1 / a === -(1 / 0) ? "-0" : a.toString(10);
                        case "[object String]":
                            return "object" == typeof a ? "new String(" + c(a.valueOf()) + ")" : A(a);
                        case "[object Undefined]":
                            return "undefined";
                        default:
                            if ("function" == typeof a.toString) {
                                var e = a.toString();
                                if ("[object Object]" !== e) return e
                            }
                            return "{" + d(a, Wa(a)).join(", ") + "}"
                    }
                },
                ae = Cd(Na),
                be = function() {
                    if (0 === arguments.length) throw new Error("compose requires at least one argument");
                    return Td.apply(this, Mb(arguments))
                },
                ce = function() {
                    return be.apply(this, Cb(Na, ad(Bd, arguments)))
                },
                de = function() {
                    if (0 === arguments.length) throw new Error("composeP requires at least one argument");
                    return Ud.apply(this, Mb(arguments))
                },
                ee = I(function(a) {
                    return Dd(a.length, a)
                }),
                fe = J(Zd),
                ge = J(function(a, b) {
                    for (var c = [], d = 0, e = a.length; e > d;) Zd(a[d], b) || Zd(a[d], c) || (c[c.length] = a[d]), d += 1;
                    return c
                }),
                he = I(M("dropRepeats", T(Oc), Fd(Oc))),
                ie = K(function(a, b, c) {
                    return v(a) ? Ec(b(a), a["@@transducer/init"](), c) : Ec(b($d(a)), a, c)
                }),
                je = I(function(a) {
                    return Od(a.length, a)
                }),
                ke = J(function(a, b) {
                    var c = {};
                    for (var d in b) Zd(d, a) || (c[d] = b[d]);
                    return c
                }),
                le = function() {
                    return ce.apply(this, Mb(arguments))
                },
                me = I(function(a) {
                    return _d(a, [])
                }),
                ne = J("undefined" == typeof Set ? function(a, b) {
                    for (var c, d, e = 0, f = [], g = []; e < b.length;) d = b[e], c = a(d), Zd(c, f) || (g.push(d), f.push(c)), e += 1;
                    return g
                } : function(a, b) {
                    for (var c, d, e, f = new Set, g = [], h = 0, i = [], j = !1, k = !1, l = 0; l < b.length;) {
                        switch (d = b[l], c = a(d), typeof c) {
                            case "number":
                                if (0 === c && !k && 1 / c === -(1 / 0)) {
                                    k = !0, i.push(d);
                                    break
                                }
                            case "string":
                            case "boolean":
                            case "function":
                            case "undefined":
                                f.add(c), e = f.size, e > h && (i.push(d), h = e);
                                break;
                            case "object":
                                if (null === c) {
                                    j || (j = !0, i.push(null));
                                    break
                                }
                            default:
                                Zd(c, g) || (g.push(c), i.push(d))
                        }
                        l += 1
                    }
                    return i
                }),
                oe = J(function(a, b) {
                    return md(Rc(Zd)(a), b)
                }),
                pe = je(nb),
                qe = J(function(a, b) {
                    return ra(a + 1, function() {
                        var c = arguments[a];
                        if (null != c && Ta(Function, c[b])) return c[b].apply(c, C(arguments, 0, a));
                        throw new TypeError(me(c) + ' does not have a method named "' + b + '"')
                    })
                }),
                re = qe(1, "join"),
                se = I(function(a) {
                    var b = {};
                    return d(a.length, function() {
                        var c = me(arguments);
                        return l(c, b) || (b[c] = a.apply(this, arguments)), b[c]
                    })
                }),
                te = qe(1, "split"),
                ue = J(function(a, b) {
                    if (!t(a)) throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + me(a));
                    return f(a).test(b)
                }),
                ve = qe(0, "toLowerCase"),
                we = qe(0, "toUpperCase"),
                xe = ne(Na),
                ye = Rc(qe(1, "concat")),
                ze = J(function(a, b) {
                    return xe(j(Rc(Zd)(a), b))
                }),
                Ae = J(function(a, b) {
                    return ye(ge(a, b), ge(b, a))
                }),
                Be = K(function(a, b, c) {
                    return ye(ua(a, b, c), ua(a, c, b))
                }),
                Ce = J(be(xe, h)),
                De = {
                    F: xc,
                    T: yc,
                    __: a,
                    add: ba,
                    addIndex: Hc,
                    adjust: ca,
                    all: da,
                    allPass: wd,
                    allUniq: xd,
                    always: ea,
                    and: fa,
                    any: ga,
                    anyPass: yd,
                    ap: zd,
                    aperture: ha,
                    append: ia,
                    apply: ja,
                    assoc: ka,
                    assocPath: la,
                    binary: Ic,
                    bind: ma,
                    both: na,
                    call: Ad,
                    chain: Bd,
                    clone: Jc,
                    commute: ae,
                    commuteMap: Cd,
                    comparator: oa,
                    complement: pe,
                    compose: be,
                    composeK: ce,
                    composeP: de,
                    concat: ye,
                    cond: pa,
                    construct: ee,
                    constructN: Dd,
                    contains: fe,
                    converge: Ed,
                    countBy: qa,
                    curry: Kc,
                    curryN: ra,
                    dec: sa,
                    defaultTo: ta,
                    difference: ge,
                    differenceWith: ua,
                    dissoc: va,
                    dissocPath: wa,
                    divide: xa,
                    drop: Lc,
                    dropLast: Mc,
                    dropLastWhile: Nc,
                    dropRepeats: he,
                    dropRepeatsWith: Fd,
                    dropWhile: ya,
                    either: za,
                    empty: Aa,
                    eqBy: Gd,
                    eqProps: Hd,
                    equals: Oc,
                    evolve: Ba,
                    filter: Pc,
                    find: Ca,
                    findIndex: Da,
                    findLast: Ea,
                    findLastIndex: Fa,
                    flatten: Qc,
                    flip: Rc,
                    forEach: Ga,
                    fromPairs: Ha,
                    groupBy: Sc,
                    gt: Ia,
                    gte: Ja,
                    has: Ka,
                    hasIn: La,
                    head: Tc,
                    identical: Ma,
                    identity: Na,
                    ifElse: Oa,
                    inc: Pa,
                    indexBy: Uc,
                    indexOf: Id,
                    init: Vc,
                    insert: Qa,
                    insertAll: Ra,
                    intersection: ze,
                    intersectionWith: Wc,
                    intersperse: Sa,
                    into: ie,
                    invert: Xc,
                    invertObj: Yc,
                    invoker: qe,
                    is: Ta,
                    isArrayLike: Ua,
                    isEmpty: Zc,
                    isNil: Va,
                    join: re,
                    juxt: Jd,
                    keys: Wa,
                    keysIn: Xa,
                    last: $c,
                    lastIndexOf: _c,
                    length: Ya,
                    lens: Kd,
                    lensIndex: Ld,
                    lensPath: Md,
                    lensProp: Nd,
                    lift: je,
                    liftN: Od,
                    lt: Za,
                    lte: $a,
                    map: ad,
                    mapAccum: _a,
                    mapAccumRight: ab,
                    mapObjIndexed: bd,
                    match: bb,
                    mathMod: cb,
                    max: db,
                    maxBy: eb,
                    mean: Pd,
                    median: Qd,
                    memoize: se,
                    merge: Rd,
                    mergeAll: Sd,
                    mergeWith: cd,
                    mergeWithKey: fb,
                    min: gb,
                    minBy: hb,
                    modulo: ib,
                    multiply: jb,
                    nAry: kb,
                    negate: lb,
                    none: mb,
                    not: nb,
                    nth: ob,
                    nthArg: pb,
                    objOf: qb,
                    of: rb,
                    omit: ke,
                    once: sb,
                    or: tb,
                    over: ub,
                    pair: vb,
                    partial: dd,
                    partialRight: ed,
                    partition: fd,
                    path: wb,
                    pathEq: gd,
                    pathOr: xb,
                    pathSatisfies: yb,
                    pick: zb,
                    pickAll: Ab,
                    pickBy: Bb,
                    pipe: Td,
                    pipeK: le,
                    pipeP: Ud,
                    pluck: hd,
                    prepend: Cb,
                    product: Vd,
                    project: id,
                    prop: Db,
                    propEq: jd,
                    propIs: kd,
                    propOr: Eb,
                    propSatisfies: Fb,
                    props: Gb,
                    range: Hb,
                    reduce: ld,
                    reduceRight: Ib,
                    reduced: Jb,
                    reject: md,
                    remove: Kb,
                    repeat: nd,
                    replace: Lb,
                    reverse: Mb,
                    scan: Nb,
                    sequence: Wd,
                    set: Ob,
                    slice: Pb,
                    sort: Qb,
                    sortBy: Rb,
                    split: te,
                    splitAt: Sb,
                    splitEvery: Tb,
                    splitWhen: Ub,
                    subtract: Vb,
                    sum: od,
                    symmetricDifference: Ae,
                    symmetricDifferenceWith: Be,
                    tail: Wb,
                    take: Xb,
                    takeLast: pd,
                    takeLastWhile: Yb,
                    takeWhile: Zb,
                    tap: $b,
                    test: ue,
                    times: _b,
                    toLower: ve,
                    toPairs: ac,
                    toPairsIn: bc,
                    toString: me,
                    toUpper: we,
                    transduce: qd,
                    transpose: cc,
                    traverse: Xd,
                    trim: dc,
                    type: ec,
                    unapply: fc,
                    unary: gc,
                    uncurryN: hc,
                    unfold: ic,
                    union: Ce,
                    unionWith: rd,
                    uniq: xe,
                    uniqBy: ne,
                    uniqWith: jc,
                    unless: kc,
                    unnest: Yd,
                    update: lc,
                    useWith: mc,
                    values: nc,
                    valuesIn: oc,
                    view: pc,
                    when: qc,
                    where: rc,
                    whereEq: sd,
                    without: oe,
                    wrap: sc,
                    xprod: tc,
                    zip: uc,
                    zipObj: vc,
                    zipWith: wc
                };
            "object" == typeof c ? b.exports = De : "function" == typeof define && define.amd ? define(function() {
                return De
            }) : this.R = De
        }).call(this)
    }, {}],
    200: [function(a, b, c) {
        (function(a, c, d) {
            "use strict";

            function e() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }

            function f(b, e) {
                if (b > 65536) throw new Error("requested too many random bytes");
                var f = new c.Uint8Array(b);
                g.getRandomValues(f);
                var h = new d(f.buffer);
                return "function" == typeof e ? a.nextTick(function() {
                    e(null, h)
                }) : h
            }
            var g = c.crypto || c.msCrypto;
            g && g.getRandomValues ? b.exports = f : b.exports = e
        }).call(this, a("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, a("buffer").Buffer)
    }, {
        _process: 191,
        buffer: 51
    }],
    201: [function(a, b, c) {
        b.exports = function(a, b, c, d, e) {
            return d + (e - d) * ((a - b) / (c - b))
        }
    }, {}],
    202: [function(a, b, c) {
        b.exports = a("./lib/_stream_duplex.js")
    }, {
        "./lib/_stream_duplex.js": 203
    }],
    203: [function(a, b, c) {
        "use strict";

        function d(a) {
            return this instanceof d ? (j.call(this, a), k.call(this, a), a && a.readable === !1 && (this.readable = !1), a && a.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, a && a.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", e)) : new d(a)
        }

        function e() {
            this.allowHalfOpen || this._writableState.ended || h(f, this)
        }

        function f(a) {
            a.end()
        }
        var g = Object.keys || function(a) {
            var b = [];
            for (var c in a) b.push(c);
            return b
        };
        b.exports = d;
        var h = a("process-nextick-args"),
            i = a("core-util-is");
        i.inherits = a("inherits");
        var j = a("./_stream_readable"),
            k = a("./_stream_writable");
        i.inherits(d, j);
        for (var l = g(k.prototype), m = 0; m < l.length; m++) {
            var n = l[m];
            d.prototype[n] || (d.prototype[n] = k.prototype[n])
        }
    }, {
        "./_stream_readable": 205,
        "./_stream_writable": 207,
        "core-util-is": 54,
        inherits: 101,
        "process-nextick-args": 190
    }],
    204: [function(a, b, c) {
        "use strict";

        function d(a) {
            return this instanceof d ? void e.call(this, a) : new d(a)
        }
        b.exports = d;
        var e = a("./_stream_transform"),
            f = a("core-util-is");
        f.inherits = a("inherits"), f.inherits(d, e), d.prototype._transform = function(a, b, c) {
            c(null, a)
        }
    }, {
        "./_stream_transform": 206,
        "core-util-is": 54,
        inherits: 101
    }],
    205: [function(a, b, c) {
        (function(c) {
            "use strict";

            function d(b, c) {
                I = I || a("./_stream_duplex"), b = b || {}, this.objectMode = !!b.objectMode, c instanceof I && (this.objectMode = this.objectMode || !!b.readableObjectMode);
                var d = b.highWaterMark,
                    e = this.objectMode ? 16 : 16384;
                this.highWaterMark = d || 0 === d ? d : e, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.defaultEncoding = b.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, b.encoding && (H || (H = a("string_decoder/").StringDecoder), this.decoder = new H(b.encoding), this.encoding = b.encoding)
            }

            function e(b) {
                return I = I || a("./_stream_duplex"), this instanceof e ? (this._readableState = new d(b, this), this.readable = !0, b && "function" == typeof b.read && (this._read = b.read), void C.call(this)) : new e(b)
            }

            function f(a, b, c, d, e) {
                var f = j(b, c);
                if (f) a.emit("error", f);
                else if (null === c) b.reading = !1, k(a, b);
                else if (b.objectMode || c && c.length > 0)
                    if (b.ended && !e) {
                        var h = new Error("stream.push() after EOF");
                        a.emit("error", h)
                    } else if (b.endEmitted && e) {
                    var h = new Error("stream.unshift() after end event");
                    a.emit("error", h)
                } else !b.decoder || e || d || (c = b.decoder.write(c)), e || (b.reading = !1), b.flowing && 0 === b.length && !b.sync ? (a.emit("data", c), a.read(0)) : (b.length += b.objectMode ? 1 : c.length, e ? b.buffer.unshift(c) : b.buffer.push(c), b.needReadable && l(a)), n(a, b);
                else e || (b.reading = !1);
                return g(b)
            }

            function g(a) {
                return !a.ended && (a.needReadable || a.length < a.highWaterMark || 0 === a.length)
            }

            function h(a) {
                return a >= J ? a = J : (a--, a |= a >>> 1, a |= a >>> 2, a |= a >>> 4, a |= a >>> 8, a |= a >>> 16, a++), a
            }

            function i(a, b) {
                return 0 === b.length && b.ended ? 0 : b.objectMode ? 0 === a ? 0 : 1 : null === a || isNaN(a) ? b.flowing && b.buffer.length ? b.buffer[0].length : b.length : 0 >= a ? 0 : (a > b.highWaterMark && (b.highWaterMark = h(a)), a > b.length ? b.ended ? b.length : (b.needReadable = !0, 0) : a)
            }

            function j(a, b) {
                var c = null;
                return B.isBuffer(b) || "string" == typeof b || null === b || void 0 === b || a.objectMode || (c = new TypeError("Invalid non-string/buffer chunk")), c
            }

            function k(a, b) {
                if (!b.ended) {
                    if (b.decoder) {
                        var c = b.decoder.end();
                        c && c.length && (b.buffer.push(c), b.length += b.objectMode ? 1 : c.length)
                    }
                    b.ended = !0, l(a)
                }
            }

            function l(a) {
                var b = a._readableState;
                b.needReadable = !1, b.emittedReadable || (F("emitReadable", b.flowing), b.emittedReadable = !0, b.sync ? z(m, a) : m(a))
            }

            function m(a) {
                F("emit readable"), a.emit("readable"), t(a)
            }

            function n(a, b) {
                b.readingMore || (b.readingMore = !0, z(o, a, b))
            }

            function o(a, b) {
                for (var c = b.length; !b.reading && !b.flowing && !b.ended && b.length < b.highWaterMark && (F("maybeReadMore read 0"), a.read(0), c !== b.length);) c = b.length;
                b.readingMore = !1
            }

            function p(a) {
                return function() {
                    var b = a._readableState;
                    F("pipeOnDrain", b.awaitDrain), b.awaitDrain && b.awaitDrain--, 0 === b.awaitDrain && D(a, "data") && (b.flowing = !0, t(a))
                }
            }

            function q(a) {
                F("readable nexttick read 0"), a.read(0)
            }

            function r(a, b) {
                b.resumeScheduled || (b.resumeScheduled = !0, z(s, a, b))
            }

            function s(a, b) {
                b.reading || (F("resume read 0"), a.read(0)), b.resumeScheduled = !1, a.emit("resume"), t(a), b.flowing && !b.reading && a.read(0)
            }

            function t(a) {
                var b = a._readableState;
                if (F("flow", b.flowing), b.flowing)
                    do var c = a.read(); while (null !== c && b.flowing)
            }

            function u(a, b) {
                var c, d = b.buffer,
                    e = b.length,
                    f = !!b.decoder,
                    g = !!b.objectMode;
                if (0 === d.length) return null;
                if (0 === e) c = null;
                else if (g) c = d.shift();
                else if (!a || a >= e) c = f ? d.join("") : 1 === d.length ? d[0] : B.concat(d, e), d.length = 0;
                else if (a < d[0].length) {
                    var h = d[0];
                    c = h.slice(0, a), d[0] = h.slice(a)
                } else if (a === d[0].length) c = d.shift();
                else {
                    c = f ? "" : new B(a);
                    for (var i = 0, j = 0, k = d.length; k > j && a > i; j++) {
                        var h = d[0],
                            l = Math.min(a - i, h.length);
                        f ? c += h.slice(0, l) : h.copy(c, i, 0, l), l < h.length ? d[0] = h.slice(l) : d.shift(), i += l
                    }
                }
                return c
            }

            function v(a) {
                var b = a._readableState;
                if (b.length > 0) throw new Error("endReadable called on non-empty stream");
                b.endEmitted || (b.ended = !0, z(w, b, a))
            }

            function w(a, b) {
                a.endEmitted || 0 !== a.length || (a.endEmitted = !0, b.readable = !1, b.emit("end"))
            }

            function x(a, b) {
                for (var c = 0, d = a.length; d > c; c++) b(a[c], c);
            }

            function y(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            }
            b.exports = e;
            var z = a("process-nextick-args"),
                A = a("isarray"),
                B = a("buffer").Buffer;
            e.ReadableState = d;
            var C, D = (a("events"), function(a, b) {
                return a.listeners(b).length
            });
            ! function() {
                try {
                    C = a("stream")
                } catch (b) {} finally {
                    C || (C = a("events").EventEmitter)
                }
            }();
            var B = a("buffer").Buffer,
                E = a("core-util-is");
            E.inherits = a("inherits");
            var F, G = a("util");
            F = G && G.debuglog ? G.debuglog("stream") : function() {};
            var H;
            E.inherits(e, C);
            var I, I;
            e.prototype.push = function(a, b) {
                var c = this._readableState;
                return c.objectMode || "string" != typeof a || (b = b || c.defaultEncoding, b !== c.encoding && (a = new B(a, b), b = "")), f(this, c, a, b, !1)
            }, e.prototype.unshift = function(a) {
                var b = this._readableState;
                return f(this, b, a, "", !0)
            }, e.prototype.isPaused = function() {
                return this._readableState.flowing === !1
            }, e.prototype.setEncoding = function(b) {
                return H || (H = a("string_decoder/").StringDecoder), this._readableState.decoder = new H(b), this._readableState.encoding = b, this
            };
            var J = 8388608;
            e.prototype.read = function(a) {
                F("read", a);
                var b = this._readableState,
                    c = a;
                if (("number" != typeof a || a > 0) && (b.emittedReadable = !1), 0 === a && b.needReadable && (b.length >= b.highWaterMark || b.ended)) return F("read: emitReadable", b.length, b.ended), 0 === b.length && b.ended ? v(this) : l(this), null;
                if (a = i(a, b), 0 === a && b.ended) return 0 === b.length && v(this), null;
                var d = b.needReadable;
                F("need readable", d), (0 === b.length || b.length - a < b.highWaterMark) && (d = !0, F("length less than watermark", d)), (b.ended || b.reading) && (d = !1, F("reading or ended", d)), d && (F("do read"), b.reading = !0, b.sync = !0, 0 === b.length && (b.needReadable = !0), this._read(b.highWaterMark), b.sync = !1), d && !b.reading && (a = i(c, b));
                var e;
                return e = a > 0 ? u(a, b) : null, null === e && (b.needReadable = !0, a = 0), b.length -= a, 0 !== b.length || b.ended || (b.needReadable = !0), c !== a && b.ended && 0 === b.length && v(this), null !== e && this.emit("data", e), e
            }, e.prototype._read = function(a) {
                this.emit("error", new Error("not implemented"))
            }, e.prototype.pipe = function(a, b) {
                function d(a) {
                    F("onunpipe"), a === l && f()
                }

                function e() {
                    F("onend"), a.end()
                }

                function f() {
                    F("cleanup"), a.removeListener("close", i), a.removeListener("finish", j), a.removeListener("drain", q), a.removeListener("error", h), a.removeListener("unpipe", d), l.removeListener("end", e), l.removeListener("end", f), l.removeListener("data", g), r = !0, !m.awaitDrain || a._writableState && !a._writableState.needDrain || q()
                }

                function g(b) {
                    F("ondata");
                    var c = a.write(b);
                    !1 === c && (1 !== m.pipesCount || m.pipes[0] !== a || 1 !== l.listenerCount("data") || r || (F("false write response, pause", l._readableState.awaitDrain), l._readableState.awaitDrain++), l.pause())
                }

                function h(b) {
                    F("onerror", b), k(), a.removeListener("error", h), 0 === D(a, "error") && a.emit("error", b)
                }

                function i() {
                    a.removeListener("finish", j), k()
                }

                function j() {
                    F("onfinish"), a.removeListener("close", i), k()
                }

                function k() {
                    F("unpipe"), l.unpipe(a)
                }
                var l = this,
                    m = this._readableState;
                switch (m.pipesCount) {
                    case 0:
                        m.pipes = a;
                        break;
                    case 1:
                        m.pipes = [m.pipes, a];
                        break;
                    default:
                        m.pipes.push(a)
                }
                m.pipesCount += 1, F("pipe count=%d opts=%j", m.pipesCount, b);
                var n = (!b || b.end !== !1) && a !== c.stdout && a !== c.stderr,
                    o = n ? e : f;
                m.endEmitted ? z(o) : l.once("end", o), a.on("unpipe", d);
                var q = p(l);
                a.on("drain", q);
                var r = !1;
                return l.on("data", g), a._events && a._events.error ? A(a._events.error) ? a._events.error.unshift(h) : a._events.error = [h, a._events.error] : a.on("error", h), a.once("close", i), a.once("finish", j), a.emit("pipe", l), m.flowing || (F("pipe resume"), l.resume()), a
            }, e.prototype.unpipe = function(a) {
                var b = this._readableState;
                if (0 === b.pipesCount) return this;
                if (1 === b.pipesCount) return a && a !== b.pipes ? this : (a || (a = b.pipes), b.pipes = null, b.pipesCount = 0, b.flowing = !1, a && a.emit("unpipe", this), this);
                if (!a) {
                    var c = b.pipes,
                        d = b.pipesCount;
                    b.pipes = null, b.pipesCount = 0, b.flowing = !1;
                    for (var e = 0; d > e; e++) c[e].emit("unpipe", this);
                    return this
                }
                var e = y(b.pipes, a);
                return -1 === e ? this : (b.pipes.splice(e, 1), b.pipesCount -= 1, 1 === b.pipesCount && (b.pipes = b.pipes[0]), a.emit("unpipe", this), this)
            }, e.prototype.on = function(a, b) {
                var c = C.prototype.on.call(this, a, b);
                if ("data" === a && !1 !== this._readableState.flowing && this.resume(), "readable" === a && this.readable) {
                    var d = this._readableState;
                    d.readableListening || (d.readableListening = !0, d.emittedReadable = !1, d.needReadable = !0, d.reading ? d.length && l(this, d) : z(q, this))
                }
                return c
            }, e.prototype.addListener = e.prototype.on, e.prototype.resume = function() {
                var a = this._readableState;
                return a.flowing || (F("resume"), a.flowing = !0, r(this, a)), this
            }, e.prototype.pause = function() {
                return F("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (F("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, e.prototype.wrap = function(a) {
                var b = this._readableState,
                    c = !1,
                    d = this;
                a.on("end", function() {
                    if (F("wrapped end"), b.decoder && !b.ended) {
                        var a = b.decoder.end();
                        a && a.length && d.push(a)
                    }
                    d.push(null)
                }), a.on("data", function(e) {
                    if (F("wrapped data"), b.decoder && (e = b.decoder.write(e)), (!b.objectMode || null !== e && void 0 !== e) && (b.objectMode || e && e.length)) {
                        var f = d.push(e);
                        f || (c = !0, a.pause())
                    }
                });
                for (var e in a) void 0 === this[e] && "function" == typeof a[e] && (this[e] = function(b) {
                    return function() {
                        return a[b].apply(a, arguments)
                    }
                }(e));
                var f = ["error", "close", "destroy", "pause", "resume"];
                return x(f, function(b) {
                    a.on(b, d.emit.bind(d, b))
                }), d._read = function(b) {
                    F("wrapped _read", b), c && (c = !1, a.resume())
                }, d
            }, e._fromList = u
        }).call(this, a("_process"))
    }, {
        "./_stream_duplex": 203,
        _process: 191,
        buffer: 51,
        "core-util-is": 54,
        events: 88,
        inherits: 101,
        isarray: 107,
        "process-nextick-args": 190,
        "string_decoder/": 232,
        util: 24
    }],
    206: [function(a, b, c) {
        "use strict";

        function d(a) {
            this.afterTransform = function(b, c) {
                return e(a, b, c)
            }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null
        }

        function e(a, b, c) {
            var d = a._transformState;
            d.transforming = !1;
            var e = d.writecb;
            if (!e) return a.emit("error", new Error("no writecb in Transform class"));
            d.writechunk = null, d.writecb = null, null !== c && void 0 !== c && a.push(c), e && e(b);
            var f = a._readableState;
            f.reading = !1, (f.needReadable || f.length < f.highWaterMark) && a._read(f.highWaterMark)
        }

        function f(a) {
            if (!(this instanceof f)) return new f(a);
            h.call(this, a), this._transformState = new d(this);
            var b = this;
            this._readableState.needReadable = !0, this._readableState.sync = !1, a && ("function" == typeof a.transform && (this._transform = a.transform), "function" == typeof a.flush && (this._flush = a.flush)), this.once("prefinish", function() {
                "function" == typeof this._flush ? this._flush(function(a) {
                    g(b, a)
                }) : g(b)
            })
        }

        function g(a, b) {
            if (b) return a.emit("error", b);
            var c = a._writableState,
                d = a._transformState;
            if (c.length) throw new Error("calling transform done when ws.length != 0");
            if (d.transforming) throw new Error("calling transform done when still transforming");
            return a.push(null)
        }
        b.exports = f;
        var h = a("./_stream_duplex"),
            i = a("core-util-is");
        i.inherits = a("inherits"), i.inherits(f, h), f.prototype.push = function(a, b) {
            return this._transformState.needTransform = !1, h.prototype.push.call(this, a, b)
        }, f.prototype._transform = function(a, b, c) {
            throw new Error("not implemented")
        }, f.prototype._write = function(a, b, c) {
            var d = this._transformState;
            if (d.writecb = c, d.writechunk = a, d.writeencoding = b, !d.transforming) {
                var e = this._readableState;
                (d.needTransform || e.needReadable || e.length < e.highWaterMark) && this._read(e.highWaterMark)
            }
        }, f.prototype._read = function(a) {
            var b = this._transformState;
            null !== b.writechunk && b.writecb && !b.transforming ? (b.transforming = !0, this._transform(b.writechunk, b.writeencoding, b.afterTransform)) : b.needTransform = !0
        }
    }, {
        "./_stream_duplex": 203,
        "core-util-is": 54,
        inherits: 101
    }],
    207: [function(a, b, c) {
        "use strict";

        function d() {}

        function e(a, b, c) {
            this.chunk = a, this.encoding = b, this.callback = c, this.next = null
        }

        function f(b, c) {
            B = B || a("./_stream_duplex"), b = b || {}, this.objectMode = !!b.objectMode, c instanceof B && (this.objectMode = this.objectMode || !!b.writableObjectMode);
            var d = b.highWaterMark,
                e = this.objectMode ? 16 : 16384;
            this.highWaterMark = d || 0 === d ? d : e, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
            var f = b.decodeStrings === !1;
            this.decodeStrings = !f, this.defaultEncoding = b.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(a) {
                o(c, a)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1
        }

        function g(b) {
            return B = B || a("./_stream_duplex"), this instanceof g || this instanceof B ? (this._writableState = new f(b, this), this.writable = !0, b && ("function" == typeof b.write && (this._write = b.write), "function" == typeof b.writev && (this._writev = b.writev)), void z.call(this)) : new g(b)
        }

        function h(a, b) {
            var c = new Error("write after end");
            a.emit("error", c), w(b, c)
        }

        function i(a, b, c, d) {
            var e = !0;
            if (!x.isBuffer(c) && "string" != typeof c && null !== c && void 0 !== c && !b.objectMode) {
                var f = new TypeError("Invalid non-string/buffer chunk");
                a.emit("error", f), w(d, f), e = !1
            }
            return e
        }

        function j(a, b, c) {
            return a.objectMode || a.decodeStrings === !1 || "string" != typeof b || (b = new x(b, c)), b
        }

        function k(a, b, c, d, f) {
            c = j(b, c, d), x.isBuffer(c) && (d = "buffer");
            var g = b.objectMode ? 1 : c.length;
            b.length += g;
            var h = b.length < b.highWaterMark;
            if (h || (b.needDrain = !0), b.writing || b.corked) {
                var i = b.lastBufferedRequest;
                b.lastBufferedRequest = new e(c, d, f), i ? i.next = b.lastBufferedRequest : b.bufferedRequest = b.lastBufferedRequest
            } else l(a, b, !1, g, c, d, f);
            return h
        }

        function l(a, b, c, d, e, f, g) {
            b.writelen = d, b.writecb = g, b.writing = !0, b.sync = !0, c ? a._writev(e, b.onwrite) : a._write(e, f, b.onwrite), b.sync = !1
        }

        function m(a, b, c, d, e) {
            --b.pendingcb, c ? w(e, d) : e(d), a._writableState.errorEmitted = !0, a.emit("error", d)
        }

        function n(a) {
            a.writing = !1, a.writecb = null, a.length -= a.writelen, a.writelen = 0
        }

        function o(a, b) {
            var c = a._writableState,
                d = c.sync,
                e = c.writecb;
            if (n(c), b) m(a, c, d, b, e);
            else {
                var f = s(c);
                f || c.corked || c.bufferProcessing || !c.bufferedRequest || r(a, c), d ? w(p, a, c, f, e) : p(a, c, f, e)
            }
        }

        function p(a, b, c, d) {
            c || q(a, b), b.pendingcb--, d(), u(a, b)
        }

        function q(a, b) {
            0 === b.length && b.needDrain && (b.needDrain = !1, a.emit("drain"))
        }

        function r(a, b) {
            b.bufferProcessing = !0;
            var c = b.bufferedRequest;
            if (a._writev && c && c.next) {
                for (var d = [], e = []; c;) e.push(c.callback), d.push(c), c = c.next;
                b.pendingcb++, b.lastBufferedRequest = null, l(a, b, !0, b.length, d, "", function(a) {
                    for (var c = 0; c < e.length; c++) b.pendingcb--, e[c](a)
                })
            } else {
                for (; c;) {
                    var f = c.chunk,
                        g = c.encoding,
                        h = c.callback,
                        i = b.objectMode ? 1 : f.length;
                    if (l(a, b, !1, i, f, g, h), c = c.next, b.writing) break
                }
                null === c && (b.lastBufferedRequest = null)
            }
            b.bufferedRequest = c, b.bufferProcessing = !1
        }

        function s(a) {
            return a.ending && 0 === a.length && null === a.bufferedRequest && !a.finished && !a.writing
        }

        function t(a, b) {
            b.prefinished || (b.prefinished = !0, a.emit("prefinish"))
        }

        function u(a, b) {
            var c = s(b);
            return c && (0 === b.pendingcb ? (t(a, b), b.finished = !0, a.emit("finish")) : t(a, b)), c
        }

        function v(a, b, c) {
            b.ending = !0, u(a, b), c && (b.finished ? w(c) : a.once("finish", c)), b.ended = !0
        }
        b.exports = g;
        var w = a("process-nextick-args"),
            x = a("buffer").Buffer;
        g.WritableState = f;
        var y = a("core-util-is");
        y.inherits = a("inherits");
        var z, A = {
            deprecate: a("util-deprecate")
        };
        ! function() {
            try {
                z = a("stream")
            } catch (b) {} finally {
                z || (z = a("events").EventEmitter)
            }
        }();
        var x = a("buffer").Buffer;
        y.inherits(g, z);
        var B;
        f.prototype.getBuffer = function() {
                for (var a = this.bufferedRequest, b = []; a;) b.push(a), a = a.next;
                return b
            },
            function() {
                try {
                    Object.defineProperty(f.prototype, "buffer", {
                        get: A.deprecate(function() {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                    })
                } catch (a) {}
            }();
        var B;
        g.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe. Not readable."))
        }, g.prototype.write = function(a, b, c) {
            var e = this._writableState,
                f = !1;
            return "function" == typeof b && (c = b, b = null), x.isBuffer(a) ? b = "buffer" : b || (b = e.defaultEncoding), "function" != typeof c && (c = d), e.ended ? h(this, c) : i(this, e, a, c) && (e.pendingcb++, f = k(this, e, a, b, c)), f
        }, g.prototype.cork = function() {
            var a = this._writableState;
            a.corked++
        }, g.prototype.uncork = function() {
            var a = this._writableState;
            a.corked && (a.corked--, a.writing || a.corked || a.finished || a.bufferProcessing || !a.bufferedRequest || r(this, a))
        }, g.prototype.setDefaultEncoding = function(a) {
            if ("string" == typeof a && (a = a.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((a + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + a);
            this._writableState.defaultEncoding = a
        }, g.prototype._write = function(a, b, c) {
            c(new Error("not implemented"))
        }, g.prototype._writev = null, g.prototype.end = function(a, b, c) {
            var d = this._writableState;
            "function" == typeof a ? (c = a, a = null, b = null) : "function" == typeof b && (c = b, b = null), null !== a && void 0 !== a && this.write(a, b), d.corked && (d.corked = 1, this.uncork()), d.ending || d.finished || v(this, d, c)
        }
    }, {
        "./_stream_duplex": 203,
        buffer: 51,
        "core-util-is": 54,
        events: 88,
        inherits: 101,
        "process-nextick-args": 190,
        "util-deprecate": 233
    }],
    208: [function(a, b, c) {
        b.exports = a("./lib/_stream_passthrough.js")
    }, {
        "./lib/_stream_passthrough.js": 204
    }],
    209: [function(a, b, c) {
        var d = function() {
            try {
                return a("stream")
            } catch (b) {}
        }();
        c = b.exports = a("./lib/_stream_readable.js"), c.Stream = d || c, c.Readable = c, c.Writable = a("./lib/_stream_writable.js"), c.Duplex = a("./lib/_stream_duplex.js"), c.Transform = a("./lib/_stream_transform.js"), c.PassThrough = a("./lib/_stream_passthrough.js")
    }, {
        "./lib/_stream_duplex.js": 203,
        "./lib/_stream_passthrough.js": 204,
        "./lib/_stream_readable.js": 205,
        "./lib/_stream_transform.js": 206,
        "./lib/_stream_writable.js": 207
    }],
    210: [function(a, b, c) {
        b.exports = a("./lib/_stream_transform.js")
    }, {
        "./lib/_stream_transform.js": 206
    }],
    211: [function(a, b, c) {
        b.exports = a("./lib/_stream_writable.js")
    }, {
        "./lib/_stream_writable.js": 207
    }],
    212: [function(a, b, c) {
        "use strict";
        b.exports = function(a, b, c) {
            if (("number" != typeof a || "number" != typeof b || "number" != typeof c) && (a > 255 || b > 255 || c > 255)) throw new TypeError("Expected three numbers below 256");
            return (c | b << 8 | a << 16 | 1 << 24).toString(16).slice(1)
        }
    }, {}],
    213: [function(a, b, c) {
        (function(a) {
            function c(a) {
                for (var b = [], c = 0, d = 0; c < a.length; c++, d += 8) b[d >>> 5] |= a[c] << 24 - d % 32;
                return b
            }

            function d(a) {
                for (var b = [], c = 0; c < 32 * a.length; c += 8) b.push(a[c >>> 5] >>> 24 - c % 32 & 255);
                return b
            }

            function e(a, b, c) {
                for (var d = 0; 16 > d; d++) {
                    var e = c + d,
                        l = b[e];
                    b[e] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                }
                var s, t, u, v, w, x, y, z, A, B;
                x = s = a[0], y = t = a[1], z = u = a[2], A = v = a[3], B = w = a[4];
                var C;
                for (d = 0; 80 > d; d += 1) C = s + b[c + m[d]] | 0, C += 16 > d ? f(t, u, v) + q[0] : 32 > d ? g(t, u, v) + q[1] : 48 > d ? h(t, u, v) + q[2] : 64 > d ? i(t, u, v) + q[3] : j(t, u, v) + q[4], C = 0 | C, C = k(C, o[d]), C = C + w | 0, s = w, w = v, v = k(u, 10), u = t, t = C, C = x + b[c + n[d]] | 0, C += 16 > d ? j(y, z, A) + r[0] : 32 > d ? i(y, z, A) + r[1] : 48 > d ? h(y, z, A) + r[2] : 64 > d ? g(y, z, A) + r[3] : f(y, z, A) + r[4], C = 0 | C, C = k(C, p[d]), C = C + B | 0, x = B, B = A, A = k(z, 10), z = y, y = C;
                C = a[1] + u + A | 0, a[1] = a[2] + v + B | 0, a[2] = a[3] + w + x | 0, a[3] = a[4] + s + y | 0, a[4] = a[0] + t + z | 0, a[0] = C
            }

            function f(a, b, c) {
                return a ^ b ^ c
            }

            function g(a, b, c) {
                return a & b | ~a & c
            }

            function h(a, b, c) {
                return (a | ~b) ^ c
            }

            function i(a, b, c) {
                return a & c | b & ~c
            }

            function j(a, b, c) {
                return a ^ (b | ~c)
            }

            function k(a, b) {
                return a << b | a >>> 32 - b
            }

            function l(b) {
                var f = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                "string" == typeof b && (b = new a(b, "utf8"));
                var g = c(b),
                    h = 8 * b.length,
                    i = 8 * b.length;
                g[h >>> 5] |= 128 << 24 - h % 32, g[(h + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                for (var j = 0; j < g.length; j += 16) e(f, g, j);
                for (j = 0; 5 > j; j++) {
                    var k = f[j];
                    f[j] = 16711935 & (k << 8 | k >>> 24) | 4278255360 & (k << 24 | k >>> 8)
                }
                var l = d(f);
                return new a(l)
            }
            var m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                n = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                o = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                q = [0, 1518500249, 1859775393, 2400959708, 2840853838],
                r = [1352829926, 1548603684, 1836072691, 2053994217, 0];
            b.exports = l
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    214: [function(a, b, c) {
        var d = a("./lib/alea"),
            e = a("./lib/xor128"),
            f = a("./lib/xorwow"),
            g = a("./lib/xorshift7"),
            h = a("./lib/xor4096"),
            i = a("./lib/tychei"),
            j = a("./seedrandom");
        j.alea = d, j.xor128 = e, j.xorwow = f, j.xorshift7 = g, j.xor4096 = h, j.tychei = i, b.exports = j
    }, {
        "./lib/alea": 215,
        "./lib/tychei": 216,
        "./lib/xor128": 217,
        "./lib/xor4096": 218,
        "./lib/xorshift7": 219,
        "./lib/xorwow": 220,
        "./seedrandom": 221
    }],
    215: [function(a, b, c) {
        ! function(a, b, c) {
            function d(a) {
                var b = this,
                    c = g();
                b.next = function() {
                    var a = 2091639 * b.s0 + 2.3283064365386963e-10 * b.c;
                    return b.s0 = b.s1, b.s1 = b.s2, b.s2 = a - (b.c = 0 | a)
                }, b.c = 1, b.s0 = c(" "), b.s1 = c(" "), b.s2 = c(" "), b.s0 -= c(a), b.s0 < 0 && (b.s0 += 1), b.s1 -= c(a), b.s1 < 0 && (b.s1 += 1), b.s2 -= c(a), b.s2 < 0 && (b.s2 += 1), c = null
            }

            function e(a, b) {
                return b.c = a.c, b.s0 = a.s0, b.s1 = a.s1, b.s2 = a.s2, b
            }

            function f(a, b) {
                var c = new d(a),
                    f = b && b.state,
                    g = c.next;
                return g.int32 = function() {
                    return 4294967296 * c.next() | 0
                }, g["double"] = function() {
                    return g() + 1.1102230246251565e-16 * (2097152 * g() | 0)
                }, g.quick = g, f && ("object" == typeof f && e(f, c), g.state = function() {
                    return e(c, {})
                }), g
            }

            function g() {
                var a = 4022871197,
                    b = function(b) {
                        b = b.toString();
                        for (var c = 0; c < b.length; c++) {
                            a += b.charCodeAt(c);
                            var d = .02519603282416938 * a;
                            a = d >>> 0, d -= a, d *= a, a = d >>> 0, d -= a, a += 4294967296 * d
                        }
                        return 2.3283064365386963e-10 * (a >>> 0)
                    };
                return b
            }
            b && b.exports ? b.exports = f : c && c.amd ? c(function() {
                return f
            }) : this.alea = f
        }(this, "object" == typeof b && b, "function" == typeof define && define)
    }, {}],
    216: [function(a, b, c) {
        ! function(a, b, c) {
            function d(a) {
                var b = this,
                    c = "";
                b.next = function() {
                    var a = b.b,
                        c = b.c,
                        d = b.d,
                        e = b.a;
                    return a = a << 25 ^ a >>> 7 ^ c, c = c - d | 0, d = d << 24 ^ d >>> 8 ^ e, e = e - a | 0, b.b = a = a << 20 ^ a >>> 12 ^ c, b.c = c = c - d | 0, b.d = d << 16 ^ c >>> 16 ^ e, b.a = e - a | 0
                }, b.a = 0, b.b = 0, b.c = -1640531527, b.d = 1367130551, a === Math.floor(a) ? (b.a = a / 4294967296 | 0, b.b = 0 | a) : c += a;
                for (var d = 0; d < c.length + 20; d++) b.b ^= 0 | c.charCodeAt(d), b.next()
            }

            function e(a, b) {
                return b.a = a.a, b.b = a.b, b.c = a.c, b.d = a.d, b
            }

            function f(a, b) {
                var c = new d(a),
                    f = b && b.state,
                    g = function() {
                        return (c.next() >>> 0) / 4294967296
                    };
                return g["double"] = function() {
                    do var a = c.next() >>> 11,
                        b = (c.next() >>> 0) / 4294967296,
                        d = (a + b) / (1 << 21); while (0 === d);
                    return d
                }, g.int32 = c.next, g.quick = g, f && ("object" == typeof f && e(f, c), g.state = function() {
                    return e(c, {})
                }), g
            }
            b && b.exports ? b.exports = f : c && c.amd ? c(function() {
                return f
            }) : this.tychei = f
        }(this, "object" == typeof b && b, "function" == typeof define && define)
    }, {}],
    217: [function(a, b, c) {
        ! function(a, b, c) {
            function d(a) {
                var b = this,
                    c = "";
                b.x = 0, b.y = 0, b.z = 0, b.w = 0, b.next = function() {
                    var a = b.x ^ b.x << 11;
                    return b.x = b.y, b.y = b.z, b.z = b.w, b.w ^= b.w >>> 19 ^ a ^ a >>> 8
                }, a === (0 | a) ? b.x = a : c += a;
                for (var d = 0; d < c.length + 64; d++) b.x ^= 0 | c.charCodeAt(d), b.next()
            }

            function e(a, b) {
                return b.x = a.x, b.y = a.y, b.z = a.z, b.w = a.w, b
            }

            function f(a, b) {
                var c = new d(a),
                    f = b && b.state,
                    g = function() {
                        return (c.next() >>> 0) / 4294967296
                    };
                return g["double"] = function() {
                    do var a = c.next() >>> 11,
                        b = (c.next() >>> 0) / 4294967296,
                        d = (a + b) / (1 << 21); while (0 === d);
                    return d
                }, g.int32 = c.next, g.quick = g, f && ("object" == typeof f && e(f, c), g.state = function() {
                    return e(c, {})
                }), g
            }
            b && b.exports ? b.exports = f : c && c.amd ? c(function() {
                return f
            }) : this.xor128 = f
        }(this, "object" == typeof b && b, "function" == typeof define && define)
    }, {}],
    218: [function(a, b, c) {
        ! function(a, b, c) {
            function d(a) {
                function b(a, b) {
                    var c, d, e, f, g, h = [],
                        i = 128;
                    for (b === (0 | b) ? (d = b, b = null) : (b += "\x00", d = 0, i = Math.max(i, b.length)), e = 0, f = -32; i > f; ++f) b && (d ^= b.charCodeAt((f + 32) % b.length)), 0 === f && (g = d), d ^= d << 10, d ^= d >>> 15, d ^= d << 4, d ^= d >>> 13, f >= 0 && (g = g + 1640531527 | 0, c = h[127 & f] ^= d + g, e = 0 == c ? e + 1 : 0);
                    for (e >= 128 && (h[127 & (b && b.length || 0)] = -1), e = 127, f = 512; f > 0; --f) d = h[e + 34 & 127], c = h[e = e + 1 & 127], d ^= d << 13, c ^= c << 17, d ^= d >>> 15, c ^= c >>> 12, h[e] = d ^ c;
                    a.w = g, a.X = h, a.i = e
                }
                var c = this;
                c.next = function() {
                    var a, b, d = c.w,
                        e = c.X,
                        f = c.i;
                    return c.w = d = d + 1640531527 | 0, b = e[f + 34 & 127], a = e[f = f + 1 & 127], b ^= b << 13, a ^= a << 17, b ^= b >>> 15, a ^= a >>> 12, b = e[f] = b ^ a, c.i = f, b + (d ^ d >>> 16) | 0
                }, b(c, a)
            }

            function e(a, b) {
                return b.i = a.i, b.w = a.w, b.X = a.X.slice(), b
            }

            function f(a, b) {
                null == a && (a = +new Date);
                var c = new d(a),
                    f = b && b.state,
                    g = function() {
                        return (c.next() >>> 0) / 4294967296
                    };
                return g["double"] = function() {
                    do var a = c.next() >>> 11,
                        b = (c.next() >>> 0) / 4294967296,
                        d = (a + b) / (1 << 21); while (0 === d);
                    return d
                }, g.int32 = c.next, g.quick = g, f && (f.X && e(f, c), g.state = function() {
                    return e(c, {})
                }), g
            }
            b && b.exports ? b.exports = f : c && c.amd ? c(function() {
                return f
            }) : this.xor4096 = f
        }(this, "object" == typeof b && b, "function" == typeof define && define)
    }, {}],
    219: [function(a, b, c) {
        ! function(a, b, c) {
            function d(a) {
                function b(a, b) {
                    var c, d, e = [];
                    if (b === (0 | b)) d = e[0] = b;
                    else
                        for (b = "" + b, c = 0; c < b.length; ++c) e[7 & c] = e[7 & c] << 15 ^ b.charCodeAt(c) + e[c + 1 & 7] << 13;
                    for (; e.length < 8;) e.push(0);
                    for (c = 0; 8 > c && 0 === e[c]; ++c);
                    for (d = 8 == c ? e[7] = -1 : e[c], a.x = e, a.i = 0, c = 256; c > 0; --c) a.next()
                }
                var c = this;
                c.next = function() {
                    var a, b, d = c.x,
                        e = c.i;
                    return a = d[e], a ^= a >>> 7, b = a ^ a << 24, a = d[e + 1 & 7], b ^= a ^ a >>> 10, a = d[e + 3 & 7], b ^= a ^ a >>> 3, a = d[e + 4 & 7], b ^= a ^ a << 7, a = d[e + 7 & 7], a ^= a << 13, b ^= a ^ a << 9, d[e] = b, c.i = e + 1 & 7, b
                }, b(c, a)
            }

            function e(a, b) {
                return b.x = a.x.slice(), b.i = a.i, b
            }

            function f(a, b) {
                null == a && (a = +new Date);
                var c = new d(a),
                    f = b && b.state,
                    g = function() {
                        return (c.next() >>> 0) / 4294967296
                    };
                return g["double"] = function() {
                    do var a = c.next() >>> 11,
                        b = (c.next() >>> 0) / 4294967296,
                        d = (a + b) / (1 << 21); while (0 === d);
                    return d
                }, g.int32 = c.next, g.quick = g, f && (f.x && e(f, c), g.state = function() {
                    return e(c, {})
                }), g
            }
            b && b.exports ? b.exports = f : c && c.amd ? c(function() {
                return f
            }) : this.xorshift7 = f
        }(this, "object" == typeof b && b, "function" == typeof define && define)
    }, {}],
    220: [function(a, b, c) {
        ! function(a, b, c) {
            function d(a) {
                var b = this,
                    c = "";
                b.next = function() {
                    var a = b.x ^ b.x >>> 2;
                    return b.x = b.y, b.y = b.z, b.z = b.w, b.w = b.v, (b.d = b.d + 362437 | 0) + (b.v = b.v ^ b.v << 4 ^ (a ^ a << 1)) | 0
                }, b.x = 0, b.y = 0, b.z = 0, b.w = 0, b.v = 0, a === (0 | a) ? b.x = a : c += a;
                for (var d = 0; d < c.length + 64; d++) b.x ^= 0 | c.charCodeAt(d), d == c.length && (b.d = b.x << 10 ^ b.x >>> 4), b.next()
            }

            function e(a, b) {
                return b.x = a.x, b.y = a.y, b.z = a.z, b.w = a.w, b.v = a.v, b.d = a.d, b
            }

            function f(a, b) {
                var c = new d(a),
                    f = b && b.state,
                    g = function() {
                        return (c.next() >>> 0) / 4294967296
                    };
                return g["double"] = function() {
                    do var a = c.next() >>> 11,
                        b = (c.next() >>> 0) / 4294967296,
                        d = (a + b) / (1 << 21); while (0 === d);
                    return d
                }, g.int32 = c.next, g.quick = g, f && ("object" == typeof f && e(f, c), g.state = function() {
                    return e(c, {})
                }), g
            }
            b && b.exports ? b.exports = f : c && c.amd ? c(function() {
                return f
            }) : this.xorwow = f
        }(this, "object" == typeof b && b, "function" == typeof define && define)
    }, {}],
    221: [function(a, b, c) {
        ! function(c, d) {
            function e(a, b, e) {
                var l = [];
                b = 1 == b ? {
                    entropy: !0
                } : b || {};
                var m = i(h(b.entropy ? [a, k(c)] : null == a ? j() : a, 3), l),
                    p = new f(l),
                    u = function() {
                        for (var a = p.g(o), b = r, c = 0; s > a;) a = (a + c) * n, b *= n, c = p.g(1);
                        for (; a >= t;) a /= 2, b /= 2, c >>>= 1;
                        return (a + c) / b
                    };
                return u.int32 = function() {
                    return 0 | p.g(4)
                }, u.quick = function() {
                    return p.g(4) / 4294967296
                }, u["double"] = u, i(k(p.S), c), (b.pass || e || function(a, b, c, e) {
                    return e && (e.S && g(e, p), a.state = function() {
                        return g(p, {})
                    }), c ? (d[q] = a, b) : a
                })(u, m, "global" in b ? b.global : this == d, b.state)
            }

            function f(a) {
                var b, c = a.length,
                    d = this,
                    e = 0,
                    f = d.i = d.j = 0,
                    g = d.S = [];
                for (c || (a = [c++]); n > e;) g[e] = e++;
                for (e = 0; n > e; e++) g[e] = g[f = u & f + a[e % c] + (b = g[e])], g[f] = b;
                (d.g = function(a) {
                    for (var b, c = 0, e = d.i, f = d.j, g = d.S; a--;) b = g[e = u & e + 1], c = c * n + g[u & (g[e] = g[f = u & f + b]) + (g[f] = b)];
                    return d.i = e, d.j = f, c
                })(n)
            }

            function g(a, b) {
                return b.i = a.i, b.j = a.j, b.S = a.S.slice(), b
            }

            function h(a, b) {
                var c, d = [],
                    e = typeof a;
                if (b && "object" == e)
                    for (c in a) try {
                        d.push(h(a[c], b - 1))
                    } catch (f) {}
                return d.length ? d : "string" == e ? a : a + "\x00"
            }

            function i(a, b) {
                for (var c, d = a + "", e = 0; e < d.length;) b[u & e] = u & (c ^= 19 * b[u & e]) + d.charCodeAt(e++);
                return k(b)
            }

            function j() {
                try {
                    if (l) return k(l.randomBytes(n));
                    var a = new Uint8Array(n);
                    return (m.crypto || m.msCrypto).getRandomValues(a), k(a)
                } catch (b) {
                    var d = m.navigator,
                        e = d && d.plugins;
                    return [+new Date, m, e, m.screen, k(c)]
                }
            }

            function k(a) {
                return String.fromCharCode.apply(0, a)
            }
            var l, m = this,
                n = 256,
                o = 6,
                p = 52,
                q = "random",
                r = d.pow(n, o),
                s = d.pow(2, p),
                t = 2 * s,
                u = n - 1;
            if (d["seed" + q] = e, i(d.random(), c), "object" == typeof b && b.exports) {
                b.exports = e;
                try {
                    l = a("crypto")
                } catch (v) {}
            } else "function" == typeof define && define.amd && define(function() {
                return e
            })
        }([], Math)
    }, {
        crypto: 60
    }],
    222: [function(a, b, c) {
        (function(a) {
            function c(b, c) {
                this._block = new a(b), this._finalSize = c, this._blockSize = b, this._len = 0, this._s = 0
            }
            c.prototype.update = function(b, c) {
                "string" == typeof b && (c = c || "utf8", b = new a(b, c));
                for (var d = this._len += b.length, e = this._s || 0, f = 0, g = this._block; d > e;) {
                    for (var h = Math.min(b.length, f + this._blockSize - e % this._blockSize), i = h - f, j = 0; i > j; j++) g[e % this._blockSize + j] = b[j + f];
                    e += i, f += i, e % this._blockSize === 0 && this._update(g)
                }
                return this._s = e, this
            }, c.prototype.digest = function(a) {
                var b = 8 * this._len;
                this._block[this._len % this._blockSize] = 128, this._block.fill(0, this._len % this._blockSize + 1), b % (8 * this._blockSize) >= 8 * this._finalSize && (this._update(this._block), this._block.fill(0)), this._block.writeInt32BE(b, this._blockSize - 4);
                var c = this._update(this._block) || this._hash();
                return a ? c.toString(a) : c
            }, c.prototype._update = function() {
                throw new Error("_update must be implemented by subclass")
            }, b.exports = c
        }).call(this, a("buffer").Buffer)
    }, {
        buffer: 51
    }],
    223: [function(a, b, c) {
        var c = b.exports = function(a) {
            a = a.toLowerCase();
            var b = c[a];
            if (!b) throw new Error(a + " is not supported (we accept pull requests)");
            return new b
        };
        c.sha = a("./sha"), c.sha1 = a("./sha1"), c.sha224 = a("./sha224"), c.sha256 = a("./sha256"), c.sha384 = a("./sha384"), c.sha512 = a("./sha512")
    }, {
        "./sha": 224,
        "./sha1": 225,
        "./sha224": 226,
        "./sha256": 227,
        "./sha384": 228,
        "./sha512": 229
    }],
    224: [function(a, b, c) {
        (function(c) {
            function d() {
                this.init(), this._w = h, g.call(this, 64, 56)
            }

            function e(a, b) {
                return a << b | a >>> 32 - b
            }
            var f = a("inherits"),
                g = a("./hash"),
                h = new Array(80);
            f(d, g), d.prototype.init = function() {
                return this._a = 1732584193, this._b = -271733879, this._c = -1732584194, this._d = 271733878, this._e = -1009589776, this
            }, d.prototype._update = function(a) {
                function b() {
                    return f[l - 3] ^ f[l - 8] ^ f[l - 14] ^ f[l - 16]
                }

                function c(a, b) {
                    f[l] = a;
                    var c = e(g, 5) + b + k + a + d;
                    k = j, j = i, i = e(h, 30), h = g, g = c, l++
                }
                var d, f = this._w,
                    g = this._a,
                    h = this._b,
                    i = this._c,
                    j = this._d,
                    k = this._e,
                    l = 0;
                for (d = 1518500249; 16 > l;) c(a.readInt32BE(4 * l), h & i | ~h & j);
                for (; 20 > l;) c(b(), h & i | ~h & j);
                for (d = 1859775393; 40 > l;) c(b(), h ^ i ^ j);
                for (d = -1894007588; 60 > l;) c(b(), h & i | h & j | i & j);
                for (d = -899497514; 80 > l;) c(b(), h ^ i ^ j);
                this._a = g + this._a | 0, this._b = h + this._b | 0, this._c = i + this._c | 0, this._d = j + this._d | 0, this._e = k + this._e | 0
            }, d.prototype._hash = function() {
                var a = new c(20);
                return a.writeInt32BE(0 | this._a, 0), a.writeInt32BE(0 | this._b, 4), a.writeInt32BE(0 | this._c, 8), a.writeInt32BE(0 | this._d, 12), a.writeInt32BE(0 | this._e, 16), a
            }, b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "./hash": 222,
        buffer: 51,
        inherits: 101
    }],
    225: [function(a, b, c) {
        (function(c) {
            function d() {
                this.init(), this._w = h, g.call(this, 64, 56)
            }

            function e(a, b) {
                return a << b | a >>> 32 - b
            }
            var f = a("inherits"),
                g = a("./hash"),
                h = new Array(80);
            f(d, g), d.prototype.init = function() {
                return this._a = 1732584193, this._b = -271733879, this._c = -1732584194, this._d = 271733878, this._e = -1009589776, this
            }, d.prototype._update = function(a) {
                function b() {
                    return e(f[l - 3] ^ f[l - 8] ^ f[l - 14] ^ f[l - 16], 1)
                }

                function c(a, b) {
                    f[l] = a;
                    var c = e(g, 5) + b + k + a + d;
                    k = j, j = i, i = e(h, 30), h = g, g = c, l++
                }
                var d, f = this._w,
                    g = this._a,
                    h = this._b,
                    i = this._c,
                    j = this._d,
                    k = this._e,
                    l = 0;
                for (d = 1518500249; 16 > l;) c(a.readInt32BE(4 * l), h & i | ~h & j);
                for (; 20 > l;) c(b(), h & i | ~h & j);
                for (d = 1859775393; 40 > l;) c(b(), h ^ i ^ j);
                for (d = -1894007588; 60 > l;) c(b(), h & i | h & j | i & j);
                for (d = -899497514; 80 > l;) c(b(), h ^ i ^ j);
                this._a = g + this._a | 0, this._b = h + this._b | 0, this._c = i + this._c | 0, this._d = j + this._d | 0, this._e = k + this._e | 0
            }, d.prototype._hash = function() {
                var a = new c(20);
                return a.writeInt32BE(0 | this._a, 0), a.writeInt32BE(0 | this._b, 4), a.writeInt32BE(0 | this._c, 8), a.writeInt32BE(0 | this._d, 12), a.writeInt32BE(0 | this._e, 16), a
            }, b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "./hash": 222,
        buffer: 51,
        inherits: 101
    }],
    226: [function(a, b, c) {
        (function(c) {
            function d() {
                this.init(), this._w = h, g.call(this, 64, 56)
            }
            var e = a("inherits"),
                f = a("./sha256"),
                g = a("./hash"),
                h = new Array(64);
            e(d, f), d.prototype.init = function() {
                return this._a = -1056596264, this._b = 914150663, this._c = 812702999, this._d = -150054599, this._e = -4191439, this._f = 1750603025, this._g = 1694076839, this._h = -1090891868, this
            }, d.prototype._hash = function() {
                var a = new c(28);
                return a.writeInt32BE(this._a, 0), a.writeInt32BE(this._b, 4), a.writeInt32BE(this._c, 8), a.writeInt32BE(this._d, 12), a.writeInt32BE(this._e, 16), a.writeInt32BE(this._f, 20), a.writeInt32BE(this._g, 24), a
            }, b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "./hash": 222,
        "./sha256": 227,
        buffer: 51,
        inherits: 101
    }],
    227: [function(a, b, c) {
        (function(c) {
            function d() {
                this.init(), this._w = n, l.call(this, 64, 56)
            }

            function e(a, b, c) {
                return c ^ a & (b ^ c)
            }

            function f(a, b, c) {
                return a & b | c & (a | b)
            }

            function g(a) {
                return (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)
            }

            function h(a) {
                return (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)
            }

            function i(a) {
                return (a >>> 7 | a << 25) ^ (a >>> 18 | a << 14) ^ a >>> 3
            }

            function j(a) {
                return (a >>> 17 | a << 15) ^ (a >>> 19 | a << 13) ^ a >>> 10
            }
            var k = a("inherits"),
                l = a("./hash"),
                m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                n = new Array(64);
            k(d, l), d.prototype.init = function() {
                return this._a = 1779033703, this._b = -1150833019, this._c = 1013904242, this._d = -1521486534, this._e = 1359893119, this._f = -1694144372, this._g = 528734635, this._h = 1541459225, this
            }, d.prototype._update = function(a) {
                function b() {
                    return j(d[t - 2]) + d[t - 7] + i(d[t - 15]) + d[t - 16]
                }

                function c(a) {
                    d[t] = a;
                    var b = s + h(p) + e(p, q, r) + m[t] + a,
                        c = g(k) + f(k, l, n);
                    s = r, r = q, q = p, p = o + b, o = n, n = l, l = k, k = b + c, t++
                }
                for (var d = this._w, k = 0 | this._a, l = 0 | this._b, n = 0 | this._c, o = 0 | this._d, p = 0 | this._e, q = 0 | this._f, r = 0 | this._g, s = 0 | this._h, t = 0; 16 > t;) c(a.readInt32BE(4 * t));
                for (; 64 > t;) c(b());
                this._a = k + this._a | 0, this._b = l + this._b | 0, this._c = n + this._c | 0, this._d = o + this._d | 0, this._e = p + this._e | 0, this._f = q + this._f | 0, this._g = r + this._g | 0, this._h = s + this._h | 0
            }, d.prototype._hash = function() {
                var a = new c(32);
                return a.writeInt32BE(this._a, 0), a.writeInt32BE(this._b, 4), a.writeInt32BE(this._c, 8), a.writeInt32BE(this._d, 12), a.writeInt32BE(this._e, 16), a.writeInt32BE(this._f, 20), a.writeInt32BE(this._g, 24), a.writeInt32BE(this._h, 28), a
            }, b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "./hash": 222,
        buffer: 51,
        inherits: 101
    }],
    228: [function(a, b, c) {
        (function(c) {
            function d() {
                this.init(), this._w = h, g.call(this, 128, 112)
            }
            var e = a("inherits"),
                f = a("./sha512"),
                g = a("./hash"),
                h = new Array(160);
            e(d, f), d.prototype.init = function() {
                return this._a = -876896931, this._b = 1654270250, this._c = -1856437926, this._d = 355462360, this._e = 1731405415, this._f = -1900787065, this._g = -619958771, this._h = 1203062813, this._al = -1056596264, this._bl = 914150663, this._cl = 812702999, this._dl = -150054599, this._el = -4191439, this._fl = 1750603025, this._gl = 1694076839, this._hl = -1090891868, this
            }, d.prototype._hash = function() {
                function a(a, c, d) {
                    b.writeInt32BE(a, d), b.writeInt32BE(c, d + 4)
                }
                var b = new c(48);
                return a(this._a, this._al, 0), a(this._b, this._bl, 8), a(this._c, this._cl, 16), a(this._d, this._dl, 24), a(this._e, this._el, 32), a(this._f, this._fl, 40), b
            }, b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "./hash": 222,
        "./sha512": 229,
        buffer: 51,
        inherits: 101
    }],
    229: [function(a, b, c) {
        (function(c) {
            function d() {
                this.init(), this._w = p, n.call(this, 128, 112)
            }

            function e(a, b, c) {
                return c ^ a & (b ^ c)
            }

            function f(a, b, c) {
                return a & b | c & (a | b)
            }

            function g(a, b) {
                return (a >>> 28 | b << 4) ^ (b >>> 2 | a << 30) ^ (b >>> 7 | a << 25)
            }

            function h(a, b) {
                return (a >>> 14 | b << 18) ^ (a >>> 18 | b << 14) ^ (b >>> 9 | a << 23)
            }

            function i(a, b) {
                return (a >>> 1 | b << 31) ^ (a >>> 8 | b << 24) ^ a >>> 7
            }

            function j(a, b) {
                return (a >>> 1 | b << 31) ^ (a >>> 8 | b << 24) ^ (a >>> 7 | b << 25)
            }

            function k(a, b) {
                return (a >>> 19 | b << 13) ^ (b >>> 29 | a << 3) ^ a >>> 6
            }

            function l(a, b) {
                return (a >>> 19 | b << 13) ^ (b >>> 29 | a << 3) ^ (a >>> 6 | b << 26)
            }
            var m = a("inherits"),
                n = a("./hash"),
                o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                p = new Array(160);
            m(d, n), d.prototype.init = function() {
                return this._a = 1779033703, this._b = -1150833019, this._c = 1013904242, this._d = -1521486534, this._e = 1359893119, this._f = -1694144372, this._g = 528734635, this._h = 1541459225, this._al = -205731576, this._bl = -2067093701, this._cl = -23791573, this._dl = 1595750129, this._el = -1377402159, this._fl = 725511199, this._gl = -79577749, this._hl = 327033209, this
            }, d.prototype._update = function(a) {
                function b() {
                    var a = n[G - 30],
                        b = n[G - 30 + 1],
                        c = i(a, b),
                        e = j(b, a);
                    a = n[G - 4], b = n[G - 4 + 1];
                    var f = k(a, b),
                        g = l(b, a),
                        h = n[G - 14],
                        o = n[G - 14 + 1],
                        p = n[G - 32],
                        q = n[G - 32 + 1];
                    m = e + o, d = c + h + (e >>> 0 > m >>> 0 ? 1 : 0), m += g, d = d + f + (g >>> 0 > m >>> 0 ? 1 : 0), m += q, d = d + p + (q >>> 0 > m >>> 0 ? 1 : 0)
                }

                function c() {
                    n[G] = d, n[G + 1] = m;
                    var a = f(p, q, r),
                        b = f(x, y, z),
                        c = g(p, x),
                        i = g(x, p),
                        j = h(t, B),
                        k = h(B, t),
                        l = o[G],
                        H = o[G + 1],
                        I = e(t, u, v),
                        J = e(B, C, D),
                        K = E + k,
                        L = w + j + (E >>> 0 > K >>> 0 ? 1 : 0);
                    K += J, L = L + I + (J >>> 0 > K >>> 0 ? 1 : 0), K += H, L = L + l + (H >>> 0 > K >>> 0 ? 1 : 0), K += m, L = L + d + (m >>> 0 > K >>> 0 ? 1 : 0);
                    var M = i + b,
                        N = c + a + (i >>> 0 > M >>> 0 ? 1 : 0);
                    w = v, E = D, v = u, D = C, u = t, C = B, B = A + K | 0, t = s + L + (A >>> 0 > B >>> 0 ? 1 : 0) | 0, s = r, A = z, r = q, z = y, q = p, y = x, x = K + M | 0, p = L + N + (K >>> 0 > x >>> 0 ? 1 : 0) | 0, F++, G += 2
                }
                for (var d, m, n = this._w, p = 0 | this._a, q = 0 | this._b, r = 0 | this._c, s = 0 | this._d, t = 0 | this._e, u = 0 | this._f, v = 0 | this._g, w = 0 | this._h, x = 0 | this._al, y = 0 | this._bl, z = 0 | this._cl, A = 0 | this._dl, B = 0 | this._el, C = 0 | this._fl, D = 0 | this._gl, E = 0 | this._hl, F = 0, G = 0; 16 > F;) d = a.readInt32BE(4 * G), m = a.readInt32BE(4 * G + 4), c();
                for (; 80 > F;) b(), c();
                this._al = this._al + x | 0, this._bl = this._bl + y | 0, this._cl = this._cl + z | 0, this._dl = this._dl + A | 0, this._el = this._el + B | 0, this._fl = this._fl + C | 0, this._gl = this._gl + D | 0, this._hl = this._hl + E | 0, this._a = this._a + p + (this._al >>> 0 < x >>> 0 ? 1 : 0) | 0, this._b = this._b + q + (this._bl >>> 0 < y >>> 0 ? 1 : 0) | 0, this._c = this._c + r + (this._cl >>> 0 < z >>> 0 ? 1 : 0) | 0, this._d = this._d + s + (this._dl >>> 0 < A >>> 0 ? 1 : 0) | 0, this._e = this._e + t + (this._el >>> 0 < B >>> 0 ? 1 : 0) | 0, this._f = this._f + u + (this._fl >>> 0 < C >>> 0 ? 1 : 0) | 0, this._g = this._g + v + (this._gl >>> 0 < D >>> 0 ? 1 : 0) | 0, this._h = this._h + w + (this._hl >>> 0 < E >>> 0 ? 1 : 0) | 0
            }, d.prototype._hash = function() {
                function a(a, c, d) {
                    b.writeInt32BE(a, d), b.writeInt32BE(c, d + 4)
                }
                var b = new c(64);
                return a(this._a, this._al, 0), a(this._b, this._bl, 8), a(this._c, this._cl, 16), a(this._d, this._dl, 24), a(this._e, this._el, 32), a(this._f, this._fl, 40), a(this._g, this._gl, 48), a(this._h, this._hl, 56), b
            }, b.exports = d
        }).call(this, a("buffer").Buffer)
    }, {
        "./hash": 222,
        buffer: 51,
        inherits: 101
    }],
    230: [function(a, b, c) {
        ! function() {
            "use strict";

            function a(a) {
                a || (a = Math.random), this.p = new Uint8Array(256), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
                for (var b = 0; 256 > b; b++) this.p[b] = 256 * a();
                for (b = 0; 512 > b; b++) this.perm[b] = this.p[255 & b], this.permMod12[b] = this.perm[b] % 12
            }
            var d = .5 * (Math.sqrt(3) - 1),
                e = (3 - Math.sqrt(3)) / 6,
                f = 1 / 3,
                g = 1 / 6,
                h = (Math.sqrt(5) - 1) / 4,
                i = (5 - Math.sqrt(5)) / 20;
            a.prototype = {
                grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
                grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
                noise2D: function(a, b) {
                    var c, f, g = this.permMod12,
                        h = this.perm,
                        i = this.grad3,
                        j = 0,
                        k = 0,
                        l = 0,
                        m = (a + b) * d,
                        n = Math.floor(a + m),
                        o = Math.floor(b + m),
                        p = (n + o) * e,
                        q = n - p,
                        r = o - p,
                        s = a - q,
                        t = b - r;
                    s > t ? (c = 1, f = 0) : (c = 0, f = 1);
                    var u = s - c + e,
                        v = t - f + e,
                        w = s - 1 + 2 * e,
                        x = t - 1 + 2 * e,
                        y = 255 & n,
                        z = 255 & o,
                        A = .5 - s * s - t * t;
                    if (A >= 0) {
                        var B = 3 * g[y + h[z]];
                        A *= A, j = A * A * (i[B] * s + i[B + 1] * t)
                    }
                    var C = .5 - u * u - v * v;
                    if (C >= 0) {
                        var D = 3 * g[y + c + h[z + f]];
                        C *= C, k = C * C * (i[D] * u + i[D + 1] * v)
                    }
                    var E = .5 - w * w - x * x;
                    if (E >= 0) {
                        var F = 3 * g[y + 1 + h[z + 1]];
                        E *= E, l = E * E * (i[F] * w + i[F + 1] * x)
                    }
                    return 70 * (j + k + l)
                },
                noise3D: function(a, b, c) {
                    var d, e, h, i, j, k, l, m, n, o, p = this.permMod12,
                        q = this.perm,
                        r = this.grad3,
                        s = (a + b + c) * f,
                        t = Math.floor(a + s),
                        u = Math.floor(b + s),
                        v = Math.floor(c + s),
                        w = (t + u + v) * g,
                        x = t - w,
                        y = u - w,
                        z = v - w,
                        A = a - x,
                        B = b - y,
                        C = c - z;
                    A >= B ? B >= C ? (j = 1, k = 0, l = 0, m = 1, n = 1, o = 0) : A >= C ? (j = 1, k = 0, l = 0, m = 1, n = 0, o = 1) : (j = 0, k = 0, l = 1, m = 1, n = 0, o = 1) : C > B ? (j = 0, k = 0, l = 1, m = 0, n = 1, o = 1) : C > A ? (j = 0, k = 1, l = 0, m = 0, n = 1, o = 1) : (j = 0, k = 1, l = 0, m = 1, n = 1, o = 0);
                    var D = A - j + g,
                        E = B - k + g,
                        F = C - l + g,
                        G = A - m + 2 * g,
                        H = B - n + 2 * g,
                        I = C - o + 2 * g,
                        J = A - 1 + 3 * g,
                        K = B - 1 + 3 * g,
                        L = C - 1 + 3 * g,
                        M = 255 & t,
                        N = 255 & u,
                        O = 255 & v,
                        P = .6 - A * A - B * B - C * C;
                    if (0 > P) d = 0;
                    else {
                        var Q = 3 * p[M + q[N + q[O]]];
                        P *= P, d = P * P * (r[Q] * A + r[Q + 1] * B + r[Q + 2] * C)
                    }
                    var R = .6 - D * D - E * E - F * F;
                    if (0 > R) e = 0;
                    else {
                        var S = 3 * p[M + j + q[N + k + q[O + l]]];
                        R *= R, e = R * R * (r[S] * D + r[S + 1] * E + r[S + 2] * F)
                    }
                    var T = .6 - G * G - H * H - I * I;
                    if (0 > T) h = 0;
                    else {
                        var U = 3 * p[M + m + q[N + n + q[O + o]]];
                        T *= T, h = T * T * (r[U] * G + r[U + 1] * H + r[U + 2] * I)
                    }
                    var V = .6 - J * J - K * K - L * L;
                    if (0 > V) i = 0;
                    else {
                        var W = 3 * p[M + 1 + q[N + 1 + q[O + 1]]];
                        V *= V, i = V * V * (r[W] * J + r[W + 1] * K + r[W + 2] * L)
                    }
                    return 32 * (d + e + h + i)
                },
                noise4D: function(a, b, c, d) {
                    var e, f, g, j, k, l = (this.permMod12, this.perm),
                        m = this.grad4,
                        n = (a + b + c + d) * h,
                        o = Math.floor(a + n),
                        p = Math.floor(b + n),
                        q = Math.floor(c + n),
                        r = Math.floor(d + n),
                        s = (o + p + q + r) * i,
                        t = o - s,
                        u = p - s,
                        v = q - s,
                        w = r - s,
                        x = a - t,
                        y = b - u,
                        z = c - v,
                        A = d - w,
                        B = 0,
                        C = 0,
                        D = 0,
                        E = 0;
                    x > y ? B++ : C++, x > z ? B++ : D++, x > A ? B++ : E++, y > z ? C++ : D++, y > A ? C++ : E++, z > A ? D++ : E++;
                    var F, G, H, I, J, K, L, M, N, O, P, Q;
                    F = B >= 3 ? 1 : 0, G = C >= 3 ? 1 : 0, H = D >= 3 ? 1 : 0, I = E >= 3 ? 1 : 0, J = B >= 2 ? 1 : 0, K = C >= 2 ? 1 : 0, L = D >= 2 ? 1 : 0, M = E >= 2 ? 1 : 0, N = B >= 1 ? 1 : 0, O = C >= 1 ? 1 : 0, P = D >= 1 ? 1 : 0, Q = E >= 1 ? 1 : 0;
                    var R = x - F + i,
                        S = y - G + i,
                        T = z - H + i,
                        U = A - I + i,
                        V = x - J + 2 * i,
                        W = y - K + 2 * i,
                        X = z - L + 2 * i,
                        Y = A - M + 2 * i,
                        Z = x - N + 3 * i,
                        $ = y - O + 3 * i,
                        _ = z - P + 3 * i,
                        aa = A - Q + 3 * i,
                        ba = x - 1 + 4 * i,
                        ca = y - 1 + 4 * i,
                        da = z - 1 + 4 * i,
                        ea = A - 1 + 4 * i,
                        fa = 255 & o,
                        ga = 255 & p,
                        ha = 255 & q,
                        ia = 255 & r,
                        ja = .6 - x * x - y * y - z * z - A * A;
                    if (0 > ja) e = 0;
                    else {
                        var ka = l[fa + l[ga + l[ha + l[ia]]]] % 32 * 4;
                        ja *= ja, e = ja * ja * (m[ka] * x + m[ka + 1] * y + m[ka + 2] * z + m[ka + 3] * A)
                    }
                    var la = .6 - R * R - S * S - T * T - U * U;
                    if (0 > la) f = 0;
                    else {
                        var ma = l[fa + F + l[ga + G + l[ha + H + l[ia + I]]]] % 32 * 4;
                        la *= la, f = la * la * (m[ma] * R + m[ma + 1] * S + m[ma + 2] * T + m[ma + 3] * U)
                    }
                    var na = .6 - V * V - W * W - X * X - Y * Y;
                    if (0 > na) g = 0;
                    else {
                        var oa = l[fa + J + l[ga + K + l[ha + L + l[ia + M]]]] % 32 * 4;
                        na *= na, g = na * na * (m[oa] * V + m[oa + 1] * W + m[oa + 2] * X + m[oa + 3] * Y)
                    }
                    var pa = .6 - Z * Z - $ * $ - _ * _ - aa * aa;
                    if (0 > pa) j = 0;
                    else {
                        var qa = l[fa + N + l[ga + O + l[ha + P + l[ia + Q]]]] % 32 * 4;
                        pa *= pa, j = pa * pa * (m[qa] * Z + m[qa + 1] * $ + m[qa + 2] * _ + m[qa + 3] * aa)
                    }
                    var ra = .6 - ba * ba - ca * ca - da * da - ea * ea;
                    if (0 > ra) k = 0;
                    else {
                        var sa = l[fa + 1 + l[ga + 1 + l[ha + 1 + l[ia + 1]]]] % 32 * 4;
                        ra *= ra, k = ra * ra * (m[sa] * ba + m[sa + 1] * ca + m[sa + 2] * da + m[sa + 3] * ea)
                    }
                    return 27 * (e + f + g + j + k)
                }
            }, "undefined" != typeof define && define.amd && define(function() {
                return a
            }), "undefined" != typeof c ? c.SimplexNoise = a : "undefined" != typeof window && (window.SimplexNoise = a), "undefined" != typeof b && (b.exports = a)
        }()
    }, {}],
    231: [function(a, b, c) {
        function d() {
            e.call(this)
        }
        b.exports = d;
        var e = a("events").EventEmitter,
            f = a("inherits");
        f(d, e), d.Readable = a("readable-stream/readable.js"), d.Writable = a("readable-stream/writable.js"), d.Duplex = a("readable-stream/duplex.js"), d.Transform = a("readable-stream/transform.js"), d.PassThrough = a("readable-stream/passthrough.js"), d.Stream = d, d.prototype.pipe = function(a, b) {
            function c(b) {
                a.writable && !1 === a.write(b) && j.pause && j.pause()
            }

            function d() {
                j.readable && j.resume && j.resume()
            }

            function f() {
                k || (k = !0, a.end())
            }

            function g() {
                k || (k = !0, "function" == typeof a.destroy && a.destroy())
            }

            function h(a) {
                if (i(), 0 === e.listenerCount(this, "error")) throw a
            }

            function i() {
                j.removeListener("data", c), a.removeListener("drain", d), j.removeListener("end", f), j.removeListener("close", g), j.removeListener("error", h), a.removeListener("error", h), j.removeListener("end", i), j.removeListener("close", i), a.removeListener("close", i)
            }
            var j = this;
            j.on("data", c), a.on("drain", d), a._isStdio || b && b.end === !1 || (j.on("end", f), j.on("close", g));
            var k = !1;
            return j.on("error", h), a.on("error", h), j.on("end", i), j.on("close", i), a.on("close", i), a.emit("pipe", j), a
        }
    }, {
        events: 88,
        inherits: 101,
        "readable-stream/duplex.js": 202,
        "readable-stream/passthrough.js": 208,
        "readable-stream/readable.js": 209,
        "readable-stream/transform.js": 210,
        "readable-stream/writable.js": 211
    }],
    232: [function(a, b, c) {
        function d(a) {
            if (a && !i(a)) throw new Error("Unknown encoding: " + a)
        }

        function e(a) {
            return a.toString(this.encoding)
        }

        function f(a) {
            this.charReceived = a.length % 2, this.charLength = this.charReceived ? 2 : 0
        }

        function g(a) {
            this.charReceived = a.length % 3, this.charLength = this.charReceived ? 3 : 0
        }
        var h = a("buffer").Buffer,
            i = h.isEncoding || function(a) {
                switch (a && a.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            },
            j = c.StringDecoder = function(a) {
                switch (this.encoding = (a || "utf8").toLowerCase().replace(/[-_]/, ""), d(a), this.encoding) {
                    case "utf8":
                        this.surrogateSize = 3;
                        break;
                    case "ucs2":
                    case "utf16le":
                        this.surrogateSize = 2, this.detectIncompleteChar = f;
                        break;
                    case "base64":
                        this.surrogateSize = 3, this.detectIncompleteChar = g;
                        break;
                    default:
                        return void(this.write = e)
                }
                this.charBuffer = new h(6), this.charReceived = 0, this.charLength = 0
            };
        j.prototype.write = function(a) {
            for (var b = ""; this.charLength;) {
                var c = a.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : a.length;
                if (a.copy(this.charBuffer, this.charReceived, 0, c), this.charReceived += c, this.charReceived < this.charLength) return "";
                a = a.slice(c, a.length), b = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
                var d = b.charCodeAt(b.length - 1);
                if (!(d >= 55296 && 56319 >= d)) {
                    if (this.charReceived = this.charLength = 0, 0 === a.length) return b;
                    break
                }
                this.charLength += this.surrogateSize, b = ""
            }
            this.detectIncompleteChar(a);
            var e = a.length;
            this.charLength && (a.copy(this.charBuffer, 0, a.length - this.charReceived, e), e -= this.charReceived), b += a.toString(this.encoding, 0, e);
            var e = b.length - 1,
                d = b.charCodeAt(e);
            if (d >= 55296 && 56319 >= d) {
                var f = this.surrogateSize;
                return this.charLength += f, this.charReceived += f, this.charBuffer.copy(this.charBuffer, f, 0, f), a.copy(this.charBuffer, 0, 0, f), b.substring(0, e)
            }
            return b
        }, j.prototype.detectIncompleteChar = function(a) {
            for (var b = a.length >= 3 ? 3 : a.length; b > 0; b--) {
                var c = a[a.length - b];
                if (1 == b && c >> 5 == 6) {
                    this.charLength = 2;
                    break
                }
                if (2 >= b && c >> 4 == 14) {
                    this.charLength = 3;
                    break
                }
                if (3 >= b && c >> 3 == 30) {
                    this.charLength = 4;
                    break
                }
            }
            this.charReceived = b
        }, j.prototype.end = function(a) {
            var b = "";
            if (a && a.length && (b = this.write(a)), this.charReceived) {
                var c = this.charReceived,
                    d = this.charBuffer,
                    e = this.encoding;
                b += d.slice(0, c).toString(e)
            }
            return b
        }
    }, {
        buffer: 51
    }],
    233: [function(a, b, c) {
        (function(a) {
            function c(a, b) {
                function c() {
                    if (!e) {
                        if (d("throwDeprecation")) throw new Error(b);
                        d("traceDeprecation") ? console.trace(b) : console.warn(b), e = !0
                    }
                    return a.apply(this, arguments)
                }
                if (d("noDeprecation")) return a;
                var e = !1;
                return c
            }

            function d(b) {
                try {
                    if (!a.localStorage) return !1
                } catch (c) {
                    return !1
                }
                var d = a.localStorage[b];
                return null == d ? !1 : "true" === String(d).toLowerCase()
            }
            b.exports = c
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    234: [function(require, module, exports) {
        function Context() {}
        var indexOf = require("indexof"),
            Object_keys = function(a) {
                if (Object.keys) return Object.keys(a);
                var b = [];
                for (var c in a) b.push(c);
                return b
            },
            forEach = function(a, b) {
                if (a.forEach) return a.forEach(b);
                for (var c = 0; c < a.length; c++) b(a[c], c, a)
            },
            defineProp = function() {
                try {
                    return Object.defineProperty({}, "_", {}),
                        function(a, b, c) {
                            Object.defineProperty(a, b, {
                                writable: !0,
                                enumerable: !1,
                                configurable: !0,
                                value: c
                            })
                        }
                } catch (a) {
                    return function(a, b, c) {
                        a[b] = c
                    }
                }
            }(),
            globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];
        Context.prototype = {};
        var Script = exports.Script = function(a) {
            return this instanceof Script ? void(this.code = a) : new Script(a)
        };
        Script.prototype.runInContext = function(a) {
            if (!(a instanceof Context)) throw new TypeError("needs a 'context' argument.");
            var b = document.createElement("iframe");
            b.style || (b.style = {}), b.style.display = "none", document.body.appendChild(b);
            var c = b.contentWindow,
                d = c.eval,
                e = c.execScript;
            !d && e && (e.call(c, "null"), d = c.eval), forEach(Object_keys(a), function(b) {
                c[b] = a[b]
            }), forEach(globals, function(b) {
                a[b] && (c[b] = a[b])
            });
            var f = Object_keys(c),
                g = d.call(c, this.code);
            return forEach(Object_keys(c), function(b) {
                (b in a || -1 === indexOf(f, b)) && (a[b] = c[b])
            }), forEach(globals, function(b) {
                b in a || defineProp(a, b, c[b])
            }), document.body.removeChild(b), g
        }, Script.prototype.runInThisContext = function() {
            return eval(this.code)
        }, Script.prototype.runInNewContext = function(a) {
            var b = Script.createContext(a),
                c = this.runInContext(b);
            return forEach(Object_keys(b), function(c) {
                a[c] = b[c]
            }), c
        }, forEach(Object_keys(Script.prototype), function(a) {
            exports[a] = Script[a] = function(b) {
                var c = Script(b);
                return c[a].apply(c, [].slice.call(arguments, 1))
            }
        }), exports.createScript = function(a) {
            return exports.Script(a)
        }, exports.createContext = Script.createContext = function(a) {
            var b = new Context;
            return "object" == typeof a && forEach(Object_keys(a), function(c) {
                b[c] = a[c]
            }), b
        }
    }, {
        indexof: 100
    }]
}, {}, [1]);
