import React from 'react';
import Menu from './Menu';


function Main() {
    return (
        <>
            <Menu />
            <div id="mArticle">
                <div className="inner_article">
                    <h2 id="kakaoBody" className="screen_out">
                        티스토리 관리센터 본문
                    </h2>
                    <h3 className="screen_out">블로그 관리센터 홈</h3>
                    <span className="info_rate_date">2023-06-24 13:35 기준</span>
                    <div className="blog_top">
                        <div className="box_blog box_visitor">
                            <dl className="count_visitor">
                                <dt>오늘 방문수</dt>
                                <dd>1</dd>
                            </dl>
                            <dl className="count_visitor">
                                <dt>어제 방문수</dt>
                                <dd>8</dd>
                            </dl>
                            <dl className="count_visitor">
                                <dt>누적 방문수</dt>
                                <dd>199</dd>
                            </dl>
                            <a className="btn_post" href="/manage/statistics/blog">
                                방문 통계 <span className="ico_blog ico_statistic" />
                            </a>
                        </div>
                        <div className="box_blog blog_graph dashboard_graph">
                            <div className="wrap_graph">
                                <div className="graph_comm">
                                    <div className="box_graph_type1">
                                        <div
                                            id="__AmCharts_React_2__"
                                            className="line_chart day"
                                            style={{ height: 244, overflow: "hidden", textAlign: "left" }}
                                        >
                                            <div
                                                className="amcharts-main-div"
                                                style={{ position: "relative" }}
                                            >
                                                <div
                                                    className="amcharts-chart-div"
                                                    style={{
                                                        overflow: "hidden",
                                                        position: "relative",
                                                        textAlign: "left",
                                                        width: 832,
                                                        height: 244,
                                                        padding: 0,
                                                        touchAction: "auto"
                                                    }}
                                                >
                                                    <svg
                                                        version="1.1"
                                                        style={{
                                                            position: "absolute",
                                                            width: 832,
                                                            height: 244,
                                                            top: "-0.5px",
                                                            left: "-0.5px"
                                                        }}
                                                    >
                                                        <desc>JavaScript chart by amCharts 3.21.14</desc>
                                                        <g>
                                                            <path
                                                                cs="100,100"
                                                                d="M0.5,0.5 L831.5,0.5 L831.5,243.5 L0.5,243.5 Z"
                                                                fill="#FFFFFF"
                                                                stroke="#000000"
                                                                fillOpacity={0}
                                                                strokeWidth={1}
                                                                strokeOpacity={0}
                                                                className="amcharts-bg"
                                                            />
                                                            <path
                                                                cs="100,100"
                                                                d="M0.5,0.5 L831.5,0.5 L831.5,218.5 L0.5,218.5 L0.5,0.5 Z"
                                                                fill="#FFFFFF"
                                                                stroke="#000000"
                                                                fillOpacity={0}
                                                                strokeWidth={1}
                                                                strokeOpacity={0}
                                                                className="amcharts-plot-area"
                                                                transform="translate(0,0)"
                                                            />
                                                        </g>
                                                        <g>
                                                            <g
                                                                className="amcharts-category-axis"
                                                                transform="translate(0,0)"
                                                            >
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M14.5,0.5 L14.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M69.5,0.5 L69.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M125.5,0.5 L125.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M180.5,0.5 L180.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M235.5,0.5 L235.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M291.5,0.5 L291.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M346.5,0.5 L346.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M402.5,0.5 L402.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M457.5,0.5 L457.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M512.5,0.5 L512.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M568.5,0.5 L568.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M623.5,0.5 L623.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M679.5,0.5 L679.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M734.5,0.5 L734.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M789.5,0.5 L789.5,5.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.3"
                                                                        stroke="#000000"
                                                                        transform="translate(0,218)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                </g>
                                                            </g>
                                                            <g
                                                                className="amcharts-value-axis value-axis-valueAxisAuto0_1687581308815"
                                                                transform="translate(0,0)"
                                                                visibility="visible"
                                                            >
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,218.5 L6.5,218.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        transform="translate(-6,0)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,218.5 L0.5,218.5 L831.5,218.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeDasharray={3}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        className="amcharts-axis-grid"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,174.5 L6.5,174.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        transform="translate(-6,0)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,174.5 L0.5,174.5 L831.5,174.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeDasharray={3}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        className="amcharts-axis-grid"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,131.5 L6.5,131.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        transform="translate(-6,0)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,131.5 L0.5,131.5 L831.5,131.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeDasharray={3}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        className="amcharts-axis-grid"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,87.5 L6.5,87.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        transform="translate(-6,0)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,87.5 L0.5,87.5 L831.5,87.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeDasharray={3}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        className="amcharts-axis-grid"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,44.5 L6.5,44.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        transform="translate(-6,0)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,44.5 L0.5,44.5 L831.5,44.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeDasharray={3}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        className="amcharts-axis-grid"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,0.5 L6.5,0.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        transform="translate(-6,0)"
                                                                        className="amcharts-axis-tick"
                                                                    />
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M0.5,0.5 L0.5,0.5 L831.5,0.5"
                                                                        fill="none"
                                                                        strokeWidth={1}
                                                                        strokeDasharray={3}
                                                                        strokeOpacity="0.1"
                                                                        stroke="#000000"
                                                                        className="amcharts-axis-grid"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g
                                                            transform="translate(0,0)"
                                                            clipPath="url(#AmChartsEl-196)"
                                                        >
                                                            <g visibility="hidden" />
                                                        </g>
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g>
                                                            <g
                                                                transform="translate(0,0)"
                                                                className="amcharts-graph-line amcharts-graph-lineChart"
                                                            >
                                                                <g />
                                                                <g clipPath="url(#AmChartsEl-198)">
                                                                    <path
                                                                        cs="100,100"
                                                                        d="M14.5,218.5 L42.5,218.5 L69.5,218.5 L97.5,174.9 L125.5,218.5 L152.5,218.5 L180.5,218.5 L208.5,218.5 L235.5,218.5 L263.5,218.5 L291.5,218.5 L319.5,174.9 L346.5,218.5 L374.5,218.5 L402.5,218.5 L429.5,218.5 L457.5,174.9 L485.5,218.5 L512.5,218.5 L540.5,218.5 L568.5,218.5 L596.5,196.7 L623.5,218.5 L651.5,174.9 L679.5,218.5 L706.5,218.5 L734.5,218.5 L762.5,218.5 L789.5,44.1 L817.5,196.7"
                                                                        fill="none"
                                                                        strokeWidth={3}
                                                                        strokeOpacity={1}
                                                                        stroke="#ff5544"
                                                                        strokeLinejoin="round"
                                                                        className="amcharts-graph-stroke"
                                                                    />
                                                                </g>
                                                                <clipPath id="AmChartsEl-198">
                                                                    <rect
                                                                        x={0}
                                                                        y={0}
                                                                        width={831}
                                                                        height={218}
                                                                        rx={0}
                                                                        ry={0}
                                                                        strokeWidth={0}
                                                                    />
                                                                </clipPath>
                                                                <g />
                                                            </g>
                                                        </g>
                                                        <g />
                                                        <g>
                                                            <path
                                                                cs="100,100"
                                                                d="M0.5,218.5 L831.5,218.5 L831.5,218.5"
                                                                fill="none"
                                                                strokeWidth={1}
                                                                strokeDasharray={3}
                                                                strokeOpacity="0.2"
                                                                stroke="#000000"
                                                                transform="translate(0,0)"
                                                                className="amcharts-axis-zero-grid-valueAxisAuto0_1687581308815 amcharts-axis-zero-grid"
                                                            />
                                                            <g className="amcharts-category-axis">
                                                                <path
                                                                    cs="100,100"
                                                                    d="M0.5,0.5 L831.5,0.5"
                                                                    fill="none"
                                                                    strokeWidth={1}
                                                                    strokeOpacity="0.3"
                                                                    stroke="#000000"
                                                                    transform="translate(0,218)"
                                                                    className="amcharts-axis-line"
                                                                />
                                                            </g>
                                                            <g className="amcharts-value-axis value-axis-valueAxisAuto0_1687581308815">
                                                                <path
                                                                    cs="100,100"
                                                                    d="M0.5,0.5 L0.5,218.5"
                                                                    fill="none"
                                                                    strokeWidth={1}
                                                                    strokeOpacity="0.1"
                                                                    stroke="#000000"
                                                                    transform="translate(0,0)"
                                                                    className="amcharts-axis-line"
                                                                    visibility="visible"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g
                                                                transform="translate(0,0)"
                                                                clipPath="url(#AmChartsEl-197)"
                                                                style={{ pointerEvents: "none" }}
                                                            >
                                                                <path
                                                                    cs="100,100"
                                                                    d="M0.5,0.5 L0.5,0.5 L0.5,218.5"
                                                                    fill="none"
                                                                    strokeWidth={1}
                                                                    strokeOpacity={1}
                                                                    stroke="#e6e6e6"
                                                                    className="amcharts-cursor-line amcharts-cursor-line-vertical"
                                                                    visibility="visible"
                                                                    transform="translate(817,0)"
                                                                />
                                                                <path
                                                                    cs="100,100"
                                                                    d="M0.5,0.5 L831.5,0.5 L831.5,0.5"
                                                                    fill="none"
                                                                    strokeWidth={1}
                                                                    stroke="#e6e6e6"
                                                                    className="amcharts-cursor-line amcharts-cursor-line-horizontal"
                                                                    visibility="hidden"
                                                                    transform="translate(0,3)"
                                                                />
                                                            </g>
                                                            <clipPath id="AmChartsEl-197">
                                                                <rect
                                                                    x={0}
                                                                    y={0}
                                                                    width={831}
                                                                    height={218}
                                                                    rx={0}
                                                                    ry={0}
                                                                    strokeWidth={0}
                                                                />
                                                            </clipPath>
                                                        </g>
                                                        <g />
                                                        <g>
                                                            <g
                                                                transform="translate(0,0)"
                                                                className="amcharts-graph-line amcharts-graph-lineChart"
                                                            >
                                                                <g
                                                                    transform="translate(14,218)"
                                                                    aria-label=" 2023-05-26T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(42,218)"
                                                                    aria-label=" 2023-05-27T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(69,218)"
                                                                    aria-label=" 2023-05-28T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(97,174)"
                                                                    aria-label=" 2023-05-29T00:00:00+09:00 2"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(125,218)"
                                                                    aria-label=" 2023-05-30T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(152,218)"
                                                                    aria-label=" 2023-05-31T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(180,218)"
                                                                    aria-label=" 2023-06-01T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(208,218)"
                                                                    aria-label=" 2023-06-02T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(235,218)"
                                                                    aria-label=" 2023-06-03T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(263,218)"
                                                                    aria-label=" 2023-06-04T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(291,218)"
                                                                    aria-label=" 2023-06-05T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(319,174)"
                                                                    aria-label=" 2023-06-06T00:00:00+09:00 2"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(346,218)"
                                                                    aria-label=" 2023-06-07T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(374,218)"
                                                                    aria-label=" 2023-06-08T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(402,218)"
                                                                    aria-label=" 2023-06-09T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(429,218)"
                                                                    aria-label=" 2023-06-10T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(457,174)"
                                                                    aria-label=" 2023-06-11T00:00:00+09:00 2"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(485,218)"
                                                                    aria-label=" 2023-06-12T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(512,218)"
                                                                    aria-label=" 2023-06-13T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(540,218)"
                                                                    aria-label=" 2023-06-14T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(568,218)"
                                                                    aria-label=" 2023-06-15T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(596,196)"
                                                                    aria-label=" 2023-06-16T00:00:00+09:00 1"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(623,218)"
                                                                    aria-label=" 2023-06-17T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(651,174)"
                                                                    aria-label=" 2023-06-18T00:00:00+09:00 2"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(679,218)"
                                                                    aria-label=" 2023-06-19T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(706,218)"
                                                                    aria-label=" 2023-06-20T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(734,218)"
                                                                    aria-label=" 2023-06-21T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(762,218)"
                                                                    aria-label=" 2023-06-22T00:00:00+09:00 0"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(789,44)"
                                                                    aria-label=" 2023-06-23T00:00:00+09:00 8"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-normal.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    transform="translate(817,196)"
                                                                    aria-label=" 2023-06-24T00:00:00+09:00 1"
                                                                    className="amcharts-graph-bullet"
                                                                >
                                                                    <image
                                                                        x={0}
                                                                        y={0}
                                                                        width={9}
                                                                        height={9}
                                                                        xlinkHref="//t1.daumcdn.net/tistory_admin/static/chart/lineChart-bullet-active.svg"
                                                                        transform="translate(-4,-4)"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g />
                                                        </g>
                                                        <g>
                                                            <g
                                                                className="amcharts-category-axis"
                                                                transform="translate(0,0)"
                                                                visibility="visible"
                                                            >
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(14,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-05-26T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(69,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-05-28T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(125,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-05-30T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(180,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-01T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(235,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-03T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(291,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-05T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(346,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-07T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(402,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-09T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(457,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-11T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(512,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-13T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(568,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-15T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(623,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-17T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(679,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-19T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(734,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-21T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    y={6}
                                                                    fill="#000000"
                                                                    fontFamily="Verdana"
                                                                    fontSize="11px"
                                                                    opacity={1}
                                                                    textAnchor="middle"
                                                                    transform="translate(789,235.5)"
                                                                    className="amcharts-axis-label"
                                                                >
                                                                    <tspan y={6} x={0}>
                                                                        2023-06-23T00:00:00+09:00
                                                                    </tspan>
                                                                </text>
                                                            </g>
                                                            <g
                                                                className="amcharts-value-axis value-axis-valueAxisAuto0_1687581308815"
                                                                transform="translate(0,0)"
                                                                visibility="visible"
                                                            />
                                                        </g>
                                                        <g />
                                                        <g transform="translate(0,0)">
                                                            <g
                                                                transform="translate(817,183)"
                                                                style={{ pointerEvents: "none" }}
                                                                visibility="visible"
                                                            >
                                                                <path
                                                                    cs="1000,1000"
                                                                    d="M-3.420201433256687,9.396926207859085 A10,10,0,1,1,3.420201433256687,9.396926207859085 A8,8,0,0,0,0,13.333333333333334 A8,8,0,0,0,-3.420201433256687,9.396926207859085"
                                                                    fill="#FFFFFF"
                                                                    stroke="#ff5544"
                                                                    strokeWidth={2}
                                                                    strokeOpacity={0}
                                                                    fillOpacity={0}
                                                                    className="amcharts-balloon-bg amcharts-balloon-bg-lineChart"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g />
                                                        <g />
                                                        <clipPath id="AmChartsEl-196">
                                                            <rect
                                                                x={-1}
                                                                y={-1}
                                                                width={833}
                                                                height={220}
                                                                rx={0}
                                                                ry={0}
                                                                strokeWidth={0}
                                                            />
                                                        </clipPath>
                                                    </svg>
                                                    <a
                                                        href="http://www.amcharts.com"
                                                        title="JavaScript charts"
                                                        style={{
                                                            position: "absolute",
                                                            textDecoration: "none",
                                                            color: "rgb(0, 0, 0)",
                                                            fontFamily: "Verdana",
                                                            fontSize: 11,
                                                            opacity: "0.7",
                                                            display: "block",
                                                            left: 5,
                                                            top: 5
                                                        }}
                                                    >
                                                        JS chart by amCharts
                                                    </a>
                                                    <div
                                                        className="amcharts-balloon-div amcharts-balloon-div-lineChart"
                                                        style={{
                                                            pointerEvents: "none",
                                                            position: "absolute",
                                                            left: 817,
                                                            top: "183.867px"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                textAlign: "center",
                                                                maxWidth: 220,
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                fontFamily: "Verdana"
                                                            }}
                                                        >
                                                            <div className="layer_popup">
                                                                <div className="inner_popup inner_popup_type1">
                                                                    <strong className="tit_popup">
                                                                        <em>일간</em>{" "}
                                                                        <span className="inner_g">방문수</span>
                                                                    </strong>
                                                                    <div className="current_num">
                                                                        <span className="num_graph">1</span>
                                                                        <span className="ico_blog ico_down" />
                                                                        <span className="num_g num_down">7</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap_date">
                                        <div className="graph_date">
                                            <div className="inner_g">
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month">05월</span>
                                                    <span className="num_day">26</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">27</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">28</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">29</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">30</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">31</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month">06월</span>
                                                    <span className="num_day">1</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">2</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">3</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">4</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">5</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">6</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">7</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">8</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">9</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">10</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">11</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">12</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">13</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">14</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">15</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">16</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">17</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">18</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">19</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">20</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">21</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">22</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day">23</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                                <div className="data_day fst_day" style={{ width: "27.7px" }}>
                                                    <span className="num_month" />
                                                    <span className="num_day active">오늘</span>
                                                    <span className="ir_pm">일</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="tit_cont">최근 7일 통계</h4>
                        <div className="wrap_box wrap_box_type1">
                            <div className="box_blog_type1 box_popular">
                                <strong className="tit_box">인기글</strong>
                                <p className="txt_none">인기 글이 없습니다.</p>{" "}
                                <div className="wrap_tbl">
                                    <table className="tbl_tistory">
                                        <caption className="ir_caption">인기글</caption>
                                        <colgroup>
                                            <col style={{ width: 20 }} />
                                            <col style={{ width: 514 }} />
                                        </colgroup>
                                        <tbody />
                                    </table>
                                </div>
                            </div>
                            <div className="box_blog_type1 box_log">
                                <strong className="tit_box">유입 채널</strong>
                                <dl className="list_statistic">
                                    <dt>검색</dt>
                                    <dd>
                                        0.0%
                                        <svg
                                            className="rc-progress-line bar_data"
                                            viewBox="0 0 100 1.3"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                className="rc-progress-line-trail"
                                                d="M 0.65,0.65
     L 99.35,0.65"
                                                strokeLinecap="round"
                                                stroke="#eeeeee"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                            />
                                            <path
                                                className="rc-progress-line-path"
                                                d="M 0.65,0.65
     L 99.35,0.65"
                                                strokeLinecap="round"
                                                stroke="#FF5544"
                                                strokeWidth="1.3"
                                                fillOpacity={0}
                                                style={{
                                                    strokeDasharray: "0px, 100px",
                                                    strokeDashoffset: 0,
                                                    transition:
                                                        "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                                                }}
                                            />
                                        </svg>
                                    </dd>
                                </dl>
                                <dl className="list_statistic">
                                    <dt>SNS</dt>
                                    <dd>
                                        0.0%
                                        <svg
                                            className="rc-progress-line bar_data"
                                            viewBox="0 0 100 1.3"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                className="rc-progress-line-trail"
                                                d="M 0.65,0.65
     L 99.35,0.65"
                                                strokeLinecap="round"
                                                stroke="#eeeeee"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                            />
                                            <path
                                                className="rc-progress-line-path"
                                                d="M 0.65,0.65
     L 99.35,0.65"
                                                strokeLinecap="round"
                                                stroke="#00C3A9"
                                                strokeWidth="1.3"
                                                fillOpacity={0}
                                                style={{
                                                    strokeDasharray: "0px, 100px",
                                                    strokeDashoffset: 0,
                                                    transition:
                                                        "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                                                }}
                                            />
                                        </svg>
                                    </dd>
                                </dl>
                                <dl className="list_statistic">
                                    <dt>기타</dt>
                                    <dd>
                                        100.0%
                                        <svg
                                            className="rc-progress-line bar_data"
                                            viewBox="0 0 100 1.3"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                className="rc-progress-line-trail"
                                                d="M 0.65,0.65
     L 99.35,0.65"
                                                strokeLinecap="round"
                                                stroke="#eeeeee"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                            />
                                            <path
                                                className="rc-progress-line-path"
                                                d="M 0.65,0.65
     L 99.35,0.65"
                                                strokeLinecap="round"
                                                stroke="#9BA5AF"
                                                strokeWidth="1.3"
                                                fillOpacity={0}
                                                style={{
                                                    strokeDasharray: "100px, 100px",
                                                    strokeDashoffset: 0,
                                                    transition:
                                                        "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                                                }}
                                            />
                                        </svg>
                                    </dd>
                                </dl>
                            </div>
                            <div className="box_blog_type1 box_keyword">
                                <strong className="tit_box">유입 키워드</strong>
                                <p className="txt_none">유입된 키워드가 없습니다.</p>
                            </div>
                        </div>
                        <div className="post_main">
                            <h4 className="tit_cont">최근 글</h4>
                            <ul className="list_top">
                                <li>
                                    <a
                                        href="https://uyoungse.tistory.com/35"
                                        target="_blank"
                                        className="link_post link_post_type2"
                                    >
                                        <div className="wrap_thumb">
                                            <img
                                                src="https://img1.daumcdn.net/thumb/C217x122/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcis7nk%2Fbtr8Xygm5Vd%2FXt8UfGPnCnlVRrIYOjzbZ1%2Fimg.png"
                                                width={217}
                                                height={126}
                                                className="thumb_img"
                                                alt=""
                                            />
                                        </div>
                                        <div className="txt_post">
                                            <strong className="txt_vellip tit_top">
                                                [4주차] React 간단한 실습 _ty
                                            </strong>
                                        </div>
                                    </a>
                                    <div className="wrap_writer">
                                        <span className="txt_writer">댓글 0</span>
                                        <span className="txt_writer">공감 0</span>
                                        <a
                                            href="/manage/statistics/entry/35"
                                            target="_blank"
                                            className="btn_post"
                                        >
                                            통계
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="https://uyoungse.tistory.com/34"
                                        target="_blank"
                                        className="link_post"
                                    >
                                        <strong className="txt_vellip tit_top">
                                            [4회차] Spring Boot 환경에서 React 연동_sy
                                        </strong>
                                        <p className="txt_vellip txt_top">
                                            1. pc에 node.js 설치 2. 인텔리제이나 vscode로 터미널을 연다. 3.
                                            기존 스프링 부트로 생성한 프로젝트 내 react 패키지를 설치할 폴더
                                            위치로 이동 &gt; cd src/main 4. 명령어를 입력해서 react-app 설치
                                            &gt; npx create-react-app [생성하고 싶은 폴더 이름] ex) npx
                                            create-react-app front 5. 설치가 정상적으로 완료 된 경우 폴더
                                            구조 6. 리액트 앱 실행 터미널에서 npm start 명령어 실행 7. Boot
                                            프로젝트와 연동을 위해 p..
                                        </p>
                                    </a>
                                    <div className="wrap_writer">
                                        <span className="txt_writer">댓글 0</span>
                                        <span className="txt_writer">공감 0</span>
                                        <a
                                            href="/manage/statistics/entry/34"
                                            target="_blank"
                                            className="btn_post"
                                        >
                                            통계
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="https://uyoungse.tistory.com/33"
                                        target="_blank"
                                        className="link_post"
                                    >
                                        <strong className="txt_vellip tit_top">
                                            [4주차] React 설정 및 jsx문법_jh
                                        </strong>
                                        <p className="txt_vellip txt_top">
                                            1. react 시작 접속 : https://codepen.io/pen/ Settings &gt; JS
                                            &gt; JavaScript Preprocessor : Babel &gt; Add Packages : React ,
                                            React-DOM 추가 &gt; Close Babel: es6 &gt; es 5 로 변환을 위해
                                            사용 웹사이트 만들때 브라우저 호환성때문에 사용 es 6 : 최신
                                            브라우저 지원 es 5 : 구 브라우저 , IE 등 지원 X JSX(JavaScript
                                            eXtension JavaScript) : HTML 문법을 JavaScript 코드 내부에 쓴 것
                                            *사용 시 주의사항 1) 속성은 항상 쌍..
                                        </p>
                                    </a>
                                    <div className="wrap_writer">
                                        <span className="txt_writer">댓글 0</span>
                                        <span className="txt_writer">공감 0</span>
                                        <a
                                            href="/manage/statistics/entry/33"
                                            target="_blank"
                                            className="btn_post"
                                        >
                                            통계
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="https://uyoungse.tistory.com/32"
                                        target="_blank"
                                        className="link_post"
                                    >
                                        <strong className="txt_vellip tit_top">
                                            [4주차] React state 생성, 변경_js
                                        </strong>
                                        <p className="txt_vellip txt_top">
                                            state 변수 대신 쓰는 데이터 저장 공간 useState()를 이용해
                                            만들어야 함 문자, 숫자, array, object 모두 저장 가능 state에
                                            데이터 저장하는 이유 React를 웹앱처럼 동작하게 만듦 state
                                            데이터는 변경되면 HTML이 자동으로 재렌더링됨 -&gt; 새로고침
                                            없어도 HTML을 바꿔줌 자주 변경되거나 중요한 데이터는 판단하여
                                            변수 말고 state로 저장해 쓰기 state 생성 1. {"{"} useState {"}"}{" "}
                                            상단에 첨부 import {"{"} useState {"}"} from 'react';..
                                        </p>
                                    </a>
                                    <div className="wrap_writer">
                                        <span className="txt_writer">댓글 0</span>
                                        <span className="txt_writer">공감 0</span>
                                        <a
                                            href="/manage/statistics/entry/32"
                                            target="_blank"
                                            className="btn_post"
                                        >
                                            통계
                                        </a>
                                    </div>
                                </li>
                            </ul>{" "}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Main;