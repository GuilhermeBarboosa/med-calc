"use strict";(self.webpackChunkmed_calc=self.webpackChunkmed_calc||[]).push([[890],{1890:(G,c,l)=>{l.r(c),l.d(c,{MicrogotaModule:()=>Y});var s=l(6895),f=l(529),g=l(1581),d=l(7155),p=l(8490),v=l(5128),h=l(7185),M=l(5601),Z=l(5861),i=l(4006),x=l(3124),o=l(4650),C=l(5412),T=l(7261),I=l(8603),y=l(4144);function A(r,e){1&r&&(o.TgZ(0,"div",12),o._uU(1," Volume \xe9 obrigat\xf3rio "),o.qZA())}function J(r,e){1&r&&(o.TgZ(0,"div",12),o._uU(1," Hora \xe9 obrigat\xf3rio "),o.qZA())}function F(r,e){1&r&&(o.TgZ(0,"div",12),o._uU(1," Minuto \xe9 obrigat\xf3rio "),o.qZA())}function U(r,e){if(1&r){const t=o.EpF();o.TgZ(0,"form",4)(1,"div",5)(2,"label",6),o._uU(3,"Volume total (ml):"),o.qZA(),o._UZ(4,"input",7),o.YNc(5,A,2,0,"div",8),o.qZA(),o.TgZ(6,"div",5)(7,"label",6),o._uU(8,"Hora:"),o.qZA(),o._UZ(9,"input",9),o.YNc(10,J,2,0,"div",8),o.qZA(),o.TgZ(11,"div",5)(12,"label",6),o._uU(13,"Minuto:"),o.qZA(),o._UZ(14,"input",10),o.YNc(15,F,2,0,"div",8),o.qZA(),o.TgZ(16,"app-button-primary",11),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.calcular())}),o.qZA()()}if(2&r){const t=o.oxw();let n,a,u;o.Q6J("formGroup",t.formulario),o.xp6(5),o.Q6J("ngIf",(null==(n=t.formulario.get("volume"))||null==n.errors?null:n.errors.required)&&(null==(n=t.formulario.get("volume"))?null:n.touched)),o.xp6(5),o.Q6J("ngIf",(null==(a=t.formulario.get("hora"))||null==a.errors?null:a.errors.required)&&(null==(a=t.formulario.get("hora"))?null:a.touched)),o.xp6(5),o.Q6J("ngIf",(null==(u=t.formulario.get("minuto"))||null==u.errors?null:u.errors.required)&&(null==(u=t.formulario.get("minuto"))?null:u.touched)),o.xp6(1),o.Q6J("value","Calcular")}}const N=[{path:"",component:(()=>{class r{constructor(t,n,a){this.formBuilder=t,this.dialog=n,this.notifier=a}ngOnInit(){this.createTable()}createTable(){var t=this;return(0,Z.Z)(function*(){t.formulario=t.formBuilder.group({volume:["",[i.kI.required]],hora:["",[i.kI.required]],minuto:["",[i.kI.required]]})})()}calcular(){if(this.formulario.valid){const t=this.formulario.get("volume")?.value,n=this.formulario.get("hora")?.value,a=this.formulario.get("minuto")?.value;let u=0,m="";0!=n?(u=this.calcularMicrogota(t,60*n+a),m=String(n)+":"+String(a)):(u=this.calcularMicrogota(t,a),m="00:"+String(a)),this.dialog.open(x.n,{width:"800px",data:{volume:t,total:u.toFixed(2),horasFormatada:m}})}else this.notifier.showInfo("Preencha todos os campos")}calcularMicrogota(t,n){return 20*t/n*3}}return r.\u0275fac=function(t){return new(t||r)(o.Y36(i.qu),o.Y36(C.uw),o.Y36(T.l))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-microgota"]],decls:7,vars:1,consts:[[1,"flex","justify-center","m-5"],[1,"text-xl","font-semibold"],[1,"flex","justify-center"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"m-2"],["for",""],["formControlName","volume","type","number","matInput","",1,"default-input"],["class","mensagem__erro",4,"ngIf"],["formControlName","hora","type","number","matInput","",1,"default-input"],["formControlName","minuto","type","number","matInput","",1,"default-input"],[3,"value","click"],[1,"mensagem__erro"]],template:function(t,n){1&t&&(o.TgZ(0,"div")(1,"div",0)(2,"h1",1),o._uU(3,"Microgotas"),o.qZA()(),o.TgZ(4,"div",2)(5,"div"),o.YNc(6,U,17,5,"form",3),o.qZA()()()),2&t&&(o.xp6(6),o.Q6J("ngIf",n.formulario))},dependencies:[s.O5,I.b,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,y.Nt]}),r})()}];let Y=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[s.ez,M.m,p.Bz.forChild(N),v.yI.forRoot({dropSpecialCharacters:!1}),f.JF,g.TU,d.p0,h.Rh.forRoot()]}),r})()}}]);