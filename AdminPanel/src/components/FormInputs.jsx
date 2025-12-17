import { useRef, useState } from 'react';
import Inputs, { Selects, TextAreas } from './Inputs';
import { cn } from '../Utils/cn';
import { useProjectData } from '../hooks/useProjectData';

const FormInputs = () => {
    const ImageRef = useRef(null);
    const [imgUrl, setImgUrl] = useState('');
    const [formData, setFormData] = useState({});

    console.log('Froom data:', formData);

    const { reFetch } = useProjectData();

    const handleChange = (e) => {
        if (e.target.name === 'features' || e.target.name === 'techUsed') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
                    .split('---')
                    .map((item) => item.trim())
                    .filter((item) => item !== ''),
            });
        } else {
            if (
                e.target.value === 'N/A' ||
                e.target.value.toLowerCase() === 'n/a'
            ) {
                setFormData({
                    ...formData,
                    [e.target.name]: '',
                });
            } else {
                setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                });
            }
        }

        setImgUrl(ImageRef.current.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(import.meta.env.VITE_PROJECT_FETCH_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert('✅ New Project Created Successful!');
                reFetch();
                setFormData('');
                setImgUrl('');
                e.target.reset();
            }
        } catch (error) {
            alert('❌ Post Method Error:', error);
            console.log('Post Method ERROR:', error);
        }
    };

    return (
        <section className="bg-black/15 border border-white/20 backdrop-blur-[50px] shadow-md sm:w-[700px] w-[95%] lg:h-[90vh] rounded-[20px] sm:p-8 p-5 lg:overflow-y-auto mt-5 sm:mt-0">
            {/* <h1 className="font-semibold text-4xl">Create New Project</h1> */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:gap-5 gap-2"
            >
                <div
                    className={cn(
                        'w-full aspect-[2/1] flex items-center justify-center shadow',
                        imgUrl
                            ? 'border-0'
                            : 'border border-white/20 border-dashed'
                    )}
                >
                    {imgUrl ? (
                        <img src={!imgUrl ? null : imgUrl} className="w-full" />
                    ) : (
                        <h2 className="font-medium text-gray-500 uppercase">
                            Project image
                        </h2>
                    )}
                </div>
                <Inputs
                    ref={ImageRef}
                    type="text"
                    placeholder={'Image Link*'}
                    name={'image'}
                    onChange={handleChange}
                />
                <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:gap-5 gap-2">
                    <Selects
                        options={['frontend', 'fullstack']}
                        name={'category'}
                        onChange={handleChange}
                    />
                    <Inputs
                        type="text"
                        placeholder={'Project Type*'}
                        name={'projectType'}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:gap-5 gap-2">
                    <Inputs
                        type="text"
                        placeholder={'Date*'}
                        name={'date'}
                        onChange={handleChange}
                    />
                    <Inputs
                        type="text"
                        placeholder={'Client*'}
                        name={'client'}
                        onChange={handleChange}
                    />
                </div>
                <Inputs
                    type="text"
                    placeholder={'Created By*'}
                    name={'createdBy'}
                    onChange={handleChange}
                />
                <Inputs
                    type="text"
                    placeholder={'Title*'}
                    name={'title'}
                    onChange={handleChange}
                />
                <Inputs
                    type="text"
                    placeholder={'Preview URL*'}
                    name={'previewURL'}
                    onChange={handleChange}
                />
                <Inputs
                    type="text"
                    placeholder={'Source Code URL*'}
                    name={'sourceCodeUrl'}
                    onChange={handleChange}
                />

                <TextAreas
                    placeholder={"Features: use '---' for space/new line"}
                    name={'features'}
                    onChange={handleChange}
                />
                <TextAreas
                    placeholder={
                        "Technology Used: use '---' for space/new line"
                    }
                    name={'techUsed'}
                    onChange={handleChange}
                />
                <TextAreas
                    placeholder={'Description'}
                    name={'description'}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-primary text-gray-900 font-semibold sm:py-3 py-2  sm:rounded-full rounded-md uppercase  hover:shadow-lg hover:shadow-primary/30"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default FormInputs;
