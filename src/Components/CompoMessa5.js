import React from 'react'
import './CompoMessa5.css'
const CompoMessa5 = () => {
  return (
    <>
      <h1>PAGE 5</h1>
      <div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 className='right-side'>AAV INNOVATION LABS</h6>
        <h3 className='wel_sanjay1'>RSC Workflow Index</h3>
        <h3 className='wel_sanjay'>Welcome Sanjay Kumar</h3>
         <div className="placed">
             <img className='moves' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAD7CAMAAAD3qkCRAAAAeFBMVEX29vYAAAD39/e4uLgdHR3z8/PX19dfX1/l5eVvb2+WlpawsLBiYmLx8fHq6uri4uIrKyvJycmJiYnQ0NBDQ0Oqqqo3NzcYGBhYWFhqampOTk7a2tpISEgkJCS/v7/Ly8uhoaENDQ05OTmCgoJ5eXmSkpIhISGcnJw/e4BWAAAM+0lEQVR4nO2d63qqOhCGcSh4QI6KIiiCYr3/O1xgSzKcQSdK18P3o3vtVsm8JJlMJiFI8L9IAun/0EQyPk0k49NEMqQA5iZFFyT2+gCKomdSFAnR0JcqlgQkw3SXl1mmb+9mL3RxNSOSBBRTXsYzpO19o+flUZcrkAQM+VDgyHRZqT8lkhcrjASkwLHKHJk8WRFSpCgSgPO6jiOVFRkiyhRGYvsNILPZ100ECj3JTy9Qt40gqRtb6X/FC4PhtYCkDUyj98ZCSEBJsN3x1+W4tWL8q6P9R0g05LWspWykDkBXnS2CuZJ3FREkYB54fcztx8Q0k+ns2O9PIXmpIoYol1VJfDVZj0jrReN+4LogLpicJL3gIqm1N/2Lol1Yo9uMnSQbStidX6uFqwMYt33+N5d4qBfRT9y8Z39rZWshYO55SdznBYyMhpMbezDLFwdglbIj7igCSALmuVa/FwdeDGyYN6hgvlgueY+HTR5xpSO5hFOEjx8Ki8eIu7yAOjnnHX6bDiW6YRgL0zQD01wYRjplBFZjxMO8ABI7H/98+SzfHeearD3/6HsHx4lke7P+gySWx8f0XPujVSGhsYCaJG0+dtX+Wtm0iSNaEgBF1ZJ9N0WmgxtIhGkwCpI8w5By2MmxGL63yfIPjk2WN6Kqk+zmLiKvNgfRotiaawYNCxFJWh0NqZRu7e7Z/OV1EyhI0mFjk3Sb3KhTZL4eTr5OAhmH02xm/G3tLpeddYpbWLbuyywEJIp6r/e7XxfvkFydSJNDO9Si2zVZettTA8tcXrzWxF4iefgr063Lo+yPSycKVUPBkZdiBKG7Sur9wulqv1QtL9ZJ5nerd9la3zQ7bS75aMHnv9kvjI0cXf2atrZd/VTLcxa9RgLGqpKh2x9cO9DLEPhLqaNbbML7ujKCxkv7+Rb2CglAULFmt9o8KqNQBP/Jvwq6ublfyizb53PGL5AAyGVLUhekPzAaL4oSFBmMdizXaGI+WS1Pk0A6yy229diT9WFhVAYje6Ue49vPmfQsCUjqsngzPe2ZECrtM7JXbKKWptc1yG6LnrsBil30vf792eEgrZfVsVgvd+OJZa+nSLJGUWjgVqK+MKyBtLkWx1bniWzFcySKW+jr86caFroeGNq8gJIEg6/3DAlIER6lT476cvyXhjzON0ZZqkMv+QRJCoIL3brGi8Pr4wcsNNzC4uXQ9jrciFKNeGeilTZQNn4BJfhF7G3XQDsAXAyyNMlm4mlvOaArz5Jh3X4gSer+8XrV7Eab0NBXcQWlLWIofHkgiRKikPEUEYI8rNYLFe4MCcKGtq4zGhAvlUWFlwW6hv37fUABw0ggQCHKVtaHm9pqivRAQZUey/074SASMK4FECHLrTqOsC9nQSQR75AXTcA+h0chioz6yrq3A+tL8uiPGz7RtVxBIA/3iNqX07ecAXUCOh+5YhE7T1hBSsRRem8M6U8CEuokVzF7tPKiFJQ/83uufQ0g0Xi0tRYKkrkW5COTfkurvUlA5W1rS7zYWVMaX+2efbm9vH3vHo9m7VYoGiRVyH2xv+nzhd4k3MvHd4G9nZWno6lDr6ilB8ljAdrkDTcL7N6AYvLs/3efjUf9jEqnuyz/cbRfNbKf4Mw75rxHpXSS/ERDKuuA++gNbetRpoLal0ZA8viQzoeqpXC/xUo1+D7dXbfb70eisin25R1+Ky+W73GZuSQkoNyZ33IU0U9foHKBD/WXzp7Si8Rk9+aYhw5vwQGDtYU4IiFhvSS+va9GiiXPvK5K6TOe6KxKxIcppaIXbAJ56nJffUhCdmNW7wVJ5XKn2RF9dZOAxFK2X9Q7YzsFJsukbzt2UfUgUdkAdX0jyO8SCh/J4lW7qV0k6d+5Kwz6ZtHoBBvmvqr7Q4uf7IxWDBb+HATPr2oKT4u/5cVb8oskIfNc7VcSJAhZ41613snu1sVmWJc3u+BfA/im3UPr8lAnyYKFcYOytFQCFCrtWr1XJwnPaJM/Z9FPILM+77Z+rosk+sr9+eD1MgoBbl6traKDBBSW5CJ/YKSnUPLLa+soXSQB6ybUT1n0Frh5EvfUlu/uImHd5PTGKVbJhjOLWNps6CJhiUeP+hme3kKz4Lb8VDsJAHOBPXOaAgRS0seIDhKd9baV8u6Qi1uxylNUfsvg3EHCE3ads09x4o9HWi3Oq4OE5bk6p2wCBec8kxu3jGkdJOypmEv43hl8wQqTxRktbqeDJGRPxfRfuiQXeiKqJfLqIvm8E85sZLlcue1TrSRy/HuJ9fANV2QCQIFG86c6SPJLHN6y1NBkBosho6dJ2Hry+xLbdWawsaBl+0fHneYkHxviJUzSMgGeSN6qiQRrIqHVRII1kdBqIsGaSGg1kWBNJLSaSLAmElpNJFgTCa0mEqyJhFYTCdZEQquJBGsiodVEgjWR0GoiwZpIaDWRYE0ktJpIsCYSWk0kWBMJrSYSrImEVhMJ1kRCq4kEayKh1USCNZHQaiLBmkho9d+QwESChUk+iPI/1MmjVE7iPPkkDXpd2Uh6/KXZjHYSmx1lKfbYxBYTHj/48Wo3kBosbiLJfgsL9nzUqfvUKYECmZ9o3/iUVVud8OfNZodPnCHBDVH4yenLpmO3WkjQ8UYdR50IF5wZyVfTM/JtJOyJ8lnyqfMKclNQT5k3dPpmEghYdyd/U+dggcrOr/mOfjpx5SNNJPjA146zjd4gdOrKzKt/ILuZxGZ3wfrkWJKbww9S3dcP9I1eWOdnx7sfDFRycyR0fPLjBc69Wxd6jXLnCXNvET7vtPYEmQYSMLkHp3+F9VNCh1Z91z1cXkcCWQdjoyr9G6yfEwoCa5+nrq8T2LD+NeCcdcECmx8JW3Pmfy0JOshsthpJlWSemJ1WMvODiheqrxP+PuhPnrpQFj7SujrE1faTBRsUv6IPxylYAC47Ke5UOQ2itk7C/Myujx4fURUY3KMm5eZVQwIL9nlLe5eR/QR2nJsW/wwO3Po6Ej6aHt50vnNfgcSHR6/U7qsksGCNcWe3vkPuAwKTVco+6iAB4B74OiqKh2DFrCsdHFUlUZnT3n3yZJIGwYINj/tboe2XSUDns7NofCBSGhOz9nUsdHoo9P4sC8FmisfRjO5YsOCdvhASluoEJYY+c0xqD/GYeBc2kgBErEqWRG95phaOifHLw0okARsU9yOZllQFNjtVMZa5+QWSNNpkuLeRVsnDStbp/aCBhNMeRxQDl4VazoxHuJwEcAuMxxQDlwX8/NHZTq2SSNgrrD9ycG0fPeIn9NJAtoiASGDBBkXLHV+cggQoOzHLD0XEdRKyjvTRE9R6CBQeieQxMeon/GTRnVyK/UcndIj+70QFk/BFhkTIu/FIhdZ2nAqJifzByDkk/Ea39e8SXg3JYfwgmbnsgNtmkvmIxxImUGNG8vOLGhLLzt4AP3Lx5KIH5TpZsHPhfVcevfgcPan0eIP76Nn+a+SKua1udWTkju0v6WSWSLLD+v3u741P15q4S3G7vzc6fZllEihktv+OWLYBz0+yNwnGn7ZsmL7cmpnWD4pjdX99NIqPso7ML2aJdO3wV1j2x+umJVefDp7aLTnMB2kb/158N18PFN/k4w0qcr28RmcdB4g1uXpQjEAdpFs+WZifh3wzUIPglt+Egz2sTFMvxbm1q3NDxeaiF3PgNyW2HcXRh32x54rpMPU747/+myxCigZMJWo/SkAC6GT89ldeVb/KFplf3wtHMs3lL3TbDcrvo6iiYavTkIuRkNhs9WjQrUXJxOvLK5o0JDrrKP4QixQWfRPsfaVJoqC1yUel9Lsm2rDkv57zJCIJGInXO+kH/IWYMcHGaiIS/g6J+Cb1XPlGbxFuf6NcTxtoUnRgs0rZ9ez0oPA09ZJgBwMViYE2L/QaHkHifWtPsYeMKm0K55jf4aD7qgAu2+YzS0gcKBWJzjf0ZigdfaXwIvK9QbGnhKjHF5fMZodN+2XBiNAsiOYFV2R1IknhhRvnhY1uNSsxcHjTmiU0OxjolhfAuJ+4eVbU/KCIHnL3kM5piDbDES6UgHmNkYVLubQO/pO9BVBvW/Qx36YqnnDJBwJ8r2e7JGMpTLTT+ehm5eEPbWWqhQHSxSv0hs0flvVqg6eCkqkl/r7wCY1sVx/tMhzexP7jYHd+EoXBwjDMjeast6finy06EGoSPNYzxXG838dx9Q+7kLJtEy+NpiPkd9XketVsxH6lZDov/PsfRfZrbn9VFtE4wsunXlMESXV2nRz7uUa8VC6CBAw5ObWD+PeAumByksfkF0w5+Wrm8O4b+i3VYjZDpGOHGRaGctSuDppazoSSlClqWwdIhho6xxKGdXDPZn0O8fUCBVz1dwkTJH0RhPelt91Z1s4/ONrGNITtWhBBgkKtLERRUunZj9//FyRB/QT/g4ddgsv8A3tUemkiGZ8mkvHpvyL5X/QPpluzMxQvbrsAAAAASUVORK5CYII=" alt="" />
        <img src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-question-mark-vector-icon-png-image_1824218.jpg" alt="" className='moves' />
        <img src="https://t4.ftcdn.net/jpg/01/09/46/77/360_F_109467767_JwzMoMf9EMEaPedIfwXIDquzwjENZQjj.jpg" alt="" className='moves' />
         </div>
    </div>


<div className='top1'>

    <div className='fir1'>
<img className='logo' style={{height:"60px", width:"fit-content"}} src='https://i.pinimg.com/564x/ff/13/17/ff13179c53db5349d2d3b62fc6808433.jpg' alt=""  />
<p className='blue1'>Component Master</p></div>  

<div className='fir2'>
<img className='logo' style={{height:"60px", width:"fit-content"}} src='https://www.pngitem.com/pimgs/m/25-256356_android-notes-app-icon-hd-png-download.png' alt=""  />
<p className='blue2'>Component Assignment</p></div>

<div className='fir3'>
<img className='logo' style={{height:"60px", width:"fit-content"}} src='https://i.pinimg.com/originals/d8/6e/09/d86e0986972bddb2adf0d6d0338e0c85.png' alt=""  />
<p className='blue-3'>PT SITE Readiness</p></div>

</div>


<div className='Top-page52'>

<div id="6">
      <div className='display'>
          <label className='blue'>Component Type </label><br/></div>   
          <select className='opi' id='language'>
                        <option disabled selected value="--"></option>      
                        <option value="Português">Português(Brasile)</option>                     
            </select>        
        </div>

        <div className='top3'>
          <div className='display3'>
          <label className='blue'>Component Control No </label><br/></div>

          <input className='Revision'  type="text" name="ontrol" placeholder=""/>
          </div>

          <div className='top3'>
          <div className='display3'>
          <label className='blue'>Revision</label><br/></div>
          <input className='Revision'  type="text" name="ontrol" placeholder=""/>
          </div>

          <div id="6">
      <div className='display'>
          <label className='blue'>CA Franchise Key </label><br/></div>   
          <select className='opi' id='language'>
                        <option disabled selected value="--"></option>      
                        <option value="Português">Português(Brasile)</option>                     
            </select>        
        </div>

        <div className='top3'>
          <div className='display3'>
          <label className='blue'>Product Code</label><br/></div>
          <input className='Revision'  type="text" name="ontrol" placeholder=""/>
          </div>

          <div className='top3'>
          <div className='display3'>
          <label className='blue'>Variant/Mode Code</label><br/></div>
          <input className='Revision'  type="text" name="ontrol" placeholder="  "/>
          </div>

          <div id="6">
      <div className='display'>
          <label className='blue'>Ship to Country </label><br/></div>   
          <select className='opi' id='language'>
                        <option disabled selected value="--"></option>      
                        <option value="Português">Português(Brasile)</option>                     
            </select>        
        </div>

        <div className='top3'>
          <div className='display3'>
          <label className='blue'>Alternate Reference No</label><br/></div>
          <input className='Revision'  type="text" name="ontrol" placeholder="  "/>
          </div>

          <div className='top3'>
          <div className='display3'>
          <label className='blue'>CA CCN Change Order NO</label><br/></div>
          <input className='Revision'  type="text" name="ontrol" placeholder="  "/>
          </div>

          <div className='top3'>
          <div className='display3'>
          <label className='blue'>RSC Change Order No</label><br/></div>
          <input className='Revision'  type="text" name="ontrol" placeholder="  "/>
          </div>

          <div className='top3'>
          <div className='display3'>
          <label className='blue'>Change By</label><br/></div>
          <input className='Revision'  type="text" name="ontrol" placeholder="  "/>
          </div>

          </div>

          <div className='btn-right-5'>
<button className='btn-serch'>SERCH</button><br/>
<button className='btn-reset'>RESET</button><br/>

<div id="6">
     
         
          <select className='opi' id='language'>
                        <option disabled selected value="--">Minimize</option> 
                                                  
            </select> 
           {/* <div className='display-flex'><p className='Minimize'>Minimize</p> </div>         */}
        </div>
        
</div>

<div className='btn-right-bottom'>
<button className='btn-approval'>APPROVAL</button><br/>
<button className='btn-reject'>REJECT</button><br/>        
</div>

    </>
  )
}

export default CompoMessa5
