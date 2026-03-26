function shortenUrl() {
    let originalUrl = document.getElementById("longUrl").value;
    let resultDiv = document.getElementById("result");

    // যদি বক্স ফাঁকা থাকে
    if (!originalUrl) {
        resultDiv.innerHTML = "<span style='color:red;'>অনুগ্রহ করে একটি লিংক দিন!</span>";
        return;
    }

    resultDiv.innerHTML = "অপেক্ষা করুন...";

    // TinyURL API-এর মাধ্যমে লিংক ছোট করা
    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.text();
        })
        .then(data => {
            // সফল হলে ছোট লিংকটি দেখানো
            resultDiv.innerHTML = `শর্ট লিংক: <a href="${data}" target="_blank">${data}</a>`;
        })
        .catch(error => {
            // কোনো সমস্যা হলে
            resultDiv.innerHTML = "<span style='color:red;'>কোথাও কোনো সমস্যা হয়েছে। লিংকটি সঠিক কিনা চেক করুন।</span>";
            console.error('Error:', error);
        });
}
