/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import Icon from "awesome-react-icons";
import { useNavigate  } from "react-router-dom";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
    /*const history = useHistory();
    const location = useLocation();*/
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <React.Fragment>
            {/* Sidebar Overlay */}
            <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
                    isSidebarOpen ? "block" : "hidden"
                }`}
            />

            <div className="absolute right-0">
                <a href="https://github.com/abhijithvijayan/react-minimal-side-navigation">
                    View on GitHub
                </a>
            </div>

            <div>
                <button
                    className="btn-menu"
                    onClick={(): void => setIsSidebarOpen(true)}
                    type="button"
                >
                    <Icon name="burger" className="w-6 h-6" />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                    isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                }`}
            >
                <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            우영세 Tistory
          </span>
                </div>

                {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
                <Navigation
                    activeItemId={navigate.name}
                    onSelect={({ itemId }) => {
                        navigate(itemId);
                    }}
                    items={[
                        {
                            title: "블로그관리 홈",
                            itemId: "/home",
                            // Optional
                            elemBefore: () => <Icon name="coffee" />
                        },
                        {
                            title: "콘텐츠",
                            itemId: "/contents",
                            elemBefore: () => <Icon name="user" />,
                            subNav: [
                                {
                                    title: "글 관리",
                                    itemId: "/contents/board",
                                    // Optional
                                    elemBefore: () => <Icon name="cloud-snow" />
                                },
                                {
                                    title: "페이지 관리",
                                    itemId: "/contents/page",
                                    // Optional
                                    elemBefore: () => <Icon name="cloud-snow" />
                                },
                                {
                                    title: "카테고리 관리",
                                    itemId: "/contents/category",
                                    // Optional
                                    elemBefore: () => <Icon name="cloud-snow" />
                                },
                                {
                                    title: "공지 관리",
                                    itemId: "/contents/notice",
                                    // Optional
                                    elemBefore: () => <Icon name="cloud-snow" />
                                },
                                {
                                    title: "서식 관리",
                                    itemId: "/contents/template",
                                    // Optional
                                    elemBefore: () => <Icon name="cloud-snow" />
                                },
                                {
                                    title: "설정 관리",
                                    itemId: "/contents/settings",
                                    // Optional
                                    elemBefore: () => <Icon name="cloud-snow" />
                                },
                            ]
                        }
                    ]}
                />

                <div className="absolute bottom-0 w-full my-8">
                    <Navigation
                        activeItemId={navigate.name}
                        items={[
                            {
                                title: "필요하려나?",
                                itemId: "/settings",
                                elemBefore: () => <Icon name="activity" />
                            }
                        ]}
                        onSelect={({ itemId }) => {
                            navigate(itemId);
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};
