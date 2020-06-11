import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BlocMessageOdd = ({ img, pseudo, dateMsg, msg }) => {
  return (
    <BlocMessageForum>
      <ConteneurMessage>
        <BlocAvatar>
          <BackImg>
            <ImgDiv>
              <Img src={img}></Img>
            </ImgDiv>
          </BackImg>
        </BlocAvatar>
        <div>
          <BlocHeader>
            <PseudoMsg>{pseudo}</PseudoMsg>
            <MpPseudo>
              <LinkMpPseudo>
                <SpanMpPseudo></SpanMpPseudo>
              </LinkMpPseudo>
            </MpPseudo>
            <OptionMsg></OptionMsg>
            <DataMsg>
              <a style={{ color: '#006bd7' }}>{dateMsg}</a>
            </DataMsg>
          </BlocHeader>
          <BlocContenu>
            <TxtMsg>{msg}</TxtMsg>
          </BlocContenu>
        </div>
      </ConteneurMessage>
    </BlocMessageForum>
  );
};

const TxtMsg = styled.div`
  overflow: hidden;
`;

const DataMsg = styled.div`
  left: 4rem;
  position: absolute;
  top: 2.25rem;
  font-size: 0.6875rem;
`;

const OptionMsg = styled.div`
  line-height: 1.75rem;
  max-width: 3.875rem;
  padding-top: 0.375rem;
  float: right;
`;

const SpanMpPseudo = styled.span`
  display: inline-block;
  width: 1.125rem;
  height: 1rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAAQCAYAAAAVg5N2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA0NDA1MUFGNTYzMTExRTU5Q0Q4RUFCRkUxRkZGMjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA0NDA1MUIwNTYzMTExRTU5Q0Q4RUFCRkUxRkZGMjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ0MDUxQUQ1NjMxMTFFNTlDRDhFQUJGRTFGRkYyNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ0MDUxQUU1NjMxMTFFNTlDRDhFQUJGRTFGRkYyNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sVxEbAAAL3ElEQVR42uxb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);
  background-repeat: no-repeat;
  background-position: 0;
`;

const LinkMpPseudo = styled.a`
  position: relative;
  display: block;
  top: 1rem;
`;

const MpPseudo = styled.div`
  float: left;
  line-height: 0;
`;

const PseudoMsg = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  float: left;
  max-width: 12.5rem;
  margin-right: 0.75rem;
  font-size: 1.125rem;
  line-height: 1em;
  position: relative;
  top: 0.75rem;
  display: block;
  color: #3a9d23 !important;
  height: 1.375rem;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  margin-left: 3.25rem;
`;

const BlocHeader = styled.div`
  border-bottom: 0.0625rem dotted #c6c6d0;
  overflow: hidden;
  height: 4.25rem;
  margin-bottom: 0.75rem;
  margin-top: -0.75rem;
`;

const BlocContenu = styled.div`
  overflow-wrap: break-word;
  padding: 0;
`;

const Img = styled.img`
  max-width: 2.5rem;
  max-height: 2.5rem;
  vertical-align: middle;
  border: 0;
`;

const ImgDiv = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const BackImg = styled.div`
  background: #fff;
  width: 2.75rem;
  height: 2.75rem;
  display: table;
  text-align: center;
  border: 0.0625rem solid #dbdbea;
`;

const BlocAvatar = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
`;

const ConteneurMessage = styled.div`
  padding: 0.75rem 0.75rem;
  position: relative;
  overflow: hidden;
`;

const BlocMessageForum = styled.div`
  margin-bottom: 0.9375rem;
  position: relative;
  font-size: 0.875rem;
  line-height: 1.375rem;
  background: #fff;
  border: 0.0625rem solid #887c7c;
`;

BlocMessageOdd.propTypes = {
  img: PropTypes.string,
  pseudo: PropTypes.string,
  dateMsg: PropTypes.string,
  msg: PropTypes.any
};

export default BlocMessageOdd;
