import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".r75"), 75)
new RevealOnScroll(document.querySelectorAll(".r60"), 60)
new RevealOnScroll(document.querySelectorAll(".r50"), 50)
new RevealOnScroll(document.querySelectorAll(".r30"), 30)

if (module.hot) {
    module.hot.accept()
}