export default function fixStylesheetsOrder(isRTL) {
  if (isRTL) {
    let rtlCss = document.querySelector('link[href="/assets/css/rtl_style.css"]');
    let mainCss = document.querySelector('link[href="/assets/css/style.css"]');

    if (!rtlCss || !mainCss) return;

    if (mainCss.nextElementSibling.href?.includes('/assets/css/rtl_style.css')) return;

    // Insert main css before rtl css
    document.head.appendChild(mainCss);
    document.head.appendChild(rtlCss);
  } else {
    let mainCss = document.querySelector('link[href="/assets/css/style.css"]');

    if (!mainCss) return;
    // Insert main css after bootstrap css
    setTimeout(() => {
      document.head.append(mainCss);
    }, 10);
  }
}