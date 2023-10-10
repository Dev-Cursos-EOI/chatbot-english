'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="mx-auto w-full h-screen max-w-2xl p-24 flex flex-col">
      <section className="mb-auto m">
        {messages.map(m => (


          m.role === 'user' ?
            <div className="relative mb-6 p-4 bg-gradient-to-l from-sky-400 to-blue-500 text-white rounded-xl rounded-br-none" key={m.id}>
              <span className='bg-white w-10 h-10 shadow-xl text-center flex items-center justify-center rounded-full absolute -bottom-4 -right-4 text-2xl'>🧑</span>
              {m.content}
            </div>
            :
            <div className="relative mb-6 p-4 bg-white rounded-xl rounded-bl-none" key={m.id}>
              <span className='bg-white w-10 h-10 shadow-xl text-center flex items-center justify-center rounded-full absolute -bottom-4 -left-4 text-2xl'>🇬🇧</span>
              {m.content}
            </div>

        ))}
      </section>
      <form className="fixed bg-white bottom-0 left-0 w-full flex space-x-4 border-t justify-center border-slate-300 shadow-lg p-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md w-[370px] px-4 py-3 border text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="border-solid bg-blue-500 px-6 hover:bg-blue-600 transition-all py-3 text-white rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}