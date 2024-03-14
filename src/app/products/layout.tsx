interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      {children}
    </div>
  );
}
