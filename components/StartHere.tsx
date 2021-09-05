import Link from 'next/link'

export const StartHere = () => {
  const titleContent = `Hi, I'm Jonathan`
  return (
    <div>
      <h2>{titleContent}</h2>

      <p>I am a software developer and writer based in Richmond, Virginia. 
        I am interested in creative programming, generative art, and human-machine synergy.</p>

      <p>Want to learn more?</p>

      <Link href="start-here">Start Here</Link>
    </div>
  )
}
