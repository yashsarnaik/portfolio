'use client';

import React from 'react';
import styled from 'styled-components';

export const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-7xl font-bold text-center text-gray-100 mb-12 py-8">Experience</h2>
      <StyledWrapper>
        <article className="card">
          <section className="card__hero">
            <header className="card__hero-header">
              Sep 2024-present
              <div className="card__icon">
                <svg height={20} width={20} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
            </header>
            <p className="card__job-title">AI/ML Developer👨‍💻</p>
            <p className="card__job-description">
            I'm working as an AI/ML developer creating some amazing Gen-ai apps using the state of the art LLMs and embedding models and creating APIs using apps like Flask and Fast-API. 
            And creating data-driven business solutions using Postgres and Firebase.
            With my Knowledge in AI/ML and Deep learning I'm always up to contribute to the community.
            </p>
          </section>
          <footer className="card__footer">
            <div className="card__job-summary">
              <div className="card__job-icon">
                <img src="/onpoint.jpeg" alt="onPoint Software Services Logo" height={40} width={40} />
              </div>
              <div className="card__job">
                <p className="card__job-title">
                  onPoint Software Services <br />
                </p>
              </div>
            </div>
            <a href="https://www.onpointsoft.com" className="card__btn" target="_blank" rel="noopener noreferrer">View</a>
          </footer>
        </article>
      </StyledWrapper>
    </section>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  .card {
    width: min(350px, 100%);
    background-color: #fefefe;
    border-radius: 1rem;
    padding: 1rem;
    color: #141417;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card__hero {
    background-color: #fef4e2;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 1.5rem;
    font-size: 0.875rem;
  }

  .card__hero .card__job-title {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Roboto Mono', monospace;
  }

  .card__hero .card__job-description {
    font-size: 1rem;
    color: #555;
  }

  .card__hero-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
  }

  .card__footer {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    padding: 0.75rem;
    row-gap: 1rem;
    font-weight: 700;
    font-size: 0.875rem;
  }

  @media (min-width: 600px) {
    .card__footer {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }

  .card__job-summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
  }

  .card__btn {
    width: 100%;
    font-weight: 400;
    border: none;
    display: block;
    cursor: pointer;
    text-align: center;
    padding: 0.5rem 1.25rem;
    border-radius: 1rem;
    background-color: #141417;
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .card__btn:hover {
    background-color: #101010;
  }

  @media (min-width: 600px) {
    .card__btn {
      width: max-content;
    }
  }
`;

export default Experience;