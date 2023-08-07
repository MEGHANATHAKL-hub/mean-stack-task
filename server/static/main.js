"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_all_videos_list_all_videos_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/all-videos-list/all-videos-list.component */ 2089);
/* harmony import */ var _components_new_video_new_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/new-video/new-video.component */ 2113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _components_all_videos_list_all_videos_list_component__WEBPACK_IMPORTED_MODULE_0__.AllVideosListComponent
}, {
  path: 'videoslist',
  component: _components_all_videos_list_all_videos_list_component__WEBPACK_IMPORTED_MODULE_0__.AllVideosListComponent
}, {
  path: 'new-video',
  component: _components_new_video_new_video_component__WEBPACK_IMPORTED_MODULE_1__.NewVideoComponent
}, {
  path: 'en',
  redirectTo: ''
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/app.service */ 9288);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);






class AppComponent {
  constructor(appService, router) {
    this.appService = appService;
    this.router = router;
    this.title = "Video-Store";
    this.activeRoute = "/videoslist";
    this.subMenus = {
      "/": "Video-Store",
      "/videoslist": "Video-Store",
      "/new-video": "New Video"
    };
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        console.log(event.url);
        this.activeRoute = event.url;
        this.title = this.subMenus[`${event.url}`];
      }
    });
  }
  ngOnInit() {}
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 1,
  consts: [[1, "web-header", 3, "title"], [1, "web-sidebar"], [1, "app-container"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header", 0)(1, "app-sidebar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.title);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
  styles: [".mat-step-header .mat-step-icon-state-done {\n  background-color: #008002;\n}\n\n  .mat-step-header .mat-step-icon-selected {\n  background-color: #008002;\n}\n\n  .mat-step-header .mat-step-icon-state-edit {\n  background-color: #008002;\n  color: #fff;\n}\n\n.sub-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 10px;\n  position: fixed;\n  top: 65px;\n  left: 83px;\n  z-index: 99999;\n}\n.sub-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 0.1px solid rgba(128, 128, 128, 0.5803921569);\n  height: 37px;\n  width: 135px;\n  cursor: pointer;\n  border-radius: 17%/60%;\n}\n.sub-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgb(33, 142, 243);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vR2l0aHViJTIwUmVwb3MvTWVhbi1TdGFjay1UYXNrL2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDREY7QURHRTtFQUNFLHVCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0RKO0FESUU7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7QUNGSiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDI7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuXG5cbi5zdWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2NXB4O1xuICBsZWZ0OiA4M3B4O1xuICB6LWluZGV4OiA5OTk5OTtcblxuICAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkICM4MDgwODA5NDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNyUgLyA2MCU7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDE0MiwgMjQzKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn0iLCI6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zdWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2NXB4O1xuICBsZWZ0OiA4M3B4O1xuICB6LWluZGV4OiA5OTk5OTtcbn1cbi5zdWItY29udGFpbmVyIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTgwMzkyMTU2OSk7XG4gIGhlaWdodDogMzdweDtcbiAgd2lkdGg6IDEzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE3JS82MCU7XG59XG4uc3ViLWNvbnRhaW5lciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAxNDIsIDI0Myk7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/core.module */ 6020);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_all_videos_list_all_videos_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/all-videos-list/all-videos-list.component */ 2089);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);
/* harmony import */ var _components_new_video_new_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-video/new-video.component */ 2113);
/* harmony import */ var _components_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/video-stream/video-stream.component */ 895);
/* harmony import */ var _components_video_stream_http_video_stream_http_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/video-stream-http/video-stream-http.component */ 4688);
/* harmony import */ var _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/file-upload/file-upload.component */ 2334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);


































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _shared_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatNativeDateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_all_videos_list_all_videos_list_component__WEBPACK_IMPORTED_MODULE_4__.AllVideosListComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _components_new_video_new_video_component__WEBPACK_IMPORTED_MODULE_6__.NewVideoComponent, _components_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_7__.VideoStreamComponent, _components_video_stream_http_video_stream_http_component__WEBPACK_IMPORTED_MODULE_8__.VideoStreamHttpComponent, _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_9__.FileUploadComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _shared_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_32__.AsyncPipe, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatNativeDateModule]
  });
})();

/***/ }),

/***/ 2089:
/*!*************************************************************************!*\
  !*** ./src/app/components/all-videos-list/all-videos-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllVideosListComponent": () => (/* binding */ AllVideosListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../video-stream/video-stream.component */ 895);
/* harmony import */ var _video_stream_http_video_stream_http_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-stream-http/video-stream-http.component */ 4688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);









function AllVideosListComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r11 + 1, " ");
  }
}
function AllVideosListComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Video Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function AllVideosListComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15)(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllVideosListComponent_td_15_Template_mat_icon_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const element_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.selectedVideoUsingHttp(element_r13.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "smart_display");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Socket");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15)(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllVideosListComponent_td_18_Template_mat_icon_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const element_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.selectedVideoUsingSocket(element_r16.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "smart_display");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 17);
  }
}
function AllVideosListComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 18);
  }
}
class AllVideosListComponent {
  constructor(appService, router, dialog) {
    this.appService = appService;
    this.router = router;
    this.dialog = dialog;
    this.stickyHeader = true;
    this.displayedColumns = ['position', 'name', 'http', 'socket'];
  }
  ngOnInit() {
    this.appService.getFiles().subscribe(response => {
      console.log('response receved is ', response);
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(response);
    });
  }
  edit(id) {
    this.router.navigateByUrl(`edit/alert/${id}`).then(() => {});
  }
  selectedVideoUsingSocket(fileName) {
    const selectedFileDailog = this.dialog.open(_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_0__.VideoStreamComponent, {
      data: {
        fileName: fileName
      }
    });
    selectedFileDailog.afterClosed().subscribe(result => {});
  }
  selectedVideoUsingHttp(fileName) {
    const selectedFileDailog = this.dialog.open(_video_stream_http_video_stream_http_component__WEBPACK_IMPORTED_MODULE_1__.VideoStreamHttpComponent, {
      data: {
        fileName: fileName
      }
    });
    selectedFileDailog.afterClosed().subscribe(result => {});
  }
}
AllVideosListComponent.ɵfac = function AllVideosListComponent_Factory(t) {
  return new (t || AllVideosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
AllVideosListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AllVideosListComponent,
  selectors: [["app-all-videos-list"]],
  decls: 21,
  vars: 4,
  consts: [[1, "main-box"], [1, "app-all-datasets"], [1, "header"], ["routerLink", "/new-video", 1, "new-btn"], [2, "overflow", "auto"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "http"], ["matColumnDef", "socket"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "action", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function AllVideosListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " + New Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 4)(6, "table", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AllVideosListComponent_th_8_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AllVideosListComponent_td_9_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AllVideosListComponent_th_11_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AllVideosListComponent_td_12_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AllVideosListComponent_th_14_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AllVideosListComponent_td_15_Template, 4, 0, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AllVideosListComponent_th_17_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AllVideosListComponent_td_18_Template, 4, 0, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AllVideosListComponent_tr_19_Template, 1, 0, "tr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AllVideosListComponent_tr_20_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", ctx.stickyHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
  styles: [".main-box[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-top: -36px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 10px;\n}\n\n.new-btn[_ngcontent-%COMP%] {\n  color: rgba(16, 91, 204, 0.7803921569);\n  background-color: white;\n  border: 1px solid rgba(16, 91, 204, 0.7803921569);\n  height: 35px;\n  width: 95px;\n  cursor: pointer;\n  border-radius: 5%;\n}\n\n.app-all-datasets[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 64px;\n  padding-top: 146px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: large;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  padding-right: 6px 0;\n  height: 40px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-style: bold;\n  height: 45px;\n  background-color: #2b457f;\n  color: white;\n}\n\n.yes-indicator[_ngcontent-%COMP%] {\n  color: white;\n  background-color: green;\n  padding: 4px;\n  width: 38px;\n  border-radius: 9%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.no-indicator[_ngcontent-%COMP%] {\n  color: white;\n  background-color: red;\n  padding: 4px;\n  width: 38px;\n  border-radius: 9%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.action[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbGwtdmlkZW9zLWxpc3QvYWxsLXZpZGVvcy1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vR2l0aHViJTIwUmVwb3MvTWVhbi1TdGFjay1UYXNrL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvYWxsLXZpZGVvcy1saXN0L2FsbC12aWRlb3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdFO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNETjs7QURNQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNIRiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0zNnB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5uZXctYnRuIHtcbiAgY29sb3I6IHJnYmEoMTYsIDkxLCAyMDQsIDAuNzgwMzkyMTU2OSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCA5MSwgMjA0LCAwLjc4MDM5MjE1NjkpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA5NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uYXBwLWFsbC1kYXRhc2V0cyB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNjRweDtcbiAgcGFkZGluZy10b3A6IDE0NnB4O1xufVxuXG50YWJsZSB7XG4gIC8vbWF4LXdpZHRoOiAwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgLy9ib3JkZXI6IDJweCBzb2xpZCByZ2IoMjI2LCAyMTgsIDIxOCk7XG5cbiAgdHIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweCAwO1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIHRoIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0NTdmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4ueWVzLWluZGljYXRvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDklO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm5vLWluZGljYXRvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiA5JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5hY3Rpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIubWFpbi1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMzZweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubmV3LWJ0biB7XG4gIGNvbG9yOiByZ2JhKDE2LCA5MSwgMjA0LCAwLjc4MDM5MjE1NjkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgOTEsIDIwNCwgMC43ODAzOTIxNTY5KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogOTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmFwcC1hbGwtZGF0YXNldHMge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDY0cHg7XG4gIHBhZGRpbmctdG9wOiAxNDZweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbnRhYmxlIHRyIHtcbiAgcGFkZGluZy1yaWdodDogNnB4IDA7XG4gIGhlaWdodDogNDBweDtcbn1cbnRhYmxlIHRyIHRoIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBib2xkO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjQ1N2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnllcy1pbmRpY2F0b3Ige1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiA5JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5uby1pbmRpY2F0b3Ige1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNHB4O1xuICB3aWR0aDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogOSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYWN0aW9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2334:
/*!*****************************************************************!*\
  !*** ./src/app/components/file-upload/file-upload.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class FileUploadComponent {
  emitFiles(event) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }
  constructor(host) {
    this.host = host;
    this.file = null;
  }
  writeValue(value) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {}
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
  return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
FileUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FileUploadComponent,
  selectors: [["app-file-upload"]],
  hostBindings: function FileUploadComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_change_HostBindingHandler($event) {
        return ctx.emitFiles($event.target.files);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: FileUploadComponent,
    multi: true
  }])],
  decls: 6,
  vars: 1,
  consts: [[1, "file-drop-area"], [1, "fake-btn"], [1, "file-msg"], ["type", "file", 1, "file-input"]],
  template: function FileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose file");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.file ? ctx.file.name : "or drag and drop file here");
    }
  },
  styles: ["@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);.file-drop-area[_ngcontent-%COMP%] {\n  border: 1px dashed #c9c9c9;\n  border-radius: 3px;\n  position: relative;\n  width: 450px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 26px 20px 30px;\n  transition: 0.2s;\n}\n\n.file-drop-area.is-active[_ngcontent-%COMP%] {\n  background-color: #3F4069;\n}\n\n.fake-btn[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  border: 1px solid #9E9EC4;\n  border-radius: 3px;\n  padding: 8px 15px;\n  margin-right: 8px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.file-msg[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: calc(100% - 130px);\n  vertical-align: middle;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.file-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0dpdGh1YiUyMFJlcG9zL01lYW4tU3RhY2stVGFzay9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsMzAwLDcwMCk7XG5cblxuLmZpbGUtZHJvcC1hcmVhIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjOWM5Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI2cHggMjBweCAzMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5maWxlLWRyb3AtYXJlYS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDY5O1xufVxuXG4uZmFrZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUU5RUM0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmlsZS1tc2cge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEzMHB4KTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZpbGUtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmlsZS1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59IiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDMwMCw3MDApO1xuLmZpbGUtZHJvcC1hcmVhIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjOWM5Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI2cHggMjBweCAzMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5maWxlLWRyb3AtYXJlYS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDY5O1xufVxuXG4uZmFrZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUU5RUM0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmlsZS1tc2cge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEzMHB4KTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZpbGUtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmlsZS1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);






class HeaderComponent {
  constructor(router, appService) {
    this.router = router;
    this.appService = appService;
  }
  ngOnInit() {}
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  inputs: {
    title: "title"
  },
  decls: 7,
  vars: 1,
  consts: [["id", "app-header", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "mat-elevation-z4"], [1, "title"], [2, "flex", "1"], ["mat-icon-button", "", "aria-label", "Logout", "matTooltip", "Logout"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3)(5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
  styles: ["#app-header[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  padding: 5px;\n  position: fixed;\n  top: 0;\n  left: 70px;\n  height: 56px;\n  z-index: 99999;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  place-content: center flex-start;\n  align-items: center;\n  width: calc(100% - 70px);\n}\n#app-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#app-header[_ngcontent-%COMP%]   .app-settings[_ngcontent-%COMP%] {\n  border: 1px solid #d7d7d7;\n  margin: 0 10px;\n  padding: 0px 4px;\n  border-radius: 10px;\n  background: gainsboro;\n  margin-right: 50px;\n}\n#app-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 100%;\n  border: none;\n  margin-left: 30px;\n  background-color: transparent;\n  border-top: 5px solid rgb(33, 142, 243);\n  width: max-content;\n}\n#app-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-weight: 600;\n}\n\n.app-header-btn[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n\n.app-header-btn-mit[_ngcontent-%COMP%] {\n  padding: 0;\n  padding-right: 10px;\n  margin-right: 100px;\n  line-height: 38px;\n  width: 80px;\n  background: #ffcaca;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vR2l0aHViJTIwUmVwb3MvTWVhbi1TdGFjay1UYXNrL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FERUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0U7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FDRko7QURLRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURPQTtFQUNFLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSkYiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDcwcHg7XG4gIGhlaWdodDogNTZweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG5cbiAgaW1nOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuYXBwLXNldHRpbmdzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2Q3O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmc6IDBweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICAvLyAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigzMywgMTQyLCAyNDMpO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxuXG4gIGgzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5hcHAtaGVhZGVyLWJ0biB7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4uYXBwLWhlYWRlci1idG4tbWl0IHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZjYWNhO1xufSIsIiNhcHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogNzBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbn1cbiNhcHAtaGVhZGVyIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNhcHAtaGVhZGVyIC5hcHAtc2V0dGluZ3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2Q3O1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4jYXBwLWhlYWRlciAudGl0bGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDMzLCAxNDIsIDI0Myk7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cbiNhcHAtaGVhZGVyIGgzIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hcHAtaGVhZGVyLWJ0biB7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4uYXBwLWhlYWRlci1idG4tbWl0IHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZjYWNhO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2113:
/*!*************************************************************!*\
  !*** ./src/app/components/new-video/new-video.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewVideoComponent": () => (/* binding */ NewVideoComponent),
/* harmony export */   "toFormData": () => (/* binding */ toFormData)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_utils_upload_file_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/upload-file-validators */ 1769);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file-upload/file-upload.component */ 2334);










function NewVideoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
class NewVideoComponent {
  constructor(appService, router) {
    this.appService = appService;
    this.router = router;
    this.errorMessageStatus = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      file: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, (0,src_app_utils_upload_file_validators__WEBPACK_IMPORTED_MODULE_0__.requiredFileType)(['video/mp4'])])
    });
  }
  ngOnInit() {}
  submit() {
    this.errorMessageStatus = false;
    this.appService.uploadFile(toFormData(this.form.value)).subscribe(event => {
      if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.Response) {
        console.log(event.body);
        this.form.reset();
        this.router.navigateByUrl('videoslist').then(() => {});
      }
    }, ({
      error
    }) => {
      this.errorMessageStatus = true;
      this.errorMessage = error;
      console.log(error);
    });
  }
}
NewVideoComponent.ɵfac = function NewVideoComponent_Factory(t) {
  return new (t || NewVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
NewVideoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NewVideoComponent,
  selectors: [["app-new-video"]],
  decls: 11,
  vars: 2,
  consts: [[1, "main-box"], [1, "title"], [1, "file-uploader"], [3, "formGroup", "ngSubmit"], ["formControlName", "file"], ["class", "error-message", 4, "ngIf"], [1, "submit"], ["mat-raised-button", "", "type", "submit", "color", "primary"], [1, "error-message"]],
  template: function NewVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Upload Video (MP4 format, max 2MB):");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NewVideoComponent_Template_form_ngSubmit_5_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-file-upload", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NewVideoComponent_div_7_Template, 3, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessageStatus);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent],
  styles: [".submit[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.main-box[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 47px;\n  padding-top: 80px;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 20px;\n  font-size: 25px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.file-uploader[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXctdmlkZW8vbmV3LXZpZGVvLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vR2l0aHViJTIwUmVwb3MvTWVhbi1TdGFjay1UYXNrL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbmV3LXZpZGVvL25ldy12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2REU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDNURKOztBRCtERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUM1REo7O0FEZ0VFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQzdESjs7QURnRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDN0RKOztBRGdFRTtFQUNFLGFBQUE7QUM3REoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaGVhZGVye1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cbi8vIC5oZWFkZXIgaDF7XG4vLyAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuLy8gICAgIGZvbnQtc2l6ZTogMzhweDtcbi8vICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XG4vLyB9XG4vLyAuY29udGVudHtcbi8vICAgICBtYXJnaW46IDEwMHB4O1xuLy8gfVxuLy8gLm1hcmdpbjI1e1xuLy8gICAgIG1hcmdpbjogMjVweDtcbi8vIH1cbi8vIC51cGxvYWR7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG5cbi8vIC8qIGZpbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MgKi9cblxuLy8gLyogQ2VudGVyIHRoZSBmb3JtICovXG4vLyAvLyBmb3JtIHtcbi8vIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIC8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gLy8gICB9XG4gIFxuLy8gICAvKiBTdHlsZSB0aGUgbGFiZWwgKi9cbi8vICAgbGFiZWwge1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICB9XG4gIFxuLy8gICAvKiBTdHlsZSB0aGUgaW5wdXQgZmlsZSBlbGVtZW50ICovXG4vLyAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgIHdpZHRoOiAzMDBweDtcbi8vICAgICBoZWlnaHQ6IDUwcHg7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDU3O1xuLy8gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuLy8gICAgIHBhZGRpbmctbGVmdDogMjBweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIFN0eWxlIGVycm9yIG1lc3NhZ2VzICovXG4vLyAgIC5lcnJvci1tZXNzYWdlIHtcbi8vICAgICBjb2xvcjogcmVkO1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIERpc2FibGUgdGhlIGJ1dHRvbiB3aGVuIGZvcm0gaXMgaW52YWxpZCAqL1xuLy8gICBidXR0b25bZGlzYWJsZWRdIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuLy8gICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4vLyAgIH1cblxuICAuc3VibWl0IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLm1haW4tYm94IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNDdweDtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcblxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZmlsZS11cGxvYWRlciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuIiwiLnN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1ib3gge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDQ3cHg7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWxlLXVwbG9hZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
function toFormData(formValue) {
  const formData = new FormData();
  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }
  return formData;
}

/***/ }),

/***/ 9201:
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = function (a0) {
  return {
    active: a0
  };
};
class SidebarComponent {
  constructor(fb, appService, route, router) {
    this.appService = appService;
    this.route = route;
    this.router = router;
    this.all_dataset = true;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.activeRoute = event.url;
      }
    });
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
  ngOnInit() {}
  isActiveMenu(menuIndex) {
    if (menuIndex == 0) {
      return this.activeRoute == "/videoslist";
    }
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 6,
  vars: 3,
  consts: [[1, "split", "left"], [1, "app-sidenav"], [1, "app-menu"], ["routerLink", "/videoslist", 3, "ngClass"], [1, "material-symbols-outlined"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx.isActiveMenu(0)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".split[_ngcontent-%COMP%] {\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  overflow-x: hidden;\n}\n\n.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n  width: 95%;\n  padding-top: 70px;\n  background-color: white;\n}\n\n.app-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 70px;\n  background-color: rgb(33, 142, 243);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99999;\n}\n.app-sidenav[_ngcontent-%COMP%]   .app-menu[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.app-sidenav[_ngcontent-%COMP%]   .app-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 0;\n  height: 50px;\n  cursor: pointer;\n  list-style-type: none;\n}\n.app-sidenav[_ngcontent-%COMP%]   .app-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 11px;\n  padding-left: 18px;\n}\n.app-sidenav[_ngcontent-%COMP%]   .app-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-left: 4px solid white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9HaXRodWIlMjBSZXBvcy9NZWFuLVN0YWNrLVRhc2svY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7QUNDRjs7QURFQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ047QURDTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NSO0FER0k7RUFDRSw0QkFBQTtBQ0ROIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGl0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB0b3A6IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4ucmlnaHQge1xuICByaWdodDogMDtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYXBwLXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDE0MiwgMjQzKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5O1xuXG4gIC5hcHAtbWVudSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgbGkge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIHBhZGRpbmc6IDExcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaS5hY3RpdmUge1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG4gIH1cbn0iLCIuc3BsaXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi5yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5hcHAtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMTQyLCAyNDMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTk7XG59XG4uYXBwLXNpZGVuYXYgLmFwcC1tZW51IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmFwcC1zaWRlbmF2IC5hcHAtbWVudSBsaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5hcHAtc2lkZW5hdiAuYXBwLW1lbnUgbGkgc3BhbiB7XG4gIHBhZGRpbmc6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbn1cbi5hcHAtc2lkZW5hdiAuYXBwLW1lbnUgbGkuYWN0aXZlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4688:
/*!*****************************************************************************!*\
  !*** ./src/app/components/video-stream-http/video-stream-http.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoStreamHttpComponent": () => (/* binding */ VideoStreamHttpComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);



class VideoStreamHttpComponent {
  constructor(data, appService) {
    this.data = data;
    this.appService = appService;
    this.fileName = `api/data/video/http/stream/${data.fileName}`;
  }
}
VideoStreamHttpComponent.ɵfac = function VideoStreamHttpComponent_Factory(t) {
  return new (t || VideoStreamHttpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
};
VideoStreamHttpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VideoStreamHttpComponent,
  selectors: [["app-video-stream-http"]],
  decls: 1,
  vars: 1,
  consts: [["width", "1080px", "controls", "", "autoplay", "", 3, "src"]],
  template: function VideoStreamHttpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 895:
/*!*******************************************************************!*\
  !*** ./src/app/components/video-stream/video-stream.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoStreamComponent": () => (/* binding */ VideoStreamComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 4769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);




const _c0 = ["videoPlayer"];
class VideoStreamComponent {
  constructor(data, appService) {
    this.data = data;
    this.appService = appService;
    this.showVideoPlayer = false;
    this.fileName = `api/data/video/socket/stream/${data.fileName}`;
    this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(window.origin);
  }
  ngAfterViewInit() {
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
    this.startStreaming();
    this.socket.on('video-stream', data => {
      const videoBlob = new Blob([data], {
        type: 'video/mp4'
      });
      const videoStream = URL.createObjectURL(videoBlob);
      this.videoElementRef.nativeElement.src = videoStream;
    });
    this.socket.on('video-end', () => {
      console.log('Video stream ended');
      this.progress = undefined;
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }
  startStreaming() {
    this.socket.emit('start-stream', this.data.fileName);
  }
  ngOnDestroy() {
    // Clean up the socket connection when the component is destroyed
    this.socket.disconnect();
  }
}
VideoStreamComponent.SOCKET_EVENT = {
  VIDEO: "video-stream"
};
VideoStreamComponent.ɵfac = function VideoStreamComponent_Factory(t) {
  return new (t || VideoStreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService));
};
VideoStreamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: VideoStreamComponent,
  selectors: [["app-video-stream"]],
  viewQuery: function VideoStreamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.videoElementRef = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["width", "1080px", "controls", "", "autoplay", ""], ["videoPlayer", ""]],
  template: function VideoStreamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "video", 0, 1);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6020:
/*!***************************************!*\
  !*** ./src/app/shared/core.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




class CoreModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 9288:
/*!************************************************!*\
  !*** ./src/app/shared/services/app.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class AppService {
  constructor(http) {
    this.http = http;
  }
  getFiles() {
    return this.http.get(`api/data/videoslist`);
  }
  uploadFile(data) {
    return this.http.post("api/data/video/upload", data, {
      reportProgress: true,
      observe: 'events'
    });
  }
  getFile(id) {
    return this.http.get(`api/data/video/stream/${id}`);
  }
  getFileViaSocket(id) {
    return this.http.get(`api/data/video/socket/stream/${id}`);
  }
}
AppService.ɵfac = function AppService_Factory(t) {
  return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AppService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AppService,
  factory: AppService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1769:
/*!*************************************************!*\
  !*** ./src/app/utils/upload-file-validators.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requiredFileType": () => (/* binding */ requiredFileType)
/* harmony export */ });
function requiredFileType(types) {
  return function (control) {
    const file = control.value;
    let isValid = false;
    if (file) {
      const temp = file.name.split('.');
      const extension = temp[temp.length - 1].toLowerCase();
      types.forEach(type => {
        if (type.toLowerCase() == extension.toLowerCase()) {
          isValid = true;
        }
      });
      if (!isValid) {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  };
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map