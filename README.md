<h1 align="center">OpenAI - Project</h1>
<p align="center">This Repository using OpenAI API to interact with ChatGPT & Dall·E 2. Built with ReactJS and Tailwind CSS</p>

<img src="https://user-images.githubusercontent.com/64394320/208843797-deff06e3-9728-4642-bc23-4f97461e0b8e.png" alt="OpenAI Project">

# Table of Contents

- [Running on Localhost](https://github.com/armandwipangestu/openai-project#running-on-localhost)
- [How to get API key?](https://github.com/armandwipangestu/openai-project#how-to-get-api-key)
- [Information](https://github.com/armandwipangestu/openai-project#information)
- [Demo](https://github.com/armandwipangestu/openai-project#demo)

## Running on Localhost

- Clone this repository

```bash
git clone https://github.com/armandwipangestu/openai-project
```

- Install dependency library

```bash
npm i
```

- Copy `.env.example` to `.env` and fill it with your API

```bash
cp .env.example .env
```

```bash
REACT_APP_API_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

- Run Application

```bash
npm start
```

## How to get API key?

> **NOTE**: Please take care of your API Key as OpenAI limits usage to $18.00 USD

You must first register on the [openai website](https://beta.openai.com/), then click the profile menu and select `View API keys`

## Information

> Because my API Key has reached the limit, the input form is disabled

To enable input form and button (to hit the API to OpenAI) give comment the `disabled` and `readOnly` attributes on the `<textarea>` tag and uncomment the `onClick` attribute on the `<button>` tag

- `src/components/ChatGPT/completion.chatgpt.js`

```javascript
const Completion = () => {
    ...
        <div className="w-full mb-4 border rounded-lg bg-dark-2 border-gray-600">
          <div className="px-4 py-2 rounded-t-lg bg-neutral-900">
            <textarea
              id="comment"
              rows="5"
              className="w-full px-0 text-sm md:text-lg border-0 bg-neutral-900 focus:ring-0 text-white placeholder-gray-500"
              placeholder="Write a comment..."
              required
              onChange={(e) => setPrompt(e.target.value)}
              // disabled
              // readOnly
            ></textarea>
          </div>
          <div className="flex items-end justify-end px-3 py-2 border-t border-gray-600">
            <button
              type="submit"
              className="flex items-end py-2.5 px-4 text-xs font-medium text-center text-white bg-neutral-900 rounded-lg focus:ring-4 focus:ring-gray-200 hover:bg-neutral-700"
              onClick={generateCompletion}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
    ...
}
```

- `src/components/Dall-E/image.dalle.js`

```javascript
const Image = () => {
    ...
        <div className="w-full mb-4 border rounded-lg bg-dark-2 border-gray-600">
          <div className="px-4 py-2 rounded-t-lg bg-neutral-900">
            <textarea
              id="comment"
              rows="5"
              className="w-full px-0 text-sm md:text-lg border-0 bg-neutral-900 focus:ring-0 text-white placeholder-gray-500"
              placeholder="Write a comment..."
              required
              onChange={(e) => setPrompt(e.target.value)}
              // disabled
              // readOnly
            ></textarea>
          </div>
          <div className="flex items-end justify-end px-3 py-2 border-t border-gray-600">
            <button
              type="submit"
              className="flex items-end py-2.5 px-4 text-xs font-medium text-center text-white bg-neutral-900 rounded-lg focus:ring-4 focus:ring-gray-200 hover:bg-neutral-700"
              onClick={generateImage}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
    ...
};
```

## Demo

- ChatGPT

https://user-images.githubusercontent.com/64394320/208843842-e822b776-cc68-4f82-a3a9-28c8da0bdb9c.mp4

- Dall-E

https://user-images.githubusercontent.com/64394320/208843936-b646c7b9-81e2-490e-92db-73bc304990b6.mp4
