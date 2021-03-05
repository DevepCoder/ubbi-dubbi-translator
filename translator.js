function translator(e) {
    this.translate = () => {
        const t = ["a", "e", "i", "o", "u"];
        let n = e.length;
        return e
            .split("").map((e, l) => {
                let r = e.toLowerCase(),
                    s = e === r ? "ub" : "UB";
                return "e" === r && l + 1 === n ? e : t.includes(r) ? s + e : e;
            })
            .join("");
    }
}
module.exports = translator;
