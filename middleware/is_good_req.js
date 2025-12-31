export async function isGoodReq(req, res, next){
    try{
        const report = req.body
        const reportKeys = Object.keys(report); 
        const reportValues = Object.values(report);
        if (
            report &&
            reportKeys[0] === "fieldCode" &&
            reportKeys[1] === "location" &&
            reportKeys[2] === "threatLevel" &&
            reportKeys[3] === "description" &&
            reportKeys[4] === "confirmed"                                                   
        ) {
           if (
                typeof reportValues[0] === "string" &&
                typeof reportValues[1] === "string" &&
                typeof reportValues[2] === "number" &&
                typeof reportValues[3] === "string" &&
                typeof reportValues[4] === "boolean"
           ) {
                return next()
           }
        }
        res.send("there is a problem in your request: ")
    }catch (error){
        res.send(`the problem is in the middleware is_good_req: ${error}`)
    }
}