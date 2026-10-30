(() => {
  if (document.getElementById("prototype-switcher")) return;

  const style = document.createElement("style");
  style.textContent = `
    #prototype-switcher {
      position: fixed;
      z-index: 20;
      top: 24px;
      left: max(20px, calc(50vw - 470px));
      width: 196px;
      display: none;
      padding: 14px;
      border: 1px solid #dce4ee;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 10px 26px rgba(24, 51, 88, .08);
      font-family: "HYQiHei-55S", "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    #prototype-switcher h2 {
      margin: 0 0 8px;
      color: #8b97a8;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 1px;
    }
    #prototype-switcher .prototype-group {
      display: block;
      padding: 10px 11px 5px;
      color: #8b97a8;
      font-size: 11px;
    }
    #prototype-switcher a {
      position: relative;
      min-height: 38px;
      display: flex;
      align-items: center;
      padding: 0 11px;
      border-radius: 7px;
      color: #627088;
      font-size: 13px;
      text-decoration: none;
    }
    #prototype-switcher a:hover {
      color: #2f73dc;
      background: #fbfcff;
    }
    #prototype-switcher a.active {
      color: #2f73dc;
      background: #e8f2ff;
      font-weight: 500;
      box-shadow: inset 3px 0 0 #2f73dc;
    }
    @media (min-width: 900px) {
      #prototype-switcher { display: block; }
    }
  `;
  document.head.append(style);

  const page = location.pathname.split("/").pop();
  const params = new URLSearchParams(location.search);
  const parentScenario = params.get("disabled") === "1" ? "disabled"
    : params.get("start") === "new" ? "new"
    : params.get("start") === "duplicate" ? "duplicate"
    : params.has("amount") ? "fixed"
    : params.get("students") === "single" ? "single"
    : "multiple";
  const active = page === "mobile.html" ? "teacher" : parentScenario;

  const nav = document.createElement("aside");
  nav.id = "prototype-switcher";
  nav.setAttribute("aria-label", "原型页面快速切换");
  nav.innerHTML = `
    <h2>原型快速切换</h2>
    <a href="mobile.html" data-page="teacher">老师手机端</a>
    <span class="prototype-group">家长端</span>
    <a href="parent.html" data-page="multiple">多学员选择</a>
    <a href="parent.html?students=single" data-page="single">单学员确认</a>
    <a href="parent.html?amount=11" data-page="fixed">固定金额交费</a>
    <a href="parent.html?start=new" data-page="new">首次注册</a>
    <a href="parent.html?start=duplicate" data-page="duplicate">重复学员确认</a>
    <a href="parent.html?disabled=1" data-page="disabled">二维码停用</a>
  `;
  nav.querySelector(`[data-page="${active}"]`)?.classList.add("active");
  document.body.append(nav);
})();
