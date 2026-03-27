function shortenUrl() {
    let originalUrl = document.getElementById("longUrl").value;
    let resultDiv = document.getElementById("result");

    // যদি বক্স ফাঁকা থাকে
    if (!originalUrl) {
        resultDiv.innerHTML = "<span style='color:red;'>অনুগ্রহ করে একটি লিংক দিন!</span>";
        return;
    }

    // আপনার অরিজিনাল লিংকটিকে লুকিয়ে ফেলা (Encode করা)
    let encodedUrl = btoa(originalUrl);

    // আপনার গিটহাব পেজের লিংক (এর সাথে page1.html যুক্ত করা হলো)
    let myCustomLink = "https://akash629554-cyber.github.io/Website-/page1.html?link=" + encodedUrl;

    // সফল হলে নতুন লিংকটি দেখানো
    resultDiv.innerHTML = `আপনার নতুন লিংক: <br><br> <a href="${myCustomLink}" target="_blank" style="word-wrap: break-word;">${myCustomLink}</a>`;
}
