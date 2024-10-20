import Image from 'next/image';

import React from 'react';

interface Props {
  type?: String;
}

const BrandLogo = ({ type = 'light' }: Props) => {
  if (type == 'light')
    return (
      <svg
        width={200}
        viewBox="0 0 1500 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_284_4)">
          <g clip-path="url(#clip1_284_4)">
            <g clip-path="url(#clip2_284_4)">
              <g clip-path="url(#clip3_284_4)">
                <g clip-path="url(#clip4_284_4)">
                  <g clip-path="url(#clip5_284_4)">
                    <g clip-path="url(#clip6_284_4)">
                      <path
                        d="M755.357 75.5713H779.258V211.732H756.924V118.477L715.39 211.732H699.913L658.183 118.477V211.732H635.849V75.5713H659.946L707.749 182.345L755.357 75.5713ZM801.201 157.268C801.201 146.426 803.462 136.826 807.98 128.468C812.474 120.111 818.61 113.606 826.396 108.955C834.154 104.332 842.735 102.02 852.139 102.02C860.63 102.02 868.047 103.677 874.395 106.996C880.715 110.338 885.77 114.492 889.559 119.456V103.783H912.089V211.732H889.559V195.667C885.77 200.761 880.613 205.005 874.081 208.402C867.55 211.799 860.105 213.496 851.747 213.496C842.472 213.496 833.985 211.105 826.278 206.325C818.571 201.572 812.474 194.911 807.98 186.342C803.462 177.8 801.201 168.11 801.201 157.268ZM889.559 157.66C889.559 150.215 888.031 143.75 884.974 138.264C881.891 132.779 877.87 128.598 872.906 125.726C868.033 122.877 862.485 121.389 856.841 121.415C851.212 121.385 845.673 122.831 840.776 125.608C835.811 128.429 831.803 132.555 828.747 137.99C825.663 143.397 824.123 149.823 824.123 157.268C824.123 164.713 825.663 171.244 828.747 176.859C831.803 182.474 835.851 186.745 840.893 189.672C845.909 192.623 851.226 194.1 856.841 194.1C862.485 194.127 868.033 192.638 872.906 189.79C877.87 186.918 881.891 182.698 884.974 177.134C888.031 171.597 889.559 165.104 889.559 157.66ZM995.941 102.02C1004.43 102.02 1012.03 103.783 1018.75 107.31C1025.48 110.836 1030.75 116.059 1034.54 122.983C1038.32 129.906 1040.22 138.264 1040.22 148.06V211.732H1018.08V151.39C1018.08 141.724 1015.66 134.307 1010.83 129.134C1006 123.99 999.4 121.415 991.043 121.415C982.685 121.415 976.063 123.99 971.177 129.134C966.267 134.307 963.81 141.724 963.81 151.39V211.732H941.476V103.783H963.81V116.126C967.466 111.686 972.145 108.223 977.838 105.742C983.547 103.253 989.713 101.985 995.941 102.02ZM1144.05 103.783H1166.39V211.732H1144.05V198.998C1140.53 203.437 1135.93 206.925 1130.26 209.46C1124.57 212.018 1118.52 213.3 1112.12 213.3C1103.63 213.3 1096.03 211.536 1089.31 208.01C1082.57 204.483 1077.27 199.26 1073.41 192.337C1069.57 185.413 1067.65 177.055 1067.65 167.26V103.783H1089.78V163.929C1089.78 173.595 1092.2 181.001 1097.03 186.146C1101.86 191.318 1108.46 193.904 1116.82 193.904C1125.18 193.904 1131.8 191.318 1136.69 186.146C1141.6 181.001 1144.05 173.595 1144.05 163.929V103.783ZM1188.33 157.268C1188.33 146.426 1190.57 136.826 1195.07 128.468C1199.59 120.111 1205.74 113.606 1213.52 108.955C1221.28 104.332 1229.86 102.02 1239.27 102.02C1247.76 102.02 1255.18 103.677 1261.52 106.996C1267.84 110.338 1272.9 114.492 1276.69 119.456V103.783H1299.22V211.732H1276.69V195.667C1272.9 200.761 1267.74 205.005 1261.21 208.402C1254.68 211.799 1247.23 213.496 1238.88 213.496C1229.6 213.496 1221.11 211.105 1213.41 206.325C1205.7 201.572 1199.59 194.911 1195.07 186.342C1190.57 177.8 1188.33 168.11 1188.33 157.268ZM1276.69 157.66C1276.69 150.215 1275.16 143.75 1272.1 138.264C1269.02 132.779 1265 128.598 1260.03 125.726C1255.16 122.877 1249.61 121.389 1243.97 121.415C1238.34 121.385 1232.8 122.831 1227.9 125.608C1222.94 128.429 1218.93 132.555 1215.87 137.99C1212.79 143.397 1211.25 149.823 1211.25 157.268C1211.25 164.713 1212.79 171.244 1215.87 176.859C1218.93 182.474 1222.98 186.745 1228.02 189.672C1233.04 192.623 1238.35 194.1 1243.97 194.1C1249.61 194.127 1255.16 192.638 1260.03 189.79C1265 186.918 1269.02 182.698 1272.1 177.134C1275.16 171.597 1276.69 165.104 1276.69 157.66ZM1328.6 66.7551H1350.94V211.732H1328.6V66.7551Z"
                        fill="#3A3A3A"
                      />
                      <path
                        d="M474.729 234.067H569.747V252.287H533.503V370.228H511.169V252.287H474.729V234.067ZM614.612 277.952C617.75 272.591 622.252 268.156 627.66 265.1C633.067 262.043 639.493 260.515 646.938 260.515V283.633H641.256C632.507 283.633 625.885 285.855 621.391 290.294C616.873 294.734 614.612 302.441 614.612 313.412V370.228H592.278V262.278H614.612V277.952ZM766.446 313.608C766.473 317.28 766.211 320.949 765.662 324.579H683.182C683.837 333.2 687.034 340.123 692.782 345.346C698.53 350.57 705.583 353.183 713.941 353.183C725.958 353.183 734.445 348.156 739.41 338.098H763.507C760.243 348.023 754.339 356.149 745.797 362.469C737.227 368.817 726.609 371.991 713.941 371.991C703.624 371.991 694.389 369.667 686.238 365.016C678.061 360.393 671.662 353.861 667.039 345.425C662.388 337.012 660.064 327.256 660.064 316.155C660.064 305.055 662.325 295.282 666.843 286.846C671.337 278.434 677.669 271.945 685.847 267.372C693.997 262.8 703.361 260.515 713.941 260.515C724.128 260.515 733.207 262.737 741.173 267.176C749.031 271.506 755.488 277.991 759.785 285.867C764.224 293.911 766.446 303.158 766.446 313.608ZM683.378 306.555H743.132C743.003 298.327 740.064 291.732 734.316 286.768C728.568 281.803 721.452 279.323 712.961 279.323C705.254 279.323 698.659 281.764 693.174 286.65C687.688 291.56 684.424 298.197 683.378 306.555ZM780.944 315.763C780.944 304.921 783.205 295.321 787.722 286.964C792.217 278.606 798.353 272.102 806.138 267.451C813.897 262.827 822.478 260.515 831.882 260.515C840.373 260.515 847.79 262.173 854.138 265.491C860.458 268.834 865.513 272.987 869.302 277.952V262.278H891.832V370.228H869.302V354.163C865.513 359.256 860.356 363.5 853.824 366.897C847.292 370.294 839.848 371.991 831.49 371.991C822.215 371.991 813.728 369.601 806.021 364.82C798.314 360.067 792.217 353.406 787.722 344.837C783.205 336.295 780.944 326.605 780.944 315.763ZM869.302 316.155C869.302 308.71 867.762 302.245 864.678 296.759C861.622 291.274 857.613 287.093 852.649 284.221C847.776 281.372 842.228 279.884 836.584 279.911C830.954 279.881 825.415 281.326 820.519 284.103C815.554 286.925 811.546 291.051 808.489 296.485C805.406 301.892 803.866 308.318 803.866 315.763C803.866 323.208 805.406 329.74 808.489 335.355C811.546 340.97 815.582 345.241 820.597 348.168C825.64 351.118 830.969 352.595 836.584 352.595C842.228 352.622 847.776 351.134 852.649 348.285C857.613 345.413 861.622 341.193 864.678 335.629C867.762 330.092 869.302 323.6 869.302 316.155ZM973.528 280.499H947.276V340.253C947.276 344.3 948.228 347.2 950.136 348.951C952.017 350.726 955.242 351.616 959.814 351.616H973.528V370.228H955.896C945.838 370.228 938.134 367.877 932.778 363.175C927.422 358.473 924.745 350.832 924.745 340.253V280.499H912.011V262.278H924.745V235.438H947.276V262.278H973.528V280.499ZM1124.77 260.515C1133.27 260.515 1140.88 262.278 1147.62 265.805C1154.33 269.331 1159.61 274.554 1163.45 281.478C1167.32 288.402 1169.25 296.759 1169.25 306.555V370.228H1147.11V309.886C1147.11 300.219 1144.69 292.802 1139.86 287.63C1135.03 282.485 1128.43 279.911 1120.07 279.911C1111.72 279.911 1105.08 282.485 1100.17 287.63C1095.28 292.802 1092.84 300.219 1092.84 309.886V370.228H1070.7V309.886C1070.7 300.219 1068.28 292.802 1063.45 287.63C1058.62 282.485 1052.02 279.911 1043.67 279.911C1035.31 279.911 1028.67 282.485 1023.76 287.63C1018.87 292.802 1016.43 300.219 1016.43 309.886V370.228H994.099V262.278H1016.43V274.621C1020.09 270.182 1024.73 266.718 1030.34 264.238C1036.02 261.743 1042.16 260.475 1048.37 260.515C1056.99 260.515 1064.7 262.345 1071.49 266.001C1078.28 269.657 1083.5 274.946 1087.16 281.87C1090.42 275.338 1095.52 270.142 1102.44 266.275C1109.26 262.461 1116.96 260.477 1124.77 260.515ZM1296.59 313.608C1296.62 317.28 1296.36 320.949 1295.81 324.579H1213.33C1213.98 333.2 1217.18 340.123 1222.93 345.346C1228.68 350.57 1235.73 353.183 1244.09 353.183C1256.1 353.183 1264.59 348.156 1269.56 338.098H1293.65C1290.39 348.023 1284.47 356.149 1275.9 362.469C1267.36 368.817 1256.75 371.991 1244.09 371.991C1233.77 371.991 1224.52 369.667 1216.35 365.016C1208.2 360.393 1201.8 353.861 1197.15 345.425C1192.52 337.012 1190.21 327.256 1190.21 316.155C1190.21 305.055 1192.46 295.282 1196.95 286.846C1201.47 278.434 1207.82 271.945 1215.99 267.372C1224.14 262.8 1233.51 260.515 1244.09 260.515C1254.27 260.515 1263.35 262.737 1271.32 267.176C1279.18 271.506 1285.63 277.991 1289.93 285.867C1294.37 293.911 1296.59 303.158 1296.59 313.608ZM1213.52 306.555H1273.28C1273.15 298.327 1270.21 291.732 1264.46 286.768C1258.71 281.803 1251.6 279.323 1243.11 279.323C1235.4 279.323 1228.81 281.764 1223.32 286.65C1217.83 291.56 1214.57 298.197 1213.52 306.555ZM1373 260.515C1381.49 260.515 1389.09 262.278 1395.8 265.805C1402.54 269.331 1407.81 274.554 1411.59 281.478C1415.38 288.402 1417.28 296.759 1417.28 306.555V370.228H1395.14V309.886C1395.14 300.219 1392.72 292.802 1387.89 287.63C1383.06 282.485 1376.46 279.911 1368.1 279.911C1359.74 279.911 1353.11 282.485 1348.2 287.63C1343.31 292.802 1340.87 300.219 1340.87 309.886V370.228H1318.53V262.278H1340.87V274.621C1344.52 270.182 1349.19 266.718 1354.86 264.238C1360.58 261.751 1366.76 260.483 1373 260.515ZM1497.99 280.499H1471.74V340.253C1471.74 344.3 1472.69 347.2 1474.6 348.951C1476.48 350.726 1479.71 351.616 1484.28 351.616H1497.99V370.228H1480.36C1470.3 370.228 1462.6 367.877 1457.24 363.175C1451.89 358.473 1449.21 350.832 1449.21 340.253V280.499H1436.48V262.278H1449.21V235.438H1471.74V262.278H1497.99V280.499Z"
                        fill="#3A3A3A"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clip-path="url(#clip7_284_4)">
                <g clip-path="url(#clip8_284_4)">
                  <path
                    d="M430.352 136.624H303.795V10.0679C303.795 7.48596 302.77 5.0098 300.944 3.18411C299.118 1.35842 296.642 0.332764 294.06 0.332764H148.033C145.452 0.332764 142.975 1.35842 141.15 3.18411C139.324 5.0098 138.298 7.48596 138.298 10.0679V136.624H11.7419C9.16003 136.624 6.68387 137.65 4.85818 139.476C3.0325 141.301 2.00684 143.777 2.00684 146.359V292.386C2.00684 294.968 3.0325 297.444 4.85818 299.27C6.68387 301.095 9.16003 302.121 11.7419 302.121H138.298V428.678C138.298 431.259 139.324 433.736 141.15 435.561C142.975 437.387 145.452 438.413 148.033 438.413H294.06C296.642 438.413 299.118 437.387 300.944 435.561C302.77 433.736 303.795 431.259 303.795 428.678V302.121H430.352C432.934 302.121 435.41 301.095 437.235 299.27C439.061 297.444 440.087 294.968 440.087 292.386V146.359C440.087 143.777 439.061 141.301 437.235 139.476C435.41 137.65 432.934 136.624 430.352 136.624ZM226.941 237.684C233.532 225.895 246.455 216.53 262.241 212.29C277.773 208.119 293.403 209.618 305.1 216.369C306.297 217.065 307.431 217.801 308.492 218.565C310.629 220.127 311.393 222.955 310.318 225.379C304.384 238.653 290.575 249.337 273.412 253.937C257.889 258.109 242.25 256.61 230.548 249.839C229.935 249.498 229.395 249.099 228.82 248.724C221.134 250.817 214.88 255.432 211.132 261.959L189.13 300.052C189.836 299.833 190.547 299.663 191.262 299.498C197.858 287.694 210.771 278.329 226.567 274.079C242.084 269.927 257.704 271.417 269.416 278.178C270.599 278.859 271.752 279.604 272.804 280.383C274.955 281.916 275.714 284.763 274.639 287.178C268.695 300.466 254.905 311.136 237.723 315.736C222.2 319.907 206.576 318.418 194.854 311.652C194.256 311.301 193.715 310.902 193.141 310.532C185.441 312.62 179.191 317.24 175.433 323.753L162.412 346.304C161.669 347.585 160.449 348.519 159.018 348.903C157.588 349.286 156.064 349.086 154.78 348.348C154.144 347.985 153.586 347.499 153.139 346.918C152.691 346.338 152.363 345.675 152.174 344.967C151.984 344.259 151.937 343.521 152.034 342.794C152.131 342.068 152.371 341.368 152.74 340.735L183.907 286.745C187.66 280.241 188.541 272.551 186.531 264.85C186.146 264.636 185.752 264.48 185.372 264.261C173.656 257.5 164.564 244.699 160.397 229.181C155.797 211.998 158.153 194.704 166.686 182.934C168.229 180.792 171.067 180.028 173.481 181.119C174.688 181.649 175.895 182.267 177.078 182.944C188.785 189.71 197.887 202.492 202.058 218.015C206.371 234.112 204.585 250.301 197.303 261.969C197.395 262.324 197.527 262.665 197.605 263.015L225.851 214.087C229.434 207.88 230.431 200.589 228.772 193.249C228.153 192.937 227.526 192.645 226.917 192.299C215.206 185.543 206.108 172.756 201.942 157.229C197.337 140.051 199.688 122.752 208.235 110.987C209.769 108.831 212.616 108.076 215.026 109.162C216.233 109.692 217.44 110.305 218.628 110.987C230.339 117.763 239.432 130.545 243.608 146.062C247.828 161.853 246.178 177.721 239.251 189.325C239.363 189.754 239.514 190.182 239.612 190.601C245.131 182.608 253.45 176.996 263.429 174.557C269.81 162.223 283.055 152.39 299.351 148.019C314.869 143.862 330.499 145.347 342.21 152.103C343.398 152.789 344.527 153.529 345.588 154.308C347.744 155.856 348.494 158.694 347.418 161.103C341.485 174.387 327.68 185.061 310.498 189.681C294.98 193.838 279.36 192.338 267.649 185.587C267.415 185.456 267.225 185.29 266.997 185.164C258.488 186.999 251.6 191.832 247.565 198.841L224.805 238.249C225.515 238.045 226.226 237.865 226.941 237.684Z"
                    fill="#3889A4"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_284_4">
            <rect width="1500" height="438.75" fill="white" />
          </clipPath>
          <clipPath id="clip1_284_4">
            <rect
              width="1495.99"
              height="438.081"
              fill="white"
              transform="translate(2.00684 0.332764)"
            />
          </clipPath>
          <clipPath id="clip2_284_4">
            <rect
              width="1495.99"
              height="438.081"
              fill="white"
              transform="translate(2.00684 0.332764)"
            />
          </clipPath>
          <clipPath id="clip3_284_4">
            <rect
              width="1023.26"
              height="316.992"
              fill="white"
              transform="translate(474.729 60.8772)"
            />
          </clipPath>
          <clipPath id="clip4_284_4">
            <rect
              width="1023.26"
              height="316.992"
              fill="white"
              transform="translate(474.729 60.8772)"
            />
          </clipPath>
          <clipPath id="clip5_284_4">
            <rect
              width="1023.26"
              height="316.992"
              fill="white"
              transform="translate(474.729 60.8772)"
            />
          </clipPath>
          <clipPath id="clip6_284_4">
            <rect
              width="1023.26"
              height="316.992"
              fill="white"
              transform="translate(474.729 60.8772)"
            />
          </clipPath>
          <clipPath id="clip7_284_4">
            <rect
              width="438.08"
              height="438.08"
              fill="white"
              transform="translate(2.00684 0.332764)"
            />
          </clipPath>
          <clipPath id="clip8_284_4">
            <rect
              width="438.08"
              height="438.08"
              fill="white"
              transform="translate(2.00684 0.332764)"
            />
          </clipPath>
        </defs>
      </svg>
    );

  if (type == 'dark')
    return (
      <svg
        width={200}
        viewBox="0 0 1500 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_284_31)">
          <g clip-path="url(#clip1_284_31)">
            <g clip-path="url(#clip2_284_31)">
              <g clip-path="url(#clip3_284_31)">
                <g clip-path="url(#clip4_284_31)">
                  <g clip-path="url(#clip5_284_31)">
                    <g clip-path="url(#clip6_284_31)">
                      <path
                        d="M755.358 75.5735H779.259V211.734H756.925V118.479L715.391 211.734H699.914L658.184 118.479V211.734H635.85V75.5735H659.947L707.75 182.347L755.358 75.5735ZM801.202 157.27C801.202 146.428 803.463 136.828 807.98 128.471C812.475 120.113 818.611 113.608 826.396 108.957C834.155 104.334 842.736 102.022 852.14 102.022C860.631 102.022 868.048 103.679 874.396 106.998C880.716 110.341 885.77 114.494 889.559 119.458V103.785H912.09V211.734H889.559V195.669C885.77 200.763 880.614 205.007 874.082 208.404C867.55 211.801 860.106 213.498 851.748 213.498C842.473 213.498 833.986 211.107 826.279 206.327C818.572 201.574 812.475 194.913 807.98 186.344C803.463 177.802 801.202 168.112 801.202 157.27ZM889.559 157.662C889.559 150.217 888.031 143.752 884.975 138.266C881.891 132.781 877.871 128.6 872.907 125.728C867.942 122.856 862.59 121.418 856.842 121.418C851.094 121.418 845.741 122.816 840.777 125.61C835.812 128.431 831.804 132.557 828.747 137.992C825.664 143.399 824.124 149.825 824.124 157.27C824.124 164.715 825.664 171.247 828.747 176.862C831.804 182.476 835.851 186.747 840.894 189.674C845.91 192.625 851.227 194.102 856.842 194.102C862.59 194.102 867.942 192.664 872.907 189.792C877.871 186.92 881.891 182.7 884.975 177.136C888.031 171.599 889.559 165.107 889.559 157.662ZM995.941 102.022C1004.43 102.022 1012.03 103.785 1018.75 107.312C1025.49 110.838 1030.75 116.061 1034.54 122.985C1038.33 129.909 1040.22 138.266 1040.22 148.062V211.734H1018.08V151.393C1018.08 141.726 1015.66 134.309 1010.83 129.137C1006 123.992 999.401 121.418 991.043 121.418C982.686 121.418 976.064 123.992 971.178 129.137C966.268 134.309 963.811 141.726 963.811 151.393V211.734H941.477V103.785H963.811V116.128C967.467 111.688 972.145 108.225 977.839 105.744C983.508 103.264 989.543 102.022 995.941 102.022ZM1144.05 103.785H1166.39V211.734H1144.05V199C1140.53 203.439 1135.93 206.927 1130.26 209.462C1124.57 212.02 1118.52 213.302 1112.12 213.302C1103.63 213.302 1096.03 211.538 1089.31 208.012C1082.57 204.486 1077.27 199.262 1073.41 192.339C1069.57 185.415 1067.65 177.057 1067.65 167.262V103.785H1089.78V163.931C1089.78 173.598 1092.2 181.003 1097.03 186.148C1101.86 191.32 1108.46 193.906 1116.82 193.906C1125.18 193.906 1131.8 191.32 1136.69 186.148C1141.6 181.003 1144.05 173.598 1144.05 163.931V103.785ZM1188.33 157.27C1188.33 146.428 1190.57 136.828 1195.07 128.471C1199.59 120.113 1205.74 113.608 1213.52 108.957C1221.28 104.334 1229.86 102.022 1239.27 102.022C1247.76 102.022 1255.18 103.679 1261.52 106.998C1267.84 110.341 1272.9 114.494 1276.69 119.458V103.785H1299.22V211.734H1276.69V195.669C1272.9 200.763 1267.74 205.007 1261.21 208.404C1254.68 211.801 1247.23 213.498 1238.88 213.498C1229.6 213.498 1221.11 211.107 1213.41 206.327C1205.7 201.574 1199.59 194.913 1195.07 186.344C1190.57 177.802 1188.33 168.112 1188.33 157.27ZM1276.69 157.662C1276.69 150.217 1275.16 143.752 1272.1 138.266C1269.02 132.781 1265 128.6 1260.03 125.728C1255.07 122.856 1249.72 121.418 1243.97 121.418C1238.22 121.418 1232.87 122.816 1227.9 125.61C1222.94 128.431 1218.93 132.557 1215.88 137.992C1212.79 143.399 1211.25 149.825 1211.25 157.27C1211.25 164.715 1212.79 171.247 1215.88 176.862C1218.93 182.476 1222.98 186.747 1228.02 189.674C1233.04 192.625 1238.35 194.102 1243.97 194.102C1249.72 194.102 1255.07 192.664 1260.03 189.792C1265 186.92 1269.02 182.7 1272.1 177.136C1275.16 171.599 1276.69 165.107 1276.69 157.662ZM1328.6 66.7573H1350.94V211.734H1328.6V66.7573Z"
                        fill="white"
                      />
                      <path
                        d="M474.729 234.069H569.748V252.289H533.504V370.229H511.17V252.289H474.729V234.069ZM614.613 277.954C617.877 272.468 622.226 268.185 627.661 265.102C633.068 262.045 639.494 260.517 646.939 260.517V283.635H641.257C632.508 283.635 625.886 285.857 621.391 290.296C616.874 294.736 614.613 302.443 614.613 313.414V370.229H592.278V262.28H614.613V277.954ZM766.447 313.61C766.447 317.658 766.184 321.317 765.663 324.581H683.183C683.837 333.202 687.035 340.125 692.783 345.348C698.531 350.571 705.584 353.185 713.942 353.185C725.959 353.185 734.446 348.158 739.411 338.099H763.508C760.244 348.024 754.339 356.151 745.797 362.471C737.228 368.819 726.609 371.993 713.942 371.993C703.625 371.993 694.389 369.669 686.239 365.018C678.062 360.395 671.663 353.863 667.04 345.427C662.389 337.014 660.065 327.258 660.065 316.157C660.065 305.056 662.326 295.284 666.844 286.848C671.338 278.435 677.67 271.947 685.847 267.374C693.997 262.801 703.362 260.517 713.942 260.517C724.129 260.517 733.208 262.739 741.174 267.178C749.14 271.618 755.346 277.848 759.786 285.869C764.225 293.913 766.447 303.16 766.447 313.61ZM683.379 306.557H743.133C743.004 298.329 740.065 291.734 734.317 286.77C728.569 281.805 721.453 279.325 712.962 279.325C705.255 279.325 698.66 281.766 693.175 286.652C687.689 291.562 684.425 298.199 683.379 306.557ZM780.945 315.765C780.945 304.923 783.205 295.323 787.723 286.966C792.217 278.608 798.354 272.104 806.139 267.453C813.897 262.829 822.478 260.517 831.882 260.517C840.373 260.517 847.791 262.175 854.138 265.493C860.459 268.836 865.513 272.989 869.302 277.954V262.28H891.832V370.229H869.302V354.164C865.513 359.258 860.357 363.502 853.825 366.899C847.293 370.296 839.848 371.993 831.491 371.993C822.216 371.993 813.729 369.603 806.022 364.822C798.314 360.069 792.217 353.408 787.723 344.839C783.205 336.297 780.945 326.607 780.945 315.765ZM869.302 316.157C869.302 308.712 867.762 302.247 864.679 296.761C861.622 291.276 857.614 287.095 852.649 284.223C847.685 281.351 842.333 279.913 836.584 279.913C830.836 279.913 825.484 281.312 820.519 284.105C815.555 286.926 811.546 291.052 808.49 296.487C805.406 301.894 803.867 308.32 803.867 315.765C803.867 323.21 805.406 329.742 808.49 335.357C811.546 340.972 815.582 345.242 820.598 348.169C825.641 351.12 830.969 352.597 836.584 352.597C842.333 352.597 847.685 351.159 852.649 348.287C857.614 345.415 861.622 341.195 864.679 335.631C867.762 330.094 869.302 323.602 869.302 316.157ZM973.529 280.5H947.276V340.255C947.276 344.302 948.228 347.202 950.137 348.953C952.017 350.728 955.242 351.618 959.815 351.618H973.529V370.229H955.897C945.838 370.229 938.135 367.879 932.779 363.177C927.422 358.475 924.746 350.834 924.746 340.255V280.5H912.012V262.28H924.746V235.44H947.276V262.28H973.529V280.5ZM1124.78 260.517C1133.27 260.517 1140.88 262.28 1147.62 265.807C1154.33 269.333 1159.61 274.556 1163.45 281.48C1167.32 288.404 1169.25 296.761 1169.25 306.557V370.229H1147.11V309.888C1147.11 300.221 1144.69 292.804 1139.86 287.632C1135.03 282.487 1128.43 279.913 1120.07 279.913C1111.72 279.913 1105.08 282.487 1100.17 287.632C1095.28 292.804 1092.84 300.221 1092.84 309.888V370.229H1070.7V309.888C1070.7 300.221 1068.29 292.804 1063.45 287.632C1058.62 282.487 1052.02 279.913 1043.67 279.913C1035.31 279.913 1028.67 282.487 1023.76 287.632C1018.88 292.804 1016.43 300.221 1016.43 309.888V370.229H994.1V262.28H1016.43V274.623C1020.09 270.184 1024.73 266.72 1030.34 264.24C1035.96 261.759 1041.97 260.517 1048.37 260.517C1056.99 260.517 1064.7 262.347 1071.49 266.003C1078.28 269.659 1083.5 274.948 1087.16 281.872C1090.42 275.34 1095.52 270.144 1102.44 266.277C1109.36 262.437 1116.81 260.517 1124.78 260.517ZM1296.59 313.61C1296.59 317.658 1296.33 321.317 1295.81 324.581H1213.33C1213.98 333.202 1217.18 340.125 1222.93 345.348C1228.68 350.571 1235.73 353.185 1244.09 353.185C1256.1 353.185 1264.59 348.158 1269.56 338.099H1293.65C1290.39 348.024 1284.47 356.151 1275.9 362.471C1267.36 368.819 1256.76 371.993 1244.09 371.993C1233.77 371.993 1224.52 369.669 1216.35 365.018C1208.2 360.395 1201.8 353.863 1197.15 345.427C1192.52 337.014 1190.21 327.258 1190.21 316.157C1190.21 305.056 1192.46 295.284 1196.95 286.848C1201.47 278.435 1207.82 271.947 1215.99 267.374C1224.14 262.801 1233.51 260.517 1244.09 260.517C1254.27 260.517 1263.35 262.739 1271.32 267.178C1279.29 271.618 1285.49 277.848 1289.93 285.869C1294.37 293.913 1296.59 303.16 1296.59 313.61ZM1213.52 306.557H1273.28C1273.15 298.329 1270.21 291.734 1264.46 286.77C1258.71 281.805 1251.6 279.325 1243.11 279.325C1235.4 279.325 1228.81 281.766 1223.32 286.652C1217.83 291.562 1214.57 298.199 1213.52 306.557ZM1373 260.517C1381.49 260.517 1389.09 262.28 1395.8 265.807C1402.54 269.333 1407.81 274.556 1411.59 281.48C1415.38 288.404 1417.28 296.761 1417.28 306.557V370.229H1395.14V309.888C1395.14 300.221 1392.72 292.804 1387.89 287.632C1383.06 282.487 1376.46 279.913 1368.1 279.913C1359.74 279.913 1353.11 282.487 1348.2 287.632C1343.31 292.804 1340.87 300.221 1340.87 309.888V370.229H1318.54V262.28H1340.87V274.623C1344.53 270.184 1349.19 266.72 1354.86 264.24C1360.55 261.759 1366.6 260.517 1373 260.517ZM1497.99 280.5H1471.74V340.255C1471.74 344.302 1472.69 347.202 1474.6 348.953C1476.48 350.728 1479.71 351.618 1484.28 351.618H1497.99V370.229H1480.36C1470.3 370.229 1462.6 367.879 1457.24 363.177C1451.89 358.475 1449.21 350.834 1449.21 340.255V280.5H1436.48V262.28H1449.21V235.44H1471.74V262.28H1497.99V280.5Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clip-path="url(#clip7_284_31)">
                <g clip-path="url(#clip8_284_31)">
                  <path
                    d="M430.352 136.626H303.796V10.0698C303.796 7.48793 302.77 5.01176 300.944 3.18607C299.119 1.36038 296.643 0.334717 294.061 0.334717H148.034C145.452 0.334717 142.976 1.36038 141.15 3.18607C139.324 5.01176 138.299 7.48793 138.299 10.0698V136.626H11.742C9.16005 136.626 6.68388 137.652 4.85819 139.478C3.0325 141.304 2.00684 143.78 2.00684 146.362V292.388C2.00684 294.97 3.0325 297.447 4.85819 299.272C6.68388 301.098 9.16005 302.124 11.742 302.124H138.299V428.68C138.299 431.262 139.324 433.738 141.15 435.564C142.976 437.39 145.452 438.415 148.034 438.415H294.061C296.643 438.415 299.119 437.39 300.944 435.564C302.77 433.738 303.796 431.262 303.796 428.68V302.124H430.352C432.934 302.124 435.41 301.098 437.236 299.272C439.062 297.447 440.087 294.97 440.087 292.388V146.362C440.087 143.78 439.062 141.304 437.236 139.478C435.41 137.652 432.934 136.626 430.352 136.626ZM226.942 237.687C233.532 225.898 246.456 216.532 262.241 212.293C277.774 208.121 293.403 209.62 305.1 216.372C306.298 217.068 307.432 217.803 308.493 218.567C310.63 220.13 311.394 222.958 310.318 225.382C304.385 238.655 290.575 249.34 273.412 253.94C257.89 258.111 242.25 256.612 230.549 249.841C229.935 249.5 229.395 249.101 228.821 248.726C221.135 250.819 214.88 255.434 211.132 261.961L189.131 300.055C189.836 299.836 190.547 299.665 191.263 299.5C197.858 287.696 210.772 278.331 226.567 274.082C242.085 269.93 257.705 271.419 269.416 278.18C270.599 278.862 271.753 279.606 272.804 280.385C274.955 281.918 275.715 284.766 274.639 287.18C268.696 300.469 254.906 311.138 237.723 315.738C222.201 319.91 206.576 318.42 194.855 311.654C194.256 311.304 193.716 310.905 193.141 310.535C185.441 312.623 179.191 317.242 175.433 323.755L162.412 346.306C161.669 347.588 160.449 348.522 159.019 348.905C157.588 349.288 156.064 349.089 154.78 348.351C154.144 347.987 153.586 347.501 153.139 346.921C152.692 346.34 152.364 345.677 152.174 344.969C151.984 344.262 151.937 343.523 152.034 342.797C152.131 342.071 152.372 341.371 152.741 340.738L183.908 286.747C187.661 280.244 188.542 272.553 186.531 264.853C186.147 264.639 185.752 264.483 185.373 264.264C173.657 257.503 164.564 244.701 160.397 229.183C155.797 212.001 158.153 194.706 166.686 182.936C168.229 180.795 171.067 180.031 173.481 181.121C174.688 181.651 175.896 182.27 177.078 182.946C188.785 189.712 197.887 202.494 202.059 218.017C206.371 234.114 204.585 250.304 197.303 261.971C197.396 262.326 197.527 262.667 197.605 263.018L225.851 214.089C229.434 207.883 230.432 200.591 228.772 193.251C228.154 192.939 227.526 192.647 226.917 192.302C215.206 185.545 206.109 172.758 201.942 157.231C197.337 140.053 199.688 122.754 208.236 110.989C209.769 108.833 212.617 108.078 215.026 109.164C216.233 109.694 217.44 110.308 218.628 110.989C230.339 117.765 239.432 130.547 243.608 146.065C247.828 161.855 246.178 177.723 239.252 189.328C239.364 189.756 239.515 190.184 239.612 190.603C245.132 182.61 253.451 176.998 263.429 174.559C269.81 162.225 283.055 152.393 299.352 148.021C314.869 143.865 330.499 145.349 342.211 152.105C343.398 152.792 344.527 153.532 345.589 154.31C347.745 155.858 348.495 158.696 347.419 161.105C341.485 174.389 327.681 185.064 310.498 189.683C294.981 193.84 279.361 192.341 267.649 185.589C267.416 185.458 267.226 185.292 266.997 185.166C258.488 187.001 251.601 191.834 247.566 198.844L224.805 238.251C225.516 238.047 226.226 237.867 226.942 237.687Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_284_31">
            <rect width="1500" height="438.75" fill="white" />
          </clipPath>
          <clipPath id="clip1_284_31">
            <rect
              width="1495.99"
              height="438.081"
              fill="white"
              transform="translate(2.00684 0.334717)"
            />
          </clipPath>
          <clipPath id="clip2_284_31">
            <rect
              width="1495.99"
              height="438.081"
              fill="white"
              transform="translate(2.00684 0.334717)"
            />
          </clipPath>
          <clipPath id="clip3_284_31">
            <rect
              width="1023.26"
              height="316.99"
              fill="white"
              transform="translate(474.729 60.8799)"
            />
          </clipPath>
          <clipPath id="clip4_284_31">
            <rect
              width="1023.26"
              height="316.99"
              fill="white"
              transform="translate(474.729 60.8799)"
            />
          </clipPath>
          <clipPath id="clip5_284_31">
            <rect
              width="1023.26"
              height="316.99"
              fill="white"
              transform="translate(474.729 60.8799)"
            />
          </clipPath>
          <clipPath id="clip6_284_31">
            <rect
              width="1023.26"
              height="316.99"
              fill="white"
              transform="translate(474.729 60.8799)"
            />
          </clipPath>
          <clipPath id="clip7_284_31">
            <rect
              width="438.081"
              height="438.081"
              fill="white"
              transform="translate(2.00684 0.334717)"
            />
          </clipPath>
          <clipPath id="clip8_284_31">
            <rect
              width="438.081"
              height="438.081"
              fill="white"
              transform="translate(2.00684 0.334717)"
            />
          </clipPath>
        </defs>
      </svg>
    );
};

export default BrandLogo;
