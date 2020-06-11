import React from 'react';
import styled from 'styled-components';

const PanelForum = () => {
  return (
    <MainDiv>
      <PanelHeading>
        Infos <SpanPanelHead>0 connecté(s)</SpanPanelHead>
      </PanelHeading>
      <PanelBody>
        <Scorllable>
          <ScorllableWrapper>
            <ScorllableContent>
              <H4Style>Gestion du forum</H4Style>
              <ModoFofo>
                Modérateurs :
                <span style={{ fontWeight: '700' }}>
                  Coolman_59, Petitchampignon, Jostophe
                </span>
              </ModoFofo>
              <div>
                <LinkPanel>Contacter les modérateurs</LinkPanel> -
                <LinkPanel>Règles du forum</LinkPanel>
              </div>
              <H4Style style={{ marginTop: '1.25rem' }}>
                Sujets à ne pas manquer
              </H4Style>
              <ListeSujet>
                <Line>
                  <LinkPanel>Le Bananier de la Modération ! 🍌</LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>Datamine départ des villageois</LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>[Officiel] Topic des discord</LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>
                    Une application 3D pour faire votre île? C'est ici
                  </LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>[Officiel] Topic de pub</LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>Topic des codes 2020 ! 🏝️</LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>La Bourse aux Navets !</LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>
                    [Guide] Poissons, insectes et événements en temps réel !
                  </LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>
                    [Datamine] Poissons, Insectes et villageois
                  </LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>
                    [Guide Poisson / Insectes] Hémisphère Nord pour le mois de
                    mai V 2.0
                  </LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>
                    /!\ Un site pour faire votre île sur mesure !
                  </LinkPanel>
                </Line>
                <Line>
                  <LinkPanel>[FOSSILES] Liste entière officielle!</LinkPanel>
                </Line>
              </ListeSujet>
            </ScorllableContent>
          </ScorllableWrapper>
        </Scorllable>
      </PanelBody>
    </MainDiv>
  );
};

const Line = styled.li`
  position: relative;
  display: block;
  padding-right: 1.5625rem;
  line-height: 0.8125rem;
  padding-top: 0.1875rem;
  padding-bottom: 0.1875rem;
  border-bottom: 0.0625rem dotted transparent;
`;

const ListeSujet = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const LinkPanel = styled.a`
  color: hsla(0, 0%, 100%, 0.7);
  text-decoration: none;
`;

const ModoFofo = styled.div`
  word-wrap: break-word;
  line-height: 1.4em;
  margin-bottom: 0.5rem;
`;

const H4Style = styled.h4`
  text-transform: uppercase;
  color: #ffc926;
  font-size: 0.875rem;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  border-bottom: 0.0625rem solid #9b9ca6;
  padding-bottom: 0.5rem;
  margin: 0 0 0.5rem;
  font-weight: 700;
  line-height: 1.1;
`;
const ScorllableContent = styled.div`
  font-size: 0.75rem;
  padding: 0.625rem;
`;

const ScorllableWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  max-height: 29.8125rem;
`;

const Scorllable = styled.div`
  position: relative;
  overflow: hidden;
`;

const PanelBody = styled.div`
  border-top: 0;
  padding: 0;
  overflow: hidden;
`;

const SpanPanelHead = styled.span`
  float: right;
  text-transform: none;
  padding-right: 0.625rem;
  padding-left: 1.25rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACvSURBVCiRhZK9DcIwEIUvNEh0FEiZgJox0mYHpqCgyh706ZkhDUUkJghKEckFDf1Hc6DzJbGfdLLfZ/vJfwKIqQp4Ah9tKzc+Kw86YnW5gI3EOmb8TD5gl/CNiASt5k/dlgZ3hMGMBcPD2hEuCb9d7C9cjJXlveH92iukAmrDax9QAjdgdAGj8tKFR//gAEykNem8u/oHcAYKAdrM4p9a4OTYtQDIfRajvYi8jX99AaCHxzQQE5F1AAAAAElFTkSuQmCC)
    0 no-repeat;
  font-size: 0.875rem;
`;

const PanelHeading = styled.div`
  font-weight: 700;
  background-color: #535362;
  color: #fff;
  text-transform: uppercase;
  border-bottom: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 0 0 0 0.625rem;
  height: 1.875rem;
  line-height: 1.875rem;
  font-size: 1rem;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
`;

const MainDiv = styled.div`
  background: #2a2a2a;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  color: #fff;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
`;

export default PanelForum;
