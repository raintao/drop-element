import Header from './header';
import Footer from './footer';
import Input from './input'


const components = [
    Header,
    Footer,
    Input

]

const version = '1.0.0';
const install = function (Vue, config = {}) {  
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });

    // Vue.$messagebox = Vue.prototype.$messagebox = DropHeader;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    install,
    version,
    Header,
    Footer,
    Input
};

