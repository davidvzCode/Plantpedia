import { NavBar } from '@ui/NavBar'
import { PreviewModeBanner } from './PreviewModeBanner'
import { TopArea } from './TopArea'

export function Header() {
  return (
    <>
      <PreviewModeBanner />
      <div className="px-8 py-3">
        <TopArea />
      </div>
      <div className="mx-auto" style={{ maxWidth: '98%' }}>
        <NavBar title="🌿 Plantpedia">
          <div>{/* NavLink items */}</div>
        </NavBar>
      </div>
    </>
  )
}
