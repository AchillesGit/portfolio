export default function Contact() {
  return (
    <div className='min-h-screen p-8'>
      <h1 className='text-4xl font-bold mb-4'>Kontakt</h1>
      <p className='text-lg mb-4'>
        Haben Sie ein Projekt im Kopf? Kontaktieren Sie mich!
      </p>
      <form className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full border rounded p-2'
            type='text'
            id='name'
            name='name'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='email'>
            E-Mail
          </label>
          <input
            className='w-full border rounded p-2'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='message'>
            Nachricht
          </label>
          <textarea
            className='w-full border rounded p-2'
            id='message'
            name='message'
            rows={4}
            required
          ></textarea>
        </div>
        <button className='bg-blue-500 px-6 py-3 rounded' type='submit'>
          Senden
        </button>
      </form>
    </div>
  );
}
