import './style.css'
import './index.css'
import './user.css'
import './psyc.css'


import help from "./app";
import "./app"

import Alpine from "alpinejs";

window.Alpine = Alpine;
//  Alpine.plugin(persist);
 Alpine.data('info', help)

Alpine.start();