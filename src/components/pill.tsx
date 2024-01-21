const bgs = [
  'green',
  'yellow',
  'purple',
  'pink',
  'orange',
  'blue',
  'amber',
  'teal',
  'teal',
  'teal',
]

function isEmpty(string: string) {
  return string.trim().length === 0
}

export function Pill({ skill, query }: { skill: string; query: string }) {
  const searchRegEx = new RegExp(query, 'i')
  const highlight: boolean = isEmpty(query) ? false : !!skill.match(searchRegEx)

  return (
    <div
      className={`${
        highlight
          ? `translate-x-1 translate-y-0.5 bg-teal-400 text-black drop-shadow-2xl transition-all ease-in `
          : `bg-gray-50  text-gray-500 dark:bg-zinc-800 dark:text-gray-400`
      } mb-2 flex max-w-fit cursor-pointer flex-row items-center space-x-2 rounded-full py-1 pl-1 pr-4 text-xs font-semibold leading-tight opacity-100 ring-1 ring-zinc-300 transition-all ease-in-out hover:opacity-80  dark:ring-zinc-700`}
    >
      <div
        className={`${
          highlight ? 'ring-zinc-900' : 'ring-zinc-300' + ' dark:ring-zinc-700'
        } flex h-9 w-9 items-center justify-center
        rounded-full  ring-1  transition-all ease-in-out `}
      >
        <p>{skill.slice(0, 1)}</p>
      </div>
      <p>{skill}</p>
    </div>
  )
}

function PillCert({ cert }: { cert: string }) {
  return (
    <div
      className={`mb-2  flex max-w-fit cursor-pointer flex-row items-center space-x-2 rounded-full bg-gray-50 py-1 pl-1 pr-4 text-xs font-semibold leading-tight text-gray-500 opacity-100 ring-1 ring-zinc-300 transition-all ease-in-out hover:opacity-80 dark:bg-zinc-800 dark:text-gray-400  dark:ring-zinc-700`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full ring-1
        ring-zinc-300  transition-all  ease-in-out dark:ring-zinc-700 `}
      >
        <p>{cert.slice(0, 1)}</p>
      </div>
      <p>{cert}</p>
    </div>
  )
}
Pill.Cert = PillCert
