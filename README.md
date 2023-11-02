Chatbot repository

To run you the stuff you go to the command window and then navigatete
to this repositiory. You then type:
npm init -y
node server.js
It won't work right now because the api key is invalid, and maybe the code needs some changing
but that's basically it. Don't touch the other files outside this one and openai-test.js.

11/2, 5:23 pm update: Updated server.js, index.html, and style.css to reflect the webpage. Run by navigating to repository, running node server.js, and going to localhost:3000 in your browser. Note that it does take him a bit to reply, and you can't send more than 3 messages per minute bc of the tier of OpenAI we paid for. Added file called 3dmodel.js that should hypothetically add the Doozey avatar to the webpage, but doesn't work rn; I'm trying to figure out how to use three to make him appear. Couldn't upload the Doozey file to github, but if you download the avatar with the waving animation as Waving.fbx you should be able to play around with it. Main issue right now is that when the bot responds, the styling doesn't carry over to the localhost:3000/chat page and I haven't been able to figure out how to fix it. Feel free to text me with any questions/comments/concerns - Abigail

11/2, 5:34 pm update: we need a new api key again :| it keeps changing
