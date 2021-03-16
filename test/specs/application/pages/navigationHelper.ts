export class NavigationHelper {
    goToProductComparisonPage() {
        browser.url('/index.php?route=product/compare')
        browser.pause(1000)
    }
}