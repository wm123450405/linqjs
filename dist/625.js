"use strict";(self.webpackChunklinq_js_docs=self.webpackChunklinq_js_docs||[]).push([[625],{30625:(a,t,s)=>{s.r(t),s.d(t,{default:()=>l});var e=s(45491);const n={data:()=>({languages:[]}),mounted(){this.getLanguages().then((a=>{this.languages=a}))},computed:{language(){return e.singleOrDefault(this.languages,{code:"zh-cn"},(a=>a.code===this.lang))},path(){return this.$route.path.replace(new RegExp(`^/${this.lang}(/${this.version})?/?`,"ig"),"")}},methods:{}};const l=(0,s(51900).Z)(n,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("nav",{staticClass:"container-fluid"},[a._m(0),a._v(" "),s("div",{staticClass:"collapse navbar-collapse navbar-collapsable"},[s("ul",{staticClass:"nav navbar-nav"},[s("li",{staticClass:"dropdown",attrs:{role:"presentation"}},[s("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\n\t\t\t\t\t"+a._s(a.language.name)+" "),s("span",{staticClass:"caret"})]),a._v(" "),s("ul",{staticClass:"dropdown-menu"},a._l(a.languages,(function(t){return a.lang!==t.code?s("li",[s("router-link",{attrs:{replace:!0,to:"/"+t.code+"/"+(a.version!==a.lastest?a.version+"/":"")+a.path+a.$route.hash}},[a._v(a._s(t.name))])],1):a._e()})),0)])]),a._v(" "),s("ul",{staticClass:"nav navbar-nav"},[s("li",{staticClass:"dropdown",attrs:{role:"presentation"}},[s("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\n\t\t\t\t\t"+a._s(a.version)+" "),s("span",{staticClass:"caret"})]),a._v(" "),s("ul",{staticClass:"dropdown-menu"},a._l(a.versions,(function(t){return t!==a.version?s("li",[s("router-link",{attrs:{replace:!0,to:"/"+a.lang+"/"+(t!==a.lastest?t+"/":"")+a.path+a.$route.hash}},[a._v(a._s(t))])],1):a._e()})),0)])])])])}),[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"navbar-header"},[s("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapsable","aria-expanded":"false"}},[s("span",{staticClass:"sr-only"},[a._v("Toggle navigation")]),a._v(" "),s("span",{staticClass:"icon-bar"}),a._v(" "),s("span",{staticClass:"icon-bar"}),a._v(" "),s("span",{staticClass:"icon-bar"})]),a._v(" "),s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a._v("LinqJS")])])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0UsWUFBWSxXQUFXLENBQUNOLEVBQUlRLEdBQUcsdUJBQXVCUixFQUFJUSxHQUFHLEtBQUtKLEVBQUcsT0FBTyxDQUFDRSxZQUFZLGFBQWFOLEVBQUlRLEdBQUcsS0FBS0osRUFBRyxPQUFPLENBQUNFLFlBQVksYUFBYU4sRUFBSVEsR0FBRyxLQUFLSixFQUFHLE9BQU8sQ0FBQ0UsWUFBWSxlQUFlTixFQUFJUSxHQUFHLEtBQUtKLEVBQUcsSUFBSSxDQUFDRSxZQUFZLGVBQWVHLE1BQU0sQ0FBQyxLQUFPLE1BQU0sQ0FBQ1QsRUFBSVEsR0FBRyxpQkdVaGxCLEVBQ0EsS0FDQSxLQUNBLE1BSThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL25hdi52dWU/NjcwMyIsIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL25hdi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL25hdi52dWU/YTE5YyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbmF2LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbmF2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXItZmx1aWRcIn0sW192bS5fbSgwKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBuYXZiYXItY29sbGFwc2FibGVcIn0sW19jKCd1bCcse3N0YXRpY0NsYXNzOlwibmF2IG5hdmJhci1uYXZcIn0sW19jKCdsaScse3N0YXRpY0NsYXNzOlwiZHJvcGRvd25cIixhdHRyczp7XCJyb2xlXCI6XCJwcmVzZW50YXRpb25cIn19LFtfYygnYScse3N0YXRpY0NsYXNzOlwiZHJvcGRvd24tdG9nZ2xlXCIsYXR0cnM6e1wiZGF0YS10b2dnbGVcIjpcImRyb3Bkb3duXCIsXCJocmVmXCI6XCIjXCIsXCJyb2xlXCI6XCJidXR0b25cIixcImFyaWEtaGFzcG9wdXBcIjpcInRydWVcIixcImFyaWEtZXhwYW5kZWRcIjpcImZhbHNlXCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5sYW5ndWFnZS5uYW1lKStcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNhcmV0XCJ9KV0pLF92bS5fdihcIiBcIiksX2MoJ3VsJyx7c3RhdGljQ2xhc3M6XCJkcm9wZG93bi1tZW51XCJ9LF92bS5fbCgoX3ZtLmxhbmd1YWdlcyksZnVuY3Rpb24obGFuZ3VhZ2Upe3JldHVybiAoX3ZtLmxhbmcgIT09IGxhbmd1YWdlLmNvZGUpP19jKCdsaScsW19jKCdyb3V0ZXItbGluaycse2F0dHJzOntcInJlcGxhY2VcIjp0cnVlLFwidG9cIjooXCIvXCIgKyAobGFuZ3VhZ2UuY29kZSkgKyBcIi9cIiArIChfdm0udmVyc2lvbiAhPT0gX3ZtLmxhc3Rlc3QgPyBfdm0udmVyc2lvbiArICcvJyA6ICcnKSArIF92bS5wYXRoICsgKF92bS4kcm91dGUuaGFzaCkpfX0sW192bS5fdihfdm0uX3MobGFuZ3VhZ2UubmFtZSkpXSldLDEpOl92bS5fZSgpfSksMCldKV0pLF92bS5fdihcIiBcIiksX2MoJ3VsJyx7c3RhdGljQ2xhc3M6XCJuYXYgbmF2YmFyLW5hdlwifSxbX2MoJ2xpJyx7c3RhdGljQ2xhc3M6XCJkcm9wZG93blwiLGF0dHJzOntcInJvbGVcIjpcInByZXNlbnRhdGlvblwifX0sW19jKCdhJyx7c3RhdGljQ2xhc3M6XCJkcm9wZG93bi10b2dnbGVcIixhdHRyczp7XCJkYXRhLXRvZ2dsZVwiOlwiZHJvcGRvd25cIixcImhyZWZcIjpcIiNcIixcInJvbGVcIjpcImJ1dHRvblwiLFwiYXJpYS1oYXNwb3B1cFwiOlwidHJ1ZVwiLFwiYXJpYS1leHBhbmRlZFwiOlwiZmFsc2VcIn19LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLnZlcnNpb24pK1wiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY2FyZXRcIn0pXSksX3ZtLl92KFwiIFwiKSxfYygndWwnLHtzdGF0aWNDbGFzczpcImRyb3Bkb3duLW1lbnVcIn0sX3ZtLl9sKChfdm0udmVyc2lvbnMpLGZ1bmN0aW9uKHZlcil7cmV0dXJuICh2ZXIgIT09IF92bS52ZXJzaW9uKT9fYygnbGknLFtfYygncm91dGVyLWxpbmsnLHthdHRyczp7XCJyZXBsYWNlXCI6dHJ1ZSxcInRvXCI6KFwiL1wiICsgX3ZtLmxhbmcgKyBcIi9cIiArICh2ZXIgIT09IF92bS5sYXN0ZXN0ID8gdmVyICsgJy8nIDogJycpICsgX3ZtLnBhdGggKyAoX3ZtLiRyb3V0ZS5oYXNoKSl9fSxbX3ZtLl92KF92bS5fcyh2ZXIpKV0pXSwxKTpfdm0uX2UoKX0pLDApXSldKV0pXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW2Z1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibmF2YmFyLWhlYWRlclwifSxbX2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIixcImRhdGEtdG9nZ2xlXCI6XCJjb2xsYXBzZVwiLFwiZGF0YS10YXJnZXRcIjpcIi5uYXZiYXItY29sbGFwc2FibGVcIixcImFyaWEtZXhwYW5kZWRcIjpcImZhbHNlXCJ9fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInNyLW9ubHlcIn0sW192bS5fdihcIlRvZ2dsZSBuYXZpZ2F0aW9uXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiaWNvbi1iYXJcIn0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImljb24tYmFyXCJ9KSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJpY29uLWJhclwifSldKSxfdm0uX3YoXCIgXCIpLF9jKCdhJyx7c3RhdGljQ2xhc3M6XCJuYXZiYXItYnJhbmRcIixhdHRyczp7XCJocmVmXCI6XCIjXCJ9fSxbX3ZtLl92KFwiTGlucUpTXCIpXSldKX1dXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XHJcblx0PG5hdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2FibGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5MaW5xSlM8L2E+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNhYmxlXCI+XHJcblx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XHJcblx0XHRcdFx0PGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzcz1cImRyb3Bkb3duXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG5cdFx0XHRcdFx0XHR7eyBsYW5ndWFnZS5uYW1lIH19IDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcblx0XHRcdFx0XHRcdDxsaSB2LWZvcj1cImxhbmd1YWdlIGluIGxhbmd1YWdlc1wiIHYtaWY9XCJsYW5nICE9PSBsYW5ndWFnZS5jb2RlXCI+PHJvdXRlci1saW5rIDpyZXBsYWNlPVwidHJ1ZVwiIDp0bz1cImAvJHsgbGFuZ3VhZ2UuY29kZSB9LyR7IHZlcnNpb24gIT09IGxhc3Rlc3QgPyB2ZXJzaW9uICsgJy8nIDogJycgfSR7IHBhdGggfSR7ICRyb3V0ZS5oYXNoIH1gXCI+e3sgbGFuZ3VhZ2UubmFtZSB9fTwvcm91dGVyLWxpbms+PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuXHRcdFx0XHQ8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcblx0XHRcdFx0XHRcdHt7IHZlcnNpb24gfX0gPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuXHRcdFx0XHRcdFx0PGxpIHYtZm9yPVwidmVyIGluIHZlcnNpb25zXCIgdi1pZj1cInZlciAhPT0gdmVyc2lvblwiPjxyb3V0ZXItbGluayA6cmVwbGFjZT1cInRydWVcIiA6dG89XCJgLyR7IGxhbmcgfS8keyB2ZXIgIT09IGxhc3Rlc3QgPyB2ZXIgKyAnLycgOiAnJyB9JHsgcGF0aCB9JHsgJHJvdXRlLmhhc2ggfWBcIj57eyB2ZXIgfX08L3JvdXRlci1saW5rPjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bGFuZ3VhZ2VzOiBbXVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0TGFuZ3VhZ2VzKCkudGhlbihsYW5ndWFnZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRsYW5ndWFnZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gRW51bWVyYWJsZS5zaW5nbGVPckRlZmF1bHQodGhpcy5sYW5ndWFnZXMsIHsgY29kZTogJ3poLWNuJyB9LCBsYW5ndWFnZSA9PiBsYW5ndWFnZS5jb2RlID09PSB0aGlzLmxhbmcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXRoKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLiRyb3V0ZS5wYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXi8keyB0aGlzLmxhbmcgfSgvJHsgdGhpcy52ZXJzaW9uIH0pPy8/YCwgJ2lnJyksICcnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9uYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYTU4Mjk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJuYW1lcyI6WyJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9tIiwiX3YiLCJhdHRycyIsIl9zIiwibGFuZ3VhZ2UiLCJuYW1lIiwiX2wiLCJsYW5nIiwiY29kZSIsInZlcnNpb24iLCJsYXN0ZXN0IiwicGF0aCIsIiRyb3V0ZSIsIl9lIiwidmVyIl0sInNvdXJjZVJvb3QiOiIifQ==