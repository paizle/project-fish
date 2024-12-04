import './StyleGuide.scss'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AdminSubMenu from '../partials/AdminSubMenu'

export default function StyleGuide() {
    
    return (
        <AuthenticatedLayout
            header={
                <AdminSubMenu />
            }
        >
            <Head title="Project: FISH" />

            <div className="StyleGuide py-12">
                <div className="box mx-8">
                    <h1>Style Guide</h1>

                    <section className="block">
                        <h3>Font</h3>
                        Poppins
                    </section>

                    <section className="colors">

                        <h3>Colors</h3>

                        <div className="color">
                            headers, tabs, and accents - #1A2B48
                            <span className="color-box" style={{backgroundColor: 'var(--headers-tabs-accents)'}}></span>
                        </div>
                        <div className="color">
                            highlights and icons: - #70B9B0
                            <span className="color-box" style={{backgroundColor: 'var(--highlights-icons)'}}></span>
                        </div>
                        <div className="color">
                            background - #FFFFFF
                            <span className="color-box" style={{backgroundColor: 'var(--background)'}}></span>
                        </div>
                        <div className="color">
                            card backgrounds and dividers - #F4F4F4
                            <span className="color-box" style={{backgroundColor: 'var(--card-backgrounds-dividers)'}}></span>
                        </div>
                        <div className="color">
                            text or secondary elements- #7D8799
                            <span className="color-box" style={{backgroundColor: 'var(--text-secondary-elements)'}}></span>
                        </div>
                        <div className="color">
                            hover effects - #34B8D9
                            <span className="color-box" style={{backgroundColor: 'var(--hover-effects)'}}></span>
                        </div>
                        <div className="color">
                            highlight actionable items - #F4D03F
                            <span className="color-box" style={{backgroundColor: 'var(--highlight-actionable)'}}></span>
                        </div>
                    </section>

                    <section>
                        <h3>Icon sets:</h3>
                        <dl>
                            <dt>Font Awesome:</dt>
                            <dd><a target="_blank" href="https://fontawesome.com/v6/search?o=r&m=free">https://fontawesome.com/v6/search?o=r&m=free</a></dd>
                            <dt>Hero Icons:</dt>
                            <dd><a target="_blank" href="https://heroicons.com/">https://heroicons.com</a></dd>
                            <dt>Feather Icons:</dt>
                            <dd><a target="_blank" href="https://feathericons.com/">https://feathericons.com/</a></dd>
                            <dt>Tabler Icons:</dt>
                            <dd><a href="https://tabler.io/icons">https://tabler.io/icons</a></dd>
                            <dt>Bootstrap Icons</dt>
                            <dd><a href="https://icons.getbootstrap.com/">https://icons.getbootstrap.com/</a></dd>
                        </dl>
                    </section>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
