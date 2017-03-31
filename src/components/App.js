import 'ASSET/scss/framework.scss';
import React from 'react';
import Header from 'COMPONENT/common/Header';


let DevTools;
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
    // 组件形式的 Redux DevTools
    DevTools = require('COMPONENT/DevTools').default;
}
const App = ({children, location}) => (
    <div>
        <Header />
        {children}
        { DevTools && <DevTools /> }
    </div>
);

export default App;
