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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/core.module */ 6020);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _components_all_videos_list_all_videos_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/all-videos-list/all-videos-list.component */ 2089);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);
/* harmony import */ var _components_new_video_new_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-video/new-video.component */ 2113);
/* harmony import */ var _components_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/video-stream/video-stream.component */ 895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);














































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _shared_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__.MatTabsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__.MatButtonToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__.MatPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_41__.CdkTableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__.MatCheckboxModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_all_videos_list_all_videos_list_component__WEBPACK_IMPORTED_MODULE_4__.AllVideosListComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _components_new_video_new_video_component__WEBPACK_IMPORTED_MODULE_6__.NewVideoComponent, _components_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_7__.VideoStreamComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _shared_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__.MatTabsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__.MatButtonToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__.MatPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_41__.CdkTableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__.MatCheckboxModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_44__.AsyncPipe, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatNativeDateModule]
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../video-stream/video-stream.component */ 895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);








function AllVideosListComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r11 + 1, " ");
  }
}
function AllVideosListComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Video Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function AllVideosListComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13.url, " ");
  }
}
function AllVideosListComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15)(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllVideosListComponent_td_18_Template_mat_icon_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const element_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.selectedWeek(element_r14.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "smart_display");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AllVideosListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 17);
  }
}
function AllVideosListComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 18);
  }
}
class AllVideosListComponent {
  constructor(appService, router, dialog) {
    this.appService = appService;
    this.router = router;
    this.dialog = dialog;
    this.stickyHeader = true;
    this.displayedColumns = ['position', 'name', 'url', 'action'];
    this.data = [{
      'video_name': "Video 1",
      'video_description': 'Jokes Video',
      'created_at': "2023/03/12",
      'created_by': "Meghanatha K L"
    }];
  }
  ngOnInit() {
    this.appService.getFiles().subscribe(response => {
      console.log('response receved is ', response);
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(response);
    });
    //this.dataSource = this.data
  }

  edit(id) {
    this.router.navigateByUrl(`edit/alert/${id}`).then(() => {});
  }
  selectedWeek(fileName) {
    const selectedFileDailog = this.dialog.open(_video_stream_video_stream_component__WEBPACK_IMPORTED_MODULE_0__.VideoStreamComponent, {
      data: {
        fileName: fileName
      }
    });
    selectedFileDailog.afterClosed().subscribe(result => {});
  }
}
AllVideosListComponent.ɵfac = function AllVideosListComponent_Factory(t) {
  return new (t || AllVideosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};
AllVideosListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AllVideosListComponent,
  selectors: [["app-all-videos-list"]],
  decls: 21,
  vars: 4,
  consts: [[1, "main-box"], [1, "app-all-datasets"], [1, "header"], ["routerLink", "/new-video", 1, "new-btn"], [2, "overflow", "auto"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "url"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "action", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function AllVideosListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " + New Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "section", 4)(6, "table", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AllVideosListComponent_th_8_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AllVideosListComponent_td_9_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AllVideosListComponent_th_11_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AllVideosListComponent_td_12_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AllVideosListComponent_th_14_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AllVideosListComponent_td_15_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AllVideosListComponent_th_17_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AllVideosListComponent_td_18_Template, 4, 0, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AllVideosListComponent_tr_19_Template, 1, 0, "tr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AllVideosListComponent_tr_20_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", ctx.stickyHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
  styles: [".main-box[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-top: -36px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 10px;\n}\n\n.new-btn[_ngcontent-%COMP%] {\n  color: rgba(16, 91, 204, 0.7803921569);\n  background-color: white;\n  border: 1px solid rgba(16, 91, 204, 0.7803921569);\n  height: 35px;\n  width: 95px;\n  cursor: pointer;\n  border-radius: 5%;\n}\n\n.app-all-datasets[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 64px;\n  padding-top: 146px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: large;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  padding-right: 6px 0;\n  height: 40px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-style: bold;\n  height: 45px;\n  background-color: #2b457f;\n  color: white;\n}\n\n.yes-indicator[_ngcontent-%COMP%] {\n  color: white;\n  background-color: green;\n  padding: 4px;\n  width: 38px;\n  border-radius: 9%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.no-indicator[_ngcontent-%COMP%] {\n  color: white;\n  background-color: red;\n  padding: 4px;\n  width: 38px;\n  border-radius: 9%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.action[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbGwtdmlkZW9zLWxpc3QvYWxsLXZpZGVvcy1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vR2l0aHViJTIwUmVwb3MvTWVhbi1TdGFjay1UYXNrL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvYWxsLXZpZGVvcy1saXN0L2FsbC12aWRlb3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdFO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNETjs7QURNQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNIRiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0zNnB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5uZXctYnRuIHtcbiAgY29sb3I6IHJnYmEoMTYsIDkxLCAyMDQsIDAuNzgwMzkyMTU2OSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCA5MSwgMjA0LCAwLjc4MDM5MjE1NjkpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA5NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uYXBwLWFsbC1kYXRhc2V0cyB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNjRweDtcbiAgcGFkZGluZy10b3A6IDE0NnB4O1xufVxuXG50YWJsZSB7XG4gIC8vbWF4LXdpZHRoOiAwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgLy9ib3JkZXI6IDJweCBzb2xpZCByZ2IoMjI2LCAyMTgsIDIxOCk7XG5cbiAgdHIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweCAwO1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIHRoIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0NTdmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4ueWVzLWluZGljYXRvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDklO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm5vLWluZGljYXRvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiA5JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5hY3Rpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIubWFpbi1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMzZweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubmV3LWJ0biB7XG4gIGNvbG9yOiByZ2JhKDE2LCA5MSwgMjA0LCAwLjc4MDM5MjE1NjkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgOTEsIDIwNCwgMC43ODAzOTIxNTY5KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogOTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmFwcC1hbGwtZGF0YXNldHMge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDY0cHg7XG4gIHBhZGRpbmctdG9wOiAxNDZweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbnRhYmxlIHRyIHtcbiAgcGFkZGluZy1yaWdodDogNnB4IDA7XG4gIGhlaWdodDogNDBweDtcbn1cbnRhYmxlIHRyIHRoIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBib2xkO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjQ1N2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnllcy1pbmRpY2F0b3Ige1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiA5JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5uby1pbmRpY2F0b3Ige1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNHB4O1xuICB3aWR0aDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogOSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYWN0aW9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony export */   "NewVideoComponent": () => (/* binding */ NewVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




class NewVideoComponent {
  constructor(appService, router) {
    this.appService = appService;
    this.router = router;
  }
  ngOnInit() {}
  fileChange(element) {
    this.uploadedFile = element.target.files;
    console.log(this.uploadedFile);
  }
  upload() {
    let formData = new FormData();
    formData.append("file", this.uploadedFile[0]);
    console.log(formData);
    this.appService.uploadFile(formData).subscribe(response => {
      console.log('response receved is ', response);
      this.router.navigateByUrl('videoslist').then(() => {});
    });
  }
}
NewVideoComponent.ɵfac = function NewVideoComponent_Factory(t) {
  return new (t || NewVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
NewVideoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NewVideoComponent,
  selectors: [["app-new-video"]],
  decls: 21,
  vars: 0,
  consts: [[1, "mainContainer"], [1, "content"], [1, "header"], [1, "row", "margin25"], [1, "col-md-4"], [1, "input-group"], [1, "input-group-prepend"], ["id", "btnUpload", 1, "input-group-text", "upload", 3, "click"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"], [3, "click"]],
  template: function NewVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Angular File Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewVideoComponent_Template_span_click_10_listener() {
        return ctx.upload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "form")(14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewVideoComponent_Template_input_change_14_listener($event) {
        return ctx.fileChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Choose file");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewVideoComponent_Template_button_click_18_listener() {
        return ctx.upload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: [".header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: serif;\n  font-size: 38px;\n  font-family: \"Times New Roman\";\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 100px;\n}\n\n.margin25[_ngcontent-%COMP%] {\n  margin: 25px;\n}\n\n.upload[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXctdmlkZW8vbmV3LXZpZGVvLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vR2l0aHViJTIwUmVwb3MvTWVhbi1TdGFjay1UYXNrL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbmV3LXZpZGVvL25ldy12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyIGgxe1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xufVxuLmNvbnRlbnR7XG4gICAgbWFyZ2luOiAxMDBweDtcbn1cbi5tYXJnaW4yNXtcbiAgICBtYXJnaW46IDI1cHg7XG59XG4udXBsb2Fke1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4iLCIuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMTAwcHg7XG59XG5cbi5tYXJnaW4yNSB7XG4gIG1hcmdpbjogMjVweDtcbn1cblxuLnVwbG9hZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

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

/***/ 895:
/*!*******************************************************************!*\
  !*** ./src/app/components/video-stream/video-stream.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoStreamComponent": () => (/* binding */ VideoStreamComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 4769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 3460);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app.service */ 9288);





const _c0 = ["videoPlayer"];
class VideoStreamComponent {
  constructor(data, socketService, appService) {
    this.data = data;
    this.socketService = socketService;
    this.appService = appService;
    this.showVideoPlayer = false;
    //this.fileName = `api/data/video/stream/${data.fileName}`
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
  return new (t || VideoStreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService));
};
VideoStreamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VideoStreamComponent,
  selectors: [["app-video-stream"]],
  viewQuery: function VideoStreamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.videoElementRef = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["width", "1080px", "controls", "", "autoplay", ""], ["videoPlayer", ""]],
  template: function VideoStreamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "video", 0, 1);
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
    return this.http.post("api/data/video/upload", data);
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

/***/ 3460:
/*!***************************************************!*\
  !*** ./src/app/shared/services/socket.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 4769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SocketService {
  constructor() {
    //Initialize Socket
    this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(window.origin, {
      'reconnectionDelay': 1000,
      'reconnectionAttempts': 15,
      'transports': ['websocket', 'polling']
    });
    console.log(window.origin);
    this.socket.on("disconnect", data => {
      console.log(data);
    });
    this.socket.on("connect", function () {
      console.log("connected");
    });
    this.socket.on("connect_error", data => {
      console.log(data);
    });
  }
  socketInstance(room) {
    return (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(room, {
      transports: ['websocket', 'polling']
    });
  }
  initializeVideoRoom() {
    return this.socketInstance("/video");
  }
  initializeProductRoom() {
    return this.socketInstance("/product");
  }
  initializeMagicMirrorRoom() {
    return this.socketInstance("/magic-mirror");
  }
  initializCartRoom() {
    return this.socketInstance("/cart");
  }
}
SocketService.ɵfac = function SocketService_Factory(t) {
  return new (t || SocketService)();
};
SocketService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SocketService,
  factory: SocketService.ɵfac,
  providedIn: 'root'
});

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