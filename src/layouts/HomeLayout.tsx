export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white ">
      <div>
        {children}
      </div>
    </div>
  )
}
