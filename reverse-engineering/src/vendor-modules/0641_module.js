/**
 * chunk.vendor.js Module #641
 * Type: unknown
 */

function (e, t, i) {
      var n = i(642),
        r = i(12);

      function o() {}
      ((o.HEADER_LENGTH = 128),
        (o.VersionMajor = {
          v2: 2,
          v4: 4,
        }),
        (o.DeviceClass = {
          Input: 1935896178,
          Display: 1835955314,
          Output: 1886549106,
          DeviceLink: 1818848875,
          ColorSpaceConv: 1936744803,
          Abstract: 1633842036,
          NamedColor: 1852662636,
        }),
        (o.ColorSpace = {
          XYZ: 1482250784,
          Lab: 1281450528,
          Luv: 1282766368,
          YCbCr: 1497588338,
          Yxy: 1501067552,
          Rgb: 1380401696,
          Gray: 1196573017,
          Hsv: 1213421088,
          Hls: 1212961568,
          Cmyk: 1129142603,
          Cmy: 1129142560,
          Clr2: 843271250,
          Clr3: 860048466,
          Clr4: 876825682,
          Clr5: 893602898,
          Clr6: 910380114,
          Clr7: 927157330,
          Clr8: 943934546,
          Clr9: 960711762,
          ClrA: 1094929490,
          ClrB: 1111706706,
          ClrC: 1128483922,
          ClrD: 1145261138,
          ClrE: 1162038354,
          ClrF: 1178815570,
        }),
        (o.PCS = {
          XYZ: 1482250784,
          Lab: 1281450528,
        }),
        (o.Flags = {
          Embedded: 1,
          NotIndependent: 2,
        }),
        (o.Intent = {
          Perceptual: 0,
          MediaRelCol: 1,
          Saturation: 2,
          ICCAbsoluteCol: 3,
        }),
        (o.D50 = [0.9642, 1, 0.8249]),
        (o.Tags = {
          AToB0: 1093812784,
          AToB1: 1093812785,
          AToB2: 1093812786,
          BlueColorant: 1649957210,
          BlueTRC: 1649693251,
          BToA0: 1110589744,
          BToA1: 1110589745,
          BToA2: 1110589746,
          CalibrationDateTime: 1667329140,
          CharTarget: 1952543335,
          ChromaticAdaptation: 1667785060,
          Chromaticity: 1667789421,
          Copyright: 1668313716,
          CrdInfo: 1668441193,
          DeviceMfgDesc: 1684893284,
          DeviceModelDesc: 1684890724,
          DeviceSettings: 1684371059,
          Gamut: 1734438260,
          GrayTRC: 1800688195,
          GreenColorant: 1733843290,
          GreenTRC: 1733579331,
          Luminance: 1819635049,
          Measurement: 1835360627,
          MediaBlackPoint: 1651208308,
          MediaWhitePoint: 2004119668,
          NamedColor: 1852010348,
          NamedColor2: 1852009522,
          OutputResponse: 1919251312,
          Preview0: 1886545200,
          Preview1: 1886545201,
          Preview2: 1886545202,
          ProfileDescription: 1684370275,
          ProfileSequenceDesc: 1886610801,
          Ps2CRD0: 1886610480,
          Ps2CRD1: 1886610481,
          Ps2CRD2: 1886610482,
          Ps2CRD3: 1886610483,
          Ps2CSA: 1886597747,
          Ps2RenderingIntent: 1886597737,
          RedColorant: 1918392666,
          RedTRC: 1918128707,
          ScreeningDesc: 1935897188,
          Screening: 1935897198,
          Technology: 1952801640,
          UcrBg: 1650877472,
          ViewingCondDesc: 1987405156,
          ViewingConditions: 1986618743,
        }),
        (o.MFTType = {
          Mft1: 1835430961,
          Mft2: 1835430962,
        }),
        (o.MFTHeaderData = function () {}),
        (o.MFTHeaderData.prototype.numInputChannels = null),
        (o.MFTHeaderData.prototype.numOutputChannels = null),
        (o.MFTHeaderData.prototype.numCLUTGridPts = null),
        (o.MFTHeaderData.prototype.numInputTEntries = null),
        (o.MFTHeaderData.prototype.numOutputTEntries = null),
        (o.prototype.read = function (e, t, i) {
          if (e && e.byteLength <= o.HEADER_LENGTH + 4) t(null);
          else {
            var a = new n(),
              s = new DataView(e, 0, o.HEADER_LENGTH + 4),
              l = s.getUint32(0);
            ((a.profileFormatVersionMajor = s.getUint8(8)),
              (a.profileFormatVersionMinor = s.getUint8(9) >> 4),
              (a.deviceClass = s.getUint32(12)),
              (a.colorSpace = s.getUint32(16)),
              (a.PCS = s.getUint32(20)),
              (a.Flags = s.getUint16(44)),
              (a.intent = s.getUint16(64)));
            var h = this.readS15Fixed16Number(s, 68),
              A = this.readS15Fixed16Number(s, 72),
              c = this.readS15Fixed16Number(s, 76);
            if (
              ((a.illuminant = [h, A, c]),
              l == e.byteLength &&
                a.profileFormatVersionMajor == o.VersionMajor.v2 &&
                a.deviceClass == o.DeviceClass.Output &&
                a.colorSpace == o.ColorSpace.Cmyk &&
                a.PCS == o.PCS.Lab &&
                0 == (a.Flags & o.Flags.Embedded) &&
                0 == (a.Flags & o.Flags.NotIndependent) &&
                r.isEqualEps(a.illuminant[0], o.D50[0], 1e-4) &&
                r.isEqualEps(a.illuminant[1], o.D50[1], 1e-4) &&
                r.isEqualEps(a.illuminant[2], o.D50[2], 1e-4))
            ) {
              var p = s.getUint32(o.HEADER_LENGTH);
              if (l > o.HEADER_LENGTH + 4 + 12 * p)
                for (
                  var u = new DataView(e, o.HEADER_LENGTH + 4, 12 * p),
                    d = 0,
                    g = 0;
                  d < p;
                  ++d, g += 12
                ) {
                  var f = u.getUint32(g),
                    m = u.getUint32(g + 4),
                    y = u.getUint32(g + 8);
                  if (0 == (3 & m) && l >= m + y)
                    switch (f) {
                      case o.Tags.AToB1:
                      case o.Tags.BToA1:
                        this.readLuts(e, m, y, a, f);
                    }
                }
              null != a.AtoB1CLUT && null != a.BtoA1CLUT ? t(a) : t(null);
            } else t(null);
          }
        }),
        (o.prototype.readS15Fixed16Number = function (e, t) {
          return e.getInt16(t) + e.getUint16(t + 2) / 65536;
        }),
        (o.prototype.readLuts = function (e, t, i, n, r) {
          var a = new DataView(e, t, 4).getUint32(0);
          if (a == o.MFTType.Mft2) {
            var s = new DataView(e, t, 52),
              l = new o.MFTHeaderData();
            this.readMFTHeaderData(s, a, l);
            var h = 2 * (f = l.numInputChannels * l.numInputTEntries),
              A =
                2 *
                (m =
                  Math.pow(l.numCLUTGridPts, l.numInputChannels) *
                  l.numOutputChannels),
              c = 2 * (y = l.numOutputChannels * l.numOutputTEntries),
              p = new DataView(e, t + 52, h),
              u = new DataView(e, t + 52 + h, A),
              d = new DataView(e, t + 52 + h + A, c);
            r == o.Tags.AToB1
              ? ((n.AtoB1CLUTNumPts = l.numCLUTGridPts),
                (n.AtoB1InputChange = this.readUint16Table(p, f)),
                (n.AtoB1CLUT = this.readUint16Table(u, m)),
                (n.AtoB1OutputChange = this.readUint16Table(d, y)),
                (n.AtoB1normalizationRange = 65535))
              : r == o.Tags.BToA1 &&
                ((n.BtoA1CLUTNumPts = l.numCLUTGridPts),
                (n.BtoA1InputChange = this.readUint16Table(p, f)),
                (n.BtoA1CLUT = this.readUint16Table(u, m)),
                (n.BtoA1OutputChange = this.readUint16Table(d, y)),
                (n.BtoA1normalizationRange = 65535));
          } else if (a == o.MFTType.Mft1) {
            var g = new DataView(e, t, 48);
            l = new o.MFTHeaderData();
            this.readMFTHeaderData(g, a, l);
            var f = 256 * l.numInputChannels,
              m =
                Math.pow(l.numCLUTGridPts, l.numInputChannels) *
                l.numOutputChannels,
              y = 256 * l.numOutputChannels,
              _ = new Uint8Array(e, t + 48, f),
              v = new Uint8Array(e, t + 48 + f, m),
              b = new Uint8Array(e, t + 48 + f + m, y);
            r == o.Tags.AToB1
              ? ((n.AtoB1CLUTNumPts = l.numCLUTGridPts),
                (n.AtoB1InputChange = _),
                (n.AtoB1CLUT = v),
                (n.AtoB1OutputChange = b),
                (n.AtoB1normalizationRange = 255))
              : r == o.Tags.BToA1 &&
                ((n.BtoA1CLUTNumPts = l.numCLUTGridPts),
                (n.BtoA1InputChange = _),
                (n.BtoA1CLUT = v),
                (n.BtoA1OutputChange = b),
                (n.BtoA1normalizationRange = 255));
          }
        }),
        (o.prototype.readMFTHeaderData = function (e, t, i) {
          ((i.numInputChannels = e.getUint8(8)),
            (i.numOutputChannels = e.getUint8(9)),
            (i.numCLUTGridPts = e.getUint8(10)),
            t == o.MFTType.Mft2 &&
              ((i.numInputTEntries = e.getUint16(48)),
              (i.numOutputTEntries = e.getUint16(50))));
        }),
        (o.prototype.readUint16Table = function (e, t) {
          for (var i = new Uint16Array(t), n = 0; n < t; ++n)
            i[n] = e.getUint16(2 * n);
          return i;
        }),
        (e.exports = o));
    }