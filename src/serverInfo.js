var serverString;
process.env.NODE_ENV === 'development' ? serverString="http://vertical-edition" : serverString = window.location.protocol+"//"+window.location.host;
export {serverString}
