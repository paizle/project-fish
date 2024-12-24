import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import AdminSubMenu from '../partials/AdminSubMenu'
import './StyleGuide.scss'

export default function StyleGuide() {
    return (
        <AuthenticatedLayout header={<AdminSubMenu />}>
            <Head title="Project: FISH" />

            <div className="StyleGuide">
                <div className="box">
                    <h1>Style Guide</h1>

                    <section className="block">
                        <h3>Font</h3>
                        Poppins
                    </section>

                    <section className="colors">
                        <h3>Colors</h3>

                        <div className="color">
                            headers, tabs, and accents - #1A2B48
                            <span
                                className="color-box"
                                style={{
                                    backgroundColor: 'var(--heading-color)',
                                }}
                            ></span>
                        </div>
                        <div className="color">
                            highlights and icons: - #70B9B0
                            <span
                                className="color-box"
                                style={{ backgroundColor: 'var(--icon-color)' }}
                            ></span>
                        </div>
                        <div className="color">
                            background - #FFFFFF
                            <span
                                className="color-box"
                                style={{ backgroundColor: 'var(--background)' }}
                            ></span>
                        </div>
                        <div className="color">
                            card backgrounds and dividers - #F4F4F4
                            <span
                                className="color-box"
                                style={{
                                    backgroundColor:
                                        'var(--card-background-color)',
                                }}
                            ></span>
                        </div>
                        <div className="color">
                            text or secondary elements- #7D8799
                            <span
                                className="color-box"
                                style={{ backgroundColor: 'var(--text-color)' }}
                            ></span>
                        </div>
                        <div className="color">
                            hover effects - #34B8D9
                            <span
                                className="color-box"
                                style={{
                                    backgroundColor: 'var(--hover-color)',
                                }}
                            ></span>
                        </div>
                        <div className="color">
                            highlight actionable items - #F4D03F
                            <span
                                className="color-box"
                                style={{
                                    backgroundColor: 'var(--actionable-color)',
                                }}
                            ></span>
                        </div>
                    </section>

                    <section>
                        <h3>Icon sets:</h3>
                        <dl>
                            <dt>Hero Icons:</dt>
                            <dd>
                                <a
                                    target="_blank"
                                    href="https://heroicons.com/"
                                >
                                    https://heroicons.com
                                </a>
                            </dd>
                        </dl>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
