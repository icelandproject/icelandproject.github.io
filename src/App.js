import React from "react";
import { Boxxer } from "./boxxer";

// Image imports:
import Flag from "./800px-Flag_of_Iceland.svg.png";
import PolMap from "./maps/image1.png";
import PhysicalMap from "./maps/image3.gif";
import ClimateMap from "./maps/image2.gif";

class App extends Boxxer {
  render() {
    return (
      <div>
        <h2>Iceland research project</h2>
        <img src={Flag} alt="flag" width={200} height={144} />
        <br />
        <small>By: Lazarus Holl</small>
        <h4>Categories:</h4>
        <div>
          <p
            onClick={() =>
              this.boxSet(`
              Iceland is a country full of amazing natural features.
              You can visit a beach full of black sand,
              see glaciers forming,
              take a bath in natural hotsprings,
              and much more-  all while staying in the same country. It has a vast, deep culture as well as amazing dining. There truly is no other country like Iceland.
              `)
            }
          >
            Introduction
          </p>
          <p
            onClick={() =>
              this.boxSet(
                <div>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <img
                          class="map"
                          src={PolMap}
                          alt="polMap"
                          width="70%"
                          height="70%"
                        />,
                        1
                      )
                    }
                  >
                    Political Map (Maphill)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <img
                          class="map"
                          src={PhysicalMap}
                          alt="polMap"
                          width="70%"
                          height="70%"
                        />,
                        1
                      )
                    }
                  >
                    Physical Map (Quaternary Geology)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <img
                          class="map"
                          src={ClimateMap}
                          alt="polMap"
                          width="70%"
                          height="70%"
                        />,
                        1
                      )
                    }
                  >
                    Climate Map (Geology)
                  </p>
                </div>
              )
            }
          >
            Maps
          </p>
          <p
            onClick={() =>
              this.boxSet(
                <p style={{ whiteSpace: "pre-line" }}>
                  “Physical Map of Iceland.” Maphill, 2013,
                  www.maphill.com/iceland/maps/physical-map/. Quaternary
                  Geology, notendur.hi.is/oi/climate_in_iceland.htm. “Europe/.”
                  {"\n\n"}
                  World Atlas, Worldatlas, 7 Apr. 2017,
                  www.worldatlas.com/webimage/countrys/europe/iceland/island.htm.
                  {"\n\n"}
                  The Official Gateway to Iceland,
                  www.iceland.is/the-big-picture/nature-environment/geography.
                  {"\n\n"}
                  “Iceland Economy - Overview.” Zambia GDP - per Capita (PPP) -
                  Economy, www.indexmundi.com/iceland/economy_overview.html.
                  {"\n\n"}
                  “The World Factbook: Iceland.” Central Intelligence Agency,
                  Central Intelligence Agency, 1 Feb. 2018,
                  {"\n\n"}
                  www.cia.gov/library/publications/resources/the-world-factbook/geos/ic.html.
                  {"\n\n"}
                  “Iceland Map and Satellite Image.” Geology,
                  geology.com/world/iceland-satellite-image.shtml.
                  {"\n\n"}
                  “Food in Iceland” Guide to Iceland, 3 Jan. 2018,
                  guidetoiceland.is/history-culture/food-in-iceland.
                  {"\n\n"}
                  “Iceland Maps.” Iceland Maps - Perry-Castañeda Map Collection
                  - UT Library Online, 2019,
                  legacy.lib.utexas.edu/maps/iceland.html.
                  {"\n\n"}
                  “Icelandic Ethnic Groups and Languages.” Icelandic Ethnic
                  Groups and Languages, Republic of China in the Rep, 4 Mar.
                  2001, 9:40 GMT,
                  is2.mofcom.gov.cn/article/hostcountry/nationalityhost/201103/20110307429594.shtml.
                  {"\n\n"}
                  “Education.” Iceland,
                  www.iceland.is/the-big-picture/people-society/education.
                  “Government Offices of Iceland.” Iceland Government,
                  www.government.is/.
                </p>
              )
            }
          >
            Citations
          </p>
          <p
            onClick={() =>
              this.boxSet(
                <div>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Iceland is located in the Atlantic Ocean near the
                          Arctic Circle. It spans an aera of ~40,000 square
                          miles and is very volcanically active. Almost 80% of
                          the island is actually uninhabited! This is due to
                          extreme tempuratures and extreme landscapes. Iceland
                          is full of steep cliffs, fjords, and glaciers. This
                          makes Iceland considered an "Arctic Desert".
                        </p>,
                        1
                      )
                    }
                  >
                    Physical Characteristics of Iceland ( World Atlas, The
                    Official Gateway to Iceland, Worldatlas, Official
                    Organization )
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Icelands climate varies greatly across the country. In
                          one part and at one time, you can be in below freezing
                          tempuratures, then at another place and another time
                          be in the blazing sun! Iceland's tempurature averages
                          51f in the summer, which is comparable to that of New
                          York, though these rapidly change.
                        </p>,
                        1
                      )
                    }
                  >
                    Climate ( World Atlas, The Official Gateway to Iceland,
                    Worldatlas, Official Organization )
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Iceland is a (generally) capitalist country with
                          mostly free market principles. Though they were it by
                          an economic crisis in 2008, the economy has been
                          thriving. The ecomonmy relies primarily on fishing,
                          though there are several other industries that drive
                          the economy which can be seen in the "major
                          occupations" section.
                        </p>,
                        1
                      )
                    }
                  >
                    Economic summary (Zambia GDP, Central Intelligence Agency,
                    Official Organization)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Icelands primary occupations are fishing and tourism.
                          Due to the nature of the country and its beautiful
                          landscapes, Iceland attracts many tourists. Since
                          Iceland is an island, fishing is naturally a large
                          contributor to the economy. Besides these two, Iceland
                          also has a large manufacturing industry, though it is
                          not as significant as the other two.
                        </p>,
                        1
                      )
                    }
                  >
                    Major Occupations (Zambia GDP, Central Intelligence Agency,
                    Official Organization)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Iceland has a thriving seafood industry. Paired with,
                          Iceland has many excellent grains which are used for
                          various breads. There is even a famous Icelandic bread
                          that is baked in a volcano! Iceland has several meats
                          it is famous for, but the two most popular (and quite
                          controversial) of these are puffin and whale.
                        </p>,
                        1
                      )
                    }
                  >
                    Foods (Guide to Iceland)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          60 - 80 percent of Icelanders are of some Nordic
                          descent. The country's primary spoken language is
                          Icelandic, though Danish and English are understood by
                          most. Only 4% of settlers come from Asia as most are
                          from Western Norway or the British Isles.
                        </p>,
                        1
                      )
                    }
                  >
                    Languages and ethnicity (Icelandic Ethnic Groups and
                    Languages, Central Intelligence Agency, Official
                    Organization)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Iceland's culture is oriented primarily by it's food
                          and land. The unique foods and living conditions /
                          nature make up most of what would be considered as the
                          culture of the country. These factors also cause lots
                          of tourism (as you hopefully read before), which
                          contributes partially to the culture.
                        </p>,
                        1
                      )
                    }
                  >
                    Culture (Icelandic Ethnic Groups and Languages, Central
                    Intelligence Agency, Official Organization, Foods)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Iceland is a free country. This also implies freedom
                          of religion. The majority of the population follows
                          the Evangelical Lutheran Church, though there are some
                          outliers which subscribe to the beliefs of the
                          Catholic church, as well as atheist and agnostic
                          beliefs.
                        </p>,
                        1
                      )
                    }
                  >
                    Religions (Icelandic Ethnic Groups and Languages, Central
                    Intelligence Agency, Official Organization, Foods)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Iceland has a high education level and literacy rate.
                          Education is mandatory from 6 to 16. This education
                          uses a single structure where all levels of schooling
                          are organized inot a single system. This schooling is
                          free. Upper secondary school is avaliable to students
                          after primary education to students ages 16-20. After
                          this is paid university.
                        </p>,
                        1
                      )
                    }
                  >
                    Religions (Education, Central Intelligence Agency, Official
                    Organization, Foods)
                  </p>
                  <p
                    onClick={() =>
                      this.boxSet(
                        <p>
                          Iceland's head government official is the president.
                          The country uses a parliament based democracy that is
                          similar to that of most other countries in Europe.
                        </p>,
                        1
                      )
                    }
                  >
                    Government (Iceland government, Central Intelligence Agency,
                    Official Organization, Foods)
                  </p>
                </div>
              )
            }
          >
            Information
          </p>
          <p
            onClick={() =>
              this.boxSet(`
              As seen above, Iceland is a fascinating place with fascinating people and ideas. They have a deep culture and stable, healthy government that makes for an all in all beautiful and incredible country.
              `)
            }
          >
            Conclusion
          </p>
        </div>
        <p>{this.state.textbox}</p>
      </div>
    );
  }
}

export default App;
