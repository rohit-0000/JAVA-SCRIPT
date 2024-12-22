document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById('search');
    const usernameInput = document.getElementById('input-box');
    const statsContainer = document.querySelector('#graphs');
    const easyProcessCircle = document.querySelector('#circle-easy');
    const mediumProcessCircle = document.querySelector('#circle-medium');
    const hardProcessCircle = document.querySelector('#circle-hard');
    const easyLevel = document.querySelector('#easy-level');
    const mediumLevel = document.querySelector('#medium-level');
    const hardLevel = document.querySelector('#hard-level');

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("username should not be empty.");
            return false;
        }
        const regex = /^[a-zA-z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid userName");
            return false;
        }
        return isMatching;
    }

    async function fetchUserDetail(username) {
        // const url = `http://34.93.126.129:8000/username/`;
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            //---------------------------------------------------------

            const proxyUrl= 'https://cors-anywhere.herokuapp.com/';

            const targetUrl = 'https://leetcode.com/graphql/';

            const myHeaders= new Headers();

            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({

                query: "\n   query userSessionProgress($username: String!) {\n allQuestionsCount {\n   difficulty\n   count\n  }\n  matchedUser (username: $username) {\n submitStats {\n acSubmissionNum {\n  difficulty \n    count\n     submissions\n    }\n totalSubmissionNum {\n difficulty\n count\n submissions\n}\n}\n}\n}\n  ", variables: { "username": "${username}" }
            })

            const requestOptions = {

                method: "POST",

                headers: myHeaders,

                body: graphql,

                redirect: "follow"

            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            console.log(response);

            //---------------------------------------------------------
            if (!response.ok) {
                throw new Error("Unable to fetch the user details");
            }
            const data = await response.json;
            console.log("logging data : ", data);
            statsContainer.setAttribute('style', 'display: flex;');
        }
        catch (error) {
            statsContainer.innerHTML = '<p> No data found <p>'
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }

    }
    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("User Name : ", username);
        if (validateUsername(username)) {
            console.log("good to go");
            fetchUserDetail(username);
        }
    })
})