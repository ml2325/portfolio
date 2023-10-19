const setTheme = (currentTheme)=>{
    console.log(currentTheme);
    console.log(document.styleSheets);

    const selectedCssProps=Array.from(document.styleSheets).reduce((preveStyleSheet,currentStyleSheet)=>(
    preveStyleSheet=[
        ...preveStyleSheet,
        ...Array.from(currentStyleSheet.cssRules).reduce((preveCssRule,currentCssRule)=>{
            preveCssRule=currentCssRule.selectorText===":root"?[
                ...preveCssRule,
                ...Array.from(currentCssRule.style).filter(item=>item.startWith('--selected'))
            ]:preveCssRule;
            return preveCssRule;
        })
    ]
    ),[]);
    
};

export default setTheme;