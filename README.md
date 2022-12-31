<h1 align="center">OpenAI - Project</h1>
<p align="center">This Repository using OpenAI API to interact with ChatGPT & Dall·E 2. Built with ReactJS and Tailwind CSS</p>

<img src="https://user-images.githubusercontent.com/64394320/210140604-04dd93f5-f9c5-4f1a-87b6-ccdc5b7c9002.png" alt="OpenAI Project">

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

To enable input form and button (to hit the API to OpenAI) give comment the `disabled` and `readOnly` attributes on the `<textarea>` tag and uncomment the `onClick` attribute on the `<button>` tag. To enable chatLog give uncomment the loop or map code

- `src/components/ChatGPT/completion.chatgpt.js`

https://user-images.githubusercontent.com/64394320/210139174-8cf0e038-d9a2-4ff0-97cc-ef654ca491d7.mp4

```javascript
const Completion = () => {
    ...
      <div className="min-h-screen flex flex-col justify-start">
        <div>
          {/*

            |--------------------------------------------------------------------------
            | NOTE: Give Comment on the Component below to remove information
            |--------------------------------------------------------------------------
            |
            |

          */}
          {/* <Information /> */}

          {/*

            |--------------------------------------------------------------------------
            | NOTE: Give Uncomment on the code below to make work
            |--------------------------------------------------------------------------
            |
            |

          */}

          {chatLog.map((log, i) => (
            <>
              {log.user === "me" && (
                <div
                  className="flex p-5 rounded-lg mb-5 bg-blue-300 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                  key={i}
                >
                  <img
                    src="avatar2.png"
                    className="w-8 h-6 mr-2 -ml-1"
                    alt="user"
                  />
                  <div>
                    <span className="text-black mt-5">{log.message}</span>
                  </div>
                </div>
              )}
              {log.user === "gpt" && (
                <div
                  className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                  key={i}
                >
                  <img
                    src="openai-dark.png"
                    className="w-6 h-6 mr-3"
                    alt="gpt"
                  />
                  <div>
                    <span className="text-black">{log.message}</span>
                  </div>
                </div>
              )}
            </>
          ))}
          {loading && (
            <div className="relative">
              <div
                className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
                style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
              >
                <img src="openai-dark.png" className="w-6 h-6 mr-3" alt="gpt" />
                <div class="col-3">
                  <div class="snippet" data-title="dot-pulse">
                    <div class="stage">
                      <div class="dot-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex sticky bottom-5">
          <div
            className={`flex absolute bottom-0 right-0 md:pb-2.5 px-4 py-2.5 rounded-tr-md rounded-br-md ${
              prompt && "bg-black text-white px-4 py-2.5"
            }`}
          >
            <button
              className={`${!prompt && "cursor-not-allowed"}`}
              type="submit"
              //
              // |--------------------------------------------------------------------------
              // | NOTE: Uncomment this attribute 'onClick' to hit API OpenAI
              // |--------------------------------------------------------------------------
              // |
              // |
              //
              onClick={generateCompletion}
            >
              Send
            </button>
          </div>
          <TextareaAutosize
            className="w-full border-2 border-black rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none"
            placeholder="Enter your message here"
            style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
            maxRows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            //
            // |--------------------------------------------------------------------------
            // | NOTE: Give Comment on the two attributes below to enable input
            // |--------------------------------------------------------------------------
            // |
            // |
            //
            // disabled
            // readOnly
          />
        </div>
      </div>
    ...
}
```

- `src/components/Dall-E/image.dalle.js`

https://user-images.githubusercontent.com/64394320/210139273-39e9aa02-4fb0-483c-a69a-e6931b4b5daf.mp4

```javascript
const Image = () => {
    ...
      <div className="min-h-screen flex flex-col justify-start">
        <div className="">
          {/*

            |--------------------------------------------------------------------------
            | NOTE: Give Comment on the Component below to remove information
            |--------------------------------------------------------------------------
            |
            |

          */}
          {/* <Information /> */}

          {/*

            |--------------------------------------------------------------------------
            | NOTE: Give Uncomment on the code below to make work
            |--------------------------------------------------------------------------
            |
            |

          */}

          {chatLog.map((d, i) => (
            <>
              {d.user === "me" && (
                <div
                  className="flex p-5 rounded-lg mt-5 mb-5 bg-blue-300 border-2 border-black"
                  style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                  key={i}
                >
                  <img
                    src="avatar2.png"
                    className="w-8 h-6 mr-2 -ml-1"
                    alt="user"
                  />
                  <div>
                    <span className="text-black">{d.message}</span>
                  </div>
                </div>
              )}
              {d.user === "dall-e" && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-5">
                  {d.message.map((res, i) => {
                    return (
                      <React.Fragment key={i}>
                        <button
                          onClick={() => {
                            setShowModal(true);
                            setModalUrl(res.url);
                          }}
                        >
                          <img
                            className="max-w-lg rounded-sm w-full h-48 md:hover:h-44 border-2 border-black"
                            style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                            src={res.url}
                            alt={`${i}`}
                          />
                        </button>
                      </React.Fragment>
                    );
                  })}
                  <Modals
                    onClose={handleOnClose}
                    visible={showModal}
                    url={modalUrl}
                    name={prompt}
                  />
                </div>
              )}
            </>
          ))}
          {loading && (
            <div className="relative">
              <div
                className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
                style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
              >
                <img
                  src="openai-dark.png"
                  className="w-6 h-6 mr-3 rounded-lg"
                  alt="gpt"
                />
                <div className="col-3">
                  <div className="snippet" data-title="dot-pulse">
                    <div className="stage">
                      <div className="dot-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {!showModal && (
          <div className="mt-auto flex flex-col sticky bottom-5 justify-start align-start">
            <div className="mb-2 text-gray-600 text-xs md:text-sm">
              Start with a detailed description
              <button
                className="ml-1 border-2 border-black px-2.5 py-1 rounded-md text-black bg-green-400 hover:bg-green-500 text-xs"
                style={{ boxShadow: "0.2rem 0.2rem 0 #222" }}
                //
                // |--------------------------------------------------------------------------
                // | NOTE: Uncomment this attribute 'onClick' to hit Generate a Surprise
                // |--------------------------------------------------------------------------
                // |
                // |
                //
                onClick={generateSurprise}
              >
                Surprise me
              </button>
            </div>
            <div
              className={`flex absolute bottom-0 right-0 md:pb-2.5 px-4 py-2.5 rounded-tr-md rounded-br-md ${
                prompt && "bg-black text-white px-4 py-2.5"
              }`}
            >
              <button
                className={`${!prompt && "cursor-not-allowed"}`}
                type="submit"
                //
                // |--------------------------------------------------------------------------
                // | NOTE: Uncomment this attribute 'onClick' to hit API OpenAI
                // |--------------------------------------------------------------------------
                // |
                // |
                //
                onClick={generateImage}
              >
                Generate
              </button>
            </div>
            <TextareaAutosize
              className="w-full border-2 border-black rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none"
              placeholder="Enter your message here"
              style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
              maxRows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              //
              // |--------------------------------------------------------------------------
              // | NOTE: Give Comment on the two attributes below to enable input
              // |--------------------------------------------------------------------------
              // |
              // |
              //
              // disabled
              // readOnly
            />
          </div>
        )}
      </div>
    ...
};
```

## Demo

- ChatGPT

https://user-images.githubusercontent.com/64394320/210139372-824284d8-6170-4308-95f2-02d0f272fa67.mp4

- Dall-E

https://user-images.githubusercontent.com/64394320/210139754-bf37f019-1dac-49ae-9f9f-56b2e618c575.mp4
