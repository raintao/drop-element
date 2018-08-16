import header from '../packages/header';
import footer from '../packages/footer';


const components = [
    header,
    footer

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

export default {
    install,
    version,
    header,
    footer
};

