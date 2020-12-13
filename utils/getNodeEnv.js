const getNodeEnv = () => {
    return process.env.NODE_ENV ? process.env.NODE_ENV.trim() : null;
}

module.exports= getNodeEnv;