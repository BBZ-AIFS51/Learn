/* Kern-Registry: wird vor allen Datendateien geladen.
   Datendateien rufen LEARN.module({...}), LEARN.exam({...}) oder LEARN.tool({...}) auf. */
(function () {
  const L = (window.LEARN = window.LEARN || {});
  L.modules = L.modules || [];
  L.exams = L.exams || [];
  L.tools = L.tools || [];
  L.meta = L.meta || {};
  L.module = function (m) { L.modules.push(m); };
  L.exam = function (e) { L.exams.push(e); };
  L.tool = function (t) { L.tools.push(t); };
  L.setMeta = function (m) { Object.assign(L.meta, m); };
})();
