module.exports.Preprocess = (answer, seperator, keyword) => {
    let processedAnswer = [];
    let keywordLength = keyword.length;
    answer.forEach(ans => {
        let separatedAnswer = ans.split(seperator);
        let processedSeparatedAnswer = [];
        separatedAnswer.forEach(sepAns => {
            if (sepAns.slice(0,keywordLength).toLowerCase() === keyword.toLowerCase()) 
                processedSeparatedAnswer.push(sepAns.slice(0, keywordLength).bold() + sepAns.slice(keywordLength));
            else 
                processedSeparatedAnswer.push(sepAns);
        });

        processedAnswer.push(processedSeparatedAnswer.join(""));
    });

    return processedAnswer;
}

module.exports.Beautify = (stats) => {
    return {
        "keyword found" : stats.keyword + " keyword(s)",
        "match sentence(s)" : stats.sentences + " sentence(s)",
        "success" : stats.success ? "Yes" : "No",
        "time taken" : Number(stats.time).toFixed(4) + " s",
        "total sentences" : stats.total_sentences + " sentence(s)",
        "total word" : stats.word + " word(s)", 
    }
}