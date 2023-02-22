import React from 'react'
import './RoadMap.css'
const RoadMap = () => {
  return (
    <section class=''>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='roadmap_head text-center d-flex flex-column align-items-center py-5'>
              <h2>Road Map</h2>
              <div className='roadmap_head-underline mt-4'></div>
            </div>
          </div>
        </div>
      </div>
      <div class='container py-5'>
        <div class='main-timeline'>
          <div class='timeline timeline1 right pt-4'>
            <div class='card bg-transparent Roadmap_card p-1'>
              <div class='card-body roadmap_detail p-4'>
                <div class='dashe-right'></div>
                <h3 class='text-light'>Phase 1</h3>
                <ul>
                  <li>NFT 10% sold- airdrop give away</li>
                </ul>
              </div>
            </div>
          </div>
          <div class='timeline timeline2 left pt-4'>
            <div class='card bg-transparent Roadmap_card p-1'>
              <div class='card-body roadmap_detail p-4'>
                <div class='dashe-left'></div>
                <h3 class='text-light'>Phase 2</h3>
                <ul>
                  <li>
                    NFT 25% sold - launch NFT holders exclusive eco friendly
                    shop
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class='timeline timeline3 right pt-4'>
            <div class='card bg-transparent Roadmap_card p-1'>
              <div class='card-body roadmap_detail p-4'>
                <div class='dashe-right'></div>
                <h3 class='text-light'>Phase 3</h3>
                <ul>
                  <li>
                    NFT 50% sold - schedule community retreats in the chakras of
                    the world locations
                  </li>
                  <li>
                    Every retreat will have 10% allocated to a charitable cause
                    for that location
                  </li>
                </ul>
                <ol>
                  <li>Improve the health: food, water or medical initiative</li>
                  <li>Earth sustainability</li>
                  <li>Providing long-term jobs for the locals</li>
                </ol>
              </div>
            </div>
          </div>
          <div class='timeline timeline4 left pt-4'>
            <div class='card bg-transparent Roadmap_card p-1'>
              <div class='card-body roadmap_detail p-4'>
                <div class='dashe-left'></div>
                <h3 class='text-light'>Phase 4</h3>
                <ul>
                  <li>
                    NFT 75% sold - collab & build/acquire a members only
                    community retreat center
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class='timeline timeline5 right pt-4'>
            <div class='card bg-transparent Roadmap_card p-1'>
              <div class='card-body roadmap_detail p-4'>
                <div class='dashe-right'></div>
                <h3 class='text-light'>Phase 5</h3>
                <ul>
                  <li>
                    NFT 100% sold - create an immersive digital experience for
                    the best meditations EVER in the world's most beautiful
                    locations anywhere you are
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
