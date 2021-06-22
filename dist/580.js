(self.webpackChunklinq_js_docs=self.webpackChunklinq_js_docs||[]).push([[580],{73580:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const n={data:()=>({data:{},examples:{},caption:{}}),computed:{code(){return this.$route.params.code}},mounted(){this.getJson("caption",(()=>`guides/${this.code}`),(()=>`examples/${this.code}`)).then((([t,e,s])=>{this.caption=t,this.data=e,this.examples=s,this.highlight()}))},methods:{tryCode(t){this.$parent.$parent.tryCode(t)}}};const a=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("content-template",{attrs:{title:t.data.title}},t._l(t.data.contents,(function(e,n){return t.isNewer(e.since)&&t.isOlder(e.deprecated)?s("div",[s("h4",[t._v(t._s(n+1)+". "+t._s(t.capitalize(e.title)))]),t._v(" "),t._l(t.historys(e.descriptions),(function(e){return t.isNewer(e.since)&&t.isOlder(e.deprecated)?s("div",{staticClass:"indent"},["description"===e.type?s("p",{staticClass:"text-success",domProps:{innerHTML:t._s(t.capitalize(e.content))}}):t._e(),t._v(" "),"remark"===e.type?s("p",{staticClass:"text-info",domProps:{innerHTML:t._s(t.capitalize(e.content))}}):t._e(),t._v(" "),"warning"===e.type?s("p",{staticClass:"text-warning",domProps:{innerHTML:t._s(t.capitalize(e.content))}}):t._e(),t._v(" "),"function"===e.type?s("p",[s("code-type-declare",{attrs:{type:e.type,declare:e.content}})],1):t._e(),t._v(" "),"example"!==e.type||"javascript"!==e.content.type||e.content.notTry?t._e():s("p",{staticClass:"btn btn-success btn-sm",on:{click:function(s){return t.tryCode(e.content.tryHref&&t.examples[e.content.tryHref]||e.content.tryScript||e.content.href&&t.examples[e.content.href]||e.content.script)}}},[s("i",{staticClass:"fa fa-fw fa-play"}),t._v(" "+t._s(t.caption.try))]),t._v(" "),"example"===e.type?s("pre",[s("code",{class:e.content.type,domProps:{innerHTML:t._s(t.examples[e.content.href]||e.content.script)}})]):t._e(),t._v(" "),"see"===e.type?s("div",[t._v(t._s(t.caption.see)+" "),s("i",{staticClass:"fa fa-fw fa-at"}),t._v(" "),s("see-link",{attrs:{see:e.content}})],1):t._e()]):t._e()}))],2):t._e()})),0)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL2d1aWRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ3VpZGUudnVlP2U5ZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2d1aWRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ3VpZGUudnVlPzg4MGMiXSwibmFtZXMiOlsiZGF0YSIsImV4YW1wbGVzIiwiY2FwdGlvbiIsImNvbXB1dGVkIiwidGhpcyIsIiRyb3V0ZSIsInBhcmFtcyIsImNvZGUiLCJnZXRKc29uIiwidGhlbiIsImhpZ2hsaWdodCIsIm1ldGhvZHMiLCIkcGFyZW50IiwidHJ5Q29kZSIsIl92bSIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJ0aXRsZSIsIl9sIiwiY29udGVudCIsImluZGV4IiwiaXNOZXdlciIsInNpbmNlIiwiaXNPbGRlciIsImRlcHJlY2F0ZWQiLCJfdiIsIl9zIiwiY2FwaXRhbGl6ZSIsImhpc3RvcnlzIiwiZGVzY3JpcHRpb25zIiwiZGVzY3JpcHRpb24iLCJzdGF0aWNDbGFzcyIsInR5cGUiLCJkb21Qcm9wcyIsIl9lIiwibm90VHJ5Iiwib24iLCIkZXZlbnQiLCJ0cnlIcmVmIiwidHJ5U2NyaXB0IiwiaHJlZiIsInNjcmlwdCIsInRyeSIsImNsYXNzIiwic2VlIl0sIm1hcHBpbmdzIjoiMElBaUJJLE1DakJxSCxFRGlCckgsQ0FDQ0EsS0FBSSxLQUNJLENBQ1RBLEtBQU0sR0FDTkMsU0FBVSxHQUNFQyxRQUFTLEtBR3BCQyxTQUFVLENBQ1osT0FDSSxPQUFPQyxLQUFLQyxPQUFPQyxPQUFPQyxPQUd6QixVQUNGSCxLQUFLSSxRQUFRLFdBQVcsSUFBTSxVQUFXSixLQUFLRyxTQUFTLElBQU0sWUFBYUgsS0FBS0csU0FBU0UsTUFBSyxFQUFFUCxFQUFTRixFQUFNQyxNQUNwR0csS0FBS0YsUUFBVUEsRUFDZkUsS0FBS0osS0FBT0EsRUFDWkksS0FBS0gsU0FBV0EsRUFDaEJH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QUFHLElBQUksQ0FBQ2lCLFlBQVksbUJBQW1CcEIsRUFBSWMsR0FBRyxLQUFLWCxFQUFHLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDLElBQU1jLEVBQVlYLFlBQVksR0FBR1IsRUFBSXVCLE9BQU92QixFQUFJdUIsU0FBUSxHQUFHdkIsRUFBSXVCLFFBQU8sS0FDcmpFLElEVXBCLEVBQ0EsS0FDQSxLQUNBLE0iLCJmaWxlIjoiNTgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGNvbnRlbnQtdGVtcGxhdGUgOnRpdGxlPVwiZGF0YS50aXRsZVwiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCIoY29udGVudCwgaW5kZXgpIGluIGRhdGEuY29udGVudHNcIiB2LWlmPVwiaXNOZXdlcihjb250ZW50LnNpbmNlKSAmJiBpc09sZGVyKGNvbnRlbnQuZGVwcmVjYXRlZClcIj5cclxuICAgICAgICAgICAgPGg0Pnt7IGluZGV4ICsgMSB9fS4ge3sgY2FwaXRhbGl6ZShjb250ZW50LnRpdGxlKSB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJkZXNjcmlwdGlvbiBpbiBoaXN0b3J5cyhjb250ZW50LmRlc2NyaXB0aW9ucylcIiBjbGFzcz1cImluZGVudFwiIHYtaWY9XCJpc05ld2VyKGRlc2NyaXB0aW9uLnNpbmNlKSAmJiBpc09sZGVyKGRlc2NyaXB0aW9uLmRlcHJlY2F0ZWQpXCI+XHJcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Rlc2NyaXB0aW9uJ1wiIHYtaHRtbD1cImNhcGl0YWxpemUoZGVzY3JpcHRpb24uY29udGVudClcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJkZXNjcmlwdGlvbi50eXBlID09PSAncmVtYXJrJ1wiIHYtaHRtbD1cImNhcGl0YWxpemUoZGVzY3JpcHRpb24uY29udGVudClcIiBjbGFzcz1cInRleHQtaW5mb1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJkZXNjcmlwdGlvbi50eXBlID09PSAnd2FybmluZydcIiB2LWh0bWw9XCJjYXBpdGFsaXplKGRlc2NyaXB0aW9uLmNvbnRlbnQpXCIgY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Z1bmN0aW9uJ1wiPjxjb2RlLXR5cGUtZGVjbGFyZSA6dHlwZT1cImRlc2NyaXB0aW9uLnR5cGVcIiA6ZGVjbGFyZT1cImRlc2NyaXB0aW9uLmNvbnRlbnRcIj48L2NvZGUtdHlwZS1kZWNsYXJlPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJkZXNjcmlwdGlvbi50eXBlID09PSAnZXhhbXBsZScgJiYgZGVzY3JpcHRpb24uY29udGVudC50eXBlID09PSAnamF2YXNjcmlwdCcgJiYgIWRlc2NyaXB0aW9uLmNvbnRlbnQubm90VHJ5XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgQGNsaWNrPVwidHJ5Q29kZShkZXNjcmlwdGlvbi5jb250ZW50LnRyeUhyZWYgJiYgZXhhbXBsZXNbZGVzY3JpcHRpb24uY29udGVudC50cnlIcmVmXSB8fCBkZXNjcmlwdGlvbi5jb250ZW50LnRyeVNjcmlwdCB8fCBkZXNjcmlwdGlvbi5jb250ZW50LmhyZWYgJiYgZXhhbXBsZXNbZGVzY3JpcHRpb24uY29udGVudC5ocmVmXSB8fCBkZXNjcmlwdGlvbi5jb250ZW50LnNjcmlwdClcIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLXBsYXlcIj48L2k+IHt7IGNhcHRpb24udHJ5IH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHByZSB2LWlmPVwiZGVzY3JpcHRpb24udHlwZSA9PT0gJ2V4YW1wbGUnXCI+PGNvZGUgOmNsYXNzPVwiZGVzY3JpcHRpb24uY29udGVudC50eXBlXCIgdi1odG1sPVwiZXhhbXBsZXNbZGVzY3JpcHRpb24uY29udGVudC5ocmVmXSB8fCBkZXNjcmlwdGlvbi5jb250ZW50LnNjcmlwdFwiPjwvY29kZT48L3ByZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRlc2NyaXB0aW9uLnR5cGUgPT09ICdzZWUnXCI+e3sgY2FwdGlvbi5zZWUgfX0gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1hdFwiPjwvaT4gPHNlZS1saW5rIDpzZWU9XCJkZXNjcmlwdGlvbi5jb250ZW50XCI+PC9zZWUtbGluaz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2NvbnRlbnQtdGVtcGxhdGU+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcdGRhdGEoKSB7XHJcbiAgICBcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IH0sXHJcblx0XHRcdFx0ZXhhbXBsZXM6IHsgfSxcclxuICAgICAgICAgICAgICAgIGNhcHRpb246IHsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Y29kZSgpIHtcclxuICAgIFx0XHRcdHJldHVybiB0aGlzLiRyb3V0ZS5wYXJhbXMuY29kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgIFx0XHR0aGlzLmdldEpzb24oJ2NhcHRpb24nLCAoKSA9PiBgZ3VpZGVzLyR7IHRoaXMuY29kZSB9YCwgKCkgPT4gYGV4YW1wbGVzLyR7IHRoaXMuY29kZSB9YCkudGhlbigoW2NhcHRpb24sIGRhdGEsIGV4YW1wbGVzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0aW9uID0gY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4YW1wbGVzID0gZXhhbXBsZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgIFx0ICAgIHRyeUNvZGUoY29kZSkge1xyXG4gICAgXHQgICAgICAgIHRoaXMuJHBhcmVudC4kcGFyZW50LnRyeUNvZGUoY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ndWlkZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ndWlkZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2d1aWRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTdhZTA4YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ndWlkZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2d1aWRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2NvbnRlbnQtdGVtcGxhdGUnLHthdHRyczp7XCJ0aXRsZVwiOl92bS5kYXRhLnRpdGxlfX0sX3ZtLl9sKChfdm0uZGF0YS5jb250ZW50cyksZnVuY3Rpb24oY29udGVudCxpbmRleCl7cmV0dXJuIChfdm0uaXNOZXdlcihjb250ZW50LnNpbmNlKSAmJiBfdm0uaXNPbGRlcihjb250ZW50LmRlcHJlY2F0ZWQpKT9fYygnZGl2JyxbX2MoJ2g0JyxbX3ZtLl92KF92bS5fcyhpbmRleCArIDEpK1wiLiBcIitfdm0uX3MoX3ZtLmNhcGl0YWxpemUoY29udGVudC50aXRsZSkpKV0pLF92bS5fdihcIiBcIiksX3ZtLl9sKChfdm0uaGlzdG9yeXMoY29udGVudC5kZXNjcmlwdGlvbnMpKSxmdW5jdGlvbihkZXNjcmlwdGlvbil7cmV0dXJuIChfdm0uaXNOZXdlcihkZXNjcmlwdGlvbi5zaW5jZSkgJiYgX3ZtLmlzT2xkZXIoZGVzY3JpcHRpb24uZGVwcmVjYXRlZCkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImluZGVudFwifSxbKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdkZXNjcmlwdGlvbicpP19jKCdwJyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LXN1Y2Nlc3NcIixkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmNhcGl0YWxpemUoZGVzY3JpcHRpb24uY29udGVudCkpfX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdyZW1hcmsnKT9fYygncCcse3N0YXRpY0NsYXNzOlwidGV4dC1pbmZvXCIsZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5jYXBpdGFsaXplKGRlc2NyaXB0aW9uLmNvbnRlbnQpKX19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChkZXNjcmlwdGlvbi50eXBlID09PSAnd2FybmluZycpP19jKCdwJyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LXdhcm5pbmdcIixkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmNhcGl0YWxpemUoZGVzY3JpcHRpb24uY29udGVudCkpfX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdmdW5jdGlvbicpP19jKCdwJyxbX2MoJ2NvZGUtdHlwZS1kZWNsYXJlJyx7YXR0cnM6e1widHlwZVwiOmRlc2NyaXB0aW9uLnR5cGUsXCJkZWNsYXJlXCI6ZGVzY3JpcHRpb24uY29udGVudH19KV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2V4YW1wbGUnICYmIGRlc2NyaXB0aW9uLmNvbnRlbnQudHlwZSA9PT0gJ2phdmFzY3JpcHQnICYmICFkZXNjcmlwdGlvbi5jb250ZW50Lm5vdFRyeSk/X2MoJ3AnLHtzdGF0aWNDbGFzczpcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS50cnlDb2RlKGRlc2NyaXB0aW9uLmNvbnRlbnQudHJ5SHJlZiAmJiBfdm0uZXhhbXBsZXNbZGVzY3JpcHRpb24uY29udGVudC50cnlIcmVmXSB8fCBkZXNjcmlwdGlvbi5jb250ZW50LnRyeVNjcmlwdCB8fCBkZXNjcmlwdGlvbi5jb250ZW50LmhyZWYgJiYgX3ZtLmV4YW1wbGVzW2Rlc2NyaXB0aW9uLmNvbnRlbnQuaHJlZl0gfHwgZGVzY3JpcHRpb24uY29udGVudC5zY3JpcHQpfX19LFtfYygnaScse3N0YXRpY0NsYXNzOlwiZmEgZmEtZncgZmEtcGxheVwifSksX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uY2FwdGlvbi50cnkpKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdleGFtcGxlJyk/X2MoJ3ByZScsW19jKCdjb2RlJyx7Y2xhc3M6ZGVzY3JpcHRpb24uY29udGVudC50eXBlLGRvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uZXhhbXBsZXNbZGVzY3JpcHRpb24uY29udGVudC5ocmVmXSB8fCBkZXNjcmlwdGlvbi5jb250ZW50LnNjcmlwdCl9fSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChkZXNjcmlwdGlvbi50eXBlID09PSAnc2VlJyk/X2MoJ2RpdicsW192bS5fdihfdm0uX3MoX3ZtLmNhcHRpb24uc2VlKStcIiBcIiksX2MoJ2knLHtzdGF0aWNDbGFzczpcImZhIGZhLWZ3IGZhLWF0XCJ9KSxfdm0uX3YoXCIgXCIpLF9jKCdzZWUtbGluaycse2F0dHJzOntcInNlZVwiOmRlc2NyaXB0aW9uLmNvbnRlbnR9fSldLDEpOl92bS5fZSgpXSk6X3ZtLl9lKCl9KV0sMik6X3ZtLl9lKCl9KSwwKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==